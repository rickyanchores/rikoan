import React from 'react'

const SocialBanner = () => {
  return (
    <div className='SocialBanner grid grid-cols-1 md:grid-cols-3 gap-4 m-2'>
        <div className="social">Github</div>
        <div className="social">Instagram</div>
        <div className="social">Twitter</div>
    </div>
  )
}

export default SocialBanner;