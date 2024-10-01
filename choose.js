const items = {
    "基本アイテム": [
        { name: "懐中電灯", weight: 0.3, explanation: "停電時に必要。予備電池も忘れずに。", unit: "個" },
        { name: "簡易ヘルメット", weight: 0.4, explanation: "落下物から頭を保護。コンパクトに折りたためるタイプが便利。", unit: "個" },
        { name: "防災ずきん", weight: 0.2, explanation: "ヘルメットの代わりに。子供用に最適。", unit: "個" },
        { name: "ホイッスル", weight: 0.05, explanation: "救助を求める際に使用。電池不要で音が大きい。", unit: "個" },
        { name: "紐なしのズック靴", weight: 0.6, explanation: "素早く履ける。ガラスの破片からも足を保護。", unit: "足" },
        { name: "雨具", weight: 0.3, explanation: "携帯用のポンチョタイプが場所を取らず便利。", unit: "着" },
        { name: "携帯ラジオ", weight: 0.2, explanation: "災害情報の入手に必須。手回し充電タイプが推奨。", unit: "台" },
        { name: "モバイルバッテリー", weight: 0.3, explanation: "スマートフォンの充電用。容量10000mAh程度が適当。", unit: "個" },
        { name: "ライター", weight: 0.05, explanation: "火起こしや照明用。防水マッチと併用がおすすめ。", unit: "個" },
        { name: "マッチ", weight: 0.05, explanation: "防水タイプが望ましい。ライターのバックアップとして。", unit: "箱" },
        { name: "ろうそく", weight: 0.1, explanation: "長時間の照明として。火災に注意。", unit: "本" },
        { name: "ナイフ", weight: 0.2, explanation: "マルチツール型が便利。様々な用途に使用可能。", unit: "個" },
        { name: "軍手", weight: 0.1, explanation: "がれきの撤去や防寒用。耐切創タイプが望ましい。", unit: "組" }
    ],
    "食料と水": [
        { name: "飲料水(500ml)", weight: 0.5, explanation: "1人1日3リットルが目安。必要最小限でも500ml×3本。", unit: "本" },
        { name: "非常食", weight: 0.2, explanation: "3食分以上。賞味期限の長いもの。缶詰やレトルト食品。", unit: "食" },
        { name: "缶切り", weight: 0.1, explanation: "缶詰を開けるため。プルトップ式でない缶詰がある場合に必要。", unit: "個" }
    ],
    "衣類・防寒": [
        { name: "毛布", weight: 0.8, explanation: "防寒、睡眠用。アルミブランケットは軽量で代用可。", unit: "枚" },
        { name: "衣類", weight: 0.5, explanation: "下着を含む着替え一式。速乾性の素材が望ましい。", unit: "組" },
        { name: "レジャーシート", weight: 0.2, explanation: "地面に敷いて使用。断熱効果もある。", unit: "枚" }
    ],
    "衛生用品": [
        { name: "トイレットペーパー", weight: 0.2, explanation: "必要最小限の量を持参。圧縮タイプが便利。", unit: "巻" },
        { name: "ティッシュペーパー", weight: 0.1, explanation: "小包装のものが便利。様々な用途に使用可能。", unit: "箱" },
        { name: "ウェットティッシュ", weight: 0.2, explanation: "清潔保持に。除菌タイプが望ましい。", unit: "パック" },
        { name: "歯ブラシセット", weight: 0.1, explanation: "歯磨き粉、洗口液含む。衛生管理に重要。", unit: "セット" },
        { name: "タオル", weight: 0.2, explanation: "清潔なタオル。多目的に使用可能。", unit: "枚" }
    ],
    "救急・医療": [
        { name: "救急箱", weight: 0.5, explanation: "基本的な救急用品一式。常備薬も含める。", unit: "セット" },
        { name: "マスク", weight: 0.1, explanation: "感染症予防、粉塵対策に。", unit: "枚" },
        { name: "アルコール消毒", weight: 0.2, explanation: "手指の消毒用。小型のボトルが便利。", unit: "本" },
        { name: "体温計", weight: 0.1, explanation: "体調管理用。電子体温計が壊れにくい。", unit: "本" }
    ],
    "工具・その他": [
        { name: "布製ガムテープ", weight: 0.2, explanation: "多用途に使える。補修や固定に便利。", unit: "巻" },
        { name: "ポリ袋", weight: 0.1, explanation: "ゴミ袋としても、防水袋としても使用可能。", unit: "組" },
        { name: "筆記用具", weight: 0.1, explanation: "メモを取るため。油性ペンがあると便利。", unit: "セット" },
        { name: "ロープ", weight: 0.3, explanation: "荷物の固定や応急措置に。パラコードが軽量で丈夫。", unit: "巻" }
    ],
    "貴重品": [
        { name: "現金", weight: 0.1, explanation: "小銭を含む現金。ATMが使えない状況を想定。", unit: "セット" },
        { name: "預貯金通帳", weight: 0.1, explanation: "コピーでも可。本人確認に必要。", unit: "冊" },
        { name: "健康保険証", weight: 0.01, explanation: "コピーでも可。医療機関受診時に必要。", unit: "枚" },
        { name: "運転免許証", weight: 0.01, explanation: "身分証明書として。", unit: "枚" },
        { name: "パスポート", weight: 0.1, explanation: "海外在住の場合は特に重要。", unit: "冊" },
        { name: "印鑑", weight: 0.05, explanation: "認印があると便利。ケース付きが望ましい。", unit: "個" },
        { name: "コンタクトレンズ", weight: 0.05, explanation: "使用者は予備を持参。ケア用品も忘れずに。", unit: "セット" },
        { name: "お薬手帳", weight: 0.05, explanation: "持病のある方は必須。薬の情報確認用。", unit: "冊" },
        { name: "鍵", weight: 0.05, explanation: "家や車の鍵。予備があれば持参。", unit: "セット" }
        ],
        "赤ちゃん用品": [
        { name: "哺乳瓶", weight: 0.2, explanation: "清潔なものを複数用意。", unit: "本" },
        { name: "粉ミルク", weight: 0.3, explanation: "携帯用の小分けパックが便利。", unit: "回分" },
        { name: "離乳食", weight: 0.2, explanation: "月齢に応じたものを用意。", unit: "食" },
        { name: "おやつ", weight: 0.1, explanation: "食べ慣れたものを少量。", unit: "個" },
        { name: "スプーン", weight: 0.05, explanation: "離乳食用。プラスチック製が軽量。", unit: "本" },
        { name: "洗浄綿", weight: 0.1, explanation: "衛生管理用。少し多めに用意。", unit: "包" },
        { name: "紙おむつ", weight: 0.5, explanation: "1日分以上。サイズに注意。", unit: "枚" },
        { name: "おしりふき", weight: 0.2, explanation: "おむつ替え用。たっぷり使うので多めに。", unit: "パック" },
        { name: "おんぶひも", weight: 0.3, explanation: "両手が使えるタイプが便利。", unit: "個" },
        { name: "玩具", weight: 0.1, explanation: "お気に入りの小さなもの。", unit: "個" },
        { name: "母子手帳", weight: 0.1, explanation: "予防接種歴などの確認用。", unit: "冊" },
        { name: "ベビーカー", weight: 3.0, explanation: "避難時の移動用。折りたたみタイプが望ましい。", unit: "台" }
    ],
    "高齢者用品": [
        { name: "高齢者手帳", weight: 0.1, explanation: "介護保険証や医療情報を確認するため。", unit: "冊" },
        { name: "予備メガネ", weight: 0.1, explanation: "普段使用している方は必須。ケース付きで。", unit: "組" },
        { name: "おむつ", weight: 0.5, explanation: "必要な方は1日分以上。", unit: "枚" },
        { name: "看護用品", weight: 0.3, explanation: "必要に応じて。かかりつけ医に相談を。", unit: "セット" },
        { name: "持病薬", weight: 0.2, explanation: "常用している薬。必要な量を持参。", unit: "セット" },
        { name: "おしりふき", weight: 0.2, explanation: "清潔保持に。", "unit": "パック" },
        { name: "補聴器", weight: 0.1, explanation: "必要な方は忘れずに。予備の電池も持参。", unit: "セット" },
        { name: "杖", weight: 0.3, explanation: "歩行が不安定な方に。折りたたみ式が便利。", unit: "本" }
    ],
    "女性用品": [
        { name: "生理用品", weight: 0.1, explanation: "避難所での必需品。十分な量を用意。", unit: "パック" },
        { name: "サニタリーショーツ", weight: 0.1, explanation: "生理時に使用。速乾性のものが望ましい。", unit: "枚" },
        { name: "防災ブザー", weight: 0.05, explanation: "緊急時に助けを呼ぶために。ホイッスルと併用も可能。", unit: "個" },
        { name: "中身の見えないゴミ袋", weight: 0.1, explanation: "プライバシーを守るために使用。", unit: "組" }
    ]
};

