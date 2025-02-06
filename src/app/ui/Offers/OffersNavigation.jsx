'use client'
import React, { useState } from 'react'

function OffersNavigation() {
    const [activeIndex, setActiveIndex] = useState(1)

    function handleClick(index) {
        setActiveIndex(index)
    }
    return (
        <div className="-mt-20 flex h-20 w-full items-center bg-white bg-opacity-90">
            <div className="du_container flex h-full w-full items-center justify-evenly px-2">
                <div className="flex h-full w-full items-center justify-evenly overflow-x-scroll text-base text-color">
                    {[
                        'Device + Plan',
                        'Postpaid Plans',
                        'Roaming',
                        'Offers'
                    ].map((item, index) => (
                        <a
                            href="#"
                            key={index}
                            className={`flex h-full w-full items-center justify-center border-l border-r border-stone-500 px-10 text-center transition-all duration-500 ease-in-out ${
                                activeIndex === index &&
                                '-mt-[1px] h-[86px] rounded-t-md border-none bg-white font-semibold opacity-100'
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
