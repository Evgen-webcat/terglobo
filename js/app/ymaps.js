$(document).ready(function () {
    var mapBlock = document.getElementById('map');

    if (mapBlock) {
    ymaps.ready(init);
    var map,
        Placemark;

    function init() {
        map = new ymaps.Map("map", {
            center: [53.88847683, 27.529],
            zoom: 15
        });

        map.behaviors.disable('scrollZoom');

        Placemark = new ymaps.Placemark([53.888250, 27.517059], {
            hintContent: 'TerGlobo',
            balloonContent: 'TerGlobo'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/ymaps-placemark.png',
            iconImageSize: [52, 76]
        });

         map.geoObjects.add(Placemark);
    }
}
});
