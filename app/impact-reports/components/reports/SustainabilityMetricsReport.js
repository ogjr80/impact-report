import BarChart from '../charts/BarChart';

export default function SustainabilityMetricsReport({ data }) {
  return (
    <div>
      <h2>Sustainability Metrics Report</h2>
      <BarChart
        data={data}
        xKey="value"
        yKey="metric"
        xLabel="Value"
        yLabel="Metric"
        title="Sustainability Metrics"
      />
    </div>
  );
}