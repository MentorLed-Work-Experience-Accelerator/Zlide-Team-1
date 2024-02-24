import React from 'react'
import { IoMdEyeOff } from 'react-icons/io'


const Password = () => {
  // const [email, setEmail] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your authentication logic here
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };

  return (
    <div className="bg-neutral-700 items-center justify-center">
    <div className="head">
      <div className="px-6 py-8 m-auto max-w-[700px] w-full">
    <h2 className="text-3xl tracking-wider text-white font-primaryMedium p-6">Forgot Password</h2>
      <div className="p-6 gap-4">
        <form className="flex flex-col gap-4">
          <label className="text-[17px] tracking-wider font-primaryRegular text-white px-2">Email</label>
          <input type="email" placeholder="Enter Work Email" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={email} onChange={(e) => setEmail(e.target.value)} 
          />
          <button className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Reset Password</button>

          <div className="text-white text-sm text-center font-primaryThin tracking-widest">Don't have an Account?<a href="#" className="create font-primaryRegular"> Create Account</a></div>
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
  );
};

export default Password;
