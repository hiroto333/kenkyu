// シナリオデータ
const scenarios = [
    {
        title: "寒波到来（火災・電気容量の恐れ）",
        description: "多くの避難所では、火災の恐れや電気容量の問題から暖房器具などが使えなかった。",
        requiredItems: ["使い捨てカイロ","毛布","アルミブランケット"],
        consequence: "電気を使わずに寒さ対策ができる。"
    },
    {
        title: "プライバシー問題",
        description: "避難所において、プライバシーが確保されず、避難者に大きなストレスとなった。",
        requiredItems: ["レジャーシート"],
        consequence: "仕切りを作れて、プライバシーを確保できる。"
    },
    {
        title: "睡眠環境（夜間の明るさ）",
        description: "避難所の照明が明るく、眠れなかった。",
        requiredItems: ["アイマスク"],
        consequence: "明るさを気にせず、眠れる。"
    },
    {
        title: "睡眠環境（騒音）",
        description: "避難所で他の避難者の騒音により、眠れなかった。",
        requiredItems: ["耳栓"],
        consequence: "騒音を気にせず、眠れる。"
    },
    {
        title: "不潔な髪の毛",
        description: "避難所では、水不足で髪を洗えなくて辛かった。",
        requiredItems: ["ドライシャンプー"],
        consequence: "水を使わずにスッキリできる。"
    },
    {
        title: "感染症蔓延",
        description: "衛生環境が悪化し、コロナやインフルエンザなどの感染症が蔓延した。",
        requiredItems: ["石鹸","マスク(3枚入り)","アルコール消毒液"],
        consequence: "感染症のリスクが低減する。"
    },
    {
        title: "トイレできない",
        description: "仮設トイレ到着が遅れ、トイレが出来なかった。",
        requiredItems: ["簡易トイレ"],
        minQuantity: 6,
        consequence: "仮設トイレが無くても、トイレができる。"
    },
    {
        title: "蒸し風呂状態",
        description: "日差しの影響で、避難所内は蒸し風呂状態だった。",
        requiredItems: ["ハンディファン","冷感シート"],
        consequence: "暑さ対策ができる。"
    },
    {
        title: "食料不足",
        description: "全国各地から届けられた食料が避難所まで行き届かなかった。",
        requiredItems: ["非常食(1食)"],
        minQuantity: 6,
        consequence: "避難所からの支援が無くても、食料を食べられる。"
    },
    {
        title: "お風呂に入れない",
        description: "災害後、しばらくはお風呂に入れなかった。",
        requiredItems: ["汗拭きシート","ボディソープ","ウェットティッシュ"],
        consequence: "体を清潔に保つことができる。"
    },
    {
        title: "携帯を充電できない",
        description: "連絡手段や情報源は携帯しかなかったのに、充電できなくて困った。",
        requiredItems: ["モバイルバッテリー"],
        consequence: "携帯を充電することができる。"
    },
    {
        title: "コンタクトレンズ問題",
        description: "眼鏡が無く、コンタクトの予備も無かった為、コンタクトを変える事が出来ずに目を痛めた。",
        requiredItems: ["コンタクトレンズセット","眼鏡"],
        consequence: "コンタクトを変えずに目が痛くなることが無くなる。"
    },
    {
        title: "キャッシュレスを利用できない",
        description: "停電すると、電子マネーやクレジットは使えなかった。",
        requiredItems: ["現金・小銭"],
        consequence: "停電しても、支払いができる。"
    },
    {
        title: "停電（火が危ない）",
        description: "停電により部屋が真っ暗に。激しい余震でろうそくは危なくて使えなかった。",
        requiredItems: ["ランタン","懐中電灯"],
        consequence: "火を使わずに、明かりをつけられる。"
    },
    {
        title: "生活用水不足（歯磨き）",
        description: "生活用水不足により、歯磨きが出来なかった。",
        requiredItems: ["洗口液"],
        consequence: "虫歯や口臭予防だけではなく心のリフレッシュにもなる。"
    },
    {
        title: "生活用水不足（洗い物）",
        description: "生活用水不足により、十分に洗い物が出来なかった。",
        requiredItems: ["ラップ"],
        consequence: "お皿にラップを巻いて、少しでも洗い物を減らせる。"
    },
    {
        title: "停電（不安）",
        description: "停電で真っ暗な中いるのはすごく辛かった。",
        requiredItems: ["ろうそく"],
        consequence: "電気が止まっても、光を出してくれるものがあれば不安を和らげられる。"
    },
    {
        title: "着替えられない",
        description: "災害から三日間着替えられず、衛生的に気持ちが悪かった。",
        requiredItems: ["衣類・下着"],
        consequence: "衛生的に清潔を保てる。"
    },
    {
        title: "暗所での作業",
        description: "暗い場所で、作業をするのに手が空いていなかった。",
        requiredItems: ["ヘッドライト"],
        consequence: "暗所でも両手を使って作業できる。"
    },
    {
        title: "精神的に辛い",
        description: "避難所で暇を持て余して、精神的にしんどかった。",
        requiredItems: ["トランプ"],
        consequence: "電気を使わずに、手を動かして心を落ち着かせられる。"
    },
    {
        title: "薬の副作用",
        description: "主治医以外の医師に診てもらい、症状に合わせて薬を出してもらったが、副作用で手が震えたりしてしばらく辛かった。",
        requiredItems: ["処方箋の控え","常備薬"],
        consequence: "自分に合った薬を飲める。"
    },
    {
        title: "睡眠環境（床の硬さ）",
        description: "床が硬くて寝られなかった。",
        requiredItems: ["エアマット","エア枕","寝袋"],
        consequence: "床を気にせず，寝られる。"
    },
    {
        title: "トイレットペーパー不足",
        description: "トイレにトイレットペーパーがなくて困った。お店もなかなか入荷されず、買うことが出来なかった。",
        requiredItems: ["トイレットペーパー"],
        consequence: "トイレットペーパー不足に対応できる。"
    },
    {
        title: "情報収集問題",
        description: "災害時の混乱によってスマホが使えなかった。フェイクニュースやデマ情報など、情報過多になり正確な情報のみを入手できなかった。",
        requiredItems: ["携帯ラジオ","防災ラジオ"],
        consequence: "情報収集ができ、たまに流れてくる音楽に癒されることもある。"
    },
    {
        title: "生活水不足（衛生）",
        description: "生活水不足により、手や食器類を毎回洗えない。",
        requiredItems: ["ウェットティッシュ","ティッシュペーパー"],
        consequence: "水を使わずに、拭くことができる。"
    },
    {
        title: "防寒具不足",
        description: "最低気温0度近くが4日続き、日中の最高気温でも10度で、用意した物だけでは暖がとれなかった。",
        requiredItems: ["ライター","マッチ"],
        consequence: "焚火をして暖が取れる。明かり、調理にも使える。"
    },
    {
        title: "飲料水不足",
        description: "避難所での飲料水の配給が少ない。",
        requiredItems: ["飲料水(500ml)"],
        minQuantity: 4,
        consequence: "水不足による健康被害のリスクが低減する。"
    },
];

