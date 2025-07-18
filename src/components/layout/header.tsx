"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.nav
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              pindd<span className="text-[12px] accent-text">.xyz</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Nosotros
            </a>
            <Button
              className=" text-white btn-hover rounded-lg"
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
