import React from 'react'
import OffersNavigation from './Offers/OffersNavigation'
import OffersOption from './Offers/OffersOption'
import OfferBonuses from './Offers/OfferBonuses'

function Offers() {
    return (
        <section className="mb-2 w-full pb-4 shadow-lg shadow-stone-200">
            <OffersNavigation />
            <OffersOption />
            <OfferBonuses />
        </section>
    )
}

export default Offers
