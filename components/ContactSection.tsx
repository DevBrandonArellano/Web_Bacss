'use client';

import { motion } from 'framer-motion';
import { Phone, Calendar, Mail } from 'lucide-react';

const contactCardVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8 }, // More aggressive initial state
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } } // Longer duration
};

const ContactCard = ({ icon, title, cta, href, isPrimary = false }: { icon: React.ReactNode, title: string, cta: string, href: string, isPrimary?: boolean }) => {
    const primaryClasses = "bg-bacss-gold text-bacss-dark-gray hover:bg-opacity-90";
    const secondaryClasses = "bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600";
    
    return (
            <motion.div 
                variants={contactCardVariants} 
                className="bg-white dark:bg-bacss-dark-gray/50 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300" // Added hover effects
            >            <div className="inline-block p-4 bg-bacss-gold/10 rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">{title}</h3>
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block py-3 px-6 rounded-lg font-bold transition-all duration-300 ${isPrimary ? primaryClasses : secondaryClasses}`}
            >
                {cta}
            </a>
        </motion.div>
    );
}

export const ContactSection = () => {
    // Placeholder URLs - replace with actual links
    const whatsappUrl = `https://api.whatsapp.com/send?phone=593123456789&text=${encodeURIComponent("Hola BACSS, estoy interesado en sus servicios de software.")}`;
    const calendlyUrl = "https://calendly.com/your-link"; // Replace with your Calendly or booking link
    const mailtoUrl = "mailto:contacto@bacss.com"; // Replace with your email

    return (
        <motion.section 
            id="contacto"
            className="py-20 bg-gray-50 dark:bg-black/90" // Added background for better contrast
            initial={{ opacity: 0, y: 150, scale: 0.9 }} // More dramatic section entrance
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Hablemos de tu Proyecto</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
                        Estamos en Quito, listos para entender el próximo reto de tu empresa. Ya sea que busques automatizar tu inventario o implementar IA privada, tenemos la solución para ti.
                    </p>
                </div>
                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    variants={{ visible: { transition: { staggerChildren: 0.25 } } }} // Increased stagger
                >
                    <ContactCard 
                        icon={<Phone size={32} className="text-bacss-gold" />} 
                        title="Directo"
                        cta="Hablemos por WhatsApp"
                        href={whatsappUrl}
                        isPrimary
                    />
                    <ContactCard 
                        icon={<Calendar size={32} className="text-bacss-gold" />} 
                        title="Agendar"
                        cta="Sesión técnica gratuita (15 min)"
                        href={calendlyUrl}
                    />
                    <ContactCard 
                        icon={<Mail size={32} className="text-bacss-gold" />} 
                        title="Email"
                        cta="contacto@bacss.com"
                        href={mailtoUrl}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};
