import React from 'react'
import Image from 'next/image'

const MyCards = () => {
  return (
    <div className='flex justify-center items-center min-h-screen container mx-auto mt-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        {/* <!-- Card 1--> */}
        <div className="card">
            <div className="p-5 flex flex-col">
                <div className=" rounded-xl overflow-hidden">
                    <Image src="/card2.webp" alt="Card" height={500} width={500} />

                </div>
                <h3 className="text-2xl md:text-3xl font-medium mt-3">Explore Stunning Destinations</h3>
                <p className='text-slate-500 text-lg mt-3'> Discover breathtaking destinations that offer rich culture, beautiful landscapes, and unforgettable experiences. Whether you&apos;re seeking peace in nature, adventure in the mountains, or a dip in turquoise waters, find the perfect spot for your next getaway.</p>
                <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Destination Highlights</a>

            </div>
        </div>

        {/* Card 2 */}

        <div className="card">
            <div className="p-5 flex flex-col">
                <div className=" rounded-xl overflow-hidden">
                    <Image src="/AdventureCard.jpg" alt="Card" height={800} width={500} />

                </div>
                <h3 className="text-2xl md:text-3xl font-medium mt-3">Thrilling Adventures Await</h3>
                <p className='text-slate-500 text-lg mt-3'> Unleash your adventurous spirit with exciting activities like hiking, snorkeling, safaris, or thrilling water sports. Our tours are designed to offer heart-pumping experiences that will make your vacation truly memorable.</p>
                <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Adventure & Activities</a>

            </div>
        </div>

         {/* Card 3 */}

         <div className="card">
            <div className="p-5 flex flex-col">
                <div className=" rounded-xl overflow-hidden">
                    <Image src="/CultureCard.webp" alt="Card" height={500} width={500} />

                </div>
                <h3 className="text-2xl md:text-3xl font-medium mt-3">Dive Into Local Culture</h3>
                <p className='text-slate-500 text-lg mt-3'> Immerse yourself in the local culture with guided tours, traditional festivals, and authentic culinary experiences. Explore historical landmarks, meet the locals, and learn about the traditions that make each destination unique.</p>
                <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Cultural Experiences</a>

            </div>
        </div>

           {/* Card 4 */}

          <div className="card">
            <div className="p-5 flex flex-col">
                <div className=" rounded-xl overflow-hidden">
                    <Image src="/luxusCard.jpg" alt="Card" height={500} width={500} />

                </div>
                <h3 className="text-2xl md:text-3xl font-medium mt-3">Indulge in Luxury</h3>
                <p className='text-slate-500 text-lg mt-3'>  Treat yourself to the ultimate relaxation with our luxurious vacation packages. Stay at world-class resorts, indulge in fine dining, and enjoy exclusive experiences that cater to your every need for a truly lavish holiday.</p>
                <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Luxury Escapes</a>

            </div>
        </div>

           {/* Card 5 */}

           <div className="card">
            <div className="p-5 flex flex-col">
                <div className=" rounded-xl overflow-hidden">
                    <Image src="/familyCrd.png" alt="Card" height={500} width={500} />

                </div>
                <h3 className="text-2xl md:text-3xl font-medium mt-3">Perfect for Family Fun</h3>
                <p className='text-slate-500 text-lg mt-3'> Plan a fun-filled family vacation with activities and accommodations that cater to all ages. From theme parks to wildlife safaris, we have the perfect family-friendly destinations and experiences for unforgettable memories.</p>
                <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Family-Friendly Getaways</a>

            </div>
        </div>

           {/* Card 6 */}

           <div className="card">
            <div className="p-5 flex flex-col">
                <div className=" rounded-xl overflow-hidden">
                    <Image src="/romicCard.webp" alt="Card" height={500} width={500} />

                </div>
                <h3 className="text-2xl md:text-3xl font-medium mt-3">Escape for a Romantic Getaway</h3>
                <p className='text-slate-500 text-lg mt-3'> Whether it&apos;s a honeymoon, anniversary, or a special weekend escape, our romantic retreats offer intimate experiences with breathtaking views, private dinners, and serene surroundings—perfect for celebrating love.</p>
                <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Romantic Retreats</a>

            </div>
        </div>
        
        
           {/* Card 7 */}

           <div className="card">
            <div className="p-5 flex flex-col">
                <div className=" rounded-xl overflow-hidden">
                    <Image src="/season.jpg" alt="Card" height={500} width={500} />

                </div>
                <h3 className="text-2xl md:text-3xl font-medium mt-3">Special Seasonal Offers</h3>
                <p className='text-slate-500 text-lg mt-3'> Take advantage of exclusive seasonal discounts and offers on tours and packages. Plan your dream vacation without breaking the bank, and experience the best of what the season has to offer.</p>
                <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Seasonal Deals</a>

            </div>
        </div>

        
           {/* Card 8 */}

           <div className="card">
            <div className="p-5 flex flex-col">
                <div className=" rounded-xl overflow-hidden">
                    <Image src="/guideCard.jpg" alt="Card" height={300} width={500} />

                </div>
                <h3 className="text-2xl md:text-3xl font-medium mt-3">Expert Travel Tips</h3>
                <p className='text-slate-500 text-lg mt-3'> Make the most of your travels with our expert tips and guides. From packing essentials to local insights, our resources will help you prepare for a smooth, hassle-free journey.</p>
                <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>Travel Tips & Guides</a>

            </div>
        </div>

      </div>
    </div>
  )
}

export default MyCards
