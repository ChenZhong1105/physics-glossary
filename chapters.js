const chapters = [
    { id: 0, title: "基本常識", words: [
        { en: "Negligible", pos: "adj.", zh: "可忽略的", def: "常用於空氣阻力或摩擦力小到不計的情況。", note: "Air resistance is negligible." },
        { en: "Uniform", pos: "adj.", zh: "均勻的/一致的", def: "物理性質隨空間或時間不變。", note: "Uniform circular motion (等速率圓周運動)" }
    ]},
    { id: 1, title: "測量與單位", words: [{ en: "Dimensional Analysis", pos: "n.", zh: "量綱分析", def: "利用單位檢查公式正確性。", formula: "$$[L], [M], [T]$$" }]},
    { id: 2, title: "直線運動", words: [{ en: "Instantaneous Velocity", pos: "n.", zh: "瞬時速度", formula: "$$v = \\frac{dx}{dt}$$" }]},
    { id: 3, title: "向量", words: [{ en: "Cross Product", pos: "n.", zh: "外積", formula: "$$|\\vec{A} \\times \\vec{B}| = AB \\sin\\theta$$" }]},
    { id: 4, title: "二維/三維運動", words: [{ en: "Centripetal Acceleration", pos: "n.", zh: "向心加速度", formula: "$$a_c = \\frac{v^2}{r}$$" }]},
    { id: 5, title: "力與牛頓定律", words: [{ en: "Inertia", pos: "n.", zh: "慣性", def: "物體維持運動狀態的特性。" }]},
    { id: 6, title: "摩擦力", words: [{ en: "Kinetic Friction", pos: "n.", zh: "動摩擦力", formula: "$$f_k = \\mu_k N$$" }]},
    { id: 7, title: "功與動能", words: [{ en: "Work-Kinetic Energy Theorem", pos: "n.", zh: "功能定理", formula: "$$W_{net} = \\Delta K$$" }]},
    { id: 8, title: "位能守恆", words: [{ en: "Conservation of Energy", pos: "n.", zh: "能量守恆", formula: "$$K_i + U_i = K_f + U_f$$" }]},
    { id: 9, title: "動量與質心", words: [{ en: "Center of Mass", pos: "n.", zh: "質心", formula: "$$x_{cm} = \\frac{\\sum m_i x_i}{M}$$" }]},
    { id: 10, title: "轉動", words: [{ en: "Moment of Inertia", pos: "n.", zh: "轉動慣量", formula: "$$I = \\int r^2 dm$$" }]},
    { id: 11, title: "角動量", words: [{ en: "Angular Momentum", pos: "n.", zh: "角動量", formula: "$$L = I\\omega$$" }]},
    { id: 12, title: "靜力平衡", words: [{ en: "Static Equilibrium", pos: "n.", zh: "靜力平衡", formula: "$$\\sum F = 0, \\sum \\tau = 0$$" }]},
    { id: 13, title: "重力", words: [{ en: "Escape Speed", pos: "n.", zh: "脫離速度", formula: "$$v = \\sqrt{\\frac{2GM}{R}}$$" }]},
    { id: 14, title: "流體力學", words: [{ en: "Bernoulli's Equation", pos: "n.", zh: "伯努利方程式", formula: "$$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$$" }]},
    { id: 15, title: "振盪", words: [{ en: "Simple Harmonic Motion", pos: "n.", zh: "簡諧運動", formula: "$$x(t) = A\\cos(\\omega t + \\phi)$$" }]},
    { id: 16, title: "波動 I", words: [{ en: "Transverse Wave", pos: "n.", zh: "橫波", def: "介質振動方向與傳播方向垂直。" }]},
    { id: 17, title: "波動 II (聲波)", words: [{ en: "Doppler Effect", pos: "n.", zh: "多普勒效應", formula: "$$f' = f \\frac{v \\pm v_o}{v \\mp v_s}$$" }]},
    { id: 18, title: "熱力一律", words: [{ en: "Specific Heat", pos: "n.", zh: "比熱", formula: "$$Q = mc\\Delta T$$" }]},
    { id: 19, title: "氣體動力論", words: [{ en: "Ideal Gas Law", pos: "n.", zh: "理想氣體方程式", formula: "$$PV = nRT$$" }]}
];

function init() {
    const menu = document.getElementById('chapter-menu');
    if(!menu) return;
    menu.innerHTML = '';
    chapters.forEach(ch => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `<strong>CH ${ch.id}</strong><br>${ch.title}`;
        card.onclick = () => showChapter(ch.id);
        menu.appendChild(card);
    });
}

function showChapter(id) {
    const ch = chapters.find(c => c.id === id);
    document.getElementById('chapter-menu').style.display = 'none';
    document.getElementById('content-area').style.display = 'block';
    document.getElementById('back-btn').style.display = 'inline-block';
    document.getElementById('chapter-title').innerText = `Chapter ${ch.id}: ${ch.title}`;
    
    const list = document.getElementById('word-list');
    list.innerHTML = ch.words.map(w => `
        <div class="word-card">
            <div class="word-header">${w.en} <span style="font-size:0.7em; color:#999; margin-left:10px;">${w.pos}</span></div>
            <p><strong>中文：</strong>${w.zh}</p>
            ${w.def ? `<p><strong>定義：</strong>${w.def}</p>` : ''}
            ${w.formula ? `<div class="formula">${w.formula}</div>` : ''}
            ${w.note ? `<p style="color:#666; font-size:0.9em;">💡 觀念：${w.note}</p>` : ''}
        </div>
    `).join('');
    window.scrollTo(0,0);
    if(window.MathJax) MathJax.typeset();
}

function showMenu() {
    document.getElementById('chapter-menu').style.display = 'grid';
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
}

// 確保 DOM 載入後執行
window.onload = init;
