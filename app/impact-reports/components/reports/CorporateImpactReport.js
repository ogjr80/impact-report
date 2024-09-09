import BarChart from '../charts/BarChart';

export default function CorporateImpactReport({ data }) {
  return (
    <div>
      <h2>Corporate Impact Summary</h2>
      <BarChart
        data={data}
        xKey="totalFunding"
        yKey="corporation"
        xLabel="Total Funding ($)"
        yLabel="Corporation"
        title="Total Funding by Corporation"
      />
    </div>
  );
}
