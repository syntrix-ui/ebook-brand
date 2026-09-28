import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

const faqData: FaqCategory[] = [
  {
    category: "Writing",
    items: [
      {
        id: "w-1",
        question: "How do I outsource ebook writing?",
        answer: "Outsourcing your ebook writing with Fleck Publisher is seamless. Start by scheduling a free consultation to discuss your vision, concepts, or raw notes. We match you with an experienced ghostwriter specializing in your genre who conducts detailed interviews, crafts a chapter-by-chapter outline, and drafts the manuscript in phases for your feedback and approval."
      },
      {
        id: "w-2",
        question: "How does Fleck Publisher's book writing service work?",
        answer: "Our book writing service follows a collaborative 4-stage process: 1) Strategy & Ideation, 2) Comprehensive Outlining, 3) Chapter-by-chapter drafting with regular review milestones, and 4) Final developmental polish and formatting. You remain in total creative control throughout the entire journey."
      },
      {
        id: "w-3",
        question: "Who gets the credit if you ghostwrite my ebook?",
        answer: "You receive 100% of the credit. Your name appears exclusively on the cover, title page, copyright notice, and all retailer listings. Our ghostwriting agreements are 100% confidential and work-for-hire, ensuring all intellectual property rights and future royalties belong solely to you."
      },
      {
        id: "w-4",
        question: "What do ebook writing services include?",
        answer: "Our comprehensive writing services cover initial concept ideation, market research, detailed outlines, complete manuscript writing, regular milestone reviews, developmental editing, final proofreading, and retail-ready digital file preparation."
      },
      {
        id: "w-5",
        question: "How long does it take to write an ebook?",
        answer: "Most ebook projects take between 4 to 12 weeks depending on word count, research requirements, and revision turnarounds. We create a custom production timeline upfront so you always know when each chapter milestone will be delivered."
      },
      {
        id: "w-6",
        question: "Can I publish it under my name?",
        answer: "Yes, absolutely. You retain all copyright and publishing rights. The book will be published under your legal name, your company name, or your chosen pseudonym/pen name."
      },
      {
        id: "w-7",
        question: "What if I already have a draft?",
        answer: "If you have a partial draft, rough notes, or an existing manuscript, our team will review it, identify areas for improvement, expand concepts, smooth out narrative flow, and polish it to commercial publishing standards."
      },
      {
        id: "w-8",
        question: "Will the writing match my voice?",
        answer: "Yes. Prior to drafting, we conduct dedicated voice-matching interviews and review any writing samples, transcripts, or podcasts you provide to capture your authentic personality, vocabulary, cadence, and tone."
      }
    ]
  },
  {
    category: "Design",
    items: [
      {
        id: "d-1",
        question: "What formats will I receive my final design in?",
        answer: "You receive all industry-standard distribution files: Print-ready CMYK PDF with bleeds for paperback and hardcover, EPUB and KPF for Kindle and digital readers, along with high-res PNG/JPG mockups for promotional use."
      },
      {
        id: "d-2",
        question: "Can I request revisions after seeing the first draft?",
        answer: "Yes! We provide multiple revision rounds on typography, cover artwork, color palettes, and interior layout to ensure every visual detail matches your exact vision."
      },
      {
        id: "d-3",
        question: "Do I own the illustrations and cover art?",
        answer: "Yes. Upon project completion, full exclusive commercial rights and raw design source files are transferred directly to you."
      },
      {
        id: "d-4",
        question: "Will my design fit Amazon KDP?",
        answer: "Guaranteed. Our book designers build every layout to the exact millimeter specifications, spine width calculations, and margin requirements mandated by Amazon KDP, IngramSpark, and Barnes & Noble."
      },
      {
        id: "d-5",
        question: "Can you match my genre or age group?",
        answer: "Yes. We analyze current bestselling titles in your exact subgenre and target reader demographic to create typography and visual themes that immediately capture your ideal readers' interest."
      },
      {
        id: "d-6",
        question: "Do you work with authors who already have a draft?",
        answer: "Yes. We frequently work with authors who have completed manuscripts and only need professional interior layout typesetting, custom chapter headers, and stunning cover design."
      },
      {
        id: "d-7",
        question: "Can you also design my book's promotional assets?",
        answer: "Absolutely! We create 3D book cover mockups, social media banners, bookmark designs, promotional flyers, and A+ content graphics tailored for Amazon product pages."
      }
    ]
  },
  {
    category: "Publishing",
    items: [
      {
        id: "p-1",
        question: "Do I need my own Amazon KDP account?",
        answer: "We help you set up and configure your own direct Amazon KDP account so that 100% of sales royalties are deposited directly into your bank account with zero intermediary cuts."
      },
      {
        id: "p-2",
        question: "Can you publish my book across multiple platforms?",
        answer: "Yes! Beyond Amazon KDP, we distribute your book across Apple Books, Barnes & Noble Press, Kobo Writing Life, Google Play Books, IngramSpark, and over 40,000 libraries and retailers worldwide."
      },
      {
        id: "p-3",
        question: "Do I keep all rights and royalties?",
        answer: "100% yes. You retain full copyright, publishing ownership, and receive 100% of your net royalties directly from retailers."
      },
      {
        id: "p-4",
        question: "What file formats do I need to self-publish my ebook?",
        answer: "You need a validated EPUB file for digital platforms and a high-resolution, print-ready PDF with embedded fonts for paperback and hardcover editions. We handle all file conversions and quality validations."
      },
      {
        id: "p-5",
        question: "Will my book be listed globally?",
        answer: "Yes. Your book will be available in multiple territories worldwide across North America, the UK, Europe, Australia, India, Japan, and Latin America."
      },
      {
        id: "p-6",
        question: "Do you help with pricing and categories when publishing the book?",
        answer: "Yes. We perform competitive market analysis to choose high-ranking, low-competition BISAC categories and optimized search keywords to maximize your book's discoverability and sales rank."
      }
    ]
  },
  {
    category: "Editing",
    items: [
      {
        id: "e-1",
        question: "What's the difference between editing and proofreading?",
        answer: "Editing addresses narrative structure, character development, clarity, pacing, and line-by-line phrasing. Proofreading is the final quality check that catches lingering typographical errors, grammatical slips, and formatting inconsistencies."
      },
      {
        id: "e-2",
        question: "Can I request editing for just a few chapters?",
        answer: "Yes. We offer sample chapter evaluations as well as custom scopes for authors looking to refine specific acts or sections."
      },
      {
        id: "e-3",
        question: "How long does the editing process take?",
        answer: "Standard editorial rounds take 2 to 4 weeks depending on word count and the complexity of editing requested (copyediting vs. developmental editing)."
      },
      {
        id: "e-4",
        question: "Will you keep my original tone and style while development and copy editing?",
        answer: "Preserving your unique authorial voice is our highest editorial priority. We refine readability, eliminate clunky phrasing, and fix inconsistencies without altering your personality."
      },
      {
        id: "e-5",
        question: "Can I review every edit made?",
        answer: "Yes. We utilize Microsoft Word's Track Changes feature, giving you the ability to view, approve, or reject every suggestion, correction, and editorial note."
      },
      {
        id: "e-6",
        question: "Do you offer line editing, copyediting, and proofreading separately?",
        answer: "Yes. You can select individual editorial passes or combine them into our comprehensive editorial package for end-to-end manuscript perfection."
      }
    ]
  },
  {
    category: "Marketing",
    items: [
      {
        id: "m-1",
        question: "How long should a book marketing campaign run?",
        answer: "We recommend initiating buzz 6 to 8 weeks before your launch date and maintaining active promotion for at least 60 to 90 days post-launch to sustain algorithm momentum."
      },
      {
        id: "m-2",
        question: "Do I need a personal brand before marketing?",
        answer: "No. While an existing platform is helpful, our marketing packages include author brand setup, professional social profiles, media kits, and newsletter launch funnels built from scratch."
      },
      {
        id: "m-3",
        question: "What's the minimum ad spend for book promotion services?",
        answer: "We accommodate various budget sizes. Authors typically begin with $150 to $300 per month for targeted Amazon Ads and Meta campaigns, scaling as sales and reviews increase."
      },
      {
        id: "m-4",
        question: "Can I choose which platforms to focus on?",
        answer: "Yes. We tailor our strategy to your genre—leveraging TikTok (#BookTok) for YA and romance, Amazon Ads and LinkedIn for business and nonfiction, and Instagram for lifestyle and fiction."
      },
      {
        id: "m-5",
        question: "Will I need to create content myself?",
        answer: "No. Our digital marketing team produces all visual assets, promotional videos, ad copy, press releases, and email templates for you."
      },
      {
        id: "m-6",
        question: "Can I market a book that's already published?",
        answer: "Yes! We specialize in backlist revivals, seasonal re-launches, and aggressive ad campaigns for previously published books seeking renewed traction."
      },
      {
        id: "m-7",
        question: "How do you measure results of the book promotion services?",
        answer: "We track Best Sellers Rank (BSR), cost per click (CPC), click-through rate (CTR), conversion rate, organic reader reviews, and overall return on ad spend (ROAS) via transparent monthly reporting."
      }
    ]
  },
  {
    category: "Trailer",
    items: [
      {
        id: "t-1",
        question: "How long should a book trailer be?",
        answer: "The most effective book trailers are between 30 and 60 seconds—punchy enough to hold viewers' attention while building cinematic intrigue and emotional hook."
      },
      {
        id: "t-2",
        question: "Can you add voiceover and music?",
        answer: "Yes. Every trailer includes fully licensed cinematic musical scoring, immersive sound effects, and voiceover recorded by professional voice actors."
      },
      {
        id: "t-3",
        question: "What formats will I receive my book trailer in?",
        answer: "You receive full 1080p and 4K MP4 files in both 16:9 widescreen (for YouTube and websites) and 9:16 vertical orientation (optimized for TikTok, Instagram Reels, and YouTube Shorts)."
      },
      {
        id: "t-4",
        question: "How long does it take to create a book trailer?",
        answer: "Trailer production typically takes 1 to 2 weeks from script and storyboard approval to final rendering."
      },
      {
        id: "t-5",
        question: "Can I give input on visuals?",
        answer: "Yes! You review and approve the screenplay outline, visual mood board, and storyboard before our video editors start animation and compositing."
      },
      {
        id: "t-6",
        question: "Is it included in a marketing package?",
        answer: "Book trailers are available as standalone deliverables and are also bundled into our premier publishing and launch marketing suites."
      }
    ]
  },
  {
    category: "Book Cover Design",
    items: [
      {
        id: "bcd-1",
        question: "How long does the cover design process take?",
        answer: "First concept drafts are delivered within 3 to 5 business days. Once you provide feedback, revisions and final distribution packaging take 2 to 3 days."
      },
      {
        id: "bcd-2",
        question: "Do I own the rights to the final design?",
        answer: "Yes. You hold 100% exclusive commercial rights to the final cover design, illustrations, and source typography."
      },
      {
        id: "bcd-3",
        question: "Can I request multiple revision rounds?",
        answer: "Yes. We offer multiple iterative revision rounds to guarantee you are completely thrilled with the final front, back, and spine design."
      },
      {
        id: "bcd-4",
        question: "Will the cover be accepted by Amazon and other platforms?",
        answer: "Guaranteed. Every cover is formatted to precise platform dimensions, DPI tolerances, bleed allowances, and barcode placements required by major self-publishing platforms."
      }
    ]
  },
  {
    category: "Book Coaching Services",
    items: [
      {
        id: "bcs-1",
        question: "Do I need a finished draft to start book coaching?",
        answer: "Not at all! Book coaching is designed for authors at any stage—from having an initial seed of an idea to outlining chapters or pushing through a halfway-finished manuscript."
      },
      {
        id: "bcs-2",
        question: "How is coaching different from ghostwriting?",
        answer: "With ghostwriting, we write the book on your behalf. In coaching, an expert author and developmental editor mentors, guides, and reviews your work, empowering you to write your own masterpiece."
      },
      {
        id: "bcs-3",
        question: "What if I get stuck or need extra support mid-way?",
        answer: "Your dedicated coach is available for 1-on-1 calls, developmental milestone feedback, and personalized writing exercises to bust through writer's block."
      },
      {
        id: "bcs-4",
        question: "How long does a coaching engagement last?",
        answer: "Coaching packages typically span 3 to 6 months, offering weekly or bi-weekly check-ins and structured manuscript progress milestones."
      }
    ]
  },
  {
    category: "ISBN Services",
    items: [
      {
        id: "isbn-1",
        question: "How long does it take for my book to appear on all platforms?",
        answer: "Digital editions usually go live within 24 to 48 hours of submission. Print editions generally populate retailer databases within 3 to 7 business days."
      },
      {
        id: "isbn-2",
        question: "Can I use my existing ISBNs with your distribution service?",
        answer: "Yes. If you have purchased your own ISBNs from Bowker or your national agency, we can register and publish your book under your own ISBN credentials."
      },
      {
        id: "isbn-3",
        question: "What's the difference between direct distribution and aggregators?",
        answer: "Direct distribution publishes directly to major storefronts like Amazon KDP and Barnes & Noble. Aggregators like IngramSpark deliver your book to thousands of independent bookstores and libraries globally."
      },
      {
        id: "isbn-4",
        question: "Will my book be available in physical bookstores?",
        answer: "Yes! Through our global distribution partnerships, brick-and-mortar bookstores, universities, and municipal libraries worldwide will be able to order your book into their physical inventory."
      }
    ]
  }
];

