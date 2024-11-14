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
        requiredItems: ["歩きやすい靴", "飲料水"],
        image: "/api/placeholder/800/300",
        consequence: "長距離歩行による疲労と脱水のリスクがあります。"
    },
    {
        title: "寒波到来",
        description: "避難所に向かう途中、急激な気温低下が発生。",
        requiredItems: ["防寒着", "使い捨てカイロ"],
        image: "/api/placeholder/800/300",
        consequence: "体温低下による健康被害のリスクがあります。"
    }
];

let currentIndex = 0;
let isRandomMode = false;

const updateScenario = () => {
    const scenario = scenarios[currentIndex];
    document.getElementById('scenarioTitle').textContent = scenario.title;
    document.getElementById('scenarioDescription').textContent = scenario.description;
    document.getElementById('requiredItems').textContent = scenario.requiredItems.join(', ');
    document.getElementById('consequence').textContent = scenario.consequence;
    document.getElementById('scenarioImage').src = scenario.image;
};

document.getElementById('prevButton').addEventListener('click', () => {
    if (!isRandomMode) {
        currentIndex = (currentIndex - 1 + scenarios.length) % scenarios.length;
        updateScenario();
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    if (isRandomMode) {
        currentIndex = Math.floor(Math.random() * scenarios.length);
    } else {
        currentIndex = (currentIndex + 1) % scenarios.length;
    }
    updateScenario();
});

document.getElementById('toggleRandom').addEventListener('click', () => {
    isRandomMode = !isRandomMode;
    document.getElementById('toggleRandom').textContent = `ランダムモード: ${isRandomMode ? 'ON' : 'OFF'}`;
    document.getElementById('prevButton').classList.toggle('disabled', isRandomMode);
});

// 初期表示
updateScenario();