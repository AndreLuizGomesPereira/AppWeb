var main = function (){

    //esta, na realidade é somente uma string, porém eu a dividi em duas linhas para torna-la mais legivel
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?" + "tags=dogs&format=json&jsoncallback=?";

    $.getJSON(url, function(flickrResponse){
        flickrResponse.items.forEach(function (photo){
            console.log(photo.media.m);
        })
    });
};
$(document).ready(main);