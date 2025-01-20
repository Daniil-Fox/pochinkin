const contactsSection = document.querySelector(".contacts");

if (contactsSection) {
  const tabs = contactsSection.querySelectorAll(".contacts__tab");
  const tabsContent = contactsSection.querySelectorAll(".contacts__content");

  const clearActive = () => {
    tabs.forEach((el) => el.classList.remove("active"));
    tabsContent.forEach((el) => el.classList.remove("active"));
  };
  tabs.forEach((el) => {
    const dataset = el.dataset.contactsTab;
    el.addEventListener("click", (e) => {
      clearActive();
      el.classList.add("active");
      contactsSection
        .querySelector(`.contacts__content[data-contacts-content=${dataset}]`)
        .classList.add("active");
    });
  });
  ymaps.ready(init);

  let myMap;

  const placemarks = [
    {
      city: "Москва",
      coords: [55.617393, 38.116191],
      hint: "Москва, Красноармейская, 23",
      address: "Москва, Красноармейская, 23, метро Аэропорт",
      metro: "метро Аэропорт",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },

    {
      city: "Москва",
      coords: [55.988847, 37.659569],
      hint: "Москва, Луговой проезд, 11",
      address: "Москва, Луговой проезд, 11, метро Марьино",
      metro: "метро Аэропорт",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },
    {
      city: "Москва",
      coords: [55.6394, 37.532583],
      hint: "Москва, Миклухо-Маклая, 34",
      address: "Москва, Миклухо-Маклая, 34, метро Беляево",
      metro: "метро Аэропорт",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },
    {
      city: "Москва",
      coords: [55.849878, 37.657084],
      hint: "Москва, Амундсена, 3 (корп. 2, подъезд 3, домофон 2В)",
      address:
        "Москва, Амундсена, 3 (корп. 2, подъезд 3, домофон 2В), метро Свиблово",
      metro: "метро Аэропорт",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },
    {
      city: "Москва",
      coords: [55.741657, 37.543479],
      hint: "Москва, Студенческая, 32",
      address: "Москва, Студенческая, 32, метро Студенческая ",
      metro: "метро Аэропорт",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },
    {
      city: "Москва",
      coords: [55.773798, 37.694845],
      hint: "Москва, Рубцовская набережная,2 (корп. 3)",
      address:
        "Москва, Рубцовская набережная,2 (корп. 3), метро Электрозаводская",
      metro: "метро Аэропорт",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },

    {
      city: "Санкт-Петербург",
      coords: [60.011725, 30.388497],
      hint: "Санкт-Петербург, Гжатская, 22 (корп. 1)",
      address: "Санкт-Петербург, Гжатская, 22 (корп. 1), метро Академическая",
      metro: "метро Аэропорт",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },
    {
      city: "Санкт-Петербург",
      coords: [59.8627, 30.318392],
      hint: "Санкт-Петербург, Фрунзе, 6Б",
      address: "Санкт-Петербург, метро Парк Победы",
      metro: "метро Аэропорт",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },

    {
      city: "Казань",
      coords: [55.817077, 49.182852],
      hint: "Казань, Сибирский тракт, 34В (корп.4, офис 101)",
      address: "Казань, Сибирский тракт, 34В (корп.4, офис 101)",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },

    {
      city: "Сочи",
      coords: [43.618407, 39.724337],
      hint: "Сочи, Донская, 54а",
      address: "Сочи, Донская, 54а",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },
    {
      city: "Нижний Новгород",
      coords: [56.244015, 43.968823],
      hint: "Нижний Новгород, проспект Гагарина, 178Ч",
      address: "Нижний Новгород, проспект Гагарина, 178Ч",
      timetable: ["Пн-Пт: 11:00 — 20:00", "Сб-Вс: 11:00 — 16:00"],
      tels: ["+7 495 023-55-44"],
    },
  ];

  const cities = [
    {
      city: "Москва",
      coords: [55.7558, 37.6173],
    },
    {
      city: "Санкт-Петербург",
      coords: [59.9343, 30.3351],
    },
    {
      city: "Казань",
      coords: [55.8304, 49.0661],
    },
    {
      city: "Сочи",
      coords: [43.5992, 39.7257],
    },
    {
      city: "Нижний Новгород",
      coords: [56.3287, 44.002],
    },
  ];

  const contactsList = document.querySelector(".contacts__list");
  const contactsCities = document.querySelector(".contacts__cities");
  const contactsCitiesTitle = document.querySelector(".contacts__city");

  var find = function (arr, find) {
    return arr.filter(function (value) {
      return (
        (value.address + "").toLowerCase().indexOf(find.toLowerCase()) != -1
      );
    });
  };
  var myProvider = {
    suggest: function (request, options) {
      var res = find(placemarks, request),
        arrayResult = [],
        results = Math.min(options.results, res.length);
      for (var i = 0; i < results; i++) {
        arrayResult.push({
          displayName: res[i].hint,
          value: res[i].address,
        });
      }
      return ymaps.vow.resolve(arrayResult);
    },
  };

  function fillList(city) {
    const html = placemarks
      .map((item) => {
        const address = item.address;
        const metro = item.metro;
        const ttArr = item.timetable;
        const telArr = item.tels;

        if (item.city == city) {
          return `<li class="contacts__item contacts-item">
              <a href="./contacts-sing.html" class="contacts-item__info">
                <div class="contacts-item__title">${address}</div>
                <div class="contacts-item__metro">${metro}</div>
              </a>
              <div class="contacts-item__tt desc">
                ${ttArr.map((t) => `<span>${t}</span>`).join("")}
                ${telArr
                  .map((tel) => `<a href="tel:${tel}">${tel}</a>`)
                  .join("")}
              </div>
            </li>
            `;
        }
      })
      .join("");
    contactsCitiesTitle.textContent = city;
    contactsList.innerHTML = html;
  }

  function init() {
    // Создаём экземпляр карты
    myMap = new ymaps.Map("map", {
      center: [55.7558, 37.6173], // Начальные координаты (Москва)
      zoom: 10,
    });

    var suggestView = new ymaps.SuggestView("suggest", {
      provider: myProvider,
      results: 3,
    });

    suggestView.events.add("select", function (e) {
      const selectedItem = e.get("item");
      const address = selectedItem.value;
      console.log(address);

      myMap.setCenter(
        placemarks.find((item) => item.address == address).coords,
        15
      );
    });

    objectManager = new ymaps.ObjectManager({
      // Чтобы метки начали кластеризоваться, выставляем опцию.
      clusterize: true,
      geoObjectOpenBalloonOnClick: false,
      clusterOpenBalloonOnClick: false,
    });

    // Массив для хранения меток

    const features = placemarks.map((shop, index) => {
      return {
        type: "Feature",
        id: index,
        geometry: {
          type: "Point",
          coordinates: shop.coords,
        },
        properties: {
          balloonContent: `<strong>${shop.hint}</strong><br>${shop.balloon}`,
          id: index, // Добавить ID для работы с кликами
        },
      };
    });

    objectManager.add({
      type: "FeatureCollection",
      features: features,
    });

    myMap.geoObjects.add(objectManager);
    fillList("Москва");
    // const cityButtons = document.querySelectorAll(".contacts__city-button");

    cities.forEach((item, idx) => {
      const btn = document.createElement("button");
      btn.className = "contacts__city-button swiper-slide btn-reset";

      if (idx == 0) {
        btn.classList.add("active");
      }

      btn.setAttribute("data-coord", item.coords);
      btn.textContent = item.city;

      btn.addEventListener("click", function (e) {
        document
          .querySelector(".contacts__city-button.active")
          .classList.remove("active");
        btn.classList.add("active");
        fillList(item.city);
        myMap.setCenter(item.coords, 11); // Установить уровень зума
      });

      contactsCities.append(btn);
    });
  }
}
