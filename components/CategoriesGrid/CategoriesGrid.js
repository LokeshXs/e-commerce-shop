'use client';
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  {
    title: "SALE",
    image: "/category-1.webp",
  },
  {
    title: "NEW SEASON",
    image: "/category-2.webp",
  },
  {
    title: "MEN",
    image: "/category-3.webp",
  },
  {
    title: "ACCESSORIES",
    image: "/category-4.webp",
  },
  {
    title: "WOMEN",
    image: "/category-5.webp",
  },
  {
    title: "SHOES",
    image: "/category-6.webp",
  },
];

const CategoriesGrid = () => {
  const router = useRouter()
  return (
    <section className=" mt-28 grid grid-cols-4 grid-rows-[repeat(2,minmax(0,300px))] max-xl:grid-rows-[repeat(2,minmax(0,220px))] max-lg:grid-rows-[repeat(2,minmax(0,160px))] max-md:grid-cols-2 max-md:grid-rows-[repeat(4,minmax(0,160px))] gap-2 px-2">
      {CATEGORIES.map((category, index) => (
        <div
          key={index}
          className={`relative overflow-hidden ${index == 1 && "row-span-2"} ${
            index == 5 && "col-span-2"
          }`}
        >
          <Image src={category.image} alt="category" fill className=" object-cover object-center hover:scale-125 transition-all duration-1000" />
          <Button className=' absolute max-lg:text-xs left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md bg-white text-primary hover:bg-[#eeeeee] ' onClick={()=>{
              router.push('/products');
          }}>
            {category.title}
          </Button>
        </div>
      ))}
    </section>
  );
};

export default CategoriesGrid;
