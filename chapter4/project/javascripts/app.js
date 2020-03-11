var main = function(){
    "Uso restrito";

    $(".tabs span").toArray().forEach(function(element){
        //cria um handler click para este elemento
        $(element).on("click", function(){
        $(".tabs span").removeClass("active");
        $(element).addClass("active");
        $("main .content").empty();
        return false;
        });
    });
};
$(document).ready(main);