import React from 'react';
import { Link } from 'react-router-dom';


function Contact() {

  return (
     
    <div className="flex items-center justify-center min-h-screen">
      <div className="align-middle p-6  shadow-md rounded-md">
        <h3 className="font-bold text-lg text-center">Contact</h3>
        
        {/* Name */}
        <div className="mt-4 space-y-2">
          <label className="block">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </label>
        </div>
        <div className="mt-4 space-y-2">
          <label className="block">
            <span>Email</span>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </label>
        </div>
        
        {/* Message */}
        <div className="mt-4 space-y-2 ">
          <label className="block ">
            <span>Message</span>
            <input
              type="text"
              placeholder="Enter your message"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </label>
        </div>
        
        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 duration-200 ">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
