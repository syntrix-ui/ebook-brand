import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer: "A standard publishing timeline ranges from 6 to 12 weeks, depending on manuscript length and the depth of editing required. We provide a milestone-based roadmap at project kickoff so you always know what to expect."
  },
  {
    id: 2,
    question: "What services does your agency provide?",
    answer: "We offer comprehensive book publishing services including ghostwriting, editing, cover design, manuscript formatting, ISBN registration, and global distribution."
  },
  {
    id: 3,
    question: "Do you work with startups and enterprises?",
    answer: "Yes! We work with individual authors, corporate leaders, startups, and established enterprises to craft high-quality books and brand publishing assets."
  },
  {
    id: 4,
    question: "How do you handle revisions?",
    answer: "Our editorial process includes multiple review rounds where you have complete creative control and feedback approval before finalizing the print layout."
  },
  {
    id: 5,
    question: "Do you offer ongoing maintenance support?",
    answer: "Yes, we provide ongoing marketing, author website updates, royalty reporting, and continuous distribution management support."
  }
];

interface FaqAccordionProps {
  items?: FaqItem[];
}

export default function FaqAccordion({ items = faqs }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(1); // Item 1 open by default matching Figma

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto space-y-4 font-montserrat">
      {items.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            onClick={() => toggleFaq(faq.id)}
            className={`w-full rounded-2xl sm:rounded-[20px] transition-all duration-300 cursor-pointer overflow-hidden ${
              isOpen
                ? 'bg-[#3D2E61] text-white p-6 sm:p-7 shadow-xl border border-[#3D2E61]'
                : 'bg-slate-50/70 hover:bg-slate-100/90 text-slate-900 p-5 sm:p-6 border border-slate-200/80 shadow-sm'
            }`}
          >
            {/* Question Header & Toggle Icon */}
            <div className="flex items-center justify-between gap-4">
              <h3
                className={`font-montserrat font-bold text-base sm:text-lg leading-snug ${
                  isOpen ? 'text-white' : 'text-slate-900'
                }`}
              >
                {faq.question}
              </h3>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? 'bg-white text-[#3D2E61]'
                    : 'bg-[#F6F0E6] text-slate-800'
                }`}
              >
                {isOpen ? (
                  <Minus className="w-4 h-4 stroke-[3]" />
                ) : (
                  <Plus className="w-4 h-4 stroke-[3]" />
                )}
              </div>
            </div>

            {/* Answer Content (Shown when isOpen) */}
            {isOpen && (
              <div className="pt-3.5 border-t border-purple-400/20 mt-3 animate-fadeIn">
                <p className="font-montserrat text-xs sm:text-sm text-purple-100/90 leading-relaxed font-normal">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
