export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  whatYoullGain: string[];
  duration?: string;
  mode: string;
  flyer?: string;
  isPlaceholder?: boolean;
}

export const courses: Course[] = [
  // Real courses from flyers
  {
    id: "facility-management-tech",
    title: "Utilization of Technology in Facility Management Training Program",
    subtitle: "Smarter Facilities Through Tech",
    description: "Leverage smart tools to enhance facility efficiency and sustainability.",
    whatYoullGain: [
      "Smart Building Technologies",
      "Automation and IoT in FM",
      "Energy Efficiency Tools",
      "Maintenance Scheduling Systems",
      "Sustainable Facility Practices"
    ],
    mode: "In Person",
    flyer: "/lovable-uploads/e3282156-77e9-4a16-9c73-2584543a72cc.png"
  },
  {
    id: "leadership-management-executives",
    title: "Leadership and Management Skills for Senior Executives Training Program",
    subtitle: "Lead with Vision, Manage with Precision",
    description: "Develop high-level leadership capabilities for executive effectiveness.",
    whatYoullGain: [
      "Strategic Decision Making",
      "Transformational Leadership",
      "Executive Communication",
      "Change Management",
      "Corporate Governance and Ethics"
    ],
    mode: "Virtual",
    flyer: "/lovable-uploads/3f109cc9-1ed5-4d0d-b04d-3abc245397e5.png"
  },
  {
    id: "learning-development-management",
    title: "Managing Learning and Development Function Training Program",
    subtitle: "Elevate Learning, Empower Growth",
    description: "Master the art of designing and implementing effective learning strategies.",
    whatYoullGain: [
      "Training Needs Analysis",
      "Curriculum Design and Delivery",
      "Learning Technologies & Platforms",
      "Evaluating Training Effectiveness",
      "L&D Strategy Alignment with Business Goals"
    ],
    mode: "In Person & Virtual",
    flyer: "/lovable-uploads/daa8dd05-500e-4ea1-8ff4-2f4378d32e4a.png"
  },
  {
    id: "work-ethics-productivity",
    title: "Support Function Employees Work Ethics & Effectiveness for Improved Productivity Training Program",
    subtitle: "Build a Culture of Accountability",
    description: "Instill discipline, dedication, and productivity in support staff.",
    whatYoullGain: [
      "Understanding Work Ethics and Values",
      "Time Management Techniques",
      "Professionalism and Attitude",
      "Teamwork and Responsibility",
      "Boosting Morale and Motivation"
    ],
    mode: "Virtual",
    flyer: "/lovable-uploads/766614a3-3ce0-4461-894c-267415f73ce9.png"
  },
  
  {
    id: "mental-health-productivity",
    title: "Mental Health and Workplace Productivity Training",
    subtitle: "Well-Being Powers Performance, caring for minds creates thriving businesses.",
    description: "Spot burnout, build a culture that supports well-being, and train managers for mental health leadership to improve productivity and reduce turnover.",
    whatYoullGain: [
      "Spot burnout and take early action",
      "Build a culture that supports well-being",
      "Improve productivity and reduce turnover",
      "Train managers for mental health leadership"
    ],
    mode: "In Person",
    flyer: "/flyers/MANAGE LEARNING 15.jpg"
  },
  {
    id: "digital-content-creation",
    title: "Digital Content Creation Training Program",
    subtitle: "Want to thrive in today’s fast-paced digital world? Master the art of creating compelling content that informs, inspires, and converts.",
    description: "Learn to plan, produce, and promote content across platforms like YouTube, Instagram, LinkedIn, and TikTok.",
    whatYoullGain: [
      "Content Strategy & Storytelling",
      "Video & Audio Production",
      "Graphic Design for Social Media",
      "Editing Tools & Hacks (Canva, CapCut, etc.)",
      "Analytics & Monetization Tips"
    ],
    mode: "In Person",
    flyer: "/flyers/MANAGE LEARNING 16.jpg"
  },
  {
    id: "media-training-spokespersons",
    title: "Media Training for Spokespersons",
    subtitle: "Your voice is your influence. How you speak matters as much as what you say.",
    description: "This intensive virtual training equips public figures, corporate representatives, and organizational leaders with the tools to command attention, navigate tough interviews, and deliver messages with clarity and confidence across traditional and digital media platforms.",
    whatYoullGain: [
      "Crafting Core Messaging & Soundbites That Stick",
      "Mastering Presence: Voice, Posture & Facial Control on Camera",
      "Crisis & Reputation Management Protocols",
      "Interview Handling Techniques (TV, Radio, Digital)",
      "Real-Time Simulations with Constructive Feedback",
      "Communication Psychology: Reading Audiences, Managing Tone",
      "Navigating Difficult Questions & Media Pressure",
      "Consistency in Messaging Across Platforms"
    ],
    mode: "In Person",
    flyer: "/flyers/MANAGE LEARNING 17.jpg"
  },
  {
    id: "core-hr-processes",
    title: "Understanding Core HR Processes",
    subtitle: "People are the heart of every organization. Managing them well begins with mastering the fundamentals.",
    description: "This practical, hands-on training demystifies the building blocks of HR. Participants will explore how HR operates as a strategic function, how policies translate to practice, and how effective HR systems contribute to sustainable workplace culture and performance.",
    whatYoullGain: [
      "The Employee Lifecycle: From Recruitment to Exit",
      "Effective Onboarding & Retention Strategies",
      "Leave Management, Payroll, & HRIS Fundamentals",
      "Labour Laws & Regulatory Compliance",
      "Conflict Resolution & Workplace Ethics",
      "HR Documentation: What to Record & Why",
      "Performance Tracking & Appraisal Essentials",
      "Bridging the Gap Between Policy and Practice"
    ],
    mode: "In Person",
    flyer: "/flyers/MANAGE LEARNING 18.jpg"
  },
  {
    id: "value-driven-performance-management",
    title: "Value-Driven Performance Management Training",
    subtitle: "Performance isn’t just about hitting targets—it’s about building alignment, inspiring accountability, and reinforcing organizational purpose.",
    description: "This transformative virtual training is designed for people managers, HR leaders, and team leads committed to rethinking how performance is measured, managed, and rewarded. The program integrates strategy, systems, and culture to foster high performance without compromising employee dignity or engagement.",
    whatYoullGain: [
      "Designing Value-Based KPIs & Objectives",
      "Building Performance Frameworks that Inspire Growth",
      "Strategies for Constructive Feedback & Difficult Conversations",
      "Aligning Daily Output with Organizational Mission & Culture",
      "Tools for Continuous Performance Tracking & Coaching",
      "Addressing Underperformance with Empathy and Clarity",
      "Embedding Recognition into Everyday Workflows",
      "Creating a High-Trust, Accountability-Driven Environment"
    ],
    mode: "In Person",
    flyer: "/flyers/MANAGE LEARNING 19.jpg"
  },
  {
    id: "financial-management-sustainability",
    title: "Financial Management and Sustainability Training Program",
    subtitle: "Build Sustainable Financial Strategies",
    description: "Learn the principles of sound financial planning and sustainable practices.",
    whatYoullGain: [
      "Budgeting and Forecasting",
      "Sustainable Resource Allocation",
      "Financial Decision-Making Models",
      "Cost-Benefit Analysis",
      "Long-term Financial Resilience"
    ],
    mode: "In Person & Virtual",
    flyer: "/flyers/MANAGE LEARNING 5.jpg"
  },
  {
    id: "space-safety-risk-management",
    title: "Space, Safety, and Risk Management Training Program",
    subtitle: "Protect People, Space & Assets",
    description: "Enhance your facility's safety and risk mitigation standards.",
    whatYoullGain: [
      "Facility Space Planning",
      "Workplace Health & Safety",
      "Risk Assessment Tools",
      "Emergency Preparedness",
      "Legal Compliance and Policies"
    ],
    mode: "In Person",
    flyer: "/flyers/MANAGE LEARNING 6.jpg"
  },
  {
    id: "business-analysis",
    title: "Business Analysis Training Program",
    subtitle: "Decode Business Needs with Precision",
    description: "Gain the skills to analyze, design, and optimize business processes.",
    whatYoullGain: [
      "Business Process Modeling",
      "Stakeholder Engagement",
      "Requirements Elicitation",
      "SWOT and GAP Analysis",
      "Creating Business Cases"
    ],
    mode: "Virtual",
    flyer: "/flyers/MANAGE LEARNING 7.jpg"
  },
  {
    id: "document-management-bpm",
    title: "Document Management Workflow BPM Training Program",
    subtitle: "Streamline, Organize, Deliver",
    description: "Master the workflows that ensure efficient document and process management.",
    whatYoullGain: [
      "Business Process Mapping (BPMN)",
      "Document Lifecycle Management",
      "Workflow Automation Tools",
      "Records Retention & Policies",
      "Information Security Protocols"
    ],
    mode: "Virtual",
    flyer: "/flyers/MANAGE LEARNING 9.jpg"
  },
  {
    id: "financial-reporting-compliance-audit",
    title: "Financial Reporting, Compliance and Internal Audit Training Program",
    subtitle: "Ensure Accuracy, Drive Accountability",
    description: "Strengthen your reporting and compliance framework with best practices.",
    whatYoullGain: [
      "IFRS and Financial Statements",
      "Regulatory Compliance",
      "Internal Control Systems",
      "Audit Planning and Execution",
      "Risk and Fraud Reporting"
    ],
    mode: "In Person & Virtual",
    flyer: "/flyers/flyer_8.jpeg"
  },
  {
    id: "fraud-risk-management-audit",
    title: "Fraud Risk Management and Internal Audit Training Program",
    subtitle: "Detect, Prevent, Protect",
    description: "Equip your team to tackle fraud risks and strengthen internal audits.",
    whatYoullGain: [
      "Fraud Detection Techniques",
      "Investigative Auditing",
      "Ethical Standards and Governance",
      "Risk-Based Audit Planning",
      "Case Studies and Red Flags"
    ],
    mode: "In Person",
    flyer: "/flyers/MANAGE LEARNING 10.jpg"
  },
  {
    id: "risk-based-internal-audit",
    title: "Risk Based Internal Audit Training Program",
    subtitle: "Focus Audits Where It Matters Most",
    description: "Implement strategic audits by aligning with risk priorities.",
    whatYoullGain: [
      "Risk Assessment Methodologies",
      "Audit Universe Development",
      "Audit Risk Matrix",
      "Engagement Planning",
      "Monitoring & Reporting"
    ],
    mode: "Virtual",
    flyer: "/flyers/MANAGE LEARNING 11.jpg"
  },
  {
    id: "ai-in-admin-operations",
    title: "The Role of AI in Administrative Operations (Oversea)",
    subtitle: "Future-Proof Your Admin Functions",
    description: "Explore how AI can optimize administrative workflows and decisions.",
    whatYoullGain: [
      "AI Tools for Scheduling and Automation",
      "Natural Language Processing in Docs",
      "Chatbots and Helpdesk Systems",
      "AI in Data Entry and Analysis",
      "Ethics of AI in Admin Functions"
    ],
    mode: "In Person",
    flyer: "/flyers/MANAGE LEARNING 12.jpg"
  },
  {
    id: "performance-management-workshop",
    title: "Performance Management Workshop (Oversea)",
    subtitle: "From Appraisal to Accountability",
    description: "Redesign performance strategies for results-oriented leadership.",
    whatYoullGain: [
      "Modern Appraisal Systems",
      "Goal-Setting Frameworks",
      "Employee Engagement",
      "Continuous Feedback Models",
      "Leadership Role in Performance Culture"
    ],
    mode: "In Person",
    flyer: "/flyers/MANAGE LEARNING 13.jpg"
  },
  {
    id: "leadership-digital-era",
    title: "Leadership in the Digital Era (Oversea)",
    subtitle: "Lead with Agility in a Digital World",
    description: "Master the mindset and tools to lead effectively in the tech age.",
    whatYoullGain: [
      "Digital Transformation Leadership",
      "Remote Team Management",
      "Innovation and Disruption Response",
      "Digital Communication & Culture",
      "Futuristic Thinking and Agility"
    ],
    mode: "In Person",
    flyer: "/flyers/MANAGE LEARNING 14.jpg"
  }
  
];