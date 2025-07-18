"use client";

import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../constants/animations";
import PersonIllustration from "../assets/svg/person-illustration";

export function HeroSection() {
  return (
    <section id="inicio" className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-30 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              variants={fadeInUp}
            >
              Transformamos{" "}
              <span className="underline decoration-[#756BFF] decoration-4 underline-offset-8">
                tus ideas
              </span>{" "}
              en software que impulsa{" "}
              <span className="underline decoration-[#756BFF] decoration-4 underline-offset-8">
                tu negocio
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-lg"
              variants={fadeInUp}
            >
              Fábrica de software a la medida. 100% digital, sin bullshit.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white btn-hover rounded-lg text-lg px-8 py-6"
              >
                Quiero una página web
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-black text-black btn-hover rounded-lg text-lg px-8 py-6"
              >
                Quiero algo más
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
              <PersonIllustration />
            {/* <div className="w-96 h-96 bg-gradient-to-br from-[#756BFF] to-[#9D95FF] rounded-full flex items-center justify-center">
              <Code className="w-32 h-32 text-white" />
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
