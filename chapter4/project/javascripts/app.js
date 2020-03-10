/*var main = function () {
    var $content = $("<div>Hello World!</div>").hide();
    $("body").append($content);
    $content.slideDown(2000);
}*/
var main = function(){
    var $content = $("<h2>Olá como vai você?</h2>").hide();
    var $moreContent = $("<h3>Eu estou bem!</h3>").hide();

    $("body").append($content);
    $content.slideDown(2000);

    $("body").append($moreContent);
    $moreContent.fadeIn(2000);
}
$(document).ready(main);