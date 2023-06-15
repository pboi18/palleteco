import React from 'react'
import Image from 'next/image'

const Benefits = () => {
  return (
    <div className='w-full h-screen flex justify-center'>
        <div className='w-4/5 mt-14'>
            <div className='flex flex-col items-center justify-center mb-14'>
                <h2 className='font-bold text-2xl leading-relaxed'>Our Benefit</h2>
                <p className='text-gray-600 w-1/3 flex justify-center text-center'>Discover the benefits of our online marketplace for buying and selling pallets.</p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
               <div className='... bg-white p-3 hover:shadow'>
                <Image src='./selection.svg' alt='Wide Selection' width={30} height={30} />
                <h2 className='font-bold text-lg mt-4'>Wide Selection</h2>
                <p className='text-gray-600'>Access to a vast selection of pallets from sellers around the world, providing you with the ability to find the perfect pallet for your needs.</p>
               </div>

               <div className='... bg-white p-3 hover:shadow'>
                <Image src='./pricing.svg' alt='Competitive Pricing' width={30} height={100}/>
                <h2 className='font-bold text-lg mt-4'>Competitive Pricing</h2>
                <p className='text-gray-600'>Marketplace&apos;s has competitive pricing structure, which enables you to save money on pallet purchases or earn more revenue on pallet sales.
                </p>
               </div>

               <div className='... bg-white p-3 hover:shadow'>
                <Image src='./secure.svg' alt='Secure Transactions' width={30} height={100}/>
                <h2 className='font-bold text-lg mt-4'>Secure Transactions</h2>
                <p className='text-gray-600'>Enjoy the peace of mind that comes with secure transactions, ensuring that your financial and personal data are kept safe.</p>
               </div>

               <div className='... bg-white p-3 hover:shadow'>
                <Image src='./customer-service.svg' alt='Reliable Customer Support' width={30} height={100}/>
                <h2 className='font-bold text-lg mt-4'>Reliable Customer Support</h2>
                <p className='text-gray-600'>Access to a responsive customer support team that is dedicated to helping you resolve any issues or answering any questions you may have.</p>
               </div>

               <div className='... bg-white p-3 hover:shadow'>
                <Image src='./time-saving.svg' alt='Time-Saving' width={30} height={100}/>
                <h2 className='font-bold text-lg mt-4'>Time-Saving</h2>
                <p className='text-gray-600'>Save time by eliminating the need to search for pallets through traditional channels, such as classified ads or personal networks.</p>
               </div>

               <div className='... bg-white p-3 hover:shadow'>
                <Image src='./eco-friendly.svg' alt='Eco-Friendly options' width={30} height={100}/>
                <h2 className='font-bold text-lg mt-4'>Eco-Friendly options</h2>
                <p className='text-gray-600'>Access to eco-friendly pallets that help to reduce your carbon footprint and contribute to a more sustainable future.</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits