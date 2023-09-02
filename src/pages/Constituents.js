// src/pages/Constituents.js
import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import '../styles/constituents.css';
import IndexName from '../components/IndexName';

const Constituents = () => {
  const data = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,000', marketCap: "$5,000,000", indexPercent: "30 %"},
    { name: 'Ethereum', symbol: 'ETH', price: '$2,800', marketCap: "$200,000", indexPercent: "70 %"},
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,000', marketCap: "$5,000,000", indexPercent: "30 %"},
    { name: 'Ethereum', symbol: 'ETH', price: '$2,800', marketCap: "$200,000", indexPercent: "70 %"},
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,000', marketCap: "$5,000,000", indexPercent: "30 %"},
    { name: 'Ethereum', symbol: 'ETH', price: '$2,800', marketCap: "$200,000", indexPercent: "70 %"},
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,000', marketCap: "$5,000,000", indexPercent: "30 %"},
    { name: 'Ethereum', symbol: 'ETH', price: '$2,800', marketCap: "$200,000", indexPercent: "70 %"},
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,000', marketCap: "$5,000,000", indexPercent: "30 %"},
    { name: 'Ethereum', symbol: 'ETH', price: '$2,800', marketCap: "$200,000", indexPercent: "70 %"},
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,000', marketCap: "$5,000,000", indexPercent: "30 %"},
    { name: 'Ethereum', symbol: 'ETH', price: '$2,800', marketCap: "$200,000", indexPercent: "70 %"},
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,000', marketCap: "$5,000,000", indexPercent: "30 %"},
    { name: 'Ethereum', symbol: 'ETH', price: '$2,800', marketCap: "$200,000", indexPercent: "70 %"},
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,000', marketCap: "$5,000,000", indexPercent: "30 %"},
    { name: 'Ethereum', symbol: 'ETH', price: '$2,800', marketCap: "$200,000", indexPercent: "70 %"},

    // Add more data here...
  ];

  return (
    <div className="app">
      <Header />
      <IndexName />
      <h3>Index Constituents</h3>
      <div className="constituents-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price $</th>
              <th>Market Cap $</th>
              <th>Allocation %</th>
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
