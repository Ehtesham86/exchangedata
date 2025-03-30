import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-2 rounded">
        <p className="text-sm">{`Price: $${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const CryptoChart = ({ symbol, color }) => {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState(1); // Default to 24H

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=${timeframe}`
        );
        const formattedData = response.data.prices.map((item) => ({
          time: new Date(item[0]).toLocaleDateString(), // Show date instead of time
          price: item[1],
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [symbol, timeframe]);

  return (
    <div id="ProfitBoard" className="bg-gray-800 w-full h-[450px] text-white p-2 lg:p-4 rounded-lg">
      <h2 className="text-sm font-semibold text-end text-amber-300">{symbol.toUpperCase()} / USDT</h2>
      <div className="flex justify-end gap-2 my-2">
        <button
          onClick={() => setTimeframe(1)}
          className={`rounded-md ${timeframe === 1 ? " text-amber-300 text-sm" : " text-white text-sm"}`}
        >
          24H
        </button>
        <button
          onClick={() => setTimeframe(7)}
          className={`rounded-md ${timeframe === 7 ? " text-amber-300 text-sm" : " text-white text-sm"}`}
        >
          Week
        </button>
        <button
          onClick={() => setTimeframe(30)}
          className={`rounded-md ${timeframe === 30 ? " text-amber-300 text-sm" : " text-white text-sm"}`}
        >
          Month
        </button>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis domain={["auto", "auto"]} />
          {/* ✅ Custom Tooltip with Vertical Line */}
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#f3ba2f", strokeWidth: 1 }} />
          <Line type="monotone" dataKey="price" stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const CryptoDashboard = () => {
  return (
    <div className="lg:flex block gap-2 w-full bg-gray-800 p-2 lg:p-4">
      <CryptoChart symbol="bitcoin" color="#f3ba2f" />
      <CryptoChart symbol="ethereum" color="#f3ba2f" />
      <CryptoChart symbol="binancecoin" color="#f3ba2f" />
    </div>
  );
};

export default CryptoDashboard;
