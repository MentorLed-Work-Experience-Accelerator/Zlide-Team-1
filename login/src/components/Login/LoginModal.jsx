import React from 'react'

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="loginModal bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold">Sign up successful!</h2>
        <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default LoginModal;