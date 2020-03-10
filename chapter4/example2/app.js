var main = function () {
    "use strict";
    $(".comment-input button").on("click", function (event) {
        var $novoComentario = $("<p>").text( $(".comment-input input").val());
        $(".comments").append($novoComentario);
    });
};
$(document).ready(main);