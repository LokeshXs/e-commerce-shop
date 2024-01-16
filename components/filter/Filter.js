"use client";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { Filter, X } from "lucide-react";

const FilterPanel = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <>
      <div
        className="max-sm:fixed max-sm:block hidden max-sm:top-[128px] z-10 p-2 bg-white shadow-md rounded-xl cursor-pointer"
        onClick={() => setFilterOpen(true)}
      >
        <Filter />
      </div>
      <aside
        className={` p-6  w-[340px] max-lg:w-[290px] max-h-screen sticky top-0 flex flex-col gap-8 max-sm:fixed max-sm:top-[120px] z-10  bg-white overflow-y-auto rounded-r-xl transition-all duration-500 ${
          filterOpen ? "max-sm:p-2" : "max-sm:w-0 max-sm:p-0"
        } `}
      >
        <div
          className="max-sm:block hidden  p-2 bg-white shadow-md rounded-xl cursor-pointer self-start "
          onClick={() => setFilterOpen(false)}
        >
          <X />
        </div>
        <div>
          <h6 className="text-2xl max-sm:text-xl font-semibold mb-3">
            Sort by
          </h6>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <label htmlFor="r1">Default</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <label htmlFor="r2">Comfortable</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <label htmlFor="r3">Compact</label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <h6 className="text-2xl max-sm:text-xl font-semibold mb-3">
            Product Categories
          </h6>
          <div>
            <Checkbox id="hat" />
            <label htmlFor="hat" className="ml-2">
              Hat
            </label>
          </div>
          <div>
            <Checkbox id="tShirt" />
            <label htmlFor="tShirt" className="ml-2">
              T-Shirt
            </label>
          </div>
        </div>
        <div>
          <h6 className="text-2xl max-sm:text-xl font-semibold mb-3">
            Filter By Price
          </h6>
          <Slider defaultValue={[50]} max={10000} step={1} className="" />
        </div>
      </aside>
    </>
  );
};

export default FilterPanel;
