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
        image: "",
        consequence: "長距離歩行による疲労と脱水のリスクがあります。"
    },
    {
        title: "寒波到来",
        description: "避難所に向かう途中、急激な気温低下が発生。",
        requiredItems: ["毛布", "使い捨てカイロ"],
        image: "",
        consequence: "体温低下による健康被害のリスクがあります。"
    },
    {
        title: "水不足",
        description: "避難所での水の配給が少ない。",
        requiredItems: ["飲料水(500ml)"],
        minQuantity: 3,
        image: "",
        consequence: "水不足による健康被害のリスクがあります。"
    },
    {
        title: "プライバシー問題",
        description: "避難所において、プライバシーが確保されていない。",
        requiredItems: ["耳栓", "アイマスク", "レジャーシート"],
        image: "",
        consequence: "プライバシーが確保されず，大きなストレスとなるリスクがあります。"
    },
    {
        title: "不潔な髪の毛",
        description: "避難所に、シャンプーやシャワーが置いていない。",
        requiredItems: ["ドライシャンプー"],
        image: "",
        consequence: "髪が洗えず、衛生的に辛くなる可能性があります。"
    },
    {
        title: "感染症",
        description: "生活用水がひっ迫したことで衛生環境が悪化し、手洗いが十分に行えない。",
        requiredItems: ["石鹸", "ウェットティッシュ"],
        image: "",
        consequence: "新型コロナやインフルエンザ、ノロウイルスなどの感染症がまん延するリスクがあります。"
    },
    {
        title: "トイレ問題",
        description: "仮説トイレ到着が遅れており、避難所のトイレが混んでいる。",
        requiredItems: ["簡易トイレ"],
        minQuantity: 15,
        image: "",
        consequence: "トイレが混んでいて，行けない可能性があります。"
    },
    {
        title: "情報が知りたい問題",
        description: "仮説トイレ到着が遅れており、避難所のトイレが混んでいる。",
        requiredItems: ["携帯ラジオ"],
        image: "",
        consequence: "トイレが混んでいて，行けない可能性があります。"
    },
    {
        title: "ナイフ問題",
        description: "仮説トイレ到着が遅れており、避難所のトイレが混んでいる。",
        requiredItems: ["ナイフ"],
        image: "",
        consequence: "トイレが混んでいて，行けない可能性があります。"
    },
    {
        title: "ろうそく問題",
        description: "仮説トイレ到着が遅れており、避難所のトイレが混んでいる。",
        requiredItems: ["ろうそく"],
        image: "",
        consequence: "トイレが混んでいて，行けない可能性があります。"
    }
];

// 表示済みシナリオを追跡する配列
let displayedScenarios = [];

// シミュレーション回数を追跡する変数
let simulationCount = 0;

// 現在表示しているシナリオのインデックス
let currentIndex = 0;

// 固定されたシナリオの順序を保持する配列
let fixedScenarioOrder = [];

// ローカルストレージから選択されたアイテムを取得（なければ空オブジェクトを使用）
const backpackState = JSON.parse(localStorage.getItem('backpackState')) || {};
const selectedItems = backpackState.selectedItems || {};

function getUnhandledScenarios(selectedItems) {
    console.log('選択されたアイテム:', selectedItems);
    
    const unhandledScenarios = scenarios.filter(scenario => {
        // 必須アイテムがすべて揃っているか確認
        const hasAllRequiredItems = scenario.requiredItems.every(item => {
            const hasEnoughQuantity = scenario.minQuantity
                ? (selectedItems[item] || 0) >= scenario.minQuantity // 必要数を満たすか
                : selectedItems[item] > 0; // 少なくとも1個は持っているか
            return hasEnoughQuantity;
        });

        // デバッグ用のログ
        if (!hasAllRequiredItems) {
            console.log('未対応のシナリオ:', scenario.title);
            console.log('不足しているアイテム:', 
                scenario.requiredItems.filter(item => {
                    const hasEnoughQuantity = scenario.minQuantity
                        ? (selectedItems[item] || 0) >= scenario.minQuantity
                        : selectedItems[item] > 0;
                    return !hasEnoughQuantity;
                })
            );
        }

        return !hasAllRequiredItems;
    });

    return unhandledScenarios;
}


// 配列をランダムに並び替える関数（Fisher-Yatesアルゴリズム）
function shuffleScenarios(scenarios) {
    const array = [...scenarios];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 指定されたインデックスのシナリオを表示する関数
function displayScenarioByIndex(index) {
    const scenario = fixedScenarioOrder[index]; // 現在のシナリオを取得
    
    // シナリオの内容をHTML要素に反映
    document.getElementById('scenarioTitle').textContent = scenario.title;
    document.querySelector('.required-items').innerHTML = `
        <h3>必要な非常持ち出し品:</h3>
        <p>${scenario.requiredItems.join(', ')}${scenario.minQuantity ? ` (${scenario.minQuantity}個以上)` : ''}</p>
    `;
    document.querySelector('.consequence').innerHTML = `
        <h3>対応できない場合の結果:</h3>
        <p>${scenario.consequence}</p>
    `;
    document.getElementById('scenarioImage').src = scenario.image;

    // ナビゲーションボタンの有効/無効を更新
    document.getElementById('prevButton').disabled = index === 0; // 最初のシナリオで「前へ」を無効化
    document.getElementById('nextButton').disabled = index === fixedScenarioOrder.length - 1; // 最後のシナリオで「次へ」を無効化

    // シミュレーションが10回目の場合に「戻る」ボタンを表示
    if (simulationCount === 10) {
        document.getElementById('backButton').style.display = 'block';
    }
}

// シミュレーションを初期化する関数
function initializeSimulation(selectedItems) {
    const unhandledScenarios = getUnhandledScenarios(selectedItems); // 未対応シナリオを取得
    fixedScenarioOrder = shuffleScenarios(unhandledScenarios); // ランダムな順序で固定
    simulationCount = 0;  // シミュレーション回数をリセット
    currentIndex = 0;     // 現在のインデックスをリセット

    // シナリオがある場合は最初のシナリオを表示、ない場合はメッセージを表示
    if (fixedScenarioOrder.length > 0) {
        displayScenarioByIndex(currentIndex);
    } else {
        document.getElementById('feedback').innerHTML = 
            "<p>現在の持ち出し袋で、すべてのシナリオに対応できます。</p>";
    }
}

// 「前へ」ボタンのクリックイベント
document.getElementById('prevButton').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // インデックスを1つ戻す
        displayScenarioByIndex(currentIndex); // 前のシナリオを表示
    }
});

// 「次へ」ボタンのクリックイベント
document.getElementById('nextButton').addEventListener('click', () => {
    if (currentIndex < fixedScenarioOrder.length - 1) {
        currentIndex++; // インデックスを1つ進める
        simulationCount++; // シミュレーション回数を更新
        displayScenarioByIndex(currentIndex); // 次のシナリオを表示
    }
});

console.log('選択されたアイテム全体:', selectedItems);
// シミュレーションを開始
initializeSimulation(selectedItems);

