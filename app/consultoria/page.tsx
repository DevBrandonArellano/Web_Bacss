import { FC } from 'react';
import RoleOfITSection from '@/components/RoleOfITSection';
import ROISection from '@/components/ROISection';
import AssetManagementSection from '@/components/AssetManagementSection';
import ITRolesSection from '@/components/ITRolesSection';

const ConsultoriaPage: FC = () => {
  return (
    <div className="bg-white text-gray-800 dark:bg-bacss-dark-gray">
      <header className="text-center py-16 bg-gray-50 dark:bg-gray-900/50">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Consultoría y Conocimiento Estratégico</h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Potenciamos a las PYMES y Startups en Ecuador, transformando la tecnología en su principal motor de competitividad.
        </p>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-20">
        <RoleOfITSection />
        <ROISection />
        <AssetManagementSection />
        <ITRolesSection />
      </main>
    </div>
  );
};

export default ConsultoriaPage;
