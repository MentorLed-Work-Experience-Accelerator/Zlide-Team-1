import React from 'react'
import { IoMdEyeOff } from 'react-icons/io'
import ResetModal from './ResetModal';
import { useState } from 'react';


const Reset = () => {

  // const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your authentication logic here
  //   console.log('Password:', password);
  // };

  
  const [isResetSuccessful, setResetSuccessful] = useState(false);
  
  const handleResetSuccess = () => {
    setResetSuccessful(true);
  };

  const closeResetModal = () => {
    setResetSuccessful(false);
  };


  return (
    <>
    <ResetModal isOpen={isResetSuccessful} onClose={closeResetModal} />
    <div className="bg-neutral-700 items-center justify-center">
    <div className="head">
      <div className="px-6 py-8 m-auto max-w-[700px] w-full">
    <h2 className="text-3xl tracking-wider text-white font-primaryMedium p-6">Reset Password</h2>
      <div className="p-6 gap-4">
        <form className="flex flex-col gap-4">
    
          <label className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">New Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={password} onChange={(e) => setPassword(e.target.value)} 
          />
                    <p className="text-[#FF7D7D] text-sm">Password must contain uppercase letters special character and number</p>
          </div>

          <label className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">Confirm Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={password} onChange={(e) => setPassword(e.target.value)} 
          />
          </div>
          
          <button onClick={handleResetSuccess} className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Reset Password</button>

          <div className="text-white text-sm text-center font-primaryThin tracking-widest">Don't Have An Account?<a href="#" className="create font-primaryRegular"> Create Account</a></div>
        </form>
      <div className="grid gap-2 mt-4 place-content-center">
      <div className="grid grid-flow-col items-center">
        <hr className="border-gray-400"/>
        <p class="text-center text-sm text-white">OR</p>
        <hr className="border-gray-400"/>
      </div>
      <div className="text-white flex gap-2 items-center font-primaryThin text-[15px]">Login with <a href="#"><img src="/src/images/google.png" alt="google" width={70} height={70} className='items-center' /></a></div>
      </div>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Reset;