// 女性特有のシナリオ
const femaleSpecificScenarios = [
    {
        title: "生理用品不足",
        description: "避難所で支給されたものでは足りなかった。周りに遠慮してしまい追加でもらいにくい状況もあった。",
        requiredItems: ["生理用品"],
        minQuantity: 15,
        consequence: "生理用品不足に対応できる。下着が汚れるのを防ぐこともできる。"
    }
];

var firebaseConfig = {
    apiKey: "AIzaSyA3B-JtnE5NlcyL5sqoT877oSnS4Mnpk0I",
    authDomain: "kenkyudb.firebaseapp.com",
    projectId: "kenkyudb",
    storageBucket: "kenkyudb.firebasestorage.app",
    messagingSenderId: "186602532556",
    appId: "1:186602532556:web:cf6f5a0a870a36332cdc69",
    measurementId: "G-0WLMS9GGXC"
};

firebase.initializeApp(firebaseConfig);

// 表示済みシナリオを追跡する配列
let displayedScenarios = [];

// シミュレーション回数を追跡する変数
//let simulationCount = 0;

// 現在表示しているシナリオのインデックス
let currentIndex = 0;

// 固定されたシナリオの順序を保持する配列
let fixedScenarioOrder = [];
// 性別に基づいてシナリオを取得する関数
function getScenariosByGender(userId) {
    return new Promise((resolve, reject) => {
        const genderRef = firebase.database().ref(`users/${userId}/profile/gender`);
        
        genderRef.once('value')
            .then((snapshot) => {
                const gender = snapshot.val();
                console.log('ユーザーの性別:', gender);
                
                if (gender === 'female') {
                    // 女性の場合、基本シナリオと女性特有のシナリオを結合
                    resolve([...scenarios, ...femaleSpecificScenarios]);
                } else {
                    // 男性の場合、基本シナリオのみ
                    resolve(scenarios);
                }
            })
            .catch((error) => {
                console.error('性別データの取得エラー:', error);
                resolve(baseScenarios);
            });
    });
}

