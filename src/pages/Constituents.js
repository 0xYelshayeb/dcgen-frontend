// src/pages/Constituents.js
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/constituents.css';
import IndexName from '../components/IndexName';

const Constituents = () => {

  const [data, setData] = useState([]);  // Added state to store data

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.dcgen.finance/constituents`);
          setData(response.data);  // Set state with fetched data
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
    };
      
    fetchData();
  }, []);

  const schema = {
    "@context": "https://dcgen.finance/ethereum-constituents",
    "@type": "WebPage",
    "name": "Ethereum Index Constituents",
    "description": "A Website showing all the constituents of the DCGen Ethereum Ecosystem Index",
  };

  return (
    <Layout title="Eth index Constituents" name="Ethereum ecosystem Index Constituents" description="This page shows the constituents of the ethereum ecosystem index" schema={schema}>
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
                <td>{item.Name}</td>
                <td class="hide-on-extra-small">{item.Symbol}</td>
                <td class="hide-on-small">${parseFloat(item.Price).toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })}</td>
                <td class="hide-on-medium">${parseFloat(item["Market cap"]).toLocaleString('en-US')}</td>
                <td>{parseFloat(item["Allocation %"]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} %</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  
    </Layout>
  );
};

export default Constituents;
