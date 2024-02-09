import RedButton from '@/components/RedButton'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const Slide1 = ({setPage}) => {

    const router = useRouter();
    
    return (
        <>
            <div className='info-con'>
                <div className='img-con'>
                    <img className='' src="/images/auth/img1.png" alt="img" />
                </div>
                <h1>Welcome to Suprisevault</h1>
                <p className='sub'>
                    Create a Virtual Atm Machine, Share the withdrawal link & Pin
                    with your loved ones & watch as they unveil the thrill of surprises!
                </p>
            </div>
            <RedButton content="Next" onClick={() => setPage(1)} />
        </>
    )
}

export default Slide1