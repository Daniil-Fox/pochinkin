import { Swiper } from "swiper";

import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";

Swiper.use([Navigation, Pagination, Autoplay, FreeMode]);
new Swiper(".hero__slider", {
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    prevEl: ".hero__control--prev",
    nextEl: ".hero__control--next",
  },

  pagination: {
    el: ".hero__pagination",
    clickable: true,
  },
});

new Swiper(".partners__slider", {
  slidesPerView: 6,
  spaceBetween: 28,
  navigation: {
    prevEl: ".partners__control--prev",
    nextEl: ".partners__control--next",
  },
  pagination: {
    el: ".partners__pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 6,
      spaceBetween: 28,
    },
  },
});

new Swiper(".ready__slider", {
  slidesPerView: 2,
  spaceBetween: 24,
  navigation: {
    prevEl: ".ready__control--prev",
    nextEl: ".ready__control--next",
  },
  pagination: {
    el: ".ready__pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 24,
      allowTouchMove: false,
    },
  },
});
new Swiper(".cities-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
});
new Swiper(".video__slider", {
  slidesPerView: 3,
  spaceBetween: 24,

  navigation: {
    prevEl: ".video__control--prev",
    nextEl: ".video__control--next",
  },
  pagination: {
    el: ".video__pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

const testiTabs = new Swiper(".testi__slider-tabs", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
});
const priceTabs = new Swiper(".price__slider-tabs", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
});

const testiSlider = new Swiper(".testi__slider", {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: ".testi__control--prev",
    nextEl: ".testi__control--next",
  },
  pagination: {
    el: ".testi__pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

const completedSlider = new Swiper(".completed__slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    prevEl: ".completed__control--prev",
    nextEl: ".completed__control--next",
  },
  pagination: {
    el: ".completed__pagination",
    clickable: true,
  },
});

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  // const someFunc = (instance) => {
  //   if (instance) {
  //     instance.on("slideChange", function (e) {
  //       console.log("*** mySwiper.activeIndex", instance.activeIndex);
  //     });
  //   }
  // };

  resizableSwiper(
    "(max-width: 768px)",
    ".brands__slider",
    {
      loop: true,
      spaceBetween: 15,
      slidesPerView: "auto",
    }
    // someFunc
  );
  resizableSwiper("(max-width: 768px)", ".description__slider", {
    spaceBetween: 15,
    slidesPerView: "auto",
  });
  resizableSwiper("(max-width: 768px)", ".franch__slider", {
    spaceBetween: 15,
    slidesPerView: "auto",
  });
  resizableSwiper("(max-width: 768px)", ".f-ben__slider", {
    spaceBetween: 15,
    slidesPerView: "auto",
  });
});

export { testiSlider };
