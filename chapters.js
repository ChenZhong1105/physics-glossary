const chapters = [
    { id: 0, title: "基本常識", words: [
        { en: "Negligible", pos: "adj.", zh: "可忽略的", def: "常用於空氣阻力或摩擦力小到不計的情況。" },
        { en: "Uniform", pos: "adj.", zh: "均勻的/一致的", def: "物理性質隨空間或時間不變。", note: "例如：等速率圓周運動 (Uniform Circular Motion)" }
    ]},
    { id: 1, title: "物理量", words: [
        { en: "Significant Figures", pos: "n.", zh: "有效數字", def: "反映測量精密度的可靠位數。" },
        { en: "Dimensional Analysis", pos: "n.", zh: "因次分析", formula: "$$[v] = [L][T]^{-1}$$" }
    ]},
    { id: 2, title: "運動學", words: [
        { en: "Instantaneous Velocity", pos: "n.", zh: "瞬時速度", formula: "$$v = \\frac{dx}{dt}$$" },
        { en: "Centripetal Acceleration", pos: "n.", zh: "向心加速度", formula: "$$a_c = \\frac{v^2}{r}$$" }
    ]},
    { id: 3, title: "靜力平衡", words: [
        { en: "Torque", pos: "n.", zh: "力矩", formula: "$$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$$" },
        { en: "Static Equilibrium", pos: "n.", zh: "靜力平衡", formula: "$$\\sum \\vec{F}=0, \\sum \\vec{\\tau}=0$$" }
    ]},
    { id: 4, title: "牛頓運動定律", words: [
        { en: "Friction", pos: "n.", zh: "摩擦力", formula: "$$f_k = \\mu_k N$$" },
        { en: "Inertial Reference Frame", pos: "n.", zh: "慣性參考座標系" }
    ]},
    { id: 5, title: "功與能", words: [
        { en: "Work-Kinetic Energy Theorem", pos: "n.", zh: "功能原理", formula: "$$W = \\Delta K$$" },
        { en: "Conservation of Mechanical Energy", pos: "n.", zh: "力學能守恆定律", formula: "$$K_1+U_1 = K_2+U_2$$" }
    ]},
    { id: 6, title: "衝量與動量", words: [
        { en: "Impulse", pos: "n.", zh: "衝量", formula: "$$\\vec{J} = \\int \\vec{F} dt = \\Delta \\vec{p}$$" },
        { en: "Angular Momentum", pos: "n.", zh: "角動量", formula: "$$\\vec{L} = \\vec{r} \\times \\vec{p}$$" }
    ]},
    { id: 7, title: "剛體動力學", words: [
        { en: "Moment of Inertia", pos: "n.", zh: "轉動慣量", formula: "$$I = \\sum m_i r_i^2$$" },
        { en: "Parallel-Axis Theorem", pos: "n.", zh: "平行軸定理", formula: "$$I = I_{cm} + Mh^2$$" }
    ]},
    { id: 8, title: "振盪", words: [
        { en: "Simple Harmonic Motion", pos: "n.", zh: "簡諧運動", formula: "$$x(t) = A\\cos(\\omega t + \\phi)$$" },
        { en: "Damped Oscillation", pos: "n.", zh: "阻尼振盪" }
    ]},
    { id: 9, title: "重力", words: [
        { en: "Universal Gravitation", pos: "n.", zh: "萬有引力", formula: "$$F = G\\frac{m_1 m_2}{r^2}$$" },
        { en: "Kepler's Laws", pos: "n.", zh: "克卜勒行星運動定律" }
    ]},
    { id: 10, title: "流體力學", words: [
        { en: "Buoyancy", pos: "n.", zh: "浮力", formula: "$$B = \\rho_{fluid} V_{sub} g$$" },
        { en: "Bernoulli's Equation", pos: "n.", zh: "伯努利方程式", formula: "$$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$$" }
    ]},
    { id: 11, title: "波動", words: [
        { en: "Doppler Effect", pos: "n.", zh: "都卜勒效應", formula: "$$f' = f \\frac{v \\pm v_o}{v \\mp v_s}$$" },
        { en: "Interference", pos: "n.", zh: "干涉" }
    ]},
    { id: 12, title: "溫度與熱量", words: [
        { en: "Specific Heat", pos: "n.", zh: "比熱", formula: "$$Q = mc\\Delta T$$" },
        { en: "Thermal Expansion", pos: "n.", zh: "熱膨脹" }
    ]},
    { id: 13, title: "熱力學第一定律", words: [
        { en: "Ideal Gas Law", pos: "n.", zh: "理想氣體性質", formula: "$$PV = nRT$$" },
        { en: "First Law of Thermodynamics", pos: "n.", zh: "熱力學第一定律", formula: "$$\\Delta E_{int} = Q - W$$" }
    ]},
    { id: 14, title: "熵與熱力學第二定律", words: [
        { en: "Entropy", pos: "n.", zh: "熵", formula: "$$dS = \\frac{dQ_{rev}}{T}$$" },
        { en: "Carnot Engine", pos: "n.", zh: "卡諾熱機" }
    ]},
    { id: 15, title: "電場與電位", words: [
        { en: "Coulomb's Law", pos: "n.", zh: "庫侖定律", formula: "$$F = k\\frac{|q_1 q_2|}{r^2}$$" },
        { en: "Gauss's Law", pos: "n.", zh: "電場高斯定律", formula: "$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{en}}{\\epsilon_0}$$" }
    ]},
    { id: 16, title: "直流電路", words: [
        { en: "Ohm's Law", pos: "n.", zh: "歐姆定律", formula: "$$V = IR$$" },
        { en: "Electromotive Force (EMF)", pos: "n.", zh: "電動勢" }
    ]},
    { id: 17, title: "電容與介電質", words: [
        { en: "Capacitance", pos: "n.", zh: "電容", formula: "$$C = \\frac{Q}{V}$$" },
        { en: "Dielectric", pos: "n.", zh: "介電質" }
    ]},
    { id: 18, title: "磁場", words: [
        { en: "Lorentz Force", pos: "n.", zh: "勞侖茲力", formula: "$$\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$$" },
        { en: "Magnetic Dipole Moment", pos: "n.", zh: "磁偶極矩" }
    ]},
    { id: 19, title: "電磁感應", words: [
        { en: "Faraday's Law", pos: "n.", zh: "法拉第電磁感應定律", formula: "$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$$" },
        { en: "Inductance", pos: "n.", zh: "電感" }
    ]},
    { id: 20, title: "交流電路", words: [
        { en: "Transformer", pos: "n.", zh: "變壓器", formula: "$$\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$$" },
        { en: "Reactance", pos: "n.", zh: "電抗" }
    ]},
    { id: 21, title: "電磁波與物質之磁性", words: [
        { en: "Maxwell's Equations", pos: "n.", zh: "馬克思威爾方程式", note: "包含高斯定律、法拉第定律等四條方程。" }
    ]},
    { id: 22, title: "幾何光學", words: [
        { en: "Refraction", pos: "n.", zh: "折射", formula: "$$n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2$$" },
        { en: "Lenses", pos: "n.", zh: "透鏡成像" }
    ]},
    { id: 23, title: "波動光學", words: [
        { en: "Diffraction", pos: "n.", zh: "繞射" },
        { en: "Interference", pos: "n.", zh: "干涉", note: "如楊氏雙狹縫干涉。" }
    ]},
    { id: 24, title: "近代物理簡介", words: [
        { en: "Special Relativity", pos: "n.", zh: "特殊相對論", formula: "$$E = mc^2$$" },
        { en: "Photoelectric Effect", pos: "n.", zh: "光電效應", formula: "$$hf = K_{max} + \\Phi$$" },
        { en: "Uncertainty Principle", pos: "n.", zh: "測不準原理", formula: "$$\\Delta x \\Delta p \\geq \\frac{\\hbar}{2}$$" }
    ]}
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



