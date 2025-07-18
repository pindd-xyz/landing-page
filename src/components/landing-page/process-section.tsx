"use client";

import { Separator } from "@/components/ui/separator";
import { Lightbulb, Code, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../constants/animations";

export function ProcessSection() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Idea",
      description: "Definimos y refinamos tu visión hasta convertirla en un plan claro."
    },
    {
      icon: Code,
      title: "MVP",
      description: "Desarrollamos un producto mínimo viable para validar rápidamente."
    },
    {
      icon: TrendingUp,
      title: "Escala",
      description: "Iteramos y escalamos basándonos en feedback real de usuarios."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nuestro Proceso</h2>
          <p className="text-xl text-gray-600">De la idea al producto en producción</p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.div className="text-center mb-8 md:mb-0" variants={fadeInUp}>
                <div className="w-20 h-20 bg-[#756BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div variants={fadeInUp}>
                  <Separator className="hidden md:block w-24 mx-8" />
                  <Separator orientation="vertical" className="md:hidden h-12 my-4" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
