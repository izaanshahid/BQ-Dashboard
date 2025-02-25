// var spark1 = {
//     chart: {
//         type: 'bar',
//         height: 160,
//         sparkline: {
//             enabled: true
//         },
//     },

//     stroke: {
//         curve: 'curve'
//     },

//     fill: {
//         opacity: 1,
//     },
//     series: [{
//         data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
//     }],
//     yaxis: {
//         min: 0
//     },
//     colors: ['#639'],

// }
// var spark1 = new ApexCharts(document.querySelector("#spark1"), spark1);
// spark1.render();

// basic area
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 1,
  },
  series: [
    {
      name: 'income 1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'income 2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],

  colors: ['#6ed3cf', '#4caf50'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart'),
  bAOptions
);

chart.render();
// end basic area

// basic area 2
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1,
  },
  series: [
    {
      name: 'approve 1',
      data: [90, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'approve 2',
      data: [11, 90, 45, 32, 34, 52, 41],
    },
  ],
  colors: ['#6ed3cf', '#9068be'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart2'),
  bAOptions
);

chart.render();
// end basic area 2

// basic area 3
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1,
  },
  series: [
    {
      name: 'transaction 1',
      data: [11, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'transaction 2',
      data: [100, 40, 45, 32, 34, 0, 41],
    },
  ],
  colors: ['#fae596', '#3fb0ac'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart3'),
  bAOptions
);

chart.render();
// end basic area 3

// basic area 4  not working
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 1,
  },
  series: [
    {
      name: 'sales 1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'sales 2',
      data: [11, 32, 90, 32, 34, 52, 41],
    },
  ],
  colors: ['#f44336', '#e05038'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart4'),
  bAOptions
);

chart.render();
// end basic area 4

// basic area 5
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 1,
  },
  series: [
    {
      name: 'approve 1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  colors: ['#639', '#e97d23'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart5'),
  bAOptions
);

chart.render();
// end of basic area5

// basic area 6
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 1,
  },
  series: [
    {
      name: 'Comments',
      data: [60, 20, 28, 51, 15, 40, 50],
    },
  ],
  colors: ['#98dafc'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart6'),
  bAOptions
);

chart.render();
// end of basic area6

// basic area 7
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 1,
  },
  series: [
    {
      name: 'Contribution',
      data: [30, 20, 90, 2, 15, 40, 50],
    },
  ],
  colors: ['#bcd5d1'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart7'),
  bAOptions
);

chart.render();
// end of basic area7

// basic area 8
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 1,
  },
  series: [
    {
      name: 'Watch',
      data: [65, 90, 10, 45, 15, 75, 50],
    },
  ],
  colors: ['#6534ff'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart8'),
  bAOptions
);

chart.render();
// end of basic area8

// people---basic area 9
var options6 = {
  chart: {
    type: 'bar',
    width: '70%',
    height: 150,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '60%',
      endingShape: 'rounded',
    },
  },
  colors: ['#08e5e8'],

  series: [
    {
      data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14, 30, 50],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector('#chart6'), options6).render();

// Multiple Radial Bar--use 10
var options = {
  chart: {
    height: 150,
    width: '60%',
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: '#e7e7e7',
        strokeWidth: '100%',
        margin: 5, // margin is in pixels
        shadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2,
        },
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: 1,
          fontSize: '10px',
        },
      },
    },
  },
  stroke: {
    curve: 'smooth',
    lineCap: 'round',
  },
  lebels: {
    show: false,
  },
  series: [75],
  // labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  labels: ['Average Results'],
};

var chart = new ApexCharts(
  document.querySelector('#multipleRadialBar'),
  options
);

chart.render();

