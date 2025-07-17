// This file is for static params generation for [slug] routes in /services
// No 'use client' here!

// Minimal services object for static params generation
const services = {
  'web-development': {},
  'mobile-development': {},
  'ui-ux-design': {},
  'cloud-solutions': {},
  'consulting': {},
  'maintenance': {},
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
} 