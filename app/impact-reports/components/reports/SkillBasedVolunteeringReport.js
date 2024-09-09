import BarChart from '../charts/BarChart';

export default function SkillBasedVolunteeringReport({ data }) {
  return (
    <div>
      <h2>Skill-based Volunteering Impact</h2>
      <BarChart
        data={data}
        xKey="estimatedValue"
        yKey="skill"
        xLabel="Estimated Value ($)"
        yLabel="Skill"
        title="Value of Skill-based Volunteering"
      />
    </div>
  );
}