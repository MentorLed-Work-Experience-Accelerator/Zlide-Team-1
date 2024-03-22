import React from 'react'

const LoginIssueModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
        <div className="LoginIssueModal bg-white p-8  rounded-lg shadow-lg w-[584px]">
        <h1 className="font-semibold text-center text-xl text-[#1F1053]">Message Sent!
        </h1>
        <p className=" p-2 text-center text-gray-700 text-base font-light">Your message has been sent, you will get a response within 24 hours.</p>

          <button onClick={onClose} className="mt-4 bg-[#FFC720] w-full hover:bg-blue-700 font-normal py-4 px-8 rounded">Go to homepage</button>
        </div>
      </div>
    );
  };


export default LoginIssueModal;