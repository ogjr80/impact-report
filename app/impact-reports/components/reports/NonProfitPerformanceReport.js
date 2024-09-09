import BarChart from '../charts/BarChart';

export default function NonProfitPerformanceReport({ data }) {
  return (
    <div>
      <h2>Nonprofit Performance Report</h2>
      <BarChart
        data={data}
        xKey="fundingReceived"
        yKey="nonprofit"
        xLabel="Funding Received ($)"
        yLabel="Nonprofit"
        title="Funding Received by Nonprofit"
      />
    </div>
  );
}