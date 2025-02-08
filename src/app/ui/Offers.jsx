import React from 'react'
import OffersNavigation from './Offers/OffersNavigation'
import OffersOption from './Offers/OffersOption'
import OfferBonuses from './Offers/OfferBonuses'

function Offers() {
    return (
        <section className="mb-2 w-full pb-4 shadow-md shadow-stone-100 sm:shadow-lg">
            <OffersNavigation />
            <OffersOption />
            <OfferBonuses />
        </section>
    )
}

export default Offers
