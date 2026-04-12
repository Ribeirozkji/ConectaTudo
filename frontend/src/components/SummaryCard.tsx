type SummaryCardProps = {
  title: string;
  value: string;
};

function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-3 text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

export default SummaryCard;