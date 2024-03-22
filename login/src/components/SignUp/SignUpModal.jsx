import React from 'react'

const SignUpModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
        <div className="SignupModal bg-white p-8  rounded-lg shadow-lg w-[584px]">
        <h1 className="font-semibold text-center text-xl text-[#1F1053]">Email Sent
        </h1>
        <p className=" p-2 text-center text-gray-700 text-base font-light">We have sent an email to user@gmail.com with a link to authenticate your account</p>

          <button onClick={onClose} className="mt-4 bg-[#FFC720] w-full hover:bg-blue-700 font-normal py-4 px-8 rounded">Close</button>
        </div>
      </div>
    );
  };


export default SignUpModal