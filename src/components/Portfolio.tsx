import React from 'react';
import { Globe, Shield, Code, Heart, BarChart, Truck, BookOpen } from 'lucide-react';
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Built a scalable e-commerce solution with React and Node.js',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    icon: Globe
  },
  {
    title: 'Banking System',
    description: 'Secure financial platform with real-time transactions',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800',
    icon: Shield
  },
  {
    title: 'AI Integration',
    description: 'Machine learning solutions for business automation',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
    icon: Code
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive patient record management with cloud integration',
    image: 'https://c4.wallpaperflare.com/wallpaper/330/266/446/disha-patani-wallpaper-preview.jpg',
    icon: Heart
  },
  {
    title: 'SaaS Dashboard',
    description: 'Interactive analytics dashboard for business intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    icon: BarChart
  },
  {
    title: 'Logistics & Supply Chain Platform',
    description: 'End-to-end tracking system for seamless supply chain management',
    image: 'data:image/jpeg;base64,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',
    icon: Truck
  },
  {
    title: 'EdTech Learning Platform',
    description: 'AI-powered online learning management system for education',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800',
    icon: BookOpen
  }
];


const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <project.icon className="absolute top-4 right-4 h-6 w-6 text-blue-400" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
