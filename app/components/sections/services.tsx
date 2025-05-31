// components/ServicesSection.tsx
"use client";
import { useEffect, useState } from "react";
import ServiceButtons from "../ui/services_ui/serviceButton";
import ServiceDescription from "../ui/services_ui/serviceDescription";
import ServiceImage from "../ui/services_ui/serviceImage";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Fetch data from the JSON file inside the public folder
  useEffect(() => {
    fetch("/data/services.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setSelectedService(data[0]); // Set default selected service to the first one
      });
  }, []);

  const handleServiceSelect = (serviceId: number) => {
    const selected = services.find((service) => service.id === serviceId);
    if (selected) {
      setSelectedService(selected);
    }
  };

  return (
    <div className="px-2 py-4 lg:p-8">
      {/* Title for Services Section */}
      <h2 className="text-5xl font-bold text-center mb-8 text-gray-800 pt-4">
        Нашите Услуги
      </h2>
      <div className="flex flex-row gap-8 px-2 py-4 lg:p-8 overflow-hidden">
        <div className="flex flex-col gap-4 w-1/4">
          <ServiceButtons
            services={services}
            onServiceSelect={handleServiceSelect}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-3/4 overflow-hidden items-center justify-center">
          {selectedService && (
            <>
              <ServiceDescription
                title={selectedService.title}
                description={selectedService.description}
              />
              <ServiceImage image={selectedService.image} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
