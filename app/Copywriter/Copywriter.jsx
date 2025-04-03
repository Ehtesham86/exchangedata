import React from "react";
const navItems = [
  { id: "home", label: "홈" },
    { id: "ProfitBoard", label: "수익게시판" },
    { id: "Community", label: "커뮤니티" },
    { id: "PROCEDURE", label: " 절차" },
    { id: "QnA", label: "질문과 답변" },
    { id: "footer", label: "서비스 신청" },
];
const CopywriterSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-50 gap-6  px-4 md:px-10 py-10 lg:px-14 xl:px-30 2xl:px-52 py-18 bg-purple-800 p-6 text-white">
      {/* Left Section */}
      <div className="col-span-1">
        <h2 className="text-xl font-bold">투자 경고</h2>
        <p className="mt-2 text-sm">
          이는 투자 권장이 아닌 가입자의 개인적인 의견입니다.
        </p>
        <p className="mt-2 text-sm">
          회사는 모든 회원들에게 항상 신중한 투자 결정을 권장합니다.
        </p>
        <p className="mt-2 text-sm">
          투자 결정과 모든 수익 및 손실의 책임은 전적으로 투자자에게 있습니다.
        </p>
        <p className="mt-2 text-sm">
          회사는 투자 활동에 대한 어떠한 책임도 지지 않습니다.
        </p>
        <p className="mt-2 text-sm">
          이용 가능한 자금 및 수익의 범위 내에서만 투자하시기 바랍니다.
        </p>
      </div>
      
      {/* Middle Section */}
      <div className="col-span-1 flex justify-start md:justify-center w-full">
        <div>
        <h2 className="text-xl font-bold text-white">소개</h2>
        <nav className="space-y-2">
  {navItems.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      className="block text-white"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {item.label}
    </a>
  ))}
</nav>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="col-span-1  flex-col flex justify-center space-y-2 text-black">
        <button className="border p-2 bg-white text-black text-sm">개인신용정보 수집 및 이용 동의서</button>
        <button className="border p-2 bg-white text-black text-sm">마케팅 활용 동의서 안내</button>
        <button className="border p-2 bg-white text-black text-sm">개인정보 공유 및 3자 제공 동의서</button>
      </div>
    </div>
  );
};

export default CopywriterSection;
