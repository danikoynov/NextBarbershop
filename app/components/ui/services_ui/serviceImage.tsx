// components/ServiceImage.tsx
type ServiceImageProps = {
  image: string;
};

const ServiceImage = ({ image }: ServiceImageProps) => {
  return (
    <div className="flex-shrink-0  max-h-[200px] max-w-[200px] lg:max-h-[400px] lg:max-w-[400px] overflow-hidden rounded-lg border-2 border-neutral-900">
      <img src={image} alt="Service" className="object-cover w-full h-full" />
    </div>
  );
};

export default ServiceImage;
