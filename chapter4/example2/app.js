var main = function () {
    "use strict";
    var addCommentFromInputBox = function () {
        var $newComment;

        if ($(".comment-input input").val() !== "") {
            $newComment = $("<p>").text($(".comment-input input").val());
            $newComment.hide();
            $(".comments").append($newComment);
            $newComment.fadeIn();
            $(".comment-input input").val("");
        }
    };
    $(".comment-input button").on("click", function () {
        addCommentFromInputBox();
    });
    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};
$(document).ready(main);