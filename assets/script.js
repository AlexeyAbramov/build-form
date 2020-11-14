const cardsMore = document.getElementById("cards__more");
const card = document.querySelectorAll(".item-card");
const cardText = document.querySelector(".cards__text");
const formTitle = document.querySelectorAll(".form-filter__heading");
const formBody = document.querySelectorAll(".form-filter__body");
const distanceInputs = document.querySelectorAll(".distance-filter__input");
const distanceLabels = document.querySelectorAll(".distance-filter__label");
const any = document.getElementById("distance__any");
const formArrow = document.querySelectorAll(".arrow");
const optionMore = document.getElementById("option__more");
const checkboxGroup = document.querySelectorAll(".checkbox__group");

const menuToggle = document.querySelector(".menu-toggle");
const filters = document.querySelector(".filters");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  filters.classList.toggle("active");
};
cardsMore.onclick = function (e) {
  e.preventDefault();
  for (let i = 9; i < card.length; i++) {
    card[i].classList.toggle("hidden");
  }
  cardText.innerHTML === "Показать еще"
    ? (cardText.innerHTML = "Скрыть")
    : (cardText.innerHTML = "Показать еще");
};

//развернуть/свернуть тело фильтра
formTitle.forEach(function (item, index) {
  item.addEventListener("click", function (e) {
    formBody[index].classList.toggle("hidden");
    formArrow[index].classList.toggle("arrow_disabled");
  });
});
// показать/скрыть меню опций
optionMore.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 5; i < checkboxGroup.length; i++) {
    checkboxGroup[i].classList.toggle("hidden");
  }
  optionMore.innerHTML === "Показать еще"
    ? (optionMore.innerHTML = "Скрыть")
    : (optionMore.innerHTML = "Показать еще");
});
// зависимость инпутов от кнопки Любая
any.addEventListener("click", function () {
  distanceInputs.forEach(function (input) {
    input.checked = false;
  });
});
// зависимость кнопки Любая от инпутов
distanceInputs.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.checked) {
      any.checked = false;
    }
  });
});
