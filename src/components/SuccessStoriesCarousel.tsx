import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StoryItem {
  name: string;
  desc: string;
  image: string;
}

const stories: StoryItem[] = [
  {
    name: "Andrea Lee",
    desc: "like other strong professions, authorship also needs powerful branding, and a website does exactly this and more. it is your dedicated space on the internet that:",
    image: "/2405fcbb203ece77e6c55a49ae556e56374b0d8f.png"
  },
  {
    name: "David Young",
    desc: "like other strong professions, authorship also needs powerful branding, and a website does exactly this and more. it is your dedicated space on the internet that:",
    image: "/b2b97fd883cc3b94ff2c8c611f0232164ae7ba4f.png"
  },
  {
    name: "Danial M.",
    desc: "like other strong professions, authorship also needs powerful branding, and a website does exactly this and more. it is your dedicated space on the internet that:",
    image: "/c23fe4a88b0714499844a08ce9576e6871da1973.png"
  },
  {
    name: "Sarah Jenkins",
    desc: "like other strong professions, authorship also needs powerful branding, and a website does exactly this and more. it is your dedicated space on the internet that:",
    image: "/2405fcbb203ece77e6c55a49ae556e56374b0d8f.png"
  },
  {
    name: "Michael Robert",
    desc: "like other strong professions, authorship also needs powerful branding, and a website does exactly this and more. it is your dedicated space on the internet that:",
    image: "/b2b97fd883cc3b94ff2c8c611f0232164ae7ba4f.png"
  },
  {
    name: "Emma Watson",
    desc: "like other strong professions, authorship also needs powerful branding, and a website does exactly this and more. it is your dedicated space on the internet that:",
    image: "/c23fe4a88b0714499844a08ce9576e6871da1973.png"
  }
];

export default function SuccessStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const totalItems = stories.length;

  // Track responsive viewport cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, totalItems - cardsPerView);

  // Auto-play timer every 4 seconds (4000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="w-full relative px-4 sm:px-14 py-4">
      
      {/* Navigation Arrow Left */}
      <button
        onClick={handlePrev}
        aria-label="Previous Story"
        className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white text-slate-900 shadow-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Navigation Arrow Right */}
      <button
        onClick={handleNext}
        aria-label="Next Story"
        className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white text-slate-900 shadow-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Slider Container */}
      <div className="w-full overflow-hidden py-2">
        <div 
          className="stories-track flex transition-transform duration-700 ease-in-out gap-6"
          style={{
            transform: `translateX(calc(-${currentIndex} * var(--story-step, 100% + 24px)))`,
          }}
        >
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 bg-[#352554] border-2 border-white/80 rounded-[22px] overflow-hidden flex flex-col shadow-2xl hover:border-white transition-all duration-300"
            >
              {/* Author Photo */}
              <div className="w-full h-[210px] sm:h-[230px] overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Author Testimonial Details */}
              <div className="p-6 space-y-2.5 text-left flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-nunito font-bold text-xl text-white tracking-tight">
                    {story.name}
                  </h3>
                  <p className="font-montserrat text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                    {story.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stories-track {
          --story-step: calc(100% + 24px);
        }
        @media (min-width: 640px) {
          .stories-track {
            --story-step: calc(50% + 12px);
          }
        }
        @media (min-width: 1024px) {
          .stories-track {
            --story-step: calc(33.333% + 16px);
          }
        }
      `}</style>
    </div>
  );
}
