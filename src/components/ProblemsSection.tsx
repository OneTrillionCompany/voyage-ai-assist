
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, X } from 'lucide-react';

const ProblemsSection: React.FC = () => {
  const { t } = useLanguage();

  // Define the comparison items - using all items from the three previous tabs combined
  const comparisonItems = [
    // Quotation items
    {
      traditional: {
        title: "Manual quotations taking 30+ minutes",
        description: t('problems.quotation.before.1')
      },
      solution: {
        title: "Automated quotations in seconds",
        description: t('problems.quotation.after.1')
      }
    },
    {
      traditional: {
        title: "Errors in calculations and pricing",
        description: t('problems.quotation.before.2')
      },
      solution: {
        title: "Precise calculations without errors",
        description: t('problems.quotation.after.2')
      }
    },
    {
      traditional: {
        title: "Inconsistent formats",
        description: t('problems.quotation.before.3')
      },
      solution: {
        title: "Consistent professional format",
        description: t('problems.quotation.after.3')
      }
    },
    // Organization items
    {
      traditional: {
        title: "Information scattered in notes and chats",
        description: t('problems.organization.before.2')
      },
      solution: {
        title: "All information centralized",
        description: t('problems.organization.after.2')
      }
    },
    {
      traditional: {
        title: "Difficult to find customer history",
        description: t('problems.organization.before.3')
      },
      solution: {
        title: "Complete history and quick search",
        description: t('problems.organization.after.3')
      }
    },
    // Tracking items
    {
      traditional: {
        title: "Inconsistent manual tracking",
        description: t('problems.tracking.before.1')
      },
      solution: {
        title: "Automated tracking with reminders",
        description: t('problems.tracking.after.1')
      }
    },
    {
      traditional: {
        title: "Potential clients are forgotten",
        description: t('problems.tracking.before.2')
      },
      solution: {
        title: "No client is left without attention",
        description: t('problems.tracking.after.2')
      }
    },
    {
      traditional: {
        title: "No performance metrics",
        description: t('problems.tracking.before.3')
      },
      solution: {
        title: "Dashboard with real-time metrics",
        description: t('problems.tracking.after.3')
      }
    },
    {
      traditional: {
        title: "Slow response times",
        description: t('problems.tracking.before.4')
      },
      solution: {
        title: "Quick pre-configured responses",
        description: t('problems.tracking.after.4')
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
          
          <div className="space-y-4">
            {comparisonItems.map((item, index) => (
              <div key={`traditional-${index}`} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800">{item.traditional.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Solution Column */}
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">With Our AI Solution</h3>
          
          <div className="space-y-4">
            {comparisonItems.map((item, index) => (
              <div key={`solution-${index}`} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-primary">{item.solution.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
