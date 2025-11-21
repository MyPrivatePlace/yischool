/* global VOCAB_DATA */
(function (global) {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  function pad(n){ return n < 10 ? '0'+n : ''+n }

	// 把任意可能的字段名统一到 word / py / def / img / lesson
  function normalizeWords(words){
	 return (words || []).map(w => ({
		word:   w.word   ?? w.label   ?? w.hanzi   ?? w.term   ?? w.text   ?? '',
		py:     w.py     ?? w.pinyin  ?? '',
		def:    w.def    ?? w.meaning ?? w.definition ?? '',
		img:    w.img    ?? w.image   ?? '',
		lesson: Number(w.lesson ?? w.unit ?? w.lsn ?? 0)
	 }));
}
  function asLessonList(lessons, words){
    // 兼容两种形式：[{id,title}] 或 [1,2,3]
    if (Array.isArray(lessons) && lessons.length) {
      if (typeof lessons[0] === 'object') return lessons;
      // 从 [1,2,3] 转成对象数组
      return lessons.map(id => ({ id, title: '' }));
    }
    // fallback：从 words 提取
    const uniq = Array.from(new Set(words.map(w => w.lesson))).sort((a,b)=>a-b);
    return uniq.map(id => ({ id, title: '' }));
  }

  /* ==== 自动配图工具（Wikimedia FilePath） ==== */
  const IMG = (name)=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}`;
  
  /* ==== 可选：图片映射 + 启发式（先给一部分；不命中会回退到拼音/释义） ==== */
  const IMAGE_MAP = {
    "筷子":"Chopsticks.jpg","勺子":"Spoon.jpg","盘子":"Empty Plate (6062625548).jpg","刀叉":"Fork knife.jpg","汤匙":"Soup spoon.jpg",
    "汤圆":"Tangyuan.jpg","馄饨":"FOOD Wonton Soup.jpg","饺子":"Jiaozi.jpg","粽子":"Zongzi.jpg","豆花":"Douhua.jpg","麻花":"Fried dough twist.jpg",
    "米粉":"Rice noodles.jpg","面条":"Chinese noodles.jpg","担担面":"Dandan noodles.jpg","肉夹馍":"Roujiamo.jpg",
    "牛奶":"Milk in glass.jpg","鸡蛋":"Chicken eggs.jpg","苹果":"Red apple.jpg","香蕉":"Bananas.jpg","葡萄":"Red grapes.jpg","西瓜":"Watermelon.jpg","草莓":"Strawberries.jpg",
    "厨房":"Modern kitchen interior.jpg","父母":"Happy family parents with child.jpg","祖父":"Elderly man smiling portrait.jpg","微笑":"Smiling face closeup.jpg",
    "元宵节":"Lantern Festival in China.jpg","春节":"Chinese New Year decorations.jpg","中秋节":"Mid-Autumn Festival lanterns.jpg","端午节":"Dragon boat race.jpg"
  };

  /* ==== 启发式规则 ==== */
  function heuristicImage(word){
    if(/面$/.test(word)) return "Chinese noodles.jpg";
    if(/汤$/.test(word)) return "Chinese soup.jpg";
    if(/饭$/.test(word)) return "Bowl of rice.jpg";
    if(/茶$/.test(word)) return "Green tea in cup.jpg";
    if(/果$/.test(word)) return "Fruit assortment.jpg";
    if(/书$/.test(word)) return "Stack of books.jpg";
    if(/鱼$/.test(word)) return "Cooked fish dish.jpg";
    if(/肉$/.test(word)) return "Cooked meat dish.jpg";
    return null;
  }

  /* ==== 自动匹配逻辑 ==== */
  function suggestImage(word){
    if(IMAGE_MAP[word]) return IMAGE_MAP[word];
    const simple = word.replace(/[的地得]/g,"").replace(/子$/,"");
    if(IMAGE_MAP[simple]) return IMAGE_MAP[simple];
    return heuristicImage(word);
  }

  /* ==== 自动填充未指定图片的词汇 ==== */
  function autoFillImages(targetList){
    (targetList || []).forEach(v=>{
      if(!v.img){
        const f = suggestImage(v.word);
        if(f) v.img = IMG(f);
      }
    });
  }

  const VocabMatch = {
    state: {
      first: null, lock: false, steps: 0, matched: 0,
      totalPairs: 0, timerId: null, startAt: 0,
      preferImage: 'auto', showBackLesson: 'on',
      lessonList: [],  // [{id,title}]
    },

    init(data) {
	  this.data = data || { title:'配对游戏', lessons:[], words:[] };
	  this.data.words = normalizeWords(this.data.words);
	  
      this.state.lessonList = asLessonList(this.data.lessons, this.data.words);
      this.buildLessonMultiSelect();
      this.bindControls();
    },

    // ✅ 获取课次标题（无则返回空串）
    getLessonTitle(lessonId){
      const item = this.state.lessonList.find(x => x.id === lessonId);
      return item ? (item.title || '') : '';
    },

    /* === 新增：工具函数，获取所有课次ID === */
    getAllLessonIds() {
      return this.state.lessonList.map(x => x.id);
    },
    /* === 修改：buildLessonMultiSelect，加入“全部课次”并绑定逻辑 === */
    buildLessonMultiSelect() {
      const panel = document.querySelector('#lesson-panel');
      panel.innerHTML = '';

      // 1) “全部课次”行（默认选中）
      const allRow = document.createElement('div');
      allRow.className = 'row';
      allRow.innerHTML = `
        <label style="display:flex;align-items:center;gap:8px;">
          <input type="checkbox" value="__ALL__" checked />
          <span>全部课次</span>
        </label>
      `;
      panel.appendChild(allRow);

      // 2) 具体课次（默认不选）
      this.state.lessonList.forEach(ls => {
        const text = `第${ls.id}课${ls.title ? ' ' + ls.title : ''}`;
        const row = document.createElement('div');
        row.className = 'row';
        row.innerHTML = `
          <label style="display:flex;align-items:center;gap:8px;">
            <input type="checkbox" value="${ls.id}" />
            <span>${text}</span>
          </label>
        `;
        panel.appendChild(row);
      });

      // 开合
      const box = document.querySelector('#lesson-ms');
      document.querySelector('#lesson-btn')
        .addEventListener('click', () => box.classList.toggle('open'));
      document.addEventListener('click', (e) => {
        if (!box.contains(e.target)) box.classList.remove('open');
      });

      // 选择逻辑：
      const allBox = panel.querySelector('input[value="__ALL__"]');
      const lessonBoxes = Array.from(panel.querySelectorAll('input[type="checkbox"]:not([value="__ALL__"])'));

      // 勾选“全部课次”：取消其他
      allBox.addEventListener('change', () => {
        if (allBox.checked) {
          lessonBoxes.forEach(cb => cb.checked = false);
        }
      });

      // 勾选任意具体课次：自动取消“全部课次”
      lessonBoxes.forEach(cb => {
        cb.addEventListener('change', () => {
          if (cb.checked) {
            allBox.checked = false;
          } else {
            // 若所有具体课次都不选，自动回到“全部课次”
            const anyChecked = lessonBoxes.some(x => x.checked);
            if (!anyChecked) allBox.checked = true;
          }
        });
      });
	  
	  const updateButtonText = () => {
		  const box = document.querySelector('#lesson-panel');
		  const allBox = box.querySelector('input[value="__ALL__"]');
		  const lessonBoxes = Array.from(box.querySelectorAll('input[type="checkbox"]:not([value="__ALL__"])'));
		  let text = '全部课次';
		  if (!allBox.checked) {
			const ids = lessonBoxes.filter(cb => cb.checked).map(cb => parseInt(cb.value,10));
			if (ids.length) text = `已选 ${ids.length} 课`;
		  }
		  document.querySelector('#lesson-btn').textContent = text + ' ▾';
		};
	  panel.addEventListener('change', updateButtonText);
	  updateButtonText();

    },

    bindControls() {
      $('#start-btn').addEventListener('click', () => this.startGame());
      $('#time').textContent = '00:00';
      $('#steps').textContent = '0';
      $('#matched').textContent = '0';
      $('#total').textContent = '0';

      this.state.preferImage = ($('#prefer-image')?.value) || 'auto';
      $('#prefer-image')?.addEventListener('change', (e)=>{
        this.state.preferImage = e.target.value;
      });

      // ✅ 新增：背面是否显示课次
      this.state.showBackLesson = ($('#show-back-lesson')?.value) || 'on';
      $('#show-back-lesson')?.addEventListener('change', (e)=>{
        this.state.showBackLesson = e.target.value;
      });
    },

    /* === 修改：getSelectedLessons，支持“全部课次”逻辑 === */
    getSelectedLessons() {
      const panel = document.querySelector('#lesson-panel');
      const allBox = panel.querySelector('input[value="__ALL__"]');
      const lessonBoxes = Array.from(panel.querySelectorAll('input[type="checkbox"]:not([value="__ALL__"])'));

      if (allBox.checked) {
        return this.getAllLessonIds();
      }
      const ids = lessonBoxes.filter(cb => cb.checked).map(cb => parseInt(cb.value, 10));
      return ids.length ? ids : this.getAllLessonIds();
    },

    /* === 新增：渲染“本局词汇表” === */
    renderVocabList(words) {
      const list = document.querySelector('#vocab-list');
      if (!list) return;

      // 生成一个简易表格
      const rows = words
        .slice() // 不修改原数组
        .sort((a,b) => a.lesson - b.lesson)
        .map(w => {
          const title = this.getLessonTitle(w.lesson);
          const lessonText = `第${w.lesson}课${title ? ' ' + this.escapeHTML(title) : ''}`;
          const word = this.escapeHTML(w.word || '');
          const py = this.escapeHTML(w.py || '');
          const def= this.escapeHTML(w.def || '');
          return `
            <tr>
              <td>${lessonText}</td>
              <td>${word}</td>
              <td>${py}</td>
              <td>${def}</td>
            </tr>
          `;
        }).join('');

      list.innerHTML = `
        <table class="table table-sm table-striped table-bordered" style="background:rgba(255,255,255,.03);color:inherit">
          <thead>
            <tr>
              <th style="white-space:nowrap">课次</th>
              <th>词语</th>
              <th>拼音</th>
              <th>释义</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      `;
    },

    startGame() {
      if (this.state.timerId) clearInterval(this.state.timerId);
      this.state.steps = 0; this.state.matched = 0; this.state.first = null; this.state.lock=false;

      const lessons = this.getSelectedLessons();
      const all = this.data.words.filter(w => lessons.includes(w.lesson));

      const wantPairs = Math.max(2, Math.min(parseInt($('#pair-count').value, 10) || 12, 30));
      const shuffled = all.slice().sort(()=>Math.random()-0.5);
      const picked = shuffled.slice(0, Math.min(wantPairs, shuffled.length));

      // 生成两张卡：A：背面（默认展示，写课次徽章）  B：内容面（图片或释义）
      const cards = [];
      picked.forEach((w,idx) => {
        const pairId = `p${Date.now()}_${idx}`;

      // === A：词语卡 ===
      const wordLabel = (w.word || w.label || w.hanzi || w.term || w.text || '').trim();
      const wordSub   = (w.py   || w.pinyin || '').trim();

      cards.push({
        pairId,
        kind: 'word',
        label: wordLabel,
        sub: wordSub,
        lesson: w.lesson,
        lessonTitle: this.getLessonTitle(w.lesson)
      });

        // B：内容面（图片或释义）
      // 修正：词语文本用word
        const theDef    = (w.def  || w.meaning || w.definition || '').trim();
        const theImg    = (w.img  || w.image || '').trim();

        if (this.state.preferImage === 'auto' && w.img) {
          cards.push({ 
              pairId, kind:'image', 
              label:wordLabel, 
              sub:wordSub, 
              img:w.img, 
              lesson:w.lesson });
        } else {
          const def = w.def || '释义';
          const subLine = wordLabel ? (w.py ? `${wordLabel} · ${w.py}` : wordLabel) : (w.py || '');
          cards.push({ 
              pairId, kind:'def', 
              label:def, 
              sub:subLine, 
              img:null, 
              lesson:w.lesson });
        }
      });

      this.state.totalPairs = picked.length;
      $('#total').textContent = ''+this.state.totalPairs;
      $('#matched').textContent = '0';
      $('#steps').textContent = '0';

      cards.sort(()=>Math.random()-0.5);
      this.renderBoard(cards);
      this.renderVocabList(picked);
      this.state.startAt = Date.now();
      this.state.timerId = setInterval(()=>{
        const s = Math.floor((Date.now()-this.state.startAt)/1000);
        $('#time').textContent = `${pad(Math.floor(s/60))}:${pad(s%60)}`;
      }, 500);
    },

    renderBoard(cards) {
      const board = $('#board');
      board.innerHTML = '';

      cards.forEach(card => {
        const el = document.createElement('div');
        el.className = 'card';

        // ✅ 把“背面”放在 .front（初始可见），“内容面”放在 .back（翻开后可见）
		let frontHTML = `
		  <div class="face front">
			${ (this.state.showBackLesson === 'on' && card.lesson)
				? `<div class="badge">第${card.lesson}课</div>` : `` }
			<div class="label">点我翻开</div>
			<div class="sub">${ this.state.showBackLesson === 'on' && card.lessonTitle ? this.escapeHTML(card.lessonTitle) : ''}</div>
		  </div>
		`;


        if (card.kind === 'word') {
          // 背面：只显示课次，不展示词语
          const show = (this.state.showBackLesson === 'on');
          const title = card.lessonTitle ? ` ${this.escapeHTML(card.lessonTitle)}` : '';
          frontHTML = `
            <div class="face front">
              ${show ? `<div class="badge">第${card.lesson}课</div>` : ''}
              <div class="label">点我翻开</div>

            </div>
          `;
        }

        // 内容面
        const backHTML = `
          <div class="face back">
            ${card.kind==='image' ? `<img class="photo" src="${this.escapeAttr(card.img)}" alt="">` : ''}
            <div class="label">${this.escapeHTML(card.kind==='def' ? card.label : (card.label || ''))}</div>
            <div class="sub">${this.escapeHTML(card.sub || '')}</div>
          </div>
        `;

        el.innerHTML = `<div class="flip">${frontHTML}${backHTML}</div>`;
        el.dataset.pair = card.pairId;
        el.addEventListener('click', () => this.onFlip(el));
        board.appendChild(el);
      });
    },

    onFlip(cardEl) {
      if (this.state.lock || cardEl.classList.contains('matched') || cardEl.classList.contains('revealed')) return;

      cardEl.classList.add('revealed');

      if (!this.state.first) {
        this.state.first = cardEl;
        return;
      }

      this.state.steps++;
      $('#steps').textContent = ''+this.state.steps;

      const a = this.state.first;
      const b = cardEl;
      this.state.first = null;

      if (a.dataset.pair === b.dataset.pair) {
        a.classList.add('matched'); b.classList.add('matched');
        this.state.matched++;
        $('#matched').textContent = ''+this.state.matched;
        if (this.state.matched === this.state.totalPairs) clearInterval(this.state.timerId);
      } else {
        this.state.lock = true;
        a.classList.add('wrong'); b.classList.add('wrong');
        setTimeout(()=>{
          a.classList.remove('wrong','revealed');
          b.classList.remove('wrong','revealed');
          this.state.lock = false;
        }, 700);
      }
    },

    escapeHTML(s){ return (s||'').replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])) },
    escapeAttr(s){ return this.escapeHTML(s) }
  };
  global.IMG = IMG;
  global.VocabMatch = VocabMatch;
})(window);
