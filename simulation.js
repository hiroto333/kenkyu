// シナリオデータ
const scenarios = [
    {
        title: "停電発生",
        description: "夜間に大規模停電が発生。懐中電灯がないと避難経路が確認できません。",
        requiredItems: ["懐中電灯"],
        image: "flashlight-7481941_1280.jpg",
        consequence: "暗闇の中で避難経路を見失う可能性があります。"
    },
    {
        title: "道路損壊",
        description: "地震で道路が損壊し、避難所までの道のりが普段より遠回りに。",
        requiredItems: ["紐なしのズック靴"],
        image: "/api/placeholder/800/300",
        consequence: "長距離歩行による疲労と脱水のリスクがあります。"
    },
    {
        title: "寒波到来",
        description: "避難所に向かう途中、急激な気温低下が発生。",
        requiredItems: ["毛布", "使い捨てカイロ"],
        image: "/api/placeholder/800/300",
        consequence: "体温低下による健康被害のリスクがあります。"
    },
    {
        title: "水不足",
        description: "避難所での水の配給が少ない。",
        requiredItems: ["飲料水(500ml)"],
        minQuantity: 3,
        image: "/api/placeholder/800/300",
        consequence: "水不足による健康被害のリスクがあります。"
    },
    {
        title: "プライバシー問題",
        description: "避難所において、プライバシーが確保されていない。",
        requiredItems: ["耳栓", "アイマスク", "レジャーシート"],
        image: "/api/placeholder/800/300",
        consequence: "プライバシーが確保されず，大きなストレスとなるリスクがあります。"
    },
    {
        title: "不潔な髪の毛",
        description: "避難所に、シャンプーやシャワーが置いていない。",
        requiredItems: ["ドライシャンプー"],
        image: "/api/placeholder/800/300",
        consequence: "髪が洗えず、衛生的に辛くなる可能性があります。"
    },
    {
        title: "感染症",
        description: "生活用水がひっ迫したことで衛生環境が悪化し、手洗いが十分に行えない。",
        requiredItems: ["石鹸", "ウェットティッシュ"],
        image: "/api/placeholder/800/300",
        consequence: "新型コロナやインフルエンザ、ノロウイルスなどの感染症がまん延するリスクがあります。"
    },
    {
        title: "トイレ問題",
        description: "仮説トイレ到着が遅れており、避難所のトイレが混んでいる。",
        requiredItems: ["簡易トイレ"],
        minQuantity: 15,
        image: "/api/placeholder/800/300",
        consequence: "トイレが混んでいて，行けない可能性があります。"
    },
    {
        title: "情報が知りたい問題",
        description: "仮説トイレ到着が遅れており、避難所のトイレが混んでいる。",
        requiredItems: ["携帯ラジオ"],
        image: "/api/placeholder/800/300",
        consequence: "トイレが混んでいて，行けない可能性があります。"
    },
    {
        title: "ナイフ問題",
        description: "仮説トイレ到着が遅れており、避難所のトイレが混んでいる。",
        requiredItems: ["ナイフ"],
        image: "/api/placeholder/800/300",
        consequence: "トイレが混んでいて，行けない可能性があります。"
    },
    {
        title: "ろうそく問題",
        description: "仮説トイレ到着が遅れており、避難所のトイレが混んでいる。",
        requiredItems: ["ろうそく"],
        image: "/api/placeholder/800/300",
        consequence: "トイレが混んでいて，行けない可能性があります。"
    }
];

let displayedScenarios = [];  // 表示済みシナリオを追跡
let simulationCount = 0;      // シミュレーション回数を追跡
const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};

// 対応できないシナリオを特定する関数
function getUnhandledScenarios(selectedItems) {
    const unhandledScenarios = [];
    
    for (const scenario of scenarios) {
        if (scenario.title === "水不足") {
            // 水不足シナリオの特別処理
            const waterQuantity = selectedItems["飲料水(500ml)"] || 0;
            if (waterQuantity < 3) {
                unhandledScenarios.push(scenario);
            }
        } else if (scenario.title === "トイレ問題") {
            // トイレ問題シナリオの特別処理
            const toiletQuantity = selectedItems["簡易トイレ"] || 0;
            if (toiletQuantity < 15) {
                unhandledScenarios.push(scenario);
            }
        } else {
            // その他のシナリオ処理
            const hasRequiredItems = scenario.requiredItems.some(item => 
                selectedItems[item] && selectedItems[item] > 0
            );
            if (!hasRequiredItems) {
                unhandledScenarios.push(scenario);
            }
        }
    }
    
    return unhandledScenarios;
}

// ランダムな未表示シナリオを取得する関数
function getNextScenario(unhandledScenarios) {
    const availableScenarios = unhandledScenarios.filter(
        scenario => !displayedScenarios.includes(scenario.title)
    );
    
    if (availableScenarios.length === 0) {
        // すべてのシナリオを表示済みの場合、表示履歴をリセット
        displayedScenarios = [];
        return unhandledScenarios[Math.floor(Math.random() * unhandledScenarios.length)];
    }
    
    return availableScenarios[Math.floor(Math.random() * availableScenarios.length)];
}

// シナリオを表示する関数
function displayScenario(scenario) {
    document.getElementById('scenarioTitle').textContent = scenario.title;
    const requiredItemsElement = document.querySelector('.required-items');
    requiredItemsElement.innerHTML = `
        <h3>必要な非常持ち出し品:</h3>
        <p>${scenario.requiredItems.join(', ')}${scenario.minQuantity ? ` (${scenario.minQuantity}個以上)` : ''}</p>
    `;
    
    const consequenceElement = document.querySelector('.consequence');
    consequenceElement.innerHTML = `
        <h3>対応できない場合の結果:</h3>
        <p>${scenario.consequence}</p>
    `;
    
    document.getElementById('scenarioImage').src = scenario.image;
    displayedScenarios.push(scenario.title);
}

// シミュレーションを開始/更新する関数
function updateSimulation(selectedItems) {
    const unhandledScenarios = getUnhandledScenarios(selectedItems);
    
    if (unhandledScenarios.length === 0) {
        // すべてのシナリオに対応可能な場合
        document.getElementById('feedback').innerHTML = 
            "<p>現在の持ち出し袋で、すべてのシナリオに対応できます。</p>";
        return;
    }
    
    if (simulationCount >= 10) {
        // 10回のシミュレーション後、続行するかユーザーに確認
        const continueButton = document.createElement('button');
        continueButton.textContent = 'さらにシナリオを見る';
        continueButton.onclick = () => {
            simulationCount = 0;
            const nextScenario = getNextScenario(unhandledScenarios);
            displayScenario(nextScenario);
        };
        document.querySelector('.navigation').appendChild(continueButton);
        return;
    }
    
    const nextScenario = getNextScenario(unhandledScenarios);
    displayScenario(nextScenario);
    simulationCount++;
}

// ナビゲーションボタンのイベントリスナー
document.querySelectorAll('.navigation button').forEach(button => {
    button.addEventListener('click', () => {
        if (simulationCount < 10) {
            updateSimulation(selectedItems); // selectedItemsはグローバル変数として存在する前提
        }
    });
});

// 初期表示
updateSimulation({});