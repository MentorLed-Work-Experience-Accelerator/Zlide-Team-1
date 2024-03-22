// import React from 'react'

// const Modal = () => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="font-semibold text-center text-xl text-[linear-gradient(90.47deg, #1F1053 12.95%, #0A1F79 49.12%, #5D05C8 87.71%)]">Email Sent
//         </h1>
//         <p className="text-center text-gray-700 text-base font-normal">We have sent an email to user@gmail.com with a link to reset your password</p>

//         <div className="flex flex-col">
          
          
//         </div>
//         <div className="text-center">
//         <button className="btn w-10/12 text-black rounded-lg py-4 font-primaryRegular">Okay</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Modal;


import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold">Sign up successful!</h2>
        <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default Modal;
