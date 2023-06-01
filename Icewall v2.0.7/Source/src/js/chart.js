import helper from "./helper";
import colors from "./colors";
import Chart from "chart.js/auto";

(function () {
    "use strict";

    // Chart
    if ($("#report-line-chart").length) {
        let ctx = $("#report-line-chart")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [
                            0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100,
                            900, 1200,
                        ],
                        borderWidth: 2,
                        borderColor: colors.primary(0.8),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                        tension: 0.4,
                    },
                    {
                        label: "# of Votes",
                        data: [
                            0, 300, 400, 560, 320, 600, 720, 850, 690, 805,
                            1200, 1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: $("html").hasClass("dark")
                            ? colors.slate["400"](0.6)
                            : colors.slate["400"](),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                        tension: 0.4,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 12,
                            },
                            color: colors.slate["500"](0.8),
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 12,
                            },
                            color: colors.slate["500"](0.8),
                            callback: function (value, index, values) {
                                return "$" + value;
                            },
                        },
                        grid: {
                            color: $("html").hasClass("dark")
                                ? colors.slate["500"](0.3)
                                : colors.slate["300"](),
                            borderDash: [2, 2],
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    }

    if ($("#report-pie-chart").length) {
        let ctx = $("#report-pie-chart")[0].getContext("2d");
        let myPieChart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: [
                    "31 - 50 Years old",
                    ">= 50 Years old",
                    "17 - 30 Years old",
                ],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 5,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });
    }

    if ($("#report-donut-chart").length) {
        let ctx = $("#report-donut-chart")[0].getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: [
                    "31 - 50 Years old",
                    ">= 50 Years old",
                    "17 - 30 Years old",
                ],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 5,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                cutout: "80%",
            },
        });
    }

    if ($("#report-bar-chart").length) {
        // Fake visitor data
        let reportBarChartData = new Array(40).fill(0).map((data, key) => {
            if (key % 3 == 0 || key % 5 == 0) {
                return Math.ceil(Math.random() * (0 - 20) + 20);
            } else {
                return Math.ceil(Math.random() * (0 - 7) + 7);
            }
        });

        // Fake visitor bar color
        let reportBarChartColor = reportBarChartData.map((data) => {
            if (data >= 8 && data <= 14) {
                return $("html").hasClass("dark")
                    ? "#2E51BBA6"
                    : colors.primary(0.65);
            } else if (data >= 15) {
                return $("html").hasClass("dark")
                    ? "#2E51BB"
                    : colors.primary();
            }

            return $("html").hasClass("dark")
                ? "#2E51BB59"
                : colors.primary(0.35);
        });

        let ctx = $("#report-bar-chart")[0].getContext("2d");
        let myBarChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: reportBarChartData,
                datasets: [
                    {
                        label: "Html Template",
                        barThickness: 6,
                        data: reportBarChartData,
                        backgroundColor: reportBarChartColor,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                },
            },
        });

        setInterval(() => {
            // Swap visitor data
            let newData = reportBarChartData[0];
            reportBarChartData.shift();
            reportBarChartData.push(newData);

            // Swap visitor bar color
            let newColor = reportBarChartColor[0];
            reportBarChartColor.shift();
            reportBarChartColor.push(newColor);

            myBarChart.update();
        }, 1000);
    }

    if ($("#report-bar-chart-1").length) {
        let ctx = $("#report-bar-chart-1")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        barThickness: 8,
                        maxBarThickness: 6,
                        data: [
                            60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250,
                            270,
                        ],
                        backgroundColor: colors.primary(0.9),
                    },
                    {
                        label: "VueJs Template",
                        barThickness: 8,
                        maxBarThickness: 6,
                        data: [
                            50, 135, 40, 180, 190, 60, 150, 90, 250, 170, 240,
                            250,
                        ],
                        backgroundColor: $("html").hasClass("dark")
                            ? colors.darkmode["400"]()
                            : colors.slate["300"](),
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 11,
                            },
                            color: colors.slate["500"](0.8),
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    y: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            color: $("html").hasClass("dark")
                                ? colors.darkmode["300"](0.8)
                                : colors.slate["300"](),
                            borderDash: [2, 2],
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    }

    if ($("#report-donut-chart-1").length) {
        let ctx = $("#report-donut-chart-1")[0].getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 2,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                cutout: "83%",
            },
        });
    }

    if ($("#report-donut-chart-2").length) {
        let ctx = $("#report-donut-chart-2")[0].getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 2,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                cutout: "83%",
            },
        });
    }

    if ($("#report-donut-chart-3").length) {
        let ctx = $("#report-donut-chart-3")[0].getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 5,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.slate[200](),
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                cutout: "82%",
            },
        });
    }

    if ($(".simple-line-chart-1").length) {
        $(".simple-line-chart-1").each(function () {
            let ctx = $(this)[0].getContext("2d");
            let myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "# of Votes",
                            data:
                                $(this).data("random") !== undefined
                                    ? helper.randomNumbers(0, 5, 12)
                                    : [
                                          0, 200, 250, 200, 500, 450, 850, 1050,
                                          950, 1100, 900, 1200,
                                      ],
                            borderWidth: 2,
                            borderColor:
                                $(this).data("line-color") !== undefined
                                    ? $(this).data("line-color")
                                    : colors.primary(0.8),
                            backgroundColor: "transparent",
                            pointBorderColor: "transparent",
                            tension: 0.4,
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                        y: {
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                    },
                },
            });
        });
    }

    if ($(".simple-line-chart-2").length) {
        $(".simple-line-chart-2").each(function () {
            let ctx = $(this)[0].getContext("2d");
            let myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "# of Votes",
                            data:
                                $(this).data("random") !== undefined
                                    ? helper.randomNumbers(0, 5, 12)
                                    : [
                                          0, 300, 400, 560, 320, 600, 720, 850,
                                          690, 805, 1200, 1010,
                                      ],
                            borderWidth: 2,
                            borderDash: [2, 2],
                            borderColor:
                                $(this).data("line-color") !== undefined
                                    ? $(this).data("line-color")
                                    : colors.slate["300"](),
                            backgroundColor: "transparent",
                            pointBorderColor: "transparent",
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                        y: {
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                    },
                },
            });
        });
    }

    if ($(".simple-line-chart-3").length) {
        let ctx = $(".simple-line-chart-3")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [
                            0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100,
                            900, 1200,
                        ],
                        borderWidth: 2,
                        borderColor: colors.primary(0.8),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                        tension: 0.4,
                    },
                    {
                        label: "# of Votes",
                        data: [
                            0, 300, 400, 560, 320, 600, 720, 850, 690, 805,
                            1200, 1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode["100"]()
                            : colors.slate["400"](),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                        tension: 0.4,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    y: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    }

    if ($(".simple-line-chart-4").length) {
        let ctx = $(".simple-line-chart-4")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [
                            0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100,
                            900, 1200,
                        ],
                        borderWidth: 2,
                        borderColor: colors.primary(0.8),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                        tension: 0.4,
                    },
                    {
                        label: "# of Votes",
                        data: [
                            0, 300, 400, 560, 320, 600, 720, 850, 690, 805,
                            1200, 1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode["100"]()
                            : colors.slate["400"](),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                        tension: 0.4,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    y: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    }

    // Chart widget page
    if ($("#vertical-bar-chart-widget").length) {
        let ctx = $("#vertical-bar-chart-widget")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: [0, 200, 250, 200, 500, 450, 850, 1050],
                        backgroundColor: colors.primary(),
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: [0, 300, 400, 560, 320, 600, 720, 850],
                        backgroundColor: $("html").hasClass("dark")
                            ? colors.darkmode["200"]()
                            : colors.slate["300"](),
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: colors.slate["500"](0.8),
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 12,
                            },
                            color: colors.slate["500"](0.8),
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    y: {
                        ticks: {
                            font: {
                                size: "12",
                            },
                            color: colors.slate["500"](0.8),
                            callback: function (value, index, values) {
                                return "$" + value;
                            },
                        },
                        grid: {
                            color: $("html").hasClass("dark")
                                ? colors.slate["500"](0.3)
                                : colors.slate["300"](),
                            borderDash: [2, 2],
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    }

    if ($("#horizontal-bar-chart-widget").length) {
        let ctx = $("#horizontal-bar-chart-widget")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: [0, 200, 250, 200, 500, 450, 850, 1050],
                        backgroundColor: colors.primary(),
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: [0, 300, 400, 560, 320, 600, 720, 850],
                        backgroundColor: $("html").hasClass("dark")
                            ? colors.darkmode["200"]()
                            : colors.slate["300"](),
                    },
                ],
            },
            options: {
                indexAxis: "y",
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: colors.slate["500"](0.8),
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: "12",
                            },
                            color: colors.slate["500"](0.8),
                            callback: function (value, index, values) {
                                return "$" + value;
                            },
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    y: {
                        ticks: {
                            font: {
                                size: "12",
                            },
                            color: colors.slate["500"](0.8),
                        },
                        grid: {
                            color: $("html").hasClass("dark")
                                ? colors.slate["500"](0.3)
                                : colors.slate["300"](),
                            borderDash: [2, 2],
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    }

    if ($("#stacked-bar-chart-widget").length) {
        let ctx = $("#stacked-bar-chart-widget")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        backgroundColor: colors.primary(),
                        data: helper.randomNumbers(-100, 100, 12),
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        backgroundColor: $("html").hasClass("dark")
                            ? colors.darkmode["200"]()
                            : colors.slate["300"](),
                        data: helper.randomNumbers(-100, 100, 12),
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: colors.slate["500"](0.8),
                        },
                    },
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            font: {
                                size: "12",
                            },
                            color: colors.slate["500"](0.8),
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            font: {
                                size: "12",
                            },
                            color: colors.slate["500"](0.8),
                            callback: function (value, index, values) {
                                return "$" + value;
                            },
                        },
                        grid: {
                            color: $("html").hasClass("dark")
                                ? colors.slate["500"](0.3)
                                : colors.slate["300"](),
                            borderDash: [2, 2],
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    }

    if ($("#stacked-bar-chart-1").length) {
        let ctx = $("#stacked-bar-chart-1")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [...Array(16).keys()],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        backgroundColor: colors.primary(0.8),
                        data: helper.randomNumbers(-100, 100, 16),
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        backgroundColor: $("html").hasClass("dark")
                            ? colors.darkmode["200"]()
                            : colors.slate["300"](),
                        data: helper.randomNumbers(-100, 100, 16),
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            font: {
                                size: "12",
                            },
                            color: colors.slate["500"](0.8),
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            font: {
                                size: "12",
                            },
                            color: colors.slate["500"](0.8),
                            callback: function (value, index, values) {
                                return "$" + value;
                            },
                        },
                        grid: {
                            color: $("html").hasClass("dark")
                                ? colors.slate["500"](0.3)
                                : colors.slate["300"](),
                            borderDash: [2, 2],
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    }

    if ($("#line-chart-widget").length) {
        let ctx = $("#line-chart-widget")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        data: [
                            0, 200, 250, 200, 500, 450, 850, 1050, 950, 1100,
                            900, 1200,
                        ],
                        borderWidth: 2,
                        borderColor: colors.primary(),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                        tension: 0.4,
                    },
                    {
                        label: "VueJs Template",
                        data: [
                            0, 300, 400, 560, 320, 600, 720, 850, 690, 805,
                            1200, 1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: $("html").hasClass("dark")
                            ? colors.slate["400"](0.6)
                            : colors.slate["400"](),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                        tension: 0.4,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: colors.slate["500"](0.8),
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: "12",
                            },
                            font: colors.slate["500"](0.8),
                        },
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    y: {
                        ticks: {
                            font: {
                                size: "12",
                            },
                            color: colors.slate["500"](0.8),
                            callback: function (value, index, values) {
                                return "$" + value;
                            },
                        },
                        grid: {
                            color: $("html").hasClass("dark")
                                ? colors.slate["500"](0.3)
                                : colors.slate["300"](),
                            borderDash: [2, 2],
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    }

    if ($("#donut-chart-widget").length) {
        let ctx = $("#donut-chart-widget")[0].getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Html", "Vuejs", "Laravel"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 5,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: colors.slate["500"](0.8),
                        },
                    },
                },
                cutout: "80%",
            },
        });
    }

    if ($("#pie-chart-widget").length) {
        let ctx = $("#pie-chart-widget")[0].getContext("2d");
        let myPieChart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Html", "Vuejs", "Laravel"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 5,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: colors.slate["500"](0.8),
                        },
                    },
                },
            },
        });
    }
})();
