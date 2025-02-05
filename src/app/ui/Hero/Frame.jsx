import React from 'react';
import Image from 'next/image';
import Fav from '@/../public/fav.png';

function Frame() {
    return (
        <div className="flex flex-col gap-4 text-white border-2 border-solid border-white  rounded-xl  py-3 px-6 lg:py-5 lg:px-14 w-full">
            <h1 className="text-white  text-2xl md:text-6xl font-bold">
                Postpaid Plans.
            </h1>
            <h2 className="text-white text-base md:text-lg">
                <span className="font-bold">Get The Enterainer on us,</span>{' '}
                when you buy a Power Plan online.
            </h2>
            <div className="flex items-center justify-between gap-1 border-color w-52 h-8 rounded-md p1">
                <Image src={Fav} alt="Star icon" className="w-8 p-1" />
                <div className="bg-white w-48 h-7 rounded-r rounded-l-none rounded-md mr-[2px] flex justify-center items-center font-semibold text-sm">
                    <p className="color">Greater value online</p>
                </div>
            </div>
        </div>
    );
}

export default Frame;
