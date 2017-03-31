/**
 * Created by ПК on 28.03.2017.
 */

var apiKey;
var apiClass;
var BBCnews = false;
var BBCsport = false;
var NGnews = false;
var GoogleNews = false;
var NTnews = false;
var TheHinduNews = false;
var myContainer;


function getNews(chanel) {
    $(".content img").css("max-height", "60px");
    switch (chanel){
        case "bbc":
            apiKey = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=7999b9684a3e481eb84c61fda2416a01";
            apiClass = "bbc";
            myContainer = "bbc-news";
            if (BBCnews == true) return 0;
            else BBCnews = true;
            break;
        case "bbc-sport":
            apiKey = "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=7999b9684a3e481eb84c61fda2416a01";
            apiClass = "bbc-sport";
            myContainer = "bbc-sport-news";
            if (BBCsport == true) return 0;
            else BBCsport = true;
            break;
        case "national-geographic":
            apiKey = " https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=7999b9684a3e481eb84c61fda2416a01";
            apiClass = "national-geographic";
            myContainer = "national-geographic-news";
            if (NGnews == true) return 0;
            else NGnews = true;
            break;
        case "google":
            apiKey = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=7999b9684a3e481eb84c61fda2416a01";
            apiClass = "google";
            myContainer = "google-news";
            if (GoogleNews == true) return 0;
            else GoogleNews = true;
            break;
        case "new-york":
            apiKey = "https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=7999b9684a3e481eb84c61fda2416a01";
            apiClass = "new-york";
            myContainer = "new-york-news";
            if (NTnews == true) return 0;
            else NTnews = true;
            break;
        case "the-hindu":
            apiKey = "https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=7999b9684a3e481eb84c61fda2416a01";
            apiClass = "the-hindu";
            myContainer = "the-hindu-news";
            if (TheHinduNews == true) return 0;
            else TheHinduNews = true;
            break;
    }
    var a = $.getJSON(apiKey, function(responce) {
            var i = 0;
            var url;
            $("."+apiClass+i).css("display", "block");
            for (i; i < responce.articles.length; i++){
                if (responce.articles.length>(i+1)){
                    $("."+apiClass+i).clone().addClass(apiClass+(i+1)).appendTo("." + myContainer);
                }
                $.each(responce.articles[i], function( key, val ) {
                    if (val == null) val = "none";
                    if (key == "title"){
                        $("."+apiClass+i+" .title").html(val).css("font-weight", "bold");
                    }

                    if (key == "url"){
                        $("."+apiClass+i+" .url").html("<a href='"+val+"'>Read more</a>");
                        $("."+apiClass+i+" .url a").css("color", "blue");
                    }
                    console.log(url);

                    if (key == "description"){
                        if (val.length > 100){
                            $("."+apiClass+i+" .description").html(val.substr(0, 100) + "...");
                        } else {
                            $("."+apiClass+i+" .description").html(val);
                        }
                    }
                    if (key == "urlToImage"){
                        $("."+apiClass+i+" .img").css("background", "url("+val+")");
                        $("."+apiClass+i+" .img").css("background-size", "cover");
                    }
                    if (key == "publishedAt"){
                        $("."+apiClass+i+" .date").html(val);
                    }
                });

            }
    });


    // var parse = $.parseJSON(a.responseFields);
    // console.log(parse);
}