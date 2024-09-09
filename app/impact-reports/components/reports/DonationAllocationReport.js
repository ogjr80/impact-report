import PieChart from '../charts/PieChart';

export default function DonationAllocationReport({ data }) {
  return (
    <div>
      <h2>Donation Allocation Report</h2>
      <PieChart
        data={data}
        valueKey="percentage"
        labelKey="category"
        title="Allocation of Donations"
      />
    </div>
  );
}