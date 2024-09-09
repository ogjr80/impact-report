// TemporalImpactReport.js
import LineChart from '../charts/LineChart';

export default function TemporalImpactReport({ data }) {
  return (
    <div>
      <h2>Temporal Impact Analysis</h2>
      <LineChart
        data={data}
        xKey="year"
        yKey="totalFunding"
        xLabel="Year"
        yLabel="Total Funding ($)"
        title="Total Funding Over Time"
      />
    </div>
  );
}