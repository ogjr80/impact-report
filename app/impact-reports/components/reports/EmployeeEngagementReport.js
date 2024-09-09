import LineChart from '../charts/LineChart';

export default function EmployeeEngagementReport({ data }) {
  return (
    <div>
      <h2>Employee Engagement Report</h2>
      <LineChart
        data={data}
        xKey="month"
        yKey="donations"
        xLabel="Month"
        yLabel="Donations ($)"
        title="Employee Donations Over Time"
      />
    </div>
  );
}