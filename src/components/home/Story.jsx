import React from 'react'
import CustomHeading from '../common/CustomHeading'
import Image from 'next/image'

const Story = () => {
    return (<div className='d-flex flex-column story-section justify-content-around align-items-center'>
        <div className='story-container container'>
            <CustomHeading heading={"Story"} headingClass={"mt-5 mb-4"} />
            <p className='text-center fs-6 story-description common-description'>Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos.</p>
            <p className='common-description text-center'>However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated.</p>
        </div>
        <Image src={"/assets/images/story-image.webp"} alt='story-image' width={1280} height={357} className='story-image mx-auto' />
    </div>
    )
}

export default Story