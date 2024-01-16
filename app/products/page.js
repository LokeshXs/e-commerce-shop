import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ProductCard from "@/components/ShowcaseProducts/ProductCard";
import FilterPanel from "@/components/filter/Filter";

const productsArray = Array.from(Array(10).keys());
console.log(productsArray);

const ProductsList = () => {
  return (
    <main className="flex items-start relative">
      <FilterPanel />

      <section className=" p-6 flex-1 ">
        <div className="w-full h-[300px]  relative rounded-xl overflow-hidden">
          <Image
            src="/category-1.webp"
            alt="category"
            fill
            className=" object-cover object-center"
          />
        </div>
        <div className=" flex gap-8 flex-wrap justify-start mt-24 max-sm:gap-4 max-sm:justify-center">
          {productsArray.map(
            (item) => (
              <ProductCard
                key={item}
                title="Long Sleeve Graphic T-shirt "
                price={20}
                discount={30}
                image="/product-1.webp"
              />
            ),
            []
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductsList;
