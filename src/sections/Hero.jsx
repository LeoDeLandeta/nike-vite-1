
import { Button } from "../Components/Button"
import { ShoeCard } from "../Components/ShoeCard"

import { useState } from "react"
import arrowright from '../assets/icons/arrow-right.svg'

import bigShoe1 from '../assets/images/big-shoe1.png'
import bigShoe2 from '../assets/images/big-shoe2.png'



export const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen p-4  ">
        <div className="relative xl:w2/5 flex flex-col justify-center items-start w-full max-xl:padding-x">
           <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
           <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[30px] ">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike </span>
              Shoes
           </h1>
           <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort and innovation for you active life.</p>
            
           <Button label='shop now' iconUrl={arrowright} />

           <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
               <div>
                <p className="text-4xl text-black font-palanquin font-bold">1k+</p>
                <p className="leading-7 font-montserrat text-slate-gray">Brands</p>
               </div> 
               <div>
                <p className="text-4xl text-black font-palanquin font-bold">500+</p>
                <p className="leading-7 font-montserrat text-slate-gray">Shops</p>
               </div>
               <div>
                <p className="text-4xl text-black font-palanquin font-bold">250k+</p>
                <p className="leading-7 font-montserrat text-slate-gray">Customers</p>
               </div>
           </div>
        </div>

        <div className="relative  flex justify-center items-center bg-white bg-hero bg-cover bg-center xl:w-[1900px]">
            <img src={bigShoe1} 
            width={610}
            height={500}
            alt="" 
            className="object-contain relative z-10"/>
            <div className="mr-32">
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%]
                left-[30%] sm:left-[17%] max-sm:px-6">
                    <ShoeCard
                    imgURL={bigShoe2}
                    changeBigShoeImage={()=>{}}
                    bigShoeImg=""
                    
                    />
                </div>
            </div>
        </div>
    </section>
  )
}


