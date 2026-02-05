import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InitiativeCard = ({ title, description, links = [] }) => {
  const isPlaceholder = links.length === 1 && !links[0].url;

  return (
    <div className={`
      border border-black p-8 bg-white flex flex-col h-full
      ${isPlaceholder 
        ? 'opacity-80'
        : 'group transition-all duration-500 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'
      }
    `}>
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-medium uppercase tracking-tight text-black">
          {title}
        </h3>
        <div className={`w-12 h-1 bg-black mt-2 transition-all duration-500 ${!isPlaceholder && 'group-hover:w-full'}`}></div>
      </div>
      <p className="text-gray-600 font-serif leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-6 mt-auto">
        {links.map((link, index) => {
          if (!link.url) {
            return (
              <span key={index} className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-gray-400 cursor-default">
                {link.text}
              </span>
            );
          }

          const isExternal = link.url.startsWith('http');

          return isExternal ? (
            <a 
              key={index}
              href={link.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] font-bold hover:text-gray-500 transition-colors"
            >
              {link.text} <ArrowRight size={14} />
            </a>
          ) : (
            <Link 
              key={index}
              to={link.url} 
              className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] font-bold hover:text-gray-500 transition-colors"
            >
              {link.text} <ArrowRight size={14} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Initiatives = () => {
  const mainInitiatives = [
    {
      title: "Buddy Program",
      description: "Connecting underclassmen with experienced upperclassmen mentors to navigate the economics major and career paths.",
      links: [{ text: "Coming Fall 2026", url: "" }]
    },
    {
      title: "Competitions",
      description: "Providing students the opportunity to showcase their talents and apply their knowledge.",
      links: [{ text: "Policython", url: "/policython" }]
    },
    {
      title: "Econometrics Fellowship",
      description: "A specialized program focused on advanced causal inference methods in economic research.",
      links: [{ text: "Coming Fall 2026", url: "" }]
    },
    {
      title: "RECONS Review (Newsletter)",
      description: "Covering diverse topics in economics and finance with student-written op-eds and market analysis.",
      links: [{ text: "Read", url: "https://rutgersecon.substack.com/" }]
    }
  ];

  const researchBranches = [
    {
      number: "1",
      title: "Research Fellowship",
      description: "Cohort of undergraduates co-authoring an academic research paper.",
      link: "/rfp",
      linkText: "Learn More"
    },
    {
      number: "2",
      title: "Review Journal",
      description: "Yearly academic publication of undergraduate research in economics.",
      link: "/rj",
      linkText: "Learn More"
    },
    {
      number: "3",
      title: "Rutgers Economics Labs",
      description: "Students teams producing data-driven insights for partner organizations.",
      link: "https://www.rutgerseconomics.org/",
      linkText: "Learn More"
    }
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen py-24 px-8 text-black">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-24 border-l-4 border-black pl-8">
          <h1 className="text-5xl md:text-6xl font-serif font-medium uppercase tracking-tighter mb-4">
            Our Initiatives
          </h1>
          <p className="text-xl text-gray-500 font-serif max-w-2xl italic">
            Expanding the horizons of economic education through peer mentorship, 
            active research, and professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {mainInitiatives.map((item, idx) => (
            <InitiativeCard key={idx} {...item} />
          ))}
        </div>

        <div className="border border-black bg-white p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-serif font-medium uppercase tracking-tight mb-8">
              Research
            </h2>
            <p className="max-w-2xl text-gray-600 font-serif mb-12 italic leading-relaxed">
              Our research initiative is split into three branches. Applications are not synchronized, so check frequently for updates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/10 pt-12">
              {researchBranches.map((branch, idx) => {
                const isExternal = branch.link.startsWith('http');
                return (
                  <div key={idx} className="space-y-4 flex flex-col h-full">
                    <h4 className="font-serif font-bold uppercase text-sm tracking-widest">
                      {branch.number}. {branch.title}
                    </h4>
                    <p className="text-sm text-gray-500 font-serif flex-grow leading-relaxed">
                      {branch.description}
                    </p>

                    {isExternal ? (
                      <a href={branch.link} target="_blank" rel="noopener noreferrer" className="block text-[10px] uppercase tracking-widest font-bold hover:underline transition-all">
                        {branch.linkText} →
                      </a>
                    ) : (
                      <Link to={branch.link} className="block text-[10px] uppercase tracking-widest font-bold hover:underline transition-all">
                        {branch.linkText} →
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Initiatives;