import React from 'react'
import './Login.css'

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
    <div className="bg-neutral-700 w-screen min-h-screen items-center justify-center flex">
    <div className="head w-2/3 flex flex-col justify-center items-center">
      <div className="w-2/3 px-6 py-8">
    <h2 className="text-4xl text-white font-medium p-6">Login</h2>
      <div className="p-6 gap-4">
        <form className="flex flex-col gap-4">
          <label className="text-xl text-white px-2">Email</label>
          <input type="email" placeholder="Enter Work Email" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={email} onChange={(e) => setEmail(e.target.value)} 
          />
          
          <label className="text-xl text-white px-2">Password</label>
          <div className="relative">
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          //  value={password} onChange={(e) => setPassword(e.target.value)} 
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-5 h-5 absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 512 512"><path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z"/><path d="M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z"/></svg>
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
          <div className="text-white text-sm text-center font-light">Don't have an Account?<a href="#" className="create font-bold"> Create Account</a></div>
        </form>
      <div className="grid gap-2 mt-4 place-content-center ">
      <div className="grid grid-flow-col items-center">
        <hr className="border-gray-400"/>
        <p class="text-center text-sm text-white">OR</p>
        <hr className="border-gray-400"/>
      </div>
      <div className="text-white">Login with <a href="#">Google</a></div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
