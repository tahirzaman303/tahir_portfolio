export type Project = {
  id: string;
  title: string;
  category: string;
  eyebrow: string;
  description: string;
  stack: string[];
  areas: string[];
  problem: string;
  architecture: string;
  implementation: string;
  troubleshooting: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    id: 'desc-mardan',
    title: 'DESC Mardan Enterprise Network Project',
    category: 'Networking',
    eyebrow: 'ENTERPRISE NETWORK ENGINEERING',
    description: 'A structured enterprise network design focused on resilient connectivity, segmentation, routing, and infrastructure validation.',
    stack: ['VLANs', 'OSPF', 'BGP', 'Firewall concepts'],
    areas: ['Network architecture', 'Segmentation', 'Routing', 'Validation'],
    problem: 'Design a practical enterprise network model that can separate traffic, support routed connectivity, and provide a clear foundation for security controls.',
    architecture: 'A segmented enterprise topology with routed network paths, logical VLAN boundaries, and layered security concepts.',
    implementation: 'Worked through enterprise network architecture, VLAN design, routing, OSPF, BGP, firewall concepts, and infrastructure validation.',
    troubleshooting: 'Used configuration review and systematic validation to reason about reachability, routing behavior, and segmentation boundaries.',
    outcome: 'A documented network engineering project demonstrating practical architecture and validation thinking.'
  },
  {
    id: 'routing-lab',
    title: 'Enterprise Multi-Area OSPF, BGP & EIGRP Lab',
    category: 'Networking',
    eyebrow: 'ADVANCED ROUTING & SWITCHING',
    description: 'A multi-router lab for understanding dynamic routing across autonomous systems, areas, and redistribution boundaries.',
    stack: ['Cisco IOS', 'GNS3', 'BGP', 'OSPF', 'EIGRP'],
    areas: ['iBGP / eBGP', 'Multi-area OSPF', 'Virtual links', 'Redistribution'],
    problem: 'Explore how several routing protocols interact in a topology that resembles real enterprise and service-provider routing boundaries.',
    architecture: 'A multi-router, multi-AS topology combining iBGP and eBGP with multi-area OSPF and an EIGRP-to-OSPF redistribution edge.',
    implementation: 'Configured Cisco IOS routing scenarios, OSPF virtual links, route redistribution, and multi-router paths inside GNS3.',
    troubleshooting: 'Traced route advertisements and protocol boundaries to isolate reachability issues and validate expected routing behavior.',
    outcome: 'A hands-on advanced routing lab covering the protocols and troubleshooting patterns relevant to network administration.'
  },
  {
    id: 'uet-campus',
    title: 'Campus Area Network Design — UET Mardan',
    category: 'Networking',
    eyebrow: 'ENTERPRISE NETWORK ARCHITECTURE',
    description: 'A campus network concept that translates physical departments and requirements into a scalable logical design.',
    stack: ['VLSM', 'VLANs', 'ACLs', 'Inter-VLAN routing'],
    areas: ['Hierarchical topology', 'IP addressing', 'Segmentation', 'Planning'],
    problem: 'Plan a campus network that supports organized addressing, department-level separation, and controlled communication between segments.',
    architecture: 'A hierarchical campus topology with VLSM-based addressing, VLAN boundaries, and routed inter-VLAN communication.',
    implementation: 'Applied IP addressing, network segmentation, ACLs, VLANs, and inter-VLAN routing to build the design model.',
    troubleshooting: 'Validated addressing logic, segment reachability, and access rules through structured configuration review.',
    outcome: 'A clear enterprise network architecture exercise grounded in campus-scale planning.'
  },
  {
    id: 'domain-virtualization',
    title: 'Enterprise Domain & Server Virtualization',
    category: 'System Administration',
    eyebrow: 'SYSTEM ADMINISTRATION & VIRTUALIZATION',
    description: 'A Windows Server lab combining domain services, policy management, and virtual machines into a practical client-server environment.',
    stack: ['Windows Server', 'Active Directory', 'Group Policy', 'VMware'],
    areas: ['AD DS', 'User management', 'Virtual machines', 'Remote administration'],
    problem: 'Build an administration environment where identities, policies, and server workloads can be managed consistently.',
    architecture: 'A virtualized client-server setup centered around Windows Server, AD DS, organizational structure, and Group Policy.',
    implementation: 'Worked with domain deployment, user and group management, Group Policy, VMware, and remote administration workflows.',
    troubleshooting: 'Reviewed service configuration, identity relationships, and client-server behavior while resolving lab issues systematically.',
    outcome: 'A practical foundation in Windows Server administration and virtualization for infrastructure environments.'
  },
  {
    id: 'skillgap-radar',
    title: 'SkillGap Radar',
    category: 'AI & Automation',
    eyebrow: 'APPLIED GENERATIVE AI',
    description: 'An AI-assisted career analysis concept that compares a resume with a job description and turns gaps into an actionable learning path.',
    stack: ['Generative AI', 'LLM APIs', 'Python', 'NLP'],
    areas: ['Resume analysis', 'Skill mapping', 'Roadmap generation', 'API integration'],
    problem: 'Make career preparation more structured by translating unstructured experience and job requirements into specific learning priorities.',
    architecture: 'A workflow that accepts career context, analyzes it with language-model capabilities, and returns a categorized skills view and roadmap.',
    implementation: 'Explored resume analysis, job description analysis, skill-gap identification, and AI-powered learning roadmap generation.',
    troubleshooting: 'Refined prompts and input structure to keep analysis useful, focused, and aligned with the provided career context.',
    outcome: 'A project-based exploration of how applied AI can support technical career planning.'
  },
  {
    id: 'voice-assistant',
    title: 'Multilingual AI Voice Assistant',
    category: 'AI & Automation',
    eyebrow: 'AI / NLP / VOICE AUTOMATION',
    description: 'A voice interaction concept exploring Urdu and English speech processing, NLP, and API-driven automation.',
    stack: ['Azure AI Speech', 'NLP', 'Python', 'AI APIs'],
    areas: ['Speech-to-text', 'Urdu processing', 'Voice automation', 'Integration'],
    problem: 'Explore more accessible voice interaction across Urdu and English through speech processing and natural language workflows.',
    architecture: 'A speech-to-text and response pipeline connecting voice input, language processing, and AI service APIs.',
    implementation: 'Worked with Urdu and English speech processing concepts, NLP, AI APIs, Azure AI Speech, and voice automation.',
    troubleshooting: 'Considered language handling, API integration, and the boundaries between audio input, text processing, and responses.',
    outcome: 'A project-based applied AI exploration focused on multilingual voice workflows.'
  },
  {
    id: 'support-infrastructure',
    title: 'Automated Support Infrastructure',
    category: 'AI & Automation',
    eyebrow: 'AUTOMATION & API INTEGRATION',
    description: 'An integration-focused automation concept for connecting REST APIs, webhooks, triggers, and asynchronous business workflows.',
    stack: ['REST APIs', 'Webhooks', 'Python', 'Automation'],
    areas: ['API triggers', 'Workflow automation', 'Async processing', 'Integrations'],
    problem: 'Connect technical events and support workflows without relying on repetitive manual handoffs.',
    architecture: 'An event-driven flow using API triggers and webhooks to move work between services and automation steps.',
    implementation: 'Explored REST APIs, webhooks, API triggers, asynchronous processing, and business workflow automation.',
    troubleshooting: 'Focused on event sequencing, request handling, and the reliability of service-to-service transitions.',
    outcome: 'A project-based study of practical automation patterns and API integration.'
  }
];