// views---basic area 9
var options6 = {
  chart: {
    type: 'bar',
    width: '70%',
    height: 150,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '60%',
    },
  },
  colors: ['#e05038'],

  series: [
    {
      data: [12, 14, 2, 47, -42, -15, 47, 75, 65, 19, -14, 30, 50],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector('#chart6-2'), options6).render();

//growth

var options1 = {
  chart: {
    type: 'line',
    width: '100%',
    height: 150,
    sparkline: {
      enabled: true,
    },
  },
  series: [
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

new ApexCharts(document.querySelector('#chart1'), options1).render();

// chart no 13

var options6 = {
  chart: {
    type: 'bar',
    width: '70%',
    height: 100,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
    },
  },
  colors: ['#c43235'],

  series: [
    {
      data: [5, 15, 25, 35, 55, 75, 100, 75, 55, 35, 25, 15, 5],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector('#chart13'), options6).render();

// chart no 14
var options6 = {
  chart: {
    type: 'bar',
    width: '70%',
    height: 100,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
    },
  },
  colors: ['#6534ff'],

  series: [
    {
      data: [5, 15, 15, 35, 35, 75, 90, 75, 35, 35, 15, 15, 5],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector('#chart14'), options6).render();

// chart no 15
var options6 = {
  chart: {
    type: 'bar',
    width: '70%',
    height: 100,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
    },
  },
  colors: ['#e6af4b'],

  series: [
    {
      data: [5, 15, 25, 35, 25, 15, 5, 10, 20, 30, 45, 65, 45, 30, 20, 10],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector('#chart15'), options6).render();

// chart no 16
var options6 = {
  chart: {
    type: 'bar',
    width: '70%',
    height: 100,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
    },
  },
  colors: ['#259b24'],

  series: [
    {
      data: [100, 85, 75, 55, 35, 25, 15, 5, 15, 25, 35, 55, 75, 85, 90, 100],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector('#chart16'), options6).render();

// simple radialBar chart no 17

// Gradiant Radial Bar

var options = {
  chart: {
    height: 250,
    type: 'radialBar',
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35,
        },
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: 1,
          show: true,
          color: '#888',
          fontSize: '15px',
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '12px',
          show: true,
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  series: [75],
  stroke: {
    lineCap: 'round',
  },
  labels: ['Choice'],
};

var chart = new ApexCharts(document.querySelector('#gradientRadial'), options);

chart.render();

// simple radial bar chart no 18

var options = {
  chart: {
    height: 250,
    type: 'radialBar',
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35,
        },
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: 1,
          show: true,
          color: '#888',
          fontSize: '15px',
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '12px',
          show: true,
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#e6af4b'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  series: [55],
  stroke: {
    lineCap: 'round',
  },
  labels: ['Pending'],
};

var chart = new ApexCharts(document.querySelector('#gradientRadial2'), options);

chart.render();

// simple radial bar chart no 19
var options = {
  chart: {
    height: 250,
    type: 'radialBar',
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35,
        },
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: 1,
          show: true,
          color: '#888',
          fontSize: '15px',
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '12px',
          show: true,
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#e05038'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  series: [12],
  stroke: {
    lineCap: 'round',
  },
  labels: ['Profit'],
};

var chart = new ApexCharts(document.querySelector('#gradientRadial3'), options);

chart.render();

// simple radia bar chart no 20
var options = {
  chart: {
    height: 250,
    type: 'radialBar',
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35,
        },
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: 1,
          show: true,
          color: '#888',
          fontSize: '15px',
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '12px',
          show: true,
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#c0dfd9'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  series: [100],
  stroke: {
    lineCap: 'round',
  },
  labels: ['Revenue'],
};

var chart = new ApexCharts(document.querySelector('#gradientRadial4'), options);

chart.render();

// basic area chart no 21
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1,
  },
  series: [
    {
      name: 'Orders',
      data: [10, 20, 28, 51, 15, 40, 20],
    },
  ],
  colors: ['#e62739'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart21'),
  bAOptions
);

chart.render();

// basic area chart no 22
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1,
  },
  series: [
    {
      name: 'Marketing',
      data: [50, 20, 0, 51, 15, 30, 70],
    },
  ],
  colors: ['#ffeb3b'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart22'),
  bAOptions
);

chart.render();

// basic area chart no 23
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1,
  },
  series: [
    {
      name: 'Earning',
      data: [100, 20, 20, 51, 35, 10, 70],
    },
  ],
  colors: ['#4caf50'],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart23'),
  bAOptions
);

chart.render();

var options = {
  colors: ['#C4B5FD', '#A78BFA'],

  series: [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector('#dashboard-v1-1'), options);
chart.render();

var options = {
  fill: {
    colors: ['#C4B5FD', '#A78BFA', '#DDD6FE', '#EDE9FE', '#A78BFA'],
  },
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 380,
    type: 'pie',
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector('#dashboard-v1-2'), options);
chart.render();

var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
var sparklineData = [30, 40, 20, 50, 40, 80];

var spark1 = {
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true,
    },
  },

  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    opacity: 0.3,
  },
  series: [
    {
      data: randomizeArray(sparklineData),
    },
  ],
  yaxis: {
    min: 0,
  },
  colors: ['#C4B5FD'],
};

var spark1 = new ApexCharts(document.querySelector('#dashboard-v1-3'), spark1);
spark1.render();

var options = {
  colors: ['#8B5CF6'],
  series: [
    {
      name: 'Desktops',
      data: [40, 80, 20, 90, 30, 80, 40],
    },
  ],
  markers: {
    size: 5,
    colors: '#DDD6FE',
  },
  chart: {
    height: 220,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.2,
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

var chart = new ApexCharts(document.querySelector('#dashboard-2-1'), options);
chart.render();

var options = {
  colors: ['#10B981'],
  series: [
    {
      name: 'Net Profit',
      data: [20, 55, 30, 56, 20, 58, 33, 60, 46],
    },
  ],
  chart: {
    type: 'bar',
    height: 150,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '10%',
      borderRadius: 100,
      startingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    show: false,
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector('#chart18'), options);
chart.render();

var options = {
  series: [42, 47, 52, 58, 65],
  chart: {
    height: '230',
    width: '100%',
    type: 'polarArea',
  },

  labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
  fill: {
    opacity: 1,
  },
  stroke: {
    width: 1,
    colors: undefined,
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0,
      },
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      color: '#8B5CF6',
      shadeTo: 'light',
      shadeIntensity: 0.6,
    },
  },
};

var chart = new ApexCharts(
  document.querySelector('#monochrome-chart'),
  options
);
chart.render();

var options = {
  colors: ['#8B5CF6'],
  chart: {
    width: '100%',
    height: 250,
    type: 'area',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 1,
  },
  series: [
    {
      name: 'STOCK ABC',
      data: [
        47,
        45,
        54,
        38,
        56,
        24,
        65,
        31,
        39,
        62,
        35,
        41,
        35,
        93,
        53,
        61,
        27,
        54,
        43,
        19,
        46,
      ],
    },
  ],
  labels: apexChartDataSeries.monthDataSeries1.dates,
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
  legend: {
    horizontalAlign: 'left',
  },
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart9'),
  options
);

chart.render();

var optionsTwo = {
  series: [
    {
      name: 'Series 1',
      data: [10, 80, 15, 71, 18, 80, 100],
    },
    {
      name: 'Series 2',
      data: [80, 12, 75, 45, 84, 15, 74],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
    position: 'bottom',
    offsetX: '20px',
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#4A90E2', '#8e8da2'],
  stroke: {
    width: 0,
    curve: 'smooth',
  },
  markers: {
    size: [4, 4],
  },
  grid: {
    show: true,
    strokeDashArray: 3,
  },
  fill: {
    opacity: 1,
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-09-19T04:30:00.000Z',
      '2018-09-19T05:30:00.000Z',
      '2018-09-19T06:30:00.000Z',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
};

var chart = new ApexCharts(document.querySelector('#analayticTwo'), optionsTwo);
chart.render();

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}
var optionsThree = {
  series: [
    {
      name: 'Mon',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Tue',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Wed',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Thu',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Fri',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Sat',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Sun',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
  ],
  chart: {
    height: 350,
    type: 'heatmap',
    toolbar: {
      show: false,
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  plotOptions: {
    heatmap: {
      radius: 10,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#008FFB'],
  xaxis: {
    categories: [
      '12am',
      '1am',
      '3am',
      '4am',
      '5am',
      '6am',
      '7am',
      '8am',
      '9am',
      '10am',
      '11am',
      '12pm',
      '1pm',
      '2pm',
      '3pm',
      '4pm',
      '5pm',
      '6pm',
      '7pm',
      '8pm',
      '9pm',
      '10pm',
      '11pm',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

var chart = new ApexCharts(
  document.querySelector('#analayticThree'),
  optionsThree
);
chart.render();

var options = {
  colors: ['#F14004', '#8e8da2'],
  series: [
    {
      name: 'Like',
      data: [120, 90, 130, 140, 49, 62, 100, 91, 148],
    },
    {
      name: 'Avg Likes per day',
      data: [120, 120, 110, 110, 35, 90, 130, 80, 100],
    },
  ],
  stroke: {
    width: [4, 3],
    curve: 'straight',
  },
  markers: {
    size: [6, 0],
  },
  legend: {
    show: false,
    position: 'bottom',
    offsetX: '20px',
  },
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

var chart = new ApexCharts(document.querySelector('#analayticFour'), options);
chart.render();

var options = {
  colors: ['#28C76E', '#8e8da2'],
  series: [
    {
      name: 'Comments',
      data: [120, 90, 130, 140, 49, 62, 100, 91, 148],
    },
    {
      name: 'Avg Comments per day',
      data: [120, 120, 110, 110, 35, 90, 130, 80, 100],
    },
  ],
  legend: {
    show: false,
    position: 'bottom',
    offsetX: '20px',
  },
  stroke: {
    width: [4, 3],
    curve: 'straight',
  },
  markers: {
    size: [6, 0],
  },
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

var chart = new ApexCharts(document.querySelector('#analayticFive'), options);
chart.render();
