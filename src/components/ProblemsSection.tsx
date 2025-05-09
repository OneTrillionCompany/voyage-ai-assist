
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const ProblemsSection: React.FC = () => {
  const { t } = useLanguage();

  // Define the comparison items
  const comparisonItems = [
    {
      traditional: {
        title: "Manual Research",
        description: "Hours spent searching through countless options for each customer request"
      },
      solution: {
        title: "AI-Powered Search",
        description: "Instant results filtered by customer preferences and budget"
      }
    },
    {
      traditional: {
        title: "Scattered Information",
        description: "Customer data spread across emails, chats, and notes"
      },
      solution: {
        title: "Centralized Data",
        description: "All customer information and preferences in one accessible place"
      }
    },
    {
      traditional: {
        title: "Limited Availability",
        description: "Support only available during business hours"
      },
      solution: {
        title: "24/7 Assistance",
        description: "Immediate responses to customer inquiries at any time"
      }
    },
    {
      traditional: {
        title: "Complex Booking Process",
        description: "Multiple back-and-forth emails to finalize details and confirm bookings"
      },
      solution: {
        title: "Streamlined Booking",
        description: "One-click confirmations and seamless payment processing"
      }
    },
    {
      traditional: {
        title: "Inconsistent Follow-ups",
        description: "Manual tracking often leads to missed opportunities"
      },
      solution: {
        title: "Automated Engagement",
        description: "Timely reminders and personalized follow-ups to close sales"
      }
    }
  ];

  return (
    <section id="problems" className="section-container">
      <div className="text-center mb-16 reveal-animation">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('problems.title')}</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          {t('problems.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Traditional Column */}
        <div className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-700">Traditional Travel Agency</h3>
          
          <div className="space-y-6">
            {comparisonItems.map((item, index) => (
              <div key={`traditional-${index}`} className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-red-600">{item.traditional.title}</h4>
                <p className="text-gray-600">{item.traditional.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Solution Column */}
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">With Our AI Solution</h3>
          
          <div className="space-y-6">
            {comparisonItems.map((item, index) => (
              <div key={`solution-${index}`} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary">
                <h4 className="text-lg font-semibold mb-2 flex items-center text-primary">
                  <Check className="mr-2 h-5 w-5" /> {item.solution.title}
                </h4>
                <p className="text-gray-600">{item.solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
