import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';


const CTA = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    amount_of_shares_held: '',
    phone: '',
    application_amount: '',
    person_in_charge: '',
  });

  // Handle input change
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    const serviceID = "service_eqwwduu";
    const templateID = "template_ykfj3j8";
    const publicKey = "RsJ7KTR_fyeePU8kv";
  
    const templateParams = {
      user_name: formData.name,
      user_amount_of_shares_held: formData.amount_of_shares_held,
      user_phone: formData.phone,
      user_application_amount: formData.application_amount,
      user_person_in_charge: formData.person_in_charge,
    };
  
    try {
      console.log("Submitting form data:", formData);
      const response = await fetch("https://primeassertsbackend.vercel.app/primeassetForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit form data to the server");
      }
  
      console.log("Form data submitted successfully");
  
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log("Email sent successfully!");
  
      alert("Form submitted and email sent successfully!");
  
      setFormData({
        name: "",
        amount_of_shares_held: "",
        phone: "",
        application_amount: "",
        person_in_charge: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form data or send email. Try again later.");
    }
  };
  const phoneNumbers = [
    "+82 10-1234-5678",
    "+82 10-9876-5432",
    "+82 10-5678-9012",
    "+82 10-3456-7890",
    "+82 10-2345-6789",
    "+82 10-6789-0123",
    "+82 10-8765-4321",
    "+82 10-7654-3210",
    "+82 10-4321-0987",
    "+82 10-9012-3456",
  ];


  const [randomNumbers, setRandomNumbers] = useState([]);
 



  return (
    <div
    id="contact" 
      className="rounded-[20px]  px-4 md:px-10  lg:px-14 xl:px-10 2xl:px-22 "
     
    >
      <>
  {/* Left Section: Heading */}
<h1
  className="mt-4 pb-4 sm:mt-5 font-semibold text-nowrap text-[28px] sm:text-[50px] leading-tight sm:leading-[50.8px]"
  style={{ fontFamily: "Orbitron, sans-serif" }}
>
  질문하기
</h1>

{/* Right Section: Form */}
<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
  {/* First Row: Name and Amount of Shares Held */}
  <div style={{ display: "flex", gap: "1rem", flexDirection: "row", flexWrap: "wrap" }}>
    <div style={{ flex: 1, minWidth: "200px" }}>
      <label htmlFor="name" style={{ marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: "bold" }}>
        이름
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="이름"
        value={formData.name}
        onChange={handleChange}
        required
        style={{
          padding: "10px",
          marginTop: "8px",
          fontFamily: "Play, sans-serif",
          border: "1px solid white",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
    </div>
    <div style={{ flex: 1, minWidth: "200px" }}>
      <label htmlFor="amount_of_shares_held" style={{ marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: "bold" }}>
        보유 주식 수
      </label>
      <input
        type="text"
        id="amount_of_shares_held"
        name="amount_of_shares_held"
        placeholder="보유 주식 수"
        value={formData.amount_of_shares_held}
        onChange={handleChange}
        style={{
          padding: "10px",
          marginTop: "8px",
          fontFamily: "Play, sans-serif",
          border: "1px solid white",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
    </div>
  </div>

  {/* Second Row: Phone Number and Application Amount */}
  <div style={{ display: "flex", gap: "1rem", flexDirection: "row", flexWrap: "wrap" }}>
    <div style={{ flex: 1, minWidth: "200px" }}>
      <label htmlFor="phone" style={{ marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: "bold" }}>
        전화번호
      </label>
      <input
  type="number"
  id="phone"
  name="phone"
  placeholder="전화번호"
  value={formData.phone}
  onChange={handleChange}
  required
   title="Only numbers and phone characters (#, -, *, etc) are accepted."
  style={{
    padding: "10px",
    marginTop: "8px",
    fontFamily: "Play, sans-serif",
    border: "1px solid white",
    width: "100%",
    boxSizing: "border-box",
  }}
/>


    </div>

    <div style={{ flex: 1, minWidth: "200px" }}>
      <label htmlFor="application_amount" style={{ marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: "bold" }}>
        신청 금액
      </label>
      <input
        type="text"
        id="application_amount"
        name="application_amount"
        placeholder="신청 금액"
        value={formData.application_amount}
        onChange={handleChange}
        required
        style={{
          padding: "10px",
          marginTop: "8px",
          fontFamily: "Play, sans-serif",
          border: "1px solid white",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
    </div>
  </div>

  {/* Person in Charge and Message */}
  <div>
    <label htmlFor="person_in_charge" style={{ marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: "bold" }}>
      담당자
    </label>
    <input
      type="text"
      id="person_in_charge"
      name="person_in_charge"
      placeholder="담당자"
      value={formData.person_in_charge}
      onChange={handleChange}
      required
      style={{
        padding: "10px",
        marginTop: "8px",
        fontFamily: "Play, sans-serif",
        border: "1px solid white",
        width: "100%",
        boxSizing: "border-box",
      }}
    />
  </div>

  {/* Submit Button */}
  <div style={{ display: "flex", justifyContent: "center" }}>
    <button
      type="submit"
      style={{
        padding: "18px 60px",
        borderRadius: "5px",
        backgroundColor: "#FF6900",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        width: "100%",
        marginTop: "15px",
        fontWeight: "bold",
        fontFamily: "Play, sans-serif",
      }}
    >
      보내기
    </button>
  </div>
</form>

{/* Recent Random Phone Numbers */}
<div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-lg">
  <h2 className="text-lg font-semibold text-gray-800 mb-3">📞 최근 랜덤 전화번호</h2>
  <ul className="list-none">
    {phoneNumbers.map((number, index) => (
      <li key={index} className="text-gray-700 text-lg font-medium border-b py-2">
        {number}
      </li>
    ))}
  </ul>
</div>

      </>
      </div>
    
  );
};

export default CTA;
