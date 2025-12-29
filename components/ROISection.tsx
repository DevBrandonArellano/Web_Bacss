import { FC } from 'react';
import { DollarSign, BarChart, Warehouse } from 'lucide-react';
import CtaButton from './CtaButton';

const ROISection: FC = () => {
  const roiCards = [
    {
      icon: <Warehouse className="w-12 h-12 text-bacss-gold" />,
      title: 'Ahorro de Costos Operativos',
      description: 'La automatización de inventarios reduce en más de un 90% los errores de conteo manual, ahorrando horas de trabajo y minimizando pérdidas por obsolescencia.',
    },
    {
      icon: <BarChart className="w-12 h-12 text-bacss-gold" />,
      title: 'Decisiones Basadas en Datos',
      description: 'Con data de inventario en tiempo real, puede optimizar sus compras, predecir la demanda y ajustar su estrategia de ventas para maximizar la rentabilidad.',
    },
    {
      icon: <DollarSign className="w-12 h-12 text-bacss-gold" />,
      title: 'Incremento de Ventas y Flujo de Caja',
      description: 'Evite las ventas perdidas por quiebres de stock. Un inventario bien gestionado asegura la disponibilidad de productos y mejora la satisfacción del cliente.',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-bacss-dark-gray dark:text-white">
          <DollarSign className="inline-block w-8 h-8 mr-2 text-bacss-gold" />
          ROI Tecnológico: Automatización de Inventarios
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {roiCards.map((card, index) => (
            <div key={index} className="bg-white dark:bg-bacss-dark-gray p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-bacss-dark-gray dark:text-white mb-2">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow text-center">{card.description}</p>
            </div>
          ))}
        </div>

        <CtaButton />
      </div>
    </section>
  );
};

export default ROISection;
