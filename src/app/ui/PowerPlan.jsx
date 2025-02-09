'use client'
import React, { useState } from 'react'
import Filters from './PowerPlans/Filters'
import Carousel from './PowerPlans/Carousel'

function PowerPlan() {
    const [isHidden, setIsHidden] = useState(false)
    return (
        <section className="border-b-[1px] border-stone-300 bg-stone-100 pb-8 pt-1">
            <div
                className={`du_container mb-6 mt-8 flex flex-col items-start justify-between px-2 sm:items-center md:flex-row md:items-start md:gap-3 md:px-4 lg:mb-10 lg:px-2 ${isHidden && 'sm:pb-[20px]'}`}
            >
                <h3 className="px-3 pb-3 text-left text-lg font-bold md:px-0 md:pb-0">
                    Already have a phone? Choose your Power Plan:
                </h3>
                <Filters isHidden={isHidden} setIsHidden={setIsHidden} />
            </div>
            <Carousel />
        </section>
    )
}

export default PowerPlan
