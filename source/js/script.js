/**
 * Created by ПК on 23.03.2017.
 */

function parallax() {
    $(".header-parallax-1").css("background-position-x", event.clientX*0.02 - 300 +"px");
    $(".header-parallax-2").css("background-position-x", event.clientX*0.03 - 300 +"px");
    $(".header-parallax-3").css("background-position-x", event.clientX*0.04 - 300 +"px")
}

var i = 0;

function searchhover() {
    $(".my-search").animate({width: "73vw"}, 300);
    $(".my-search").clearQueue();           // очищает стэк отработки
}

function searchout(){
    if (i == 0){
        $(".my-search").animate({width: "49px"}, 300);
    }
}

function searchfocus() {
    i =+ 1;
}

function searchblur() {
    i = 0;
    $(".my-search").animate({width: "49px"}, 300);
}
// $(document).ready(function () {
//     var a = $.getJSON('http://data.gov.ua/view-dataset/dataset.json?dataset-id=405cb5e3-b2a7-4870-bf9a-af588aaaf348&revison-id=%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%20%D1%80%D0%B5%D0%B2%D1%96%D1%97');
//
//     document.write(a.title);
// });

var accord1 = 0;
function accordionClick1() {
    if (accord1 == 0) {
        $(".accord1").css("background-color", "#f6f6f6");
        $(".accord1 .panel-title").css("background", "url(/source/img/arrows-up-faq.png) 97% center no-repeat");
        accord1=1;
    } else if (accord1 == 1){
        $(".accord1").css("background-color", "white");
        $(".accord1 .panel-title").css("background", "url(/source/img/arrows--down-faq.png) 97% center no-repeat");
        accord1=0;
    }
}

var accord2 = 0;
function accordionClick2() {
    if (accord2 == 0) {
        $(".accord2").css("background-color", "#f6f6f6");
        $(".accord2 .panel-title").css("background", "url(/source/img/arrows-up-faq.png) 97% center no-repeat");
        accord2=1;
    } else if (accord2 == 1){
        $(".accord2").css("background-color", "white");
        $(".accord2 .panel-title").css("background", "url(/source/img/arrows--down-faq.png) 97% center no-repeat");
        accord2=0;
    }
}

var accord3 = 0;
function accordionClick3() {
    if (accord3 == 0) {
        $(".accord3").css("background-color", "#f6f6f6");
        $(".accord3 .panel-title").css("background", "url(/source/img/arrows-up-faq.png) 97% center no-repeat");
        accord3=1;
    } else if (accord3 == 1){
        $(".accord3").css("background-color", "white");
        $(".accord3 .panel-title").css("background", "url(/source/img/arrows--down-faq.png) 97% center no-repeat");
        accord3=0;
    }
}