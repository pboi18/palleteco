import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center items-center drop-shadow-sm bg-white'>
        <div className='flex w-3/4 justify-between mt-2 mb-2'>
            <div className='flex justify-between w-1/2'>
                <ul>
                    <li>
                        <Link href='/'>
                            <Image src='/Logo.svg' alt='Palleteco Logo' width={150} height={100}/>
                        </Link>
                    </li>
                </ul>

                <ul className='flex content-center mt-2'>
                    <li>
                        <Link href='/' className='text-green-900 font-bold'>Home</Link>
                    </li>
                    <li className='ml-7'>
                        <Link href='/' className='text-black-300'>Browse listings</Link>
                    </li>
                </ul>
            </div>
            <div className='w-1/2 flex flex-row-reverse'>
                <button className='px-12 py-1 border rounded border-green-900 text-green-900 font-bold hover:text-white hover:bg-green-900'>Login</button>

                <button className='px-3 py-1 border rounded border-green-900 text-green-900 font-bold hover:text-white hover:bg-green-900 mr-5'>Create account</button>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
