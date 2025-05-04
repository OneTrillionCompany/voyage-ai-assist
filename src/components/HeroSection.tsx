
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 ">
      <div className="container mx-auto px-4 md:px-8 relative h-[calc(100vh-7rem)]">
        {/* Title - Top Left */}
        <div className="absolute top-0 left-10 max-w-xl md:max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Transform Travel Advisory with AI
          </h1>
        </div>

        {/* Image - Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg md:max-w-xl lg:max-w-2xl">
          <img 
            src="public/lovable-uploads/hero.png" 
            alt="AI Travel Assistant" 
            className="w-full animate-plane-float h-auto scale-125"
          />
        </div>

        {/* Description - Bottom Left */}
        <div className="absolute bottom-10 left-10 max-w-md md:max-w-lg">
          <p className="text-base md:text-lg lg:text-xl text-secondary">
            Leverage advanced AI technology to help travel advisors find the perfect deals and assist customers in booking their dream trips.
          </p>
        </div>

        {/* CTA Button - Bottom Right */}
        <div className="absolute bottom-10 right-10">
          <Button 
            className="bg-primary hover:bg-secondary text-white text-base md:text-lg px-6 py-5 md:px-8 md:py-6" 
            onClick={() => window.open('https://wa.me/573054498624', '_blank')}
          >
            Connect with Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
