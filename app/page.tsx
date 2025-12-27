'use client';

import Dashboard from '@/components/Dashboard';
import { BarChart, Bot, ShieldCheck, Cpu, BrainCircuit, CloudCog, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { AboutSection } from '@/components/AboutSection';
import { ProblemSection } from '@/components/ProblemSection';
import { ProcessSection } from '@/components/ProcessSection';
import { WhyBacssSection } from '@/components/WhyBacssSection';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';

// A simple, reusable animated sphere for visual flair
const AnimatedSphere = () => (
    <motion.div 
        className="w-64 h-64 md:w-96 md:h-96 rounded-full"
        style={{
            background: 'linear-gradient(180deg, #b89b5e 0%, #1a1a1a 100%)'
        }}
        animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360, 0],
            y: [0, 20, 0]
        }}
        transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }}
    />
);


const ServiceCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  return (
    <motion.div 
      className="bg-white dark:bg-bacss-dark-gray p-6 rounded-lg border border-gray-200 dark:border-gray-700/50 shadow-lg hover:shadow-bacss-gold/20 hover:-translate-y-4 transition-all duration-300 transform hover:scale-105"
      variants={cardVariants}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-bacss-gold/10 rounded-full mb-4 border border-bacss-gold/30">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-bacss-gold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </motion.div>
  );
};

const FloatingChatButton = () => (
    <motion.button 
        className="fixed bottom-8 right-8 bg-bacss-gold text-bacss-dark-gray p-4 rounded-full shadow-lg z-50"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 10 }}
        whileHover={{ scale: 1.2, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
    >
      <Bot size={32} />
    </motion.button>
  );

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100, x: -50 }, // More dramatic slide and fade
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1, ease: "easeOut" } } // Longer duration
  };

  const servicesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased stagger
        delayChildren: 0.2 // Added delay for initial visibility
      }
    }
  };

  // Variants for individual hero text elements
  const heroTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <>
      <section 
        id="hero"
        className="relative flex items-center h-screen overflow-hidden bg-gray-50 dark:bg-bacss-dark-gray text-black dark:text-white"
      >
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } } // Stagger children for words
            }}
          >
            <motion.div variants={sectionVariants}>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                {"Transformando Negocios con ".split(" ").map((word, i) => (
                  <motion.span key={i} className="inline-block mr-2" variants={heroTextVariants}>
                    {word}
                  </motion.span>
                ))}
                <motion.span className="inline-block" variants={heroTextVariants}>
                  <span className="text-bacss-gold">Inteligencia Artificial</span>
                </motion.span>
              </h1>
              <motion.p variants={heroTextVariants} className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
                BACSS: Su socio estratégico en Quito para software de inventarios, automatización y ciberseguridad.
              </motion.p>
              <motion.a
                href="#servicios"
                className="bg-bacss-gold text-bacss-dark-gray font-bold py-3 px-8 rounded-full text-lg inline-block"
                variants={heroTextVariants}
                whileHover={{ scale: 1.1 }} // Removed boxShadow
                whileTap={{ scale: 0.9 }}
              >
                Descubre Nuestras Soluciones
              </motion.a>
            </motion.div>
            <motion.div className="hidden md:flex justify-center" variants={sectionVariants}>
                <AnimatedSphere />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <ProblemSection />

      <motion.section 
        id="servicios" 
        className="py-20 bg-white dark:bg-bacss-dark-gray/95"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Nuestro Portafolio de Soluciones</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Tecnología de punta adaptada a la realidad ecuatoriana.</p>
            <div className="h-1 w-24 bg-bacss-gold mx-auto mt-4"></div>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={servicesContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiceCard icon={<BarChart size={32} className="text-bacss-gold" />} title="Gestión Inteligente de Inventarios">
                Optimización de stock mediante software a medida, diseñado para eliminar errores humanos y predecir faltantes.
            </ServiceCard>
            <ServiceCard icon={<BrainCircuit size={32} className="text-bacss-gold" />} title="IA On-Premise & Reportes Gerenciales">
                Implementación de modelos de lenguaje (Ollama) que corren localmente. Transformamos datos en reportes claros y accionables.
            </ServiceCard>
            <ServiceCard icon={<CloudCog size={32} className="text-bacss-gold" />} title="Consultoría de Infraestructura y Nube">
                Configuración de equipos, redes seguras y despliegue en Oracle Cloud (OCI), asegurando una base técnica robusta y escalable.
            </ServiceCard>
            <ServiceCard icon={<Users size={32} className="text-bacss-gold" />} title="Soluciones por Proyecto (Staffing)">
                Armamos el equipo técnico ideal para tu necesidad específica, garantizando talento calificado para desarrollos puntuales.
            </ServiceCard>
          </motion.div>
        </div>
      </motion.section>
      
      <ProcessSection />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Dashboard />
      </motion.div>

      <WhyBacssSection />
      <FaqSection />
      <ContactSection />
      
      <FloatingChatButton />
    </>
  );
}
