// === カード詳細表示 ===
function selectCard(card){
    // 選択カード保存
    selectedCard =
        card;
    // 詳細表示
    showCardDetail(
        card
    );
}

// === 詳細情報表示 ===
function showCardDetail(card){
    // カード情報欄を表示する
    const detail =
        document.getElementById(
            "cardDetail"
        );
    detail.style.display =
        "block";
    // 背景を表示
    document
        .getElementById(
            "detailOverlay"
        )
        .classList.add(
            "active"
        );
    // 詳細画像
    const imageArea =
        document.getElementById(
            "detailImage"
        );
    imageArea.innerHTML = `
        <img src="${getCardImage(card)}">
    `;
    // カード名
    document.getElementById(
        "detailName"
    ).textContent =
        card.name;
    // カード番号
    document.getElementById(
        "detailNumber"
    ).textContent =
        card.number;
    // 収録弾
    document.getElementById(
        "detailSeries"
    ).textContent =
        card.series;
    // レアリティ
    document.getElementById(
        "detailRarity"
    ).textContent =
        card.rarity;
    // 種類
    document.getElementById(
        "detailType"
    ).textContent =
        card.type;
    // ジャンル
    document.getElementById(
        "detailGenre"
    ).textContent =
        card.genre;
    // アイドル
    document.getElementById(
        "detailCharacter"
    ).textContent =
        card.character;
    // 所持状況
    const owned =
        document.getElementById(
            "detailOwned"
        );
    if(card.owned){
        owned.textContent =
            "✓ 所持済み";
        owned.className =
            "ownedText";
    }
    else{
        owned.textContent =
            "× 未所持";
        owned.className =
            "notOwnedText";
    }
}

// === 詳細閉じる ===
function closeCardDetail(){
    document.getElementById(
        "cardDetail"
    )
    .style.display =
        "none";
    document
        .getElementById(
            "detailOverlay"
        )
        .classList.remove(
            "active"
        );
}

// === ✕ボタン ===
document.addEventListener(
    "DOMContentLoaded",
    () => {
        document
            .getElementById(
                "closeDetail"
            )
            .addEventListener(
                "click",
                closeCardDetail
            );
    }
);
// === 背景をクリックして閉じる ===
document.addEventListener(
    "DOMContentLoaded",
    () => {
        const overlay =
            document.getElementById(
                "detailOverlay"
            );
        overlay.addEventListener(
            "click",
            () => {
                closeCardDetail();
            }
        );
    }
);