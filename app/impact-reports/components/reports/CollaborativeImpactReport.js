import BarChart from '../charts/BarChart';

export default function CollaborativeImpactReport({ data }) {
  return (
    <div>
      <h2>Collaborative Impact Report</h2>
      <BarChart
        data={data}
        xKey="totalFunding"
        yKey="project"
        xLabel="Total Funding ($)"
        yLabel="Project"
        title="Collaborative Project Funding"
      />
    </div>
  );
}