import React from 'react'
import Image from 'next/image'
import Smile from '@/../public/images/smile.png'

function Sticker() {
    return (
        <div>
            <div className="sticker-offer flex w-full flex-col items-center justify-center gap-1 p-4 text-white">
                <h2 className="text-shadow text-center text-xs font-semibold sm:text-base md:text-xl">
                    Limited <br /> time offer!
                </h2>
                <div className="flex flex-col rounded-full bg-white px-1 py-2 text-[10px] font-bold leading-none tracking-tighter text-[#3e5aac] sm:px-4 sm:text-[12px] md:px-5 md:text-[14px]">
                    <div className="relative flex items-center justify-center text-center leading-none">
                        <Image
                            src={Smile}
                            alt="Smiley face icon"
                            className="absolute left-[20px] top-[-1px] w-[16px]"
                        />
                        <p className="text-xs leading-none">the</p>
                    </div>
                    <p className="text-center leading-none">ENTERTAINER</p>
                </div>
                <h3 className="text-center text-[10px] leading-none sm:text-xs md:text-base">
                    <p className="leading-tight">FREE with select</p>
                    <p className="leading-tight">Power Plans</p>
                </h3>
            </div>
        </div>
    )
}

export default Sticker
