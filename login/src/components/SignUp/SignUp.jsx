import React, { useEffect, useRef, useState } from 'react'
import './SignUp.css'
import { IoMdEyeOff } from 'react-icons/io'
import SignUpModal from './SignUpModal';


const NAME_REGEX = /^[a-zA-Z]{3,23}$/;
const PWD_REGEX =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// const SignUp = () => {
//   const errRef = useRef();

//   const [email, setEmail] = useState('');
//   const [validEmail, setValidEmail] = useState(false);
//   const [emailFocus, setEmailFocus] = useState(false);

//   const [firstName, setFirstName] = useState('');
//   const [validFirst, setValidFirst] = useState(false);
//   const [firstFocus, setFirstFocus] = useState(false);

//   const [lastName, setLastName] = useState('');
//   const [validLast, setValidLast] = useState(false);
//   const [lastFocus, setLastFocus] = useState(false);

//   const [pwd, setPwd] = useState('');
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState('');
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState('');
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     const result = NAME_REGEX.test(firstName);
//     console.log(result);
//     console.log(firstName);
//     setValidFirst(result);
//   },[firstName])

//   useEffect(() => {
//     const result = NAME_REGEX.test(lastName);
//     console.log(result);
//     console.log(lastName);
//     setValidLast(result);
//   },[lastName])
  
//   useEffect(() => {
//     const result = PWD_REGEX.test(pwd);
//     console.log(result);
//     console.log(pwd);
//     setValidPwd(result);  
//     const match = pwd === matchPwd;
//     setValidMatch(match);
//   }, [pwd, matchPwd]);
  
//   useEffect(() => {
//     setErrMsg('');
//   }, [firstName, lastName, pwd, matchPwd])

//   const handleSubmit = (e) => {
//    e.preventDefault();
//   // Add your authentication logic here
//    console.log('Email:', email);
//     console.log('FirstName:', firstName);
//     console.log('LastName:', lastName);
//     console.log('Pwd:', pwd);
//   };


const SignUp = () => {
  const {email, setEmail} = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Validation logic
    if (!email || !firstName || !lastName || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Form submission logic (you can replace this with your actual API call)
    console.log('Form submitted successfully');
  };



  const [isSignUpSuccessful, setSignUpSuccessful] = useState(false);

  // Function to handle successful sign up
  const handleSignUpSuccess = () => {
    setSignUpSuccessful(true);
  };

  // Function to close the modal
  const closeSignUpModal = () => {
    setSignUpSuccessful(false);
 
  };

  return (
    <>
    <SignUpModal isOpen={isSignUpSuccessful} onClose={closeSignUpModal} />
     {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>  */}
    <div className="bg-neutral-700 items-center justify-center">
    <div className="head">
      <div className="px-6 py-8 m-auto max-w-[700px] w-full">
    <h2 className="text-3xl tracking-wider text-white font-primaryMedium p-6">Signup</h2>
      <div className="p-6 gap-4">
        <form onSubmit= {handleSignUp}/*{handleSubmit}*/ className="flex flex-col gap-4">
          <label htmlFor="email" className="text-[17px] tracking-wider font-primaryRegular text-white px-2">Email</label>
          <input 
          type="email"
          placeholder="Enter Work Email"
          className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          value={email} required 
          onChange={(e) => setEmail(e.target.value)}
          // aria-invalid={validEmail ? "false" : "true"}
          // onFocus={() => setEmailFocus(true)} 
          // onBlur={() => setEmailFocus(false)} 
          />

          <label htmlFor="firstname" className="text-[17px] tracking-wider font-primaryRegular text-white px-2">First Name</label>
          <input type="text" placeholder="First Name" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          value={firstName} required 
          onChange={(e) => setFirstName(e.target.value)}
          // aria-invalid={validFirst ? "false" : "true"}
          // onFocus={() => setFirstFocus(true)} 
          // onBlur={() => setFirstFocus(false)} 
          />

          <label htmlFor="lastname" className="text-[17px] tracking-wider font-primaryRegular text-white px-2">Last Name</label>
          <input type="text" placeholder="Last Name" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          value={lastName} required
          onChange={(e) => setLastName(e.target.value)}
          // aria-invalid={validLast ? "false" : "true"}
          // onFocus={() => setLastFocus(true)} 
          // onBlur={() => setLastFocus(false)}
          />
          
          <label htmlFor="password" className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          onChange={(e) => setPassword(e.target.value)} 
          value={password} required
          // aria-invalid={validPwd ? "false" : "true"}
          // aria-describedby="pwdnote"
          // onFocus={() => setPwdFocus(true)}
          // onBlur={() => setPwdFocus(false)}
          />
          {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "hidden"}>
            8 to 24 characters.<br />Must include uppercase and lowercase letters, a number and a special character.<br />Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p> */}
          </div>

          <label htmlFor="confirmPassword" className="text-[17px] tracking-wider text-white px-2 font-primaryRegular">Confirm Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input 
          type="password" 
          placeholder="**********" 
          className="w-full rounded-lg py-4 px-6 bg-gray-200 text-base"
          // onChange={(e) => setMatchPwd(e.target.value)} 
          // value={matchPwd} required
          value={confirmPassword} required
          onChange={(e) => setConfirmPassword(e.target.value)}
          // aria-invalid={validMatch ? "false" : "true"}
          // aria-describedby="confirmnote"
          // onFocus={() => setMatchFocus(true)}
          // onBlur={() => setMatchFocus(false)}
          />
          {/* <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "hidden"}>Must match the first password </p> */}
          </div>
          {error && <p>{error}</p>}
           <button onClick={handleSignUpSuccess} /* disabled={!validFirst || !validLast || !validPwd || !validMatch ? true : false}*/className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Sign up</button>

          <div className="text-white text-sm text-center font-primaryThin tracking-widest">Already Have An Account?<a href="#" className="create font-primaryRegular"> Login</a></div>
        </form>
      <div className="grid gap-2 mt-4 place-content-center">
      <div className="grid grid-flow-col items-center">
        <hr className="border-gray-400"/>
        <p className="text-center text-sm text-white">OR</p>
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

export default SignUp