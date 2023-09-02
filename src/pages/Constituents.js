// src/pages/Constituents.js
import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="back-home">
        <Link style={{ color: 'black' }} to="/ethereum-index" className="back-container">
            <i className="fas fa-angle-left"></i>
            <p>Back</p>
        </Link>
      </div>
      <IndexName />
      <h3>Index Constituents</h3>
      <div className="constituents-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th class="hide-on-extra-small">Symbol</th>
              <th class="hide-on-small">Price $</th>
              <th class="hide-on-medium">Market Cap $</th>
              <th>Allocation %</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td class="hide-on-extra-small">{item.symbol}</td>
                <td class="hide-on-small">{item.price}</td>
                <td class="hide-on-medium">{item.marketCap}</td>
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
