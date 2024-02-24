import React from 'react'
import './Login.css'
import { IoMdEyeOff } from 'react-icons/io'


const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

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
    <h2 className="text-4xl text-white font-medium p-6">Login</h2>
      <div className="p-6 gap-4">
        <form className="flex flex-col gap-4">
          <label className="text-xl text-white px-2">Email</label>
          <input type="email" placeholder="Enter Work Email" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={email} onChange={(e) => setEmail(e.target.value)} 
          />
          
          <label className="text-xl text-white px-2">Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={password} onChange={(e) => setPassword(e.target.value)} 
          />
          </div>
          <div className="flex justify-between items-center text-center">
            <div className=" flex items-center gap-1">
              <input type="checkbox" />
              <label className="text-xs text-white">Remember Me</label>
            </div>
            <div>
              <a href="#" className="pass font-semibold text-xs">Forget Password?</a>
            </div>
          </div>

          <button className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Sign in</button>

          <div className="text-white text-sm text-center font-primaryThin tracking-widest">Don't have an Account?<a href="#" className="create font-primaryRegular"> Create Account</a></div>
        </form>
      <div className="grid gap-2 mt-4 place-content-center">
      <div className="grid grid-flow-col items-center">
        <hr className="border-gray-400"/>
        <p class="text-center text-sm text-white">OR</p>
        <hr className="border-gray-400"/>
      </div>
      <div className="text-white flex gap-2 items-center">Login with <a href="#"><img src="/src/images/google.png" alt="google" width={70} height={70} className='items-center' /></a></div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
