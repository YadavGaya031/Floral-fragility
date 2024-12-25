import React from "react";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  return (
    <div className="top-0 flex justify-between items-center px-[50px] py-[20px] w-full fixed z-30">
      <h2 className="text-[25px]">F</h2>
      <div className="flex gap-[180px] items-center">
        <div className="flex  items-center justify-center gap-[30px]">
          <a href="#">Shop</a>
          <a href="#">New</a>
          <a href="#">About</a>
          <a href="#">Store</a>
          <a href="#">Search</a>
        </div>
        <div className="flex text-[20px] gap-[40px]">
          <i className="ri-shopping-bag-4-fill"></i>
          <i className="ri-menu-3-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
