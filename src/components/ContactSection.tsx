
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <section id="contact" className="section-container bg-gray-50">
      <div className="text-center mb-16 reveal-animation">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="reveal-animation">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="mb-8 text-secondary">
            Have questions about our AI solutions? Fill out the form or contact us directly using the information below.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-secondary">info@sellmoretrips.ai</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-1">WhatsApp</h4>
              <p className="text-secondary">+573159381236</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-1">Office Hours</h4>
              <p className="text-secondary">Monday to Friday, 9AM - 5PM EST</p>
            </div>
          </div>
        </div>

        <div className="reveal-animation">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <Input id="name" placeholder="Your name" required />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
            
            <div>
              <label htmlFor="company" className="block mb-2">Company</label>
              <Input id="company" placeholder="Your company name" />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <Textarea id="message" placeholder="How can we help you?" required />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-secondary text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
