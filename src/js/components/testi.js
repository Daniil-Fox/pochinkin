import { testiSlider } from "./sliders.js";

const testiItems = document.querySelectorAll(".testimonial");

if (testiItems.length > 0) {
  // Words Limit
  const LIMIT = 30;
  testiItems.forEach((testi) => {
    const fullTextContainer = testi.querySelector(".testimonial__text");
    const fullText = fullTextContainer.textContent;

    const readAll = testi.querySelector(".testimonial__content span");

    const words = fullText
      .split(" ")
      .filter((item) => item != "" && item != "\n");
    if (words.length <= LIMIT) {
      readAll.style.display = "none";
    } else {
      fullTextContainer.textContent = words.slice(0, LIMIT).join(" ") + "...";

      let isActive = false;

      readAll.addEventListener("click", (e) => {
        isActive = !isActive;

        if (isActive) {
          fullTextContainer.textContent = fullText;
          readAll.textContent = "Скрыть";
        } else {
          fullTextContainer.textContent =
            words.slice(0, LIMIT).join(" ") + "...";
          readAll.textContent = "Читать полностью";
        }
      });
    }
  });

  // Filter

  const tabs = document.querySelectorAll(".testi__tab");
  if (tabs) {
    const clearActive = () => {
      tabs.forEach((t) => t.classList.remove("active"));
    };
    tabs.forEach((el) => {
      let currentCategoryItems = 0;
      el.addEventListener("click", (e) => {
        e.preventDefault();
        clearActive();

        const category = el.dataset.tab;

        testiItems.forEach((el) => {
          if (el.dataset.testi != category) {
            el.style.display = "none";
          } else {
            currentCategoryItems++;
            el.style.display = "block";
          }
        });
        if (currentCategoryItems == 0) {
          testiItems.forEach((item) => (item.style.display = "block"));
        }
        el.classList.add("active");

        testiSlider.update();
      });
    });
  }
}
