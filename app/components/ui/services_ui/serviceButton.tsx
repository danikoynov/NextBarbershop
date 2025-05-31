// components/ServiceButtons.tsx
import { Service } from "./types";

type ServiceButtonsProps = {
  services: Service[];
  onServiceSelect: (serviceId: number) => void;
};

const ServiceButtons = ({ services, onServiceSelect }: ServiceButtonsProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
      {services.map((service) => (
        <button
          key={service.id}
          className="px-3 py-2 lg:px-4 lg:py-3 text-xs lg:text-base 
          bg-amber-400 rounded-md shadow-md
           hover:bg-amber-500 transition-all whitespace-normal text-center w-full "
          onClick={() => onServiceSelect(service.id)}
        >
          {service.title}
        </button>
      ))}
    </div>
  );
};

export default ServiceButtons;
