
import { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    creditConsent: false,
    marketingConsent: false,
    dataSharingConsent: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    const { creditConsent, marketingConsent, dataSharingConsent } = formData;

    // Check if no checkbox is selected
    if (!creditConsent && !marketingConsent && !dataSharingConsent) {
      alert("옵션을 선택하세요.");
      return;
    }

    // Check if all checkboxes are selected
    if (!creditConsent || !marketingConsent || !dataSharingConsent) {
      alert("모든 체크박스를 선택하세요.");
      return;
    }

    // If all checkboxes are selected, show success message
    alert("양식이 성공적으로 제출되었습니다!");
    setFormData({
        creditConsent: false,
        marketingConsent: false,
        dataSharingConsent: false,
      });

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 md:px-10  py-10 lg:px-14 xl:px-30 2xl:px-52"
    >
      <h2 className="text-lg font-semibold mb-4">온라인 상담신청</h2>

      {/* Personal Credit Information Agreement */}
      <h3 className="text-md font-semibold text-orange-500 mb-2">
        개인신용정보 수집 및 이용 동의서
      </h3>
      <div className="mb-3 h-26 border border-gray-500 p-2 overflow-scroll">
      <p className="text-sm py-2 text-gray-600">
           개인신용정보 수집 및 이용 동의
         </p>
         <p className="text-sm py-2 text-gray-600">㈜에스앤씨시스템즈</p>

         <p className="text-sm py-2 text-gray-600">
           귀사가 본인으로부터 취득한 개인신용정보를 귀사가 본인의 개인신용정보를
           수집. 이용하거나 제3자에게 제공하고자 하는 경우에는 개인신용정보법
           제15조제1항제1호, 제17조1항제1호 및 신용정보의이용및보호에관한법률
           제32조제1항, 제33조 및 제34조에 따라 본인의 사전 동의를 얻어야 합니다.
           이에 본인은 귀사가 본인의 개인신용정보를 아래와 같이 이용하는데
           동의합니다.
         </p>
         <p className="text-sm py-2 text-gray-600">
           1. 개인정보이용목적 : 스탁론 이용여부 및 만기정보 조회 등 대출 진행을
           위한 정보제공
         </p>
         <p className="text-sm py-2 text-gray-600">
           2. 이용 또는 제공하는 개인정보의 항목 : 성명, 휴대전화번호, 이메일 등
         </p>
         <p className="text-sm py-2 text-gray-600">
           3. 개인정보의 보호 및 이용기간 : 5년
         </p>
         <p className="text-sm py-2 text-gray-600">
           4. 연락 중지 및 동의 거부시 불이익
         </p>
         <p className="text-sm py-2 text-gray-600">
           - "신용정보의 이용 및 보호에 관한 법률" 제37조 제2항에 따라 연락
           중지를 회사에 요청할 경우 요청일자로부터 1개월이내에 연락을 중지함
         </p>
         <p className="text-sm text-gray-600">
           - 동의를 거부할 권리가 있으며 동의를 거부할 경우 대출상담 서비스가
           진행되지 않음
         </p>
      </div>
      <label className="flex items-center mt-1">
        <input
          type="checkbox"
          name="creditConsent"
          checked={formData.creditConsent}
          onChange={handleChange}
          className="mr-2"
        />
        개인신용정보 수집 및 이용에 동의합니다.
      </label>

      {/* Marketing Usage Agreement */}
      <h3 className="text-md font-semibold text-orange-500 my-5">
        마케팅 활용 동의서 (선택사항)
      </h3>
      <div className="mb-3 h-26 border border-gray-500 p-2 overflow-scroll">
      <p className="text-sm py-2 text-gray-600">마케팅 활용 동의</p>

         <p className="text-sm py-2 text-gray-600">
           본 동의문에는 전화, 문자, 이메일, DM 등을 활용한 광고성 정보 수신 동의
           내용이 포함되어 있습니다.
         </p>
         <p className="text-sm py-2 text-gray-600">이용정보</p>
         <p className="text-sm text-gray-600">- 성명, 휴대폰번호, 이메일,</p>
         <p className="text-sm text-gray-600">이용목적</p>
         <p className="text-sm text-gray-600">
           - 전화, 문자, 이메일을 이용한 상품 안내 및 마케팅 이벤트 안내
         </p>
         <p className="text-sm text-gray-600">
           - 상품 안내를 위한 전화 서비스 제공의 마케팅자료로 활용(고객센터
           1599-2119 통한 동의철회가능), 스탁론 이용여부 및 만기정보 조회,
         </p>
         <p className="text-sm text-gray-600">
           - 전화, 문자, 이메일을 이용한 회사 상품 및 제휴사의 상품 소개
         </p>
         <p className="text-sm text-gray-600">
           - 전화, 문자, 이메일, DM을 이용한 스탁론 서비스안내 및 상품소개
         </p>
         <p className="text-sm py-2 text-gray-600">이용기간</p>
         <p className="text-sm py-2 text-gray-600">- 제공동의일로부터 2년</p>
         <p className="text-sm py-2 text-gray-600">수집 및 활용 관련 정보</p>
         <p className="text-sm text-gray-600">
           - 회사는 고객님들에게 보다 다양한 정보를 제공하고, 서비스의 질을
           향상시키기 위하여 회사의 비즈니스 파트너에게 본 활용동의서에 동의한
           고객님의 개인정보를 제공합니다. 고객님들 중 개인정보의 제3자 마케팅
           활용동의서에 동의하신 고객님들의 정보만이 제공되며, 제공된 정보는
           명시된 이용목적을 벗어나 이용되지 않습니다. 개인정보보호관련 법률에
           의거 회원님의 정보는 안전하게 관리되며, 개인정보의 유출 등 사고가
           일어나지 않도록 더욱 철저한 보안이 이루어지도록 노력하고 있습니다.
         </p>
         <p className="text-sm py-2 text-gray-600">
           개인정보관련 의견수렴 및 불만처리에 관한 사항
         </p>
         <p className="text-sm py-2 text-gray-600">
           회사는 고객님과의 원활환 의사소통을 위해 민원처리센터를 운영하고
           있으며 연락처는 다음과 같습니다.
         </p>
         <p className="text-sm py-2 text-gray-600">
           [민원처리센터] - 이메일 : master@hisl.co.kr - 전화번호 : 070-4261-1941
           - 팩스번호 : 02-514-0244 - 주 소 : (06043) 서울시 강남구 강남대로136길
           23, 2~3층(논현동, 시스터빌딩)
         </p>
         <p className="text-sm py-2 text-gray-600">
           고객님께서는 동의를 거부하실 수 있으며, 동의 거부 시, 각종 광고 및
           이벤트 안내 등의 서비스가 제한됩니다.
         </p>

      </div>
      <label className="flex my-3 items-center mt-2">
        <input
          type="checkbox"
          name="marketingConsent"
          checked={formData.marketingConsent}
          onChange={handleChange}
          className="mr-2"
        />
        마케팅 활용에 동의합니다.
      </label>

      {/* Third-Party Data Sharing Agreement */}
      <h3 className="text-md text-orange-500 font-semibold mb-2">
        개인정보 공유 및 3자 제공 동의서 (선택사항)
      </h3>
      <div className="mb-3 h-26 border border-gray-500 p-2 overflow-scroll">
      <p className="text-sm  py-2 text-gray-600">
           개인정보 공유 및 3자 제공 동의
         </p>
         <p className="text-sm py-2 text-gray-600">
           회사는 이용자들의 개인정보를 '개인정보의 수집 및 이용목적'에서 고지한
           범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여
           이용하거나 이용자의 개인정보를 외부에 공개하지 않습니다. 또한 회사는
           개인정보의 유출 등 사고가 일어나지 않도록 보안규정 등을 철저히
           준수하고 있습니다.
         </p>
         <p className="text-sm py-2 text-gray-600">
           아래의 경우에는 예외로 합니다.
         </p>
         <p className="text-sm py-2 text-gray-600">
           - 이용자들이 사전에 동의한 경우
         </p>
         <p className="text-sm py-2 text-gray-600">
           - 당사 서비스를 이용하여 타인에게 정신적, 물질적 피해를 줌으로써 그에
           대한 법적인 조치를 취하기 위하여 개인정보를 공개해야 한다고 판단되는
           충분한 근거가 있는 경우
         </p>
         <p className="text-sm py-2 text-gray-600">
           - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에
           따라 수사기관의 요구가 있는 경우
         </p>
         <p className="text-sm py-2 text-gray-600">
           - 이벤트 경품의 배송업무상 배송업체에게 배송에 필요한 최소한의 이용자
           정보(성명, 주소, 전화번호)를 알려주는 경우
         </p>
         <p className="text-sm py-2 text-gray-600">
           - 주식매입자금대출 서비스 과정에서 대출여부 확인을 위한 여신기관과의
           정보공유
         </p>
         <p className="text-sm py-2 text-gray-600">
           (이 경우 제공정보와 이용목적은 아래와 같습니다.)
         </p>
         <p className="text-sm py-2 text-gray-600">
           ㆍ제공대상자 : 저축은행(DB, HB, IBK, JT, JT친애, KB, NH, OK, 다올,
           모아, 신한, 우리금융, 유안타, 인성, 키움YES, 키움, 하나, 한국투자,
           한화, 수협), 캐피탈(신한, 엠, 오릭스, BNK, 우리금융, DGB, NH, IBK,
           미래에셋, 키움, 하나), 보험(DB, NH, KB, 한화, 현대해상), 카드(BC)
           ㆍ제공정보 : 이름, 전화번호(휴대전화 또는 자택), 주소, 거래증권사
           ㆍ이용목적 : 주식매입자금대출 서비스 과정에서 대출여부 확인을 위한
           정보공유 ㆍ이용기간 : 3년
         </p>
         <p className="text-sm py-2 text-gray-600">
           - 더 질 높은 서비스 제공 등을 위하여 다음과 같은 개인정보를 제 3자에게
           제공
         </p>
         <p className="text-sm py-2 text-gray-600">
           ㆍ제공대상자 : ㈜케이지에셋 ㆍ제공정보 : 이름, 생년월일, 거래증권사,
           이메일, 휴대전화번호, 직업군, 투자 기간 및 유형, 브랜드 인지 계기
           ㆍ이용목적 : 포인트, 이벤트 등의 서비스 제공, 마케팅 및 광고 활용,
           회원관리 ㆍ이용기간 : 3년
         </p>
         <p className="text-sm py-2 text-gray-600">
           (단, 보다 나은 서비스 제공을 위하여 개인정보를 제휴사에게 제공하거나
           공유할 필요가 있는 경우 제공 또는 공유할 정보의 항목 및 제휴사명,
           목적, 기간 등을 명시하여 동의를 구하게 되며, 동의하지 않는 경우에는
           제3자에게 제공 또는 공유하지 않습니다.)
         </p>
      </div>
      <label className="flex items-center mt-1">
        <input
          type="checkbox"
          name="dataSharingConsent"
          checked={formData.dataSharingConsent}
          onChange={handleChange}
          className="mr-2"
        />
        개인정보 공유 및 3자 제공에 동의합니다.
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-5 px-8 py-3 bg-orange-500 text-white rounded-md"
      >
        제출하기
      </button>
    </form>
  );
};

export default ConsultationForm;
