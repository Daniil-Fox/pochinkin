import "./_components.js";
import "simplebar";
import { burger } from "./functions/burger.js";

const servicesListMore = document.querySelector(".services-list__more");

if (window.matchMedia("(max-width: 768px)").matches && servicesListMore) {
  const list = document.querySelectorAll(".services-list__list li");

  const items = [...list].splice(10);
  items.forEach((item) => {
    item.style.display = "none";
  });

  let isActive = false;
  servicesListMore.addEventListener("click", (e) => {
    isActive = !isActive;

    if (isActive) {
      items.forEach((item) => {
        item.style.display = null;
        servicesListMore.textContent = "Скрыть";
      });
    } else {
      items.forEach((item) => {
        item.style.display = "none";
        servicesListMore.textContent = "Открыть больше";
      });
    }
  });
}
