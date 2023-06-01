(function () {
    "use strict";

    // Show dropdown
    $("#programmatically-show-dropdown").on("click", function () {
        setTimeout(() => {
            const el = document.querySelector("#programmatically-dropdown");
            const dropdown = tailwind.Dropdown.getOrCreateInstance(el);
            dropdown.show();
        }, 100);
    });

    // Hide dropdown
    $("#programmatically-hide-dropdown").on("click", function () {
        setTimeout(() => {
            const el = document.querySelector("#programmatically-dropdown");
            const dropdown = tailwind.Dropdown.getOrCreateInstance(el);
            dropdown.hide();
        }, 100);
    });

    // Toggle dropdown
    $("#programmatically-toggle-dropdown").on("click", function () {
        setTimeout(() => {
            const el = document.querySelector("#programmatically-dropdown");
            const dropdown = tailwind.Dropdown.getOrCreateInstance(el);
            dropdown.toggle();
        }, 100);
    });
})();
