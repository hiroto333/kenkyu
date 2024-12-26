const items = {
    "基本アイテム": [
        { name: "懐中電灯", weight: 0.174, volume: 193, explanation: "停電時に必要。予備電池も忘れずに。", unit: "個", dimensions: "15×6×6cm" },
        { name: "簡易ヘルメット", weight: 0.45, volume: 4155, explanation: "落下物から頭を保護。コンパクトに折りたためるタイプが便利。", unit: "個", dimensions: "20×20×5cm" },
        { name: "防災ずきん", weight: 0.4, volume: 5472, explanation: "ヘルメットの代わりに。子供用に最適。", unit: "個", dimensions: "25×20×2cm" },
        { name: "ホイッスル", weight: 0.019, volume: 8.478, explanation: "救助を求める際に使用。電池不要で音が大きい。", unit: "個", dimensions: "5×2×2cm" },
        { name: "紐なしのズック靴", weight: 0.4, volume: 4260, explanation: "素早く履ける。ガラスの破片からも足を保護。", unit: "足", dimensions: "25×10×8cm" },
        { name: "雨具", weight: 0.3, volume: 500, explanation: "携帯用のポンチョタイプが場所を取らず便利。", unit: "着", dimensions: "20×15×2cm" },
        { name: "携帯ラジオ", weight: 0.2, volume: 250, explanation: "災害情報の入手に必須。手回し充電タイプが推奨。", unit: "台", dimensions: "10×5×5cm" },
        { name: "モバイルバッテリー", weight: 0.3, volume: 200, explanation: "スマートフォンの充電用。容量10000mAh程度が適当。", unit: "個", dimensions: "10×6×2cm" },
        { name: "簡易トイレ", weight: 0.1, volume: 200, explanation: "簡易的なトイレ。自分に必要な分必要。", unit: "個", dimensions: "25×15×1cm" },
        { name: "ライター", weight: 0.05, volume: 50, explanation: "火起こしや照明用。防水マッチと併用がおすすめ。", unit: "個", dimensions: "8×2×1cm" },
        { name: "マッチ", weight: 0.05, volume: 30, explanation: "防水タイプが望ましい。ライターのバックアップとして。", unit: "箱", dimensions: "5×3×2cm" },
        { name: "ろうそく", weight: 0.1, volume: 100, explanation: "長時間の照明として。火災に注意。", unit: "本", dimensions: "10×2×2cm" },
        { name: "ナイフ", weight: 0.2, volume: 150, explanation: "マルチツール型が便利。様々な用途に使用可能。", unit: "個", dimensions: "10×3×2cm" },
        { name: "軍手", weight: 0.1, volume: 200, explanation: "がれきの撤去や防寒用。耐切創タイプが望ましい。", unit: "組", dimensions: "25×15×1cm" },
        { name: "給水袋", weight: 0.1, volume: 200, explanation: "水を入れる袋。", unit: "袋", dimensions: "25×15×1cm" }
    ],
    "食料と水": [
        { name: "飲料水(500ml)", weight: 0.5, volume: 500, explanation: "1人1日3リットルが目安。必要最小限でも500ml×3本。", unit: "本", dimensions: "21×7×7cm" },
        { name: "非常食(一食)", weight: 0.2, volume: 400, explanation: "3食分以上。賞味期限の長いもの。缶詰やレトルト食品。", unit: "食", dimensions: "15×10×3cm" },
        { name: "缶切り", weight: 0.1, volume: 50, explanation: "缶詰を開けるため。プルトップ式でない缶詰がある場合に必要。", unit: "個", dimensions: "10×5×1cm" }
    ],
    "衣類・防寒": [
        { name: "毛布", weight: 0.8, volume: 3000, explanation: "防寒、睡眠用。アルミブランケットは軽量で代用可。", unit: "枚", dimensions: "30×20×5cm" },
        { name: "衣類", weight: 0.5, volume: 2000, explanation: "下着を含む着替え一式。速乾性の素材が望ましい。", unit: "組", dimensions: "25×20×4cm" },
        { name: "レジャーシート", weight: 0.2, volume: 300, explanation: "地面に敷いて使用。断熱効果もある。", unit: "枚", dimensions: "15×10×2cm" },
        { name: "使い捨てカイロ", weight: 0.1, volume: 100, explanation: "使い捨てられるカイロ。", unit: "枚", dimensions: "10×10×10cm" },
        { name: "アルミ製保温シート", weight: 0.2, volume: 800, explanation: "体に巻くと保温できる。", unit: "個", dimensions: "10×10×10cm" }
    ],
    "衛生用品": [
        { name: "トイレットペーパー", weight: 0.2, volume: 1000, explanation: "必要最小限の量を持参。圧縮タイプが便利。", unit: "巻", dimensions: "10×10×10cm" },
        { name: "ティッシュペーパー", weight: 0.1, volume: 400, explanation: "小包装のものが便利。様々な用途に使用可能。", unit: "箱", dimensions: "12×6×6cm" },
        { name: "ウェットティッシュ", weight: 0.2, volume: 500, explanation: "清潔保持に。除菌タイプが望ましい。", unit: "パック", dimensions: "15×10×3cm" },
        { name: "歯ブラシセット", weight: 0.1, volume: 200, explanation: "歯磨き粉、洗口液含む。衛生管理に重要。", unit: "セット", dimensions: "20×5×2cm" },
        { name: "タオル", weight: 0.2, volume: 500, explanation: "清潔なタオル。多目的に使用可能。", unit: "枚", dimensions: "25×12×2cm" },
        { name: "石鹸", weight: 0.2, volume: 500, explanation: "手洗い用。清潔保持に。", unit: "個", dimensions: "25×12×2cm" },
        { name: "ドライシャンプー", weight: 0.2, volume: 500, explanation: "お風呂に入れない時用。清潔保持に。", unit: "個", dimensions: "25×12×2cm" },
        { name: "洗面用具", weight: 0.2, volume: 500, explanation: "お風呂に入れない時用。洗面用具。", unit: "セット", dimensions: "25×12×2cm" },
        { name: "汗拭きシート", weight: 0.2, volume: 500, explanation: "お風呂に入れない時用。洗面用具。", unit: "セット", dimensions: "25×12×2cm" },
        { name: "ボディソープ", weight: 0.2, volume: 500, explanation: "お風呂に入れない時用。洗面用具。", unit: "セット", dimensions: "25×12×2cm" }
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
        { name: "避難地図", weight: 0.1, volume: 100, explanation: "周辺の避難地図。あると便利。", unit: "枚", dimensions: "15×5×1cm" },
        { name: "ロープ", weight: 0.3, volume: 500, explanation: "荷物の固定や応急措置に。パラコードが軽量で丈夫。", unit: "巻", dimensions: "15×15×3cm" },
        { name: "電池", weight: 0.08, volume: 50, explanation: "予備の電池。", unit: "個", dimensions: "8×2×1cm" },
        { name: "ラップ", weight: 0.08, volume: 50, explanation: "食器に覆って使うと，節水に。止血もできる．", unit: "個", dimensions: "8×2×1cm" },
        { name: "安眠グッズ（耳栓・アイマスク）", weight: 0.08, volume: 50, explanation: "騒音対策に。寝れない人向け。", unit: "個", dimensions: "8×2×1cm" },    
        { name: "トランプ", weight: 0.08, volume: 50, explanation: "暇な避難所生活に。", unit: "個", dimensions: "8×2×1cm" },
        { name: "コンタクトレンズ", weight: 0.05, volume: 100, explanation: "使用者は予備を持参。ケア用品も忘れずに。", unit: "セット", dimensions: "8×4×3cm" }
    ],
    "貴重品": [
        { name: "現金", weight: 0.1, volume: 50, explanation: "小銭を含む現金。ATMが使えない状況を想定。", unit: "セット", dimensions: "10×7×1cm" },
        { name: "預貯金通帳", weight: 0.1, volume: 30, explanation: "コピーでも可。本人確認に必要。", unit: "冊", dimensions: "15×9×0.5cm" },
        { name: "健康保険証", weight: 0.01, volume: 10, explanation: "コピーでも可。医療機関受診時に必要。", unit: "枚", dimensions: "9×6×0.1cm" },
        { name: "運転免許証", weight: 0.01, volume: 10, explanation: "身分証明書として。", unit: "枚", dimensions: "9×6×0.1cm" },
        { name: "パスポート", weight: 0.1, volume: 50, explanation: "海外在住の場合は特に重要。", unit: "冊", dimensions: "12×9×0.5cm" },
        { name: "印鑑", weight: 0.05, volume: 30, explanation: "認印があると便利。ケース付きが望ましい。", unit: "個", dimensions: "6×2×2cm" },
        { name: "お薬手帳", weight: 0.05, volume: 30, explanation: "持病のある方は必須。薬の情報確認用。", unit: "冊", dimensions: "15×9×0.5cm" },
        { name: "鍵", weight: 0.05, volume: 20, explanation: "家や車の鍵。予備があれば持参。", unit: "セット", dimensions: "5×3×1cm" }
    ]
};

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
const maxWeight = 10;    // 最大重量 (kg)
const maxVolume = 30000; // 最大容量 (cm3 = 30L)

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
    
    // カテゴリごとにアイテムを表示
    for (const [category, categoryItems] of Object.entries(items)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `<h2>${category}</h2>`;
        
        // 各アイテムのHTML要素を作成
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
                    <span class="quantity">${selectedItems[item.name] || 0}</span>
                    <button class="increase-button" onclick="adjustQuantity('${item.name}', 1)">+</button>
                </div>
            `;
            categoryDiv.appendChild(itemDiv);
        });

        itemList.appendChild(categoryDiv);
    }
}

/**
 * アイテム名から該当するアイテムオブジェクトを検索する関数
 */
function findItem(name) {
    for (const category of Object.values(items)) {
        const found = category.find(item => item.name === name);
        if (found) return found;
    }
    return null;
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
        if (!items["衛生用品"].some(item => item.name === "生理用品")) {
            items["衛生用品"].push({
                name: "生理用品",
                weight: 0.2,
                volume: 100,
                explanation: "必要に応じて準備してください。",
                unit: "セット",
                dimensions: "10×5×5cm"
            });
        }
    } else {
        // 男性の場合、生理用品をリストから除去
        items["衛生用品"] = items["衛生用品"].filter(item => item.name !== "生理用品");
    }
}