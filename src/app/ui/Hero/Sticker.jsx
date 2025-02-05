import React from 'react';
import Image from 'next/image';
import Smile from '@/../public/smile.png';

function Sticker() {
    return (
        <div>
            <div className="sticker-offer flex text-white flex-col items-center justify-center gap-1 w-full">
                <h2 className=" text-xs sm:text-base lg:text-xl font-semibold text-center">
                    Limited <br /> time offer!
                </h2>
                <div className="flex flex-col text-[10px] sm:text-[12px] tracking-tighter leading-none lg:text-[14px] bg-white rounded-full font-bold text-blue-800  px-1 sm:px-4 lg:px-5 py-2">
                    <div className="flex text-center justify-center leading-none items-center">
                        <Image src={Smile} className="w-3" />
                        <p className="leading-none">the</p>
                    </div>
                    <p className="text-center leading-none">ENTERTAINER</p>
                </div>
                <h3 className="text-center text-[10px] sm:text-xs lg:text-lg">
                    FREE with select <br /> Power Plans
                </h3>
            </div>
        </div>
    );
}

export default Sticker;
