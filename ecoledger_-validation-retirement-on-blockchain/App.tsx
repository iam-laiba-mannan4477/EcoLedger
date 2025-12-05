
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import KeyBenefits from './components/KeyBenefits';
import WhoCanBenefit from './components/WhoCanBenefit';
import Footer from "./components/Footer";
import ConsultationForm from './components/ConsultationForm';

const App: React.FC = () => {
    return (
        <div className="bg-white text-eco-secondary">
            <Header />
            <main>
                <Hero />
                <HowItWorks />
                <KeyBenefits />
                <WhoCanBenefit />
            </main>
            <Footer />
            <ConsultationForm />
        </div>
    );
};

export default App;
