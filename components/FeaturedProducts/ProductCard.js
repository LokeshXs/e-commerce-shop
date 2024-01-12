import Image from "next/image";
import React from "react";

const ProductCard = ({title,price,discount,image}) => {

  const discountedPrice = price - (discount/100)*price;

  return (
    <div>
      <div className=" w-[260px] max-xl:w-[220px] max-sm:w-[280px]  h-[360px] max-xl:h-[320px] max-sm:h-[380px]   relative overflow-hidden cursor-pointer rounded-lg">
        <Image
          src={image}
          alt="T-shirt"
          fill
          className="object-center object-cover  hover:scale-125 transition-all duration-1000"
        />
      </div>
      <div className="mt-2 w-full">
        <p className=" text-xl  max-w-64 max-xl:max-w-52  max-md:text-lg  ">{title}</p>
        <div className="flex gap-6 max-md:gap-4 text-lg max-md:text-base  font-medium mt-2 w-full">
          <p className="  text-gray-400 line-through ">{`$${price}`}</p>
          <p >{`$${discountedPrice}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
