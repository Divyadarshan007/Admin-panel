var options1 = {
  series: [
    {
      name: "Bitcoin",
      data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
    },
  ],
  chart: {
    height: 70,
    type: "line",
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
    colors: ["#00ab55"],
  },
  title: {
    align: "left",
  },
  grid: {
    row: {
      colors: ["#fff", "#fff"], // takes an array which will be repeated on columns
      opacity: 0,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
};
var chart1 = new ApexCharts(
  document.querySelector("#crypto-chart-1"),
  options1
);
chart1.render();

var options2 = {
  series: [
    {
      name: "Etherium",
      data: [44, 25, 59, 41, 66, 25, 21, 9, 36, 12],
    },
  ],
  chart: {
    height: 70,
    type: "line",
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
    colors: ["#e7515a"],
  },
  title: {
    align: "left",
  },
  grid: {
    row: {
      colors: ["#fff", "#fff"], // takes an array which will be repeated on columns
      opacity: 0,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
};

var chart2 = new ApexCharts(
  document.querySelector("#crypto-chart-2"),
  options2
);
chart2.render();


var options3 = {
  series: [
    {
      name: "Litecoin",
      data: [9, 21, 36, 12, 66, 25, 44, 25, 41, 59],
    },
  ],
  chart: {
    height: 70,
    type: "line",
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
    colors: ["#00ab55"],
  },
  title: {
    align: "left",
  },
  grid: {
    row: {
      colors: ["#fff", "#fff"], // takes an array which will be repeated on columns
      opacity: 0,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
};
var chart3 = new ApexCharts(
  document.querySelector("#crypto-chart-3"),
  options3
);
chart3.render();


var options4 = {
  series: [
    {
      name: "Binance",
      data: [25, 44, 25, 59, 41, 21, 36, 12, 19, 9],
    },
  ],
  chart: {
    height: 70,
    type: "line",
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
    colors: ["#e7515a"],
  },
  title: {
    align: "left",
  },
  grid: {
    row: {
      colors: ["#fff", "#fff"], // takes an array which will be repeated on columns
      opacity: 0,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
};

var chart4 = new ApexCharts(
  document.querySelector("#crypto-chart-4"),
  options4
);
chart4.render();


var options5 = {
  series: [
    {
      name: "Tether",
      data: [21, 59, 41, 44, 25, 66, 9, 36, 25, 12],
    },
  ],
  chart: {
    height: 70,
    type: "line",
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
    colors: ["#00ab55"],
  },
  title: {
    align: "left",
  },
  grid: {
    row: {
      colors: ["#fff", "#fff"], // takes an array which will be repeated on columns
      opacity: 0,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
};
var chart5 = new ApexCharts(
  document.querySelector("#crypto-chart-5"),
  options5
);
chart5.render();



var options6 = {
  series: [
    {
      name: "Solana",
      data: [21, -9, 36, -12, 44, 25, 59, -41, 66, -25],
    },
  ],
  chart: {
    height: 70,
    type: "line",
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
    colors: ["#e7515a"],
  },
  title: {
    align: "left",
  },
  grid: {
    row: {
      colors: ["#fff", "#fff"], // takes an array which will be repeated on columns
      opacity: 0,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
};



var chart6 = new ApexCharts(
  document.querySelector("#crypto-chart-6"),
  options6
);
chart6.render();
