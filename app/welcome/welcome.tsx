import Navbar from "../Navber/narbar";
import ArbitrageStats from "~/PrimeStockLoan/PrimeStockLoan";
import HeroSection from "../HeroSection/HeroSection";
import StockLoan from "../StoctLoanInto/StockLoanInto"
import FAQs from "../FAQs/FAqs"
import FundingSection from "../FundingSection/FundingSection"
import Footer from "../Footer/Footer"
import ExchangeData from "../ExchangeData/Exchange"
import Copywriter from "../Copywriter/Copywriter"
export function Welcome() {
  return (
    <div>
      <Navbar/>
      <div style={{ height: "100vh" }} >
      <HeroSection/> 
      <ExchangeData/> 
      <ArbitrageStats/> 
      <StockLoan/> 
      <FundingSection/> 
      <FAQs/>
      <Footer/> 
      <Copywriter/>
      </div>
</div>


    
  );
}