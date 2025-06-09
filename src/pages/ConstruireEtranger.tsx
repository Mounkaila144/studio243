import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Shield, CheckCircle, Video, FileText, Clock, MapPin, Phone, Mail, Send } from 'lucide-react';

const ConstruireEtranger = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourrez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis :', formData);
    alert('Merci ! Nous vous recontacterons dans les 24h.');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const guarantees = [
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Un interlocuteur unique",
      description: "Vous n'avez pas à courir entre architectes, ingénieurs, ouvriers et administrations : nous centralisons tout pour vous."
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Un projet sur-mesure",
      description: "Nous prenons en compte vos envies, votre budget, vos contraintes (visas, délais, emploi du temps), et vous proposons des solutions concrètes et adaptées."
    },
    {
      icon: <Video className="h-8 w-8 text-emerald-600" />,
      title: "Une gestion à distance transparente",
      description: "Rendez-vous réguliers en visioconférence, comptes rendus hebdomadaires avec photos/vidéos, documents en ligne, suivi budget et paiements."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
      title: "Un chantier maîtrisé",
      description: "Nous coordonnons les équipes sur le terrain, avec des artisans et entreprises validés, pour respecter qualité, délais et budget."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Premier contact en ligne",
      description: "Vous nous expliquez votre projet, vos attentes, votre calendrier."
    },
    {
      number: "02",
      title: "Étude de faisabilité et devis clair",
      description: "Nous analysons votre demande, visitons votre terrain, et vous proposons une solution sur-mesure."
    },
    {
      number: "03",
      title: "Conception & validation à distance",
      description: "Nous avançons étape par étape, avec vos retours (plans 2D/3D, visuels, chiffrages)."
    },
    {
      number: "04",
      title: "Suivi de chantier avec reporting",
      description: "Vous recevez régulièrement des nouvelles du chantier, et pouvez suivre l'avancement en toute sérénité."
    },
    {
      number: "05",
      title: "Réception finale & remise des clés",
      description: "Vous recevez un dossier complet de votre bâtiment, prêt à être utilisé ou mis en location."
    }
  ];

  const benefits = [
    "Gagner du temps et éviter les allers-retours inutiles",
    "Être informés sans se noyer dans les détails",
    "Se sentir compris et respectés, même à distance",
    "Avoir une équipe compétente, professionnelle et connectée"
  ];

  const services = [
    { icon: <Video className="h-6 w-6" />, text: "Rendez-vous réguliers en visioconférence (Zoom, WhatsApp)" },
    { icon: <FileText className="h-6 w-6" />, text: "Comptes rendus de chantier hebdomadaires (avec photos/vidéos)" },
    { icon: <Globe className="h-6 w-6" />, text: "Documents disponibles en ligne (devis, plans, factures)" },
    { icon: <Clock className="h-6 w-6" />, text: "Suivi du budget et des paiements, avec alertes en cas de dérive" },
    { icon: <Users className="h-6 w-6" />, text: "Une personne référente dédiée à votre projet" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <Globe className="h-16 w-16 text-emerald-200" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Construire à distance avec le
              <span className="block text-emerald-200">STUDIO 243</span>
              <span className="block text-2xl md:text-3xl font-medium mt-2">Spécial diaspora</span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Vous vivez à l'étranger et rêvez de construire en RDC ?<br />
                <span className="text-emerald-200 font-semibold">STUDIO 243 est votre relais de confiance sur place.</span>
              </p>
              <p className="text-lg opacity-90 mb-10">
                Une solution complète et sécurisée pour mener à bien votre projet, depuis l'étranger, sans mauvaise surprise.
              </p>
              <motion.a
                href="#formulaire"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-800 font-semibold rounded-full text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Étude gratuite de votre projet
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que nous vous garantissons
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-50 p-3 rounded-xl flex-shrink-0">
                    {guarantee.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gestion à distance transparente
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous avons développé une méthode de suivi spécifique pour nos clients basés hors de la RDC
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 hover:bg-emerald-100 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 text-emerald-700">
                  {service.icon}
                  <span className="font-medium">{service.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment ça se passe, concrètement ?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg flex items-start space-x-6"
              >
                <div className="bg-emerald-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce que nos clients aiment
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-center space-x-4"
              >
                <CheckCircle className="h-6 w-6 text-emerald-200 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <Phone className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous avez un projet ?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Contactez-nous dès maintenant pour une étude gratuite de votre besoin.<br />
              Ensemble, construisons la passerelle entre vos idées et la terre de vos racines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full text-lg hover:bg-emerald-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5 mr-2" />
                Formulaire de contact
              </motion.a>
              <motion.a
                href="https://wa.me/243XXXXXXXXX"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full text-lg hover:bg-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConstruireEtranger; 