import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-gradient-to-t from-green-100 to-green-50'>
      <div className=' container mx-auto flex flex-col justify-center items-center py-10 gap-3 lg:text-base text-sm '>
        <p className=' text-center '>Copyright © 2024 <span className=' text-green-700 '>Nongor Foundation </span>- all rights reserved. Technical support team <span className=' text-green-700'>Latent Talent.</span></p>
        <p><span className=' text-green-700 '>Terms and conditions</span> | <span className=' text-green-700 '> Privacy Policy</span></p>
    </div>
    </div>
  )
}

export default Footer