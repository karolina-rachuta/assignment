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
            <div className="border-color p1 flex h-8 w-52 items-center justify-between gap-1 rounded-md">
                <Image src={Fav} alt="Star icon" className="w-8 p-1" />
                <div className="mr-[2px] flex h-7 w-48 items-center justify-center rounded-md rounded-l-none rounded-r bg-white text-sm font-semibold">
                    <p className="color-gradient">Greater value online</p>
                </div>
            </div>
        </div>
    )
}

export default Frame
