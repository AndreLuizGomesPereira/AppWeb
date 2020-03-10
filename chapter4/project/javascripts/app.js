/*var main = function () {
    var $content = $("<div>Hello World!</div>").hide();
    $("body").append($content);
    $content.slideDown(2000);
}*/
var main = function(){
    var $content = $("<h2>Olá como vai você?</h2>").hide();
    var $moreContent = $("<h3>Eu estou bem!</h3>").hide();

    $("body main").append($content);
    $content.slideDown(2000, function(){
        $("body main").append($moreContent);
        $moreContent.fadeIn();
        $("footer p").fadeOut(1000, function(){
            $("footer p").remove();
        })
    });


}
$(document).ready(main);