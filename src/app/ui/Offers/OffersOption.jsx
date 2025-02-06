'use client'
import React, { useState } from 'react'

function OffersOption() {
    const [activePlanIndex, setActivePlanIndex] = useState(0)

    function handleActivePlanIndex(index) {
        setActivePlanIndex(index)
    }

    return (
        <div className="mb-8 mt-8 flex w-full items-center justify-center">
            <div className="du_container flex w-full items-center justify-center">
                <div className="flex w-full items-center justify-center gap-6 p-2 text-center text-[15px]">
                    {[
                        ' Power Plans',
                        ' New Emirati Plans',
                        'Data-Only Plans'
                    ].map((item, index) => (
                        <a
                            href="#"
                            key={index}
                            className={`flex h-[71px] w-full max-w-[240px] items-center justify-center rounded-md border border-stone-400 p-1 py-3 sm:h-full ${activePlanIndex === index && 'offer-border font-semibold'}`}
                            onClick={() => handleActivePlanIndex(index)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OffersOption
