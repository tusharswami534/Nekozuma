import React from 'react'

const CustomHeading = ({ headingClass, heading }) => {
    return (
        <h2 className={`heading text-center font-franklin  ${headingClass}`}>{heading}</h2>
    )
}

export default CustomHeading