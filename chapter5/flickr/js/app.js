var main = function (){

    //esta, na realidade é somente uma string, porém eu a dividi em duas linhas para torna-la mais legivel
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?" + "tags=dogs&format=json&jsoncallback=?";

   $.getJSON(url, function(flickrResponse){
       flickrResponse.items.forEach(function(photo){
           //cria um novo elemento jQuery para armazenar a imagem, mas oculta-o para que possamos fazer o fadeIn
           var $img = $("<img>").hide();

           //define o atributo usando url contido na resposta
           $img.attr("src", photo.media.m);

           //associa a tag img ao elemento main photos e faz o seu fadeIn
           $("main .photos").append($img);
           $img.fadeIn();
       });
   });
};
$(document).ready(main);