const chapters = [
    { id: 0, title: "基本常識 (Basic Vocabulary)", words: [
        { en: "Negligible", pos: "adj.", zh: "可忽略的", def: "數值極小而不影響計算結果。", note: "常用於忽略空氣阻力或摩擦力。" },
        { en: "Uniform", pos: "adj.", zh: "均勻的/等速的", def: "物理量不隨空間或時間改變。", note: "如 Uniform Electric Field (均勻電場)。" },
        { en: "Magnitude", pos: "n.", zh: "量值", def: "向量的大小（不含方向）。", note: "純量只有 Magnitude。" },
        { en: "Coordinate System", pos: "n.", zh: "座標系", def: "用來確定質點位置的系統。" }
    ]},
    { id: 1, title: "Measurement", words: [
        { en: "Dimensional Analysis", pos: "n.", zh: "量綱分析", def: "利用長度[L]、質量[M]、時間[T]檢查公式正確性。", formula: "$$[v] = [L][T]^{-1}, [a] = [L][T]^{-2}$$" },
        { en: "Significant Figures", pos: "n.", zh: "有效數字", def: "反映測量精密度的可靠位數。" }
    ]},
    { id: 2, title: "Motion Along a Straight Line", words: [
        { en: "Displacement", pos: "n.", zh: "位移", def: "位置的變量：$\Delta x = x_2 - x_1$。", formula: "$$\Delta x = x_f - x_i$$" },
        { en: "Instantaneous Velocity", pos: "n.", zh: "瞬時速度", def: "極短時間內的平均速度。", formula: "$$v = \frac{dx}{dt}$$" },
        { en: "Free-fall Acceleration", pos: "n.", zh: "自由落體加速度", def: "地表附近的重力加速度常數 $g$。", formula: "$$g \approx 9.8 \text{ m/s}^2$$" }
    ]},
    { id: 3, title: "Vectors", words: [
        { en: "Scalar Product (Dot Product)", pos: "n.", zh: "純量積 (內積)", def: "結果為純量。", formula: "$$\vec{A} \cdot \vec{B} = AB \cos \theta$$" },
        { en: "Vector Product (Cross Product)", pos: "n.", zh: "向量積 (外積)", def: "結果為向量，方向符合右手定則。", formula: "$$|\vec{A} \times \vec{B}| = AB \sin \theta$$" }
    ]},
    { id: 4, title: "Motion in Two and Three Dimensions", words: [
        { en: "Projectile Motion", pos: "n.", zh: "拋體運動", def: "水平等速與鉛直等加的合成。", formula: "Trajectory: $$y = (\tan \theta_0)x - \frac{gx^2}{2(v_0 \cos \theta_0)^2}$$" },
        { en: "Centripetal Acceleration", pos: "n.", zh: "向心加速度", def: "指向圓心的加速度。", formula: "$$a = \frac{v^2}{r} = r \omega^2$$" }
    ]},
    { id: 5, title: "Force and Motion I", words: [
        { en: "Newton's Second Law", pos: "n.", zh: "牛頓第二定律", def: "物體受力與加速度的關係。", formula: "$$\sum \vec{F} = m\vec{a}$$" },
        { en: "Equilibrium", pos: "n.", zh: "平衡", def: "合力為零的狀態。" }
    ]},
    { id: 6, title: "Force and Motion II", words: [
        { en: "Static Friction", pos: "n.", zh: "靜摩擦力", def: "物體開始移動前的摩擦力。", formula: "$$f_s \leq \mu_s N$$" },
        { en: "Kinetic Friction", pos: "n.", zh: "動摩擦力", def: "滑動中的摩擦力。", formula: "$$f_k = \mu_k N$$" },
        { en: "Terminal Speed", pos: "n.", zh: "終端速度", def: "阻力等於重力時的穩定速度。" }
    ]},
    { id: 7, title: "Kinetic Energy and Work", words: [
        { en: "Kinetic Energy", pos: "n.", zh: "動能", def: "由於運動而具有的能量。", formula: "$$K = \frac{1}{2}mv^2$$" },
        { en: "Work-Kinetic Energy Theorem", pos: "n.", zh: "功能定理", def: "合力對物體作功等於動能的變化量。", formula: "$$W = \Delta K = K_f - K_i$$" }
    ]},
    { id: 8, title: "Potential Energy & Energy Conservation", words: [
        { en: "Conservative Force", pos: "n.", zh: "保守力", def: "作功與路徑無關（如重力、彈力）。" },
        { en: "Mechanical Energy", pos: "n.", zh: "力學能", def: "動能與位能的總和。", formula: "$$E_{mec} = K + U$$" },
        { en: "Elastic Potential Energy", pos: "n.", zh: "彈性位能", formula: "$$U_s = \frac{1}{2}kx^2$$" }
    ]},
    { id: 9, title: "Center of Mass and Linear Momentum", words: [
        { en: "Center of Mass (COM)", pos: "n.", zh: "質心", def: "物體質量的平均位置。", formula: "$$x_{com} = \frac{1}{M} \sum m_i x_i$$" },
        { en: "Impulse", pos: "n.", zh: "衝量", def: "力對時間的累積。", formula: "$$\vec{J} = \int \vec{F} dt = \Delta \vec{p}$$" },
        { en: "Elastic Collision", pos: "n.", zh: "彈性碰撞", def: "碰撞前後動能守恆。" }
    ]},
    { id: 10, title: "Rotation", words: [
        { en: "Moment of Inertia", pos: "n.", zh: "轉動慣量", def: "物體抗拒轉動改變的程度。", formula: "$$I = \int r^2 dm$$" },
        { en: "Parallel-Axis Theorem", pos: "n.", zh: "平行軸定理", def: "求非質心軸的轉動慣量。", formula: "$$I = I_{com} + Mh^2$$" },
        { en: "Torque", pos: "n.", zh: "力矩", formula: "$$\vec{\tau} = \vec{r} \times \vec{F} = I \alpha$$" }
    ]},
    { id: 11, title: "Rolling, Torque, & Angular Momentum", words: [
        { en: "Angular Momentum", pos: "n.", zh: "角動量", def: "旋轉的動量。", formula: "$$\vec{L} = \vec{r} \times \vec{p} = I \omega$$" },
        { en: "Conservation of Angular Momentum", pos: "n.", zh: "角動量守恆", def: "外力矩為零時角動量不變。" }
    ]},
    { id: 12, title: "Equilibrium and Elasticity", words: [
        { en: "Static Equilibrium", pos: "n.", zh: "靜力平衡", def: "物體保持靜止的條件。", formula: "$$\sum \vec{F}=0, \sum \vec{\tau}=0$$" },
        { en: "Young's Modulus", pos: "n.", zh: "楊氏模數", def: "描述材料抗拉伸的能力。" }
    ]},
    { id: 13, title: "Gravitation", words: [
        { en: "Newton's Law of Gravitation", pos: "n.", zh: "萬有引力定律", formula: "$$F = G\frac{m_1 m_2}{r^2}$$" },
        { en: "Kepler's Laws", pos: "n.", zh: "開普勒定律", def: "描述行星運動的三大規律。" },
        { en: "Escape Speed", pos: "n.", zh: "脫離速度", formula: "$$v = \sqrt{\frac{2GM}{R}}$$" }
    ]},
    { id: 14, title: "Fluids", words: [
        { en: "Buoyant Force", pos: "n.", zh: "浮力", def: "流體對物體向上的托力。", formula: "$$F_b = \rho_{fluid} V_{disp} g$$" },
        { en: "Bernoulli's Equation", pos: "n.", zh: "伯努利方程式", formula: "$$P + \frac{1}{2}\rho v^2 + \rho gh = \text{const}$$" }
    ]},
    { id: 15, title: "Oscillations", words: [
        { en: "Simple Harmonic Motion (SHM)", pos: "n.", zh: "簡諧運動", def: "回復力與位移成正比。", formula: "$$x(t) = A \cos(\omega t + \phi)$$" },
        { en: "Torsion Pendulum", pos: "n.", zh: "扭擺", formula: "$$T = 2\pi \sqrt{\frac{I}{\kappa}}$$" }
    ]},
    { id: 16, title: "Waves I", words: [
        { en: "Wavelength", pos: "n.", zh: "波長", def: "波重複的最短距離。", formula: "$$v = f \lambda$$" },
        { en: "Phase Constant", pos: "n.", zh: "初相位", def: "描述波在 $t=0$ 時的狀態。" }
    ]},
    { id: 17, title: "Waves II", words: [
        { en: "Doppler Effect", pos: "n.", zh: "多普勒效應", def: "波源與觀察者相對運動導致的頻率改變。", formula: "$$f' = f \frac{v \pm v_D}{v \mp v_S}$$" },
        { en: "Sound Intensity Level", pos: "n.", zh: "分貝/聲強級", formula: "$$\beta = (10 \text{ dB}) \log \frac{I}{I_0}$$" }
    ]},
    { id: 18, title: "Temperature, Heat, & First Law", words: [
        { en: "Specific Heat", pos: "n.", zh: "比熱", formula: "$$Q = mc \Delta T$$" },
        { en: "The First Law of Thermodynamics", pos: "n.", zh: "熱力學第一定律", def: "能量守恆於熱力系統。", formula: "$$\Delta E_{int} = Q - W$$" }
    ]},
    { id: 19, title: "The Kinetic Theory of Gases", words: [
        { en: "Ideal Gas Law", pos: "n.", zh: "理想氣體定律", formula: "$$PV = nRT$$" },
        { en: "Root-Mean-Square Speed", pos: "n.", zh: "方均根速率", formula: "$$v_{rms} = \sqrt{\frac{3RT}{M}}$$" },
        { en: "Adiabatic Process", pos: "n.", zh: "絕熱過程", def: "系統與外界無熱量交換的過程。" }
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

