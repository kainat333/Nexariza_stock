import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{ backgroundColor: "#003C43" }}
      className="w-screen  p-4 text-white text-center text-xl font-semibold shadow-md fixed top-0 left-0"
    >
      Stock Trading Platform
    </header>
  );
};

export default Header;
