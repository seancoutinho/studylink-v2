"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [language, setLanguage] = useState('en');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      title: "Your Gateway to European Education",
      subtitle: "Empowering African and Asian students to study in Germany, Poland, and the Netherlands",
      cta: "Start Your Journey",
    },
    fr: {
      title: "Votre Porte d'Entrée vers l'Éducation Européenne",
      subtitle: "Permettre aux étudiants africains et asiatiques d'étudier en Allemagne, en Pologne et aux Pays-Bas",
      cta: "Commencez Votre Voyage",
    },
    sw: {
      title: "Lango Lako la Elimu ya Ulaya",
      subtitle: "Kuwezesha wanafunzi wa Afrika na Asia kusoma Ujerumani, Poland, na Uholanzi",
      cta: "Anza Safari Yako",
    },
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="Students studying"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
          {content[language].title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 leading-relaxed text-gray-200">
          {content[language].subtitle}
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105">
          {content[language].cta} <ArrowRight className="ml-2 animate-pulse" />
        </Button>
        <div className="mt-12 flex justify-center space-x-4">
          {['en', 'fr', 'sw'].map((lang) => (
            <motion.button
              key={lang}
              onClick={() => setLanguage(lang)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                language === lang
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-transparent border border-white text-white hover:bg-white/20'
              }`}
            >
              {lang}
            </motion.button>
          ))}
        </div>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-8 h-8 rotate-90" />
      </div>
    </div>
  );
};

export default Hero;