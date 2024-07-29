import offer from '../assets/images/offer.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
import { Button } from '../Components/Button'

export const SpecialOffers = () => {
  return (
   <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container lg:p-4">
        <div className="flex-1">
           <img src={offer} alt="Shoe Promotion" 
           width={773}
           height={687}
           className='object-contain w-full'/> 
        </div>
        <div className='flex flex-1 flex-col'>
            <h2 className='text-4xl font-palanquin '><span className='text-coral-red'>Special</span> Offer</h2>
            <p className='mt-4 info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p className='mt-6 info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <div className='mt-11 flex flex-wrap gap-10'>
               <Button label='Shop now' iconUrl={arrowRight}/> 

               <button className='bg-white border border-x-2 border-slate-gray text-slate-gray flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full transition-all duration-500
               hover:scale-125 hover:underline hover:bg-coral-red hover:text-white hover:border-white'>Learn More</button>
            </div>
        </div>
   </section>
  )
}


