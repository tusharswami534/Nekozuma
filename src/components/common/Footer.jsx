import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer overflow-hidden position-relative footer'>
            <Image src={'/assets/images/footer-left-layer.webp'} width={436} height={174} className=' position-absolute bottom-0 footer-layers start-0 pointer-event-none' />
            <Image src={'/assets/images/footer-right-layer.webp'} width={575} height={174} className=' position-absolute bottom-0 footer-layers end-0 pointer-event-none' />
            <h2 className='footer-heading text-center text-white'>NEKOZUMA</h2>
            <div className='d-flex justify-content-center align-items-center mt-4 gap-4'>
                <Link className='footer-icon transition-300' href={'https://discord.com/'} target='_blank'>
                    <Image src={'/assets/images/discord-icon.webp'} width={32} height={32} alt='discord' />
                </Link>
                <Link className='footer-icon transition-300' href={'https://x.com/?lang=en'} target='_blank'>
                    <Image src={'/assets/images/twitter-icon.webp'} width={32} height={32} alt='twitter' />
                </Link>
            </div>
        </div>
    )
}

export default Footer