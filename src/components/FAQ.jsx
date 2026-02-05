import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:bg-black/5 transition-colors px-2"
      >
        <span className="text-lg md:text-xl font-medium uppercase tracking-tighter text-black leading-tight">
          {question}
        </span>
        <span className="text-xl font-light ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-2 text-gray-600 italic font-light leading-relaxed text-base max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "I'm not an Economics Major. Can I join?",
      answer: "Membership is open to all Rutgers undergraduate students. While most of our members are Economics majors, we welcome students from all disciplines who have any interest in economics and professional development."
    },
    {
      question: "When and where are club meetings?",
      answer: "General club meetings are held on Wednesdays, typically every other week. For the Spring 2026 semester, most meetings are in CASC 411AB. This schedule does not apply to separate club initiatives."
    },
    {
      question: "How can I get involved with club initiatives?",
      answer: "Students can reach out to initiative leaders (see 'People') to see if they are accepting students. There is typically an application process."
    },
    {
      question: "Is there a Fed Challenge Team?",
      answer: (
        <>
          Yes! For more information, check out the{" "}
          <a 
            href="https://economics.rutgers.edu/academics/undergraduate/fed-challenge" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black underline font-medium hover:text-gray-600 transition-colors"
          >
            Rutgers Fed Challenge page
          </a>.
        </>
      )
    },
    {
      question: "I've heard about REL. When do applications open?",
      answer: "Applications for REL typically open once at the start of each semester and remain open for about two weeks. For Spring 2026, applications close on February 6th."
    },
    {
      question: "When do board applications open?",
      answer: "E-Board applications open around the middle of the semester. However, vacancies or new roles will be announced on this site (see 'More')."
    }
  ];

  return (
    <section className="relative z-20 w-full bg-[#fafafa] py-24 px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-medium uppercase tracking-tighter text-black/90">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-black mt-6"></div>
        </motion.div>
        
        {/* Accordion List */}
        <div className="border-t border-black">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;