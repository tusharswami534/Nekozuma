"use Client"
import { HEADER_LIST } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <div>
            <div className='container position-relative flex justify-content-center align-content-center header-container'>
                <div className='d-flex justify-content-end align-items-center'>
                    <Link className=' position-absolute top-0 page-logo' href={"/"}>
                        <Image src={"/assets/images/page-logo.webp"} height={83} width={424} alt='page-logo' />
                    </Link>
                    <div className={`d-flex justify-content-sm-end justify-content-center header-links responsive-navbar transition-300 ${open && 'show-nav'}`}>
                        {HEADER_LIST.map((item, index) => (
                            <Link onClick={() => setOpen(false)} key={index} className='header-link text-white' href={item.link}>{item.title}</Link>
                        ))}
                        <div className='d-flex icon-div'>
                            <Link onClick={() => setOpen(false)} href={'/'}>
                                <Image src={'/assets/images/discord-icon.webp'} width={24} height={24} alt='discord' />
                            </Link>
                            <Link onClick={() => setOpen(false)} href={'/'}>
                                <Image src={'/assets/images/twitter-icon.webp'} width={24} height={24} alt='twitter-icon' />
                            </Link>
                        </div>
                    </div>
                    <div onClick={() => setOpen(!open)} className={`d-flex gap-2 overflow-hidden bg-transparent position-relative flex-column z-3`}>
                        <span className={`header-button transition-300 flex ${open && 'button-first-line'}`}></span>
                        <span className={`header-button transition-300 center-line position-relative flex ${open && 'button-second-line'}`}></span>
                        <span className={`header-button transition-300 flex ${open && 'button-third-line'}`}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header