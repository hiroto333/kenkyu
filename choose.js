const items = [
    { name: "懐中電灯", weight: 174, volume: 193, explanation: "LED超高輝度のハンディライト。" },
    { name: "簡易ヘルメット", weight: 450, volume: 4154, explanation: "折り畳み式ヘルメット。" },
    { name: "防災ずきん", weight: 400, volume: 2184, explanation: "耐熱耐火アルミ加工で頭部を保護。煙対策ができる。" },
    { name: "ホイッスル", weight: 19, volume: 34, explanation: "電池不要で音が大きい。" },
    { name: "紐なしのズック靴", weight: 400, volume: 4260, explanation: "素早く履ける。ガラスの破片からも足を保護。" },
    { name: "レインコート", weight: 76, volume: 150, explanation: "携帯用のポンチョタイプ。" },
    { name: "携帯ラジオ", weight: 89, volume: 58, explanation: "ラジオを聞くだけのシンプルな機能の小型携帯ラジオ。" },
    { name: "防災ラジオ", weight: 350, volume: 705, explanation: "LEDライト機能、手回し充電機能も備えた防災用ラジオ。スマホも充電できる。" },
    { name: "モバイルバッテリー", weight: 286, volume: 98, explanation: "スマートフォンの充電用。" },
    { name: "簡易トイレ", weight: 20, volume: 141, explanation: "簡易的なトイレ。1回分。" },
    { name: "ライター", weight: 15, volume: 20, explanation: "" },
    { name: "マッチ", weight: 13, volume: 32, explanation: "防水タイプ。" },
    { name: "ろうそく", weight: 350, volume: 162, explanation: "24時間持つ。" },
    { name: "ナイフ", weight: 110, volume: 373, explanation: "" },
    { name: "軍手", weight: 40, volume: 220, explanation: "がれきの撤去や防寒用。" },
    { name: "給水袋", weight: 70, volume: 390, explanation: "水を入れる袋。3L入る。" },
    { name: "飲料水(500ml)", weight: 520, volume: 650, explanation: "保存水。500ml。" },
    { name: "非常食(一食)", weight: 174, volume: 682, explanation: "乾パン。1食分。" },
    { name: "缶切り", weight: 47, volume: 35, explanation: "缶詰を開けるため。" },
    { name: "毛布", weight: 930, volume: 3812, explanation: "防寒、睡眠用。" },
    { name: "衣類・下着", weight: 950, volume: 4320, explanation: "ジャージ上下，下着を1着。" },
    { name: "レジャーシート", weight: 148, volume: 660, explanation: "地面に敷いて使用。" },
    { name: "使い捨てカイロ", weight: 48, volume: 24, explanation: "貼れないカイロ。" },
    { name: "アルミ製保温シート", weight: 58, volume: 260, explanation: "体に巻くと保温できる。" },
    { name: "トイレットペーパー", weight: 112, volume: 825, explanation: "必要最小限の量を持参。" },
    { name: "ティッシュペーパー", weight: 10, volume: 50, explanation: "ポケットティッシュ。" },
    { name: "ウェットティッシュ", weight: 65, volume: 151, explanation: "清潔保持に。" },
    { name: "歯ブラシセット", weight: 23, volume: 266, explanation: "歯ブラシ，歯磨き粉。" },
    { name: "タオル", weight: 80, volume: 200, explanation: "清潔なタオル。" },
    { name: "石鹸", weight: 100, volume: 179, explanation: "固形石鹸。" },
    { name: "ドライシャンプー", weight: 95, volume: 385, explanation: "お風呂に入れない時用。" },
    { name: "汗拭きシート", weight: 128, volume: 352, explanation: "清潔保持に。" },
    { name: "ボディソープ", weight: 90, volume: 193, explanation: "お風呂に入れない時用。" },
    { name: "救急箱", weight: 150, volume: 1320, explanation: "はさみ，ガーゼ，ばんそうこう，包帯，三角巾，脱脂綿。" },
    { name: "マスク(3枚入り)", weight: 10, volume: 34, explanation: "感染症予防用。" },
    { name: "アルコール消毒液", weight: 108, volume: 167, explanation: "手指の消毒用。" },
    { name: "体温計", weight: 24, volume: 26, explanation: "体調管理用。" },
    { name: "布製ガムテープ", weight: 234, volume: 250, explanation: "多用途に使える。" },
    { name: "ポリ袋", weight: 150, volume: 433, explanation: "ゴミ袋としても使用可能。" },
    { name: "筆記用具", weight: 50, volume: 70, explanation: "メモ帳，ボールペン，マジックペン。" },
    { name: "避難地図", weight: 13, volume: 25, explanation: "避難経路の確認用。" },
    { name: "ロープ", weight: 750, volume: 4443, explanation: "避難に使える頑丈なロープ。" },
    { name: "乾電池(3本入り）", weight: 75, volume: 54, explanation: "乾電池3本。10年保存可能。" },
    { name: "ラップ", weight: 199, volume: 620, explanation: "食器に覆って使うと節水に。止血もできる。" },
    { name: "アイマスク", weight: 5, volume: 20, explanation: "騒音対策に。" },
    { name: "耳栓", weight: 1, volume: 2, explanation: "騒音対策に。" },
    { name: "トランプ", weight: 86, volume: 80, explanation: "暇な避難所生活に。" },
    { name: "コンタクトレンズセット", weight: 26, volume: 40, explanation: "コンタクトレンズ，洗浄液，コンタクトケース。" },
    { name: "眼鏡", weight: 32, volume: 32, explanation: "予備として。" },
    { name: "ランタン", weight: 227, volume: 624, explanation: "照明用。" },
    { name: "液体歯磨き", weight: 120, volume: 195, explanation: "モンダミンのようなもの。" },
    { name: "ハンディファン", weight: 250, volume: 400, explanation: "暑さ対策用。" },
    { name: "ヘッドライト", weight: 40, volume: 59, explanation: "両手が使える照明。" },
    { name: "冷感シート", weight: 128, volume: 352, explanation: "暑さ対策用。" },
    { name: "虫よけスプレー", weight: 80, volume: 172, explanation: "虫除け用。" },
    { name: "かゆみ止め", weight: 30, volume: 100, explanation: "虫刺され対策。" },
    { name: "日傘・傘", weight: 189, volume: 306, explanation: "日差し・雨対策。" },
    { name: "ハンドクリーム", weight: 80, volume: 200, explanation: "手の保湿用。" },
    { name: "リップクリーム", weight: 11, volume: 13, explanation: "唇の保湿用。" },
    { name: "エア枕", weight: 43, volume: 65, explanation: "空気で膨らます枕。" },
    { name: "エアマット", weight: 560, volume: 774, explanation: "空気で膨らすマット。" },
    { name: "新聞紙", weight: 50, volume: 80, explanation: "多用途に使用可能。" },
    { name: "食事セット", weight: 40, volume: 90, explanation: "紙皿，割り箸，フォーク，スプーンを1つずつ。" },
    { name: "ハンカチ", weight: 20, volume: 50, explanation: "清潔保持に。" },
    { name: "イヤホン", weight: 15, volume: 15, explanation: "有線のイヤホン。" },
    { name: "寝袋", weight: 1400, volume: 12000, explanation: "睡眠用。" },
    { name: "くし", weight: 14, volume: 7, explanation: "整髪用。" },
    { name: "現金・小銭", weight: 100, volume: 90, explanation: "小銭入れに2万円分の札と小銭。" },
    { name: "常備薬", weight: 25, volume: 35, explanation: "必要な薬。" },
    { name: "家族の写真", weight: 3, volume: 12, explanation: "確認用。" },
    { name: "緊急時の家族，親戚，知人の連絡先", weight: 13, volume: 25, explanation: "連絡先リスト。" },
    { name: "スリッパ", weight: 190, volume: 770, explanation: "頑丈な防災スリッパ。脚裏は釘なども貫通しない素材でできている。" },
    { name: "処方箋の控え", weight: 4, volume: 12, explanation: "医療機関受診時に必要。" }
];

