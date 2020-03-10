var main = function(){
    var $content = $("<div>Hello World!</div>").hide();
    $("body").append($content);
    $content.slideDown(2000);
}
$(document).ready(main);