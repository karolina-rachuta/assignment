import Header from './ui/Header';
import Hero from './ui/Hero';
import Offers from './ui/Offers';
import Plans from './ui/Plans';
import PowerPlan from './ui/PowerPlan';
import PhoneOffer from './ui/PhoneOffer';
import Reasons from './ui/Reasons';
import FAQs from './ui/FAQs';
import Terms from './ui/Terms';
import Footer from './ui/Footer';

export default function Home() {

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Offers />
                <Plans />
                <PowerPlan />
                <PhoneOffer />
                <Reasons />
                <FAQs />
                <Terms />
            </main>
            <Footer />
        </>
    );
}
