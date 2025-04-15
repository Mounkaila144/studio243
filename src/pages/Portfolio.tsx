import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Éco-Resort Kpalimé",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      description: "Centre de villégiature écologique intégré dans la nature"
    },
    {
      title: "Résidence Durable Lomé",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      description: "Maison moderne utilisant des matériaux locaux"
    },
    {
      title: "Centre Communautaire Sokodé",
      category: "public",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      description: "Espace communautaire à faible impact environnemental"
    },
    {
      title: "Bureaux Verts Lomé",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
      description: "Espaces de travail écologiques et innovants"
    },
    {
      title: "Villa Kara",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      description: "Résidence privée intégrée dans son environnement"
    },
    {
      title: "École Écologique Atakpamé",
      category: "public",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
      description: "Établissement scolaire durable et moderne"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
            alt="Portfolio"
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
            Notre Portfolio
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Découvrez nos réalisations en architecture durable
          </motion.p>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full ${
                filter === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-emerald-50'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-6 py-2 rounded-full ${
                filter === 'residential'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-emerald-50'
              }`}
            >
              Résidentiel
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-6 py-2 rounded-full ${
                filter === 'commercial'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-emerald-50'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('public')}
              className={`px-6 py-2 rounded-full ${
                filter === 'public'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-emerald-50'
              }`}
            >
              Public
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <span className="inline-block mt-4 px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm">
                    {project.category === 'residential' ? 'Résidentiel' :
                     project.category === 'commercial' ? 'Commercial' : 'Public'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;