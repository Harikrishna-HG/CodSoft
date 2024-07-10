import React from 'react';

function Footer() {
  return (
    <>
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left section with logo or site name */}
        <div className="mb-4 md:mb-0 md:ml-6">
          <h1 className="text-lg font-extrabold">Job Portal</h1>
          <p className="text-sm">Connecting job seekers and employers</p>
        </div>

        {/* Center section with navigation links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-3">
            <li>
              <a href="#" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Jobs</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Blog</a>
            </li>
          </ul>
        </nav>

        {/* Right section with contact information */}
        <div className='md:mr-4'>
          <p className="text-sm mb-2 font-bold md:text-lg">Contact Us:</p>
          <p className="text-sm">10800 Job Portal Ave, MNR, Nepal</p>
          <p className="text-sm">Email: contact@jobportal.com</p>
        </div>
      </div>
    
    </footer>
    <div className=" bg-gray-800 text-gray-100 py-1">
        <div className="container mx-auto text-center">
          <p className="text-sm">Find your dream job today!</p>
          <p className="text-sm">© 2024 Job Portal. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
