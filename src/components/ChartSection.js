import React, { useState, useEffect } from "react";
import axios from 'axios';
import MyChart from "./MyChart";

const Button = ({ text, isSelected, onClick }) => (
    <button onClick={onClick} className={`timeframe-button ${isSelected ? 'selected' : ''}`}>
      {text}
    </button>
  );

const ChartSection = () => {

  const [timeFrame, setTimeFrame] = useState('MAX'); 
  const [chartData, setChartData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
          try {
            console.log("making request")
            const response = await axios.get(`https://dcgen-backend-12f54977f851.herokuapp.com/timeSeries?timeframe=${timeFrame}`);
            setChartData(response.data);
          } catch (error) {
            console.error("Failed to fetch data", error);
          }
      };
      
      fetchData();
  }, [timeFrame]);
  
    const firstValue = chartData.length > 0 ? chartData[0][1] : 0;
    const lastValue = chartData.length > 0 ? chartData[chartData.length - 1][1] : 0;  
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