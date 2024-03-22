import React from 'react'
import BillMessage from './BillMessage'
import Header from '../Header'

const Billing = () => {
  return (
    <>
      <div className="flex flex-col w-full mt-16">
        <Header title="Billing Issues" />
        <div className="mt-8">
          <BillMessage title="Having trouble with your payments?"
            note="Please contact our support team for assistance" />
        </div>
      </div>
    </>
  )
}

export default Billing;


