import React from 'react'
import Image from 'next/image'
import Plus from '@/../public/images/plus.png'
function Faqs() {
    return (
        <section className="w-full border-b-[1px] border-stone-300 bg-white py-5">
            <div className="du_container flex items-center justify-between px-2 md:px-4 lg:px-2">
                <h3 className="text-lg font-semibold">FAQs</h3>
                <Image
                    src={Plus}
                    className="w-11 cursor-pointer duration-300 ease-in-out hover:scale-110"
                    alt="Plus to extend section"
                />
            </div>
        </section>
    )
}

export default Faqs
