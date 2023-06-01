import xlsx from "xlsx";
import { createIcons, icons } from "lucide";
import Tabulator from "tabulator-tables";

(function () {
    "use strict";

    // Tabulator
    if ($("#tabulator").length) {
        // Setup Tabulator
        let table = new Tabulator("#tabulator", {
            ajaxURL: "https://dummy-data.left4code.com",
            ajaxFiltering: true,
            ajaxSorting: true,
            printAsHtml: true,
            printStyled: true,
            pagination: "remote",
            paginationSize: 10,
            paginationSizeSelector: [10, 20, 30, 40],
            layout: "fitColumns",
            responsiveLayout: "collapse",
            placeholder: "No matching records found",
            columns: [
                {
                    formatter: "responsiveCollapse",
                    width: 40,
                    minWidth: 30,
                    hozAlign: "center",
                    resizable: false,
                    headerSort: false,
                },

                // For HTML table
                {
                    title: "PRODUCT NAME",
                    minWidth: 200,
                    responsive: 0,
                    field: "name",
                    vertAlign: "middle",
                    print: false,
                    download: false,
                    formatter(cell, formatterParams) {
                        return `<div>
                            <div class="font-medium whitespace-nowrap">${
                                cell.getData().name
                            }</div>
                            <div class="text-slate-500 text-xs whitespace-nowrap">${
                                cell.getData().category
                            }</div>
                        </div>`;
                    },
                },
                {
                    title: "IMAGES",
                    minWidth: 200,
                    field: "images",
                    hozAlign: "center",
                    vertAlign: "middle",
                    print: false,
                    download: false,
                    formatter(cell, formatterParams) {
                        return `<div class="flex lg:justify-center">
                            <div class="intro-x w-10 h-10 image-fit">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="/dist/images/${
                                    cell.getData().images[0]
                                }">
                            </div>
                            <div class="intro-x w-10 h-10 image-fit -ml-5">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="/dist/images/${
                                    cell.getData().images[1]
                                }">
                            </div>
                            <div class="intro-x w-10 h-10 image-fit -ml-5">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="/dist/images/${
                                    cell.getData().images[2]
                                }">
                            </div>
                        </div>`;
                    },
                },
                {
                    title: "REMAINING STOCK",
                    minWidth: 200,
                    field: "remaining_stock",
                    hozAlign: "center",
                    vertAlign: "middle",
                    print: false,
                    download: false,
                },
                {
                    title: "STATUS",
                    minWidth: 200,
                    field: "status",
                    hozAlign: "center",
                    vertAlign: "middle",
                    print: false,
                    download: false,
                    formatter(cell, formatterParams) {
                        return `<div class="flex items-center lg:justify-center ${
                            cell.getData().status
                                ? "text-success"
                                : "text-danger"
                        }">
                            <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> ${
                                cell.getData().status ? "Active" : "Inactive"
                            }
                        </div>`;
                    },
                },
                {
                    title: "ACTIONS",
                    minWidth: 200,
                    field: "actions",
                    responsive: 1,
                    hozAlign: "center",
                    vertAlign: "middle",
                    print: false,
                    download: false,
                    formatter(cell, formatterParams) {
                        let a =
                            $(`<div class="flex lg:justify-center items-center">
                            <a class="edit flex items-center mr-3" href="javascript:;">
                                <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> Edit
                            </a>
                            <a class="delete flex items-center text-danger" href="javascript:;">
                                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> Delete
                            </a>
                        </div>`);
                        $(a)
                            .find(".edit")
                            .on("click", function () {
                                alert("EDIT");
                            });

                        $(a)
                            .find(".delete")
                            .on("click", function () {
                                alert("DELETE");
                            });

                        return a[0];
                    },
                },

                // For print format
                {
                    title: "PRODUCT NAME",
                    field: "name",
                    visible: false,
                    print: true,
                    download: true,
                },
                {
                    title: "CATEGORY",
                    field: "category",
                    visible: false,
                    print: true,
                    download: true,
                },
                {
                    title: "REMAINING STOCK",
                    field: "remaining_stock",
                    visible: false,
                    print: true,
                    download: true,
                },
                {
                    title: "STATUS",
                    field: "status",
                    visible: false,
                    print: true,
                    download: true,
                    formatterPrint(cell) {
                        return cell.getValue() ? "Active" : "Inactive";
                    },
                },
                {
                    title: "IMAGE 1",
                    field: "images",
                    visible: false,
                    print: true,
                    download: true,
                    formatterPrint(cell) {
                        return cell.getValue()[0];
                    },
                },
                {
                    title: "IMAGE 2",
                    field: "images",
                    visible: false,
                    print: true,
                    download: true,
                    formatterPrint(cell) {
                        return cell.getValue()[1];
                    },
                },
                {
                    title: "IMAGE 3",
                    field: "images",
                    visible: false,
                    print: true,
                    download: true,
                    formatterPrint(cell) {
                        return cell.getValue()[2];
                    },
                },
            ],
            renderComplete() {
                createIcons({
                    icons,
                    "stroke-width": 1.5,
                    nameAttr: "data-lucide",
                });
            },
        });

        // Redraw table onresize
        window.addEventListener("resize", () => {
            table.redraw();
            createIcons({
                icons,
                "stroke-width": 1.5,
                nameAttr: "data-lucide",
            });
        });

        // Filter function
        function filterHTMLForm() {
            let field = $("#tabulator-html-filter-field").val();
            let type = $("#tabulator-html-filter-type").val();
            let value = $("#tabulator-html-filter-value").val();
            table.setFilter(field, type, value);
        }

        // On submit filter form
        $("#tabulator-html-filter-form")[0].addEventListener(
            "keypress",
            function (event) {
                let keycode = event.keyCode ? event.keyCode : event.which;
                if (keycode == "13") {
                    event.preventDefault();
                    filterHTMLForm();
                }
            }
        );

        // On click go button
        $("#tabulator-html-filter-go").on("click", function (event) {
            filterHTMLForm();
        });

        // On reset filter form
        $("#tabulator-html-filter-reset").on("click", function (event) {
            $("#tabulator-html-filter-field").val("name");
            $("#tabulator-html-filter-type").val("like");
            $("#tabulator-html-filter-value").val("");
            filterHTMLForm();
        });

        // Export
        $("#tabulator-export-csv").on("click", function (event) {
            table.download("csv", "data.csv");
        });

        $("#tabulator-export-json").on("click", function (event) {
            table.download("json", "data.json");
        });

        $("#tabulator-export-xlsx").on("click", function (event) {
            window.XLSX = xlsx;
            table.download("xlsx", "data.xlsx", {
                sheetName: "Products",
            });
        });

        $("#tabulator-export-html").on("click", function (event) {
            table.download("html", "data.html", {
                style: true,
            });
        });

        // Print
        $("#tabulator-print").on("click", function (event) {
            table.print();
        });
    }
})();
