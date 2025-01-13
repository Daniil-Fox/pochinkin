const modalForm = document.querySelector(".modal-form");
const modalVideo = document.querySelector(".modal-form");
const modal = document.querySelectorAll(".modal");
const modalBtn = document.querySelectorAll(".modal-btn");

const video = modalVideo?.querySelector("video");

modal.forEach((el) => {
  const closeModal = el.querySelector(".modal__close");
  const modalBody = el.querySelector(".modal__body");

  closeModal.addEventListener("click", (e) => {
    el.classList.remove("active");

    if (e.currentTarget.classList.contains("modal-video")) {
      video.src = null;
      video.poster = null;
    }
  });

  el.addEventListener("click", (e) => {
    el.classList.remove("active");

    if (e.currentTarget.classList.contains("modal-video")) {
      video.src = null;
      video.poster = null;
    }
  });
  modalBody?.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

if (modalBtn.length > 0) {
  modalBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.dataset.videoSrc) {
        const srcVideo = btn.dataset.videoSrc;
        const srcPoster = btn.dataset.posterSrc;
        video.src = srcVideo;
        video.poster = srcPoster;
        modalVideo.classList.add("active");
      } else {
        modalForm.classList.add("active");
      }
    });
  });
}
