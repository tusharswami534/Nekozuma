import { TEAM_CARD_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import CustomHeading from '../common/CustomHeading'
import Link from 'next/link'

const Team = () => {
    return (
        <div className='team-section'>
            <div className='team-line mx-auto'></div>
            <CustomHeading heading={'Team'} headingClass={'team-heading'} />
            <div className=' container team-container'>
                <div className=' d-flex flex-wrap justify-content-center gap-4 align-items-center'>
                    {TEAM_CARD_LIST.map((item, index) => (
                        <div key={index} className='team-card d-flex flex-column justify-content-center align-items-center'>
                            <div className='overflow-hidden'>
                                <Image src={item.image} alt='founder' width={202} height={202} className='team-image transition-300 pointer-event-none' />
                            </div>
                            <h3 className='card-position text-center mt-4'>{item.position}</h3>
                            <p className='card-name common-description text-center mb-0 mt-2'>{item.name}</p>
                            <p className='common-description text-center mt-2 mb-0'>
                                {item.description}
                            </p>
                            <Link className='mt-2' href={"/"}>
                                <Image src={"/assets/images/twitter-icon.webp"} width={20} height={20} alt='twitter-icon' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team