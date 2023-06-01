(function () {
    "use strict";

    // Dark mode switcher
    $(".dark-mode-switcher").on("click", function () {
        let switcher = $(this).find(".dark-mode-switcher__toggle");
        if ($(switcher).hasClass("dark-mode-switcher__toggle--active")) {
            $(switcher).removeClass("dark-mode-switcher__toggle--active");
        } else {
            $(switcher).addClass("dark-mode-switcher__toggle--active");
        }

        setTimeout(() => {
            let link = $(".dark-mode-switcher").data("url");
            window.location.href = link;
        }, 500);
    });
})();
