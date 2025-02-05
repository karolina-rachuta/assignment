import React from 'react';
import Filters from './PowerPlans/Filters';
import Carousel from './PowerPlans/Carousel';

function PowerPlan() {
    return (
        <section>
            <div>
                <h4>Already have a phone? Choose your Power Plan:</h4>
                <Filters />
            </div>
            <Carousel />
        </section>
    );
}

export default PowerPlan;
