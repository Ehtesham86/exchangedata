import StockChart from "../RealStockData/RealStockData";

const HeroSection = () => {
  const handleTelegramClick = () => {
    window.open("https://t.me/wave_ex_arbitrage_bot");
  };
  return (
    <div id="home"
      className="relative bg-cover bg-center h-[750px] lg:h-[450px] flex items-center"
      style={{ backgroundImage: "url('/slider1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10   text-white  w-full  justify-center flex  gap-8 items-center">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-12 px-4 md:px-10  py-10 lg:px-14  2xl:px-52 lg:gap-4">
            <div className="col-span-12  lg:col-span-4   2xl:col-span-4  rounded-lg  text-white">
              <div className=" text-black  w-full">
                <StockChart symbol="AAPL" />
              </div>
            </div>
            <div className="col-span-12  lg:col-span-8 2xl:col-span-8 text-white">
              <div className="mt-3">
                <div className="text-center flex  w-full justify-center items-center">
                  <div className="border w-[300px]  ">
                    <h1 className="text-3xl lg:text-[35px]  font-bold leading-tight">
                      WaveEX
                    </h1>
                    <p> 합법적 고수익 아비트리지 거래</p>
                  </div>
                </div>
                <p className="mt-4  lg:block text-lg text-gray-300">
                  WaveEX는 블록체인 금융 혁신을 선도하는 글로벌 OTC시장에서
                  대량의 코인을 할인된 가격에 매수하여 코인가격 프리미엄이있는
                  국가에 코인을 재판매하여 높은 고수익을 창출하는 획기적인
                  차세대 아비트리지 플랫폼
                </p>
                <p className="mt-2 text-gray-300">
                  OTC 시장과 아비트리지가 혼합된 암호화폐 차세대 플랫폼 , 손실이
                  전혀 없는 고수익 OTC + 아비트리지 트레이딩 시스템으로써 대량
                  매수된 코인을 플랫폼의 회원들에게 분산화 하여 합법적으로
                  매도하여 얻어지는 무위험 고수익을 공유하는 플랫폼입니다.
                </p>
                <div className="flex justify-center items-center">
                  <button onClick={handleTelegramClick} className="mt-6 px-12 py-4 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-400 transition-all duration-300">
                    지금가입{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Fixed Telegram Button */}
      <div
        onClick={handleTelegramClick}
        className="fixed bottom-1/3 right-6 lg:right-14 z-70  cursor-pointer  rounded-full transition"
      ><div className="flex justify-center items-center">
        <img src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1745390688/images-removebg-preview_dlbf2d.png" alt="image " className=" w-10 h-10 lg:w-20 lg:h-20 "/>

      </div>
        <p className="text-[#1a759c] border border-[#1a759c] bg-white rounded-lg py-2 px-4 text-sm font-[500] mt-2 text-center ">WaveEx 
        차익거래시작</p>
      </div>
    </div>
   
  );
};

export default HeroSection;
