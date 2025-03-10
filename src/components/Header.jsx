import React from "react";
import MenuItem from "./MenuItem";
import { MdHome } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={MdHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
