var main = function () {
    "use strict";
    $(".comment-input button").on("click", function (event) {
        var $novoComentario;

        if ($(".comment-input input").val() !== "") {
            $novoComentario = $("<p>").text($(".comment-input input").val());
            $novoComentario.hide();
            $(".comments").append($novoComentario);
            $novoComentario.fadeIn();
            $(".comment-input input").val("");
        }
    });
    $(".comment-input input").on("keypress", function () {
        var $novoComentario;

        if (event.keyCode === 13) {
            if ($(".comment-input input").val() !== "") {
                $novoComentario = $("<p>").text($(".comment-input input").val());
                $novoComentario.hide();
                $(".comments").append($novoComentario);
                $novoComentario.fadeIn();
                $(".comment-input input").val("");
            }
        }
    })

};
$(document).ready(main);