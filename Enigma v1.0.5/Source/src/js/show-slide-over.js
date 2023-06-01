(function () {
    "use strict";

    // Show slide over
    $("#programmatically-show-slide-over").on("click", function () {
        const el = document.querySelector("#programmatically-slide-over");
        const slideOver = tailwind.Modal.getOrCreateInstance(el);
        slideOver.show();
    });

    // Hide slide over
    $("#programmatically-hide-slide-over").on("click", function () {
        const el = document.querySelector("#programmatically-slide-over");
        const slideOver = tailwind.Modal.getOrCreateInstance(el);
        slideOver.hide();
    });

    // Toggle slide over
    $("#programmatically-toggle-slide-over").on("click", function () {
        const el = document.querySelector("#programmatically-slide-over");
        const slideOver = tailwind.Modal.getOrCreateInstance(el);
        slideOver.toggle();
    });
})();
