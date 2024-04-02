import React from 'react';
import logo from "../../../assets/SMUCT-Logo.png";
const Footer = () => {
    return (
      <div className="bg-[#DDE2F7]/50">
        <footer className="flex flex-col max-w-[1366px]  mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col justify-between gap-5 py-8 md:flex-row md:gap-0  items-center">
            <aside className="flex items-center justify-center gap-3 text-xl">
              <img className="w-[70px]" src={logo} alt="" />
              <p className="text-[#201F5E] font-medium">BookHub</p>
            </aside>
            <nav className="text-lg">
              <ul className="flex h-full items-center justify-center gap-3 text-[#201F5E]">
                <li>
                  <a className="cursor-pointer hover:underline">Home</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline">Contact</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline">About</a>
                </li>
              </ul>
            </nav>
          </div>
          <aside className=" py-5 text-center text-sm">
            <p className="text-[#201F5E]">
              &copy; 2024 BookHub. All Rights Reserved.
            </p>
          </aside>
        </footer>
      </div>
    );
};

export default Footer;