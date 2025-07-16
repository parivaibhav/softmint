import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiFigma,
  SiSketch,
  SiAdobexd,
  SiInvision,
  SiFramer,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithub,
  SiGit,
  SiVercel,
} from "react-icons/si";
import {
  FaEye,
  FaLayers,
  FaBox,
  FaCog,
  FaWrench,
  FaShieldAlt,
  FaCheckCircle,
  FaArchive,
  FaLock,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaClock,
  FaAward,
  FaPalette,
  FaMobile,
  FaCloud,
  FaBullseye,
  FaChartLine,
  FaMagic,
} from "react-icons/fa";
import { authenticateUser } from '../../lib/authenticateUser';

// Technology to icon mapping
const technologyIcons = {
  // Web Development
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  TypeScript: SiTypescript,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  // Mobile Development
  "React Native": FaMobile,
  Flutter: SiFlutter,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  Firebase: SiFirebase,
  AWS: FaCloud,
  // UI/UX Design
  Figma: SiFigma,
  Sketch: SiSketch,
  "Adobe XD": SiAdobexd,
  InVision: SiInvision,
  Principle: FaMagic,
  Framer: SiFramer,
  // Cloud Solutions
  Azure: FaCloud,
  "Google Cloud": SiGooglecloud,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  // Consulting
  "Architecture Patterns": FaBullseye,
  "Performance Tools": FaChartLine,
  "Security Frameworks": FaShieldAlt,
  "Best Practices": FaCheckCircle,
  // Maintenance
  "Monitoring Tools": FaEye,
  "Backup Systems": FaArchive,
  "Security Tools": FaLock,
  "Update Management": FaWrench,
};

// Service data - in a real app, this would come from a database or CMS
const services = {
  "web-development": {
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js. Scalable, secure, and performance-optimized solutions.",
    icon: <SiReact className="w-12 h-12 md:w-16 md:h-16 text-white" />,
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
    icon: <FaMobile className="w-12 h-12 md:w-16 md:h-16 text-white" />,
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
    icon: <FaPalette className="w-12 h-12 md:w-16 md:h-16 text-white" />,
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
    icon: <FaCloud className="w-12 h-12 md:w-16 md:h-16 text-white" />,
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
    icon: <FaCheckCircle className="w-12 h-12 md:w-16 md:h-16 text-white" />,
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
    icon: <FaWrench className="w-12 h-12 md:w-16 md:h-16 text-white" />,
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

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }) {
  const user = authenticateUser('user');
  if (!user) redirect('/signin');

  const resolvedParams =
    typeof params.then === "function" ? use(params) : params;
  const slug = resolvedParams.slug;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    redirect('/signin');
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-12 md:pb-16">
          <div className="text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              {service.icon}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <a
                href="#pricing"
                className="border-2 border-gray-300 text-gray-700 px-6 md:px-8 py-3 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200 cursor-pointer scroll-smooth"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full opacity-50 -z-10"></div>
        <div className="absolute top-40 right-4 md:right-20 w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full opacity-50 -z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive features and capabilities to deliver exceptional
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-4 md:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <FaCheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Modern tools and technologies to build robust and scalable
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {service.technologies.map((tech, index) => {
              const Icon = technologyIcons[tech];
              return (
                <div
                  key={index}
                  className="text-center p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-100"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                    {Icon ? (
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                    ) : (
                      <span className="text-blue-600 font-bold text-sm md:text-lg">
                        {tech.charAt(0)}
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-gray-900 font-medium">
                    {tech}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              A proven methodology to deliver successful projects on time and
              within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {/* Connector lines for desktop (behind steps) */}
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-0.5 z-0 w-full">
              {service.process.map((_, index) => {
                // Calculate left and right positions for each step
                if (index === 0) {
                  // First step: right half only
                  return (
                    <div key={index} className="absolute left-1/4 w-1/2 h-full">
                      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </div>
                  );
                } else if (index === service.process.length - 1) {
                  // Last step: left half only
                  return (
                    <div key={index} className="absolute left-0 w-1/2 h-full">
                      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </div>
                  );
                } else {
                  // Middle steps: full width
                  return (
                    <div key={index} className="absolute left-0 w-full h-full">
                      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </div>
                  );
                }
              })}
            </div>
            {service.process.map((step, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-sm md:text-lg">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Choose the plan that best fits your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {Object.entries(service.pricing).map(([key, plan]) => (
              <div
                key={key}
                className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  key === "standard"
                    ? "ring-2 ring-blue-500 relative"
                    : "hover:shadow-xl"
                }`}
              >
                {key === "standard" && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-6">
                    {plan.price}
                  </div>
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm md:text-base text-gray-600"
                      >
                        <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                      key === "standard"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg"
                        : "border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss your project requirements and create something amazing
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
