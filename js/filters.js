// === フィルター整列 ===
const filterOrder = {
    series: [
        "1stロケテスト",
        "2ndロケテスト",
        "第1弾",
        "第2弾",
        "第3弾",
        "第4弾",
        "第5弾",
        "第S1弾",
        "第S2弾",


        "アイドルマスター SideM\n in ナムコ キャンペーン",
        "アイドルマスター\n in ナムコ キャンペーン",
        "アミューズメントエキスポ2024",
        "アンサンブルスパークル キャンペーン",
        "オフィシャル4ポケットバインダー",
        "RHYTHM LIVE TOURNAMENT\n 2025 店舗予選参加賞",
        "IDOL WORLD SUPER FESTIVAL\n 2026 入場特典",
        
        "GWキャンペーン",
        "太鼓の達人 キャンペーン Vol.2",
        "クリスマスキャンペーン",
        "スプリングキャンペーン",
        "ツアーモードはじめたらSSRもらえる！\nスペシャルプレゼントキャンペーン",
        "「ゴールドアクセサリー」\nゲットキャンペーン",
        "2026 レイトサマーキャンペーン\n晩夏の調べ",
        "学園アイドルマスター\n After School キャンペーン in namco",
        
        "カード付きスナック",
    ],
    rarity: [
        "PM",
        "CP",
        "CP-PARALLEL",
        "EX",
        "UR",
        "UR-PARALLEL",
        "SSR",
        "SSR-PARALLEL",
        "SR",
        "R",
        "N",
        "N-UNUSUAL",
        "CO",
        "TSSR",
        "TSSR-PARALLEL",
        "TSR",
        "TSR-PARALLEL",
        "TR",
    ],
    type: [
        "コスチューム",
        "アクセサリー",
        "サポート",
        "SPアピール",
        "演出セット",
    ],
    genre: [
        "スウィート",
        "スマート",
        "エナジー",
        "ワンダー",
    ],
    character: [
        "天海春香",
        "如月千早",
        "星井美希",
        "水瀬伊織",
        "萩原雪歩",
        "菊地真",
        "島村卯月",
        "渋谷凛",
        "本田未央",
        "神崎蘭子",
        "春日未来",
        "最上静香",
        "伊吹翼",
        "真壁瑞希",
        "周防桃子",
        "天道輝",
        "桜庭薫",
        "柏木翼",
        "硲道夫",
        "山下次郎",
        "舞田類",
        "櫻木真乃",
        "風野灯織",
        "八宮めぐる",
        "小宮果穂",
        "花海咲季",
        "月村手毬",
        "藤田ことね",
        "紫雲清夏",
        "袖屋璃空",
    ],
};

