import { useState } from 'react'
import './login.css'
import { IoMdEyeOff } from 'react-icons/io'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from '../../components/Footer'




const Login = () => {
  const [formData, setFormData] = useState({ 
    email: '',
    password: '', })
 

    const handleChange = (e) => {
      setFormData({...formData, email:e.target.value});
   };
   const handlePassChange = (e) => {
    setFormData({...formData, password:e.target.value});
 };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('https://zlide-backend-api.up.railway.app/api/auth/jwt/create/', formData);
    console.log(response.data);
    // Handle successful signin
  } catch (error) {
    console.error('Signin failed of course, dey play:', error);
    // Handle error
  }
};

   
  return (
    <div className="items-center justify-center">
    <div className="p-24">
      <div className=" m-auto  max-w-[700px] w-full border rounded-lg bg-gray-100 shadow-2xl">
    <h2  className='font-primaryMedium text-[35px] bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-8.5% via-[#017] via-2.5% to-violet-800 to-10% ml-6  pt-6 '>Login</h2>
      <div className="p-6 gap-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="text-[15px] tracking-wider font-primaryRegular px-2">Email</label>
          <input type="email" placeholder="Enter Work Email" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
            id='mail'
            value={formData.email} onChange={handleChange}
            required
          />
          
          <label className="text-[15px] tracking-wider px-2 font-primaryRegular">Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          id='password'
           required
           value={formData.password}
           onChange={handlePassChange}
          />
          </div>
          <div className="flex justify-between items-center text-center">
            
            <div className='ml-auto'>
              <Link to="/reset" className='font-primaryMedium text-[15px] bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-10% via-[#017] via-20% to-violet-800 to-70% ml-4 '>Forget Password?</Link>
            </div>
          </div>

          <button className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Sign in</button>

          <div className=" text-sm text-center font-primaryRegular tracking-widest">Don't have an Account?<Link to="/signup" className='font-primaryMedium text-[15px] bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-10% via-[#017] via-20% to-violet-800 to-70%'> Create Account</Link></div>
        </form>
      <div className="grid gap-2 mt-4 place-content-center">
      <div className="grid grid-flow-col items-center">
        <hr className="border-black"/>
        <p class="text-center text-sm">OR</p>
        <hr className="border-black"/>
      </div>

      <div className="flex gap-2 items-center font-primaryRegular tracking-widest text-[14px]">Login with <a href="#"><img src="/images/logos_google.png" alt="google" width={70} height={70} className='items-center' /></a></div>
      
      </div>
      </div>
      </div>
    </div>
    
    <div className='mt-[3em]'>
      <Footer />
    </div>
    </div>
  );
};

export default Login;
