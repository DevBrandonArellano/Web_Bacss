import { FC } from 'react';
import { UserCog, Code, LineChart } from 'lucide-react';
import CtaButton from './CtaButton';

const ITRolesSection: FC = () => {
  const roles = [
    {
      icon: <UserCog className="w-12 h-12 text-bacss-gold" />,
      title: 'Estratega / CIO Virtual',
      description: 'Define la hoja de ruta tecnológica alineada a sus objetivos de negocio, asegurando que cada inversión en IT genere un retorno medible.',
    },
    {
      icon: <Code className="w-12 h-12 text-bacss-gold" />,
      title: 'Desarrollador de Software',
      description: 'Construye las herramientas a medida que su operación necesita, desde aplicaciones web y móviles hasta automatización de procesos internos.',
    },
    {
      icon: <LineChart className="w-12 h-12 text-bacss-gold" />,
      title: 'Analista de Datos',
      description: 'Transforma sus datos en información valiosa, generando reportes y dashboards que facilitan la toma de decisiones estratégicas.',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-bacss-dark-gray dark:text-white">
          <UserCog className="inline-block w-8 h-8 mr-2 text-bacss-gold" />
          Un Departamento de IT a su Medida
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roles.map((role, index) => (
            <div key={index} className="bg-white dark:bg-bacss-dark-gray p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="mb-4">{role.icon}</div>
              <h3 className="text-xl font-bold text-bacss-dark-gray dark:text-white mb-2">{role.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">{role.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-bacss-dark-gray dark:text-white mb-4">El Modelo BACSS: Personal por Proyecto</h3>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-center">
            En lugar de incurrir en los altos costos de un equipo de IT a tiempo completo, usted accede a nuestra red de especialistas bajo demanda. Le asignamos los roles que necesita, por el tiempo que los necesita, garantizando eficiencia, experiencia y control de costos.
          </p>
        </div>

        <CtaButton />
      </div>
    </section>
  );
};

export default ITRolesSection;
