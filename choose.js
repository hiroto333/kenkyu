const items = {
    "基本アイテム": [
        { name: "懐中電灯", weight: 0.3, volume: 300, explanation: "停電時に必要。予備電池も忘れずに。", unit: "個", dimensions: "15×6×6cm" },
        { name: "簡易ヘルメット", weight: 0.4, volume: 2000, explanation: "落下物から頭を保護。コンパクトに折りたためるタイプが便利。", unit: "個", dimensions: "20×20×5cm" },
        { name: "防災ずきん", weight: 0.2, volume: 1000, explanation: "ヘルメットの代わりに。子供用に最適。", unit: "個", dimensions: "25×20×2cm" },
        { name: "ホイッスル", weight: 0.05, volume: 20, explanation: "救助を求める際に使用。電池不要で音が大きい。", unit: "個", dimensions: "5×2×2cm" },
        { name: "紐なしのズック靴", weight: 0.6, volume: 2000, explanation: "素早く履ける。ガラスの破片からも足を保護。", unit: "足", dimensions: "25×10×8cm" },
        { name: "雨具", weight: 0.3, volume: 500, explanation: "携帯用のポンチョタイプが場所を取らず便利。", unit: "着", dimensions: "20×15×2cm" },
        { name: "携帯ラジオ", weight: 0.2, volume: 250, explanation: "災害情報の入手に必須。手回し充電タイプが推奨。", unit: "台", dimensions: "10×5×5cm" },
        { name: "モバイルバッテリー", weight: 0.3, volume: 200, explanation: "スマートフォンの充電用。容量10000mAh程度が適当。", unit: "個", dimensions: "10×6×2cm" },
        { name: "ライター", weight: 0.05, volume: 50, explanation: "火起こしや照明用。防水マッチと併用がおすすめ。", unit: "個", dimensions: "8×2×1cm" },
        { name: "マッチ", weight: 0.05, volume: 30, explanation: "防水タイプが望ましい。ライターのバックアップとして。", unit: "箱", dimensions: "5×3×2cm" },
        { name: "ろうそく", weight: 0.1, volume: 100, explanation: "長時間の照明として。火災に注意。", unit: "本", dimensions: "10×2×2cm" },
        { name: "ナイフ", weight: 0.2, volume: 150, explanation: "マルチツール型が便利。様々な用途に使用可能。", unit: "個", dimensions: "10×3×2cm" },
        { name: "軍手", weight: 0.1, volume: 200, explanation: "がれきの撤去や防寒用。耐切創タイプが望ましい。", unit: "組", dimensions: "25×15×1cm" }
    ],
    "食料と水": [
        { name: "飲料水(500ml)", weight: 0.5, volume: 500, explanation: "1人1日3リットルが目安。必要最小限でも500ml×3本。", unit: "本", dimensions: "21×7×7cm" },
        { name: "非常食", weight: 0.2, volume: 400, explanation: "3食分以上。賞味期限の長いもの。缶詰やレトルト食品。", unit: "食", dimensions: "15×10×3cm" },
        { name: "缶切り", weight: 0.1, volume: 50, explanation: "缶詰を開けるため。プルトップ式でない缶詰がある場合に必要。", unit: "個", dimensions: "10×5×1cm" }
    ],
    "衣類・防寒": [
        { name: "毛布", weight: 0.8, volume: 3000, explanation: "防寒、睡眠用。アルミブランケットは軽量で代用可。", unit: "枚", dimensions: "30×20×5cm" },
        { name: "衣類", weight: 0.5, volume: 2000, explanation: "下着を含む着替え一式。速乾性の素材が望ましい。", unit: "組", dimensions: "25×20×4cm" },
        { name: "レジャーシート", weight: 0.2, volume: 300, explanation: "地面に敷いて使用。断熱効果もある。", unit: "枚", dimensions: "15×10×2cm" }
    ],
    "衛生用品": [
        { name: "トイレットペーパー", weight: 0.2, volume: 1000, explanation: "必要最小限の量を持参。圧縮タイプが便利。", unit: "巻", dimensions: "10×10×10cm" },
        { name: "ティッシュペーパー", weight: 0.1, volume: 400, explanation: "小包装のものが便利。様々な用途に使用可能。", unit: "箱", dimensions: "12×6×6cm" },
        { name: "ウェットティッシュ", weight: 0.2, volume: 500, explanation: "清潔保持に。除菌タイプが望ましい。", unit: "パック", dimensions: "15×10×3cm" },
        { name: "歯ブラシセット", weight: 0.1, volume: 200, explanation: "歯磨き粉、洗口液含む。衛生管理に重要。", unit: "セット", dimensions: "20×5×2cm" },
        { name: "タオル", weight: 0.2, volume: 500, explanation: "清潔なタオル。多目的に使用可能。", unit: "枚", dimensions: "25×12×2cm" }
    ],
    "救急・医療": [
        { name: "救急箱", weight: 0.5, volume: 2000, explanation: "基本的な救急用品一式。常備薬も含める。", unit: "セット", dimensions: "20×15×7cm" },
        { name: "マスク", weight: 0.1, volume: 100, explanation: "感染症予防、粉塵対策に。", unit: "枚", dimensions: "17×9×1cm" },
        { name: "アルコール消毒", weight: 0.2, volume: 200, explanation: "手指の消毒用。小型のボトルが便利。", unit: "本", dimensions: "10×5×4cm" },
        { name: "体温計", weight: 0.1, volume: 50, explanation: "体調管理用。電子体温計が壊れにくい。", unit: "本", dimensions: "13×2×2cm" }
    ],
    "工具・その他": [
        { name: "布製ガムテープ", weight: 0.2, volume: 300, explanation: "多用途に使える。補修や固定に便利。", unit: "巻", dimensions: "10×10×3cm" },
        { name: "ポリ袋", weight: 0.1, volume: 200, explanation: "ゴミ袋としても、防水袋としても使用可能。", unit: "組", dimensions: "20×15×1cm" },
        { name: "筆記用具", weight: 0.1, volume: 100, explanation: "メモを取るため。油性ペンがあると便利。", unit: "セット", dimensions: "15×5×1cm" },
        { name: "ロープ", weight: 0.3, volume: 500, explanation: "荷物の固定や応急措置に。パラコードが軽量で丈夫。", unit: "巻", dimensions: "15×15×3cm" }
    ],
    "貴重品": [
        { name: "現金", weight: 0.1, volume: 50, explanation: "小銭を含む現金。ATMが使えない状況を想定。", unit: "セット", dimensions: "10×7×1cm" },
        { name: "預貯金通帳", weight: 0.1, volume: 30, explanation: "コピーでも可。本人確認に必要。", unit: "冊", dimensions: "15×9×0.5cm" },
        { name: "健康保険証", weight: 0.01, volume: 10, explanation: "コピーでも可。医療機関受診時に必要。", unit: "枚", dimensions: "9×6×0.1cm" },
        { name: "運転免許証", weight: 0.01, volume: 10, explanation: "身分証明書として。", unit: "枚", dimensions: "9×6×0.1cm" },
        { name: "パスポート", weight: 0.1, volume: 50, explanation: "海外在住の場合は特に重要。", unit: "冊", dimensions: "12×9×0.5cm" },
        { name: "印鑑", weight: 0.05, volume: 30, explanation: "認印があると便利。ケース付きが望ましい。", unit: "個", dimensions: "6×2×2cm" },
        { name: "コンタクトレンズ", weight: 0.05, volume: 100, explanation: "使用者は予備を持参。ケア用品も忘れずに。", unit: "セット", dimensions: "8×4×3cm" },
        { name: "お薬手帳", weight: 0.05, volume: 30, explanation: "持病のある方は必須。薬の情報確認用。", unit: "冊", dimensions: "15×9×0.5cm" },
        { name: "鍵", weight: 0.05, volume: 20, explanation: "家や車の鍵。予備があれば持参。", unit: "セット", dimensions: "5×3×1cm" }
    ],
    "赤ちゃん用品": [
        { name: "哺乳瓶", weight: 0.2, volume: 300, explanation: "清潔なものを複数用意。", unit: "本", dimensions: "15×7×7cm" },
        { name: "粉ミルク", weight: 0.3, volume: 500, explanation: "携帯用の小分けパックが便利。", unit: "回分", dimensions: "15×10×3cm" },
        { name: "離乳食", weight: 0.2, volume: 400, explanation: "月齢に応じたものを用意。", unit: "食", dimensions: "12×8×4cm" },
        { name: "おやつ", weight: 0.1, volume: 200, explanation: "食べ慣れたものを少量。", unit: "個", dimensions: "10×7×3cm" },
        { name: "スプーン", weight: 0.05, volume: 30, explanation: "離乳食用。プラスチック製が軽量。", unit: "本", dimensions: "12×3×1cm" },
        { name: "洗浄綿", weight: 0.1, volume: 200, explanation: "衛生管理用。少し多めに用意。", unit: "包", dimensions: "12×8×2cm" },
        { name: "紙おむつ", weight: 0.5, volume: 1500, explanation: "1日分以上。サイズに注意。", unit: "枚", dimensions: "25×15×4cm" },
        { name: "おしりふき", weight: 0.2, volume: 400, explanation: "おむつ替え用。たっぷり使うので多めに。", unit: "パック", dimensions: "15×10×3cm" },
        { name: "おんぶひも", weight: 0.3, volume: 800, explanation: "両手が使えるタイプが便利。", unit: "個", dimensions: "25×20×2cm" },
        { name: "玩具", weight: 0.1, volume: 200, explanation: "お気に入りの小さなもの。", unit: "個", dimensions: "10×10×2cm" },
        { name: "母子手帳", weight: 0.1, volume: 30, explanation: "予防接種歴などの確認用。", unit: "冊", dimensions: "15×9×0.5cm" },
        { name: "ベビーカー", weight: 3.0, volume: 20000, explanation: "避難時の移動用。折りたたみタイプが望ましい。", unit: "台", dimensions: "80×50×20cm" }
    ],
    "高齢者用品": [
        { name: "高齢者手帳", weight: 0.1, volume: 30, explanation: "介護保険証や医療情報を確認するため。", unit: "冊", dimensions: "15×9×0.5cm" },
        { name: "予備メガネ", weight: 0.1, volume: 200, explanation: "普段使用している方は必須。ケース付きで。", unit: "組", dimensions: "15×6×3cm" },
        { name: "おむつ", weight: 0.5, volume: 1000, explanation: "必要な方は1日分以上。", unit: "枚", dimensions: "25×15×4cm" },
        { name: "看護用品", weight: 0.3, volume: 1500, explanation: "必要に応じて。かかりつけ医に相談を。", unit: "セット", dimensions: "20×15×7cm" },
        { name: "持病薬", weight: 0.2, volume: 300, explanation: "常用している薬。必要な量を持参。", unit: "セット", dimensions: "15×10×3cm" },
        { name: "おしりふき", weight: 0.2, volume: 400, explanation: "清潔保持に。", unit: "パック", dimensions: "15×10×3cm" },
        { name: "補聴器", weight: 0.1, volume: 100, explanation: "必要な方は忘れずに。予備の電池も持参。", unit: "セット", dimensions: "8×5×3cm" },
        { name: "杖", weight: 0.3, volume: 800, explanation: "歩行が不安定な方に。折りたたみ式が便利。", unit: "本", dimensions: "90×3×3cm" }
    ],
    "女性用品": [
        { name: "生理用品", weight: 0.1, volume: 500, explanation: "避難所での必需品。十分な量を用意。", unit: "パック", dimensions: "20×12×5cm" },
        { name: "サニタリーショーツ", weight: 0.1, volume: 200, explanation: "生理時に使用。速乾性のものが望ましい。", unit: "枚", dimensions: "20×15×1cm" },
        { name: "防災ブザー", weight: 0.05, volume: 50, explanation: "緊急時に助けを呼ぶために。ホイッスルと併用も可能。", unit: "個", dimensions: "8×4×2cm" },
        { name: "中身の見えないゴミ袋", weight: 0.1, volume: 200, explanation: "プライバシーを守るために使用。", unit: "組", dimensions: "20×15×1cm" }
    ]
};

