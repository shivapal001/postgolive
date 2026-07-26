export interface Role {
  slug: string;
  title: string;
  department: string;
  responsibilities: string[];
  skills: string[];
  commitment: string;
}

export const roles: Role[] = [
  {
    slug: "growth-marketing",
    title: "Growth & Marketing",
    department: "Growth",
    responsibilities: [
      "Plan and run acquisition experiments across paid, organic, and referral channels",
      "Own campaign performance tracking and report on what's actually moving signups",
      "Shape PostHire's early positioning and messaging with the founders",
    ],
    skills: ["Performance marketing", "Analytics (GA4/Mixpanel)", "Copywriting", "A/B testing"],
    commitment: "10–15 hrs/week",
  },
  {
    slug: "brand-partnerships",
    title: "Brand Partnerships",
    department: "Growth",
    responsibilities: [
      "Source and onboard early brand partners onto the platform",
      "Run outreach sequences and manage the partnership pipeline end to end",
      "Gather brand feedback to help shape the product roadmap",
    ],
    skills: ["B2B outreach", "Negotiation", "CRM tools", "Relationship management"],
    commitment: "10–15 hrs/week",
  },
  {
    slug: "community-manager",
    title: "Community Manager",
    department: "Growth",
    responsibilities: [
      "Build and moderate PostHire's creator community across Discord/Telegram",
      "Run engagement programs that keep early creators active on the beta",
      "Turn community feedback into structured insight for the product team",
    ],
    skills: ["Community platforms", "Content moderation", "Event hosting", "Writing"],
    commitment: "8–12 hrs/week",
  },
  {
    slug: "flutter-developer",
    title: "Flutter Developer",
    department: "Engineering",
    responsibilities: [
      "Build and ship features across the PostHire mobile app in Flutter",
      "Work directly with the founding engineer on architecture decisions",
      "Fix bugs surfaced by beta testers and ship polished releases",
    ],
    skills: ["Flutter", "Dart", "REST/GraphQL APIs", "State management (Riverpod/Bloc)"],
    commitment: "15–20 hrs/week",
  },
  {
    slug: "backend-developer",
    title: "Backend Developer",
    department: "Engineering",
    responsibilities: [
      "Design and build APIs that power the marketplace between brands and creators",
      "Own database schema, auth, and third-party integrations",
      "Set up the infrastructure PostHire will scale on post-launch",
    ],
    skills: ["Node.js/Python", "PostgreSQL", "REST/GraphQL", "Cloud infra (AWS/GCP)"],
    commitment: "15–20 hrs/week",
  },
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    department: "Engineering",
    responsibilities: [
      "Build the brand-facing web dashboard used to manage campaigns",
      "Translate designs into fast, accessible, pixel-accurate interfaces",
      "Collaborate with design on the interaction and motion language",
    ],
    skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "API integration"],
    commitment: "15–20 hrs/week",
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    responsibilities: [
      "Design end-to-end flows for both the brand and creator sides of the app",
      "Build and maintain the PostHire design system",
      "Run lightweight user research to validate design decisions",
    ],
    skills: ["Figma", "Design systems", "Prototyping", "User research"],
    commitment: "10–15 hrs/week",
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    department: "Design",
    responsibilities: [
      "Create visual assets for marketing, social, and in-app moments",
      "Maintain visual consistency across every touchpoint of the brand",
      "Design pitch decks and partner-facing materials",
    ],
    skills: ["Adobe Creative Suite / Figma", "Typography", "Brand systems", "Motion basics"],
    commitment: "8–12 hrs/week",
  },
  {
    slug: "content-creator",
    title: "Content Creator",
    department: "Growth",
    responsibilities: [
      "Create short-form content that shows what PostHire is building in public",
      "Develop a consistent posting cadence across TikTok/Instagram/X",
      "Turn founder updates and product milestones into shareable content",
    ],
    skills: ["Short-form video", "Copywriting", "Trend awareness", "On-camera presence"],
    commitment: "8–12 hrs/week",
  },
  {
    slug: "video-editor",
    title: "Video Editor",
    department: "Growth",
    responsibilities: [
      "Edit raw footage into polished short-form and long-form content",
      "Add motion graphics, captions, and sound design that fit the brand",
      "Keep a fast turnaround on time-sensitive social content",
    ],
    skills: ["CapCut/Premiere/DaVinci", "Motion graphics", "Sound design", "Storytelling"],
    commitment: "8–12 hrs/week",
  },
];