let selectedItems = {};
const maxWeight = 10; // kg
let currentWeight = 0;

function createItemList() {
    const itemList = document.getElementById('itemList');
    for (const [category, categoryItems] of Object.entries(items)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `<h2>${category}</h2>`;
        
        categoryItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-details">
                        <span class="item-weight">${item.weight}kg/${item.unit}</span> - ${item.explanation}
                    </div>
                </div>
                <div class="quantity-selector">
                    <button onclick="adjustQuantity('${item.name}', -1)">-</button>
                    <span class="quantity">0</span>
                    <button onclick="adjustQuantity('${item.name}', 1)">+</button>
                </div>
            `;
            categoryDiv.appendChild(itemDiv);
        });
        
        itemList.appendChild(categoryDiv);
    }
}

function findItem(name) {
    for (const category of Object.values(items)) {
        const found = category.find(item => item.name === name);
        if (found) return found;
    }
    return null;
}

function adjustQuantity(itemName, change) {
    const item = findItem(itemName);
    if (!item) return;

    if (!selectedItems[itemName]) selectedItems[itemName] = 0;
    const newQuantity = selectedItems[itemName] + change;
    const newWeight = currentWeight + (item.weight * change);

    if (newQuantity < 0 || newWeight > maxWeight) return;

    selectedItems[itemName] = newQuantity;
    currentWeight = newWeight;

    updateDisplay();
}

function updateDisplay() {
    const weightDisplay = document.getElementById('weightDisplay');
    const weightProgress = document.getElementById('weightProgress');
    
    weightDisplay.textContent = `${currentWeight.toFixed(1)}kg / ${maxWeight}kg`;
    const progressPercentage = (currentWeight / maxWeight) * 100;
    weightProgress.style.width = `${progressPercentage}%`;
    
    weightProgress.className = 'weight-progress';
    if (progressPercentage >= 90) weightProgress.classList.add('danger');
    else if (progressPercentage >= 70) weightProgress.classList.add('warning');

    document.querySelectorAll('.item').forEach(itemDiv => {
        const itemName = itemDiv.querySelector('.item-name').textContent;
        const quantitySpan = itemDiv.querySelector('.quantity');
        quantitySpan.textContent = selectedItems[itemName] || 0;
    });

    const selectedItemsList = document.getElementById('selectedItems');
    selectedItemsList.innerHTML = '';
    for (const [itemName, quantity] of Object.entries(selectedItems)) {
        if (quantity > 0) {
            const item = findItem(itemName);
            const li = document.createElement('li');
            li.className = 'selected-item';
            li.innerHTML = `
                <span>${itemName} × ${quantity}</span>
                <span>${(item.weight * quantity).toFixed(1)}kg</span>
            `;
            selectedItemsList.appendChild(li);
        }
    }

}

// リセットボタン機能
function resetSelection() {
    selectedItems = {};  // 選択したアイテムをリセット
    currentWeight = 0;   // 重量をリセット
    updateDisplay();     // 画面を更新
}

createItemList();