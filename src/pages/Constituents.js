// src/pages/Constituents.js
import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import '../styles/constituents.css';

const Constituents = () => {
  const data = [
    { name: 'Bitcoin', symbol: 'BTC', price: '42,000', marketCap: "5000000", indexPercent: "30%", change: '+2.5%' },
    { name: 'Ethereum', symbol: 'ETH', price: '2,800', marketCap: "200000", indexPercent: "70%", change: '+1.2%' },
    { name: 'Bitcoin', symbol: 'BTC', price: '42,000', marketCap: "5000000", indexPercent: "30%", change: '+2.5%' },
    { name: 'Ethereum', symbol: 'ETH', price: '2,800', marketCap: "200000", indexPercent: "70%", change: '+1.2%' },
    { name: 'Bitcoin', symbol: 'BTC', price: '42,000', marketCap: "5000000", indexPercent: "30%", change: '+2.5%' },
    { name: 'Ethereum', symbol: 'ETH', price: '2,800', marketCap: "200000", indexPercent: "70%", change: '+1.2%' },
    { name: 'Bitcoin', symbol: 'BTC', price: '42,000', marketCap: "5000000", indexPercent: "30%", change: '+2.5%' },
    { name: 'Ethereum', symbol: 'ETH', price: '2,800', marketCap: "200000", indexPercent: "70%", change: '+1.2%' },
    { name: 'Bitcoin', symbol: 'BTC', price: '42,000', marketCap: "5000000", indexPercent: "30%", change: '+2.5%' },
    { name: 'Ethereum', symbol: 'ETH', price: '2,800', marketCap: "200000", indexPercent: "70%", change: '+1.2%' },
    { name: 'Ethereum', symbol: 'ETH', price: '2,800', marketCap: "200000", indexPercent: "70%", change: '+1.2%' },
    { name: 'Bitcoin', symbol: 'BTC', price: '42,000', marketCap: "5000000", indexPercent: "30%", change: '+2.5%' },
    { name: 'Ethereum', symbol: 'ETH', price: '2,800', marketCap: "200000", indexPercent: "70%", change: '+1.2%' },
    { name: 'Bitcoin', symbol: 'BTC', price: '42,000', marketCap: "5000000", indexPercent: "30%", change: '+2.5%' },
    { name: 'Ethereum', symbol: 'ETH', price: '2,800', marketCap: "200000", indexPercent: "70%", change: '+1.2%' },
    // Add more data here...
  ];

  return (
    <div className="app">
      <Header />
      <div className="constituents-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>Index Percentage</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>{item.price}</td>
                <td>{item.marketCap}</td>
                <td>{item.indexPercent}</td>
                <td>{item.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  
      <Footer />
    </div>
  );
};

export default Constituents;
