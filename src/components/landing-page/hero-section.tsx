"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../constants/animations";
import PersonIllustration from "../assets/svg/person-illustration";

export function HeroSection() {
  // Dynamic message that can be easily updated for latest news/highlights
  const dynamicMessage = "Estamos en wplace.live, orgullosamente en Tampico 🌮";

  return (
    <section id="inicio" className="relative pt-24 pb-20 overflow-hidden">
      <motion.div
        className="hidden lg:block lg:absolute left-0 right-0 top-0 bottom-0 inset-0 dotted-bg -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      ></motion.div>
      <div className="hidden lg:block lg:absolute left-0 right-0 top-0 bottom-0 inset-0 dotted-bg-gradient -z-[5]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-12 items-center">
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
                onClick={() =>
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-black hover:bg-gray-800 text-white btn-hover rounded-lg text-lg px-8 py-6"
              >
                Quiero una página web
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                size="lg"
                className="border-black text-black btn-hover rounded-lg text-lg px-8 py-6"
              >
                Quiero algo más
              </Button>
            </motion.div>

            <motion.div
              className="inline-flex items-center bg-[#756BFF]/10 text-[#756BFF] px-4 py-2 rounded-full text-sm font-medium border border-[#756BFF]/20"
              variants={fadeInUp}
            >
              ✨ {dynamicMessage}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="scale-85 -translate-x-10 translate-y-5">
              <PersonIllustration />
            </div>
            {/* <div className="w-96 h-96 bg-gradient-to-br from-[#756BFF] to-[#9D95FF] rounded-full flex items-center justify-center">
              <Code className="w-32 h-32 text-white" />
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
