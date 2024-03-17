import React from 'react'

const Footer = () => {
  return (
    <div className=' max-w-[1280px] mx-auto flex flex-col justify-center items-center py-10 gap-3 text-lg'>
        <p>Copyright © 2024 <span className=' text-green-700 '>As-Sunnah Foundation </span>- all rights reserved. Technical support by <span className=' text-green-700'>Latent Talent.</span></p>
        <p><span className=' text-green-700 '>Terms and conditions</span> | <span className=' text-green-700 '> Privacy Policy</span></p>
    </div>
  )
}

export default Footer