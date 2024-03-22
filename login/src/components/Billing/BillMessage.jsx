import React from 'react'


const BillMessage = ( {title, note} ) => {
  return (
    <div className="flex justify-center items-center mt-16">
    <div className="p-5 w-2/3 border-none bg-[#f8f8f6] rounded-xl">
      <div className="p-2 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-center font-medium text-2xl">{note}</p>
      </div>
      <form className="space-y-4 mt-3">
        <div>
          <label htmlFor="name" className="block">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded bg-gray-300" />
        </div>
        <div>
          <label htmlFor="email" className="block">Email Address</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded bg-gray-300" />
        </div>
        <div>
          <label htmlFor="message" className="block">Your Message</label>
          <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded bg-gray-300"></textarea>
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-[#130128] p-2 rounded">Send Message</button>
      </form>
    </div>
  </div>
  )
}


export default BillMessage;