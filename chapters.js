// 全章節資料庫 (Chapter 0 - 24)
const chapters = [
    { 
        id: 0, 
        title: "基本常識 (Basic Knowledge)", 
        words: [
            { en: "Negligible", pos: "adj.", zh: "可忽略的", def: "數值極小而不影響計算結果。", note: "常用於忽略空氣阻力或摩擦力。", img: "ch0-p1.jpg" },
            { en: "Uniform", pos: "adj.", zh: "均勻的/一致的", def: "物理量不隨空間或時間改變。", note: "例如：等速率圓周運動 (Uniform Circular Motion)", img: "ch0-p2.jpg" }
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
                note: "加減法規則：結果的小數位數須與『小數位數最少者』看齊。 \\n乘除法規則：結果的有效位數須與『有效位數最少者』看齊。",
                img: "ch1-p1.jpg" 
            },
            { 
                en: "Dimensional Analysis", 
                pos: "n.", 
                zh: "因次分析", 
                def: "利用基本物理量（L, M, T）檢查公式正確性。",
                formula: "$$[v] = L T^{-1} = \\frac{L}{T}$$",
                // 這裡使用四個反斜線確保在 HTML 渲染時能剩下兩個給 MathJax 讀取
                note: "💡 補充規則：指數函數 $e^x$、對數 $\\ln(x)$、三角函數 $\\sin(x)$ 的內部必須為『無因次量』。",
                img: "ch1-p2.jpg"
            },
            { 
                en: "Error Analysis", 
                pos: "n.", 
                zh: "誤差分析", 
                def: "分析測量值與真實值差異的方法。包含系統誤差與隨機誤差。",
                note: "誤差傳播規則 (Error Propagation)：",
                formula_extra: "$$加減法：\\Delta z = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} \\\\ 乘除法：\\frac{\\Delta z}{z} = \\sqrt{(\\frac{\\Delta x}{x})^2 + (\\frac{\\Delta y}{y})^2}$$",
                img: "ch1-p3.jpg" 
            },
            { 
                en: "Vector Operations", 
                pos: "n.", 
                zh: "向量運算", 
                formula: "$$\\vec{A} \\cdot \\vec{B} = AB \\cos \\theta \\\\ |\\vec{A} \\times \\vec{B}| = AB \\sin \\theta$$",
                note: "外積三階行列式計算法：",
                formula_extra: "$$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix}$$",
                img: "ch1-p4.jpg"
            }
        ]
    },
    { 
        id: 2, 
        title: "運動學 (Kinematics)", 
        words: [
            { 
                en: "Kinematics Analysis", 
                pos: "n.", 
                zh: "直線運動分析", 
                def: "描述位置、速度與加速度隨時間變化的微分關係。",
                formula: "$$v = \\frac{dx}{dt}, \\quad a = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}$$",
                img: "ch2-p1.jpg"
            },
            { 
                en: "Projectile Motion", 
                pos: "n.", 
                zh: "拋體運動", 
                def: "水平等速運動與鉛直等加速運動的獨立合成。",
                formula: "$$y = (\\tan\\theta_0)x - \\frac{gx^2}{2(v_0\\cos\\theta_0)^2}$$",
                img: "ch2-p2.jpg"
            },
            { 
                en: "Relative Motion", 
                pos: "n.", 
                zh: "相對運動", 
                def: "在不同慣性座標系下觀察到的速度關係。",
                formula: "$$\\vec{v}_{P/A} = \\vec{v}_{P/B} + \\vec{v}_{B/A}$$",
                img: "ch2-p3.jpg"
            }
        ]
    },
    { 
        id: 3, 
        title: "靜力平衡 (Static Equilibrium)", 
        words: [
            { 
                en: "Torque", 
                pos: "n.", 
                zh: "力矩", 
                def: "力對旋轉中心的作用效果。",
                formula: "$$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$$", 
                img: "ch3-p1.jpg" 
            },
            { 
                en: "Equilibrium Conditions", 
                pos: "n.", 
                zh: "平衡條件", 
                def: "剛體處於平衡時，合力與合力矩皆須為零。",
                formula: "$$\\sum \\vec{F} = 0, \\quad \\sum \\vec{\\tau} = 0$$",
                img: "ch3-p2.jpg"
            }
        ]
    },
    { 
        id: 4, 
        title: "牛頓運動定律 (Newton's Laws of Motion)", 
        words: [
            { 
                en: "Newton's Second Law", 
                pos: "n.", 
                zh: "牛頓第二定律", 
                def: "物體運動狀態的改變與所受合力成正比。",
                formula: "$$\\sum \\vec{F} = m\\vec{a} = \\frac{d\\vec{p}}{dt}$$",
                img: "ch4-p1.jpg"
            },
            { 
                en: "Friction", 
                pos: "n.", 
                zh: "摩擦力", 
                def: "接觸面阻礙相對運動的力，分為靜摩擦與動摩擦。",
                formula: "$$f_s \\leq \\mu_s N, \\quad f_k = \\mu_k N$$",
                img: "ch4-p2.jpg"
            }
        ]
    },
    // 其餘 5-24 章節預留結構，檔名統一為 chX-p1.jpg
    { id: 5, title: "功與能 (Work and Energy)", words: [{ en: "Work", pos: "n.", zh: "功", formula: "$$W = \\int \\vec{F} \\cdot d\\vec{s}$$", img: "ch5-p1.jpg" }] },
    { id: 6, title: "衝量與動量 (Impulse and Momentum)", words: [{ en: "Momentum", pos: "n.", zh: "動量", formula: "$$\\vec{p} = m\\vec{v}$$", img: "ch6-p1.jpg" }] },
    { id: 7, title: "剛體動力學 (Dynamics of Rigid Bodies)", words: [{ en: "Moment of Inertia", pos: "n.", zh: "轉動慣量", formula: "$$I = \\int r^2 dm$$", img: "ch7-p1.jpg" }] },
    { id: 8, title: "振盪 (Oscillations)", words: [{ en: "SHM", pos: "n.", zh: "簡諧運動", formula: "$$x(t) = A\\cos(\\omega t + \\phi)$$", img: "ch8-p1.jpg" }] },
    { id: 9, title: "重力 (Gravitation)", words: [{ en: "Gravity", pos: "n.", zh: "萬有引力", formula: "$$F = G\\frac{Mm}{r^2}$$", img: "ch9-p1.jpg" }] },
    { id: 10, title: "流體力學 (Fluid Mechanics)", words: [{ en: "Pressure", pos: "n.", zh: "壓力", img: "ch10-p1.jpg" }] },
    { id: 11, title: "波動 (Waves)", words: [{ en: "Wave Equation", pos: "n.", zh: "波動方程", img: "ch11-p1.jpg" }] },
    { id: 12, title: "溫度與熱量 (Temperature and Heat)", words: [{ en: "Heat Transfer", pos: "n.", zh: "熱傳遞", img: "ch12-p1.jpg" }] },
    { id: 13, title: "熱力學第一定律 (Thermodynamics I)", words: [{ en: "First Law", pos: "n.", zh: "第一定律", img: "ch13-p1.jpg" }] },
    { id: 14, title: "熵與第二定律 (Entropy)", words: [{ en: "Entropy", pos: "n.", zh: "熵", img: "ch14-p1.jpg" }] },
    { id: 15, title: "電場與電位 (Electric Field)", words: [{ en: "Coulomb's Law", pos: "n.", zh: "庫侖定律", img: "ch15-p1.jpg" }] },
    { id: 16, title: "直流電路 (DC Circuits)", words: [{ en: "Ohm's Law", pos: "n.", zh: "歐姆定律", img: "ch16-p1.jpg" }] },
    { id: 17, title: "電容與介電質 (Capacitance)", words: [{ en: "Capacitance", pos: "n.", zh: "電容", img: "ch17-p1.jpg" }] },
    { id: 18, title: "磁場 (Magnetic Fields)", words: [{ en: "Lorentz Force", pos: "n.", zh: "勞侖茲力", img: "ch18-p1.jpg" }] },
    { id: 19, title: "電磁感應 (Induction)", words: [{ en: "Faraday's Law", pos: "n.", zh: "法拉第定律", img: "ch19-p1.jpg" }] },
    { id: 20, title: "交流電路 (AC Circuits)", words: [{ en: "Impedance", pos: "n.", zh: "阻抗", img: "ch20-p1.jpg" }] },
    { id: 21, title: "電磁波與磁性 (EM Waves)", words: [{ en: "Maxwell", pos: "n.", zh: "馬克思威爾", img: "ch21-p1.jpg" }] },
    { id: 22, title: "幾何光學 (Geometric Optics)", words: [{ en: "Refraction", pos: "n.", zh: "折射", img: "ch22-p1.jpg" }] },
    { id: 23, title: "波動光學 (Wave Optics)", words: [{ en: "Interference", pos: "n.", zh: "干涉", img: "ch23-p1.jpg" }] },
    { id: 24, title: "近代物理簡介 (Modern Physics)", words: [{ en: "Photoelectric", pos: "n.", zh: "光電效應", img: "ch24-p1.jpg" }] }
];

// --- 核心函數：初始化與渲染 ---
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
                        <img src="${w.img}" alt="推導照片" style="max-width:100%; border-radius:8px; border:1px solid #ddd;" onerror="this.style.display='none'">
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
