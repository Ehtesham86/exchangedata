import React from "react";

const ArbitrageStats = () => {
  const handleTelegramClick = () => {
    window.open("https://t.me/wave_ex_arbitrage_bot");
  };
  return (
    <div id="Community" className="bg-gray-100 flex justify-center w-full items-center h-auto">
      <div className="grid grid-cols-12 px-4 md:px-10 py-10 lg:px-14 xl:px-30 2xl:px-52">
        <div className="col-span-12 lg:col-span-5 gap-6 space-y-7">
          <div  className="grid grid-cols-12 justify-items-center  lg:justify-items-end space-y-4">
          <div className="col-span-12 lg:col-span-6 py-4 lg:h-[180px] h-[250px] w-[250px] lg:w-[200px] ">
            <div className="bg-white flex justify-center items-center w-full h-full  shadow rounded-lg">
<div className="p-6 space-y-5 text-center">
<p className="text-teal-500 text-2xl font-bold">1524</p>
<p className="text-gray-600 text-center">거래껀</p>
</div>
         
        </div>
            </div>
            <div className="col-span-12 lg:col-span-6 py-4 lg:h-[180px] h-[250px] w-[250px] lg:w-[200px]">
            <div className="bg-white flex justify-center items-center w-full h-full  shadow rounded-lg">
<div className="p-6 space-y-5 text-center">
<p className="text-teal-500 text-2xl font-bold">568</p>
<p className="text-gray-600 text-center">글로벌회원수</p>
</div>
         
        </div>
            </div>
         </div>
         <div  className="grid grid-cols-12 justify-items-center  lg:justify-items-start">
          <div className="col-span-12 lg:col-span-6 py-4   lg:h-[180px] h-[250px] w-[250px] lg:w-[200px]">
            <div className="bg-white flex justify-center items-center w-full h-full  shadow rounded-lg">
<div className="p-6 space-y-5 text-center">
<p className="text-teal-500 text-2xl font-bold">$9,821,332</p>
<p className="text-gray-600 text-center">거래금액</p>
</div>
         
        </div>
            </div>
            <div className="col-span-12 lg:col-span-6 py-4 lg:h-[180px] h-[250px] w-[250px] lg:w-[200px]">
            <div className="bg-white flex justify-center items-center w-full h-full  shadow rounded-lg">
<div className="p-6 space-y-5 text-center">
<p className="text-teal-500 text-2xl font-bold">5개국</p>
<p className="text-gray-600 text-center">연동네트워크</p>
</div>
         
        </div>
            </div>
         
       
         </div>
         <div  className="grid grid-cols-12 justify-items-center space-y-4 lg:justify-items-center ">
          
            <div className="col-span-12 lg:col-span-6 ml-0 lg:ml-32   lg:h-[180px] h-[250px] w-[250px] lg:w-[200px]">
            <div className="bg-white flex justify-center items-center w-full h-full  shadow rounded-lg">
<div className="p-6 space-y-5 text-center">
<p className="text-teal-500 text-2xl font-bold">80~140%</p>
<p className="text-gray-600 text-center">월평균수익</p>
</div>
         
        </div>
            </div>
         
       
         </div>
       
        </div> 
 
  <div className="col-span-12 lg:col-span-7">
    <div className="flex justify-center text-center items-center">
      <div className="my-6 max-w-xl">
      <h1 className="text-3xl font-bold ">글로벌 아비트리지 (차익거래)
      </h1>
      <p className="my-3">전문가와 재력가들만 하던 차익거래를 누구나 쉽고 편리하
      게 손실률 0%의 고수익을 올릴 수 있는 기회에 참여하세요</p> 
      </div>
    </div>
   
        <div className="flex flex-wrap justify-center gap-4  mb-12">
        {[
          "복잡하지 않습니다",
          "누구나",
          "손실률 Zero",
          "빠른수익",
          "언제, 어디서나",
          "월평균수익 120%",
          "고수익",
          "1:1 전문 상담원",
          "즉시원금회수 및 수익",
          "글로벌 P2P EX 거래",
          "내 자본 직접 직접운용",
          "불법성 전혀없음"
        ].map((text, index) => (
          <div key={index} className="bg-blue-500 border text-white px-6 mb-5  py-4 rounded-lg shadow-md text-lg">
            {text}
          </div>
        ))}
      </div>
      <div className="text-center">
        <button onClick={handleTelegramClick} className=" bg-purple-700 text-white px-6 py-3 rounded-md shadow-lg">지금가입
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default ArbitrageStats;
