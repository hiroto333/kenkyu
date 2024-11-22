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
    }
];

let currentIndex = 0; // 現在表示中のシナリオのインデックス

// シナリオを更新して画面に表示する関数
const updateScenario = () => {
    const scenario = scenarios[currentIndex];

    // シナリオタイトルと内容を更新
    document.getElementById('scenarioTitle').textContent = scenario.title;

    // 必要な非常持ち出し品を更新
    const requiredItemsElement = document.querySelector('.required-items');
    requiredItemsElement.innerHTML = `
        <h3>必要な非常持ち出し品:</h3>
        <p>${scenario.requiredItems.join(', ')}</p>
    `;

    // 対応できない場合の結果を更新
    const consequenceElement = document.querySelector('.consequence');
    consequenceElement.innerHTML = `
        <h3>対応できない場合の結果:</h3>
        <p>${scenario.consequence}</p>
    `;

    // シナリオ画像を更新
    document.getElementById('scenarioImage').src = scenario.image;
};

// ナビゲーションボタン: 前へ
document.querySelectorAll('.navigation button')[0].addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + scenarios.length) % scenarios.length; // 前のシナリオに移動
    updateScenario();
});

// ナビゲーションボタン: 次へ
document.querySelectorAll('.navigation button')[1].addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * scenarios.length); // ランダムモード時はランダムに切り替え
    updateScenario();
});

// シミュレーション結果を表示する関数
function updateSimulationFeedback(selectedItems) {
    // 必要なアイテムが不足しているシナリオを判定
    const scenarioAdvices = scenarios.map(scenario => {
        const missingRequiredItems = scenario.requiredItems.filter(
            requiredItem => !selectedItems[requiredItem] || selectedItems[requiredItem] < 1
        );

        // 必要なアイテムが不足している場合のみ返す
        if (missingRequiredItems.length > 0) {
            return {
                title: scenario.title,
                description: scenario.description,
                consequence: scenario.consequence,
                missingItems: missingRequiredItems,
                image: scenario.image
            };
        }
        return null;
    }).filter(advice => advice !== null); // 不要な null を除外

    // 結果をHTMLとして生成
    let adviceHTML = scenarioAdvices.map(scenario => `
        <div class="scenario-advice">
            <h3>${scenario.title}</h3>
            <img src="${scenario.image}" alt="${scenario.title}" class="scenario-image">
            <p>${scenario.description}</p>
            <p>不足アイテム: ${scenario.missingItems.join(', ')}</p>
            <p class="consequence">想定される結果: ${scenario.consequence}</p>
        </div>
    `).join('');

    // すべて対応可能な場合のメッセージ
    if (scenarioAdvices.length === 0) {
        adviceHTML = "<p>現在の持ち出し袋で、シミュレーション上の課題に対応できます。</p>";
    }

    // フィードバックエリアを更新
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = adviceHTML;

    // フィードバック画面を表示
    document.querySelector('.container').style.display = 'none';
    feedback.style.display = 'block';
}

// 初期表示を設定
updateScenario();
