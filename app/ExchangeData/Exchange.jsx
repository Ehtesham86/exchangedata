import { useEffect, useState } from "react";
import Image7 from "/Picture7.png"
import Image8 from "/Picture8.png"
import Image9 from "/Picture14.png"
import Image10 from "/Picture16.png"
import Image11 from "/Picture17.png"
import Image12 from "/Picture12.png"
import Image13 from "/Picture15.png"
import flag1 from "/Picture18.png"
import flag2 from "/Picture19.png"
import flag3 from "/Picture20.png"

const ExchangeData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://exhcangedata.vercel.app/MarginData") // Simple GET request without body
      .then((res) => res.json())
      .then((response) => {
        if (response.marginDataCRUDData) {
          setData(response.marginDataCRUDData);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div id="data" className="bg-gray-100 h-auto py-10">
      {/* Exchange Section */}
      <div className="text-center mb-8 ">
        <h2 className="text-3xl md:text-3xl mt-10 font-bold">교환 통합</h2>
        <p className="text-gray-500 mt-10 text-lg md:text-base">
          Binance, Huobi, Okex, BtcTurk, Bitexen 등 42개 거래소의 가격을 모니터링하세요.
        </p>
      </div>

      {/* Icons Section */}
      <div className="lg:flex hidden flex-wrap justify-center gap-4 mb-6">
        <div className="w-20 h-20 md:w-36 md:h-38 ">
        <img src={Image7} alt="Bitcoin" className=" w-full h-full" />
        </div>
        <div className="w-20 h-20 flex flex-wrap justify-center items-center mt-5 md:w-28 md:h-20 ">
        <img src={Image8} alt="Ethereum" className="" />
        </div>
        <div className="w-20 h-20 md:w-32 md:h-38 flex flex-wrap justify-center items-center ">
        <img src={Image12} alt="Ethereum" className="w-20 h-20 md:w-32 md:h-32" />
        </div>
        <div className="w-20 h-20 md:w-32 relative md:h-38 flex flex-wrap justify-center items-center ">
        <img src={Image12} alt="Ethereum" className="w-20 h-20 md:w-32 md:h-32" />
        <img src={Image9} alt="USDT" className="w-10 absolute right-1.5 bottom-7 h-10 md:w-12 md:h-12" />
        </div>
        <div className="w-20 h-20 md:w-32 relative md:h-38 flex flex-wrap justify-center items-center ">
        <img src={Image12} alt="Ethereum" className="w-20 h-20 md:w-32 md:h-32" />
        <img src={Image13} alt="USDT" className="w-10 absolute right-1.5 bottom-7 h-10 md:w-12 md:h-12" />
        </div>
        <div className="w-20 h-20 md:w-32 relative md:h-38 flex flex-wrap justify-center items-center ">
        <img src={Image12} alt="Ethereum" className="w-20 h-20 md:w-32 md:h-32" />
        <img src={Image10} alt="USDT" className="w-10 absolute right-1.5 bottom-7 h-10 md:w-12 md:h-12" />
        </div>
        <div className="w-20 h-20 md:w-32 relative md:h-38 flex flex-wrap justify-center items-center ">
        <img src={Image12} alt="Ethereum" className="w-20 h-20 md:w-32 md:h-32" />
        <img src={Image11} alt="USDT" className="w-10 absolute right-1.5 bottom-7 h-10 md:w-12 md:h-12" />
        </div>
        
      </div>
      {/* Table Section (Responsive Scroll) */}
      <div className="bg-gray-900 text-white lg:p-20 p-2  shadow-lg overflow-x-auto">
      <h3 className="text-center text-lg md:text-xl font-bold mb-4">마진 DATA</h3>
      <table className="w-full min-w-[600px] text-left">
      <thead>
        <tr className="border-b border-gray-700 text-sm md:text-base">
          <th className="p-2 text-lg lg:text-2xl pl-12">국가</th>
          <th className="p-2 text-lg lg:text-2xl">기준가</th>
          <th className="p-2 text-lg lg:text-2xl">할인율</th>
          <th className="p-2 text-lg lg:text-2xl">공급가</th>
          <th className="p-2 text-lg lg:text-2xl">프리미엄</th>
          <th className="p-2 text-lg lg:text-2xl">판매수익</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className="border-b border-gray-700 text-gray-200 text-sm md:text-base"
          >
            <td className="p-3 gap-2 bg-gray-600 flex items-center">
              <img src={row.flag} alt={row.country} className="w-10 h-10 md:w-14 md:h-9" />
              <span className="mr-2">{row.country}</span>
            </td>
            <td className="p-3 bg-gray-600">{row.basePrice}</td>
            <td className="p-3 bg-gray-600">{row.discountRate}%</td>
            <td className="p-3 bg-gray-600">{row.supplyPrice}</td>
            <td className="p-3 bg-gray-600 text-green-400">{row.premium || "-"}</td>
            <td className="p-3 bg-gray-600 text-green-400">{row.salesProfit}%</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </div>
  );
};

export default ExchangeData;
