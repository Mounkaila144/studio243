import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correction pour les icônes Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Position de Paris
const positionParis: [number, number] = [48.8828, 2.3795]; // 14 rue de Nantes, 75019 Paris

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Gestionnaire d'envoi du formulaire via WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    let isValid = true;
    
    if (name.trim() === '') {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }
    
    if (email.trim() === '' || !email.includes('@')) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }
    
    if (message.trim() === '') {
      setMessageError(true);
      isValid = false;
    } else {
      setMessageError(false);
    }
    
    if (isValid) {
      // Formatage du message pour WhatsApp
      const whatsappMessage = `*Nouveau message de*: ${name}%0A*Email*: ${email}%0A%0A*Message*:%0A${message}`;
      
      // Ouvrir WhatsApp avec le message préformaté
      window.open(`https://wa.me/33751047908?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      
      // Réinitialiser le formulaire
      setName('');
      setEmail('');
      setMessage('');
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] flex items-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Discutons de votre projet d'architecture durable
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-2 border ${nameError ? 'border-red-500 bg-red-50' : 'border-gray-300'} rounded-md focus:ring-emerald-500 focus:border-emerald-500`}
                  />
                  {nameError && <p className="text-red-500 text-sm mt-1">Veuillez entrer votre nom</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-2 border ${emailError ? 'border-red-500 bg-red-50' : 'border-gray-300'} rounded-md focus:ring-emerald-500 focus:border-emerald-500`}
                  />
                  {emailError && <p className="text-red-500 text-sm mt-1">Veuillez entrer une adresse email valide</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-2 border ${messageError ? 'border-red-500 bg-red-50' : 'border-gray-300'} rounded-md focus:ring-emerald-500 focus:border-emerald-500`}
                  ></textarea>
                  {messageError && <p className="text-red-500 text-sm mt-1">Veuillez entrer votre message</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <span>Envoyer sur WhatsApp</span>
                  <Send className="h-5 w-5" />
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  En cliquant sur "Envoyer", votre message sera envoyé via WhatsApp
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:shekinahkisoka@yahoo.com" className="text-emerald-600 break-all">
                        shekinahkisoka@yahoo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Téléphone</h3>
                      <a href="tel:+243891880684" className="text-emerald-600 block">
                        +243 8 91 88 06 84 (appel uniquement)
                      </a>
                      <a href="tel:+33751047908" className="text-emerald-600 block mt-1">
                        +33 7 51 04 79 08 (appel et WhatsApp)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Adresse</h3>
                      <p>14 rue de Nantes, 75019 Paris</p>
                      <p className="mt-1">Kintapo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Horaires d'ouverture</h3>
                      <p>Lundi - Vendredi: 8h - 18h</p>
                      <p>Samedi: 9h - 13h</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map integration - Version simplifiée */}
              <div className="h-64 rounded-lg overflow-hidden border-2 border-emerald-500 shadow-lg">
                <MapContainer 
                  center={positionParis}
                  zoom={13} 
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={positionParis}>
                    <Popup>
                      <div className="text-center p-2">
                        <h3 className="font-bold text-emerald-600">Studio243 Architecture</h3>
                        <p>14 rue de Nantes, 75019 Paris</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;