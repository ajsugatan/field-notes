// EXPERIENCE — the résumé, restructured as an editorial portfolio index.
// Each role is one entry. Edit company / sub / role / location / dates / bullets
// here; the layout lives in components/Experience.tsx.

export type Role = {
  company: string;
  sub: string; // department or staffing agency (e.g. "Accenture")
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "Genentech",
    sub: "Data Science Department",
    role: "Strategy & Operations Intern",
    location: "South San Francisco, CA",
    dates: "Jun 2025 – Dec 2025",
    bullets: [
      "Diagnosed a systemic operational bottleneck causing 2-week data latency in manufacturing decisions; conducted stakeholder interviews with 15+ cross-functional leaders across Research, Quality, and Manufacturing to map root causes and design a real-time analytics decision framework — reducing decision cycles by 93% (2 weeks → same-day).",
      "Built and deployed a Tableau dashboard tracking KPIs across manufacturing processes; modeled production throughput scenarios demonstrating 45% efficiency gain potential, directly influencing capital allocation and implementation sequencing at the executive level.",
      "Managed end-to-end project delivery — from diagnostic to C-suite buy-in — creating executive presentations that secured leadership investment in the analytics platform and evolved an early-stage concept into a funded growth initiative.",
    ],
  },
  {
    company: "Google",
    sub: "Accenture",
    role: "Management Consultant — NLP Operations Strategy",
    location: "San Jose, CA",
    dates: "Apr 2024 – Sept 2025",
    bullets: [
      "Served as sole consultant across three vendors managing global operations for Google's NLP Gemini program across 60+ markets and 20+ locales; designed an evaluation framework assessing cost, quality, and scalability trade-offs to prioritize resource allocation and investment sequencing.",
      "Rebuilt SQL reporting infrastructure from scratch — remapping 100+ deprecated data fields and automating workflows in Python — reducing reporting cycle time by 96% (7 days → real-time) and improving executive decision-making accuracy.",
      "Built a vendor utilization and cost-per-locale sensitivity model, identifying a 20% cost optimization opportunity; translated complex, ambiguous operational data into actionable executive presentations aligning priorities across global teams.",
    ],
  },
  {
    company: "Microsoft",
    sub: "Accenture",
    role: "Business Process Optimization Analyst",
    location: "Redmond, WA",
    dates: "Mar 2023 – Dec 2023",
    bullets: [
      "Led deployment strategy for 5+ technical solutions on Microsoft's AnswerHub platform; defined the execution roadmap, risk mitigation plan, and stakeholder governance structure across a matrixed, cross-functional organization.",
      "Established a milestone tracking and escalation framework ensuring on-time launch of all solutions and sustained cross-functional delivery predictability in a fast-paced environment.",
    ],
  },
  {
    company: "Workday",
    sub: "Accenture",
    role: "Strategy & Operations Consultant — Volume Business Assessment",
    location: "Pleasanton, CA",
    dates: "Dec 2022 – Feb 2023",
    bullets: [
      "Diagnosed enterprise implementation delays through 30+ senior stakeholder interviews across product, operations, and customer success; developed a comprehensive interview framework to capture pain points, experiences, and systemic friction across organizational boundaries.",
      "Synthesized qualitative findings into a prioritized value chain framework identifying five systemic friction points; authored an Interview Output Deck to “capture the voices of the client” — ensuring each stakeholder issue was acknowledged and sequenced by impact/feasibility.",
      "Delivered an executive transformation roadmap adopted by leadership, reducing implementation timelines by 50% through structured problem-solving and stakeholder-grounded strategic recommendations.",
    ],
  },
];
