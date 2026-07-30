interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div
      className="rounded-2xl p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <h3 className="text-4xl font-bold text-blue-600">
        {value}
      </h3>

      <p
        className="mt-3"
        style={{ color: "var(--text-light)" }}
      >
        {label}
      </p>
    </div>
  );
};

export default StatCard;