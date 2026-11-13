// === 画面サイズに合わせて縮小 ===
function resizeScale(){
    const wrapper =
        document.getElementById(
            "scaleWrapper"
        );
    const baseWidth = 1600;
    const baseHeight = 800;
    const scale =
        Math.min(
            window.innerWidth / baseWidth,
            window.innerHeight / baseHeight,
            1
        );
    // 縮小
    wrapper.style.transform =
        `scale(${scale})`;
    // 左上基準に変更
    wrapper.style.transformOrigin =
        "top left";
    // 基準サイズ
    wrapper.style.width =
        `${baseWidth}px`;
    wrapper.style.height =
        `${baseHeight}px`;
    // 縮小後の位置調整
    wrapper.style.marginLeft =
        `${(window.innerWidth - baseWidth * scale) / 2}px`;
    wrapper.style.marginBottom =
        `${baseHeight * (1 - scale)}px`;
}
// 画面変更時
window.addEventListener(
    "resize",
    resizeScale
);
// 初期表示
window.addEventListener(
    "DOMContentLoaded",
    resizeScale
);