const dropdown = document.querySelectorAll(".dropdown");

if (window.matchMedia("(max-width: 768px)").matches && dropdown.length > 0) {
  dropdown.forEach((d) => {
    const btn = d.querySelector(".dropdown-btn");
    const content = d.querySelector(".dropdown-content");

    let isActive = false;
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      isActive = btn.classList.toggle("active");

      content.style.maxHeight = isActive ? content.scrollHeight + "px" : null;
    });
  });
}
