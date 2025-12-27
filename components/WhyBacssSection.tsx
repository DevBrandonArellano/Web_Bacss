'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Database, MapPin } from 'lucide-react';

const benefitVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8 }, // More aggressive initial state
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } } // Longer duration
};

const BenefitCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <motion.div 
        variants={benefitVariants} 
        className="bg-white dark:bg-bacss-dark-gray/50 p-8 rounded-lg shadow-lg hover:shadow-bacss-gold/20 hover:-translate-y-4 transition-all duration-300 transform" // Added hover effects
    >
        <div className="text-bacss-gold mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </motion.div>
);

export const WhyBacssSection = () => {
    return (
        <motion.section 
            className="py-20 bg-gray-100 dark:bg-black/90"
            initial={{ opacity: 0, y: 150, scale: 0.9 }} // More dramatic section entrance
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">¿Por qué confiar en BACSS S.A.S.?</h2>
                </div>
                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    variants={{ visible: { transition: { staggerChildren: 0.25 } } }} // Increased stagger
                >
                    <BenefitCard icon={<TrendingUp size={40} />} title="Enfoque en el ROI">
                        Cada dólar invertido en nuestro software busca reducir tus costos operativos desde el primer trimestre.
                    </BenefitCard>
                    <BenefitCard icon={<Database size={40} />} title="Soberanía de Datos">
                        A diferencia de SaaS globales, con BACSS tú eres el dueño total de tu base de datos y tus modelos de IA.
                    </BenefitCard>
                    <BenefitCard icon={<MapPin size={40} />} title="Presencia Local">
                        Soporte técnico real en Quito. No somos un ticket en un sistema internacional; somos tus socios tecnológicos locales.
                    </BenefitCard>
                </motion.div>
            </div>
        </motion.section>
    );
};