// Firebase設定
const firebaseConfig = {
    apiKey: "AIzaSyA3B-JtnE5NlcyL5sqoT877oSnS4Mnpk0I",
    authDomain: "kenkyudb.firebaseapp.com",
    projectId: "kenkyudb",
    storageBucket: "kenkyudb.firebasestorage.app",
    messagingSenderId: "186602532556",
    appId: "1:186602532556:web:cf6f5a0a870a36332cdc69",
    measurementId: "G-0WLMS9GGXC"
};

firebase.initializeApp(firebaseConfig);

// 選択されたアイテムを管理するオブジェクト
let selectedItems = {};

// リュックサックの制限値
const maxWeight = 10000;    // 最大重量 (10kg=10000g)
const maxVolume = 30000; // 最大容量 (30L=30000mL)

// 現在の選択状態を追跡する変数
let currentWeight = 0;   // 現在の総重量
let currentVolume = 0;   // 現在の総容量
/**
 * UIの初期化関数
 */
function initializeUI() {
    createItemList();
    restoreState();
}

/**
 * 現在の状態を保存する関数
 */
function saveState() {
    const state = {
        selectedItems,
        currentWeight,
        currentVolume
    };
    localStorage.setItem('backpackState', JSON.stringify(state));
}

/**
 * 保存された状態を復元する関数
 */
