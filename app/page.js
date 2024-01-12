import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts'
import Slider from '@/components/Slider/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
    <Slider />
    {/* <Image src="/slide-1.webp" alt='anthing' width={400} height={400} /> */}
    <FeaturedProducts />
    </main>
  )
}
