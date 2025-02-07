'use client'
import React, { useState } from 'react'
import Filters from './PowerPlans/Filters'
import Carousel from './PowerPlans/Carousel'

function PowerPlan() {
    const [isHidden, setIsHidden] = useState(false)
    return (
        <section className="border-b-[1px] border-stone-300 bg-stone-100 pb-8 pt-1">
            <div
                className={`du_container mb-6 mt-8 flex flex-col items-center justify-between px-2 sm:items-center md:flex-row md:items-start md:gap-3 lg:mb-20 ${isHidden && 'sm:pb-[20px]'}`}
            >
                <h3 className="pb-3 text-center text-lg font-bold sm:text-left md:pb-0">
                    Already have a phone? Choose your Power Plan:
                </h3>
                <Filters isHidden={isHidden} setIsHidden={setIsHidden} />
            </div>
            <Carousel />
        </section>
    )
}

export default PowerPlan
