import React from 'react'
import Header from '../common/Header'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='position-relative hero-section '>
            <Header />
            <div className='container flex-column flex-xl-row align-items-center justify-content-center d-flex justify-content-xl-start align-items-xl-start hero-container'>
                <div className='d-flex flex-column justify-content-center align-items-center align-items-xl-start'>
                    <h1 className='hero-heading position-relative font-franklin'>NEKOZUMA
                    </h1>
                    <p className='common-description fs-6 text-center text-xl-start hero-description'>The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs.</p>
                    <button className='border-0 hero-button transition-300 text-white'>Connect Wallet</button>
                </div>
                <Image src={'/assets/images/hero-image.webp'} width={557} height={557} className='d-block d-xl-none hero-image' alt='hero-image' />
            </div>
            <Image src={'/assets/images/hero-blue-layer.webp'} className='position-absolute bottom-0 end-0 blue-layer hero-layers pointer-event-none' width={557} height={273} alt='hero-blue-layer' />
            <Image src={'/assets/images/hero-left-lightning.webp'} width={121} height={412} className='position-absolute hero-layers hero-left-lightning start-0 pointer-event-none' alt='hero-left-lightning' />
            <Image src={'/assets/images/hero-image.webp'} width={557} height={557} className='position-absolute bottom-0 end-0 d-xl-block d-none pointer-event-none' alt='hero-image' />
            <Image src={'/assets/images/hero-right-lightning.webp'} width={528} height={544} className=' position-absolute hero-layers end-0 bottom-0 pointer-event-none' alt='hero-right-lightning' />
        </div>
    )
}

export default Hero