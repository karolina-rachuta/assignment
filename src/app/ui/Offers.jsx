import React from 'react'
import OffersNavigation from './Offers/OffersNavigation'
import OffersOption from './Offers/OffersOption'
import OfferBonuses from './Offers/OfferBonuses'

function Offers() {
    return (
        <section className="w-full shadow-md sm:shadow-lg">
            <OffersNavigation />
            <OffersOption />
            <OfferBonuses />
        </section>
    )
}

export default Offers
