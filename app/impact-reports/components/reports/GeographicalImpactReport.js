import BarChart from '../charts/BarChart';

export default function GeographicalImpactReport({ data }) {
  return (
    <div>
      <h2>Geographical Impact Report</h2>
      <BarChart
        data={data}
        xKey="beneficiaries"
        yKey="country"
        xLabel="Number of Beneficiaries"
        yLabel="Country"
        title="Beneficiaries by Country"
      />
    </div>
  );
}