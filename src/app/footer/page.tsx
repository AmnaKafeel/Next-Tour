import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-8">
    <div className="container mx-auto px-6">
      {/* Footer Top Section */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Tourism Website</h2>
          <p className="text-sm mt-2">
            Discover the best tours and adventures around the world.
          </p>
          </div>
          </div>
</div>

    <div>
       {/* Footer Bottom Section */}
       <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Tourism Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
   
