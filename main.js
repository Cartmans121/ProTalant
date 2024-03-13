const btn = document.querySelector('.navbar-toggler');
const phone = document.querySelector('.phone');

btn.addEventListener('click', function () {
    phone.classList.toggle('open');
});

// Modal
const myModal = new bootstrap.Modal(
    document.getElementById("modalId"),
);

// animation

document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    const circleImage = document.querySelector('.hero__circle');

    function handleMouseMove(e) {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 991) {
            heroSection.removeEventListener('mousemove', handleMouseMove);
            return;
        }

        const offsetX = (e.clientX - heroSection.offsetLeft) / heroSection.offsetWidth - 0.5;
        const offsetY = (e.clientY - heroSection.offsetTop) / heroSection.offsetHeight - 0.5;

        const rotationStrength = 10;
        const rotation = rotationStrength * (offsetY * 7) + 'deg';

        circleImage.style.transform = 'rotate(' + rotation + ')';
        circleImage.style.left = 67 + offsetX * 5 + '%';
        circleImage.style.top = 15 + offsetY * 5 + '%';
    }

    const mediaQuery = window.matchMedia('(max-width: 991px)');
    if (!mediaQuery.matches) {
        heroSection.addEventListener('mousemove', handleMouseMove);
    }
});

// map 
// (function () {

//     if (typeof ymaps === 'undefined') {
//         return
//     };

//     let mapLoaded = false;

//     function loadMap() {

//         ymaps.ready(function () {
//             var myMap = new ymaps.Map('ymap', {
//                 center: [45.024750, 38.959206],
//                 zoom: 19,
//                 controls: [],
//             }, {
//                 searchControlProvider: 'yandex#search',
//             });

//             var content = '<div class="marker-content">' +
//             '<div class="marker-container">' +
//             '<div class="marker-address mb-4">' +
//             '<p class="text text-marker m-0 mb-3 p-0">Наш адрес:</p>' +
//             '<address class="m-0 text">' +
//             'ул. Кубанская набережная, 37/10, <br /> Краснодар, Краснодарский край, 350063' +
//             '</address>' +
//             '</div>' +
//             '<div class="marker-phone mb-4">' +
//             '<p class="text text-marker m-0 mb-2 p-0">Телефоны для связи:</p>' +
//             '<a target="_blank" href="tel:89148585634" class="text marker-link link-offset-3-hover">8 (914) 858-56-34</a>' +
//             '<h6 class="marker-name text m-0 mt-2">Вадим Сергеевич</h6>' +
//             '</div>' +
//             '<div class="marker-socials">' +
//             '<p class="text text-marker p-0 m-0 mb-2">Мессенджеры и соц. сети:</p>' +
//             '<ul class="p-0 m-0 d-flex gap-4">' +
//             '<li>' +
//             '<a target="_blank" href="#" class="social-link">' +
//             '<img src="./img/map/whatsapp.png" width="23" alt="WhatsApp">' +
//             '</a>' +
//             '</li>' +
//             '<li>' +
//             '<a target="_blank" href="#" class="social-link">' +
//             '<img src="./img/map/tg.png" width="23" alt="Telegram">' +
//             '</a>' +
//             '</li>' +
//             '<li>' +
//             '<a target="_blank" href="#" class="social-link">' +
//             '<img src="./img/map/avito.png" width="24" alt="Avito">' +
//             '</a>' +
//             '</li>' +
//             '</ul>' +
//             '</div>' +
//             '</div>' +
//             '</div>';


//             var myGeoObject = new ymaps.GeoObject({
//                 geometry: {
//                     type: "Point",
//                     coordinates: myMap.getCenter(),
//                 },
//                 properties: {
//                     balloonContent: content,
//                     balloonLayout: content,
//                     preset: './img/map/marker.png',
//                 }
//             },
//                 {
//                     balloonCloseButton: false
//                 });

