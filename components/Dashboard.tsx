"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Lightbulb } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

// Datos de ejemplo para la tendencia de inventario
const inventoryData = [
  { name: 'Enero', stock: 4000 },
  { name: 'Febrero', stock: 3000 },
  { name: 'Marzo', stock: 5000 },
  { name: 'Abril', stock: 4500 },
  { name: 'Mayo', stock: 6000 },
  { name: 'Junio', stock: 5500 },
];

const AiInsightCard = () => (
  <div className="bg-white dark:bg-bacss-dark-gray p-6 rounded-lg border border-gray-200 dark:border-bacss-gold/50 shadow-lg flex items-center space-x-4">
    <div className="flex-shrink-0">
      <Lightbulb className="h-8 w-8 text-bacss-gold" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-black dark:text-white">Insight de IA</h4>
      <p className="text-bacss-gold text-xl font-bold">"Stock optimizado en un 20% este mes."</p>
    </div>
  </div>
);

const InventoryTrendChart = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    const tickColor = isDarkMode ? '#9ca3af' : '#374151';
    const gridColor = isDarkMode ? '#4a4a4a' : '#e5e7eb';
    const legendColor = isDarkMode ? '#ffffff' : '#000000';
    const tooltipBg = isDarkMode ? '#1a1a1a' : '#ffffff';

    return (
        <div className="bg-white dark:bg-bacss-dark-gray p-6 rounded-lg border border-gray-200 dark:border-gray-700/50 shadow-lg">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">Tendencia de Inventario</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={inventoryData}
                    margin={{
                        top: 5,
                        right: 20,
                        left: -10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis dataKey="name" stroke={tickColor} />
                    <YAxis stroke={tickColor} />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: tooltipBg,
                            borderColor: '#b89b5e',
                        }}
                    />
                    <Legend wrapperStyle={{ color: legendColor }}/>
                    <Bar dataKey="stock" fill="#b89b5e" name="Nivel de Stock" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

const Dashboard = () => {
  const dashboardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="dashboard" className="py-20 bg-gray-50 dark:bg-black/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Dashboard de Gerencia</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Visualice el impacto de la IA en su operación.</p>
            <div className="h-1 w-24 bg-bacss-gold mx-auto mt-4"></div>
        </div>
        <motion.div 
            className="grid md:grid-cols-1 gap-8"
            variants={dashboardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div variants={itemVariants}><AiInsightCard /></motion.div>
            <motion.div variants={itemVariants}><InventoryTrendChart /></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
