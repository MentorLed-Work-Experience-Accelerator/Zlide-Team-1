import React from 'react'

const Card = ({ title, note }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[370px] h-[272px] flex p-4">
        <div className="bg-white border shadow rounded-lg px-8 py-6">
          <img src="" alt="" />
          <div className="text-4xl text-[#0F1515] text-center font-medium mt-5">{title}</div>
          <p className="text-xl text-center text-[#4E4E4C] mt-4">{note}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;

