// 全章節資料庫 (Chapter 0 - 24)
const chapters = [
    { 
        id: 0, 
        title: "基本常識 (Basic Knowledge)", 
        words: [
            { 
                en: "Negligible", 
                pos: "adj.", 
                zh: "可忽略的", 
                def: "數值極小而不影響計算結果。", 
                note: "常用於忽略空氣阻力或摩擦力。", 
                img: "ch0-p1.jpg" 
            },
            { 
                en: "Uniform", 
                pos: "adj.", 
                zh: "均勻的/一致的", 
                def: "物理量不隨空間或時間改變。", 
                note: "例如：等速率圓周運動 (Uniform Circular Motion)", 
                img: "ch0-p2.jpg" 
            },
            { 
                en: "Perpendicular", 
                pos: "adj.", 
                zh: "垂直的 / 正交的", 
                def: "兩直線或向量相交成直角（90度）。", 
                formula: "$$\\vec{A} \\cdot \\vec{B} = 0$$",
                img: "ch0-p3.jpg" 
            },
            { 
                en: "Magnitude", 
                pos: "n.", 
                zh: "量值 / 大小", 
                def: "物理量的純數值部分，不包含方向。", 
                formula: "$$|\\vec{A}| = \\sqrt{A_x^2 + A_y^2 + A_z^2}$$",
                img: "ch0-p4.jpg" 
            },
            { 
                en: "Order of Magnitude", 
                pos: "n.", 
                zh: "數量級", 
                def: "以 10 的次方來表示數值的大致範圍，常用於快速估算。", 
                img: "ch0-p5.jpg" 
            },
            { 
                en: "Quantum", 
                pos: "n.", 
                zh: "量子", 
                def: "物理量不可分割的最小基本單位。", 
                img: "ch0-p6.jpg" 
            },
            { 
                en: "Electron", 
                pos: "n.", 
                zh: "電子", 
                def: "帶有基本負電荷的亞原子粒子。", 
                formula: "$$e \\approx 1.602 \\times 10^{-19} \\text{ C}$$",
                img: "ch0-p7.jpg" 
            },
            { 
                en: "Planck's Constant", 
                pos: "n.", 
                zh: "普朗克常數", 
                def: "量子力學中的基本常數，描述量子的大小。", 
                formula: "$$h \\approx 6.626 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$$",
                img: "ch0-p8.jpg" 
            },
            { 
                en: "Density", 
                pos: "n.", 
                zh: "密度", 
                def: "單位體積內所含的質量。", 
                formula: "$$\\rho = \\frac{m}{V}$$",
                img: "ch0-p9.jpg" 
            }
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
                img: "ch1-p1.jpg" 
            },
            { 
                en: "Dimensional Analysis", 
                pos: "n.", 
                zh: "因次分析", 
                def: "利用基本物理量（L, M, T）檢查公式正確性。",
                formula: "$$[v] = L T^{-1} = \\frac{L}{T}$$",
                note: "💡 補充規則：指數函數 e<sup>x</sup>、對數 ln(x)、三角函數 sin(x) 的內部必須為『無因次量』。",
                img: "ch1-p2.jpg"
            },
            { 
                en: "Error Analysis", 
                pos: "n.", 
                zh: "誤差分析", 
                def: "分析測量值與真實值差異的方法。包含系統誤差與隨機誤差。",
                note: "誤差傳播規則：",
                formula_extra: "$$加減法：\\Delta z = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} \\\\ 乘除法：\\frac{\\Delta z}{z} = \\sqrt{(\\frac{\\Delta x}{x})^2 + (\\frac{\\Delta y}{y})^2}$$",
                img: "ch1-p3.jpg" 
            },
            { 
                en: "Unit Vector", 
                pos: "n.", 
                zh: "單位向量", 
                def: "長度（大小）為 1 的向量，專門用來標示方向。",
                formula: "$$\\hat{e}_{\\vec{u}} = \\frac{\\vec{u}}{|\\vec{u}|}$$",
                img: "ch1-p4.jpg"
            },
            { 
                en: "Dot Product", 
                pos: "n.", 
                zh: "內積 (純量積)", 
                def: "兩向量的內積結果為純量（數值）。",
                formula: "$$\\vec{A} \\cdot \\vec{B} = AB \\cos \\theta = A_x B_x + A_y B_y + A_z B_z$$",
                img: "ch1-p5.jpg"
            },
            { 
                en: "Scalar Projection", 
                pos: "n.", 
                zh: "正射影長 (純量投影)", 
                def: "向量 A 在向量 B 方向上的投影長度。計算方式為 A 向量與 B 的單位向量做內積。",
                formula: "$$\\text{comp}_{\\vec{B}}\\vec{A} = \\vec{A} \\cdot \\hat{e}_{\\vec{B}} = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|}$$",
                img: "ch1-p6.jpg"
            },
            { 
                en: "Orthogonal Projection", 
                pos: "n.", 
                zh: "正射影 (向量投影)", 
                def: "向量 A 在向量 B 方向上的投影向量。等於「正射影長」再乘上「B 的單位向量」。",
                formula: "$$\\text{Proj}_{\\vec{B}}\\vec{A} = (\\vec{A} \\cdot \\hat{e}_{\\vec{B}})\\hat{e}_{\\vec{B}} = \\left(\\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|^2}\\right)\\vec{B}$$",
                img: "ch1-p7.jpg"
            },
            { 
                en: "Cross Product", 
                pos: "n.", 
                zh: "外積 (向量積)", 
                def: "兩向量的外積結果為向量，方向符合右手定則。量值等於兩向量構成之平行四邊形面積。",
                formula: "$$|\\vec{A} \\times \\vec{B}| = AB \\sin \\theta$$",
                note: "外積三階行列式計算法：",
                formula_extra: "$$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix}$$",
                img: "ch1-p8.jpg"
            }
        ]
    },
   { 
        id: 2, 
        title: "運動學 (Kinematics)", 
        words: [
            { 
                en: "Velocity vs. Speed", 
                pos: "n.", 
                zh: "速度與速率", 
                def: "速度 (Velocity) 是位移隨時間的變化率，為向量；速率 (Speed) 是路徑長隨時間的變化率，為純量。",
                note: "💡 重要觀念：|平均速度| ≤ 平均速率。只有在「單向直線運動」且不折返的情況下，兩者才會相等。",
                img: "ch2-p1.jpg"
            },
            { 
                en: "Instantaneous Velocity and Speed", 
                pos: "n.", 
                zh: "瞬時速度與瞬時速率", 
                def: "極短時間內的變化率。特別注意：瞬時速率恆等於瞬時速度的「大小」。",
                formula: "$$\\vec{v} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta \\vec{x}}{\\Delta t} = \\frac{d\\vec{x}}{dt}$$",
                img: "ch2-p2.jpg"
            },
            { 
                en: "Instantaneous Acceleration", 
                pos: "n.", 
                zh: "瞬時加速度", 
                def: "瞬時速度對時間的一階導數，也是位置對時間的二階導數。",
                formula: "$$\\vec{a} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{x}}{dt^2}$$",
                img: "ch2-p3.jpg"
            },
            { 
                en: "Algebraic Analysis of Kinematics", 
                pos: "n.", 
                zh: "運動學代數分析法 (微積分關係)", 
                def: "位置、速度與加速度三者的微積分轉換。轉學考極常利用連鎖律 (Chain Rule) 將 a 轉換為對 x 的積分。",
                formula: "$$v = \\frac{dx}{dt}, \\quad a = \\frac{dv}{dt} = v\\frac{dv}{dx}$$",
                formula_extra: "$$\\Delta v = \\int_{t_1}^{t_2} a \\, dt, \\quad \\Delta x = \\int_{t_1}^{t_2} v \\, dt$$",
                img: "ch2-p4.jpg"
            },
            { 
                en: "Graphical Analysis", 
                pos: "n.", 
                zh: "直線運動圖形分析", 
                def: "透過位置(x)、速度(v)、加速度(a)對時間(t)的關係圖解題。",
                note: "📐 切線斜率意涵：\nx-t 圖的切線斜率 = 瞬時速度 (v)。\nv-t 圖的切線斜率 = 瞬時加速度 (a)。\n\n🟦 面積意涵：\nv-t 圖下的面積 = 位移 (Δx)。\na-t 圖下的面積 = 速度變化量 (Δv)。",
                img: "ch2-p5.jpg"
            },
            { 
                en: "Equations of Kinematics", 
                pos: "n.", 
                zh: "等加速度直線運動三大公式", 
                def: "⚠️ 僅適用於「加速度 a 為定值」的條件下。",
                formula: "$$v = v_0 + at$$",
                formula_extra: "$$\\Delta x = v_0 t + \\frac{1}{2}at^2 \\\\ v^2 = v_0^2 + 2a\\Delta x$$",
                img: "ch2-p6.jpg"
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
    { 
        id: 5, 
        title: "功與能 (Work and Energy)", 
        words: [
            { 
                en: "Work", 
                pos: "n.", 
                zh: "功", 
                formula: "$$W = \\int \\vec{F} \\cdot d\\vec{s}$$", 
                img: "ch5-p1.jpg" 
            }
        ] 
    },
    { 
        id: 6, 
        title: "衝量與動量 (Impulse and Momentum)", 
        words: [
            { 
                en: "Momentum", 
                pos: "n.", 
                zh: "動量", 
                formula: "$$\\vec{p} = m\\vec{v}$$", 
                img: "ch6-p1.jpg" 
            }
        ] 
    },
    { 
        id: 7, 
        title: "剛體動力學 (Dynamics of Rigid Bodies)", 
        words: [
            { 
                en: "Moment of Inertia", 
                pos: "n.", 
                zh: "轉動慣量", 
                formula: "$$I = \\int r^2 dm$$", 
                img: "ch7-p1.jpg" 
            }
        ] 
    },
    { 
        id: 8, 
        title: "振盪 (Oscillations)", 
        words: [
            { 
                en: "SHM", 
                pos: "n.", 
                zh: "簡諧運動", 
                formula: "$$x(t) = A\\cos(\\omega t + \\phi)$$", 
                img: "ch8-p1.jpg" 
            }
        ] 
    },
    { 
        id: 9, 
        title: "重力 (Gravitation)", 
        words: [
            { 
                en: "Gravity", 
                pos: "n.", 
                zh: "萬有引力", 
                formula: "$$F = G\\frac{Mm}{r^2}$$", 
                img: "ch9-p1.jpg" 
            }
        ] 
    },
    { 
        id: 10, 
        title: "流體力學 (Fluid Mechanics)", 
        words: [
            { 
                en: "Pressure", 
                pos: "n.", 
                zh: "壓力", 
                img: "ch10-p1.jpg" 
            }
        ] 
    },
    { 
        id: 11, 
        title: "波動 (Waves)", 
        words: [
            { 
                en: "Wave Equation", 
                pos: "n.", 
                zh: "波動方程", 
                img: "ch11-p1.jpg" 
            }
        ] 
    },
    { 
        id: 12, 
        title: "溫度與熱量 (Temperature and Heat)", 
        words: [
            { 
                en: "Heat Transfer", 
                pos: "n.", 
                zh: "熱傳遞", 
                img: "ch12-p1.jpg" 
            }
        ] 
    },
    { 
        id: 13, 
        title: "熱力學第一定律 (Thermodynamics I)", 
        words: [
            { 
                en: "First Law", 
                pos: "n.", 
                zh: "第一定律", 
                img: "ch13-p1.jpg" 
            }
        ] 
    },
    { 
        id: 14, 
        title: "熵與第二定律 (Entropy)", 
        words: [
            { 
                en: "Entropy", 
                pos: "n.", 
                zh: "熵", 
                img: "ch14-p1.jpg" 
            }
        ] 
    },
    { 
        id: 15, 
        title: "電場與電位 (Electric Field)", 
        words: [
            { 
                en: "Coulomb's Law", 
                pos: "n.", 
                zh: "庫侖定律", 
                img: "ch15-p1.jpg" 
            }
        ] 
    },
    { 
        id: 16, 
        title: "直流電路 (DC Circuits)", 
        words: [
            { 
                en: "Ohm's Law", 
                pos: "n.", 
                zh: "歐姆定律", 
                img: "ch16-p1.jpg" 
            }
        ] 
    },
    { 
        id: 17, 
        title: "電容與介電質 (Capacitance)", 
        words: [
            { 
                en: "Capacitance", 
                pos: "n.", 
                zh: "電容", 
                img: "ch17-p1.jpg" 
            }
        ] 
    },
    { 
        id: 18, 
        title: "磁場 (Magnetic Fields)", 
        words: [
            { 
                en: "Lorentz Force", 
                pos: "n.", 
                zh: "勞侖茲力", 
                img: "ch18-p1.jpg" 
            }
        ] 
    },
    { 
        id: 19, 
        title: "電磁感應 (Induction)", 
        words: [
            { 
                en: "Faraday's Law", 
                pos: "n.", 
                zh: "法拉第定律", 
                img: "ch19-p1.jpg" 
            }
        ] 
    },
    { 
        id: 20, 
        title: "交流電路 (AC Circuits)", 
        words: [
            { 
                en: "Impedance", 
                pos: "n.", 
                zh: "阻抗", 
                img: "ch20-p1.jpg" 
            }
        ] 
    },
    { 
        id: 21, 
        title: "電磁波與磁性 (EM Waves)", 
        words: [
            { 
                en: "Maxwell", 
                pos: "n.", 
                zh: "馬克思威爾", 
                img: "ch21-p1.jpg" 
            }
        ] 
    },
    { 
        id: 22, 
        title: "幾何光學 (Geometric Optics)", 
        words: [
            { 
                en: "Refraction", 
                pos: "n.", 
                zh: "折射", 
                img: "ch22-p1.jpg" 
            }
        ] 
    },
    { 
        id: 23, 
        title: "波動光學 (Wave Optics)", 
        words: [
            { 
                en: "Interference", 
                pos: "n.", 
                zh: "干涉", 
                img: "ch23-p1.jpg" 
            }
        ] 
    },
    { 
        id: 24, 
        title: "近代物理簡介 (Modern Physics)", 
        words: [
            { 
                en: "Photoelectric", 
                pos: "n.", 
                zh: "光電效應", 
                img: "ch24-p1.jpg" 
            }
        ] 
    }
];

// --- 核心函數：初始化與渲染 (已加入瀏覽器「上一頁」支援) ---
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

    // 網頁剛載入時，記錄「首頁」狀態
    history.replaceState({ page: 'home' }, '', window.location.pathname);
}

// 加入 pushHistory 參數，控制是否要新增歷史紀錄
function showChapter(id, pushHistory = true) {
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

    // 點進章節時，告訴瀏覽器「這是一頁新的紀錄」
    if (pushHistory) {
        history.pushState({ page: 'chapter', id: id }, '', `#chapter-${id}`);
    }
}

// 加入 pushHistory 參數
function showMenu(pushHistory = true) {
    document.getElementById('chapter-menu').style.display = 'grid';
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
    
    // 點擊網頁上的「返回按鈕」時，也推入首頁的紀錄
    if (pushHistory) {
        history.pushState({ page: 'home' }, '', window.location.pathname);
    }
}

// 關鍵！監聽手機或瀏覽器的實體「上一頁」與「下一頁」動作
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page === 'chapter') {
        // 如果歷史紀錄是章節，就顯示章節（且不再推入新紀錄）
        showChapter(event.state.id, false);
    } else {
        // 否則退回首頁選單
        showMenu(false);
    }
});

document.addEventListener('DOMContentLoaded', init);



