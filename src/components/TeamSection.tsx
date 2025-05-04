
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center reveal-animation">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-secondary">{role}</p>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="section-container">
      <div className="text-center mb-16 reveal-animation">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          The innovative minds behind sellmoretrips.AI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <TeamMember
          name="Alex Johnson"
          role="Founder & CEO"
          image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
        />
        <TeamMember
          name="Maria Rodriguez"
          role="AI Research Director"
          image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
        />
        <TeamMember
          name="David Chen"
          role="CTO"
          image="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
        />
        <TeamMember
          name="Sarah Patel"
          role="Travel Industry Expert"
          image="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
        />
      </div>
    </section>
  );
};

export default TeamSection;
