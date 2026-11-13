// === 検索パネル開閉 ===
const searchArea =
    document.getElementById(
        "searchArea"
    );
const searchToggle =
    document.getElementById(
        "searchToggle"
    );
const closeSearch =
    document.getElementById(
        "closeSearch"
    );
searchToggle.addEventListener(
    "click",
    ()=>{
        searchArea.classList.add(
            "open"
        );
    }
);
closeSearch.addEventListener(
    "click",
    ()=>{
        searchArea.classList.remove(
            "open"
        );
    }
);

// === 検索欄の外側をクリックして閉じる ===
document.addEventListener(
    "click",
    (event) => {
        const searchArea =
            document.getElementById(
                "searchArea"
            );
        const searchToggle =
            document.getElementById(
                "searchToggle"
            );
        // 検索欄が開いている場合
        if(
            searchArea.classList.contains("open") &&
            !searchArea.contains(event.target) &&
            event.target !== searchToggle
        ){
            searchArea.classList.remove(
                "open"
            );
        }
    }
);