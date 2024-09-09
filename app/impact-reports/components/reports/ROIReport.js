import BarChart from '../charts/BarChart';

export default function ROIReport({ data }) {
  return (
    <div>
      <h2>ROI (Return on Investment) Report</h2>
      <BarChart
        data={data}
        xKey="roi"
        yKey="program"
        xLabel="ROI"
        yLabel="Program"
        title="Return on Investment by Program"
      />
    </div>
  );
}