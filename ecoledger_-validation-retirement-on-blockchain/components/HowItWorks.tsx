
import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { LinkIcon } from './icons/LinkIcon';
import { CertificateIcon } from './icons/CertificateIcon';

const steps = [
    {
        icon: <CheckCircleIcon className="w-12 h-12 text-eco-primary" />,
        title: "Validation",
        description: "EcoLedger ensures every carbon credit originates from a legitimate, verified project by cross-referencing registry data and applying smart contract–based validation checks."
    },
    {
        icon: <LinkIcon className="w-12 h-12 text-eco-primary" />,
        title: "On-Chain Retirement",
        description: "Once credits are used to offset emissions, EcoLedger records their retirement on the blockchain, making the action irreversible and publicly auditable."
    },
    {
        icon: <CertificateIcon className="w-12 h-12 text-eco-primary" />,
        title: "Immutable Proof",
        description: "Retired credits generate a digital certificate of retirement, stored on-chain and accessible by all stakeholders, ensuring ultimate transparency."
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">How It Works</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">A simple, transparent, and secure process for carbon credit lifecycle management.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className="flex justify-center items-center mb-4 bg-eco-light w-20 h-20 mx-auto rounded-full">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
