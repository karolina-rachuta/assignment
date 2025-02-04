import Header from './components/Header';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Plans from './components/Plans';
import PowerPlan from './components/PowerPlan';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Offers />
                <Plans />
                <PowerPlan />
            </main>
        </>
    );
}