export const skillGroups = [
  { title: 'Network Engineering', accent: 'cyan', skills: ['Cisco Networking', 'CCNA', 'Routing & Switching', 'IPv4 / IPv6', 'Subnetting', 'VLSM', 'VLANs', 'Inter-VLAN Routing', 'OSPF', 'EIGRP', 'BGP', 'NAT', 'DHCP', 'ACLs', 'NTP', 'Network Troubleshooting', 'Network Design'] },
  { title: 'System Administration', accent: 'blue', skills: ['Windows Server', 'Active Directory', 'AD DS', 'DNS', 'DHCP', 'Group Policy', 'User & Group Management', 'Remote Administration', 'Client-Server Architecture', 'Infrastructure Deployment'] },
  { title: 'Virtualization', accent: 'green', skills: ['VMware Workstation', 'VMware ESXi', 'Virtual Machines', 'Server Virtualization', 'Infrastructure Labs'] },
  { title: 'Cloud', accent: 'amber', skills: ['Microsoft Azure', 'Azure Machine Learning', 'Cloud Computing', 'Cloud Infrastructure', 'Azure Services'] },
  { title: 'Network Security', accent: 'red', skills: ['ACLs', 'Firewall Concepts', 'NAT', 'VPN Fundamentals', 'Network Segmentation', 'Least Privilege', 'Traffic Analysis', 'Wireshark'] },
  { title: 'AI & Automation', accent: 'teal', skills: ['Python', 'Machine Learning', 'Generative AI', 'NLP', 'Prompt Engineering', 'OpenAI APIs', 'Google Gemini APIs', 'Azure AI', 'API Integration', 'AI Automation'] },
  { title: 'Tools', accent: 'slate', skills: ['GNS3', 'Cisco Packet Tracer', 'Wireshark', 'PuTTY', 'VMware', 'Microsoft Azure', 'MATLAB'] }
];