export default function FaqPageAccordions() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredCategories = faqData.map(cat => {
    if (!searchQuery.trim()) return cat;
    const query = searchQuery.toLowerCase();
    const matchingItems = cat.items.filter(
      item => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query)
    );
    return {
      ...cat,
      items: matchingItems
    };
  }).filter(cat => cat.items.length > 0);

  return (
    <div className="w-full max-w-[1100px] mx-auto space-y-12 sm:space-y-14 font-montserrat">
      {/* Search Bar for Quick Navigation */}
      <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search any question or keyword..."
          className="w-full bg-[#ECEAF5]/80 hover:bg-[#ECEAF5] focus:bg-white text-[#2B1B4D] placeholder-[#665B7D] font-medium text-sm sm:text-base px-5 py-3.5 pl-12 rounded-full border border-purple-200/60 focus:outline-none focus:ring-2 focus:ring-[#3D2E61] transition-all shadow-sm"
        />
        <Search className="w-5 h-5 text-[#665B7D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-purple-700 bg-purple-200/60 px-2 py-0.5 rounded-full hover:bg-purple-200"
          >
            Clear
          </button>
        )}
      </div>

      {filteredCategories.length === 0 ? (
        <div className="text-center py-12 space-y-2">
          <p className="text-slate-700 font-semibold text-lg">No matching questions found.</p>
          <p className="text-slate-500 text-sm">Try searching with a different keyword or browse categories below.</p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-3 px-4 py-2 bg-[#3D2E61] text-white text-xs font-semibold rounded-lg hover:bg-[#4d3a7a] transition-colors"
          >
            Show All Questions
          </button>
        </div>
      ) : (
        filteredCategories.map((cat) => (
          <div key={cat.category} className="space-y-3.5">
            {/* Category Title matching Figma Screenshot */}
            <h3 className="font-nunito font-extrabold text-2xl sm:text-[26px] text-[#2B1B4D] tracking-tight">
              {cat.category}
            </h3>

            {/* List of Pill Items */}
            <div className="space-y-2 sm:space-y-2.5">
              {cat.items.map((item) => {
                const isOpen = !!openItems[item.id];
                return (
                  <div
                    key={item.id}
                    className="w-full rounded-[14px] bg-[#ECEAF5] hover:bg-[#E4E0EE] transition-all duration-200 overflow-hidden shadow-xs border border-purple-100/50"
                  >
                    {/* Clickable Header */}
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-medium text-[#2B1B4D] text-[14px] sm:text-[15.5px] leading-snug">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#2B1B4D] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Expandable Answer */}
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-4 pt-1 text-slate-700 text-xs sm:text-[14px] leading-relaxed border-t border-purple-200/50">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
