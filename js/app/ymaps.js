$(document).ready(function () {
    var mapBlock = document.getElementById('map');

    if (mapBlock) {
        ymaps.ready(init);
        var map,
            Placemark;

        function init() {
            map = new ymaps.Map("map", {
                center: [53.88847683, 27.529],
                zoom: 12
            });

            map.behaviors.disable('scrollZoom');
            if ($(this).width() < 1200) {
                map.behaviors.disable('drag');
            }

            Placemark = new ymaps.Placemark([53.888250, 27.517059], {
                hintContent: 'TerGlobo',
                balloonContent: 'TerGlobo <br /> +375 29 177-73-02 <br /> info@terglobo.by <br /> пн-пт 10:00 - 20:00 <br />  сб-вс 11:00 - 17:00 <br /> г. Минск, пр. Дзержинского 24-159а'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/ymaps-placemark.png',
                iconImageSize: [52, 76],
                iconImageOffset: [-26, -76]
            });

            map.geoObjects.add(Placemark);
        }
    }
});
