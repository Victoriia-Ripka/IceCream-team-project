(() => {
    const refs = {
        openReadmoreBtn: document.querySelector(".readmore-open"),
        closeReadmoreBtn: document.querySelector(".readmore-close"),
        readmore: document.querySelector(".readmore"),
    };

    refs.openReadmoreBtn.addEventListener("click", toggleReadmore);
    refs.closeReadmoreBtn.addEventListener("click", toggleReadmore);

    function toggleReadmore() {
        refs.readmore.classList.toggle("is-hidden");
    }
})();