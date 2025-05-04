
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Travel Advisory with AI
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-8">
              Leverage advanced AI technology to help travel advisors find the perfect deals and assist customers in booking their dream trips.
            </p>
            <Button className="bg-primary hover:bg-secondary text-white text-lg px-8 py-6" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
              Connect with Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="public/lovable-uploads/8b3b9b10-0f93-43c6-91e5-95d9455d309b.png" 
                alt="AI Travel Assistant" 
                className="w-full max-w-lg animate-plane-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
