import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = ["Pricing", "Customers", "Documentation", "FAQs"];

const Header = () => {
  return (
    <nav className="py-[`5px] fixed w-full z-10 font-[montserrat] border border-b border-black text-black h-[50px] flex items-center px-20 text-xs justify-between bg-white">
      <div>SolarMetrix</div>
      <div className="flex gap-6 items-center text-[#232323]">
        <Link href="#">About</Link>
        {Nav.map((nav) => (
          <Link href="#" key={nav} className="text-[#151515CC]">
            {nav}
          </Link>
        ))}
        <button className="capitalize p-[4px_10px] border border-black rounded-md">
          get app
        </button>
      </div>
      {/* <Image src='/solar_background.jpeg' width={300} height={300} alt="Background"/> */}
    </nav>
  );
};

export default Header;


