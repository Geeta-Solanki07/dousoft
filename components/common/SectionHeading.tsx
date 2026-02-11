interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center }: Props) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default SectionHeading;
