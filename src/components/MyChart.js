// src/components/MyChart.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = (chartData, timeFrame) => { // Make options a function that takes chartData and timeFrame

  let labelFormat;

  switch (timeFrame) {
    case 'MAX':
      labelFormat = '{value:%Y}'; // Just the year
      break;
    case '1Y':
      labelFormat = '{value:%b \'%y}'; // Short version of month and 'yy
      break;
    case '6M':
      labelFormat = '{value:%b \'%y}'; // Same as 1Y
      break;
    case '1M':
      labelFormat = '{value:%d/%m}'; // dd/mm
      break;
    default:
      labelFormat = '{value:%d.%m.%Y}'; // Default format
  }

  return {

    chart: {
      backgroundColor: null, // no background
      margin: [0, 0, 50, 0] // [top, right, bottom, left]
    },
    title: {
      text: ''
    },
    yAxis: {
      title: {
        text: null,
      },
      lineWidth: 0,
      labels: {
        enabled: false,
      },
      gridLineWidth: 1,
      gridLineColor: '#333355',
      crosshair: {
        dashStyle: 'Dash',
        width: 2,
        color: '#999'
      },
    },
    xAxis: {
      type: 'datetime', // x-axis as dates
      title: null,
      tickPixelInterval: 300,  // experiment with this number
      labels: {
        format: labelFormat,
        style: {
          color: '#FFF', // white labels
        },
      },
      crosshair: {
        dashStyle: 'Dash',
        width: 2,
        color: '#999'  // Dark gray
      },
      lineWidth: 0, // remove x-axis line
      tickWidth: 0,
    },
    legend: {
      enabled: false, // remove the legend
    },
    series: [{
      name: 'Index', // series name
      data: chartData,
      color: '#FFF', // white line
      lineWidth: 3, // thicker line
      marker: {
        enabled: false, // no dots on each data point
      },
    }],
    credits: {
      enabled: false, // This line disables the Highcharts.com label
    },
    tooltip: {
      useHTML: true, // Allows the use of HTML in the tooltip
      formatter: function () {
        // The 'this' keyword refers to the data object for the point being hovered over
        const { point } = this;
        return `
          <div style="text-align: center;">
            <div style="font-size: 1.3em;"><strong>${point.y}</strong></div>
            <div>${Highcharts.dateFormat('%d %b \'%y', point.x)}</div>
          </div>
        `;
      }
    },
  };
}

function MyChart({ chartData, timeFrame }) {
  // Use chartData prop
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options(chartData, timeFrame)}  // Pass chartData and timeFrame to options
    />
  );
}

export default MyChart;
