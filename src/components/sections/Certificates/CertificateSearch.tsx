interface Props {
  value: string;
  onChange: (value: string) => void;
}

const CertificateSearch = ({ value, onChange }: Props) => {
  return (
    <div className="mx-auto max-w-md">
      <input
        type="text"
        placeholder="Search certificates..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-600"
      />
    </div>
  );
};

export default CertificateSearch;