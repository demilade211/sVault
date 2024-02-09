import RedButton from '@/components/RedButton'
import React from 'react'

const Slide2 = ({ setPage }) => {
    return (
        <>
            <div className='info-con'>
                <div className='img-con'>
                    <img className='' src="/images/auth/img2.png" alt="img" />
                </div>
                <h1>What's Inside?</h1>
                <p className='sub'>
                    Recharge our virtual ATM, and send mystery 
                    amounts to loved ones! The fun? They can only 
                    guess what's waiting for them!
                </p>
            </div>
            <RedButton content="Next" onClick={() => setPage(2)} />
        </>
    )
}

export default Slide2