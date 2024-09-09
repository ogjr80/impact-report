import PieChart from '../charts/PieChart';

export default function BeneficiaryDemographicsReport({ data }) {
  return (
    <div>
      <h2>Beneficiary Demographics Report</h2>
      <PieChart
        data={data}
        valueKey="percentage"
        labelKey="ageGroup"
        title="Beneficiary Age Distribution"
      />
    </div>
  );
}