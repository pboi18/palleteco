import React from 'react'
import Image from 'next/image'


const Team = () => {
  return (
    <div className='w-full h-screen flex justify-center'>
        <div className='w-4/5 mt-10 mb-10'>
            <div className='flex flex-col items-center justify-center mb-10'>
                <h2 className='font-bold text-2xl leading-relaxed'>How it works</h2>
                <p className='text-gray-600 w-2/3 flex justify-center text-center'>By using our marketplace, you can save time, access a wide selection of pallets, and enjoy a reliable and efficient way to buy and sell pallets.</p>
            </div>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
              <div className='flex flex-col row-span-3 ... bg-white hover:shadow'>
                
                <div className='flex justify-center bg-grad1 pt-10 rounded-t-lg'>
                  <div className='flex flex-col w-3/5 items-center bg-white rounded-t-lg pt-4'>
                    <div>
                    <Image src='./search.svg' alt='Profile Picture' width={50} height={50} className='rounded-full shadow mb-14'/>
                    </div>
                    
                    <div className='mt-5'>
                        <button className='mb-2 px-6 py-1 border rounded border-black text-black font-bold hover:text-white hover:bg-black text-sm '>
                        Create account
                        </button>
                    </div>
                  </div>
                </div>
                <div className='w-11/12 self-center'>
                  <h2 className='font-bold text-md mt-4'>Sign Up</h2>
                  <p className='text-gray-600 text-sm'>First, you&apos;ll need to sign up for an account on our website. This is a quick and easy process that only takes a few minutes.</p>
                  <div className='mt-5'>
                        <button className='mb-8 px-7 py-2 border mt-4 rounded border-green-900 text-green-900 font-bold hover:text-white hover:bg-green-900'>Sign Up</button>
                    </div>
               </div>
              </div>
              <div className='flex flex-col row-span-3 ... bg-white hover:shadow'>
                
                <div className='flex justify-center bg-grad2 pt-10 rounded-t-lg'>
                  <div className='flex flex-col w-3/5 items-center bg-white rounded-t-lg pt-4'>
                    <div>
                    <Image src='./search.svg' alt='Profile Picture' width={50} height={50} className='rounded-full shadow mb-14'/>
                    </div>
                    
                    <div className='mt-5'>
                        <button className='mb-2 px-6 py-1 border rounded border-black text-black font-bold hover:text-white hover:bg-black text-sm '>
                        Create account
                        </button>
                    </div>
                  </div>
                </div>
                <div className='w-11/12 self-center'>
                  <h2 className='font-bold text-md mt-4'>Browse and search</h2>
                  <p className='text-gray-600 text-sm'>Once you&apos;re signed up, you can start browsing and searching for pallets that meet your needs. You can filter your search results by pallet type, size, location, </p>
                  <div className='mt-5'>
                        <button className='mb-8  px-7 py-2 border rounded border-green-900 text-green-900 font-bold hover:text-white hover:bg-green-900'>Browse</button>
                    </div>
               </div>
                </div>
                <div className='flex flex-col row-span-3 ... bg-white hover:shadow'>
                
                <div className='flex justify-center bg-grad3 pt-10 rounded-t-lg'>
                  <div className='flex flex-col w-3/5 items-center bg-white rounded-t-lg pt-4'>
                    <div>
                    <Image src='./search.svg' alt='Profile Picture' width={50} height={50} className='rounded-full shadow mb-14'/>
                    </div>
                    
                    <div className='mt-5'>
                        <button className='mb-2 px-6 py-1 border rounded border-black text-black font-bold hover:text-white hover:bg-black text-sm '>
                        Create account
                        </button>
                    </div>
                  </div>
                </div>
                <div className='w-11/12 self-center'>
                  <h2 className='font-bold text-md mt-4'>Buy and Sell</h2>
                  <p className='text-gray-600 text-sm'>If you are looking to buy pallets,you can purchase a pallet directly from the seller.If you are a seller, you can list your pallets for sale and respond to buyers offers.</p>
                  <div className='mt-5'>
                        <button className='mb-8 px-7 py-2 border rounded border-green-900 text-green-900 font-bold hover:text-white hover:bg-green-900'>Start Buying</button>
                    </div>
               </div>
                </div>

               

            </div>
        </div>
    </div>
  )
}

export default Team