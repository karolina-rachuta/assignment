import React from 'react'
import Image from 'next/image'
import Plus from '@/../public/images/plus.png'
function FAQs() {
    return (
        <section className="w-full border-b-[1px] border-stone-300 bg-white py-5">
            <div className="du_container flex items-center justify-between">
                <h3 className="text-lg font-semibold">FAQs</h3>
                <Image
                    src={Plus}
                    className="w-11"
                    alt="Plus to extend section"
                />
            </div>
        </section>
    )
}

export default FAQs
