'use client';

import { motion } from 'framer-motion';
import { EyeOff, ShieldOff, DollarSign } from 'lucide-react';

const problemVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.8 }, // More aggressive initial state
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } } // Longer duration
};

const ProblemCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <motion.div 
        variants={problemVariants} 
        className="bg-white dark:bg-bacss-dark-gray/50 p-6 rounded-lg text-center shadow-lg hover:shadow-red-500/20 hover:-translate-y-4 transition-all duration-300 transform" // Added shadow and hover effects
    >
        <div className="inline-block p-4 bg-red-500/10 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-red-500 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </motion.div>
);

export const ProblemSection = () => {
    return (
        <motion.section 
            className="py-20 bg-gray-100 dark:bg-black/90"
            initial={{ opacity: 0, y: 150 }} // More dramatic section entrance
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">El Desafío del Mercado Actual (Ecuador 2025)</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Los problemas críticos que frenan la escalabilidad de las PYMES.</p>
                </div>
                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    variants={{ visible: { transition: { staggerChildren: 0.25 } } }} // Increased stagger
                >
                    <ProblemCard icon={<EyeOff size={32} className="text-red-500" />} title="Visibilidad Cero">
                        Inventarios desactualizados que causan compras innecesarias o pérdida de ventas por falta de stock.
                    </ProblemCard>
                    <ProblemCard icon={<ShieldOff size={32} className="text-red-500" />} title="Vulnerabilidad de Datos">
                        Dependencia de hojas de cálculo compartidas que no tienen seguridad, control de versiones ni respaldos automáticos.
                    </ProblemCard>
                    <ProblemCard icon={<DollarSign size={32} className="text-red-500" />} title="Altos Costos de Consultoría">
                        Soluciones internacionales genéricas que no se adaptan a la realidad local y tienen costos de implementación prohibitivos.
                    </ProblemCard>
                </motion.div>
            </div>
        </motion.section>
    );
};
