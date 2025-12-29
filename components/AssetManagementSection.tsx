import { FC } from 'react';
import { ShieldCheck, FileArchive, Database } from 'lucide-react';
import { Accordion } from './ui/Accordion';
import CtaButton from './CtaButton';

const AssetManagementSection: FC = () => {
  const accordionItems = [
    {
      title: 'Levantamiento de Activos y Datos',
      children: (
        <div className="prose prose-lg text-gray-700 dark:text-gray-300">
          <p className="text-center md:text-left">
            Consiste en un inventario detallado de todos sus recursos tecnológicos: software, hardware, licencias, cuentas de usuario y, lo más importante, sus datos.
          </p>
          <strong className="text-center md:text-left">¿Por qué es crucial?</strong>
          <ul>
            <li>
              <strong>Seguridad:</strong> No puede proteger lo que no sabe que tiene. Identificar activos previene brechas de seguridad.
            </li>
            <li>
              <strong>Optimización de Costos:</strong> Evite gastos innecesarios en licencias de software no utilizadas o hardware obsoleto.
            </li>
            <li>
              <strong>Cumplimiento:</strong> Es el primer paso para asegurar el cumplimiento de normativas como la LOPDP.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Normativa Legal en Ecuador (LOPDP)',
      children: (
        <div className="prose prose-lg text-gray-700 dark:text-gray-300">
          <p className="text-center md:text-left">
            La Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador exige a las empresas proteger la información personal de sus clientes y colaboradores.
          </p>
          <strong className="text-center md:text-left">Requisitos clave para PYMES:</strong>
          <ul>
            <li>
              <strong>Consentimiento Informado:</strong> Obtener autorización clara del titular para tratar sus datos.
            </li>
            <li>
              <strong>Finalidad y Pertinencia:</strong> Usar los datos solo para los fines especificados y de forma limitada.
            </li>
            <li>
              <strong>Medidas de Seguridad:</strong> Implementar controles técnicos y organizativos para proteger los datos.
            </li>
            <li>
              <strong>Notificación de Incidentes:</strong> Comunicar a la autoridad y a los afectados sobre cualquier brecha de seguridad.
            </li>
          </ul>
          <p className="text-center md:text-left">
            BACSS le ayuda a evaluar su nivel de cumplimiento y a implementar las medidas necesarias.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg shadow-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-bacss-dark-gray dark:text-white">
          <Database className="inline-block w-8 h-8 mr-2 text-bacss-gold" />
          Gestión de Activos y Datos
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          Sus datos son el activo más valioso. Gestionarlos y protegerlos correctamente es fundamental para la continuidad y reputación de su negocio.
        </p>

        <Accordion items={accordionItems} />
        
        <CtaButton />
      </div>
    </section>
  );
};

export default AssetManagementSection;
