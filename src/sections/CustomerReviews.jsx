import { ReviewCards } from "../Components/ReviewCards"

import customer1 from '../assets/images/customer1.jpeg'
import customer2 from '../assets/images/customer2.svg'


export const CustomerReviews = () => {
  return (
    <section className="p-4">
        <h3 className="font-palanquin  text-center text-4xl font-bold">What Our <span className="text-coral-red">Customers</span> Say?</h3>
        <p className="m-auto mt-4 max-w-lg text-center info-text">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
            < ReviewCards 
               imgUrl={customer1} 
               customerName='Morich Brown'
               rating='4.5'
               feedback='The attention to detail and the quality of the product exceeded my expectations. Highly recommended!'/>
             < ReviewCards 
               imgUrl={customer2} 
               customerName='Lota Mongeskar'
               rating='4.5'
               feedback='The attention to detail and the quality of the product exceeded my expectations. Highly recommended!'/>
        </div>
    </section>
  )
}

 
