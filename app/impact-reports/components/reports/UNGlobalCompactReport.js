import BarChart from '../charts/BarChart';

export default function UNGlobalCompactReport({ data }) {
  return (
    <div>
      <h2>UN Global Compact Alignment Report</h2>
      <BarChart
        data={data}
        xKey="fundingAllocated"
        yKey="principle"
        xLabel="Funding Allocated ($)"
        yLabel="Principle"
        title="Funding Allocated to UN Global Compact Principles"
      />
    </div>
  );
}