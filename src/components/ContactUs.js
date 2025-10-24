import React from 'react'

const ContactUs = () => {
  return (
    <div>
    <h1 className='font-bold text-3xl p-4 m-4'>ContactUs</h1>
    <form className='flex flex-col w-2/12'>
      <input type='text' placeholder='name' className='border border-black p-2 m-2'></input>
      <input type='text' placeholder='message' className='border border-black p-2 m-2'></input>
      <button className='border border-black p-2 m-4 bg-gray rounded-lg'>Submit</button>
    </form>
    </div>
  )
}

export default ContactUs