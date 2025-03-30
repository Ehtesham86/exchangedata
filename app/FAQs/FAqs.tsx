import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "WaveEX의 OTC Arbitrage가 무엇인가요?", answer: "Arbitrage는 차익거래, 재정거래라고 합니다.WaveEX는 글로벌로 기관물량/기업물량/개인고래물량을 거래하는 시장을 OTC라고 합니다.이는 일종의 P2P형태와 비슷합니다.그러나, OTC는 중재가 있다는것이 다릅니다. OTC시장에서 매입한 암호화폐를 보다 좋은 시장에 매도하여 더 큰 수익을 얻을 수 있는 기회를 제공합니다.  예를들어, 한국만의 +프리미엄 시세는 더욱 흥미롭고 더욱 큰 수익 확보하는것에 아주 매력적인 시장입니다.OTC의 거래에서 할인률을 적용하여 매수하고 프리미엄이 있는 국가에 매도하여 수익을 극대화함과 동시에 투자자풀을 키워감에 목적을 두고 서비스를 제공 합니다. 프리미엄이 높을수록 더욱 매력적인 무위험_고소득 시장이 됩니다. " },
  { question: "WaveEX의 투자자풀에 참여하려면 어떻게 해야하나요?", answer: "WaveEX는 Membership 제로도 운영되고 있습니다.  암호화폐 매수에 대해 강제,의무는 없으므로 얼마든지 자유롭게 참여할 수 있습니다. 그러나, 누구에게나 기회가 주어지는 것은 아닙니다. Membership이 되어야만 기회를 잡을 수있다는것은 인지해 주시기 바랍니다. WaveEX  멤버십 가입은  절대로 선불을 받지 않습니다." },
  { question: "WaveEX를 통해 Arbitrage 할 현금을 입금 해야하나요?", answer: "WaveEX는 현금 입금을 계좌로 받는 행위는 일체하지 않습니다." },
  { question: "WaveEX를 통해 Arbitrage  할 자금을 위탁하는가요?", answer: "WaveEX에 위탁하지 않습니다. 회원이 직접 매도 / 매수 합니다.타 업테들의 아비트라지처럼 위탁(송금)하여 회원님들께 자금에 대한 불안함을 제공하지 않습니다." },
  { question: "Arbitrage할 자금을 입금하지 않고 어떻게 수익을 얻나요?", answer: "WaveEX는 아주 참신하고 획기적인 시스템으로 운영되고 있습니다.WaveEX와 회원님들간의 거래는 코인과 코인간에 스왑 거래를 기본 거래 방식 입니다.WaveEX에서 지정한 코인을 회원이 직접 거래소 및 개인간거래를 통해 매수한 후 WaveEX에서 매도하는 코인을  할인된 가격의 코인을 매수하면 됩니다.WaveEX에서 매수한 코인을 즉시, 프리미엄이 있는 거래소에  판매하면 무위험 고수익을 얻게 됩니다. (프리미엄이 수치가 높을수록 수익룰도 높아집니다." },
  { question: "암호화폐 에스크로기반 P2P 사이트는  무엇인가요?", answer: "P2P거 에스크로 거래 시스템은 개인과 개인에 판매물품과 구매자금에 대해 사기를 원천적으로 방지하는것을  목적으로 합니다.일반적으로 에스크로를 이용하지 않고 온라인에서 P2P거래를 함에 가장 큰 문제는 사기가 일어날 확률이 상당히 높습니다.온라인 상의 거래기 때문에 구매물건 확인이 어렵고 구매대금을 입금했지만 다른 물건을 받았다던가 아예 물품을 받지 못하기 떄문입니다. 그에 P2P 에스크로 시스템은 물품구매자가 P2P플랫폼에 구매대금을 예치하면 자동으로 에스크로되며,물품을 명확하게 받았을 때에만 “거래완료승인”을 줘야만 판매자에게 판매 대금이 이체됩니다.그러나, 계약된 물품을 받았는데도 불구하고 악의성으로 “거래승인확정”을 고의적으로 하지 않는경우, 판매자는 물품을 보낸 모든 증거를 에스크로측으로 제출 후 판매대금을 받게 됩니다. 이과정에 악적이거나 고의성으로 확인이 된다면 불량한 고객으로 등록되어계정을 블록 당하게 됩니다. 이렇게 P2P거래 시스템은 철저하게 사기 방지에 모든 촛점을 맞춰 서비스 하고 거래금액에 대한 수수료를 가져 갑니다." },
  { question: "WaveEX와 회원은 P2P 에스크로에서 어떤 방식으로 거래 하나요?", answer: "WaveEX는 몇군데의 P2P 에스크로 사이트를 이용하지만 가장많이 이용하는 글로벌 P2P사이트는 Paxful 입니다. 회원님들이 각자가 구매한 코인을 판매등록하고 WaveEX의 거래 담당자가 즉시, 매수신청 하면 거래가 시작됩니다.그에,  WaveEX는 회원님의 판매수량을 확인 후 회원님이 WaveEX로 인증한 지정된 지갑주소로 먼저 코인 다이렉트로 전송 합니다.  회원님은 입금된 지갑에서 코인의 수량을 명확하게 확인한 후 즉시, P2P사이트에서 “판매완료승인”을 확정해 주면 WaveEX는 판매대금을 받게됩니다. 회원님들은 구매할 코인을 할인된 금액으로 구매한 코인을 거래소로 판매하여 차익을 발생시킵니다." },
  { question: "AML 인증서는 무엇인가요?", answer: "모든 중앙화 거래소, DEX거래소, P2P거래소들은 회원들께 ISMSAML인증 정책을 기본으로 동의를 해야만 합니다. * ISMS 란? 정보보호관리에 대한 표준적 모델 및 기준을 인증하는제도* AML이란? 자금세탁법방지( Anti-money Landering)제도로써 불법무      기거래자금,마약거래자금, 납치자금,인신매매자금등 불법거래자금을 차단하고자 하는 제고 입니다.암호화폐에서 AML인증은 중앙화거래소 및 P2P거래소들의 지갑주소들에 대해서는 자동으로 보고 되고 일반 퍼블릭 지갑의 경우는 AML을 위한 주소인증이 자동으로 제공되지 않기 때문에 프로젝트에 따라 지갑을 거래하는 경우 AML인증서를 요청하기도 합니다.AML인증은 코인이 입금되어있는 수량과 주소, 거래를 한 트랜잭션등을추적하여 불법주소와 연관성을 검증하는 인증입니다." },
  { question: "WaveEX Arbitrage의 수익률은 얼마나되나요?  ", answer: "+프리미엄이 몇%인가에 따라 수익률은 차등이 있습니다.그러나 프리미엄이 항상 있는것은 아닙니다. 때로는그러나 3개월 평균으로는 1~4%정도의 폭이 유지되고 있습니다.프리미엄의 폭이 상당히 적게형성이 되는날은 WaveEX의 판매금액에서 할인값을 적용하여 회원님들께 수익적인 일부분을 맞추고 있습니다. 그러나, 프리미엄의 폭이 상당히 높이 올라가는 경우에도 최대3%의 수익룰에 맞춰 회원님들께 제공되고 있습니다.  즉, 프리미엄이 10%의 폭을 형성하고 있더라도 최대3%의 수익률을 얻는 프리미엄 상한제 리미트가 적용됩니다.지금과 같은 낮은 프미리엄이 형성되는시기에는일일 단일거래에 1~2%정도의 수익률을 유지하고있습니다."},
  { question: "WaveEX Arbitrage는 정말 무손실인가요?", answer: "WaveEX는 무손실을 기본으로하는 Arbitrage Crypto 상품입니다.코인 구매 후 프리미엄이 형성되어 높은 가격에 판매하기 때문에 손실이 발생하는 구조가 아닙니다. 그래서, WaveEX와의 거래를 최대한 빠르게 완료한 후 거래소에 판매하면됩니다. 그러나, 코인 시장의 가격은 급변동을 하기 떄문에 매도까지의 시간을 지체하면 손실이 발생할 수 있습니다. 이때, 회원님이  WaveEX와의 거래지연, 회원님이 매도해야하는 거래소에 지연판매로 인해 발생되는 모든 손실은 회원님께 있음을 정확히 인지하기 바랍니다." },
  { question: "판매 후 WaveEX에 지급할 수수료는 몇%인가요?", answer: "WaveEX도 프리미엄이 형성되는 부분에서 수익을 얻습니다.즉, WaveEX는 프리미엄에 형성되는 국가별 거래소들의 계정 및 계좌들을 모두 보유할 수 없기 때문에 서비스를 제공하는 국가에 회원님들에게 홍보하여 아비트리지커뮤니티로 참여하도록 독려합니다. 이에, 많은 회원님들이 가입될수록 WaveEX의 OTC거래 볼륨은 더욱 증가하게 됩니다.그에, 회원님들과 WaveEX는 함께 수익을 공유하는 커뮤니티로 발전해 나갑니다. WaveEX로 지급해야 하는  수수료는 회원님이 얻은 수익의 30%입니다. " },
  { question: "WaveEX에 맴버십 신청은 어떻게 해야하나요?", answer: "WaveEX사이트에 등록을 하시면 잔담 상담원이 연락을 드립니다. 더욱 자세한 내용들은 전담 상담원에게 문의 해 주시면 친절히 상담드리도록 하겠습니다." },

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.div id="QnA"
      className="px-4 md:px-10 py-10 lg:px-14 xl:px-30 2xl:px-52 my-6 mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className=" xl:text-5xl text-2xl text-gray-600 font-semibold mb-6">WaveEX 아비트라지가 작동하는 방식</h1>
      <h2 className="text-lg xl:text-3xl font-bold mb-6">자주 묻는 질문</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-4 rounded-sm shadow cursor-pointer grid grid-cols-[1fr_auto] items-center"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold text-start">{faq.question}</span>
            <span className="text-right">{openIndex === index ? "−" : "+"}</span>
            <motion.div
              className="col-span-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mt-2 text-start text-gray-700">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
