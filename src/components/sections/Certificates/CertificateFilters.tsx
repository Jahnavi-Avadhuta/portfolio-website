interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const CertificateFilters = ({
  categories,
  selected,
  onSelect,
}: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            selected === category
              ? "bg-blue-600 text-white"
              : "border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CertificateFilters;