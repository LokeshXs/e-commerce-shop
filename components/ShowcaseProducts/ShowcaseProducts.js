import React from 'react'
import ProductCard from './ProductCard'

const ShowcaseProducts = ({title,description}) => {
  return (
    <section className=' mt-28 px-24 max-lg:px-16 max-sm:px-6'>
      <div className='flex justify-between items-center gap-8 max-md:gap-4 max-lg:flex-col '>
      <h2 className='text-4xl font-semibold max-md:text-3xl'>{title}</h2>
      <p className=' max-w-[600px] max-xl:max-w-[420px] max-lg:max-w-[90%] max-lg:text-center max-sm:max-w-full'>{description}</p>
      </div>

      <div className=' mt-16 max-md:mt-10 flex justify-center gap-12 max-lg:flex-col max-lg:gap-16 '>
        <div className='flex justify-center gap-10 max-lg:gap-20 max-sm:flex-col max-sm:items-center max-sm:gap-10'>
        <ProductCard title="Long Sleeve Graphic T-shirt " price={20} discount={30} image="/product-1.webp"/>
        <ProductCard  title="Coat" price={50} discount={15} image="/product-2.webp"/>
        </div>
        <div className='flex justify-center gap-12 max-lg:gap-20 max-sm:flex-col max-sm:items-center max-sm:gap-10'>
        <ProductCard  title="Skirt" price={30} discount={10} image="/product-3.webp"/>
        <ProductCard  title="Hat" price={10} discount={10} image="/product-4.webp"/>
        </div>

      </div>
    </section>
  )
}

export default ShowcaseProducts