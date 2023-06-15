import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full flex justify-center items-center h-screen '>
        <div className='flex  justify-between w-3/4' >
            <div className='w-3/5 flex flex-col justify-between'>
                <div>
                    <h2 className='font-bold text-4xl leading-tight'>
                        A Digital Marketplace that Enables the <span className='hero-lgreen'>Buying & Selling</span> of pallets globally.
                    </h2>
                    <p className='leading-snug font-normal mt-4'>
                        Our online marketplace simplifies pallet trading worldwide. Browse, compare, and transact securely in a few clicks. Join us in revolutionizing the industry by saving time and money for all.
                    </p>
                    <div className='mt-5'>
                        <button className='px-12 py-2 border mr-4 rounded border-green-900 text-green-900 font-bold hover:text-white hover:bg-green-900'>Sell</button>

                        <button className='px-12 py-2 border rounded border-green-900 text-green-900 font-bold hover:text-white hover:bg-green-900'>Buy</button>
                    </div>
                </div>

                
                
                <div>
                    <Image src='/Group.svg' alt='Trusted Customers' width={100} height={100}/>
                    <Link href='/' className='font-bold decoration-solid underline text-gray-600'>Trusted by 5,000+ Customers</Link>
                </div>

            </div>

            <div className='w-1/3'>
                <Image src="/Hero Image.svg" alt="Hero Image" width={500} height={500}/>
            </div>
            
        </div>
        
    </div>
  )
}

export default Hero