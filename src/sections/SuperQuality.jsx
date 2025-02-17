import Shoe8 from '../assets/images/shoe8.svg'
import arrowright from '../assets/icons/arrow-right.svg'
import { Button } from '../Components/Button'

export const SuperQuality = () => {
  return (
    <section
    id='about' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container p-4'>
       <div className='flex flex-1 flex-col'>
            <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>We Provide You
                <span className='text-coral-red'>Super</span>
                <span className='text-coral-red'>Quality</span>
            </h2>
            <p className='mt-4 lg:max-w-lg info-text'> Ensuring premium comfort and style, our meticulously crafted footwear  is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
            <p className='mt-4 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satifaction</p>
            <div className='mt-11'>
                <Button label='View details ' iconUrl={arrowright} />
            </div>
       </div>

       <div className='flex-1 flex justify-center items-center'>
        <img src={Shoe8} alt="product detail"
        width={570}
        height={522} 
        className='object-contain'
        />
       </div>
    </section>
  )
}


