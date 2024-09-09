import BarChart from '../charts/BarChart';

export default function SocialMediaImpactReport({ data }) {
  return (
    <div>
      <h2>Social Media and Awareness Impact</h2>
      <BarChart
        data={data}
        xKey="followers"
        yKey="platform"
        xLabel="Number of Followers"
        yLabel="Platform"
        title="Social Media Following"
      />
    </div>
  );
}