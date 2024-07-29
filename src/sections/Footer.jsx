
import copyrightSing from '../assets/icons/copyright-sign.svg'
import footerLogo from '../assets/images/footer-logo.svg'
import faceBook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'


export const Footer = () => {
  return (
    <footer className="max-container p-4">
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
              <img src={footerLogo} alt="logo" 
              width={150}
              height={46}
              className='m-0'
              />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8'>
            <div className='flex justify-center items-center bg-white w-12 h-12 rounded-full'>
                <img src={faceBook} alt="" />
            </div>
            <div className='flex justify-center items-center bg-white w-12 h-12 rounded-full'>
                <img src={twitter} alt="" />
            </div>
            <div className='flex justify-center items-center bg-white w-12 h-12 rounded-full'>
                <img src={instagram} alt="" />
            </div>
           
          </div>
          <div className='mt-8 flex flex-col lg:flex-row gap-16 m-24   '>
            <div className='flex flex-col '>
                  <h4 className='text-white text-4xl'>Products</h4>
                  
                  <ul className='flex flex-col items-center text-white gap-2 mt-3'>
                    <li>Air Force 1</li>
                    <li>Air Max 1</li>
                    <li>Air jordan 1</li>
                    <li>Air Force 2</li>
                    <li>Nike</li>
                    <li>Nike Cortez</li> 
                  </ul>
            </div>
             
          <div className='flex flex-col '>
                  <h4 className='text-white text-4xl'>Help</h4>
                  
                  <ul className='flex flex-col items-center text-white gap-2 mt-3'>
                    <li>About Us</li>
                    <li>Faqs</li>
                    <li>How it Works</li>
                    <li>Privacy policy</li>
                    <li>Payment policy</li>
                  </ul>
            </div>
            <div className='flex flex-col '>
                  <h4 className='text-white text-4xl'>Get in touch</h4>
                  
                  <ul className='flex flex-col items-center text-white gap-2 mt-3'>
                    <li>NikMilito.com</li>
                    <li>+1522016612</li>
                    
                  </ul>
              </div>
            </div>
         </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <img src={copyrightSing} alt="copy" 
            width={20}
            height={20}
            />
            <p>Copyright. All rights reserved.</p>
          </div>
       
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
    </footer>
  )
}


