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
    image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6YvCKSL9rhn4bCmJiBFle4/3775b8153562217a30436a67bdb47c6c/GettyImages-1211642642.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000',
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
    image: 'https://www.saloodo.com/wp-content/uploads/2022/04/shutterstock_1702123405-768x332.jpg',
      icon: Truck
  },
  
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
