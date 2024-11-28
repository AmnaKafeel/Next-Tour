import React from 'react'
import Image from 'next/image'


const Contact = () => {
  return (
<>
    <div className="flex items-center justify-between h-14 w-full px-4 sm:px-6 md:px-8 lg:px-10 mt-5">
    <div className="flex items-center space-x-0 ">
      <Image src="/newlogo.png" alt="logo" height={80} width={80} />
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-sans mt-5">
        Next Tour
      </h3>
    </div>
  </div>

    <div className="p-5 flex flex-col justify-center items-center min-h-screen container mx-auto mt-8">
    <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6">
        Contact Us for Your Dream Vacation
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
        At Next Tour, we're here to make your travel dreams come true. Whether you're looking for a relaxing getaway, an adventurous expedition, or a cultural exploration, our team is ready to help you plan the perfect itinerary. If you have any questions, need personalized recommendations, or want to get started on your next journey, don't hesitate to reach out. We're here to assist with all your travel needs and ensure you have an unforgettable experience. Get in touch with us today, and let us help you create memories that will last a lifetime!
      </p>
    </div>
  {/* whatsapp */}


    <div className="fixed bottom-6 right-6 z-50">
  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="relative">
    {/* Ribbon */}
    <div className="absolute top-0 left-0 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-br-lg">
      +123 456 7890
    </div>

   
    <div className=" text-white p-4 rounded-full shadow-lg hover:bg-green-400 transition-all">
      <Image src="/whatsapplogo.png" alt="WhatsApp Logo" height={100} width={100} /> 
      
     <i className="fab fa-whatsapp text-3xl"></i>
    </div>
    
  </a>
</div>
</div>
</>
  )
}

export default Contact
