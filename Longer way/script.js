let tabOne = document.querySelector(".tab-one");
let tabTwo = document.querySelector(".tab-two");
let tabAnswerOne = document.querySelector(".tab-content-one");
let tabAnswerTwo = document.querySelector(".tab-content-two");
tabTwo.addEventListener("click", () => {
  tabOne.classList.remove("active-tab");
  tabTwo.classList.add("active-tab");
  tabAnswerOne.style.display = "none";
  tabAnswerTwo.style.display = "block";
});
tabOne.addEventListener("click", () => {
  tabTwo.classList.remove("active-tab");
  tabOne.classList.add("active-tab");
  tabAnswerTwo.style.display = "none";
  tabAnswerOne.style.display = "block";
});
