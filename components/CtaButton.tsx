import { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface CtaButtonProps {
  text?: string;
  className?: string;
}

const CtaButton: FC<CtaButtonProps> = ({ text = "Solicitar una Auditoría de Sistemas Gratuita", className }) => {
  return (
    <div className={`mt-8 text-center ${className}`}>
      <Button className="bg-bacss-gold hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-lg group transition-all duration-300 ease-in-out transform hover:scale-105">
        {text}
        <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default CtaButton;
