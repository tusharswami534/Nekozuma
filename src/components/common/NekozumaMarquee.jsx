import { MARQUEE_LIST } from '@/utils/helper';
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const NekozumaMarquee = () => {
    return (
        <div>
            <Marquee>
                {MARQUEE_LIST.map((item, index) => (
                    <Image className='marquee-image' src={item} key={index} alt='marquee-images' width={320} height={320} />
                ))}
            </Marquee>
            <Marquee direction='right'>
                {MARQUEE_LIST.map((item, index) => (
                    <Image className='marquee-image' src={item} key={index} alt='marquee-images' width={320} height={320} />
                ))}
            </Marquee>
        </div>
    )
}

export default NekozumaMarquee