// Main ImpactReports component (app/impact-reports/ImpactReports.js)
import SDGAlignmentReport from './components/reports/SDGAlignmentReport';
import CorporateImpactReport from './components/reports/CorporateImpactReport';
import ProgramSpecificReport from './components/reports/ProgramSpecificReport';
import EmployeeEngagementReport from './components/reports/EmployeeEngagementReport';
import NonprofitPerformanceReport from './components/reports/NonProfitPerformanceReport';
import GeographicalImpactReport from './components/reports/GeographicalImpactReport';
import TemporalImpactReport from './components/reports/TemporalImpactReport';
import ROIReport from './components/reports/ROIReport';
import BeneficiaryDemographicsReport from './components/reports/BeneficiaryDemographicsReport';
import SustainabilityMetricsReport from './components/reports/SustainabilityMetricsReport';
import CollaborativeImpactReport from './components/reports/CollaborativeImpactReport';
import SkillBasedVolunteeringReport from './components/reports/SkillBasedVolunteeringReport';
import DonationAllocationReport from './components/reports/DonationAllocationReport';
import SocialMediaImpactReport from './components/reports/SocialMediaImpactReport';
import UNGlobalCompactReport from './components/reports/UNGlobalCompactReport';

export default function ImpactReports({ data }) {
  return (
    <div className="impact-reports">
      <h1>Impact Reports</h1>
      <SDGAlignmentReport data={data.sdgAlignmentData} />
      <CorporateImpactReport data={data.corporateImpactData} />
      <ProgramSpecificReport data={data.programSpecificData} />
      <EmployeeEngagementReport data={data.employeeEngagementData} />
      <NonprofitPerformanceReport data={data.nonprofitPerformanceData} />
      <GeographicalImpactReport data={data.geographicalImpactData} />
      <TemporalImpactReport data={data.temporalImpactData} /> 
      <ROIReport data={data.roiData} />
      <BeneficiaryDemographicsReport data={data.beneficiaryDemographicsData} />
      <SustainabilityMetricsReport data={data.sustainabilityMetricsData} />
      <CollaborativeImpactReport data={data.collaborativeImpactData} />
      <SkillBasedVolunteeringReport data={data.skillBasedVolunteeringData} />
      <DonationAllocationReport data={data.donationAllocationData} />
      <SocialMediaImpactReport data={data.socialMediaImpactData} />
      <UNGlobalCompactReport data={data.unGlobalCompactData} />
    </div>
  );
}