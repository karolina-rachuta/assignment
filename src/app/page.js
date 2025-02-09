import Header from '@/ui/Header'
import Hero from '@/ui/Hero'
import Offers from '@/ui/Offers'
import PowerPlan from '@/ui/PowerPlan'
import PhoneOffer from '@/ui/PhoneOffer'
import Reasons from '@/ui/Reasons'
import Faqs from '@/ui/Faqs'
import Terms from '@/ui/Terms'
import Footer from '@/ui/Footer'
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Offers />
                <PowerPlan />
                <PhoneOffer />
                <Reasons />
                <Faqs />
                <Terms />
            </main>
            <Footer />
        </>
    )
}
