import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Code, Zap, Server, FileText, Database, Smartphone, Cloud, Palette, Eye, Sparkles, Layers, Box, Cpu, Wrench, Target, TrendingUp, Shield, CheckCircle, Archive, Lock 
} from 'lucide-react';

// Technology to icon mapping
const technologyIcons = {
  // Web Development
  'React': Code,
  'Next.js': Zap,
  'Node.js': Server,
  'TypeScript': FileText,
  'MongoDB': Database,
  'PostgreSQL': Database,
  // Mobile Development
  'React Native': Smartphone,
  'Flutter': Smartphone,
  'Swift': Code,
  'Kotlin': Code,
  'Firebase': Cloud,
  'AWS': Cloud,
  // UI/UX Design
  'Figma': Palette,
  'Sketch': Palette,
  'Adobe XD': Palette,
  'InVision': Eye,
  'Principle': Sparkles,
  'Framer': Layers,
  // Cloud Solutions
  'Azure': Cloud,
  'Google Cloud': Cloud,
  'Docker': Box,
  'Kubernetes': Cpu,
  'Terraform': Wrench,
  // Consulting
  'Architecture Patterns': Target,
  'Performance Tools': TrendingUp,
  'Security Frameworks': Shield,
  'Best Practices': CheckCircle,
  // Maintenance
  'Monitoring Tools': Eye,
  'Backup Systems': Archive,
  'Security Tools': Lock,
  'Update Management': Wrench
};