function restoreState() {
    const savedState = localStorage.getItem('backpackState');
    if (savedState) {
        const state = JSON.parse(savedState);
        selectedItems = state.selectedItems;
        currentWeight = state.currentWeight;
        currentVolume = state.currentVolume;
        updateDisplay();
    }
}

/**
 * アイテムリストをDOM上に作成する関数
 */
function createItemList() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // リストをクリア
    
    // 各アイテムのHTML要素を作成
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-details">
                    <span class="item-weight">${item.weight}g</span> 
                    <span class="item-volume">${item.volume}mL</span>
                    <span class="item-explanation">${item.explanation}</span>
                </div>
            </div>
            <div class="quantity-selector">
                <button class="decrease-button" onclick="adjustQuantity('${item.name}', -1)">-</button>
                <span class="quantity">${selectedItems[item.name] || 0}</span>
                <button class="increase-button" onclick="adjustQuantity('${item.name}', 1)">+</button>
            </div>
        `;
        itemList.appendChild(itemDiv);
    });
}

/**
 * アイテム名から該当するアイテムオブジェクトを検索する関数
 */
function findItem(name) {
    return items.find(item => item.name === name);
}

/**
 * アイテムの数量を調整する関数
 */
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
    saveState();
}

/**
 * 画面表示を更新する関数
 */
function updateDisplay() {
    const weightDisplay = document.getElementById('weightDisplay');
    const volumeDisplay = document.getElementById('volumeDisplay');
    const weightProgress = document.getElementById('weightProgress');
    const volumeProgress = document.getElementById('volumeProgress');
    
    weightDisplay.textContent = `重量： ${(currentWeight/1000).toFixed(2)}kg / ${maxWeight/1000}kg`;
    volumeDisplay.textContent = `容量： ${(currentVolume/1000).toFixed(2)}L / ${maxVolume/1000}L`;
    
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

    const selectedItemsList = document.getElementById('selectedItems');
    selectedItemsList.innerHTML = '';
    
    for (const [itemName, quantity] of Object.entries(selectedItems)) {
        if (quantity > 0) {
            const item = findItem(itemName);
            const li = document.createElement('li');
            li.className = 'selected-item';
            li.innerHTML = `
                <span>${itemName} × ${quantity}</span>
                <span>${(item.weight * quantity)}g / ${(item.volume * quantity)}mL</span>
            `;
            selectedItemsList.appendChild(li);
        }
    }

    // アイテムリストの数量表示も更新
    document.querySelectorAll('.item').forEach(itemDiv => {
        const itemName = itemDiv.querySelector('.item-name').textContent;
        const quantitySpan = itemDiv.querySelector('.quantity');
        quantitySpan.textContent = selectedItems[itemName] || 0;
    });
}

/**
 * 選択をリセットする関数
 */
function resetSelection() {
    selectedItems = {};
    currentWeight = 0;
    currentVolume = 0;
    updateDisplay();
    saveState();
    localStorage.removeItem('backpackState');
}

/**
 * 完了時の処理
 */
function completeSelection() {
    if (Object.keys(selectedItems).length === 0) {
        alert('最低1つ以上のアイテムを選択してください。');
        return;
    }

    const user = firebase.auth().currentUser;
    if (!user) {
        alert('ログインが必要です。');
        return;
    }

    saveSelectedItemsLog(user.uid, selectedItems, currentWeight, currentVolume);

    const feedbackContainer = document.getElementById('feedback');
    feedbackContainer.style.display = 'block';
    
    document.querySelector('.checklist').style.display = 'none';
}

/**
 * 選択したアイテムをログとして保存
 */
function saveSelectedItemsLog(userId, selectedItems, currentWeight, currentVolume) {
    const userRef = firebase.database().ref(`users/${userId}/sessionCount`);
    const logRef = firebase.database().ref(`users/${userId}/session`);
    
    userRef.transaction((currentCount) => {
        return (currentCount || 0) + 1;
    }).then((result) => {
        const currentCount = result.snapshot.val();
        logRef.child(currentCount).child("select").set({
            items: selectedItems,
            totalWeight: currentWeight,
            totalVolume: currentVolume,
            timestamp: new Date().toISOString()
        }).then(() => {
            console.log(`データがログ ${currentCount} に保存されました！`);
            alert(`データがログ ${currentCount} に保存されました！`);
        }).catch((error) => {
            console.error("データ保存中にエラーが発生しました:", error);
            alert("データ保存に失敗しました。");
        });
    });
}

/**
 * シミュレーション開始
 */
function startSimulation() {
    saveState();
    window.location.href = 'simulation.html';
}

// ページ読み込み時の処理
window.onload = function() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('ログイン中のユーザー:', user.email);
            
            
            const userId = user.uid;
            // ユーザーのフルネームを取得
            const fullName = user.displayName || '名前未設定';
            console.log('ユーザーの名前:', fullName);

            // Realtime Database に名前を保存（必要な場合）
            firebase.database().ref(`users/${userId}/profile`).update({
                name: fullName,
                email: user.email
            }).then(() => {
                console.log('ユーザー名が保存されました');
            }).catch((error) => {
                console.error('ユーザー名保存中にエラーが発生しました:', error);
            });

            const genderRef = firebase.database().ref(`users/${userId}/profile/gender`);
            
            genderRef.once('value').then((snapshot) => {
                if (!snapshot.exists()) {
                    showGenderModal(userId);
                } else {
                    const gender = snapshot.val();
                    console.log('読み込まれた性別:', gender);  // デバッグログ
                    customizeItemsByGender(gender);
                    initializeUI();
                }
            }).catch(error => {
                console.error('性別データの取得にエラーが発生:', error);
                initializeUI();  // エラー時もUIは初期化
            });
        } else {
            console.log('ユーザーがログインしていません');
            window.location.href = 'login.html';
        }
    });
};

/**
 * 性別選択モーダルの表示
 */
function showGenderModal(userId) {
    const modal = document.getElementById('gender-modal');
    modal.style.display = 'flex';

    document.getElementById('gender-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const gender = document.querySelector('input[name="gender"]:checked').value;
        
        firebase.database().ref(`users/${userId}/profile/gender`).set(gender)
            .then(() => {
                console.log('性別が保存されました:', gender);  // デバッグログ
                modal.style.display = 'none';
                customizeItemsByGender(gender);
                initializeUI();
            })
            .catch((error) => {
                console.error("性別の保存中にエラーが発生しました:", error);
                alert("エラーが発生しました。もう一度お試しください。");
            });
    });
}

/**
 * 性別に基づくアイテムリストのカスタマイズ
 */
function customizeItemsByGender(gender) {
    if (gender === "female") {
        // 女性用アイテムを追加
        const femaleItems = [
            {
                name: "生理用品",
                weight: 200,
                volume: 100,
                explanation: "必要に応じて準備してください。"
            },
            {
                name: "化粧品",
                weight: 200,
                volume: 400,
                explanation: "必要に応じて準備してください。"
            },
            {
                name: "メイク落としシート",
                weight: 60,
                volume: 376,
                explanation: "メイク落とし用。"
            }
        ];
        
        // 既存のアイテムリストに女性用アイテムを追加
        items.push(...femaleItems);
    } else {
        // 男性の場合、特定のアイテムを除外
        const excludeItems = ["生理用品", "化粧品", "メイク落としシート"];
        for (let i = items.length - 1; i >= 0; i--) {
            if (excludeItems.includes(items[i].name)) {
                items.splice(i, 1);
            }
        }
    }
}