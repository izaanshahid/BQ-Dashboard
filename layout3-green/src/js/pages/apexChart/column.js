$(document).ready(function(){
  var options = {
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'	
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#basicColumnChart"),
    options
);

chart.render();

// columnDataLabel
var options = {
  chart: {
      height: 350,
      type: 'bar',
  },
  plotOptions: {
      bar: {
          dataLabels: {
              position: 'top', // top, center, bottom
          },
      }
  },
  dataLabels: {
      enabled: true,
      formatter: function (val) {
          return val + "%";
      },
      offsetY: -20,
      style: {
          fontSize: '12px',
          colors: ["#304758"]
      }
  },
  series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
  xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      position: 'top',
      labels: {
          offsetY: -18,

      },
      axisBorder: {
          show: false
      },
      axisTicks: {
          show: false
      },
      crosshairs: {
          fill: {
              type: 'gradient',
              gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
              }
          }
      },
      tooltip: {
          enabled: true,
          offsetY: -35,

      }
  },
  fill: {
      gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
      },
  },
  yaxis: {
      axisBorder: {
          show: false
      },
      axisTicks: {
          show: false,
      },
      labels: {
          show: false,
          formatter: function (val) {
              return val + "%";
          }
      }

  },
 
}

var chart = new ApexCharts(
  document.querySelector("#columnDataLabel"),
  options
);

chart.render();

// stackedColumn
var options = {
  chart: {
      height: 350,
      type: 'bar',
      stacked: true,
      toolbar: {
          show: true
      },
      zoom: {
          enabled: true
      }
  },
  responsive: [{
      breakpoint: 480,
      options: {
          legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
          }
      }
  }],
  plotOptions: {
      bar: {
          horizontal: false,
      },
  },
  series: [{
      name: 'PRODUCT A',
      data: [44, 55, 41, 67, 22, 43]
  },{
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27]
  },{
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14]
  },{
      name: 'PRODUCT D',
      data: [21, 7, 25, 13, 22, 8]
  }],
  xaxis: {
      type: 'datetime',
      categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
  },
  legend: {
      position: 'right',
      offsetY: 40
  },
  fill: {
      opacity: 1
  },
}

var chart = new ApexCharts(
  document.querySelector("#stackedColumn"),
  options
);

chart.render();


//negetiveColumn
var options = {
  chart: {
      height: 350,
      type: 'bar',
  },
  plotOptions: {
      bar: {
          colors: {
              ranges: [
                  {
                      from: -100,
                      to: -46,
                      color: '#F15B46'
                  }, {
                      from: -45,
                      to: 0,
                      color: '#FEB019'
                  }
              ]
          },
          columnWidth: '80%',
      }
  },
  dataLabels: {
      enabled: false,
  },
  series: [{
      name: 'Cash Flow',
      data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
          5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
          48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
      ]
  }],

  yaxis: {
      title: {
          text: 'Growth',
      },
      labels: {
          formatter: function (y) {
              return y.toFixed(0) + "%";
          }
      }

  },
  xaxis: {
      // TODO: uncomment below and fix the error
      //type: 'datetime',
      categories: [
          '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
          '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
          '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
          '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
          '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
          '2013-07-01', '2013-08-01', '2013-09-01'
      ],
      labels: {
          rotate: -90
      }
  },
  tooltip: {

  }
}

var chart = new ApexCharts(
  document.querySelector("#negetiveColumn"),
  options
);

chart.render();
// distributedColumnChart 

var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
var options = {
    chart: {
        height: 350,
        type: 'bar',
        events: {
            click: function(chart, w, e) {
                console.log(chart, w, e )
            }
        },
    },
    colors: colors,
    plotOptions: {
        bar: {
            columnWidth: '45%',
            distributed: true
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
    }],
    xaxis: {
        categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
        labels: {
            style: {
                colors: colors,
                fontSize: '14px'
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#distributedColumnChart"),
    options
);

chart.render();

});