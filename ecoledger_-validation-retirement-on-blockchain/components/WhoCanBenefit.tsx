import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const beneficiaries = [
    "Corporates & Enterprises",
    "Carbon Credit Registries",
    "Sustainability Consultants & Auditors",
    "Governments & Regulators",
    "Investors & Financial Institutions",
    "Project Developers"
];

const WhoCanBenefit: React.FC = () => {
    return (
        <section id="use-cases" className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Who Can Benefit?</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            EcoLedger is designed for a wide range of stakeholders in the carbon market who require integrity and transparency.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {beneficiaries.map((beneficiary, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckIcon className="w-6 h-6 text-eco-primary mr-3 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium">{beneficiary}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-2xl">
                       <img src="/images/blockchain.png" 
  alt="Professionals discussing sustainability" 
  className="rounded-xl shadow-lg w-full" 
/>

                        <p className="text-center mt-4 text-gray-600 italic">Enhancing collaboration and trust across the entire ecosystem.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoCanBenefit;