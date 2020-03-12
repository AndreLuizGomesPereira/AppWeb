var main = function () {
    //getJSON efetua ateé o mesmo parse do JSON para nós, portanto não é necessário chamar JSON.parse
    $.getJSON("cards/aceOfSpades.json", function (card) {
        //cria um elemento para armazenar a carta
        var $cardParagraph = $("<p>");
        //adiciona texto ao elemento paragrafo
        $cardParagraph.text(card.rank + "of" + card.suit);
        //aidiciona o paragrafo da carta ao main
        $(main).append($cardParagraph);
    });
};
$(document).ready(main);