let selectedItems = {};
const maxWeight = 10; // kg
const maxVolume = 30000; // cm3 (30リットル)
let currentWeight = 0;
let currentVolume = 0;

function createItemList() {
    const itemList = document.getElementById('itemList');
    for (const [category, categoryItems] of Object.entries(items)) {
        const categoryDiv = document.createElement('div');
        //categoryDiv.className = 'category';
        //categoryDiv.innerHTML = `<h2>${category}</h2>`;
        
        categoryItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-details">
                        <span class="item-weight">${item.weight}kg</span> 
                        <span class="item-volume">${(item.volume/1000).toFixed(1)}L</span>
                        <span class="item-dimensions">${item.dimensions}</span>
                        /${item.unit} - ${item.explanation}
                    </div>
                </div>
                <div class="quantity-selector">
                    <button class="decrease-button" onclick="adjustQuantity('${item.name}', -1)">-</button>
                    <span class="quantity">0</span>
                    <button class="increase-button" onclick="adjustQuantity('${item.name}', 1)">+</button>
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
    const newVolume = currentVolume + (item.volume * change);

    if (newQuantity < 0 || newWeight > maxWeight || newVolume > maxVolume) return;

    selectedItems[itemName] = newQuantity;
    currentWeight = newWeight;
    currentVolume = newVolume;

    updateDisplay();
}

function updateDisplay() {
    const weightDisplay = document.getElementById('weightDisplay');
    const volumeDisplay = document.getElementById('volumeDisplay');
    const weightProgress = document.getElementById('weightProgress');
    const volumeProgress = document.getElementById('volumeProgress');
    
    weightDisplay.textContent = `重量： ${currentWeight.toFixed(1)}kg / ${maxWeight}kg`;
    volumeDisplay.textContent = `容量： ${(currentVolume/1000).toFixed(1)}L / ${maxVolume/1000}L`;
    
    const weightPercentage = (currentWeight / maxWeight) * 100;
    const volumePercentage = (currentVolume / maxVolume) * 100;
    
    weightProgress.style.width = `${weightPercentage}%`;
    volumeProgress.style.width = `${volumePercentage}%`;

    weightProgress.className = 'progress';
    volumeProgress.className = 'progress';
    
    if (weightPercentage >= 90) weightProgress.classList.add('danger');
    else if (weightPercentage >= 70) weightProgress.classList.add('warning');
    
    if (volumePercentage >= 90) volumeProgress.classList.add('danger');
    else if (volumePercentage >= 70) volumeProgress.classList.add('warning');

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
                <span>${(item.weight * quantity).toFixed(1)}kg / ${((item.volume * quantity)/1000).toFixed(1)}L</span>
            `;
            selectedItemsList.appendChild(li);
        }
    }

}

// リセットボタン機能
function resetSelection() {
    selectedItems = {};  // 選択したアイテムをリセット
    currentWeight = 0;   // 重量をリセット
    currentVolume = 0;   // 容量をリセット
    updateDisplay();     // 画面を更新
}


// 作成完了ボタン機能
function startSimulation() {
    const feedback = document.getElementById('feedback');
    const itemList = document.querySelector('.container');
    const advice = document.getElementById('advice');

    // フィードバックの例
    let adviceText = "<p>非常持ち出し袋の内容:</p>";

     // 基本アイテム
     if (!selectedItems["懐中電灯"] || selectedItems["懐中電灯"] < 1) {
        adviceText += "<p>懐中電灯がなく、暗闇で移動するのが非常に困難です。障害物にぶつかったり怪我をする危険があります。</p>";
    }
    if (!selectedItems["簡易ヘルメット"] || selectedItems["簡易ヘルメット"] < 1) {
        adviceText += "<p>簡易ヘルメットがないため、落下物から頭を守れません。負傷のリスクが高まります。</p>";
    }
    if (!selectedItems["防災ずきん"] || selectedItems["防災ずきん"] < 1) {
        adviceText += "<p>防災ずきんがなく、頭部の保護ができません。特に子供にとって危険です。</p>";
    }
    if (!selectedItems["ホイッスル"] || selectedItems["ホイッスル"] < 1) {
        adviceText += "<p>ホイッスルがなく、救助を求める際に大きな声を出さなければなりません。声が届かない場合があります。</p>";
    }
    if (!selectedItems["紐なしのズック靴"] || selectedItems["紐なしのズック靴"] < 1) {
        adviceText += "<p>靴がないため、足がガラスの破片やがれきで怪我をする可能性があります。</p>";
    }
    if (!selectedItems["雨具"] || selectedItems["雨具"] < 1) {
        adviceText += "<p>雨具がないため、大雨に濡れ、体温が低下して体調を崩す可能性があります。</p>";
    }
    if (!selectedItems["携帯ラジオ"] || selectedItems["携帯ラジオ"] < 1) {
        adviceText += "<p>携帯ラジオがなく、最新の災害情報が得られません。状況判断が難しくなります。</p>";
    }
    if (!selectedItems["モバイルバッテリー"] || selectedItems["モバイルバッテリー"] < 1) {
        adviceText += "<p>モバイルバッテリーがないため、スマートフォンを充電できず、連絡手段が絶たれる恐れがあります。</p>";
    }
    if (!selectedItems["ライター"] || selectedItems["ライター"] < 1) {
        adviceText += "<p>ライターがなく、火を起こせず暖を取ったり食事を温めたりすることができません。</p>";
    }
    if (!selectedItems["マッチ"] || selectedItems["マッチ"] < 1) {
        adviceText += "<p>マッチがなく、ライターが故障した場合のバックアップがありません。</p>";
    }
    if (!selectedItems["ろうそく"] || selectedItems["ろうそく"] < 1) {
        adviceText += "<p>ろうそくがなく、長時間の停電時に明かりを確保できません。</p>";
    }
    if (!selectedItems["ナイフ"] || selectedItems["ナイフ"] < 1) {
        adviceText += "<p>ナイフがないため、緊急時に物を切ったり、調理ができなかったりします。</p>";
    }
    if (!selectedItems["軍手"] || selectedItems["軍手"] < 1) {
        adviceText += "<p>軍手がなく、がれきを安全に移動させたり手を保護することができません。</p>";
    }

    // 食料と水
    if (!selectedItems["飲料水(500ml)"] || selectedItems["飲料水(500ml)"] < 3) {
        adviceText += "<p>飲料水が不足しており、1日以上持たない可能性があります。脱水症状のリスクがあります。</p>";
    }
    if (!selectedItems["非常食"] || selectedItems["非常食"] < 3) {
        adviceText += "<p>非常食が足りないため、十分な栄養を取ることができません。体力が低下します。</p>";
    }
    if (!selectedItems["缶切り"] || selectedItems["缶切り"] < 1) {
        adviceText += "<p>缶切りがなく、缶詰の非常食を開けることができません。</p>";
    }

    // 衣類・防寒
    if (!selectedItems["毛布"] || selectedItems["毛布"] < 1) {
        adviceText += "<p>毛布がなく、寒さを防げません。体温が低下しやすくなります。</p>";
    }
    if (!selectedItems["衣類"] || selectedItems["衣類"] < 1) {
        adviceText += "<p>衣類がないため、着替えができず、衛生状態が悪化する可能性があります。</p>";
    }
    if (!selectedItems["レジャーシート"] || selectedItems["レジャーシート"] < 1) {
        adviceText += "<p>レジャーシートがなく、地面に直接座らなければなりません。冷気や湿気を防げません。</p>";
    }

    // 衛生用品
    if (!selectedItems["トイレットペーパー"] || selectedItems["トイレットペーパー"] < 1) {
        adviceText += "<p>トイレットペーパーがなく、衛生状態を保つのが困難です。</p>";
    }
    if (!selectedItems["ティッシュペーパー"] || selectedItems["ティッシュペーパー"] < 1) {
        adviceText += "<p>ティッシュペーパーがないため、必要なときに清潔にできません。</p>";
    }
    if (!selectedItems["ウェットティッシュ"] || selectedItems["ウェットティッシュ"] < 1) {
        adviceText += "<p>ウェットティッシュがなく、手を清潔に保つことができません。感染症のリスクが高まります。</p>";
    }
    if (!selectedItems["歯ブラシセット"] || selectedItems["歯ブラシセット"] < 1) {
        adviceText += "<p>歯ブラシセットがなく、口腔衛生が悪化する可能性があります。</p>";
    }
    if (!selectedItems["タオル"] || selectedItems["タオル"] < 1) {
        adviceText += "<p>タオルがなく、汗や水分を拭くことができず、不快な状態になります。</p>";
    }

    // 救急・医療
    if (!selectedItems["救急箱"] || selectedItems["救急箱"] < 1) {
        adviceText += "<p>救急箱がなく、怪我や病気の応急処置ができません。</p>";
    }
    if (!selectedItems["マスク"] || selectedItems["マスク"] < 1) {
        adviceText += "<p>マスクがなく、感染症や粉塵から守れません。</p>";
    }
    if (!selectedItems["アルコール消毒"] || selectedItems["アルコール消毒"] < 1) {
        adviceText += "<p>アルコール消毒がなく、手を消毒できません。感染のリスクがあります。</p>";
    }
    if (!selectedItems["体温計"] || selectedItems["体温計"] < 1) {
        adviceText += "<p>体温計がなく、体調の変化に気づくことが遅れる可能性があります。</p>";
    }

    // 工具・その他
    if (!selectedItems["布製ガムテープ"] || selectedItems["布製ガムテープ"] < 1) {
        adviceText += "<p>布製ガムテープがなく、応急修理ができません。</p>";
    }
    if (!selectedItems["ポリ袋"] || selectedItems["ポリ袋"] < 1) {
        adviceText += "<p>ポリ袋がなく、ゴミや汚物を処理するのが困難です。</p>";
    }
    if (!selectedItems["筆記用具"] || selectedItems["筆記用具"] < 1) {
        adviceText += "<p>筆記用具がなく、メモを取ったり、必要な情報を書き留めたりすることができません。</p>"; 
    }
    if (!selectedItems["ロープ"] || selectedItems["ロープ"] < 1) {
        adviceText += "<p>ロープがなく、荷物を固定したり、応急的に使用したりすることができません。</p>";
    }
    // 貴重品
    if (!selectedItems["現金"] || selectedItems["現金"] < 1) {
        adviceText += "<p>現金がなく、停電時に電子決済が使えない場合、物を購入することができません。</p>";
    }
    if (!selectedItems["預貯金通帳"] || selectedItems["預貯金通帳"] < 1) {
        adviceText += "<p>預貯金通帳がなく、本人確認が必要なときに不便です。</p>";
    }
    if (!selectedItems["健康保険証"] || selectedItems["健康保険証"] < 1) {
        adviceText += "<p>健康保険証がなく、病院で治療を受ける際に不便が生じます。</p>";
    }
    if (!selectedItems["運転免許証"] || selectedItems["運転免許証"] < 1) {
        adviceText += "<p>運転免許証がなく、身分証明が必要な場面で困ることがあります。</p>";
    }
    if (!selectedItems["パスポート"] || selectedItems["パスポート"] < 1) {
        adviceText += "<p>パスポートがなく、海外避難が必要な場合に大変不便です。</p>";
    }
    if (!selectedItems["印鑑"] || selectedItems["印鑑"] < 1) {
        adviceText += "<p>印鑑がなく、重要な手続きがスムーズに進まない場合があります。</p>";
    }
    if (!selectedItems["コンタクトレンズ"] || selectedItems["コンタクトレンズ"] < 1) {
        adviceText += "<p>コンタクトレンズがなく、視力が悪い人は見えにくい状態が続いてしまいます。</p>";
    }
    if (!selectedItems["お薬手帳"] || selectedItems["お薬手帳"] < 1) {
        adviceText += "<p>お薬手帳がなく、持病のある人は薬の情報を適切に管理できません。</p>";
    }
    if (!selectedItems["鍵"] || selectedItems["鍵"] < 1) {
        adviceText += "<p>鍵がなく、家や車に入ることができません。</p>";
    }

    // 赤ちゃん用品
    if (!selectedItems["哺乳瓶"] || selectedItems["哺乳瓶"] < 1) {
        adviceText += "<p>哺乳瓶がなく、赤ちゃんにミルクをあげることができません。</p>";
    }
    if (!selectedItems["粉ミルク"] || selectedItems["粉ミルク"] < 1) {
        adviceText += "<p>粉ミルクがなく、赤ちゃんが空腹になってしまいます。</p>";
    }
    if (!selectedItems["離乳食"] || selectedItems["離乳食"] < 1) {
        adviceText += "<p>離乳食がなく、月齢に合った食事を用意できません。</p>";
    }
    if (!selectedItems["おやつ"] || selectedItems["おやつ"] < 1) {
        adviceText += "<p>おやつがなく、赤ちゃんの機嫌を保つのが難しくなります。</p>";
    }
    if (!selectedItems["スプーン"] || selectedItems["スプーン"] < 1) {
        adviceText += "<p>スプーンがなく、赤ちゃんに離乳食を与えるのが難しくなります。</p>";
    }
    if (!selectedItems["洗浄綿"] || selectedItems["洗浄綿"] < 1) {
        adviceText += "<p>洗浄綿がなく、赤ちゃんの衛生を保てません。</p>";
    }
    if (!selectedItems["紙おむつ"] || selectedItems["紙おむつ"] < 1) {
        adviceText += "<p>紙おむつがなく、赤ちゃんのおむつ替えができません。</p>";
    }
    if (!selectedItems["おしりふき"] || selectedItems["おしりふき"] < 1) {
        adviceText += "<p>おしりふきがなく、おむつ替えの際に不便です。</p>";
    }
    if (!selectedItems["おんぶひも"] || selectedItems["おんぶひも"] < 1) {
        adviceText += "<p>おんぶひもがなく、両手を空けて赤ちゃんを抱っこすることができません。</p>";
    }
    if (!selectedItems["玩具"] || selectedItems["玩具"] < 1) {
        adviceText += "<p>玩具がなく、赤ちゃんの気を引くものがないため、ぐずりやすくなります。</p>";
    }
    if (!selectedItems["母子手帳"] || selectedItems["母子手帳"] < 1) {
        adviceText += "<p>母子手帳がなく、赤ちゃんの予防接種歴などの情報を確認できません。</p>";
    }
    if (!selectedItems["ベビーカー"] || selectedItems["ベビーカー"] < 1) {
        adviceText += "<p>ベビーカーがなく、赤ちゃんを長時間抱っこして移動するのが大変です。</p>";
    }

    // 高齢者用品
    if (!selectedItems["高齢者手帳"] || selectedItems["高齢者手帳"] < 1) {
        adviceText += "<p>高齢者手帳がなく、医療情報や保険情報が確認できません。</p>";
    }
    if (!selectedItems["予備メガネ"] || selectedItems["予備メガネ"] < 1) {
        adviceText += "<p>予備メガネがなく、視力が悪い高齢者は見えにくくなります。</p>";
    }
    if (!selectedItems["おむつ"] || selectedItems["おむつ"] < 1) {
        adviceText += "<p>おむつがなく、高齢者が快適に過ごせない可能性があります。</p>";
    }
    if (!selectedItems["看護用品"] || selectedItems["看護用品"] < 1) {
        adviceText += "<p>看護用品がなく、必要なケアを行うことができません。</p>";
    }
    if (!selectedItems["持病薬"] || selectedItems["持病薬"] < 1) {
        adviceText += "<p>持病薬がなく、健康状態が悪化する危険があります。</p>";
    }
    if (!selectedItems["おしりふき"] || selectedItems["おしりふき"] < 1) {
        adviceText += "<p>おしりふきがなく、清潔保持が困難です。</p>";
    }
    if (!selectedItems["補聴器"] || selectedItems["補聴器"] < 1) {
        adviceText += "<p>補聴器がなく、高齢者がコミュニケーションを取れません。</p>";
    }
    if (!selectedItems["杖"] || selectedItems["杖"] < 1) {
        adviceText += "<p>杖がなく、歩行が不安定な高齢者が転倒するリスクがあります。</p>";
    }

    // 女性用品
    if (!selectedItems["生理用品"] || selectedItems["生理用品"] < 1) {
        adviceText += "<p>生理用品がなく、避難所での衛生管理が困難です。</p>";
    }
    if (!selectedItems["サニタリーショーツ"] || selectedItems["サニタリーショーツ"] < 1) {
        adviceText += "<p>サニタリーショーツがなく、快適に過ごすのが難しくなります。</p>";
    }
    if (!selectedItems["防災ブザー"] || selectedItems["防災ブザー"] < 1) {
        adviceText += "<p>防災ブザーがなく、緊急時に助けを呼ぶ手段が限られます。</p>";
    }
    if (!selectedItems["中身の見えないゴミ袋"] || selectedItems["中身の見えないゴミ袋"] < 1) {
        adviceText += "<p>中身の見えないゴミ袋がなく、プライバシーを守ることが難しくなります。</p>";
    }

    advice.innerHTML = adviceText;

    // メイン画面を非表示にし、フィードバック画面を表示
    itemList.style.display = 'none';
    feedback.style.display = 'block';
}

// 戻るボタン機能
function goBack() {
    const feedback = document.getElementById('feedback');
    const itemList = document.querySelector('.container');
    
    // フィードバック画面を非表示にし、メイン画面を再表示
    feedback.style.display = 'none';
    itemList.style.display = 'flex';
}

createItemList();