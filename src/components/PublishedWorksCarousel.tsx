import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CardItem {
  title: string;
  desc: string;
  image: string;
}

const items: CardItem[] = [
  {
    title: "More Than Flying. Become The Pilot Others Trust",
    desc: "An inspiring aviation handbook revealing the technical precision, mindset mastery, and leadership habits demanded at thirty thousand feet.",
    image: "/12f9e45c63bc59a57ec6744141dd34ac67fbbd3a.jpg"
  },
  {
    title: "Built By Faith. Shaped By Discipline. Unstoppable In Purpose.",
    desc: "A transformative memoir documenting the daily practices, spiritual fortitude, and unshakeable discipline required to conquer severe adversity.",
    image: "/244b958bea55399fa6b714f88f6a9c27c9003ed8.jpg"
  },
  {
    title: "Iron & Embers. The Ashes of Thezmarr",
    desc: "An epic high-fantasy chronicle following ancient magic, rival war-lords, and a defiant warrior fighting to reclaim an imperiled throne.",
    image: "/1846883451fd8e7888d65e8818d2fe467f02adb5.jpg"
  },
  {
    title: "A Court Of Splintered Harmony",
    desc: "A gripping romantic fantasy entwined with lethal royal courts, forbidden pacts, and the fragile line between redemption and betrayal.",
    image: "/39b1637c966308ede50bcdb7b21359babcfdb0e2.jpg"
  },
  {
    title: "Dire Bound. A Wolves Of Ruin Novel",
    desc: "A gritty supernatural thriller exploring ferocious clan loyalty, pack politics, and a hunt for survival across an untamed frontier.",
    image: "/58c55a2bc24d07bd6776eae1dd56ad412f9a23d0.jpg"
  },
  {
    title: "Queen Of Rot & Pain",
    desc: "A dark gothic fantasy exploring vengeance, dark sorcery, and an outcast ruler rising through catastrophic ashes to command supreme power.",
    image: "/f9aefee6fee097eafd74850fe2328124faea2e3c.jpg"
  }
];

export default function PublishedWorksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  // Append first item so slide 6 (index 5) displays item 0 in the right slot instead of being blank!
  const displayItems = [...items, items[0]];

  // Auto-play timer every 4 seconds (4000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalItems - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [totalItems]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= totalItems - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-[1350px] mx-auto relative px-4 sm:px-14 py-4">
      
      {/* Navigation Arrow Left */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200/80 flex items-center justify-center hover:bg-slate-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Navigation Arrow Right */}
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200/80 flex items-center justify-center hover:bg-slate-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Carousel Content Slider Window */}
      <div className="w-full overflow-hidden rounded-[28px] py-2">
        <div 
          className="carousel-track flex transition-transform duration-700 ease-in-out gap-6"
          style={{
            transform: `translateX(calc(-${currentIndex} * var(--step-width, 100% + 24px)))`,
          }}
        >
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] shrink-0 bg-[#E2E0E8] rounded-[24px] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Card Text Details */}
              <div className="flex-1 space-y-2.5 text-left order-2 sm:order-1">
                <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[#111111] leading-snug">
                  {item.title}
                </h3>
                <p className="font-montserrat text-xs sm:text-sm text-[#847C7C] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Card Book Cover Image */}
              <div className="w-[140px] sm:w-[160px] lg:w-[175px] h-[190px] sm:h-[220px] lg:h-[240px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-300/40 bg-white order-1 sm:order-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-8 mb-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-7 h-2.5 bg-[#D96B00]'
                : 'w-2.5 h-2.5 bg-[#D5D2DC] hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      <style>{`
        .carousel-track {
          --step-width: calc(100% + 24px);
        }
        @media (min-width: 768px) {
          .carousel-track {
            --step-width: calc(50% + 12px);
          }
        }
      `}</style>
    </div>
  );
}
