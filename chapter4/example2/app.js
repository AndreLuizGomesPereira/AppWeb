var main = function () {
    "use strict";
    $(".comment-input button").on("click", function (even) {
        $(".comments").append("<p>This is new a comment!</p>")
    });
};
$(document).ready(main);