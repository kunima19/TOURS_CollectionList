// === カードデータ読み込み ===
// カードデータを取得
function loadCardData(){
    allCards = cardData;
    // 絞り込み用データをコピー
    filteredCards = [
        ...allCards
    ];
    return true;
}