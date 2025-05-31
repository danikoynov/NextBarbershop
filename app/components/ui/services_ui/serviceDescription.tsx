// components/ServiceDescription.tsx
type ServiceDescriptionProps = {
  title: string;
  description: string;
};

const ServiceDescription = ({
  title,
  description,
}: ServiceDescriptionProps) => {
  return (
    <div className=" p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto overflow-y-auto">
      <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">
        {title}
      </h2>
      <p className="text-[12px] lg:text-lg text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceDescription;
