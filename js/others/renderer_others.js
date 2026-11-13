let showCardNumber = false;
// === カード表示処理 ===
// 現在ページのカードを表示
function renderCards(){
    // 表示場所
    const leftArea =
        document.getElementById(
            "leftCards"
        );
    const rightArea =
        document.getElementById(
            "rightCards"
        );
    // 一度削除
    leftArea.innerHTML = "";
    rightArea.innerHTML = "";
    // 表示する範囲
    const start =
        (currentPage - 1)
        * cardsPerPage;
    const end =
        start + cardsPerPage;
    const pageCards =
        filteredCards.slice(
            start,
            end
        );
    // 12枚ずつ分割
    const leftCards =
        pageCards.slice(
            0,
            9
        );
    const rightCards =
        pageCards.slice(
            9,
            18
        );
    // 左右へ追加
    leftCards.forEach(card => {
        leftArea.appendChild(
            createCardElement(card)
        );
    });
    rightCards.forEach(card => {
        rightArea.appendChild(
            createCardElement(card)
        );
    });
    updatePageNumber();
}

// === カードHTML作成 ===
function createCardElement(card){
    const div =
        document.createElement(
            "div"
        );
    div.classList.add(
        "card"
    );
    // === Separator ===
    if(card.rarity !== "Separator"){
        // 所持状態
        if(card.owned){
            div.classList.add(
                "owned"
            );
        }
        else{
            div.classList.add(
                "notOwned"
            );
        }
    }

    // === 画像 ===
    const img =
        document.createElement(
            "img"
        );
    img.src =
        getCardImage(card);
    img.alt =
        card.rarity === "Separator"
            ? ""
            : card.character;
    div.appendChild(
        img
    );

    // === カード番号 ===
    if(
        card.rarity !== "Separator" &&
        showCardNumber
    ){
        const number =
            document.createElement(
                "div"
            );
        number.classList.add(
            "cardNumber"
        );
        number.textContent =
            card.number;
        div.appendChild(
            number
        );
    }

    // === クリック ===
    if(card.rarity !== "Separator"){
        div.addEventListener(
            "click",
            () => {
                selectCard(card);
            }
        );
    }
    return div;
}

// === カード番号表示切り替え ===
document.addEventListener(
    "DOMContentLoaded",
    () => {
        const button =
            document.getElementById(
                "numberToggle"
            );
        button.addEventListener(
            "click",
            () => {
                showCardNumber =
                    !showCardNumber;
                // ボタン表示を変更
                if(showCardNumber){
                    button.textContent =
                        "番号非表示";
                }
                else{
                    button.textContent =
                        "番号表示";
                }
                // カードを再描画
                renderCards();
            }
        );
    }
);