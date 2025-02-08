import React from 'react'
import Image from 'next/image'
import Home from '@/../public/images/home.png'
import ArrowRight from '@/../public/images/arrow_right_short.png'

function Breadcrumbs() {
    return (
        <div className="flex items-center gap-2 pt-2 text-xs">
            <a href="">
                <Image
                    src={Home}
                    alt="Home icon"
                    className="max-h-[15px] w-full max-w-[15px] opacity-50"
                />
            </a>
            <Image
                src={ArrowRight}
                alt="Right arrow"
                className="max-h-[15px] w-full max-w-[15px] opacity-50"
            />
            <a href="" className="text-white text-opacity-50">
                Postpaid Plans
            </a>
        </div>
    )
}

export default Breadcrumbs