// ページが読み込まれたときに認証状態を確認
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('ログイン中のユーザー:', user.email);
        initializeSimulation(selectedItems); // ユーザーがいる場合にシミュレーションを開始
    } else {
        console.log('ログインしていません。ログイン画面に移動します。');
        alert('ログインが必要です。ログイン画面に移動します。');
        window.location.href = 'login.html'; // ログイン画面にリダイレクト
    }
});

// ローカルストレージから選択されたアイテムを取得（なければ空オブジェクトを使用）
const backpackState = JSON.parse(localStorage.getItem('backpackState')) || {};
const selectedItems = backpackState.selectedItems || {};

function getUnhandledScenarios(selectedItems, scenarioList) {
    console.log('選択されたアイテム:', selectedItems);
    
    const unhandledScenarios = scenarioList.filter(scenario => {
        // 必須アイテムがすべて揃っているか確認
        const hasAllRequiredItems = scenario.requiredItems.some(item => {
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
    document.getElementById('scenarioDescription').textContent = scenario.description;
    document.querySelector('.required-items').innerHTML = `
        <h3>必要な非常持ち出し品:</h3>
        <p>${scenario.requiredItems.join(', ')}${scenario.minQuantity ? ` (${scenario.minQuantity}個以上)` : ''}</p>
    `;
    document.querySelector('.consequence').innerHTML = `
        <h3>対応できた場合:</h3>
        <p>${scenario.consequence}</p>
    `;

    markScenarioAsViewed(scenario);

    // ナビゲーションボタンの有効/無効を更新
    document.getElementById('prevButton').disabled = index === 0; // 最初のシナリオで「前へ」を無効化
    document.getElementById('nextButton').disabled = index === fixedScenarioOrder.length - 1; // 最後のシナリオで「次へ」を無効化

    const feedbackCheckbox = document.getElementById('scenarioFeedbackCheck');
    feedbackCheckbox.checked = false;

    // LocalStorageから状態を復元
    const feedbackState = restoreFeedbackFromLocalStorage();
    if (feedbackState[scenario.title]?.checked) {
        feedbackCheckbox.checked = true;
    }

    // チェックボックスのイベントリスナー
    feedbackCheckbox.onchange = function () {
        const isChecked = feedbackCheckbox.checked;
        saveFeedbackToLocalStorage(scenario, isChecked); // LocalStorageに保存
    };

    // 現在のインデックスが最後のシナリオの場合にbackButtonを表示
    if (index === fixedScenarioOrder.length - 1) {
        document.getElementById('backButton').style.display = 'block';
    }

    /* シミュレーションが10回目の場合に「戻る」ボタンを表示
    if (simulationCount === 10) {
        document.getElementById('backButton').style.display = 'block';
    }*/
}

function markScenarioAsViewed(scenario) {
    scenario.viewed = true;
    scenario.viewedTimestamp = new Date().toISOString();
    return scenario;
}

// シミュレーションを初期化する関数
function initializeSimulation(selectedItems) {
    const user = firebase.auth().currentUser;
    if (!user) {
        console.error('ユーザーがログインしていません');
        return;
    }

    getScenariosByGender(user.uid)
        .then(appropriateScenarios => {
            const unhandledScenarios = getUnhandledScenarios(selectedItems, appropriateScenarios);
            fixedScenarioOrder = shuffleScenarios(unhandledScenarios);
            //simulationCount = 0;
            currentIndex = 0;

            if (fixedScenarioOrder.length > 0) {
                displayScenarioByIndex(currentIndex);
            } else {
                document.getElementById('feedback').innerHTML = 
                    "<p>現在の持ち出し袋で、すべてのシナリオに対応できます。</p>";
            }
        })
        .catch(error => {
            console.error('シナリオの初期化エラー:', error);
        });
}

// バックボタンのイベント
document.getElementById('backButton').addEventListener('click', () => {
    saveScenarioFeedback()
        .then(() => {
            window.location.href = 'choose.html';
        })
        .catch(error => {
            console.error('フィードバック保存中にエラーが発生:', error);
            // オプション：エラー時の処理（ユーザーへの通知など）
            window.location.href = 'choose.html';
        });
});

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
        currentIndex++; // インデックスを進める
        //simulationCount++; // シミュレーション回数を更新
        displayScenarioByIndex(currentIndex); // 次のシナリオを表示
    }
});

function saveScenarioFeedback() {
    return new Promise((resolve, reject) => {
        const user = firebase.auth().currentUser;
        if (!user) {
            alert('ログインが必要です。');
            reject(new Error('ログインが必要です'));
            return;
        }

        const userId = user.uid;
        const logRef = firebase.database().ref(`users/${userId}/session`);
        const userRef = firebase.database().ref(`users/${userId}/sessionCount`);

        const feedbackState = restoreFeedbackFromLocalStorage();

        if (!fixedScenarioOrder || fixedScenarioOrder.length === 0) {
            console.error('fixedScenarioOrderが空です。シミュレーションを初期化してください。');
            reject(new Error('シナリオデータが見つかりませんでした'));
            return;
        }

        const allScenarios = fixedScenarioOrder.map(scenario => {
            if (!scenario || !scenario.title) {
                console.warn('無効なシナリオが検出されました:', scenario);
                return null;
            }
            return {
                title: scenario.title,
                checked: feedbackState[scenario.title]?.checked || false,
                viewed: scenario.viewed || false,
                viewedTimestamp: scenario.viewedTimestamp || null,
                timestamp: feedbackState[scenario.title]?.timestamp || new Date().toISOString(),
            };
        }).filter(Boolean);

        userRef.once('value').then(snapshot => {
            const currentCount = snapshot.val() || 0;

            logRef.child(currentCount).child("feedback").set({
                scenarios: allScenarios,
                timestamp: new Date().toISOString(),
            }).then(() => {
                console.log(`シミュレーションのフィードバックをログ${currentCount}に保存しました`);
                resolve(); // 保存成功時にresolve
            }).catch(error => {
                console.error('シナリオフィードバック保存中にエラーが発生:', error);
                reject(error); // 保存失敗時にreject
            });
        }).catch(error => {
            console.error('セッションカウント取得中にエラーが発生:', error);
            reject(error);
        });
    });
}

// LocalStorageでシナリオのチェック状態を管理
function saveFeedbackToLocalStorage(scenario, isChecked) {
    const feedbackState = JSON.parse(localStorage.getItem('scenarioFeedbackState')) || {};
    feedbackState[scenario.title] = {
        checked: isChecked,
        timestamp: new Date().toISOString(), // 最新のタイムスタンプを保存
    };
    localStorage.setItem('scenarioFeedbackState', JSON.stringify(feedbackState));
}

function restoreFeedbackFromLocalStorage() {
    return JSON.parse(localStorage.getItem('scenarioFeedbackState')) || {};
}

console.log('選択されたアイテム全体:', selectedItems);
// シミュレーションを開始
initializeSimulation(selectedItems);

