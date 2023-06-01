import helper from "./helper";
import hljs from "highlight.js";
import jsBeautify from "js-beautify";

(function () {
    "use strict";

    // Highlight code
    $(".source-preview").each(function () {
        let source = $(this).find("code").html();

        // First replace
        let replace = helper.replaceAll(source, "HTMLOpenTag", "<");
        replace = helper.replaceAll(replace, "HTMLCloseTag", ">");

        // Save for copy code function
        let originalSource = $(
            '<textarea class="absolute w-0 h-0 p-0"></textarea>'
        ).val(replace);
        $(this).append(originalSource);

        // Beautify code
        if ($(this).find("code").hasClass("javascript")) {
            replace = jsBeautify(replace);
        } else {
            replace = jsBeautify.html(replace);
        }

        // Format for highlight.js
        replace = helper.replaceAll(replace, "<", "&lt;");
        replace = helper.replaceAll(replace, ">", "&gt;");
        $(this).find("code").html(replace);
    });

    hljs.highlightAll();
})();
