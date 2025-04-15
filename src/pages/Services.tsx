import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, PencilRuler, Lightbulb, Recycle, TreePine, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <PencilRuler className="h-8 w-8" />,
      title: "Conception Architecturale",
      description: "Création de plans et designs innovants adaptés à vos besoins spécifiques, en harmonie avec l'environnement."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Conseil en Durabilité",
      description: "Expertise en solutions écologiques et matériaux durables pour minimiser l'impact environnemental."
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: "Gestion de Projet",
      description: "Supervision complète de votre projet, de la conception initiale à la réalisation finale."
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Rénovation Écologique",
      description: "Transformation de bâtiments existants avec une approche éco-responsable."
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Architecture Paysagère",
      description: "Intégration harmonieuse de votre projet dans son environnement naturel."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Design d'Intérieur",
      description: "Création d'espaces intérieurs fonctionnels et esthétiques respectant les principes du développement durable."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
            alt="Services d'architecture"
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
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Des solutions architecturales durables et innovantes pour vos projets
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à Démarrer Votre Projet ?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à réaliser votre vision architecturale durable.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;