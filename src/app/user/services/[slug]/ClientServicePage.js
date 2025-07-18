"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiMongodb, SiPostgresql, SiFlutter, SiSwift, SiKotlin, SiFirebase, SiFigma, SiSketch, SiAdobexd, SiInvision, SiFramer, SiGooglecloud, SiDocker, SiKubernetes, SiTerraform, SiGithub, SiGit, SiVercel,
} from "react-icons/si";
import {
  FaEye, FaBox, FaCog, FaWrench, FaShieldAlt, FaCheckCircle, FaArchive, FaLock, FaArrowRight, FaStar, FaUsers, FaClock, FaAward, FaPalette, FaMobile, FaCloud, FaBullseye, FaChartLine, FaMagic,
} from "react-icons/fa";
import Link from "next/link";

export default function ClientServicePage({ params, service }) {
  let slug;

  // Handle Next.js "AsyncParam" wrapper
  if (params && typeof params.value === "string") {
    try {
      const parsed = JSON.parse(params.value);
      slug = parsed.slug;
    } catch {
      slug = undefined;
    }
  } else {
    slug = params?.slug;
  }

  console.log('params:', params);
  const router = useRouter();

  // Icon mapping for service icons (all possible icons used in service data)
  const iconMap = {
    SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiMongodb, SiPostgresql, SiFlutter, SiSwift, SiKotlin, SiFirebase, SiFigma, SiSketch, SiAdobexd, SiInvision, SiFramer, SiGooglecloud, SiDocker, SiKubernetes, SiTerraform, SiGithub, SiGit, SiVercel,
    FaEye, FaBox, FaCog, FaWrench, FaShieldAlt, FaCheckCircle, FaArchive, FaLock, FaArrowRight, FaStar, FaUsers, FaClock, FaAward, FaPalette, FaMobile, FaCloud, FaBullseye, FaChartLine, FaMagic,
  };
  const Icon = iconMap[service.icon];

  // Technology to icon mapping
  const technologyIcons = {
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    TypeScript: SiTypescript,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    "React Native": FaMobile,
    Flutter: SiFlutter,
    Swift: SiSwift,
    Kotlin: SiKotlin,
    Firebase: SiFirebase,
    AWS: FaCloud,
    Figma: SiFigma,
    Sketch: SiSketch,
    "Adobe XD": SiAdobexd,
    InVision: SiInvision,
    Principle: FaMagic,
    Framer: SiFramer,
    Azure: FaCloud,
    "Google Cloud": SiGooglecloud,
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
    Terraform: SiTerraform,
    "Architecture Patterns": FaBullseye,
    "Performance Tools": FaChartLine,
    "Security Frameworks": FaShieldAlt,
    "Best Practices": FaCheckCircle,
    "Monitoring Tools": FaEye,
    "Backup Systems": FaArchive,
    "Security Tools": FaLock,
    "Update Management": FaWrench,
  };

  const handleGetStarted = (planKey) => {
    router.push(`/user/services/${slug}/payment?plan=${planKey}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-12 md:pb-16">
          <div className="text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              {Icon && <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                onClick={() => handleGetStarted('standard')}>
                Get Started
              </button>
              <a href="#pricing" className="border-2 border-gray-300 text-gray-700 px-6 md:px-8 py-3 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200 cursor-pointer scroll-smooth">
                View Pricing
              </a>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 -z-10"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-100 rounded-full opacity-50 -z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive features and capabilities to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="text-center p-4 md:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <FaCheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
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
              Modern tools and technologies to build robust and scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {service.technologies.map((tech, index) => {
              const TechIcon = technologyIcons[tech];
              return (
                <div key={index} className="text-center p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                    {TechIcon ? (
                      <TechIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
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
              A proven methodology to deliver successful projects on time and within budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {/* Connector lines for desktop (behind steps) */}
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-0.5 z-0 w-full">
              {service.process.map((_, index) => {
                if (index === 0) {
                  return (
                    <div key={index} className="absolute left-1/4 w-1/2 h-full">
                      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </div>
                  );
                } else if (index === service.process.length - 1) {
                  return (
                    <div key={index} className="absolute left-0 w-1/2 h-full">
                      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </div>
                  );
                } else {
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
              <div key={key} className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 ${key === "standard" ? "ring-2 ring-blue-500 relative" : "hover:shadow-xl"}`}>
                {key === "standard" && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm md:text-base text-gray-600">
                      <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${key === "standard" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg" : "border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"}`}
                  onClick={() => handleGetStarted(key)}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white mb-8">
            Contact us today to discuss your project and see how we can help you achieve your goals.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition-all duration-200">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
} 