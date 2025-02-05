import React from 'react';
import Image from 'next/image';
import Home from '@/../public/home.png';
import ArrowRight from '@/../public/arrow_right_short.png';

function Breadcrumbs() {
    return (
        <div className="flex items-center gap-2 text-xs pt-2">
            <a href="">
                <Image src={Home} className="icon-hero" />
            </a>
            <Image src={ArrowRight} className="icon-hero" />
            <a href="" className="text-opacity-50 text-white">
                Postpaid Plans
            </a>
        </div>
    );
}

export default Breadcrumbs;
