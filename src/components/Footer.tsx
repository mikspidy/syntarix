import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      message: formData.message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Form Submitted Successfully!', response);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log('Failed To Submit Form...', error);
      })
  }
  return (
    <footer className="bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div>
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: "150px",
                height: "25px",
              }}
            />
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses with innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: 'hover:text-blue-500', link: 'CHANGE_ME' },
                { Icon: Twitter, color: 'hover:text-blue-400', link: 'CHANGE_ME' },
                { Icon: Instagram, color: 'hover:text-pink-500', link: 'CHANGE_ME' },
                { Icon: Linkedin, color: 'hover:text-blue-600', link: 'CHANGE_ME' }
              ].map(({ Icon, color,link }) => (
                <a
                  key={color}
                  href={`${link}`}
                  className={`text-gray-400 transition-colors ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-blue-500" />
                <span>Mardan, Pakistan</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-blue-500" />
                <span>+92 343 9299 322</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-blue-500" />
                <span>contact@syntarix.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <textarea
                placeholder="Message"
                id="message"
                rows={4}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-shadow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} SyntariX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
