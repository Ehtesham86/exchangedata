import React from "react";
import Account from "/tab.jpg"
import Focused from "/tab2.jpg"
import Security from "/tab3.jpg" 
import Mezile from "/tab4.jpg"
import Strong from "/tab5.jpg"
import Clude from "/tab6.jpg"
import { motion } from "framer-motion";

const stockData = [
  {
    imgSrc: Account,
    alt: "Stock Market",
    title: "투명성",
    description: "실시간시간으로  시세 및 차액 비율 그리고 수익률이 공개되기 때문에 투명할 수 밖에 없는 시스템 입니다.",
  },
  {
    imgSrc: Focused,
    alt: "Stock Market",
    title: "자금의안전성(P2P안전거래)",
    description: "코인매입은 글로벌 1위 P2P거래 플랫폼 Paxful에서 코인 에스크로를 통해 거래함에 타인에게 코인자금을 절대 송금 할 일없습니다. WaveEX 재정거래는시스템은 본인에게서 자금이 벗어나지 않습니다.",
  },
  {
    imgSrc: Security,
    alt: "Stock Market",
    title: "제로 리스크",
    description: "재정거래(일명:차익거래)는 코인을 낮은 곳에서 가격에 매입하여 높은 시세가 위치한곳에 판매를 하는 것으로 거의 투입금액에 대해 무위험에 가깝습니다.",
  },
  {
    imgSrc: Mezile,
    alt: "Stock Market",
    title: "고급의",
    description: "WaveEX에서 글로벌OTC 시장에서 기관물량 및 기업물량 그리고 개인 고래들의 물량을 할인된 가격에 매수를 함에따라 중앙화 거래시장의 가격을 무너트리지 않는것을 목적으로하고 철저한 AML검증은 필수로 한 암호화폐입니다.",
  },
  {
    imgSrc: Strong,
    alt: "Stock Market",
    title: "단순성",
    description: "회원이 필요한 만큼 코인을 구매세요. 그리고 WaveEX 와 안전거래를 통해 Swap하세요. 그리고 코인을 매도한 후 수익을 얻으면 됩니다. 얻은 수익에서 일정부분은 WaveEX와 쉐어 해야하는것을 잊지 마시기 바랍니다.",
  },
  {
    imgSrc: Clude,
    alt: "Stock Market",
    title: "차세대 플랫폼",
    description: "회원이 필요한 만큼 코인을 구매세요. 그리고 WaveEX 와 안전거래를 통해 Swap하세요. 그리고 코인을 매도한 후 수익을 얻으면 됩니다. 얻은 수익에서 일정부분은 WaveEX와 쉐어 해야하는것을 잊지 마시기 바랍니다.  ",
  },
];

const StockLoanIntro = () => {
  return (
    <div id="Community" className="px-4 md:px-10  py-10 lg:px-14 xl:px-30 2xl:px-52">
      <h2 className="text-2xl lg:text-5xl text-center  font-bold mb-4 text-gray-500">왜 <span className="text-purple-600">WaveEX</span>  아비트라지인가
      </h2>
      <p className="text-gray-700  lg:text-2xl text-xl mb-6 text-center">
      매우 낮은 위험 수익률로 고빈도 거래를 하는 가장 간단한 형태

      </p>
      <motion.div
      className="grid grid-cols-1 md:grid-cols-2 my-10 lg:grid-cols-3 gap-7"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {stockData.map((item, index) => (
        <motion.div
          key={index}
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-[100px] h-[100px]">
            <img src={item.imgSrc} alt={item.alt} className="w-full object-cover mb-3" />
          </div>
          <p className="font-bold text-2xl">{item.title}</p>
          <p className="text-medium text-gray-600 mb-3">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
    </div>
  );
};

export default StockLoanIntro;
