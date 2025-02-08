'use client'
import React, { useState } from 'react'

function OffersNavigation() {
    const [activeIndex, setActiveIndex] = useState(1)

    function handleClick(index) {
        setActiveIndex(index)
    }
    return (
        <div className="-mt-[68px] flex h-[70px] w-full items-center bg-white bg-opacity-90">
            <div className="du_container flex h-full w-full items-center justify-evenly px-2">
                <div className="overflow-x-scroll-xs scrollbar-hide flex h-full w-full items-center justify-evenly text-base text-color">
                    {[
                        'Device + Plan',
                        'Postpaid Plans',
                        'Roaming',
                        'Offers'
                    ].map((item, index) => (
                        <a
                            href="#"
                            key={index}
                            className={`flex h-full w-full items-center justify-center px-10 text-center transition-all duration-500 ease-in-out ${
                                activeIndex === index &&
                                '-mt-[5px] h-[86.5px] rounded-t-md border-none bg-white font-semibold opacity-100'
                            }`}
                            onClick={() => handleClick(index)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OffersNavigation
