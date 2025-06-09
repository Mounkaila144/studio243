import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {Mail, Phone, MapPin, Clock, Send, Users, Globe} from 'lucide-react';
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

const positionParis: [number, number] = [48.8828, 2.3795];

const Contact = () => {
  // États pour le formulaire simple
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // États pour le formulaire détaillé
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
    projectType: '',
    otherProjectType: '',
    description: '',
    location: '',
    locationOther: '',
    terrainSituation: '',
    hasLand: '',
    budget: '',
    services: '',
    terrainSize: '',
    customSize: '',
    timeline: '',
    visioMeeting: '',
    topo: ''
  });

  const [activeForm, setActiveForm] = useState<'simple' | 'detailed'>('simple');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Gestionnaire pour le formulaire simple
  const handleSimpleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
      const whatsappMessage = `*Nouveau message de*: ${name}%0A*Email*: ${email}%0A%0A*Message*:%0A${message}`;
      window.open(`https://wa.me/33751047908?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      
      setName('');
      setEmail('');
      setMessage('');
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  // Gestionnaire pour le formulaire détaillé
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDetailedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construire le message WhatsApp détaillé
    let whatsappMessage = `*🏗️ NOUVELLE DEMANDE STUDIO 243*%0A%0A`;
    whatsappMessage += `*👤 PORTEUR DU PROJET*%0A`;
    whatsappMessage += `• Nom: ${formData.name}%0A`;
    whatsappMessage += `• Pays: ${formData.country}%0A`;
    whatsappMessage += `• Email: ${formData.email}%0A`;
    whatsappMessage += `• WhatsApp: ${formData.phone}%0A%0A`;
    
    whatsappMessage += `*🏠 PROJET*%0A`;
    whatsappMessage += `• Type: ${formData.projectType}${formData.otherProjectType ? ` (${formData.otherProjectType})` : ''}%0A`;
    whatsappMessage += `• Description: ${formData.description}%0A`;
    whatsappMessage += `• Localisation: ${formData.location}${formData.locationOther ? ` (${formData.locationOther})` : ''}%0A`;
    
    if (formData.terrainSituation) {
      whatsappMessage += `• Situation terrain: ${formData.terrainSituation}%0A`;
    }
    
    whatsappMessage += `• Terrain: ${formData.hasLand}%0A`;
    whatsappMessage += `• Budget: ${formData.budget}%0A`;
    whatsappMessage += `• Services: ${formData.services}%0A`;
    whatsappMessage += `• Surface: ${formData.terrainSize}${formData.customSize ? ` (${formData.customSize})` : ''}%0A`;
    whatsappMessage += `• Timeline: ${formData.timeline}%0A`;
    whatsappMessage += `• Visio: ${formData.visioMeeting}%0A`;
    
    if (formData.topo) {
      whatsappMessage += `• Documents: ${formData.topo}%0A`;
    }

    window.open(`https://wa.me/33751047908?text=${whatsappMessage}`, '_blank');
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      country: '',
      email: '',
      phone: '',
      projectType: '',
      otherProjectType: '',
      description: '',
      location: '',
      locationOther: '',
      terrainSituation: '',
      hasLand: '',
      budget: '',
      services: '',
      terrainSize: '',
      customSize: '',
      timeline: '',
      visioMeeting: '',
      topo: ''
    });
    
    alert('Merci ! Nous vous recontacterons dans les 24h.');
  };

  return (
    <div className="min-h-screen ">
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

      {/* Choix du type de formulaire */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp} 
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choisissez votre type de contact
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setActiveForm('simple')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeForm === 'simple'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-emerald-50'
                }`}
              >
                📧 Contact Simple
              </button>
              <button
                onClick={() => setActiveForm('detailed')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeForm === 'detailed'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-emerald-50'
                }`}
              >
                🏗️ Demande de Projet Détaillée
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulaire Simple */}
      {activeForm === 'simple' && (
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
                <form ref={formRef} onSubmit={handleSimpleSubmit} className="space-y-6">
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

                {/* Map */}
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
      )}

      {/* Formulaire Détaillé */}
      {activeForm === 'detailed' && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <span className="mr-3">✈️</span>
                Vous êtes basé à l'étranger ou au Congo et souhaitez bâtir au Congo ?
              </h2>
              <p className="text-lg text-gray-600">
                Remplissez ce formulaire, nous vous recontacterons sous 24h.
              </p>
              <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
            </motion.div>

            <motion.form 
              {...fadeInUp}
              onSubmit={handleDetailedSubmit}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              {/* PORTEUR DU PROJET */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-emerald-600 mr-2" />
                  PORTEUR DU PROJET
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Noms *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pays de résidence *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      placeholder="Ex: France, Belgique, Canada..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse e-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone WhatsApp (avec indicatif) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Ex: +33 6 12 34 56 78"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* VOTRE PROJET */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Globe className="h-6 w-6 text-emerald-600 mr-2" />
                  VOTRE PROJET
                </h3>

                {/* Type de projet */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Quel type de projet envisagez-vous ? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      'Maison familiale',
                      'Immeuble locatif',
                      'Commerce',
                      'Équipements / Hotel',
                      'Autre'
                    ].map((type) => (
                      <label key={type} className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                        <input
                          type="radio"
                          name="projectType"
                          value={type}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                  {formData.projectType === 'Autre' && (
                    <input
                      type="text"
                      name="otherProjectType"
                      value={formData.otherProjectType}
                      onChange={handleInputChange}
                      placeholder="Précisez le type de projet"
                      className="mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  )}
                </div>

                {/* Description du projet */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description du projet (obligatoire) *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Décrivez votre projet en détail : type, usage prévu, caractéristiques souhaitées..."
                  />
                </div>
              </div>

              {/* Localisation du projet */}
              <div className="mb-10">
                <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                  Localisation du projet
                </h4>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choix de la ville :
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {['Kinshasa', 'Lubumbashi', 'Goma', 'Autre'].map((city) => (
                      <label key={city} className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                        <input
                          type="radio"
                          name="location"
                          value={city}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm">{city === 'Autre' ? 'Autre – à préciser' : city}</span>
                      </label>
                    ))}
                  </div>
                  {formData.location === 'Autre' && (
                    <input
                      type="text"
                      name="locationOther"
                      value={formData.locationOther}
                      onChange={handleInputChange}
                      placeholder="Précisez la ville"
                      className="mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Situation du terrain
                  </label>
                  <textarea
                    name="terrainSituation"
                    value={formData.terrainSituation}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Ex: RDC, Kinshasa, Gombe, Secteur résidentiel..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Autres sections raccourcies pour l'espace */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Statut du terrain :
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'Oui', label: 'Oui (déjà un terrain)' },
                      { value: 'Non', label: 'Non' },
                      { value: 'En cours d\'achat', label: 'En cours d\'achat' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasLand"
                          value={option.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Budget estimatif :
                  </label>
                  <div className="space-y-2">
                    {[
                      '< 50 000 $',
                      '50 000 – 100 000 $',
                      '100 000 – 200 000 $',
                      '+200 000 $',
                      'Non défini'
                    ].map((budget) => (
                      <label key={budget} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="budget"
                          value={budget}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm">{budget}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Type de prise en charge souhaitée :
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    'Conception uniquement',
                    'Conception + Suivi de chantier',
                    'Tout le projet de A à Z'
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                      <input
                        type="radio"
                        name="services"
                        value={service}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* ✅ Bouton d'envoi final */}
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                <div className="flex items-start space-x-3 mb-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h4 className="font-medium text-emerald-800 mb-1">Bouton d'envoi final</h4>
                    <p className="text-xs text-emerald-600 flex items-center">
                      <span className="mr-1">📩</span>
                      Nous vous répondons dans un délai de 24h, par e-mail ou WhatsApp.
                    </p>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-emerald-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  <span>✅ Envoyer ma demande</span>
                </motion.button>
              </div>
            </motion.form>
          </div>
        </section>
      )}
    </div>
  );
};

export default Contact; 