var main = function () {

    $.getJSON("cards/aceOfSpades.json", function (card) {
        //cria um elemento para armazenar a carta
        var $cardParagraph = $("<p>");

        //cria o texto da carta
        $cardParagraph.text(card.rank + "of" + card.suit);

        //adiciona o paragrafo da carta ao main
        $("main").append($cardParagraph);
    });
    $.getJSON("cards/hand.json", function(hand){
        var $list = $("<ul>");

        //hand é um array, portanto é possivel iterar pelos seus elementos usando um laço forEach
        hand.forEach(function(card){
            //cria um item de lista para armazenar a carta e insere na lista
            var $card = $("<li>");
            $card.text(card.rank + "of" + card.suit);
            $list.append($card);
        });
        //adiciona a lista ao main
        $("main").append($list);
    });
};
$(document).ready(main);