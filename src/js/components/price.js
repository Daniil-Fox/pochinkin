const priceTabs = document.querySelectorAll(".price__tab");

if (priceTabs.length > 0) {
  const tabsContent = document.querySelectorAll(".price__list");
  priceTabs.forEach((tab) => {
    const dataset = tab.dataset.pricetab;
    tab.addEventListener("click", (e) => {
      tabsContent.forEach((el) => el.classList.remove("active"));
      priceTabs.forEach((el) => el.classList.remove("active"));

      tab.classList.add("active");

      document
        .querySelector(`.price__list[data-pricelist=${dataset}]`)
        .classList.add("active");
    });
  });
}
