import React from "react";
import Certificate from "/Picture1.png"
import { motion } from "framer-motion";


import Image2 from "/Picture2-removebg-preview.png"
import image3 from "/Picture3-removebg-preview.png"
import image4 from "/Picture4-removebg-preview.png"
import image5 from "/Picture5-removebg-preview.png"
import image6 from "/Picture6-removebg-preview.png"
const steps = [
 
  {
    title: "코인매수(거래소)",
    description: "원하는거래소에서 코인매수",
    image: Image2,
  },
  {
    title: "P2P거래소 매도등록",
    description: "글로벌 최대P2P거래소에 매도등록 ( 안전거래 - 개인간 코인 에스크로)",
    image: image3,
  },
  {
    title: "WaveEX와 코인스왑",
    description: "사기방지 안전거래 에스크로 거래( 구매 코인과 판매 코인 스왑 )",
    image: image4,
  },
  {
    title: "코인판매",
    description: "프리미엄 발생 거래소에 실시간 판매( 코인 판매 후 수익인증 사진제출 )",
    image: image5,
  },
  {
    title: "차익거래수익정산",
    description: "스왑 한 코인을 거래소에 판매( 차익거래에 대한 수익발생)",
    image: image6,
  },
];

const FundingSection = () => {
  return (
    <div id="PROCEDURE" className="bg-gray-100 flex justify-center items-center py-10">
      {/* AML Certification Section */}
      <div className="px-4 md:px-10 py-10 lg:px-14 xl:px-30 2xl:px-52">
      <div className=" bg-white  p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={Certificate}
            alt="Certificate"
            className="w-32 md:w-md "
          />
          <div className="mt-10">
            <h2 className="xl:text-3xl text-xl  font-bold text-gray-800">
              AML CERTIFICATION CRYPTO
            </h2>
            <p className="lg:text-lg text-md text-gray-600">
              (자금세탁방지, Anti-Money Laundering)
            </p>
            <p className="mt-2 lg:text-lg text-md text-gray-700">
              AML 인증을 통해 불법적으로 취득한 자금(예: 마약 거래, 테러 자금, 탈세 자금
              등)이 합법적인 금융 시스템으로 유입되는 것을 방지하고 있기 때문에 White
              cryptocurrency 입니다.
            </p>
            <p className="mt-2 lg:text-lg text-md text-gray-700 font-semibold">
              플랫폼의 신뢰도, 보안성, 글로벌 확장성을 확보하는 필수적인 요소입니다.
            </p>
          </div>
        </div>
      </div>

      {/* Procedure Section */}
      <div className="text-center mt-10">
        <h3 className="lg:text-3xl text-lg font-bold  text-gray-800">PROCEDURE</h3>
      </div>
      <div className="flex justify-center items-center w-full">
      <motion.div
        className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col space-y-5 items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mt-2 text-xl text-gray-800 font-semibold">
              {step.title}
            </h4>
            <div className="w-[200px] h-[200px]">
              <img src={step.image} alt={step.title} className="w-full h-lg" />
            </div>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
      </div>
      
     
    </div>
  );
};

export default FundingSection;
