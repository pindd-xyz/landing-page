"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft } from "../constants/animations";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias! Te contactaremos pronto.");
    setFormData({ name: "", email: "", idea: "" });
  };

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-xl text-gray-600">Cuéntanos tu idea y la convertiremos en realidad</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Envíanos tu proyecto</CardTitle>
                <CardDescription>
                  Completa el formulario y te contactaremos en menos de 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Cuéntanos tu idea..."
                      rows={4}
                      value={formData.idea}
                      onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#756BFF] hover:bg-[#6B61FF] text-white btn-hover"
                  >
                    Enviar proyecto
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center space-y-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">¿Prefieres hablar directamente?</h3>
              <p className="text-gray-600 mb-6">
                Agenda una llamada gratuita de 30 minutos para discutir tu proyecto.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#756BFF] text-[#756BFF] hover:bg-[#756BFF] hover:text-white btn-hover"
                onClick={() => window.open('https://calendly.com/pindd-xyz', '_blank')}
              >
                Agendar llamada
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">O escríbenos directamente:</p>
              <a 
                href="mailto:hola@pindd.xyz" 
                className="flex items-center justify-center gap-2 text-[#756BFF] hover:underline"
              >
                <Mail className="w-5 h-5" />
                hola@pindd.xyz
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
