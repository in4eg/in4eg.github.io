var map;

var markerImage = new google.maps.MarkerImage(
    'images/icons/pin.png'
    );


$(document).ready(function() {

    initialize();

    $("#map-nav").on("click", "#Moscow", function() {
        var laLatLng = new google.maps.LatLng(55.76427508055636, 37.61513921593097);
        map.panTo(laLatLng);

        var marker = new google.maps.Marker({
            icon: markerImage,
            position: new google.maps.LatLng(55.76427508055636, 37.61513921593097),
            map: map,
            title: 'Москва, ул. Петровка, дом 20/1, офис 410'
        });
    });
    $("#map-nav").on("click", "#StPeterburg", function() {
        var laLatLng = new google.maps.LatLng(59.92816058187243, 30.344510216411543);
        map.panTo(laLatLng);

        var marker = new google.maps.Marker({
            icon: markerImage,
            position: new google.maps.LatLng(59.92816058187243, 30.344510216411543),
            map: map,
            title: 'Санкт-Петербург, Владимирский проспект 23 лит. Офис 707'
        });
    });

    var browserWidth = window.innerWidth; 


    $(".link-to").on("click", function(){
        $(".link-to").removeClass("active");

        if (browserWidth <= 768) {
            $(".map-inside").addClass("active");
            $("body").addClass("no-scroll");
        };

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
        };
    });

    if (browserWidth <= 768) {

        $(".map-inside").on("click", function(e){
            $(this).removeClass("active");
            $("body").removeClass("no-scroll");
        });
        $(".google-map-main").on("click", function(e){
            e.stopPropagation();
            $(".map-inside").addClass("active");
            $("body").addClass("no-scroll");
        });
    };


});
//doc ready end

function initialize() {

    var myOptions = {
        zoom: 15,
        scrollwheel: false,
        center: new google.maps.LatLng(55.76427508055636, 37.61513921593097),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        icon: markerImage,
        styles: []
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var marker = new google.maps.Marker({
        icon: markerImage,
        position: new google.maps.LatLng(55.76427508055636, 37.61513921593097),
        map: map,
        title: 'Москва, ул. Петровка, дом 20/1, офис 410'
    });

}