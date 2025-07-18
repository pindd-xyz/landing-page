"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../constants/animations";

export function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Web Applications",
      description: "Aplicaciones web modernas, rápidas y escalables. Desde landing pages hasta plataformas complejas."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Apps nativas y cross-platform que conectan con tus usuarios en cualquier dispositivo."
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Expande tu equipo con desarrolladores senior que se integran perfectamente a tu cultura."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600">Soluciones digitales que transforman tu negocio</p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#756BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
