
import React from 'react';
import { EyeIcon } from './icons/EyeIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon';
import { BadgeCheckIcon } from './icons/BadgeCheckIcon';
import { LightningBoltIcon } from './icons/LightningBoltIcon';

const benefits = [
    { icon: <EyeIcon className="w-8 h-8 text-eco-primary" />, title: "Trust & Transparency", description: "Removes opacity in carbon markets by providing verifiable, tamper-proof records." },
    { icon: <ShieldCheckIcon className="w-8 h-8 text-eco-primary" />, title: "Fraud Prevention", description: "Prevents double-claiming and misreporting of carbon credits." },
    { icon: <DocumentTextIcon className="w-8 h-8 text-eco-primary" />, title: "Regulatory Compliance", description: "Aligns with emerging ESG reporting and climate disclosure frameworks." },
    { icon: <BadgeCheckIcon className="w-8 h-8 text-eco-primary" />, title: "Market Confidence", description: "Enhances credibility for buyers and issuers by providing clear proof of impact." },
    { icon: <LightningBoltIcon className="w-8 h-8 text-eco-primary" />, title: "Efficiency", description: "Automates the retirement process, reducing administrative overhead." }
];

const KeyBenefits: React.FC = () => {
    return (
        <section id="benefits" className="py-16 lg:py-24 bg-eco-light">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Key Benefits</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Discover the advantages of managing carbon credits on the blockchain.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                           <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                                {benefit.icon}
                           </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                                <p className="mt-1 text-gray-600">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                     <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
                           <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-eco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                           </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Immutable Ledger</h3>
                                <p className="mt-1 text-gray-600">All transactions are final and recorded on a distributed ledger for permanent proof.</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default KeyBenefits;
