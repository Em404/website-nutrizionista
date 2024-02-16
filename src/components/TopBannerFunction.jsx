import React from 'react'

function TopBannerFunction() {

  const topBannerContact = {
    mail: "info@studioprofessionalenutrizionista.it",
    phone: "+39 327 384 2661",
  };

  return (
    <div className='bg-green-600 py-3'>
      <div className="container mx-auto px-3 text-white flex">
        <p>{topBannerContact.phone}</p>
        <p className='ms-6'>{topBannerContact.mail}</p>
      </div>
    </div>
  )
}

export default TopBannerFunction