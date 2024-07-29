import { PopularProductCard } from "../Components/PopularProductCard"

import Shoe4 from'../assets/images/shoe4.svg'
import Shoe5 from '../assets/images/shoe5.svg'
import Shoe6 from '../assets/images/shoe6.svg'
import Shoe7 from '../assets/images/shoe7.svg'

export const PopularProducts = () => {
  return (
    <section id="products" className="p-5">
      <div className="flex flex-col justify-center gap-5">
          <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red"> Popular</span> Products</h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">  Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        <PopularProductCard 
            id='01'
            imgUrl={Shoe4}
            name='Nike Air Jordan-01'
            price='$200.20'
            />
            <PopularProductCard 
            id='02'
            imgUrl={Shoe5}
            name='Nike Air Jordan-10'
            price='$210.20'
            />
            <PopularProductCard 
            id='01'
            imgUrl={Shoe6}
            name='Nike Air Jordan-100'
            price='$220.20'
            />
            <PopularProductCard 
            id='01'
            imgUrl={Shoe7}
            name='Nike Air Jordan-001'
            price='$230.20'
            />     
      </div>
    </section>
  )
}


