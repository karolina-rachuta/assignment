import React from 'react'
import OffersNavigation from './Offers/OffersNavigation'
import OffersOption from './Offers/OffersOption'
import OfferBonuses from './Offers/OfferBonuses'

function Offers() {
    return (
        <section>
            <OffersNavigation />
            <OffersOption />
            <OfferBonuses />
        </section>
    )
}

export default Offers
