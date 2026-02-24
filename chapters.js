// 所有的章節資料庫 (Chapter 0 - 24)
const chapters = [
    { 
        id: 0, 
        title: "基本常識 (Basic Knowledge)", 
        words: [
            { en: "Negligible", pos: "adj.", zh: "可忽略的", def: "數值極小而不影響計算結果。", note: "常用於忽略空氣阻力或摩擦力。" },
            { en: "Uniform", pos: "adj.", zh: "均勻的/一致的", def: "物理量不隨空間或時間改變。", note: "例如：等速率圓周運動 (Uniform Circular Motion)" }
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
                note: "加減法規則：結果的小數位數須與『小數位數最少者』看齊。 \n乘除法規則：結果的有效位數須與『有效位數最少者』看齊。" 
            },
            { 
                en: "Error Analysis", 
                pos: "n.", 
                zh: "誤差分析", 
                def: "分析測量值與真實值差異的方法。包含系統誤差 (Systematic Error) 與隨機誤差 (Random Error)。",
                note: "誤差傳播規則：\n1. 加減法：絕對誤差平方和開根號。\n2. 乘除法：相對誤差平方和開根號。"
            },
            { 
                en: "Dimensional Analysis", 
                pos: "n.", 
                zh: "因次分析", 
                def: "利用基本物理量（L, M, T）檢查公式。注意：指數、對數、三角函數內部必須為無因次量。",
                formula: "$$v = v_0 e^{-kt} \\implies [kt] = 1 \\implies [k] = [t]^{-1}$$",
                // 修正後的 note，使用雙反斜線避免亂碼
                note: "注意：指數函數 $e^x$、對數 $\\ln(x)$、三角函數 $\\sin(x)$ 的內部必須為『無因次量』。"
            },
            { 
                en: "Dot Product", 
                pos: "n.", 
                zh: "內積", 
                formula: "$$\\vec{A} \\cdot \\vec{B} = AB \\cos \\theta$$" 
            },
            { 
                en: "Cross Product", 
                pos: "n.", 
                zh: "外積", 
                formula: "$$|\\vec{A} \\times \\vec{B}| = AB \\sin \\theta$$",
                note: "三階行列式計算法：",
                formula_extra: "$$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix} = (A_yB_z - A_zB_y)\\hat{i} - (A_xB_z - A_zB_x)\\hat{j} + (A_xB_y - A_yB_x)\\hat{k}$$"
            }
        ]
    },
    { id: 2, title: "運動學 (Kinematics)", words: [] },
    { id: 3, title: "靜力平衡 (Static Equilibrium)", words: [] },
    { id: 4, title: "牛頓運動定律 (Newton's Laws of Motion)", words: [] },
    { id: 5, title: "功與能 (Work and Energy)", words: [] },
    { id: 6, title: "衝量與動量 (Impulse and Momentum)", words: [] },
    { id: 7, title: "剛體動力學 (Dynamics of Rigid Bodies)", words: [] },
    { id: 8, title: "振盪 (Oscillations)", words: [] },
    { id: 9, title: "重力 (Gravitation)", words: [] },
    { id: 10, title: "流體力學 (Fluid Mechanics)", words: [] },
    { id: 11, title: "波動 (Waves)", words: [] },
    { id: 12, title: "溫度與熱量 (Temperature and Heat)", words: [] },
    { id: 13, title: "熱力學第一定律 (The First Law of Thermodynamics)", words: [] },
    { id: 14, title: "熵與熱力學第二定律 (Entropy and The Second Law)", words: [] },
    { id: 15, title: "電場與電位 (Electric Fields and Potential)", words: [] },
    { id: 16, title: "直流電路 (DC Circuits)", words: [] },
    { id: 17, title: "電容與介電質 (Capacitance and Dielectrics)", words: [] },
    { id: 18, title: "磁場 (Magnetic Fields)", words: [] },
    { id: 19, title: "電磁感應 (Electromagnetic Induction)", words: [] },
    { id: 20, title: "交流電路 (AC Circuits)", words: [] },
    { id: 21, title: "電磁波與磁性 (Electromagnetic Waves and Magnetism)", words: [] },
    { id: 22, title: "幾何光學 (Geometric Optics)", words: [] },
    { id: 23, title: "波動光學 (Wave Optics)", words: [] },
    { id: 24, title: "近代物理簡介 (Introduction to Modern Physics)", words: [] }
];

// 初始化選單
function init() {
    const menu = document.getElementById('chapter-menu');
    if(!menu) return;
    menu.innerHTML = '';
    chapters.forEach(ch => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        
        // 分割中英文標題
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
            ${w.note ? `<p style="color:#666; font-size:0.9em;">💡 ${w.note}</p>` : ''}
            ${w.formula_extra ? `<div class="formula">${w.formula_extra}</div>` : ''}
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