/// === フィルター画像 ===
const filterImages = {
    series: {
        "1stロケテスト": "ver-1.png",
        "2ndロケテスト": "ver-2.png",
        "第1弾": "ver-3.png",
        "第2弾": "ver-4.png",
        "第3弾": "ver-5.png",
        "第4弾": "ver-6.png",
        "第5弾": "ver-7.png",
        "第S1弾": "ver-8.png",
        "第S2弾": "ver-9.png",

        "アイドルマスター SideM\n in ナムコ キャンペーン": "ver-pm.png",
        "アイドルマスター\n in ナムコ キャンペーン": "ver-pm.png",
        "アミューズメントエキスポ2024": "ver-pm.png",
        "アンサンブルスパークル キャンペーン": "ver-pm.png",
        "オフィシャル4ポケットバインダー": "ver-pm.png",
        "RHYTHM LIVE TOURNAMENT\n 2025 店舗予選参加賞": "ver-pm.png",
        "IDOL WORLD SUPER FESTIVAL\n 2026 入場特典": "ver-pm.png",
        
        "GWキャンペーン": "ver-cp.png",
        "太鼓の達人 キャンペーン Vol.2": "ver-cp.png",
        "クリスマスキャンペーン": "ver-cp.png",
        "スプリングキャンペーン": "ver-cp.png",
        "ツアーモードはじめたらSSRもらえる！\nスペシャルプレゼントキャンペーン": "ver-cp.png",
        "「ゴールドアクセサリー」\nゲットキャンペーン": "ver-cp.png",
        "2026 レイトサマーキャンペーン\n晩夏の調べ": "ver-cp.png",
        "学園アイドルマスター\n After School キャンペーン in namco": "ver-cp.png",
        
        "カード付きスナック": "ver-ex.png",
    },
    rarity: {
        "PM": "rarity-pm.png",
        "CP": "rarity-cp.png",
        "CP-PARALLEL": "rarity-cp.png",
        "EX": "rarity-ex.png",
        "UR": "rarity-9.png",
        "UR-PARALLEL": "rarity-9.png",
        "SSR": "rarity-1.png",
        "SSR-PARALLEL": "rarity-1.png",
        "SR": "rarity-2.png",
        "R": "rarity-3.png",
        "N": "rarity-4.png",
        "N-UNUSUAL": "rarity-4.png",
        "CO": "rarity-6.png",
        "TSSR": "rarity-7.png",
        "TSSR-PARALLEL": "rarity-7.png",
        "TSR": "rarity-8.png",
        "TSR-PARALLEL": "rarity-8.png",
        "TR": "rarity-5.png",
    },
    character: {
        "天海春香": "idol-master.png",
        "如月千早": "idol-master.png",
        "星井美希": "idol-master.png",
        "水瀬伊織": "idol-master.png",
        "萩原雪歩": "idol-master.png",
        "菊地真": "idol-master.png",
        "島村卯月": "cinderella.png",
        "渋谷凛": "cinderella.png",
        "本田未央": "cinderella.png",
        "神崎蘭子": "cinderella.png",
        "春日未来": "million.png",
        "最上静香": "million.png",
        "伊吹翼": "million.png",
        "真壁瑞希": "million.png",
        "周防桃子": "million.png",
        "天道輝": "sidem.png",
        "桜庭薫": "sidem.png",
        "柏木翼": "sidem.png",
        "硲道夫": "sidem.png",
        "山下次郎": "sidem.png",
        "舞田類": "sidem.png",
        "櫻木真乃": "shiny.png",
        "風野灯織": "shiny.png",
        "八宮めぐる": "shiny.png",
        "小宮果穂": "shiny.png",
        "花海咲季": "gakuen.png",
        "月村手毬": "gakuen.png",
        "藤田ことね": "gakuen.png",
        "紫雲清夏": "gakuen.png",
        "袖屋璃空": "tours.png",
    },
    type: {
        "コスチューム": "type-a.png",
        "アクセサリー": "type-b.png",
        "サポート": "type-c.png",
        "SPアピール": "type-d.png",
        "演出セット": "type-e.png",
    },
    genre: {
        "スウィート": "genre-a.png",
        "スマート": "genre-b.png",
        "エナジー": "genre-c.png",
        "ワンダー": "genre-d.png",
    },
    owned: {
        "true": "true.png",
        "false": "false.png",
    }
};

// === 共通管理 ===
function getFilterImage(
    key,
    value
){
    const fileName =
        filterImages[key]?.[value];
    if(!fileName){
        return "";
    }
    return (
        "img/filter/" +
        fileName
    );
}

// === 絞り込み検索 ===
function applyFilters(){
    // === 検索条件が何もないか確認 ===
    const noFilter =
        filterState.series === "" &&
        filterState.character === "" &&
        filterState.genre === "" &&
        filterState.rarity === "" &&
        filterState.type === "" &&
        filterState.owned === "";
    filteredCards =
        allCards.filter(card => {
            // === 検索条件がある場合Separatorを除外 ===
            if(
                !noFilter &&
                card.rarity === "Separator"
            ){
                return false;
            }
            // 収録弾
            if(
                filterState.series !== "" &&
                card.series !== filterState.series
            ){
                return false;
            }
            // キャラ
            if(
                filterState.character !== "" &&
                card.character !== filterState.character
            ){
                return false;
            }
            // ジャンル
            if(
                filterState.genre !== "" &&
                card.genre !== filterState.genre
            ){
                return false;
            }
            // レアリティ
            if(
                filterState.rarity !== "" &&
                card.rarity !== filterState.rarity
            ){
                return false;
            }
            // 種類
            if(
                filterState.type !== "" &&
                card.type !== filterState.type
            ){
                return false;
            }
            // 所持状況
            if(
                filterState.owned !== "" &&
                String(card.owned)
                !==
                filterState.owned
            ){
                return false;
            }
            return true;
        });
    // 検索後は1ページ目
    currentPage = 1;
    renderCards();
}

