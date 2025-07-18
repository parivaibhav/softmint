
import { authenticateUser } from "../../../../../lib/authenticateUser";
import ClientServicePage from "./ClientServicePage";

export default async function ServicePage({ params }) {
  const user = await authenticateUser("user");
  if (!user) return null;

// Service data - in a real app, this would come from a database or CMS
const services = {
  "web-development": {
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js. Scalable, secure, and performance-optimized solutions.",
      icon: "SiReact",
    color: "from-blue-500 to-blue-600",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "Modern JavaScript (ES6+)",
      "Progressive Web Apps (PWA)",
      "API Integration",
      "Database Design",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description:
          "We start by understanding your business goals, target audience, and technical requirements.",
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description:
          "Creating wireframes and high-fidelity designs that align with your brand and user needs.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Building your application using modern technologies and best practices.",
      },
      {
        step: "04",
        title: "Testing & Launch",
        description:
          "Thorough testing across devices and browsers before launching your application.",
      },
    ],
    pricing: {
      basic: {
        name: "Basic",
        price: "$5,000",
        features: ["Responsive Design", "Basic SEO", "Contact Form", "5 Pages"],
      },
      standard: {
        name: "Standard",
        price: "$10,000",
        features: [
          "Everything in Basic",
          "Advanced SEO",
          "CMS Integration",
          "10 Pages",
          "Analytics",
        ],
      },
      premium: {
        name: "Premium",
        price: "$20,000",
        features: [
          "Everything in Standard",
          "Custom Features",
          "E-commerce",
          "Unlimited Pages",
          "Priority Support",
        ],
      },
    },
  },
  "mobile-development": {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. Built with React Native, Flutter, or native technologies.",
      icon: "FaMobile",
    color: "from-purple-500 to-purple-600",
    features: [
      "Cross-Platform Development",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Native Performance",
      "Biometric Authentication",
      "Location Services",
      "Camera & Media Integration",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "AWS",
    ],
    process: [
      {
        step: "01",
        title: "Requirements Analysis",
        description:
          "Understanding your app requirements, target platforms, and user expectations.",
      },
      {
        step: "02",
        title: "UI/UX Design",
        description:
          "Creating intuitive mobile interfaces that follow platform guidelines.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Building your mobile app with native performance and modern features.",
      },
      {
        step: "04",
        title: "Testing & Deployment",
        description: "Comprehensive testing and app store submission process.",
      },
    ],
    pricing: {
      basic: {
        name: "Basic",
        price: "$8,000",
        features: [
          "Single Platform",
          "Basic Features",
          "App Store Submission",
          "3 Months Support",
        ],
      },
      standard: {
        name: "Standard",
        price: "$15,000",
        features: [
          "Cross-Platform",
          "Advanced Features",
          "Push Notifications",
          "6 Months Support",
        ],
      },
      premium: {
        name: "Premium",
        price: "$30,000",
        features: [
          "Native Apps",
          "Custom Features",
          "Backend Integration",
          "1 Year Support",
        ],
      },
    },
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create engaging and intuitive user experiences. From wireframes to high-fidelity prototypes.",
      icon: "FaPalette",
    color: "from-green-500 to-green-600",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Design Systems",
      "Accessibility Design",
      "Interactive Prototypes",
      "Design Handoff",
    ],
    technologies: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "InVision",
      "Principle",
      "Framer",
    ],
    process: [
      {
        step: "01",
        title: "Research & Discovery",
        description:
          "Understanding your users, competitors, and business objectives through research.",
      },
      {
        step: "02",
        title: "Information Architecture",
        description:
          "Organizing content and creating user flows that make sense to your audience.",
      },
      {
        step: "03",
        title: "Design & Prototyping",
        description:
          "Creating visual designs and interactive prototypes for user testing.",
      },
      {
        step: "04",
        title: "Testing & Iteration",
        description:
          "User testing and refining designs based on feedback and insights.",
      },
    ],
    pricing: {
      basic: {
        name: "Basic",
        price: "$3,000",
        features: [
          "Wireframes",
          "Basic Prototypes",
          "Design System",
          "3 Revisions",
        ],
      },
      standard: {
        name: "Standard",
        price: "$6,000",
        features: [
          "Everything in Basic",
          "High-Fidelity Designs",
          "User Testing",
          "Interactive Prototypes",
        ],
      },
      premium: {
        name: "Premium",
        price: "$12,000",
        features: [
          "Everything in Standard",
          "Custom Illustrations",
          "Animation",
          "Design Handoff",
        ],
      },
    },
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and DevOps solutions using AWS, Azure, and Google Cloud. From setup to maintenance.",
      icon: "FaCloud",
    color: "from-orange-500 to-orange-600",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Container Orchestration",
      "CI/CD Pipelines",
      "Monitoring & Logging",
      "Security & Compliance",
      "Auto-scaling",
      "Disaster Recovery",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description:
          "Evaluating your current infrastructure and identifying migration opportunities.",
      },
      {
        step: "02",
        title: "Architecture Design",
        description:
          "Designing scalable and secure cloud architecture for your needs.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Setting up infrastructure and migrating applications to the cloud.",
      },
      {
        step: "04",
        title: "Optimization",
        description:
          "Monitoring performance and optimizing costs and efficiency.",
      },
    ],
    pricing: {
      basic: {
        name: "Basic",
        price: "$2,000/month",
        features: [
          "Cloud Setup",
          "Basic Monitoring",
          "Backup Solutions",
          "Email Support",
        ],
      },
      standard: {
        name: "Standard",
        price: "$5,000/month",
        features: [
          "Everything in Basic",
          "Auto-scaling",
          "24/7 Monitoring",
          "Phone Support",
        ],
      },
      premium: {
        name: "Premium",
        price: "$10,000/month",
        features: [
          "Everything in Standard",
          "Custom Solutions",
          "Dedicated Support",
          "SLA Guarantee",
        ],
      },
    },
  },
  consulting: {
    title: "Technical Consulting",
    description:
      "Expert guidance on technology strategy, architecture, and best practices. Helping you make informed decisions.",
      icon: "FaCheckCircle",
    color: "from-indigo-500 to-indigo-600",
    features: [
      "Technology Strategy",
      "Architecture Review",
      "Performance Audits",
      "Security Assessments",
      "Code Reviews",
      "Team Training",
      "Best Practices",
      "Migration Planning",
    ],
    technologies: [
      "Architecture Patterns",
      "Performance Tools",
      "Security Frameworks",
      "Best Practices",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Understanding your current state, challenges, and objectives.",
      },
      {
        step: "02",
        title: "Analysis",
        description:
          "Deep dive into your systems, processes, and technology stack.",
      },
      {
        step: "03",
        title: "Recommendations",
        description:
          "Providing actionable insights and strategic recommendations.",
      },
      {
        step: "04",
        title: "Implementation",
        description:
          "Supporting the execution of recommendations and best practices.",
      },
    ],
    pricing: {
      basic: {
        name: "Basic",
        price: "$150/hour",
        features: [
          "Technology Review",
          "Basic Recommendations",
          "Email Support",
          "1 Month Follow-up",
        ],
      },
      standard: {
        name: "Standard",
        price: "$250/hour",
        features: [
          "Everything in Basic",
          "Detailed Analysis",
          "Implementation Support",
          "3 Months Follow-up",
        ],
      },
      premium: {
        name: "Premium",
        price: "$500/hour",
        features: [
          "Everything in Standard",
          "Strategic Planning",
          "Ongoing Support",
          "Quarterly Reviews",
        ],
      },
    },
  },
  maintenance: {
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, updates, and support to keep your applications running smoothly and securely.",
      icon: "FaWrench",
    color: "from-red-500 to-red-600",
    features: [
      "Regular Updates",
      "Security Patches",
      "Performance Monitoring",
      "Bug Fixes",
      "Backup Management",
      "24/7 Support",
      "Uptime Monitoring",
      "Emergency Response",
    ],
    technologies: [
      "Monitoring Tools",
      "Backup Systems",
      "Security Tools",
      "Update Management",
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description:
          "Evaluating your current maintenance needs and setting up monitoring.",
      },
      {
        step: "02",
        title: "Implementation",
        description:
          "Setting up automated monitoring, backups, and security measures.",
      },
      {
        step: "03",
        title: "Ongoing Support",
        description:
          "Regular maintenance, updates, and proactive issue resolution.",
      },
      {
        step: "04",
        title: "Optimization",
        description: "Continuous improvement and optimization of your systems.",
      },
    ],
    pricing: {
      basic: {
        name: "Basic",
        price: "$500/month",
        features: [
          "Weekly Updates",
          "Email Support",
          "Basic Monitoring",
          "Security Patches",
        ],
      },
      standard: {
        name: "Standard",
        price: "$1,000/month",
        features: [
          "Everything in Basic",
          "Weekly Updates",
          "Phone Support",
          "Performance Optimization",
        ],
      },
      premium: {
        name: "Premium",
        price: "$2,000/month",
        features: [
          "Everything in Standard",
          "24/7 Support",
          "Priority Response",
          "Custom Features",
        ],
      },
    },
  },
};

  const slug = params.slug;
  const service = services[slug];
  if (!service) return null;

  return <ClientServicePage params={params} service={service} />;
}
