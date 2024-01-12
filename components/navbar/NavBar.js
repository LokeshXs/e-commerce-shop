"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileSideNavBar from "./MobileSideNavBar";

const NAV_LINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
  {
    title: "Stores",
    link: "/",
  },
];
const CATEGORIES = [
  {
    title: "Men",
    link: "/",
  },
  {
    title: "Women",
    link: "/",
  },
  {
    title: "Children",
    link: "/",
  },
  {
    title: "Accessories",
    link: "/",
  },
];
const NavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <header>
      <nav className="px-8 py-4 text-lg max-lg:text-base  flex justify-between items-center max-sm:px-4">
        <div>
          <p>Logo</p>
        </div>

        <ul className="flex gap-6 items-center">
          {NAV_LINKS.map((navObj, index) => (
            <li key={index} className="relative max-md:hidden block navLink bg-white ">
              <Link href={navObj.link} >
                {navObj.title}
              </Link>
            </li>
          ))}
          <li>
            <Button variant="outline" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </li>
          <li className=" max-md:hidden block ">
            <Button className=" text-lg max-lg:text-base">Login</Button>
          </li>

          <li className=" max-md:block hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setIsNavBarOpen((prev) => !prev);
              }}
              className="z-40 relative"
            >
              {isNavBarOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </li>
        </ul>
      </nav>

      <ul className="flex justify-center py-2 gap-10 max-sm:gap-6 border-y-2 text-lg max-lg:text-base ">
        {CATEGORIES.map((categoryObj, index) => (
          <li key={index} className="relative navLink bg-white">
            <Link href={categoryObj.link} className=" ">
              {categoryObj.title}
            </Link>
          </li>
        ))}
      </ul>

      <MobileSideNavBar
        links={NAV_LINKS}
        isNavBarOpen={isNavBarOpen}
        setIsNavBarOpen={setIsNavBarOpen}
      />
    </header>
  );
};

export default NavBar;
