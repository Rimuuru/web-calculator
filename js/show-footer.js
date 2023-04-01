const showFooterBtn = document.getElementById("show-footer");
const footer = document.querySelector("footer");

showFooterBtn.addEventListener("click", () => {
    footer.style.bottom = "0";
})