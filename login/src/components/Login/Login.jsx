// import React from 'react'
// import './Login.css'
// import { IoMdEyeOff } from 'react-icons/io'
// import Modal from '../Modal';
// import { useState } from 'react'


// const Login = () => {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // Add your authentication logic here
//   //   console.log('Email:', email);
//   //   console.log('Password:', password);
//   // };

//   const [isLoginSuccessful, setLoginSuccessful] = useState(false);

//   // Function to handle successful sign up
//   const handleLoginSuccess = () => {
//     setLoginSuccessful(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setLoginSuccessful(false);
//   };

//   return (
//     <>
//     <div className="fixed top-0 left-0 z-40 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
//       {/* Modal for sign up success */}
//       <Modal isOpen={isLoginSuccessful} onClose={closeModal} />
//     </div>

//     <div className="bg-neutral-700 items-center justify-center">
//     <div className="head">
//       <div className="px-6 py-8 m-auto max-w-[700px] w-full">
//     <h2 className="text-3xl tracking-wider text-white font-primaryMedium p-6">Login</h2>
//       <div className="p-6 gap-4">
//         <form className="flex flex-col gap-4">
//           <label className="text-[17px] tracking-wider font-primaryRegular text-white px-2">Email</label>
//           <input type="email" placeholder="Enter Work Email" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
//           //  value={email} onChange={(e) => setEmail(e.target.value)} 
//           />
          
//           <label className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">Password</label>
//           <div className="relative">
//             <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
//           <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
//           //  value={password} onChange={(e) => setPassword(e.target.value)} 
//           />
//           </div>
//           <div className="flex justify-between items-center text-center">
            
//             <div className='ml-auto'>
//               <a href="#" className="pass font-primaryThin tracking-wider text-xs text-right">Forget Password?</a>
//             </div>
//           </div>

//           <button onClick={handleLoginSuccess} className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Sign in</button>

//           <div className="text-white text-sm text-center font-primaryThin tracking-widest">Don't have an Account?<a href="#" className="create font-primaryRegular"> Create Account</a></div>
//         </form>
//       <div className="grid gap-2 mt-4 place-content-center">
//       <div className="grid grid-flow-col items-center">
//         <hr className="border-gray-400"/>
//         <p class="text-center text-sm text-white">OR</p>
//         <hr className="border-gray-400"/>
//       </div>
//       <div className="text-white flex gap-2 items-center font-primaryThin text-[15px]">Login with <a href="#"><img src="/src/images/google.png" alt="google" width={70} height={70} className='items-center' /></a></div>
//       </div>
//       </div>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Login;



import React from 'react';
import './Login.css';
import { IoMdEyeOff } from 'react-icons/io';
import { useState } from 'react';
import LoginModal from './LoginModal';

const Login = () => {
  const [isLoginSuccessful, setLoginSuccessful] = useState(false);

  const handleLoginSuccess = () => {
    setLoginSuccessful(true);
  };

  const closeLoginModal = () => {
    setLoginSuccessful(false);
  };

  return (
    <>
        <LoginModal isOpen={isLoginSuccessful} onClose={closeLoginModal} />

      <div className="bg-neutral-700 items-center justify-center">
        <div className="head">
          <div className="px-6 py-8 m-auto max-w-[700px] w-full">
            <h2 className="text-3xl tracking-wider text-white font-primaryMedium p-6">Login</h2>
            <div className="p-6 gap-4">
              <form className="flex flex-col gap-4">
                <label className="text-[17px] tracking-wider font-primaryRegular text-white px-2">Email</label>
                <input type="email" placeholder="Enter Work Email" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base" />

                <label className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">Password</label>
                <div className="relative">
                  <IoMdEyeOff className='absolute top-[30%] left-[94%] items-center' fontSize={18} />
                  <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base" />
                </div>

                <div className="flex justify-between items-center text-center">
                  <div className='ml-auto'>
                    <a href="#" className="pass font-primaryThin tracking-wider text-xs text-right">Forget Password?</a>
                  </div>
                </div>

                <button onClick={handleLoginSuccess} className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Sign in</button>

                <div className="text-white text-sm text-center font-primaryThin tracking-widest">Don't have an Account?<a href="#" className="create font-primaryRegular"> Create Account</a></div>
              </form>
              <div className="grid gap-2 mt-4 place-content-center">
                <div className="grid grid-flow-col items-center">
                  <hr className="border-gray-400" />
                  <p className="text-center text-sm text-white">OR</p>
                  <hr className="border-gray-400" />
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

export default Login;
