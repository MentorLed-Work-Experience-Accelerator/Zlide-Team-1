import { useEffect, useState } from 'react'
import { IoMdEyeOff } from 'react-icons/io'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from '../../components/Footer';


export default function Signup() {
  const [formData, setFormData] = useState({ 
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    password: '',
    cPassword: '' });

    const [data, setData] = useState([])

    const { email, firstName, lastName, company, jobTitle, password, cPassword } = formData

  const handleChange = (e) => {
     setFormData({...formData, email:e.target.value });
  };
  const handleFirstChange = (e) => {
     setFormData({...formData, firstName:e.target.value});
  };
  const handleLastChange = (e) => {
     setFormData({...formData, lastName:e.target.value});
  };
  const handleCompanyChange = (e) => {
     setFormData({...formData, company:e.target.value});
  };
  const handleJobChange = (e) => {
     setFormData({...formData, jobTitle:e.target.value});
  };
  const handlePassChange = (e) => {
     setFormData({...formData, password:e.target.value});
  };
  const handleConfirmChange = (e) => {
     setFormData({...formData, cPassword:e.target.value});
  };
 
  const handleSubmit = async (e) => {
     e.preventDefault();
     if (email && firstName && lastName && company && jobTitle && password && cPassword){
        axios.post('https://zlide-backend-api.up.railway.app/api/auth/users', formData )
        .then(res => console.log('RES:::::::::', res.data))
        .catch(err => console.log(err))
        setData([...data, formData])
        setFormData({ email: "", firstName: "", lastName:"", company:"", jobTitle:"", password:"" ,cPassword:"" })

      }
    //  try {
    //    const response = await axios.post('https://zlide-backend-api.up.railway.app/api/auth/users/', formData);
    //    console.log(response.data);
    //    // Handle successful signup
    //  } catch (error) {
    //    console.error('Signup failed of course, dey play:', error);
    //    // Handle error
    //  }
  };


  const handleDelete = (index) => {
    const newData = data.filter((item, i) => i !== index)
    setData(newData)
  }

  const handleEdit = (index) => {
    const itemToEdit = data[index]
    setFormData(itemToEdit)
    handleDelete(index)
  }

  useEffect(()=>{
    console.log(data) }, [data])

  return (
    <div className=" items-center justify-center">
        <div className="head p-24">
          <div className="px-6 py-8 m-auto max-w-[700px] w-full border rounded-lg bg-gray-100 shadow-2xl">
        <h2  className='font-primaryMedium text-[35px] bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-10% via-[#017] via-20% to-violet-800 to-70% ml-4'>Signup</h2>
          <div className="p-6 gap-4">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
               <label className="text-[15px] tracking-wider font-primaryRegular px-2">Email</label>
               <input type="email" placeholder="Enter Work Email" className="w-full rounded-lg py-4 px-6 bg-gray-300 text-base"
                value={email} onChange={handleChange}
               />
           <label className="text-[15px] tracking-wider font-primaryRegular px-2">First Name</label>
          <input type="text" placeholder="First Name" className="w-full rounded-lg py-4 px-6 bg-gray-300 text-base"
           value={firstName} onChange={handleFirstChange}
            />
                      <label className="text-[15px] tracking-wider font-primaryRegular px-2">Last Name</label>
              <input type="text" placeholder="Last Name" className="w-full rounded-lg py-4 px-6 bg-gray-300 text-base"
              value={lastName} onChange={handleLastChange}
                
               />
                      <label className="text-[15px] tracking-wider font-primaryRegular px-2">Company</label>
              <input type="text" placeholder="Company" className="w-full rounded-lg py-4 px-6 bg-gray-300 text-base"
              value={company} onChange={handleCompanyChange}
                
               />
                      <label className="text-[15px] tracking-wider font-primaryRegular  px-2">Job Title</label>
              <input type="text" placeholder="Job Title" className="w-full rounded-lg py-4 px-6 bg-gray-300 text-base"
              value={jobTitle} onChange={handleJobChange}
                
               />
              
             <label className="text-[15px] tracking-wider  px-2 font-primaryRegular">Password</label>
             <div className="relative">
               <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
             <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-300 text-base"
              value={password} onChange={handlePassChange}
             
             />
              </div>
    
             <label className="text-[15px] tracking-wider px-2 font-primaryRegular">Confirm Password</label>
             <div className="relative">
                 <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
               <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-300 text-base"
              value={cPassword} onChange={handleConfirmChange}
               
               />
               </div>
    
               <button className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Sign up</button>
    
             <div className=" text-[15px] text-center font-primaryRegular tracking-widest">Already Have An Account?<Link to="/login" className="text-[16px] font-primaryMedium text-[#017]"> Login</Link></div>
           </form>
         <div className="grid gap-2 mt-4 place-content-center">
         <div className="grid grid-flow-col items-center">
           <hr className="border-gray-400"/>
           <p class="text-center text-sm">OR</p>
           <hr className="border-gray-400"/>
         </div>
         <div className=" flex gap-2 items-center font-primaryRegular tracking-widest text-[14px]">Login with <a href="#"><img src="/images/logos_google.png" alt="google" width={70} height={70} className='items-center' /></a></div>
         </div>
         </div>
         </div>
       </div>
       <Footer />
       </div>
  )
}
























































// import React from 'react'
// import './SignUp.css'
// import { IoMdEyeOff } from 'react-icons/io'



// const signup = () => {
//   // const [email, setEmail] = useState('');
//   // const [firstname, setFirstName] = useState('');
//   // const [lastname, setLastName] = useState('');
//   // const [password, setPassword] = useState('');

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // Add your authentication logic here
//   //   console.log('Email:', email);
//   //   console.log('FirstName:', firstName);
//   //   console.log('LastName:', lastname);
//   //   console.log('Password:', password);
//   // };

//   return (
//     <div className="bg-neutral-700 items-center justify-center">
//     <div className="head">
//       <div className="px-6 py-8 m-auto max-w-[700px] w-full">
//     <h2 className="text-3xl tracking-wider text-white font-primaryMedium p-6">Signup</h2>
//       <div className="p-6 gap-4">
//         <form className="flex flex-col gap-4">
//           <label className="text-[17px] tracking-wider font-primaryRegular text-white px-2">Email</label>
//           <input type="email" placeholder="Enter Work Email" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
//           //  value={email} onChange={(e) => setEmail(e.target.value)} 
//           />

//           <label className="text-[17px] tracking-wider font-primaryRegular text-white px-2">First Name</label>
//           <input type="text" placeholder="First Name" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
//           //  value={firstname} onChange={(e) => setFirstName(e.target.value)} 
//           />

//           <label className="text-[17px] tracking-wider font-primaryRegular text-white px-2">Last Name</label>
//           <input type="text" placeholder="Last Name" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
//           //  value={lastname} onChange={(e) => setLastName(e.target.value)} 
//           />
          
//           <label className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">Password</label>
//           <div className="relative">
//             <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
//           <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
//           //  value={password} onChange={(e) => setPassword(e.target.value)} 
//           />
//           </div>

//           <label className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">Confirm Password</label>
//           <div className="relative">
//             <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
//           <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
//           //  value={password} onChange={(e) => setPassword(e.target.value)} 
//           />
//           </div>

//           <button className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Sign up</button>

//           <div className="text-white text-sm text-center font-primaryThin tracking-widest">Already Have An Account?<a href="#" className="create font-primaryRegular"> Login</a></div>
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
//     <SignupFooter />
//     </div>
//   );
// };

// export default signup;
