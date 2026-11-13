// === サイト状態管理 ===
// 現在のページ番号
let currentPage = 1;
// 1ページに表示するカード枚数
const cardsPerPage = 18;
// 読み込んだ全カードデータ
let allCards = [];
// 検索後のカードデータ
let filteredCards = [];
// 現在選択中のカード
let selectedCard = null;
// 現在の検索条件
let filterState = {
    series: "",       // 収録弾
    character: "",    // アイドル
    genre: "",        // ジャンル
    rarity: "",       // レアリティ
    type: "",
    owned: ""         // 所持状況
};