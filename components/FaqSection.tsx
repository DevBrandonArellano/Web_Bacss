'use client';

import { motion } from 'framer-motion';
import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
    {
        title: "¿La IA reemplazará a mi personal?",
        children: "No. La IA de BACSS actúa como un copiloto que elimina el trabajo aburrido y repetitivo para que tu personal pueda enfocarse en tareas de mayor valor como vender, gestionar y tomar decisiones estratégicas."
    },
    {
        title: "¿Es muy caro implementar software a medida?",
        children: "Diseñamos planes escalables específicamente para Startups y PYMES. Puedes empezar con un módulo de inventario básico (Producto Mínimo Viable) e ir añadiendo funcionalidades a medida que tu negocio crece y genera ganancias."
    },
    {
        title: "¿Cuánto tiempo toma ver resultados?",
        children: "Gracias a nuestro 'Método BACSS' de despliegue progresivo, nuestros clientes suelen empezar a ver resultados medibles, como la reducción de errores de inventario o la automatización de reportes, en menos de 90 días."
    },
    {
        title: "¿Qué tan seguros están mis datos?",
        children: "La seguridad es nuestra máxima prioridad. Para clientes que eligen nuestra solución de 'IA Nativa', los datos nunca salen de sus servidores. Para soluciones en la nube, utilizamos las prácticas de ciberseguridad más avanzadas de Oracle Cloud Infrastructure (OCI)."
    }
];

export const FaqSection = () => {
    return (
        <motion.section 
            className="py-20 bg-gray-50 dark:bg-bacss-dark-gray" // Added background for better contrast
            initial={{ opacity: 0, y: 150, scale: 0.9 }} // More dramatic section entrance
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Preguntas Frecuentes (FAQ)</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Aclarando tus dudas más comunes.</p>
                </div>
                <Accordion items={faqItems} />
            </div>
        </motion.section>
    );
};
