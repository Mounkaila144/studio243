import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Users, Building2 } from 'lucide-react';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Versions optimisées des images avec des tailles et des qualités différentes
  const heroImages = [
    {
      full: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
      preview: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=10&w=400&blur=10",
      alt: "Maison moderne écologique"
    },
    {
      full: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1920",
      preview: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=10&w=400&blur=10",
      alt: "Design intérieur minimaliste"
    },
    {
      full: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1920",
      preview: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=10&w=400&blur=10",
      alt: "Villa contemporaine"
    },
    {
      full: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1920",
      preview: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=10&w=400&blur=10",
      alt: "Design intérieur minimaliste"
    }
  ];

  // Préchargement des images
  useEffect(() => {
    const imageStatuses = heroImages.map(() => false);
    setImagesLoaded(imageStatuses);

    heroImages.forEach((image, index) => {
      const img = new Image();
      img.src = image.full;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const featuredProjects = [
    {
      title: "Éco-Resort Kpalimé",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=30&w=400",
      description: "Centre de villégiature écologique intégré dans la nature"
    },
    {
      title: "Résidence Durable Lomé",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=30&w=400",
      description: "Maison moderne utilisant des matériaux locaux"
    },
    {
      title: "Centre Communautaire Sokodé",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
      thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=30&w=400",
      description: "Espace communautaire à faible impact environnemental"
    }
  ];

  // Composant d'image progressive
  const ProgressiveImage = ({ src, lowQualitySrc, alt, className, index }: { 
    src: string, 
    lowQualitySrc: string, 
    alt: string, 
    className: string,
    index: number
  }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    return (
      <div className="relative overflow-hidden">
        {/* Image floutée de faible qualité */}
        <img 
          src={lowQualitySrc} 
          alt={alt} 
          className={`${className} ${isLoaded ? 'opacity-0' : 'opacity-100'} absolute inset-0 transition-opacity duration-500`} 
        />
        
        {/* Image haute qualité */}
        <img 
          ref={el => {
            if (el) imagesRef.current[index] = el;
          }}
          src={src} 
          alt={alt}
          loading="lazy"
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} 
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[90vh] flex items-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="w-full h-full"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <ProgressiveImage 
                src={heroImages[currentImageIndex].full} 
                lowQualitySrc={heroImages[currentImageIndex].preview}
                alt={heroImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
                index={currentImageIndex}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Architecture Durable Unique
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            Créons ensemble des espaces durables qui inspirent et transforment la vie.
          </motion.p>
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200"
          >
            Contactez-nous
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Image ${index + 1}`}
            />
          ))}
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Approche</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous créons des espaces qui respectent l'environnement tout en plaçant l'humain au cœur de chaque projet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Durable</h3>
              <p className="text-gray-600">Solutions architecturales respectueuses de l'environnement</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Humain</h3>
              <p className="text-gray-600">L'humain au cœur de chaque conception</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovant</h3>
              <p className="text-gray-600">Des solutions créatives et avant-gardistes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projets Phares</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-48 overflow-hidden">
                  <ProgressiveImage
                    src={project.image}
                    lowQualitySrc={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    index={index + heroImages.length}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;