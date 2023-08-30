// src/components/MyChart.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = (chartData) => ({  // Make options a function that takes chartData
  chart: {
    backgroundColor: null, // no background
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
    labels: {
      format: '{value:%d.%m.%Y}',
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
});

function MyChart({ chartData }) { // Use chartData prop
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options(chartData)}  // Pass chartData to options
    />
  );
}

export default MyChart;
