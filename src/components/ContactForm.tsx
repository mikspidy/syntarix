import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const services = [
  'Digital Marketing',
  'Salesforce Development',
  'Finance Solutions',
  'Custom Development',
  'Data Analytics',
  'Innovation Consulting'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const serviceId = import.meta.env.VITE_SERVICEID;
  const templateId = import.meta.env.VITE_TEMPLATEID;
  const publicKey = import.meta.env.VITE_PUBLICKEY;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      to_name: 'Ihsaan Ullah',
      service: formData.service,
      message: formData.message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Form Submitted Successfully!', response);
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log('Failed To Submit Form...', error);
      })
  }

  return (
    <section id='contact' className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            Ready to transform your business? Let's start a conversation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                name="name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                name="email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
              Service
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              name="service"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white"
              required
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="group w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all"
          >
            <span>Send Message</span>
            <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}