// Service data - in a real app, this would come from a database or CMS
const services = {
  'web-development': {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js. Scalable, secure, and performance-optimized solutions.',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Optimization',
      'Cross-browser Compatibility',
      'Modern JavaScript (ES6+)',
      'Progressive Web Apps (PWA)',
      'API Integration',
      'Database Design'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    process: [
      {
        step: '01',
        title: 'Discovery & Planning',
        description: 'We start by understanding your business goals, target audience, and technical requirements.'
      },
      {
        step: '02',
        title: 'Design & Prototyping',
        description: 'Creating wireframes and high-fidelity designs that align with your brand and user needs.'
      },
      {
        step: '03',
        title: 'Development',
        description: 'Building your application using modern technologies and best practices.'
      },
      {
        step: '04',
        title: 'Testing & Launch',
        description: 'Thorough testing across devices and browsers before launching your application.'
      }
    ],
    pricing: {
      basic: {
        name: 'Basic',
        price: '$5,000',
        features: ['Responsive Design', 'Basic SEO', 'Contact Form', '5 Pages']
      },
      standard: {
        name: 'Standard',
        price: '$10,000',
        features: ['Everything in Basic', 'Advanced SEO', 'CMS Integration', '10 Pages', 'Analytics']
      },
      premium: {
        name: 'Premium',
        price: '$20,000',
        features: ['Everything in Standard', 'Custom Features', 'E-commerce', 'Unlimited Pages', 'Priority Support']
      }
    }
  },
  'mobile-development': {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. Built with React Native, Flutter, or native technologies.',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-purple-500 to-purple-600',
    features: [
      'Cross-Platform Development',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'Native Performance',
      'Biometric Authentication',
      'Location Services',
      'Camera & Media Integration'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    process: [
      {
        step: '01',
        title: 'Requirements Analysis',
        description: 'Understanding your app requirements, target platforms, and user expectations.'
      },
      {
        step: '02',
        title: 'UI/UX Design',
        description: 'Creating intuitive mobile interfaces that follow platform guidelines.'
      },
      {
        step: '03',
        title: 'Development',
        description: 'Building your mobile app with native performance and modern features.'
      },
      {
        step: '04',
        title: 'Testing & Deployment',
        description: 'Comprehensive testing and app store submission process.'
      }
    ],
    pricing: {
      basic: {
        name: 'Basic',
        price: '$8,000',
        features: ['Single Platform', 'Basic Features', 'App Store Submission', '3 Months Support']
      },
      standard: {
        name: 'Standard',
        price: '$15,000',
        features: ['Cross-Platform', 'Advanced Features', 'Push Notifications', '6 Months Support']
      },
      premium: {
        name: 'Premium',
        price: '$30,000',
        features: ['Native Apps', 'Custom Features', 'Backend Integration', '1 Year Support']
      }
    }
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging and intuitive user experiences. From wireframes to high-fidelity prototypes.',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
    color: 'from-green-500 to-green-600',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'User Testing',
      'Design Systems',
      'Accessibility Design',
      'Interactive Prototypes',
      'Design Handoff'
    ],
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle', 'Framer'],
    process: [
      {
        step: '01',
        title: 'Research & Discovery',
        description: 'Understanding your users, competitors, and business objectives through research.'
      },
      {
        step: '02',
        title: 'Information Architecture',
        description: 'Organizing content and creating user flows that make sense to your audience.'
      },
      {
        step: '03',
        title: 'Design & Prototyping',
        description: 'Creating visual designs and interactive prototypes for user testing.'
      },
      {
        step: '04',
        title: 'Testing & Iteration',
        description: 'User testing and refining designs based on feedback and insights.'
      }
    ],
    pricing: {
      basic: {
        name: 'Basic',
        price: '$3,000',
        features: ['Wireframes', 'Basic Prototypes', 'Design System', '3 Revisions']
      },
      standard: {
        name: 'Standard',
        price: '$6,000',
        features: ['Everything in Basic', 'High-Fidelity Designs', 'User Testing', '5 Revisions']
      },
      premium: {
        name: 'Premium',
        price: '$12,000',
        features: ['Everything in Standard', 'Interactive Prototypes', 'Design Handoff', 'Unlimited Revisions']
      }
    }
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions using AWS, Azure, or Google Cloud. DevOps and CI/CD pipeline setup.',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'from-orange-500 to-orange-600',
    features: [
      'AWS/Azure/GCP',
      'CI/CD Pipelines',
      'Monitoring & Security',
      'Auto-scaling',
      'Load Balancing',
      'Database Management',
      'Backup & Recovery',
      'Cost Optimization'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    process: [
      {
        step: '01',
        title: 'Assessment',
        description: 'Evaluating your current infrastructure and identifying migration opportunities.'
      },
      {
        step: '02',
        title: 'Architecture Design',
        description: 'Designing scalable and secure cloud architecture for your applications.'
      },
      {
        step: '03',
        title: 'Migration & Setup',
        description: 'Migrating applications and setting up cloud infrastructure and CI/CD pipelines.'
      },
      {
        step: '04',
        title: 'Optimization',
        description: 'Monitoring performance and optimizing costs while maintaining security.'
      }
    ],
    pricing: {
      basic: {
        name: 'Basic',
        price: '$4,000',
        features: ['Cloud Migration', 'Basic Monitoring', 'Backup Setup', '3 Months Support']
      },
      standard: {
        name: 'Standard',
        price: '$8,000',
        features: ['Everything in Basic', 'CI/CD Pipeline', 'Auto-scaling', '6 Months Support']
      },
      premium: {
        name: 'Premium',
        price: '$15,000',
        features: ['Everything in Standard', 'Multi-cloud Setup', 'Advanced Security', '1 Year Support']
      }
    }
  },
  'consulting': {
    title: 'Consulting',
    description: 'Strategic technology consulting to help your business make informed decisions. Architecture reviews, performance audits, and best practices.',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-red-500 to-red-600',
    features: [
      'Architecture Review',
      'Performance Audit',
      'Best Practices',
      'Technology Selection',
      'Security Assessment',
      'Scalability Planning',
      'Team Training',
      'Code Review'
    ],
    technologies: ['Architecture Patterns', 'Performance Tools', 'Security Frameworks', 'Best Practices'],
    process: [
      {
        step: '01',
        title: 'Discovery',
        description: 'Understanding your current technology stack and business challenges.'
      },
      {
        step: '02',
        title: 'Analysis',
        description: 'Conducting thorough analysis of your systems and identifying improvement areas.'
      },
      {
        step: '03',
        title: 'Recommendations',
        description: 'Providing detailed recommendations and implementation roadmaps.'
      },
      {
        step: '04',
        title: 'Implementation Support',
        description: 'Supporting your team in implementing the recommended solutions.'
      }
    ],
    pricing: {
      basic: {
        name: 'Basic',
        price: '$2,000',
        features: ['Architecture Review', 'Basic Recommendations', '1 Month Support', 'Documentation']
      },
      standard: {
        name: 'Standard',
        price: '$5,000',
        features: ['Everything in Basic', 'Performance Audit', '3 Months Support', 'Implementation Guide']
      },
      premium: {
        name: 'Premium',
        price: '$10,000',
        features: ['Everything in Standard', 'Full Assessment', '6 Months Support', 'Team Training']
      }
    }
  },
  'maintenance': {
    title: 'Maintenance',
    description: 'Ongoing support and maintenance for your applications. Regular updates, bug fixes, and performance monitoring.',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-indigo-500 to-indigo-600',
    features: [
      '24/7 Support',
      'Regular Updates',
      'Performance Monitoring',
      'Security Patches',
      'Bug Fixes',
      'Backup Management',
      'Uptime Monitoring',
      'Emergency Support'
    ],
    technologies: ['Monitoring Tools', 'Backup Systems', 'Security Tools', 'Update Management'],
    process: [
      {
        step: '01',
        title: 'Setup',
        description: 'Setting up monitoring, backup systems, and maintenance procedures.'
      },
      {
        step: '02',
        title: 'Monitoring',
        description: 'Continuous monitoring of performance, security, and uptime.'
      },
      {
        step: '03',
        title: 'Maintenance',
        description: 'Regular updates, security patches, and performance optimizations.'
      },
      {
        step: '04',
        title: 'Support',
        description: '24/7 support for any issues or emergencies that arise.'
      }
    ],
    pricing: {
      basic: {
        name: 'Basic',
        price: '$500/month',
        features: ['Basic Monitoring', 'Monthly Updates', 'Email Support', 'Bug Fixes']
      },
      standard: {
        name: 'Standard',
        price: '$1,000/month',
        features: ['Everything in Basic', 'Weekly Updates', 'Phone Support', 'Performance Optimization']
      },
      premium: {
        name: 'Premium',
        price: '$2,000/month',
        features: ['Everything in Standard', '24/7 Support', 'Priority Response', 'Custom Features']
      }
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug: slug,
  }));
}

export default function ServicePage({ params }) {
  const service = services[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                View Pricing
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 -z-10"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-100 rounded-full opacity-50 -z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive features and capabilities to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern tools and technologies to build robust and scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {service.technologies.map((tech, index) => {
              const Icon = technologyIcons[tech];
              return (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {Icon ? <Icon className="w-8 h-8 text-blue-600" /> : <span className="text-blue-600 font-bold text-lg">{tech.charAt(0)}</span>}
                  </div>
                  <p className="text-gray-900 font-medium">{tech}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology to deliver successful projects on time and within budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(service.pricing).map(([key, plan]) => (
              <div key={key} className={`bg-white p-8 rounded-2xl shadow-lg ${key === 'standard' ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                    key === 'standard' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 shadow-lg'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                  }`}>
                    Get Started
                  </button>
                </div>
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
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Contact Us
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 