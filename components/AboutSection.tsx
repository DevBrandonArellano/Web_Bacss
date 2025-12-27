'use client';

import { motion } from 'framer-motion';

export const AboutSection = () => {
    return (
        <motion.section 
            className="py-20 bg-gray-50 dark:bg-bacss-dark-gray"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-bacss-gold mb-4">Nosotros: Tu Visión y Diferencial</h2>
                <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
                    En BACSS S.A.S., somos una consultora de software nacida de la nueva generación de ingenieros en Quito. Nuestra visión es simple: democratizar la tecnología de vanguardia para PYMES y Startups en Ecuador. No vendemos software empaquetado; creamos equipos técnicos y soluciones personalizadas que se adaptan a la necesidad exacta de cada proyecto. Creemos en la soberanía de los datos, por eso apostamos por la Inteligencia Artificial On-Premise, garantizando que la información estratégica de tu empresa siempre permanezca bajo tu control.
                </p>
            </div>
        </motion.section>
    );
};
