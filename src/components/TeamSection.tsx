import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, linkedin }) => {
  return (
    <div className="flex flex-col items-center reveal-animation">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 -translate-x-1/2 bottom-[1.5px] bg-blue-700 rounded-full p-1 shadow-lg hover:bg-blue-500 transition-colors"
          aria-label={`LinkedIn de ${name}`}
        >
          {/* LinkedIn SVG */}
          <Linkedin className="w-6 h-6 text-white fill-white" />
        </a>
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-secondary">{role}</p>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="section-container">
      <div className="text-center mb-16 reveal-animation">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('team.title')}</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          {t('team.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center">
        <TeamMember
          name="Manuel Alejandro Gruezo"
          role="CEO"
          image="https://media.licdn.com/dms/image/v2/D4E03AQHBdbUsPq4Lqg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724384225794?e=1752105600&v=beta&t=7zBvGn9HkshExXLC7dbpu_z4bKB74mVRcBbJd63OZDc"
          linkedin="https://www.linkedin.com/in/manuel-alejandro-gruezo-perlaza-bb1970255/"
        />
        <TeamMember
          name="Gustavo Chipantiza"
          role="CDO"
          image="https://media.licdn.com/dms/image/v2/D4E03AQH1W7YMO4PWPg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700289742816?e=1752105600&v=beta&t=EAsSQLFxgHha3lLfWruv0HJnTRlBuRxfmDetjZtM4CA"
          linkedin="https://www.linkedin.com/in/gustavo-chipantiza-09a095238/"
        />
        <TeamMember
          name="Sofia Salinas"
          role="CTO"
          image="https://media.licdn.com/dms/image/v2/D4D03AQGYM8KaU6EEHg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711032962726?e=1752105600&v=beta&t=dOxNzWutLvAjo07fTVlHvxUKnr7Uw-zk5NCBlplXa2k"
          linkedin="https://www.linkedin.com/in/sofiasalinasrico/"
        />
        <TeamMember
          name="Daniel Rivera Yepes"
          role="AI Engineer"
          image="https://media.licdn.com/dms/image/v2/D4E03AQGDUgKggPEaEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695931176974?e=1752105600&v=beta&t=TwPvR_qmryGRwjJq2JRffA9b6ESkiv5oPdT4lpVVGAw"
          linkedin="https://www.linkedin.com/in/danrivera9/"
        />
        <TeamMember
          name="Miguel Muñoz"
          role="AI Engineer"
          image="https://media.licdn.com/dms/image/v2/D4E35AQFm0As5M5kj5w/profile-framedphoto-shrink_400_400/B4EZaS3K9vHkAg-/0/1746220659201?e=1746993600&v=beta&t=kNKgdY2FRl9ia895ck5WI_9PlBxMsEuQGeL5TdVhu80"
          linkedin="https://www.linkedin.com/in/miguel-mu%C3%B1oz-514069283/"
        />
      </div>
    </section>
  );
};

export default TeamSection;
