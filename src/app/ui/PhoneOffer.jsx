import React from 'react'
import Image from 'next/image'
import Arrow from '@/../public/images/arrow_right.png'

function PhoneOffer() {
    return (
        <section className="w-full border-b-[1px] border-stone-300 bg-stone-100">
            <div className="du_container justyfy-start flex items-center gap-3 py-12">
                <h4 className="text-[17px] font-bold">
                    Need a phone with a plan?
                </h4>

                <a
                    href="#"
                    className="flex items-center gap-2 text-[17px] font-medium tracking-[0.25px] text-primaryColor"
                >
                    Choose a phone to get started
                    <Image src={Arrow} alt="Right Arrow" className="w-5" />
                </a>
            </div>
        </section>
    )
}

export default PhoneOffer
