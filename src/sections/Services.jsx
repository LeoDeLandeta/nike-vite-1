import { ServiceCard } from "../Components/ServiceCard"

import truckFast from '../assets/icons/truck-fast.svg'
import shieldTick from '../assets/icons/shield-tick.svg'
import support from '../assets/icons/support.svg'

export const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9
    lg:p-4">
        <ServiceCard 
            imgUrl={truckFast}
            label= "Free shipping"
             subtext= "Enjoy seamless shopping with our complimentary shipping service."
            />
         <ServiceCard 
            imgUrl={shieldTick}
            label= "Secure Payment"
            subtext= "Experience worry-free transactions with our secure payment options."
            />
        <ServiceCard 
            imgUrl={support}
            label="Love to help you"
             subtext= "Our dedicated team is here to assist you every step of the way."
            />
    </section>
  )
}


