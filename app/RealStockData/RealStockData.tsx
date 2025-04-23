import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const StockChart = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=YOUR_API_KEY`
        );
        
        const timeSeries = response.data["Time Series (Daily)"];
        const formattedData = Object.keys(timeSeries).map((date) => ({
          date,
          price: parseFloat(timeSeries[date]["4. close"]),
        })).reverse(); // Reversing to get oldest data first

        setStockData(formattedData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div className="w-full h-43 lg:h-90 2xl:h-90   p-3 border  bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Stock Market Data (AAPL)</h2>
      <ResponsiveContainer width="90%" height="90%" className="pb-5">
        <LineChart data={stockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
