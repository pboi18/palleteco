import Head from 'next/head'
import Image from 'next/image'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Benefits from './component/Benefits'
import Team from './component/Team'
import DiscoverListings from './component/DiscoverListings'


export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Palleteco</title>
        <meta name="description" content="Palleteco" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Navbar />
      <Hero />
      <Benefits />
      <Team />
      <DiscoverListings />
    
    </div>
  )
}