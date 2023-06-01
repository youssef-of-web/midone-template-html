// Load plugins
import helper from "./helper";
import * as Popper from "@popperjs/core";
import dom from "@left4code/tw-starter/dist/js/dom";

// Set plugins globally
window.helper = helper;
window.Popper = Popper;
window.$ = dom;
