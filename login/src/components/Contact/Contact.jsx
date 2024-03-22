// import React from 'react'
// import Card from './Card'
// import Message from './Message'
// import Header from '../Header'


// const Contact = () => {
//   return (
//     <div className="h-screen">
//         <div className="flex flex-col w-full">
//             <Header title="Contact Us"/>
//             <div className="flex flex-wrap m-auto p-4">
//                <Card title= "Customer Support" 
//                note="Reach out to us through direct phone calls."/>
//                <Card title= "Login Issues"
//                note="Trouble logging in? Let us help you regain access to your account."/>
//                <Card title= "Billing Issues"
//                note="Lets assist in resolving your billing issues."/>
//             </div>
//             <Message title="Fill out this form and our representative will be in touch"
//             note="If your question isn't answered above or in the rules then you can contact us using the form below. We will reply to all queries as soon as we can." />

//         </div>
//      </div>
//   )
// }

// export default Contact;

// Contact.js
import React from 'react'
import Card from './Card'
import Message from './Message'
import Header from '../Header'

const Contact = () => {
  return (
    <div className="flex flex-col w-full">
      <Header title="Contact Us" />
      <div className="flex flex-wrap m-auto relative -top-36">
        <Card title="Customer Support"
          note="Reach out to us through direct phone calls." />
        <Card title="Login Issues"
          note="Trouble logging in? Let us help you regain access to your account." />
        <Card title="Billing Issues"
          note="Lets assist in resolving your billing issues." />
      </div>
      <Message title="Fill out this form and our representative will be in touch"
        note="If your question isn't answered above or in the rules then you can contact us using the form below. We will reply to all queries as soon as we can." />
    </div>
  )
}

export default Contact;

