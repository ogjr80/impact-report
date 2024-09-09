// SDGAlignmentReport.js
import BarChart from './impact-reports/components/charts/BarChart';

export default function SDGAlignmentReport({ data }) {
  return (
    <div>
      <h2>SDG Alignment Report</h2>
      <BarChart
        data={data}
        xKey="funding"
        yKey="sdg"
        xLabel="Funding ($)"
        yLabel="SDG"
        title="Funding by Sustainable Development Goal"
      />
    </div>
  );
}

// CorporateImpactReport.js
import BarChart from './impact-reports/components/charts/BarChart';

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

// ProgramSpecificReport.js
import BarChart from './impact-reports/components/charts/BarChart';

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

// EmployeeEngagementReport.js
import LineChart from './impact-reports/components/charts/LineChart';

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

// NonprofitPerformanceReport.js
import BarChart from './impact-reports/components/charts/BarChart';

export default function NonprofitPerformanceReport({ data }) {
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

// GeographicalImpactReport.js
import BarChart from './impact-reports/components/charts/BarChart';

export default function GeographicalImpactReport({ data }) {
  return (
    <div>
      <h2>Geographical Impact Report</h2>
      <BarChart
        data={data}
        xKey="beneficiaries"
        yKey="country"
        xLabel="Number of Beneficiaries"
        yLabel="Country"
        title="Beneficiaries by Country"
      />
    </div>
  );
}

// TemporalImpactReport.js
import LineChart from './impact-reports/components/charts/LineChart';

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

// ROIReport.js
import BarChart from './impact-reports/components/charts/BarChart';

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

// BeneficiaryDemographicsReport.js
import PieChart from './impact-reports/components/charts/PieChart';

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

// SustainabilityMetricsReport.js
import BarChart from './impact-reports/components/charts/BarChart';

export default function SustainabilityMetricsReport({ data }) {
  return (
    <div>
      <h2>Sustainability Metrics Report</h2>
      <BarChart
        data={data}
        xKey="value"
        yKey="metric"
        xLabel="Value"
        yLabel="Metric"
        title="Sustainability Metrics"
      />
    </div>
  );
}

// CollaborativeImpactReport.js
import BarChart from './impact-reports/components/charts/BarChart';

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

// SkillBasedVolunteeringReport.js
import BarChart from './impact-reports/components/charts/BarChart';

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

// DonationAllocationReport.js
import PieChart from './impact-reports/components/charts/PieChart';

export default function DonationAllocationReport({ data }) {
  return (
    <div>
      <h2>Donation Allocation Report</h2>
      <PieChart
        data={data}
        valueKey="percentage"
        labelKey="category"
        title="Allocation of Donations"
      />
    </div>
  );
}

// SocialMediaImpactReport.js
import BarChart from './impact-reports/components/charts/BarChart';

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

// UNGlobalCompactReport.js
import BarChart from './impact-reports/components/charts/BarChart';

export default function UNGlobalCompactReport({ data }) {
  return (
    <div>
      <h2>UN Global Compact Alignment Report</h2>
      <BarChart
        data={data}
        xKey="fundingAllocated"
        yKey="principle"
        xLabel="Funding Allocated ($)"
        yLabel="Principle"
        title="Funding Allocated to UN Global Compact Principles"
      />
    </div>
  );
}