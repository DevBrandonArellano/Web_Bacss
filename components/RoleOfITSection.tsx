import { FC } from 'react';
import { BrainCircuit, Building, TrendingUp } from 'lucide-react';
import CtaButton from './CtaButton';

const RoleOfITSection: FC = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg shadow-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-bacss-dark-gray dark:text-white">
          <BrainCircuit className="inline-block w-8 h-8 mr-2 text-bacss-gold" />
          El Rol Estratégico de la Tecnología
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          En el mercado actual de Quito, la tecnología no es solo un soporte, es el motor que impulsa la competitividad y el crecimiento. Una gestión de IT formalizada permite a las empresas escalar de manera organizada, tomar decisiones basadas en datos y optimizar recursos.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="prose prose-lg text-gray-700 dark:text-gray-300">
            <h3 className="text-xl font-semibold text-bacss-dark-gray dark:text-white">¿Cuándo formalizar su área de IT?</h3>
            <p className="text-center md:text-left">Considere una estrategia de IT formal si su empresa experimenta:</p>
            <ul>
              <li>Crecimiento acelerado de personal y operaciones.</li>
              <li>Dificultad para gestionar la información y los datos críticos.</li>
              <li>Necesidad de automatizar procesos para reducir costos.</li>
              <li>Aumento de riesgos de seguridad o pérdida de datos.</li>
            </ul>
          </div>
          <div className="flex justify-center items-center p-8 bg-white dark:bg-bacss-dark-gray rounded-lg shadow-inner">
            <div className="text-center">
              <TrendingUp className="mx-auto w-16 h-16 text-bacss-gold mb-4" />
              <h4 className="text-lg font-bold text-bacss-dark-gray dark:text-white">De Centro de Costos a Generador de Valor</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Una IT bien gestionada se convierte en una inversión que genera retornos tangibles, abriendo nuevas oportunidades de negocio.
              </p>
            </div>
          </div>
        </div>

        <CtaButton />
      </div>
    </section>
  );
};

export default RoleOfITSection;
