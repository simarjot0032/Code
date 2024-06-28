let tab = document.querySelectorAll(".tab");
let tabAnswer = document.querySelectorAll(".tab-content");
let statenumber;
function changeState(n) {
  statenumber = n;
}
function Tab() {
  tab.forEach((t, index) => {
    index == statenumber
      ? t.classList.add("active-tab")
      : t.classList.remove("active-tab");
    index == statenumber
      ? (tabAnswer[index].style.display = "block")
      : (tabAnswer[index].style.display = "none");
  });
}
tab.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    changeState(index);
    Tab();
  });
});
