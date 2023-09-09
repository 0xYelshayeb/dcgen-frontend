// src/components/MyChart.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import AccessibilityModule from 'highcharts/modules/accessibility';

AccessibilityModule(Highcharts);

const options = (chartData, timeFrame) => { // Make options a function that takes chartData and timeFrame

  let labelFormat;

  const screenWidth = window.innerWidth;
  let adjustedLineWidth = 3; // Default line width

  if (screenWidth <= 834) { // For screens narrower than 768px
    adjustedLineWidth = 2; // Make the line thinner
  }

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
    case '3M':
      labelFormat = '{value:%b \'%y}'; // Same as 1Y
      break;
    default:
      labelFormat = '{value:%d.%m.%Y}'; // Default format
  }

  return {

    accessibility: {
      enabled: true
    },
    chart: {
      backgroundColor: null, // no background
      margin: [0, 0, 50, 0], // [top, right, bottom, left]
      ariaLabel: 'Chart containing Ethereum Index Data',
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
        format: labelFormat,
        style: {
          color: '#FFF', // white labels
        },
      },
      tickPositioner: function(min, max) {
        const positions = [];
        const tickCount = 5; // You can change this to 4 or 6 if you prefer
        const interval = (max - min) / (tickCount - 1);
    
        for (let i = 0; i < tickCount; i++) {
          positions.push(min + (interval * i));
        }
    
        // Sort positions so they appear in ascending order on the axis
        positions.sort((a, b) => a - b);
    
        return positions;
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
      lineWidth: adjustedLineWidth, // thicker line
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
