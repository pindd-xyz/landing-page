"use client";

import { CheckCircle, Rocket, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft } from "../constants/animations";

export function AboutSection() {
  const mission = [
    {
      icon: CheckCircle,
      title: "Outcomes-first",
      description: "Nos enfocamos en resultados reales que impulsen tu negocio, no solo en escribir código."
    },
    {
      icon: Rocket,
      title: "Innovación constante",
      description: "Utilizamos las últimas tecnologías y mejores prácticas para crear soluciones de vanguardia."
    }
  ];

  const culture = [
    {
      icon: Globe,
      title: "100% Remoto",
      description: "Trabajamos desde cualquier lugar del mundo, priorizando la flexibilidad y el balance."
    },
    {
      icon: Clock,
      title: "30 horas por semana",
      description: "Creemos en la productividad inteligente y el bienestar de nuestro equipo."
    }
  ];

  return (
    <section id="nosotros" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nosotros</h2>
          <p className="text-xl text-gray-600">Conoce nuestra filosofía y forma de trabajo</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Nuestra Misión</h3>
            <div className="space-y-4">
              {mission.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-[#756BFF] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Nuestra Cultura</h3>
            <div className="space-y-4">
              {culture.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-[#756BFF] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
