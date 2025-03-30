

// export default Navbar;
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // State to toggle drawer
  const navLinks = [
    { id: "home", label: "홈" },
    { id: "ProfitBoard", label: "수익게시판" },
    { id: "Community", label: "커뮤니티" },
    { id: "PROCEDURE", label: " 절차" },
    { id: "QnA", label: "질문과 답변" },
    { id: "footer", label: "서비스 신청" },
  ];
  

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleDrawer = () => {
    setIsOpen(!isOpen); // Toggle the drawer open/close state
  };

  return (
    <nav  className="w-full bg-white shadow-md">
      <div className="md:px-10 lg:px-14 xl:px-30 2xl:px-52 flex justify-between items-center py-3 px-6">
        {/* Logo Section */}
        <div className="flex cursor-pointer items-center space-x-2">
          <div>
            <h1 className="text-3xl font-semibold tracking-wide uppercase">WaveEX            </h1>
            <p className="text-xs text-purple-700">CAPITAL MANAGEMENT</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="lg:flex space-x-6 hidden text-medium font-medium">
        {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => {
                scrollToSection(link.id);
                setActive(link.id);
              }}
              className={`cursor-pointer pb-2 ${
                active === link.id
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : "text-black hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
              }`}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center" onClick={toggleDrawer}>
          {isOpen ? (
            <FaTimes className="text-xl text-black" /> // Close icon
          ) : (
            <FaBars className="text-xl text-black" /> // Hamburger icon
          )}
        </div>
      </div>

      {/* Drawer for Mobile */}
      {isOpen && (
  <div className="lg:hidden bg-white z-40 shadow-md absolute top-5 left-0 right-0 p-6 mt-12">
    <ul className="flex flex-col space-y-4 text-medium font-medium">
      {navLinks.map((link, index) => (
        <li
          key={index}
          onClick={() => {
            setActive(link.id); // Set active link properly
            setIsOpen(false); // Close the drawer when a link is clicked
          }}
          className={`cursor-pointer pb-2 ${
            active === link.id
              ? "text-[#FF6900] border-b-2 border-[#FF6900]"
              : "text-black hover:text-[#FF6900] hover:border-b-2 hover:border-[#FF6900]"
          }`}
        >
          {link.label} {/* Display label properly */}
        </li>
      ))}
    </ul>
  </div>
)}

    </nav>
  );
};

export default Navbar;
