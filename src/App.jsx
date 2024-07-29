import { useState } from 'react'

import './App.css'
import { CustomerReviews } from './sections/CustomerReviews'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { PopularProducts } from './sections/PopularProducts'
import { Services } from './sections/Services'
import { SpecialOffers } from './sections/SpecialOffers'
import { Subscribe } from './sections/Subscribe'
import { SuperQuality } from './sections/SuperQuality'
import { Nav } from './Components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-1 wide:padding-r padding-b pt-[150px]'>
       <Hero/>
      </section>
      <section className='padding mt-32'>
      < PopularProducts/>
      </section>
      <section className='padding '>
        < SuperQuality />
      </section>
      <section className='padding-x py-10'>
        < Services/>
      </section>
      <section className='padding'>
        <SpecialOffers />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='bg-black padding-x padding-t pb-8 '>
        < Footer />
      </section>
    </main>
  )
}

export default App
