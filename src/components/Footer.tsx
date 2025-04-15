import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="h-8 w-8 text-emerald-500" />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Studio243</span>
                <span className="text-sm text-emerald-400">architecture</span>
              </div>
            </div>
            <p className="text-gray-400">
              Architecture durable et innovante au service de l'humain.
            </p>
            <div className="mt-4">
              <a href="https://www.studio243.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                www.studio243.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-emerald-500">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-emerald-500">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-emerald-500">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-500">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-500">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <a href="mailto:shekinahkisoka@yahoo.com" className="text-gray-400 hover:text-emerald-500 break-all">
                  shekinahkisoka@yahoo.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <a href="tel:+243891880684" className="text-gray-400 hover:text-emerald-500">
                  +243 8 91 88 06 84 (appel uniquement)
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <a href="tel:+33751047908" className="text-gray-400 hover:text-emerald-500">
                  +33 7 51 04 79 08 (appel et WhatsApp)
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p>14 rue de Nantes, 75019 Paris</p>
                  <p className="mt-1">Kintapo</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lundi - Vendredi: 8h - 18h</li>
              <li>Samedi: 9h - 13h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Studio243 Architecture. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;