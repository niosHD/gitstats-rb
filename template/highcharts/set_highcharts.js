function createColumnChart(element){
  $(element.target).highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: element.label
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: element.categories,
      title: {
        text: null
      }
    },
    yAxis: [{
      title: {
        text: element.label_y_axis,
      }
    },{
      title: {
        text: element.label_y2_axis,
      },
      opposite: true
    }],
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    series: element.series
  });
}

function createZoomableAreaChart(element){
  $(element.target).highcharts({
    chart: {
      type: "areaspline",
      zoomType: "x"
    },
    title: {
      text: element.label
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: element.categories,
      tickInterval: parseInt(element.categories.length / 10),
      labels: {
        rotation: -45,
        y: 35
      }
    },
    yAxis: {
      title: {
        text: ""
      }
    },
    legend: element.legend,
    plotOptions: {
      areaspline: {
        fillOpacity: 0.2
      },
      series: {
        lineWidth: 1,
        marker: {
          enabled: false
        }
      }
    },
    series: element.series
  });
}

function createAreaChart(element){
  $(element.target).highcharts({
    chart: {
      type: 'areaspline'
    },
    title: {
      text: element.label
    },
    credits: {
      enabled: false
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 50,
      y: 50,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF'
    },
    xAxis: {
      categories: element.categories,
      tickInterval: parseInt(element.categories.length / 12),
      title: {
        text: null
      },
      labels: {
        rotation: -45,
        y: 35
      }
    },
    yAxis: [{
      title: {
        text: element.label_y_axis,
      }
    },{
      title: {
        text: element.label_y2_axis,
      },
      opposite: true
    }],
    tooltip: {
      shared: true,
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.2
      }
    },
    series: element.series
  });
}

function createPieChart(element){
  $(element.target).highcharts({
    chart: {
      type: "pie"
    },
    title: {
      text: element.label
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
        text: ""
      }
    },
    series: element.series
  });
}

function createBarChart(element){
  $(element.target).highcharts({
    chart: {
      type: "bar"
    },
    title: {
      text: element.label
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: element.categories,
      title: {
        text: element.label_y_axis
      }
    },
    yAxis: {
      title: {
        text: element.label_x_axis
      }
    },
    series: element.series
  });
}

function createHeatMap(element){
  $(element.target).highcharts({
    chart: {
      type: 'heatmap'
    },
    title: {
      text: element.label
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: element.categories_x,
      title: element.label_x
    },
    yAxis: {
      categories: element.categories_y,
      title: element.label_y
    },
    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
    },
    series: [{
      name: element.series_name,
      borderWidth: 1,
      data: element.series_data,
      dataLabels: {
        enabled: true,
        color: 'black',
        style: {
          textShadow: 'none',
          HcTextStroke: null
        }
      }
    }]
  });
}