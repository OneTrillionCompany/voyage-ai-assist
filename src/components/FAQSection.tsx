
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="section-container">
      <div className="text-center mb-16 reveal-animation">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          Get answers to common questions about our AI travel solutions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto reveal-animation">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">How does the AI advisor assistant work?</AccordionTrigger>
            <AccordionContent>
              Our AI advisor assistant uses advanced natural language processing and machine learning to analyze thousands of travel options across multiple providers. It quickly filters results based on specific client requirements, price ranges, and preferences, presenting advisors with the most relevant options and saving hours of research time.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">Is customer data kept secure?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We implement enterprise-grade security measures including encryption, secure authentication, and regular security audits. All customer data is protected in compliance with global privacy standards, and we never share personal information with third parties without explicit consent.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">Can the AI handle complex itineraries?</AccordionTrigger>
            <AccordionContent>
              Yes, our AI excels at managing complex multi-destination itineraries with various transportation methods, accommodation types, and activities. It can coordinate complicated logistics while optimizing for factors like cost, convenience, and customer preferences.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">How do payments work through the platform?</AccordionTrigger>
            <AccordionContent>
              Our secure payment system integrates with major payment processors and provides multiple payment options for customers. The system handles deposits, installment payments, and full payments, with automated receipts and confirmation emails. Travel advisors receive immediate notification of completed transactions.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">Can the AI assistant be customized for my travel business?</AccordionTrigger>
            <AccordionContent>
              Yes, our AI solutions are designed to be highly customizable. We can adapt the system to match your brand voice, preferred suppliers, commission structures, and business workflow. The AI learns from your business patterns over time, becoming increasingly tailored to your specific needs.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">Is training required to use the system?</AccordionTrigger>
            <AccordionContent>
              We provide comprehensive onboarding and training, but the system is designed to be intuitive and user-friendly. Most travel advisors can begin using the basic features within hours, while more advanced capabilities might require additional familiarization. Our support team is always available to help with questions or challenges.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
