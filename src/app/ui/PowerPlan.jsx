import React from 'react'
import Filters from './PowerPlans/Filters'
import Carousel from './PowerPlans/Carousel'

function PowerPlan() {
    return (
        <section className="border-b-[1px] border-stone-300 bg-stone-100 pb-8 pt-1">
            <div className="du_container mt-8">
                <div className="mb-20 flex items-start justify-between">
                    <h3 className="pl-2 text-lg font-bold">
                        Already have a phone? Choose your Power Plan:
                    </h3>
                    <Filters />
                </div>
                <Carousel />
            </div>
        </section>
    )
}

export default PowerPlan
