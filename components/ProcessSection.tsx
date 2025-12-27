'use client';

import { motion } from 'framer-motion';
import { Scan, Puzzle, Rocket, Users } from 'lucide-react';

const processSteps = [
    {
        icon: <Scan size={32} />,
        title: "Diagnóstico Técnico",
        description: "Evaluamos tus sistemas, redes y flujos actuales sin compromiso para entender el punto de partida."
    },
    {
        icon: <Puzzle size={32} />,
        title: "Arquitectura de Solución",
        description: "Diseñamos un plan de desarrollo que prioriza los problemas más costosos y urgentes para tu empresa."
    },
    {
        icon: <Rocket size={32} />,
        title: "Despliegue Progresivo",
        description: "Implementamos por módulos (MVP) para que empieces a ver resultados tangibles en menos de 30 días."
    },
    {
        icon: <Users size={32} />,
        title: "Capacitación y Soporte",
        description: "Entrenamiento presencial a tu equipo en Quito y soporte técnico 24/7 para garantizar la adopción."
    }
];

const StepCard = ({ step, index }: { step: any, index: number }) => {
    const cardVariants = {
        hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 }, // Alternating x, added scale
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
    };
    return (
        <motion.div 
            className="flex items-start space-x-4 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 transform hover:scale-105" // Added hover effects
            custom={index}
            variants={cardVariants}
        >
            <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-16 h-16 bg-bacss-gold/10 text-bacss-gold rounded-full flex items-center justify-center border-2 border-bacss-gold/30">
                    {step.icon}
                </div>
                {index < processSteps.length - 1 && <div className="w-px h-24 bg-bacss-gold/30 mt-4"></div>}
            </div>
            <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{index + 1}. {step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
        </motion.div>
    );
};

export const ProcessSection = () => {
    return (
        <motion.section 
            className="py-20 bg-gray-50 dark:bg-bacss-dark-gray" // Added background for better contrast
            initial={{ opacity: 0, y: 150 }} // More dramatic section entrance
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">El "Método BACSS" de Implementación</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Un proceso transparente para garantizar el éxito.</p>
                </div>
                <motion.div 
                    className="flex flex-col space-y-8"
                    variants={{ visible: { transition: { staggerChildren: 0.35, delayChildren: 0.2 } } }} // Increased stagger and delay
                >
                    {processSteps.map((step, index) => (
                        <StepCard key={index} step={step} index={index} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};
