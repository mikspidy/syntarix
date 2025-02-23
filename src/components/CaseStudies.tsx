import React from 'react';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Digital Transformation',
    client: 'Global Retail Chain',
    result: '150% increase in online sales',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Cloud Migration',
    client: 'Financial Services',
    result: '40% reduction in operational costs',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'AI-Powered Analytics',
    client: 'E-commerce Platform',
    result: '30% improvement in customer retention',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Cybersecurity Enhancement',
    client: 'Healthcare Organization',
    result: '80% reduction in security breaches',
    image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Automation & Workflow Optimization',
    client: 'Manufacturing Industry',
    result: '50% increase in process efficiency',
    image: 'https://images.unsplash.com/photo-1581091870621-1c89a6f99044?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Custom Software Development',
    client: 'Logistics & Supply Chain',
    result: '25% improvement in delivery speed',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];


const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Case Studies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-1"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800 p-8">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-500 opacity-20 blur-2xl" />
                
                <h3 className="text-2xl font-semibold text-white mb-4">{study.title}</h3>
                <p className="text-gray-300 mb-2">Client: {study.client}</p>
                <p className="text-blue-400 mb-6">Result: {study.result}</p>
                
                <button className="group inline-flex items-center text-white">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
