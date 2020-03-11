var main = function(){
    "Uso restrito";
    var makeTabActive = function(tabNumber){
        //constroi o seletor a partir de tabNumber
        var abaSelecionada = ".tabs a:nth-child(" + tabNumber + ") span";
        $(".tabs span").removeClass("active");
        $(abaSelecionada).addClass("active");
        $("main .content").empty();
    };
    $(".tabs a:nth-child(1)").on("click", function(){
        makeTabActive(1);
        return false;
    });
    $(".tabs a:nth-child(2)").on("click", function(){
        makeTabActive(2);
        return false;
    });
    $(".tabs a:nth-child(3)").on("click", function(){
        makeTabActive(3);
        return false;
    });
};
$(document).ready(main);