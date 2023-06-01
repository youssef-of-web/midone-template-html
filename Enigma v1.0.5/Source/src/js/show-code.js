(function () {
    "use strict";

    // Show code or preview
    $("body").on("change", ".show-code", function () {
        const elementId = $(this).data("target");
        if ($(this).is(":checked")) {
            $(elementId).find(".preview").hide();
            $(elementId).find(".source-code").fadeIn(200);
        } else {
            $(elementId).find(".preview").fadeIn(200);
            $(elementId).find(".source-code").hide();
        }
    });
})();
