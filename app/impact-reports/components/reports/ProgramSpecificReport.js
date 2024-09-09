import BarChart from '../charts/BarChart';

export default function ProgramSpecificReport({ data }) {
  return (
    <div>
      <h2>Program-specific Impact Report</h2>
      <BarChart
        data={data}
        xKey="achieved"
        yKey="program"
        xLabel="Achieved"
        yLabel="Program"
        title="Program Achievements"
      />
    </div>
  );
}