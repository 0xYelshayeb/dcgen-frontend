import React, { useState, useEffect } from "react";
import maxChartData from '../data/max-chartData';
import oneMonthChartData from '../data/1m-chartData';
import sixMonthsChartData from '../data/6m-chartData';
import oneYearChartData from '../data/1y-chartData';
import MyChart from "./MyChart";

const Button = ({ text, isSelected, onClick }) => (
    <button onClick={onClick} className={`timeframe-button ${isSelected ? 'selected' : ''}`}>
      {text}
    </button>
  );

const ChartSection = () => {

    const [timeFrame, setTimeFrame] = useState('MAX'); // Default timeframe is 'MAX'
    const [chartData, setChartData] = useState([...maxChartData]); // to avoid passing a reference we pass in the array
  
    useEffect(() => {
      switch(timeFrame) {
        case '1M':
          setChartData([...oneMonthChartData]);
          break;
        case '6M':
          setChartData([...sixMonthsChartData]);
          break;
        case '1Y':
          setChartData([...oneYearChartData]);
          break;
        case 'MAX':
          setChartData([...maxChartData]);
          break;
        default:
          setChartData([...maxChartData]);
          break;
      }
    }, [timeFrame]);
  
    const firstValue = chartData[0][1];
    const lastValue = chartData[chartData.length - 1][1];
    const difference = lastValue - firstValue;
    const percentChange = (difference / firstValue) * 100;
    const changeClass = percentChange >= 0 ? 'positive-percent' : 'negative-percent'; 

    return (
        <main className="container">
          <section className="content">
          <h1 className="overview">Overview</h1>
          <hr className="horizontal-line" />
          <div className="info-container">
            <div>
              <h2 className="index-value">{lastValue.toFixed(2)}</h2>
              <p className="index-level">Index Level</p>
            </div>
            <div>
              <h2 className={`return-value ${changeClass}`}>{percentChange.toFixed(2)}%</h2>
              <p className="return">Overall Return</p>
            </div>
          </div>
        </section>
          <section className="chart">
            <div className="timeframe-buttons">
              <Button text="1M" isSelected={timeFrame === '1M'} onClick={() => setTimeFrame('1M')} />
              <Button text="6M" isSelected={timeFrame === '6M'} onClick={() => setTimeFrame('6M')} />
              <Button text="1Y" isSelected={timeFrame === '1Y'} onClick={() => setTimeFrame('1Y')} />
              <Button text="MAX" isSelected={timeFrame === 'MAX'} onClick={() => setTimeFrame('MAX')} />
            </div>
            <MyChart chartData={chartData} />
          </section>
        </main>
    )
}

export default ChartSection;