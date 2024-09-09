// lib/data.js

export const impactData = {
  sdgAlignmentData: [
    { sdg: "No Poverty", funding: 1000000, beneficiaries: 5000 },
    { sdg: "Zero Hunger", funding: 800000, beneficiaries: 3000 },
    { sdg: "Good Health and Well-being", funding: 1200000, beneficiaries: 7000 },
    { sdg: "Quality Education", funding: 1500000, beneficiaries: 10000 },
    { sdg: "Gender Equality", funding: 600000, beneficiaries: 2000 },
    { sdg: "Clean Water and Sanitation", funding: 900000, beneficiaries: 4000 },
    { sdg: "Affordable and Clean Energy", funding: 1100000, beneficiaries: 6000 }
  ],
  corporateImpactData: [
    { corporation: "TechCorp", totalFunding: 5000000, programsSupported: 10, totalBeneficiaries: 25000 },
    { corporation: "EcoSolutions", totalFunding: 3000000, programsSupported: 7, totalBeneficiaries: 15000 },
    { corporation: "HealthInc", totalFunding: 4000000, programsSupported: 8, totalBeneficiaries: 20000 },
    { corporation: "EduTech", totalFunding: 3500000, programsSupported: 6, totalBeneficiaries: 18000 }
  ],
  programSpecificData: [
    { program: "Clean Water Initiative", goal: "Provide clean water", achieved: 80, target: 100, unit: "villages" },
    { program: "Digital Literacy", goal: "Train in computer skills", achieved: 5000, target: 10000, unit: "students" },
    { program: "Reforestation Project", goal: "Plant trees", achieved: 50000, target: 100000, unit: "trees" },
    { program: "Women Empowerment", goal: "Support women entrepreneurs", achieved: 300, target: 500, unit: "businesses" }
  ],
  employeeEngagementData: [
    { month: "Jan", donations: 5000, volunteering_hours: 100, participation_rate: 0.2 },
    { month: "Feb", donations: 5500, volunteering_hours: 120, participation_rate: 0.22 },
    { month: "Mar", donations: 6000, volunteering_hours: 150, participation_rate: 0.25 },
    { month: "Apr", donations: 7000, volunteering_hours: 200, participation_rate: 0.3 },
    { month: "May", donations: 7500, volunteering_hours: 220, participation_rate: 0.32 },
    { month: "Jun", donations: 8000, volunteering_hours: 250, participation_rate: 0.35 }
  ],
  nonprofitPerformanceData: [
    { nonprofit: "EduForAll", fundingReceived: 2000000, programsImplemented: 5, beneficiariesReached: 10000 },
    { nonprofit: "GreenEarth", fundingReceived: 1500000, programsImplemented: 3, beneficiariesReached: 7500 },
    { nonprofit: "HealthyLives", fundingReceived: 1800000, programsImplemented: 4, beneficiariesReached: 9000 },
    { nonprofit: "TechForGood", fundingReceived: 1200000, programsImplemented: 2, beneficiariesReached: 6000 }
  ],
  geographicalImpactData: [
    { country: "USA", programs: 10, beneficiaries: 50000 },
    { country: "India", programs: 8, beneficiaries: 100000 },
    { country: "Kenya", programs: 5, beneficiaries: 30000 },
    { country: "Brazil", programs: 6, beneficiaries: 40000 },
    { country: "Germany", programs: 4, beneficiaries: 20000 }
  ],
  temporalImpactData: [
    { year: 2020, totalFunding: 10000000, totalPrograms: 20, totalBeneficiaries: 100000 },
    { year: 2021, totalFunding: 12000000, totalPrograms: 25, totalBeneficiaries: 120000 },
    { year: 2022, totalFunding: 15000000, totalPrograms: 30, totalBeneficiaries: 150000 },
    { year: 2023, totalFunding: 18000000, totalPrograms: 35, totalBeneficiaries: 180000 }
  ],
  roiData: [
    { program: "Skill Training", investment: 500000, socialReturn: 2000000, roi: 4 },
    { program: "Healthcare Outreach", investment: 750000, socialReturn: 3000000, roi: 4 },
    { program: "Environmental Conservation", investment: 1000000, socialReturn: 5000000, roi: 5 },
    { program: "Education for All", investment: 600000, socialReturn: 2400000, roi: 4 }
  ],
  beneficiaryDemographicsData: [
    { ageGroup: "0-18", percentage: 30 },
    { ageGroup: "19-35", percentage: 40 },
    { ageGroup: "36-60", percentage: 20 },
    { ageGroup: "60+", percentage: 10 }
  ],
  sustainabilityMetricsData: [
    { metric: "Carbon Footprint Reduction", value: 10000, unit: "tons CO2" },
    { metric: "Renewable Energy Generated", value: 5000, unit: "MWh" },
    { metric: "Waste Recycled", value: 2000, unit: "tons" },
    { metric: "Water Saved", value: 15000, unit: "kiloliters" }
  ],
  collaborativeImpactData: [
    { project: "Global Education Initiative", corporations: ["TechCorp", "EduSolutions"], totalFunding: 5000000, beneficiaries: 25000 },
    { project: "Clean Ocean Project", corporations: ["EcoFriendly", "OceanGuard", "GreenTech"], totalFunding: 7000000, beneficiaries: 100000 },
    { project: "Sustainable Agriculture", corporations: ["AgriTech", "FoodForAll"], totalFunding: 3000000, beneficiaries: 15000 }
  ],
  skillBasedVolunteeringData: [
    { skill: "IT Consulting", hoursContributed: 1000, estimatedValue: 100000 },
    { skill: "Legal Aid", hoursContributed: 500, estimatedValue: 75000 },
    { skill: "Financial Planning", hoursContributed: 750, estimatedValue: 90000 },
    { skill: "Marketing Strategy", hoursContributed: 600, estimatedValue: 80000 }
  ],
  donationAllocationData: [
    { category: "Direct Program Expenses", percentage: 75 },
    { category: "Administrative Costs", percentage: 15 },
    { category: "Fundraising", percentage: 10 }
  ],
  socialMediaImpactData: [
    { platform: "Facebook", followers: 50000, engagement: 5000 },
    { platform: "Twitter", followers: 75000, engagement: 10000 },
    { platform: "Instagram", followers: 100000, engagement: 15000 },
    { platform: "LinkedIn", followers: 25000, engagement: 3000 }
  ],
  unGlobalCompactData: [
    { principle: "Human Rights", programsAligned: 5, fundingAllocated: 2000000 },
    { principle: "Labour", programsAligned: 3, fundingAllocated: 1500000 },
    { principle: "Environment", programsAligned: 7, fundingAllocated: 3000000 },
    { principle: "Anti-Corruption", programsAligned: 2, fundingAllocated: 1000000 }
  ]
};

export async function fetchImpactData() {
  // Simulating an API call or database query
  await new Promise(resolve => setTimeout(resolve, 1000));
  return impactData;
}