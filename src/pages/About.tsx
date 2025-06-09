import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Leaf, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Approche Centrée sur l'Humain",
      description: "Nous plaçons les besoins et le bien-être des utilisateurs au cœur de chaque projet."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Engagement Environnemental",
      description: "Notre approche privilégie des solutions durables et respectueuses de l'environnement."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence Architecturale",
      description: "Nous visons l'excellence dans chaque aspect de nos créations."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation Continue",
      description: "Nous restons à la pointe des dernières innovations en architecture durable."
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
            alt="À Propos"
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
            À Propos de Studio 243
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Une vision moderne de l'architecture durable au Togo
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                Fondé avec la vision de transformer le paysage architectural du Togo, Studio 243 s'est établi comme un leader dans la conception d'espaces durables et innovants.
              </p>
              <p className="text-gray-600 mb-4">
                Notre engagement envers l'excellence architecturale et la durabilité environnementale nous a permis de créer des espaces qui inspirent et transforment la vie de leurs occupants.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, nous continuons d'innover et de repousser les limites de l'architecture durable, tout en restant fidèles à notre mission de créer des espaces qui harmonisent nature et modernité.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
                alt="Notre équipe"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;