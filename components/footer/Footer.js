import Image from "next/image";
import Link from "next/link";
import React from "react";

const LINKS = [
  {
    title: "FAQ",
    link: "/",
  },
  {
    title: "Pages",
    link: "/",
  },
  {
    title: "Stores",
    link: "/",
  },
  {
    title: "Compare",
    link: "/",
  },
  {
    title: "Cookies",
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
    title: "Shoes",
    link: "/",
  },
  {
    title: "Accessories",
    link: "/",
  },
  {
    title: "New Arrivals",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className=" w-full  py-4 px-20 max-xl:px-12 max-sm:px-4 max-sm:py-2">
      <div className="flex justify-between mb-4 gap-32 max-md:flex-col max-md:gap-8">
      <div className="flex gap-24 max-md:gap-16 ">
        <div>
          <h6 className="text-xl font-medium max-lg:text-lg">Categories</h6>
          <ul className="mt-4 flex flex-col gap-1">
            {CATEGORIES.map((category, index) => (
              <li key={index} className="text-lg max-lg:text-base text-gray-600 hover:text-primary">
                <Link href={category.link}>{category.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="text-xl font-medium max-lg:text-lg">Links</h6>
          <ul className="mt-4 flex flex-col gap-1">
            {LINKS.map((link, index) => (
              <li key={index}  className="text-lg max-lg:text-base text-gray-600 hover:text-primary">
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex gap-16 max-lg:flex-col max-lg:gap-6 max-sm:gap-4 ">
        <div >
          <h6 className="text-xl font-medium max-lg:text-lg">About</h6>
          <p className=" max-w-[300px] text-base mt-4 max-lg:mt-2 max-md:max-w-[90%] text-gray-600 max-sm:mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sequi, placeat animi nisi fugiat provident consequatur ullam. </p>
        </div>

        <div>
          <h6 className="text-xl font-medium max-lg:text-lg ">Contact</h6>
          <p className=" max-w-[300px] text-base mt-4 max-lg:mt-2 text-gray-600 max-sm:mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
      </div>

      <div className="flex justify-between items-center max-sm:flex-col">
        <div className="flex gap-4">
        <h6>Logo</h6>
        <p className="text-gray-600">Made By Lokesh singh</p>
        </div>
        <div className="flex gap-4">
          <Image src="/stripe-4.svg" alt="stripe icon" className="max-sm:w-[44px]" width={60} height={60} />
          <Image src="/visa.svg" alt="visa icon" className="max-sm:w-[44px]" width={60} height={60} />
          <Image src="/mastercard-4.svg" alt="mastercard icon" className="max-sm:w-[44px]" width={60} height={60} />
          <Image src="/paypal-3.svg" alt="paypal icon" className="max-sm:w-[44px]" width={60} height={60} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
