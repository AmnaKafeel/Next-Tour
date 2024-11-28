import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('./khapluvalley.jpg')" }}>
  {/* Dark overlay for better text visibility */}
  <div className="absolute inset-0 bg-black opacity-60"></div>

  {/* Text and button overlay */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-white text-5xl font-extrabold mb-4 drop-shadow-lg">
    Let&apos;s go to Pakistan Tour
    </h1>
    <p className="text-white text-2xl mb-8 max-w-lg drop-shadow-md">
      Discover amazing places with us and experience the beauty of Pakistan!
    </p>
    {/* Book Tour Button */}
   
<Link href="/Form">

      <button className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg" >
       <p> Book a Tour </p>
      </button>
    </Link>
  </div>
</div>

  

    </div>
  )
}

export default Home
