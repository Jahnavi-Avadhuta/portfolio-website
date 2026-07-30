interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({
  title,
  subtitle,
}: SectionHeadingProps) => {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;