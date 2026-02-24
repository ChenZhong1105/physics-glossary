const chapters = [
    { id: 0, title: "基本常識", words: [
        { en: "Negligible", pos: "adj.", zh: "可忽略的", def: "小到不需考慮。", note: "例如：Air resistance is negligible." },
        { en: "Uniform", pos: "adj.", zh: "均勻的/等速的", def: "物理性質隨空間或時間不變。", note: "Uniform Circular Motion" }
    ]},
    { id: 1, title: "測量與單位", words: [
        { en: "Dimensional Analysis", pos: "n.", zh: "量綱分析", def: "檢查等式兩邊單位是否一致。", formula: "$$[L], [M], [T]$$" }
    ]},
    { id: 2, title: "直線運動", words: [
        { en: "Acceleration", pos: "n.", zh: "加速度", def: "速度對時間的變化率。", formula: "$$a = \frac{dv}{dt} = \frac{d^2x}{dt^2}$$" }
    ]},
    { id: 3, title: "向量", words: [
        { en: "Dot Product", pos: "n.", zh: "內積 (純量積)", def: "兩向量的投影乘積。", formula: "$$\vec{A} \cdot \vec{B} = AB \cos \theta$$" }
    ]},
    { id: 4, title: "二維運動", words: [
        { en: "Projectile Motion", pos: "n.", zh: "拋體運動", def: "水平等速與鉛直等加之組合。", formula: "$$y = (\tan \theta)x - \frac{gx^2}{2(v_0 \cos \theta)^2}$$" }
    ]},
    { id: 5, title: "牛頓定律", words: [
        { en: "Inertia", pos: "n.", zh: "慣性", def: "物體維持運動狀態的特性。", formula: "$$\sum \vec{F} = m\vec{a}$$" }
    ]},
    { id: 6, title: "摩擦與圓周", words: [
        { en: "Centripetal Force", pos: "n.", zh: "向心力", def: "指向圓心的力。", formula: "$$F_c = \frac{mv^2}{r} = mr\omega^2$$" }
    ]},
    { id: 7, title: "功與能", words: [
        { en: "Kinetic Energy", pos: "n.", zh: "動能", def: "運動中的能量。", formula: "$$K = \frac{1}{2}mv^2$$" }
    ]},
    { id: 8, title: "位能守恆", words: [
        { en: "Conservation of Energy", pos: "n.", zh: "能量守恆", def: "能量不會消失，只會轉換。", formula: "$$K_i + U_i = K_f + U_f$$" }
    ]},
    { id: 9, title: "動量碰撞", words: [
        { en: "Impulse", pos: "n.", zh: "衝量", def: "力與作用時間的乘積。", formula: "$$J = \int F dt = \Delta p$$" }
    ]},
    { id: 10, title: "固定軸轉動", words: [
        { en: "Moment of Inertia", pos: "n.", zh: "轉動慣量", def: "描述物體轉動的難易度。", formula: "$$I = \int r^2 dm$$" }
    ]},
    { id: 11, title: "角動量", words: [
        { en: "Angular Momentum", pos: "n.", zh: "角動量", def: "旋轉的動量。", formula: "$$L = r \times p = I\omega$$" }
    ]},
    { id: 12, title: "靜力平衡", words: [
        { en: "Static Equilibrium", pos: "n.", zh: "靜力平衡", def: "合力與合力矩皆為零。", formula: "$$\sum F = 0, \sum \tau = 0$$" }
    ]},
    { id: 13, title: "重力", words: [
        { en: "Gravitation", pos: "n.", zh: "萬有引力", def: "質量間的吸引力。", formula: "$$F = G\frac{M m}{r^2}$$" }
    ]},
    { id: 14, title: "流體", words: [
        { en: "Bernoulli's Eq.", pos: "n.", zh: "伯努利方程式", def: "流體的能量守恆。", formula: "$$P + \frac{1}{2}\rho v^2 + \rho gh = \text{constant}$$" }
    ]},
    { id: 15, title: "振盪", words: [
        { en: "Simple Harmonic Motion", pos: "n.", zh: "簡諧運動", def: "回復力與位移成正比。", formula: "$$x(t) = A \cos(\omega t + \phi)$$" }
    ]},
    { id: 16, title: "波動 I", words: [
        { en: "Wavelength", pos: "n.", zh: "波長", def: "波重複的最短距離。", formula: "$$v = f\lambda$$" }
    ]},
    { id: 17, title: "波動 II (聲波)", words: [
        { en: "Doppler Effect", pos: "n.", zh: "多普勒效應", def: "觀察者與波源運動造成的頻率改變。", formula: "$$f' = f \frac{v \pm v_o}{v \mp v_s}$$" }
    ]},
    { id: 18, title: "熱力學第一定律", words: [
        { en: "Specific Heat", pos: "n.", zh: "比熱", def: "升溫 1 度所需的熱量。", formula: "$$Q = mc\Delta T$$" }
    ]},
    { id: 19, title: "氣體動力論", words: [
        { en: "Ideal Gas Law", pos: "n.", zh: "理想氣體定律", def: "描述氣體壓力、體積、溫度關係。", formula: "$$PV = nRT$$" }
    ]}
];

// 初始化
function init() {
    const menu = document.getElementById('chapter-menu');
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
            <div class="word-header"><strong>${w.en}</strong> <span class="pos">${w.pos}</span></div>
            <p><strong>中文：</strong>${w.zh}</p>
            <p><strong>定義：</strong>${w.def}</p>
            ${w.formula ? `<div class="formula">${w.formula}</div>` : ''}
            ${w.note ? `<p style="color:#666; font-size:0.9em;">💡 觀念：${w.note}</p>` : ''}
        </div>
    `).join('');

    window.scrollTo(0,0);
    MathJax.typeset();
}

function showMenu() {
    document.getElementById('chapter-menu').style.display = 'grid';
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
}

init();
