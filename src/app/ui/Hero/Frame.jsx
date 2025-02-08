import React from 'react'
import Image from 'next/image'
import Fav from '@/../public/images/fav.png'

function Frame() {
    return (
        <div className="flex w-full flex-col gap-4 rounded-xl border-2 border-solid border-white px-6 py-3 text-white lg:px-14 lg:py-5">
            <h1 className="text-2xl font-bold text-white md:text-5xl">
                Postpaid Plans.
            </h1>
            <h2 className="text-base text-white md:text-lg">
                <span className="font-bold">Get The Enterainer on us,</span>{' '}
                when you buy a Power Plan online.
            </h2>
            <div className="flex h-7 w-40 items-center justify-between gap-1 rounded-md bg-gradient-to-r from-[#142044] from-[1%] via-[#652caa] via-[14%] to-[#00a9ce]">
                <Image src={Fav} alt="Star icon" className="w-6 pl-[2px]" />
                <div className="m-[2px] flex h-6 w-36 items-center justify-center rounded-md rounded-l-none rounded-r bg-white pr-[3px] text-center text-xs font-semibold">
                    <p className="color-gradient">Greater value online</p>
                </div>
            </div>
        </div>
    )
}

export default Frame