//             var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//                 hintContent: 'ул. Кубанская набережная, 37/10, Краснодар, Краснодарский край, 350063',
//                 balloonContent: content
//             }, {
//                 iconLayout: 'default#image',
//                 iconImageHref: './img/map/marker.png',
//                 iconImageSize: [33, 40],
//                 iconImageOffset: [-15, -128],
//                 hasBalloon: false,
//             });

//             myMap.geoObjects.add(myGeoObject);

//             myGeoObject.balloon.open();

//             myMap.behaviors.disable('scrollZoom');


//             var balloonOffsetX, balloonOffsetY;

//             if (window.innerWidth <= 576) {
//                 balloonOffsetX = -95;
//                 balloonOffsetY = 227;
//             } else if (window.innerWidth <= 991) {
//                 balloonOffsetX = -129;
//                 balloonOffsetY = 270;
//             } else {
//                 balloonOffsetX = 121;
//                 balloonOffsetY = 79;
//             }

//             myGeoObject.options.set('balloonOffset', [balloonOffsetX, balloonOffsetY]);

//         });
//     }

//     function checkScroll() {
//         let scrollPosition = window.scrollY || window.scrollY;

//         // Координаты, при достижении которых нужно загрузить карту
//         let targetCoordinate = 4000;

//         if (scrollPosition >= targetCoordinate && !mapLoaded) {
//             loadMap(); // Загружаем карту
//             mapLoaded = true; // Устанавливаем флаг, чтобы предотвратить повторную загрузку
//             window.removeEventListener('scroll', checkScroll); // Убираем обработчик события прокрутки
//         }
//     }

//     window.addEventListener('scroll', checkScroll);

// })();


(function () {

    ymaps.ready(function () {
        var myMap = new ymaps.Map('ymap', {
            center: [45.024899, 38.9592900],
            zoom: 19,
            controls: [],
        }, {
            searchControlProvider: 'yandex#search'
        })

        let content = '<div class="marker-content">' +
            '<div class="marker-container">' +
            '<div class="marker-address mb-4">' +
            '<p class="text text-marker m-0 mb-3 p-0">Наш адрес:</p>' +
            '<address class="m-0 text">' +
            'ул. Кубанская набережная, 37/10, Краснодар, Краснодарский край, 350063' +
            '</address>' +
            '</div>' +
            '<div class="marker-phone mb-4">' +
            '<p class="text text-marker m-0 mb-2 p-0">Телефоны для связи:</p>' +
            '<a target="_blank" href="tel:89148585634" class="text marker-link link-offset-3-hover">8 (914) 858-56-34</a>' +
            '<h6 class="marker-name text m-0 mt-2">Вадим Сергеевич</h6>' +
            '</div>' +
            '<div class="marker-socials">' +
            '<p class="text text-marker p-0 m-0 mb-2">Мессенджеры и соц. сети:</p>' +
            '<ul class="p-0 m-0 d-flex gap-4">' +
            '<li>' +
            '<a target="_blank" href="#" class="social-link">' +
            '<img src="./img/map/whatsapp.png" width="23" alt="WhatsApp">' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a target="_blank" href="#" class="social-link">' +
            '<img src="./img/map/tg.png" width="23" alt="Telegram">' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a target="_blank" href="#" class="social-link">' +
            '<img src="./img/map/avito.png" width="24" alt="Avito">' +
            '</a>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</div>';

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            content
        );

        let iconContentOffset;

        if (window.innerWidth <= 991) {
            iconContentOffset = [-165, 60];
        } else {
            iconContentOffset = [86, -145]
        }

        myPlacemarkWithContent = new ymaps.Placemark([45.024750, 38.959206], {
            hintContent: 'ул. Кубанская набережная, 37/10, Краснодар, Краснодарский край, 350063',
            balloonContent: 'ул. Кубанская набережная, 37/10, <br /> Краснодар, Краснодарский край, 350063',
            iconContent: content
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './img/map/marker.png',
            // Размеры метки.
            iconImageSize: [33, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, -174],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: iconContentOffset,
            balloonOffset: [0, -143],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myMap.geoObjects.add(myPlacemarkWithContent);



    });

})();

