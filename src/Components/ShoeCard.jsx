import React from "react"
import bigShoe2 from '../assets/images/big-shoe2.png'
import bigShoe1 from '../assets/images/big-shoe1.png'
import bigShoe3 from '../assets/images/big-shoe3.png'

export const ShoeCard = ({imgUrl,changeBigShoeImage,bigShoeImage}) => {
    const handClick = () =>{
        if(bigShoeImage !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
  return (
    <div className={`border-2
     rounded-xl w-20 h-20
        ${bigShoeImage === imgUrl ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1
     `}
        onClick={handClick}
     >
       <div className="flex justify-center items-center gap-7 sm:w-40 sm:h-40  max-sm:p-4">
       <img src={bigShoe2} alt="" className="bg-card bg-center bg-cover rounded-xl"/>
       <img src={bigShoe1} alt="" className="bg-card bg-center bg-cover rounded-xl"/>
       <img src={bigShoe3} alt="" className="bg-card bg-center bg-cover rounded-xl"/>
      </div>
      
    </div>
  )
}

 
