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
      text: '', // remove "Values"
    },
    labels: {
      style: {
        color: '#FFF', // white labels
      },
    },
    crosshair: {
      dashStyle: 'dash', // horizontal line with gaps
    },
    gridLineWidth: 1, // subtle line for y-axis
    gridLineColor: '#555', // color of the y-axis line
    lineWidth: 0, // remove y-axis line
  },
  xAxis: {
    type: 'datetime', // x-axis as dates
    title: null,
    labels: {
      style: {
        color: '#FFF', // white labels
      },
    },
    crosshair: {
      dashStyle: 'Solid', // solid vertical line
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
