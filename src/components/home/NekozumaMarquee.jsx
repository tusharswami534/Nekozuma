import { MARQUEE_LIST } from '@/utils/helper';
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const NekozumaMarquee = () => {
    return (
        <div className='overflow-hidden'>
            <Marquee pauseOnHover={true}>
                {MARQUEE_LIST.map((item, index) => (
                    <div key={index} className='overflow-hidden marquee-image'>
                        <Image className='marquee-image cursor-pointer' src={item} alt='marquee-images' width={320} height={320} />
                    </div>
                ))}
            </Marquee>
            <Marquee pauseOnHover={true} direction='right'>
                {MARQUEE_LIST.map((item, index) => (
                    <div key={index} className='marquee-image overflow-hidden' >
                        <Image className='marquee-image cursor-pointer' src={item} alt='marquee-images' width={320} height={320} />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default NekozumaMarquee