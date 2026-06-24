export const jobs = [
  {
    id: 28,
    code: "JOB-00028",
    posted: "1 year ago",
    title: "Civil Engineering Operations Director",
    location: "Roseville, California, United States",
    country: "233",
    state: "California",
    city: "Roseville",
    salary: "$140000 - $160000 Per Year",
    experience: "8 - 10 Years",
    jobType: "Permanent",
    industry: "Engineering",
    qualification: "Bachelor Degree",
    deadline: "29 May, 2026",
    logo: "/assets/jscale-media/uploads/company-logo/670fc2619da684.80406863-1729086049.png",
    description:
      "Lead civil engineering operations, guide project teams, improve delivery standards, and coordinate with stakeholders across large construction and infrastructure programs.",
    responsibilities: [
      "Oversee engineering operations, project schedules, budgets, and delivery quality.",
      "Coordinate with internal teams, clients, vendors, and field leadership.",
      "Review project risks, compliance standards, and operational performance.",
      "Build strong reporting practices for leadership visibility."
    ],
    requirements: [
      "8 to 10 years of civil engineering or construction operations experience.",
      "Strong leadership, communication, planning, and stakeholder management skills.",
      "Experience managing teams across multiple project locations.",
      "Ability to work with budgets, timelines, and compliance documentation."
    ]
  },
  {
    id: 27,
    code: "JOB-00027",
    posted: "1 year ago",
    title: "Project Manager, Construction",
    location: "Buffalo , New york, United States",
    country: "233",
    state: "New york",
    city: "Buffalo",
    salary: "$85000 - $110000 Per Year",
    experience: "3 - 5 Years",
    jobType: "Permanent",
    industry: "Construction",
    qualification: "Bachelor Degree",
    deadline: "29 May, 2026",
    description:
      "As a Project Manager, you will recognize, handle, and process incoming requests for quotations, information, etc.\nManage administrative and direct labor work while managing projects.\nInterface with clients and contractors during pre- and post-tender applications to develop effective business relationships.\nEnsure quality construction standards are followed.\nMonitor and lead compliance with building and safety regulations.\nManage and mitigate risks.\nComply with standards and operating procedures.\nTime management skills: the ability to prioritize and execute multiple tasks.\nBenefits:\n401(k) matching\nDental insurance\nEmployee assistance program\nFlexible spending account\nHealth insurance\nLife insurance\nPaid time off\nTuition reimbursement\nVision insurance",
    responsibilities: [
      "As a Project Manager, you will recognize, handle, and process incoming requests for quotations, information, etc.",
      "Manage administrative and direct labor work while managing projects.",
      "Interface with clients and contractors during pre- and post-tender applications to develop effective business relationships.",
      "Ensure quality construction standards are followed.",
      "Monitor and lead compliance with building and safety regulations.",
      "Manage and mitigate risks.",
      "Comply with standards and operating procedures.",
      "Time management skills: the ability to prioritize and execute multiple tasks."
    ],
    requirements: [
      "3 to 5 years of construction project management experience.",
      "Strong scheduling, communication, and site coordination ability.",
      "Experience with vendor management and project reporting.",
      "Comfortable working with field and office teams."
    ]
  },
  {
    id: 26,
    code: "JOB-00026",
    posted: "1 year ago",
    title: "Project Manager, Construction",
    location: "Cleveland, Ohio, United States",
    country: "233",
    state: "Ohio",
    city: "Cleveland",
    salary: "$85000 - $110000 Per Year",
    experience: "3 - 5 Years",
    jobType: "Permanent",
    industry: "Construction",
    qualification: "Bachelor Degree",
    deadline: "29 May, 2026",
    description:
      "As a Project Manager, you will recognize, handle, and process incoming requests for quotations, information, etc.\nManage administrative and direct labor work while managing projects.\nInterface with clients and contractors during pre- and post-tender applications to develop effective business relationships.\nEnsure quality construction standards are followed.\nMonitor and lead compliance with building and safety regulations.\nManage and mitigate risks.\nComply with standards and operating procedures.\nTime management skills: the ability to prioritize and execute multiple tasks.\nBenefits:\n401(k) matching\nDental insurance\nEmployee assistance program\nFlexible spending account\nHealth insurance\nLife insurance\nPaid time off\nTuition reimbursement\nVision insurance",
    responsibilities: [
      "As a Project Manager, you will recognize, handle, and process incoming requests for quotations, information, etc.",
      "Manage administrative and direct labor work while managing projects.",
      "Interface with clients and contractors during pre- and post-tender applications to develop effective business relationships.",
      "Ensure quality construction standards are followed.",
      "Monitor and lead compliance with building and safety regulations.",
      "Manage and mitigate risks.",
      "Comply with standards and operating procedures.",
      "Time management skills: the ability to prioritize and execute multiple tasks."
    ],
    requirements: [
      "3 to 5 years of construction project management experience.",
      "Ability to manage multiple moving pieces with clear communication.",
      "Knowledge of construction project workflows and reporting.",
      "Strong ownership and problem-solving mindset."
    ]
  },
  {
    id: 25,
    code: "JOB-00025",
    posted: "1 year ago",
    title: "Electrical Estimator, Construction",
    location: "Evansville, Indiana, United States",
    country: "233",
    state: "Indiana",
    city: "Evansville",
    salary: "$110000 - $130000 Per Year",
    experience: "2 - 5 Years",
    jobType: "Permanent",
    industry: "Construction",
    qualification: "Diploma / Bachelor Degree",
    deadline: "29 May, 2026",
    description:
      "Prepare cost estimates for various projects, including conceptual, design-build, and general tender work.\nIndependently calculate materials, labor, and equipment costs based on proposals, plans, and specifications, including project closings.\nReview data to determine material and labor requirements, creating detailed itemized lists.\nDraft requests for quotations to secure competitive pricing from suppliers and subcontractors.\nUtilize estimating software (e.g., Accubid Classic or Anywhere) for precise cost calculations.\nCollaborate with the Estimating Manager to establish indirect costs and overheads for each estimate.",
    responsibilities: [
      "Prepare cost estimates for various projects, including conceptual, design-build, and general tender work.",
      "Independently calculate materials, labor, and equipment costs based on proposals, plans, and specifications, including project closings.",
      "Review data to determine material and labor requirements, creating detailed itemized lists.",
      "Draft requests for quotations to secure competitive pricing from suppliers and subcontractors.",
      "Utilize estimating software (e.g., Accubid Classic or Anywhere) for precise cost calculations.",
      "Collaborate with the Estimating Manager to establish indirect costs and overheads for each estimate"
    ],
    requirements: [
      "2 to 5 years of electrical estimating or construction experience.",
      "Ability to read drawings and understand electrical scopes.",
      "Strong detail orientation and cost analysis skills.",
      "Comfortable communicating with vendors and project teams."
    ]
  }
];

export const getJobById = (id) => jobs.find((job) => String(job.id) === String(id)) || jobs[0];
