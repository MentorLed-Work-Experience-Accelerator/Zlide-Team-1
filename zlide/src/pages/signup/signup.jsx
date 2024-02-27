import React from 'react'
import './SignUp.css'
import { IoMdEyeOff } from 'react-icons/io'



const signup = () => {
  // const [email, setEmail] = useState('');
  // const [firstname, setFirstName] = useState('');
  // const [lastname, setLastName] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your authentication logic here
  //   console.log('Email:', email);
  //   console.log('FirstName:', firstName);
  //   console.log('LastName:', lastname);
  //   console.log('Password:', password);
  // };

  return (
    <div className="bg-neutral-700 items-center justify-center">
    <div className="head">
      <div className="px-6 py-8 m-auto max-w-[700px] w-full">
    <h2 className="text-3xl tracking-wider text-white font-primaryMedium p-6">Signup</h2>
      <div className="p-6 gap-4">
        <form className="flex flex-col gap-4">
          <label className="text-[17px] tracking-wider font-primaryRegular text-white px-2">Email</label>
          <input type="email" placeholder="Enter Work Email" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={email} onChange={(e) => setEmail(e.target.value)} 
          />

          <label className="text-[17px] tracking-wider font-primaryRegular text-white px-2">First Name</label>
          <input type="text" placeholder="First Name" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={firstname} onChange={(e) => setFirstName(e.target.value)} 
          />

          <label className="text-[17px] tracking-wider font-primaryRegular text-white px-2">Last Name</label>
          <input type="text" placeholder="Last Name" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={lastname} onChange={(e) => setLastName(e.target.value)} 
          />
          
          <label className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={password} onChange={(e) => setPassword(e.target.value)} 
          />
          </div>

          <label className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">Confirm Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={password} onChange={(e) => setPassword(e.target.value)} 
          />
          </div>

          <button className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Sign up</button>

          <div className="text-white text-sm text-center font-primaryThin tracking-widest">Already Have An Account?<a href="#" className="create font-primaryRegular"> Login</a></div>
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
    <SignupFooter />
    </div>
  );
};

export default signup;
