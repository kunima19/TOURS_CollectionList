// === アプリ起動処理 ===
async function init(){
    // カードデータ読み込み
    const success =
        await loadCardData();
    // 検索項目作成
    createFilterOptions();
    // ページボタン設定
    setupPagination();
    // 初期表示
    renderCards();
}

// === ページ読み込み時実行 ===
window.addEventListener(
    "DOMContentLoaded",
    init
);