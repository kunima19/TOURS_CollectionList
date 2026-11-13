// === ページ送り処理 ===
// 最大ページ数を取得
function getMaxPage(){
    return Math.ceil(
        filteredCards.length
        /
        cardsPerPage
    );
}

// === 次ページ ===
function nextPage(){
    const maxPage =
        getMaxPage();
    if(currentPage < maxPage){
        currentPage++;
        renderCards();
    }
}

// === 前ページ ===
function previousPage(){
    if(currentPage > 1){
        currentPage--;
        renderCards();
    }
}

// 追加: 長押し制御用の変数と関数を新規追加
let autoPageInterval = null;
let autoPageTimeout = null;

function startAutoPage(action) {
    action();
    // 500ms押したら150ms間隔で連続実行
    autoPageTimeout = setTimeout(() => {
        autoPageInterval = setInterval(() => {
            action();
        }, 150);
    }, 500);
}

function stopAutoPage() {
    clearTimeout(autoPageTimeout);
    clearInterval(autoPageInterval);
}

// === ページボタン設定 ===
function setupPagination(){
    const next =
        document.getElementById(
            "nextPage"
        );
    const prev =
        document.getElementById(
            "prevPage"
        );

    // 次へボタン（長押し対応）
    next.addEventListener("mousedown", () => startAutoPage(nextPage));
    next.addEventListener("touchstart", (e) => {
        e.preventDefault();
        startAutoPage(nextPage);
    });
    // 前へボタン（長押し対応）
    prev.addEventListener("mousedown", () => startAutoPage(previousPage));
    prev.addEventListener("touchstart", (e) => {
        e.preventDefault();
        startAutoPage(previousPage);
    });
    ["mouseup", "mouseleave", "touchend", "touchcancel"].forEach(eventName => {
        next.addEventListener(eventName, stopAutoPage);
        prev.addEventListener(eventName, stopAutoPage);
    });
}

// === ページ番号表示 ===
function updatePageNumber(){
    const page =
        document.getElementById(
            "pageNumber"
        );
    if(!page){
        return;
    }
    page.textContent =
        currentPage
        +
        " / "
        +
        getMaxPage();
}