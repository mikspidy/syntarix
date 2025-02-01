import React from 'react';
import { BarChart, Cloud, Code, Globe, Lightbulb, Wallet } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence and drive growth.'
  },
  {
    icon: Cloud,
    title: 'Salesforce Development',
    description: 'Custom Salesforce solutions to streamline your business processes and enhance productivity.'
  },
  {
    icon: Wallet,
    title: 'Finance Solutions',
    description: 'Innovative financial technology solutions for modern businesses.'
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored software solutions built with cutting-edge technologies.'
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Consulting',
    description: 'Strategic guidance to drive digital transformation and innovation.'
  }
];

export default function Services() {
  return (
    <section id='services' className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}