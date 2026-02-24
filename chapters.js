// 所有的章節資料庫 (Chapter 0 - 24)
const chapters = [
    { 
        id: 0, 
        title: "基本常識 (Basic Knowledge)", 
        words: [
            { en: "Negligible", pos: "adj.", zh: "可忽略的", def: "數值極小而不影響計算結果。", note: "常用於忽略空氣阻力或摩擦力。", img: "ch0-p1.png" },
            { en: "Uniform", pos: "adj.", zh: "均勻的/一致的", def: "物理量不隨空間或時間改變。", note: "例如：等速率圓周運動 (Uniform Circular Motion)", img: "ch0-p2.png" }
        ]
    },
    { 
        id: 1, 
        title: "物理量 (Physical Quantities)", 
        words: [
            { 
                en: "Significant Figures", 
                pos: "n.", 
                zh: "有效數字", 
                def: "測量值中所有確定的數字加上最後一位估計值。",
                note: "加減法規則：結果的小數位數須與『小數位數最少者』看齊。 \n乘除法規則：結果的有效位數須與『有效位數最少者』看齊。",
                img: "ch1-p1.png" 
            },
            { 
                en: "Dimensional Analysis", 
                pos: "n.", 
                zh: "因次分析", 
                def: "利用基本物理量（L, M, T）檢查公式正確性。",
                formula: "$$[v] = L T^{-1} = \\frac{L}{T}$$",
                note: "💡 補充規則：指數函數 $e^x$、對數 $\\ln(x)$、三角函數 $\\sin(x)$ 的內部必須為『無因次量』。",
                img: "ch1-p2.png"
            },
            { 
                en: "Error Analysis", 
                pos: "n.", 
                zh: "誤差分析", 
                def: "分析測量值與真實值差異的方法。包含系統誤差與隨機誤差。",
                note: "誤差傳播規則：",
                formula_extra: "$$加減法：\\Delta z = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} \\\\ 乘除法：\\frac{\\Delta z}{z} = \\sqrt{(\\frac{\\Delta x}{x})^2 + (\\frac{\\Delta y}{y})^2}$$",
                img: "ch1-p3.png" 
            },
            { 
                en: "Dot Product (Scalar Product)", 
                pos: "n.", 
                zh: "內積 (純量積)", 
                formula: "$$\\vec{A} \\cdot \\vec{B} = AB \\cos \\theta = A_xB_x + A_yB_y + A_zB_z$$",
                img: "ch1-p4.png"
            },
            { 
                en: "Cross Product (Vector Product)", 
                pos: "n.", 
                zh: "外積 (向量積)", 
                def: "結果為向量，符合右手定則。量值代表兩向量構成之平行四邊形面積。",
                formula: "$$|\\vec{A} \\times \\vec{B}| = AB \\sin \\theta$$",
                note: "三階行列式計算法：",
                formula_extra: "$$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix} = (A_yB_z - A_zB_y)\\hat{i} - (A_xB_z - A_zB_x)\\hat{j} + (A_xB_y - A_yB_x)\\hat{k}$$",
                img: "ch1-p5.png"
            }
        ]
    },
    // 後續章節預留結構，每個章節先給一個基本單字並預留圖片
    { id: 2, title: "運動學 (Kinematics)", words: [{ en: "Displacement", pos: "n.", zh: "位移", formula: "$$\\Delta x = x_f - x_i$$", img: "ch2-p1.png" }] },
    { id: 3, title: "靜力平衡 (Static Equilibrium)", words: [{ en: "Torque", pos: "n.", zh: "力矩", formula: "$$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$$", img: "ch3-p1.png" }] },
    { id: 4, title: "牛頓運動定律 (Newton's Laws of Motion)", words: [{ en: "Inertia", pos: "n.", zh: "慣性", img: "ch4-p1.png" }] },
    { id: 5, title: "功與能 (Work and Energy)", words: [{ en: "Kinetic Energy", pos: "n.", zh: "動能", formula: "$$K = \\frac{1}{2}mv^2$$", img: "ch5-p1.png" }] },
    { id: 6, title: "衝量與動量 (Impulse and Momentum)", words: [{ en: "Linear Momentum", pos: "n.", zh: "線動量", formula: "$$\\vec{p} = m\\vec{v}$$", img: "ch6-p1.png" }] },
    { id: 7, title: "剛體動力學 (Dynamics of Rigid Bodies)", words: [{ en: "Moment of Inertia", pos: "n.", zh: "轉動慣量", formula: "$$I = \\sum m_i r_i^2$$", img: "ch7-p1.png" }] },
    { id: 8, title: "振盪 (Oscillations)", words: [{ en: "Simple Harmonic Motion", pos: "n.", zh: "簡諧運動 (SHM)", img: "ch8-p1.png" }] },
    { id: 9, title: "重力 (Gravitation)", words: [{ en: "Law of Gravitation", pos: "n.", zh: "萬有引力定律", formula: "$$F = G\\frac{m_1 m_2}{r^2}$$", img: "ch9-p1.png" }] },
    { id: 10, title: "流體力學 (Fluid Mechanics)", words: [{ en: "Buoyant Force", pos: "n.", zh: "浮力", formula: "$$F_b = \\rho V g$$", img: "ch10-p1.png" }] },
    { id: 11, title: "波動 (Waves)", words: [{ en: "Wavelength", pos: "n.", zh: "波長", formula: "$$v = f\\lambda$$", img: "ch11-p1.png" }] },
    { id: 12, title: "溫度與熱量 (Temperature and Heat)", words: [{ en: "Specific Heat", pos: "n.", zh: "比熱", formula: "$$Q = mc\\Delta T$$", img: "ch12-p1.png" }] },
    { id: 13, title: "熱力學第一定律 (The First Law of Thermodynamics)", words: [{ en: "Internal Energy", pos: "n.", zh: "內能", formula: "$$\\Delta E_{int} = Q - W$$", img: "ch13-p1.png" }] },
    { id: 14, title: "熵與熱力學第二定律 (Entropy and The Second Law)", words: [{ en: "Entropy", pos: "n.", zh: "熵", formula: "$$\\Delta S = \\int \\frac{dQ}{T}$$", img: "ch14-p1.png" }] },
    { id: 15, title: "電場與電位 (Electric Fields and Potential)", words: [{ en: "Electric Field", pos: "n.", zh: "電場", formula: "$$\\vec{E} = \\frac{\\vec{F}}{q_0}$$", img: "ch15-p1.png" }] },
    { id: 16, title: "直流電路 (DC Circuits)", words: [{ en: "Ohm's Law", pos: "n.", zh: "歐姆定律", formula: "$$V = IR$$", img: "ch16-p1.png" }] },
    { id: 17, title: "電容與介電質 (Capacitance and Dielectrics)", words: [{ en: "Capacitance", pos: "n.", zh: "電容", formula: "$$C = \\frac{Q}{V}$$", img: "ch17-p1.png" }] },
    { id: 18, title: "磁場 (Magnetic Fields)", words: [{ en: "Magnetic Force", pos: "n.", zh: "磁力", formula: "$$\\vec{F}_B = q\\vec{v} \\times \\vec{B}$$", img: "ch18-p1.png" }] },
    { id: 19, title: "電磁感應 (Electromagnetic Induction)", words: [{ en: "Faraday's Law", pos: "n.", zh: "法拉第定律", formula: "$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$$", img: "ch19-p1.png" }] },
    { id: 20, title: "交流電路 (AC Circuits)", words: [{ en: "Impedance", pos: "n.", zh: "阻抗", formula: "$$Z = \\sqrt{R^2 + (X_L - X_C)^2}$$", img: "ch20-p1.png" }] },
    { id: 21, title: "電磁波與磁性 (Electromagnetic Waves and Magnetism)", words: [{ en: "Speed of Light", pos: "n.", zh: "光速", formula: "$$c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$$", img: "ch21-p1.png" }] },
    { id: 22, title: "幾何光學 (Geometric Optics)", words: [{ en: "Index of Refraction", pos: "n.", zh: "折射率", formula: "$$n = \\frac{c}{v}$$", img: "ch22-p1.png" }] },
    { id: 23, title: "波動光學 (Wave Optics)", words: [{ en: "Interference", pos: "n.", zh: "干涉", img: "ch23-p1.png" }] },
    { id: 24, title: "近代物理簡介 (Introduction to Modern Physics)", words: [{ en: "Photoelectric Effect", pos: "n.", zh: "光電效應", formula: "$$K_{max} = hf - \\Phi$$", img: "ch24-p1.png" }] }
];

// 初始化選單
function init() {
    const menu = document.getElementById('chapter-menu');
    if(!menu) return;
    menu.innerHTML = '';
    chapters.forEach(ch => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        const titleParts = ch.title.split(' (');
        const chineseTitle = titleParts[0];
        const englishTitle = titleParts[1] ? titleParts[1].replace(')', '') : '';
        card.innerHTML = `
            <strong>第 ${ch.id} 章</strong><br>
            <div style="font-size: 1.1em; margin-top: 5px;">${chineseTitle}</div>
            <div style="font-size: 0.8em; color: #7f8c8d; font-style: italic; margin-top: 3px;">${englishTitle}</div>
        `;
        card.onclick = () => showChapter(ch.id);
        menu.appendChild(card);
    });
}

// 顯示章節內容
function showChapter(id) {
    const ch = chapters.find(c => c.id === id);
    document.getElementById('chapter-menu').style.display = 'none';
    document.getElementById('content-area').style.display = 'block';
    document.getElementById('back-btn').style.display = 'inline-block';
    document.getElementById('chapter-title').innerText = `Chapter ${ch.id}: ${ch.title}`;
    
    const list = document.getElementById('word-list');
    list.innerHTML = ch.words.map(w => `
        <div class="word-card">
            <div class="word-header">${w.en} <span style="font-size:0.75em; color:#888; margin-left:10px;">${w.pos}</span></div>
            <p><strong>中文：</strong>${w.zh}</p>
            ${w.def ? `<p><strong>定義：</strong>${w.def}</p>` : ''}
            ${w.formula ? `<div class="formula">${w.formula}</div>` : ''}
            ${w.note ? `<p style="color:#666; font-size:0.9em;">${w.note}</p>` : ''}
            ${w.formula_extra ? `<div class="formula">${w.formula_extra}</div>` : ''}
            
            ${w.img ? `<div style="margin: 15px 0 10px 0; text-align: center;">
                        <img src="img/${w.img}" alt="推導照片" style="max-width:100%; border-radius:8px; border:1px solid #ddd; box-shadow: 2px 2px 5px rgba(0,0,0,0.1);" onerror="this.style.display='none'">
                      </div>` : ''}
        </div>
    `).join('');
    
    window.scrollTo(0,0);
    if(window.MathJax) {
        MathJax.typeset();
    }
}

function showMenu() {
    document.getElementById('chapter-menu').style.display = 'grid';
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', init);
