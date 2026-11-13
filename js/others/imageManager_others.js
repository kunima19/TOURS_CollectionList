// === カード画像管理 ===
function getCardImage(card){
    // 未所持
    if(card.owned === false){
        return "img/未所持.png";
    }
    // 所持済み
    return (
        "img/others/"
        +
        card.rarity
        +
        ".png"
    );
}