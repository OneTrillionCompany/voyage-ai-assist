
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 reveal-animation">
      <div className="mb-6 text-4xl text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary mb-4">{description}</p>
      <a href="#contact" className="inline-flex items-center text-primary hover:text-secondary">
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-container bg-gray-50">
      <div className="text-center mb-16 reveal-animation">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Travel Services</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          Discover how our dual AI assistants can transform your travel business and delight your customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon="✈️"
          title="AI Travel Advisor Assistant"
          description="Help travel advisors quickly find the best deals and information for customers, reducing research time dramatically."
        />
        <ServiceCard
          icon="🏨"
          title="Customer Booking Assistant"
          description="Guide customers through the booking process, from searching for trips to payment and confirmation."
        />
        <ServiceCard
          icon="🔍"
          title="Smart Trip Finder"
          description="Analyze thousands of options to find the perfect match for customer preferences and budget constraints."
        />
        <ServiceCard
          icon="💬"
          title="24/7 Customer Support"
          description="Provide instant responses to common questions and concerns, even outside business hours."
        />
        <ServiceCard
          icon="📊"
          title="Market Intelligence"
          description="Stay ahead of trends and competition with AI-powered analytics and insights."
        />
        <ServiceCard
          icon="🔐"
          title="Secure Payment Processing"
          description="Facilitate safe and easy transactions between customers and travel providers."
        />
      </div>
    </section>
  );
};

export default ServicesSection;