export const experience = [
  { date: 'JUN 2026 — PRESENT', role: 'System Administration Team Lead', company: 'ITSimplera Solution', type: 'Remote — Mardan, Pakistan', description: 'Lead and mentor aspiring IT professionals through practical system administration, network security fundamentals, and enterprise infrastructure training.', tags: ['System Administration', 'Windows Server', 'Active Directory', 'Mentoring', 'Documentation'] },
  { date: 'JAN 2025 — PRESENT', role: 'Network Administration Intern', company: 'Veltrix IT Solutions', type: 'Remote', description: 'Developing practical experience with enterprise network configuration, multi-router topologies, routing and switching, traffic analysis, and network troubleshooting.', tags: ['Routing & Switching', 'VLANs', 'DHCP / NAT', 'ACLs', 'Wireshark'] },
  { date: 'JAN 2025 — PRESENT', role: 'Applied AI & Cloud Infrastructure Developer', company: 'Self-Initiated Projects', type: 'Project-Based / Self-Initiated', description: 'Building complementary project experience across Python, Azure Machine Learning, API integration, generative AI, NLP, and voice processing.', tags: ['Python', 'Azure ML', 'Generative AI', 'NLP', 'Automation'] }
];

export const education = [
  { years: 'SEP 2023 — AUG 2027', title: 'Bachelor of Science in Telecommunication Engineering', school: 'University of Engineering & Technology (UET) Mardan', detail: 'Currently in 7th Semester', result: 'CGPA 3.55 / 4.00' },
  { years: '2021 — 2023', title: 'Intermediate — Pre-Engineering', school: 'BISE Mardan', detail: 'Grade A', result: '910 / 1100' },
  { years: '2019 — 2021', title: 'Secondary School Certificate — Science', school: 'BISE Mardan', detail: 'Grade A+', result: '986 / 1100' }
];

export const certifications = [
  { title: 'System Administration and IT Infrastructure Services', issuer: 'NAVTTC / MetaPi Mardan', date: 'June 2026', label: 'Certification', note: 'PMYSDP Batch III' },
  { title: 'CCNA', issuer: 'Cisco Networking Academy / relevant training provider', date: 'Date to be verified', label: 'Certification', note: 'Issue date intentionally left open pending verification' },
  { title: 'Azure Machine Learning', issuer: 'Microsoft Learn', date: 'Date to be verified', label: 'Professional Training', note: 'Applied cloud and machine learning learning path' },
  { title: 'AI & Data Science Bootcamp', issuer: 'ThinkCloudly', date: 'Date to be verified', label: 'Professional Training', note: 'Applied AI and data science training' },
  { title: 'AI Prompt Engineering / Generative AI Training', issuer: 'Verified issuer to be added', date: 'Date to be verified', label: 'Professional Training', note: 'Credential details require final verification' },
  { title: 'Google / Coursera AI Fundamentals', issuer: 'Google / Coursera', date: 'Date to be verified', label: 'Professional Training', note: 'Exact credential title requires final verification' },
  { title: 'HEC DLSEI / Coursera System Administration Training', issuer: 'HEC DLSEI / Coursera', date: 'Date to be verified', label: 'Professional Training', note: 'Displayed separately from NAVTTC certification' }
];

export const training = [
  { title: 'Enterprise Network Infrastructure & Security Training', org: 'DESC Digital Innovation Center, Mardan', date: 'MAY 2026 — JUL 2026', topics: ['CCNA', 'CCNP-level exposure/training', 'Routing', 'Switching', 'VLANs', 'OSPF', 'BGP', 'Network security', 'Windows Server', 'Active Directory', 'Virtualization'] },
  { title: 'System & Network Administration — Dual Tracker', org: 'METAPI Mardan / NAVTTC', date: 'FEB 2026 — MAY 2026', topics: ['System Administration', 'Windows Server', 'Active Directory', 'Client-server architecture', 'VMware', 'Virtualization', 'Networking', 'Infrastructure administration'] }
];