// === 選択肢生成 ===
function createFilterOptions(){
    document
        .querySelectorAll(".customSelect")
        .forEach(select => {
            const key =
                select.dataset.filter;
            createCustomFilter(
                select,
                key
            );
        });
}

function createCustomFilter(
    select,
    key
){
    const selected =
        select.querySelector(
            ".customSelectSelected"
        );
    const options =
        select.querySelector(
            ".customSelectOptions"
        );
    options.innerHTML = "";
    // 所持状況だけカードデータから取得しない
    let values;
    if(key === "owned"){
        values = [
            "true",
            "false"
        ];
    }
    else{
        values =
            [
                ...new Set(
                    allCards
                    .filter(
                        card =>
                            card.rarity !==
                            "Separator"
                    )
                    .map(
                        card =>
                            card[key]
                    )
                    .filter(
                        value =>
                            value !== null &&
                            value !== undefined &&
                            value !== ""
                    )
                )
            ];
    }
    // filterOrderの順番を適用
    const order =
        filterOrder[key] || [];
    const orderedValues = [];
    order.forEach(
        value => {
            if(
                values.includes(value)
            ){
                orderedValues.push(
                    value
                );
            }
        }
    );
    values.forEach(
        value => {
            if(
                !orderedValues.includes(
                    value
                )
            ){
                orderedValues.push(
                    value
                );
            }
        }
    );
    // 「すべて」
    const allOption =
        document.createElement(
            "div"
        );
    allOption.className =
        "customOption";
    allOption.textContent =
        "すべて";
    allOption.addEventListener(
        "click",
        () => {
            filterState[key] = "";
            selected.textContent =
                "すべて";
            options.classList.remove(
                "active"
            );
            applyFilters();
        }
    );
    options.appendChild(
        allOption
    );
    // 各選択肢
    orderedValues.forEach(
        value => {
            const option =
                document.createElement(
                    "div"
                );
            option.className =
                "customOption";

            // 画像
            const imagePath =
            getFilterImage(
                key,
                value
            );
            if(
                imagePath !== ""
            ){
                const img =
                    document.createElement(
                        "img"
                    );
                img.src =
                    imagePath;
                img.alt = "";
                option.appendChild(
                    img
                );
            }
            // 文字
            const text =
                document.createElement(
                    "span"
                );
            if(
                key === "owned"
            ){
                text.textContent =
                    value === "true"
                        ? "所持済み"
                        : "未所持";
            }
            else{
                text.textContent =
                    value;
            }
            option.appendChild(
                text
            );
            option.addEventListener(
                "click",
                () => {
                    filterState[key] =
                        value;
                    selected.textContent =
                        key === "owned"
                            ? (
                                value === "true"
                                    ? "所持済み"
                                    : "未所持"
                            )
                            : value;
                    options.classList.remove(
                        "active"
                    );
                    applyFilters();
                }
            );
            options.appendChild(
                option
            );
        }
    );
    // 開閉
    selected.addEventListener(
        "click",
        event => {
            event.stopPropagation();
            document
                .querySelectorAll(
                    ".customSelectOptions.active"
                )
                .forEach(
                    other => {
                        if(
                            other !== options
                        ){
                            other.classList.remove(
                                "active"
                            );
                        }
                    }
                );
            options.classList.toggle(
                "active"
            );
        }
    );
}

// === 検索リセット ===
function resetFilters(){
    filterState = {
        series: "",
        character: "",
        genre: "",
        rarity: "",
        type: "",
        owned: ""
    };
    document
        .querySelectorAll(
            ".customSelect"
        )
        .forEach(select => {
            const selected =
                select.querySelector(
                    ".customSelectSelected"
                );
            const options =
                select.querySelector(
                    ".customSelectOptions"
                );
            selected.textContent =
                "すべて";
            options.classList.remove(
                "active"
            );
        });
    applyFilters();
}

// === リセットボタン ===
document.addEventListener(
    "DOMContentLoaded",
    () => {
        document
        .getElementById(
            "resetSearch"
        )
        .addEventListener(
            "click",
            resetFilters
        );
    }
);