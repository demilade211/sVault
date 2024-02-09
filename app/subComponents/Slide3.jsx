import RedButton from '@/components/RedButton'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'


const Slide = ({ setPage }) => {

  const router = useRouter();

  return (
    <>
      <div className='info-con'>
        <div className='img-con'>
          <img className='' src="/images/auth/img3.png" alt="img" />
        </div>
        <h1>Unwrap Joy</h1>
        <p className='sub'>
          With our virtual Atm you get a custom message
          from your gifter and let the mystery amount
          guessing begin
        </p>
      </div>
      <RedButton content="Next" onClick={() => router.push(`/get-started`)} />
    </>
  )
}

export default Slide