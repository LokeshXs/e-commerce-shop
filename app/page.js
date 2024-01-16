import CategoriesGrid from '@/components/CategoriesGrid/CategoriesGrid'
import ShowcaseProducts from '@/components/ShowcaseProducts/ShowcaseProducts'
import Slider from '@/components/Slider/Slider'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Facebook , Instagram,Twitter,Youtube } from 'lucide-react';


export default function Home() {
  return (
    <main>
    <Slider />
    <ShowcaseProducts title="Featured Products" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia explicabo ea impedit sequi debitis maiores cum nisi ipsum quas sunt." />
    <CategoriesGrid />
    <ShowcaseProducts title="Trending Products" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia explicabo ea impedit sequi debitis maiores cum nisi ipsum quas sunt." />

    <div className='mt-28 px-24 max-lg:px-8 max-sm:px-2 bg-teal-500 py-4 flex justify-between items-center max-lg:flex-col max-lg:gap-8'>
      <div className='flex items-center gap-12 max-sm:flex-col max-sm:gap-2' >
        <p className='text-lg text-white font-medium text-nowrap min-w-[170px]'>Be In Touch with Us</p>
        <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" className=" bg-white" />
      <Button type="submit">Subscribe</Button>
    
    </div>
      </div>

      <div className='flex gap-6 '>
<Facebook className=' w-7 h-7 text-white cursor-pointer' />
<Instagram className=' w-7 h-7 text-white cursor-pointer'/>
<Twitter className=' w-7 h-7 text-white cursor-pointer'/>
<Youtube className=' w-7 h-7 text-white cursor-pointer'/>
      </div>
    </div>
    </main>
  )
}
