import BarChart from '../charts/BarChart';

export default function SDGAlignmentReport({ data }) {
  return (
    <div>
      <h2>SDG Alignment Report</h2>
      <BarChart
        data={data}
        xKey="funding"
        yKey="sdg"
        xLabel="Funding ($)"
        yLabel="SDG"
        title="Funding by Sustainable Development Goal"
      />
    </div>
  );
}