// servicesData.ts - Complete tailored data for all 9 publishing service pages

export interface ServiceData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    serviceTag: string;
    bgImg?: string;
    showForm?: boolean;
  };
  showcase: {
    headline: [string, string, string];
    description: string;
    btnText: string;
    collageImg: string;
  };
  manuscript: {
    title: string;
    subtitle: string;
    cards: Array<{ num: string; title: string; desc: string }>;
  };
  purpleBanner: {
    headline: string;
    subheading: string;
    p1: string;
    p2: string;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{ step: string; phase: string; title: string; desc: string }>;
  };
  difference: {
    badge: string;
    title: string;
    subtitle: string;
    cards: Array<{ num: string; title: string; desc: string; bullets: string[]; quote?: string }>;
  };
  whyChoose: {
    title: string;
    points: Array<{ title: string; desc: string }>;
    btnText: string;
    authorImg: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  // 1. Book Publishing Services
  "book-publishing": {
    slug: "book-publishing",
    name: "Book Publishing Services",
    metaTitle: "Book Publishing Services | Fleck Publisher",
    metaDescription: "Professional book publishing services for aspiring authors. From manuscript formatting to worldwide distribution.",
    hero: {
      badge: "PROFESSIONAL BOOK PUBLISHING",
      title: "Self Publishing Services",
      titleHighlight: "for Aspiring Authors",
      subtitle: "Turn your ideas into a commercially viable, beautifully printed book. We provide end-to-end publishing, cover design, and distribution across 40,000+ retailers.",
      serviceTag: "Book Publishing"
    },
    showcase: {
      headline: [
        "Publish Beautiful Books That",
        "Captivate Readers and",
        "Reach Readers 3X Faster"
      ],
      description: "From concept development and ghostwriting to award-winning cover design and strategic worldwide distribution, Fleck Publisher ensures your manuscript stands out on global bookstore shelves and digital readers alike.",
      btnText: "Get Started",
      collageImg: "/services/books-1.png"
    },
    manuscript: {
      title: "Submit Your Manuscript",
      subtitle: "Share your manuscript, and we'll handle the rest. The journey to becoming a published author begins here!",
      cards: [
        {
          num: "01",
          title: "Self-Publishing Help",
          desc: "We guide you through the entire self-publishing process—from setup to distribution—so your book meets platform requirements and goes live without technical blockers."
        },
        {
          num: "02",
          title: "Publish eBook on Amazon",
          desc: "We prepare and upload your book to Amazon KDP with full compliance. From formatting and cover specs to categories and pricing—we handle it so your ebook is available immediately."
        },
        {
          num: "03",
          title: "eBook Distribution",
          desc: "We distribute your ebook across platforms like Apple Books, Kobo, Google Books and Spotify (if it's an audio book) and website if you choose to go web-way! Centralized global publishing flow."
        },
        {
          num: "04",
          title: "ISBN Registration & Copyright",
          desc: "We register your ISBN, guide you on copyright, and set your book up to be tracked, cited, and sold globally—with zero legal gaps."
        },
        {
          num: "05",
          title: "Metadata & Category Setup",
          desc: "We research the categories readers actually browse, implement high-visibility metadata, keywords, category structures and position your book to show up there. This is SMM for books."
        },
        {
          num: "06",
          title: "Retail-Ready File Upload",
          desc: "We export files in the right formats—EPUB, PDF, MOBI, reflowable, fixed, platform-specific. Everything uploads smoothly, opens cleanly, and passes approval in the first go."
        }
      ]
    },
    purpleBanner: {
      headline: "Inside Fleck’s Publishing Department",
      subheading: "We publish books because it’s our day job.",
      p1: "To serve our comprehensive book publishing services, we have a strong team comprising ISBN registration staff, publishing ops specialists, metadata pros, formatting specialists, and QA reviewers who make sure your files launch flawlessly.",
      p2: "Every book at Fleck Publisher goes through a structured workflow: platform targeting, category strategy, file testing, metadata mapping, and final uploads across self-publishing and book distribution platforms. In short, our book publishing services go beyond pressing ‘upload’ — it’s launching with intent."
    },
    process: {
      badge: "THE AUTHOR'S JOURNEY",
      title: "Fleck Publisher’s 4-Step Book Publishing Process",
      subtitle: "Every book publishing journey at Fleck Publisher starts with a 1:1 discovery session - and concludes with your book landing on the right platforms. Here’s an insider look at our process.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Project Intake & Publishing Goals",
          desc: "We begin with a strategy session to clarify your publishing plan—platforms, formats, pricing, and launch timing. You set the direction. We map the path."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Metadata, Categories & ISBN Setup",
          desc: "We register your ISBN, write your metadata, and position your book with categories that improve visibility across Amazon, Apple Books, and other major retailers."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Format Prep & Upload",
          desc: "We export and validate your files—EPUB, PDF, MOBI—based on platform specs. Everything uploads cleanly, with zero errors or delays."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Final Review & Go-Live Checklist",
          desc: "One of the most prominent steps of our ebook publishing service where we verify links, pricing, formatting, and metadata. Then we push your book live, market-ready."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Our publishing work focuses on accuracy, discoverability and technical setup across every major platform.",
      cards: [
        {
          num: "01",
          title: "Distribution that covers more ground",
          desc: "We place your ebook on relevant platforms you approve of, from where it reaches global markets.",
          bullets: ["No duplicate uploads", "No format errors", "No regional blind spots"]
        },
        {
          num: "02",
          title: "Files that pass inspection the first time",
          desc: "We format for reflowable and fixed layouts, with full platform compliance. And we publish once cleanly.",
          bullets: ["Kindle, EPUB, PDF all tested", "Metadata and ISBNs done right", "Uploads that clear in one go"]
        },
        {
          num: "03",
          title: "Metadata with strategic weight",
          desc: "We optimize your keywords, categories, and author listings.",
          bullets: ["Your book lands on the right shelf", "Search visibility increases", "Pure book SMM, not guesswork"]
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher’s eBook Publishing Services",
      points: [
        {
          title: "You get fast, error-free publishing.",
          desc: "We format, validate, and upload your files to ensure a frictionless publishing journey so your book goes live without the guesswork."
        },
        {
          title: "You stay in control of everything.",
          desc: "We set up your publishing accounts. You own the dashboard, the royalties, the rights, and the reader data start to finish."
        },
        {
          title: "You publish everywhere, without repeating the work.",
          desc: "We distribute your ebook across Amazon, Apple Books, Google Books, and more—from one master file, managed by one team."
        },
        {
          title: "You launch with strategy.",
          desc: "We optimize metadata, categories, and pricing to help your book get discovered, ranked, and bought, not buried, on the wrong shelf."
        }
      ],
      btnText: "Start Your Book",
      authorImg: "/services/person-1.png"
    }
  },

  // 2. Self-Publishing
  "self-publishing": {
    slug: "self-publishing",
    name: "Self-Publishing",
    metaTitle: "Self-Publishing Services | Fleck Publisher",
    metaDescription: "Retain 100% royalties and master rights with our white-glove self-publishing services. Total creative and financial freedom.",
    hero: {
      badge: "AUTHOR EMPOWERMENT",
      title: "Complete Self-Publishing",
      titleHighlight: "on Your Own Terms",
      subtitle: "Bypass traditional gatekeepers. Keep 100% of your rights and royalties while producing a retail-grade book that competes with Big-5 bestsellers.",
      serviceTag: "Self-Publishing",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_34_38 AM 1.png"
    },
    showcase: {
      headline: [
        "Take Total Control of Your",
        "Publishing Journey and",
        "Keep 100% of Your Royalties"
      ],
      description: "Self-publishing with Fleck Publisher combines the creative liberty of indie publishing with the elite polish of a legacy press. We handle technical setup, interior layout, cover design, and distribution while you keep full ownership.",
      btnText: "Start Self-Publishing",
      collageImg: "/services/books-2.png"
    },
    manuscript: {
      title: "Your Blueprint to Self-Publishing",
      subtitle: "Everything you need to successfully launch and sell your book independently across global marketplaces.",
      cards: [
        {
          num: "01",
          title: "Full Rights Retention",
          desc: "You keep all copyright, print rights, audiobook options, and international translation licenses with zero lock-in contracts."
        },
        {
          num: "02",
          title: "Direct Account Setup",
          desc: "We build your publisher accounts on Amazon KDP, IngramSpark, and Apple Books so all royalties flow straight into your bank account."
        },
        {
          num: "03",
          title: "Print-on-Demand Setup",
          desc: "Zero inventory overhead. Your paperback and hardcover books print on demand and ship worldwide whenever a reader orders."
        },
        {
          num: "04",
          title: "Custom Pricing Strategy",
          desc: "Maximize profit margins by setting custom retail prices, international currency conversions, and promotional discount windows."
        },
        {
          num: "05",
          title: "Professional Formatting",
          desc: "Industry-standard typesetting for print books and responsive ePub files that look flawless on all e-readers and smartphones."
        },
        {
          num: "06",
          title: "Launch & Sales Tracking",
          desc: "Real-time access to sales dashboards, print-cost calculators, and reader analytics across all retail storefronts."
        }
      ]
    },
    purpleBanner: {
      headline: "The Indie Author Revolution",
      subheading: "Smart authors don't surrender their royalties. They self-publish.",
      p1: "Independent authors are earning more royalties than ever before by taking direct charge of their intellectual property. Our self-publishing team provides the technical infrastructure and industry connections needed to compete at the highest commercial level.",
      p2: "From legal registrations and ISBN cataloging to global distribution channels, Fleck Publisher eliminates every technical barrier so you can focus on writing and connecting with readers."
    },
    process: {
      badge: "THE INDIE PATHWAY",
      title: "Our 4-Step Self-Publishing Pathway",
      subtitle: "A proven, transparent step-by-step methodology to turn your completed manuscript into an internationally distributed title.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Manuscript Audit & Strategy",
          desc: "We analyze your book's target readership, genre conventions, and market comp titles to establish the optimal self-publishing roadmap."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Production & File Prep",
          desc: "Professional interior formatting, cover file optimization, and retail-readiness checks ensure your files pass all automated distributor audits."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Author Account Integration",
          desc: "We set up and configure your direct retail accounts so you retain complete control over your royalties, dashboard, and customer data."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Worldwide Release & Go-Live",
          desc: "Your book goes live across global digital and print retail channels with synchronized publication dates and live buy links."
        }
      ]
    },
    difference: {
      badge: "WHY INDIE MATTERS",
      title: "The Self-Publishing Advantage",
      subtitle: "Why modern authors choose our direct self-publishing partnership over traditional alternatives.",
      cards: [
        {
          num: "01",
          title: "Uncompromising Creative Freedom",
          desc: "You have the final say on book cover design, interior typography, back-cover blurb, and pricing structure.",
          bullets: ["100% creative control", "No arbitrary deadline delays", "Keep all subsidiary rights"]
        },
        {
          num: "02",
          title: "Maximum Profit Margins",
          desc: "Receive up to 70% royalties directly from retailers instead of the 10-15% typical of traditional publishing contracts.",
          bullets: ["Direct royalty payouts", "Transparent account access", "Zero middleman fees"]
        },
        {
          num: "03",
          title: "Rapid Time-to-Market",
          desc: "Go from finished manuscript to published author in weeks rather than waiting 18 to 24 months through traditional literary agents.",
          bullets: ["Launch in 3-4 weeks", "Instant global distribution", "Real-time sales tracking"]
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck for Self-Publishing",
      points: [
        {
          title: "Full royalty ownership with zero commissions.",
          desc: "Every cent from book sales is paid directly into your own bank account by Amazon and retail channels."
        },
        {
          title: "Bestseller-grade production value.",
          desc: "Our cover designers and typographers bring legacy publishing quality to independent self-published titles."
        },
        {
          title: "Technical guidance without the headaches.",
          desc: "We handle complex DRM setups, barcode calibrations, and EPUB validation so your launch is smooth and error-free."
        },
        {
          title: "Ongoing sales and platform support.",
          desc: "We ensure your author central profiles and book landing pages are optimized for continuous conversions."
        }
      ],
      btnText: "Launch Your Book",
      authorImg: "/services/person-2.png"
    }
  },

  // 3. Amazon Publishing
  "amazon-publishing": {
    slug: "amazon-publishing",
    name: "Amazon Publishing",
    metaTitle: "Amazon Publishing & KDP Services | Fleck Publisher",
    metaDescription: "Dominate the Amazon marketplace with professional KDP formatting, Kindle Unlimited optimization, and keyword rankings.",
    hero: {
      badge: "AMAZON KDP SPECIALISTS",
      title: "Amazon Kindle Direct",
      titleHighlight: "Publishing Excellence",
      subtitle: "Maximize visibility on the world's largest bookstore. We handle Kindle formatting, paperback print setup, A+ content, and algorithmic bestseller positioning.",
      serviceTag: "Amazon Publishing",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_00_15 AM 1.png"
    },
    showcase: {
      headline: [
        "Dominate Amazon KDP and",
        "Reach Millions of Active",
        "Kindle Book Buyers Today"
      ],
      description: "With over 80% of digital book sales happening on Amazon, proper KDP optimization is essential. Fleck Publisher crafts search-optimized Kindle listings, responsive reflowable interior files, and high-converting cover wraps.",
      btnText: "Publish on Amazon",
      collageImg: "/services/books-3.png"
    },
    manuscript: {
      title: "Complete Amazon KDP Setup",
      subtitle: "Tailored services engineered to maximize your visibility and sales velocity on the Kindle ecosystem.",
      cards: [
        {
          num: "01",
          title: "Kindle Reflowable EPUB",
          desc: "Pixel-perfect formatting ensuring seamless font scaling, fluid page turns, and clickable tables of contents across all Kindle devices."
        },
        {
          num: "02",
          title: "KDP Print Paperback & Hardcover",
          desc: "Precise spine-width calculations, bleed margins, and barcode placement tailored for high-quality Amazon Print-on-Demand."
        },
        {
          num: "03",
          title: "Kindle Unlimited Optimization",
          desc: "Strategic enrollment in KDP Select to unlock page-read royalties, Kindle Countdown Deals, and Free Book Promotion windows."
        },
        {
          num: "04",
          title: "Amazon A+ Enhanced Content",
          desc: "Custom visual graphic modules on your book's product page that boost reader trust and increase conversion rates by up to 25%."
        },
        {
          num: "05",
          title: "Category & Keyword Ranking",
          desc: "In-depth competitor analysis to identify low-competition, high-demand BISAC and Amazon browse categories for instant bestseller badges."
        },
        {
          num: "06",
          title: "Author Central Page Setup",
          desc: "A verified Amazon Author Central biography, bibliography, headshot, and blog feed linking all your published titles."
        }
      ]
    },
    purpleBanner: {
      headline: "Mastering the Amazon Algorithm",
      subheading: "Your book deserves to be ranked #1 in its category.",
      p1: "Amazon is not just a digital retailer—it is the world's most powerful book search engine. If your metadata, backend search terms, and pricing thresholds aren't configured precisely, your book remains invisible to prospective readers.",
      p2: "Our Amazon publishing experts reverse-engineer reader search behaviors to position your title in front of targeted audiences who are actively searching for your genre and topics."
    },
    process: {
      badge: "KDP BLUEPRINT",
      title: "Our Amazon Publishing Strategy",
      subtitle: "How we guide your book through Amazon's stringent review system straight to bestseller status.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Keyword & Category Mining",
          desc: "We research 7 high-intent backend keyword phrases and pinpoint 10 niche browse paths where your book can achieve top rankings."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "KDP Compliant Formatting",
          desc: "Conversion of your raw manuscript into strict Amazon-standard KPF and print-ready PDF files with automated pre-flight testing."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Listing Setup & Pricing",
          desc: "Creation of optimized title tags, subtitle hooks, HTML-formatted book descriptions, and strategic international price brackets."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Pre-Order & Launch Verification",
          desc: "Live testing of Look Inside previews, paperback proofs, and coordinated pre-order windows to trigger algorithmic recommendation waves."
        }
      ]
    },
    difference: {
      badge: "THE AMAZON EDGE",
      title: "Why Our Amazon Setup Wins",
      subtitle: "Engineered for discoverability, readability, and long-term passive royalty generation.",
      cards: [
        {
          num: "01",
          title: "Higher Conversion Rates",
          desc: "Compelling book blurbs, professional A+ content, and irresistible cover wraps turn casual store browsers into paying readers.",
          bullets: ["A+ Content included", "Compelling HTML sales copy", "Optimized Look Inside preview"]
        },
        {
          num: "02",
          title: "Zero Account Lockouts",
          desc: "100% adherence to Amazon KDP terms of service, preventing account bans or rejected file notifications.",
          bullets: ["Pre-flight compliance checks", "Verified legal copyright", "Instant automated approvals"]
        },
        {
          num: "03",
          title: "Global Marketplace Coverage",
          desc: "Your book is instantly available across 13 international Amazon marketplaces with localized currency pricing.",
          bullets: ["US, UK, CA, AU, EU stores", "Global print-on-demand", "Kindle Unlimited reach"]
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck for Amazon KDP",
      points: [
        {
          title: "Deep algorithmic optimization.",
          desc: "We align your metadata with Amazon's A10 search algorithm to ensure recurring organic search discovery."
        },
        {
          title: "Full paperback and hardcover production.",
          desc: "Flawless physical copies printed and shipped directly by Amazon with zero inventory investment."
        },
        {
          title: "Full royalty ownership.",
          desc: "You receive your full 70% digital royalties and 60% print royalties deposited directly into your bank."
        },
        {
          title: "Guaranteed approval on first upload.",
          desc: "Our files pass Amazon's automated file inspection without delays, margin errors, or font embedding issues."
        }
      ],
      btnText: "Publish on Amazon",
      authorImg: "/services/person-3.png"
    }
  },

  // 4. EBook Distribution
  "ebook-distribution": {
    slug: "ebook-distribution",
    name: "EBook Distribution",
    metaTitle: "Global eBook Distribution Services | Fleck Publisher",
    metaDescription: "Expand your readership worldwide. Distribute your ebook across Apple Books, Kobo, Google Play, Barnes & Noble, and international libraries.",
    hero: {
      badge: "EXPAND YOUR REACH",
      title: "Worldwide eBook",
      titleHighlight: "Distribution Network",
      subtitle: "Do not limit your book to one storefront. We distribute your digital and audio titles across 50+ global retail channels and 40,000+ public library systems.",
      serviceTag: "EBook Distribution",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_05_29 AM 1.png"
    },
    showcase: {
      headline: [
        "One Master Upload Delivers",
        "Your Story to 50+ Global",
        "Digital Book Retailers"
      ],
      description: "Reach readers who prefer reading on iPads, Kobo e-readers, Android tablets, or borrow through local public libraries. Our unified distribution system eliminates repetitive manual uploads while maximizing international royalties.",
      btnText: "Distribute Worldwide",
      collageImg: "/services/books-4.png"
    },
    manuscript: {
      title: "Global Distribution Ecosystem",
      subtitle: "Connect your book to readers worldwide through our trusted aggregator and retail network.",
      cards: [
        {
          num: "01",
          title: "Apple Books Worldwide",
          desc: "Direct placement in the Apple Books store across 51 countries, optimized for the high-spending iOS reader demographic."
        },
        {
          num: "02",
          title: "Kobo & Rakuten Network",
          desc: "Reach millions of dedicated avid fiction and non-fiction readers across Canada, Europe, Japan, and Australia."
        },
        {
          num: "03",
          title: "Barnes & Noble NOOK",
          desc: "Catalog inclusion in Barnes & Noble's digital NOOK library and online bookstore nationwide."
        },
        {
          num: "04",
          title: "Google Play Store",
          desc: "Instant access to billions of active Android mobile users across the globe through Google's premier content hub."
        },
        {
          num: "05",
          title: "OverDrive & Library Systems",
          desc: "Enable public, academic, and municipal libraries to license and stock digital copies of your book through OverDrive and Libby."
        },
        {
          num: "06",
          title: "Centralized Royalty Tracking",
          desc: "Monitor all sales, downloads, and international territory revenues through one comprehensive, unified reporting console."
        }
      ]
    },
    purpleBanner: {
      headline: "The Multi-Platform Imperative",
      subheading: "Never put all your publishing eggs into one single retailer basket.",
      p1: "While Amazon is massive, tens of millions of avid readers exclusively purchase books through Apple Books, Kobo, and their local neighborhood libraries. Restricting your book to a single platform leaves massive revenue on the table.",
      p2: "Fleck Publisher's wide distribution architecture provides seamless, automated catalog syndication with zero metadata conflicts and synchronized worldwide launch dates."
    },
    process: {
      badge: "DISTRIBUTION FLOW",
      title: "Our 4-Step Global Distribution Process",
      subtitle: "How our centralized distribution pipeline takes your book from master file to worldwide bookstore availability.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Universal EPUB Mastering",
          desc: "We generate universal, DRM-clean EPUB3 files validated to meet the strict technical standards of Apple, Kobo, and Google."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Territory & Pricing Mapping",
          desc: "We calibrate international retail pricing in USD, GBP, EUR, CAD, AUD, and 20+ currencies for optimal regional competitiveness."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Multi-Channel Ingestion",
          desc: "Synchronized digital delivery to major commercial retailers and leading digital library wholesalers simultaneously."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Live Listing Verification",
          desc: "Quality inspection across all platform storefronts ensuring sample chapters, covers, and author bios appear flawlessly."
        }
      ]
    },
    difference: {
      badge: "THE GLOBAL REACH",
      title: "Why Wide Distribution Wins",
      subtitle: "Unmatched international exposure, diversified revenue streams, and protection against single-platform changes.",
      cards: [
        {
          num: "01",
          title: "50+ Retail Stores & Libraries",
          desc: "Your book is available anywhere readers look—from independent bookstores to premier municipal digital collections.",
          bullets: ["Apple, Kobo, Google Play", "OverDrive, Libby & Baker & Taylor", "Worldwide library catalogs"]
        },
        {
          num: "02",
          title: "Diversified Income Streams",
          desc: "Protect your royalties from platform algorithm shifts by earning consistent income across multiple storefronts.",
          bullets: ["Multiple revenue channels", "Independent sales stability", "Higher international royalties"]
        },
        {
          num: "03",
          title: "No Exclusivity Penalties",
          desc: "Retain 100% freedom to sell direct on your personal author website while maintaining full commercial distribution.",
          bullets: ["Sell directly to fans", "Zero DRM lock-in", "Complete distribution autonomy"]
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck for eBook Distribution",
      points: [
        {
          title: "One-click global reach.",
          desc: "Upload once and let our pipeline deliver your book to dozens of platforms without technical friction."
        },
        {
          title: "Automatic file formatting compliance.",
          desc: "Every platform receives files formatted specifically to pass their exact validation requirements."
        },
        {
          title: "Direct author royalty collection.",
          desc: "You retain all rights and receive earnings without punitive middleman deductions."
        },
        {
          title: "Strategic pricing per geography.",
          desc: "We set competitive prices matched to purchasing power in key international book markets."
        }
      ],
      btnText: "Distribute Everywhere",
      authorImg: "/services/person-4.png"
    }
  },

  // 5. ISBN Registration
  "isbn-registration": {
    slug: "isbn-registration",
    name: "ISBN Registration",
    metaTitle: "Official ISBN Registration & Barcode Services | Fleck Publisher",
    metaDescription: "Protect your intellectual property. Get official Bowker ISBN registration, EAN barcodes, and global library cataloging.",
    hero: {
      badge: "OFFICIAL IDENTIFIERS",
      title: "Official ISBN Registration",
      titleHighlight: "& Copyright Protection",
      subtitle: "Legitimize your title for global retail commerce. We provide official Bowker ISBN assignment, retail barcode generation, and legal copyright registration.",
      serviceTag: "ISBN Registration",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_14_38 AM 1.png"
    },
    showcase: {
      headline: [
        "Establish Your Legal Ownership",
        "and Enable Global Book Tracking",
        "with Official Registered ISBNs"
      ],
      description: "An ISBN (International Standard Book Number) is the universal fingerprint of your book. Free retailer-provided ISBNs often designate the retailer as your publisher. Fleck Publisher ensures you are registered as the sole, official copyright owner.",
      btnText: "Register Your ISBN",
      collageImg: "/services/books-5.png"
    },
    manuscript: {
      title: "Complete Book Registration Package",
      subtitle: "Protect your intellectual property and ensure your book can be ordered by any bookstore in the world.",
      cards: [
        {
          num: "01",
          title: "Official 13-Digit ISBN",
          desc: "Dedicated Bowker-issued ISBNs registered under your legal publishing imprint for eBook, paperback, and hardcover editions."
        },
        {
          num: "02",
          title: "High-Resolution EAN Barcode",
          desc: "Crisp vector and 300 DPI EPS barcodes with human-readable ISBN text and embedded retail price add-on codes."
        },
        {
          num: "03",
          title: "U.S. Copyright Registration",
          desc: "Complete documentation filed with the U.S. Copyright Office to secure legal public record of your author ownership."
        },
        {
          num: "04",
          title: "Books In Print Database Entry",
          desc: "Listing in the global Bowker Books In Print database utilized by 40,000+ bookstores, wholesalers, and academic libraries."
        },
        {
          num: "05",
          title: "Library of Congress (PCN)",
          desc: "Preassigned Control Number (PCN) application enabling cataloging by the Library of Congress for U.S. published editions."
        },
        {
          num: "06",
          title: "Custom Publisher Imprint",
          desc: "Publish under your own custom publishing house imprint name rather than a generic vanity press label."
        }
      ]
    },
    purpleBanner: {
      headline: "The Truth About 'Free' ISBNs",
      subheading: "If you don't own your ISBN, you don't own your publishing imprint.",
      p1: "When self-publishing platforms offer a 'free' ISBN, they legally list themselves as your publisher of record. That means you cannot use that same ISBN on other retail platforms or sell to bookstores and libraries outside their closed ecosystem.",
      p2: "At Fleck Publisher, we register dedicated, universal ISBNs that belong exclusively to you. You maintain 100% legal ownership, complete portability, and full commercial prestige across every sales channel."
    },
    process: {
      badge: "LEGAL PROTECTION",
      title: "Our 4-Step ISBN & Protection Protocol",
      subtitle: "How we secure official identifiers and legal safeguards for your published book.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Title & Imprint Verification",
          desc: "We verify title records, subtitle consistency, author credit, and create your personalized legal publishing imprint."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Official ISBN Assignment",
          desc: "Assignment of distinct 13-digit ISBNs for each published format (eBook, Paperback, Hardcover, Audiobook)."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Vector Barcode Production",
          desc: "Precision vector barcode generation with optional price-point encoding formatted specifically for print cover wraps."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Global Catalog Syndication",
          desc: "Transmission of full metadata, contributors, and synopsis to Bowker Books In Print and global distributor registries."
        }
      ]
    },
    difference: {
      badge: "THE LEGAL EDGE",
      title: "Why Official Registration Matters",
      subtitle: "Clear title ownership, bookstore eligibility, and permanent legal standing for your creative work.",
      cards: [
        {
          num: "01",
          title: "Total Imprint Independence",
          desc: "You are the publisher of record. Move your book anywhere, anytime, without losing reviews or sales momentum.",
          bullets: ["Sole publisher designation", "Full title portability", "No vendor platform lock-in"]
        },
        {
          num: "02",
          title: "Brick-and-Mortar Store Eligibility",
          desc: "Physical bookstores and libraries will only stock books with legitimate, independent commercial ISBN identifiers.",
          bullets: ["Ingram wholesale eligible", "Barnes & Noble ordering", "Library catalog ready"]
        },
        {
          num: "03",
          title: "Ironclad Copyright Record",
          desc: "Formal copyright registration provides statutory legal protection and public evidence of ownership in legal disputes.",
          bullets: ["Official government record", "Statutory damages protection", "Global IP rights established"]
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck for ISBN Registration",
      points: [
        {
          title: "Genuine Bowker issued identifiers.",
          desc: "Never recycled or shared numbers. Official, authenticated ISBNs registered to your unique author imprint."
        },
        {
          title: "Print-ready barcodes with price extensions.",
          desc: "High-resolution barcodes that scan flawlessly at retail checkouts and fulfillment warehouses."
        },
        {
          title: "Seamless copyright administration.",
          desc: "We navigate official legal registries so your rights are permanently documented without paperwork headaches."
        },
        {
          title: "Books In Print database inclusion.",
          desc: "Your title becomes instantly discoverable to booksellers, acquisitions librarians, and distributors worldwide."
        }
      ],
      btnText: "Protect Your Book",
      authorImg: "/services/person-5.png"
    }
  },

  // 6. Metadata & Category Setup
  "metadata-category-setup": {
    slug: "metadata-category-setup",
    name: "Metadata & Category Setup",
    metaTitle: "Book Metadata & Amazon Category Setup | Fleck Publisher",
    metaDescription: "Supercharge your book discoverability. Advanced keyword research, BISAC mapping, and Amazon category placement.",
    hero: {
      badge: "SEARCH OPTIMIZATION",
      title: "Book Metadata & Strategic",
      titleHighlight: "Category Architecture",
      subtitle: "The secret behind #1 Bestseller badges. We deploy data-driven keyword research, BISAC codes, and algorithmic category mapping to drive continuous organic book sales.",
      serviceTag: "Metadata Setup",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_17_40 AM 1.png"
    },
    showcase: {
      headline: [
        "Turn Invisible Manuscripts",
        "into High-Ranking Bestsellers",
        "with Algorithmic Metadata"
      ],
      description: "Even the greatest novel will go unread if buried beneath 100,000 competing titles. Fleck Publisher's metadata engineers analyze buyer search intent, competitor category gaps, and algorithmic triggers to rank your book where active buyers browse.",
      btnText: "Optimize Metadata",
      collageImg: "/services/books-6.png"
    },
    manuscript: {
      title: "High-Impact Metadata Strategy",
      subtitle: "A comprehensive SEO and discoverability suite built specifically for book authors and commercial publishers.",
      cards: [
        {
          num: "01",
          title: "High-Intent Keyword Mining",
          desc: "Deep keyword analysis uncovering high-volume, low-competition search phrases that readers type into retailer search bars."
        },
        {
          num: "02",
          title: "10-Category KDP Mapping",
          desc: "Manual category unlocking beyond the standard 3 limits to display your title across 10 targeted Amazon sub-categories."
        },
        {
          num: "03",
          title: "BISAC & Thema Classification",
          desc: "Professional industry-standard subject codes ensuring correct shelving in physical bookstores and public library collections."
        },
        {
          num: "04",
          title: "HTML Blurb Engineering",
          desc: "Conversion-optimized sales copy formatted with eye-catching bolding, bullet points, and persuasive call-to-action hooks."
        },
        {
          num: "05",
          title: "Subtitle & Series SEO",
          desc: "Strategic subtitle formulation that incorporates high-ranking search terms without sounding spammy or unnatural."
        },
        {
          num: "06",
          title: "Continuous Ranking Audits",
          desc: "Post-launch performance tracking and metadata refreshes to maintain visibility during peak retail seasons."
        }
      ]
    },
    purpleBanner: {
      headline: "The Science of Book Discoverability",
      subheading: "Great books don't get found by accident. They are engineered for search.",
      p1: "Over 68% of book purchases originate from a direct search query on Amazon or Google. When you optimize your backend keyword fields with exact reader search syntax, retailer algorithms automatically place your book in 'Customers Also Bought' recommendation carousels.",
      p2: "We treat metadata as the foundational marketing engine for your book. Our research unlocks hidden niche categories where modest sales volume can trigger the coveted orange #1 Bestseller badge."
    },
    process: {
      badge: "DISCOVERABILITY PIPELINE",
      title: "Our 4-Step Metadata Engineering Process",
      subtitle: "How our data specialists structure your book's digital identity for maximum retail visibility.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Competitor & Market Extraction",
          desc: "We scrape category sales rankings, keyword volume, and reader reviews of top-ranking comp titles in your genre."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Backend Keyword Formulation",
          desc: "Crafting 7 unique 50-character search strings that capture reader intent, tropes, themes, and comparable authors."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Category Selection & Requests",
          desc: "Identifying optimal sub-categories with realistic bestseller sales thresholds and submitting formal placement requests."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Conversion Copy Formatting",
          desc: "Drafting and styling your book's product description with psychological copywriting triggers and clean HTML formatting."
        }
      ]
    },
    difference: {
      badge: "THE SEARCH ADVANTAGE",
      title: "Why Metadata Setup Matters",
      subtitle: "Transform passive catalog listings into active, customer-attracting sales engines.",
      cards: [
        {
          num: "01",
          title: "#1 Bestseller Badge Opportunities",
          desc: "Carefully chosen niche categories allow your book to reach #1 rankings with manageable launch sales velocity.",
          bullets: ["Niche category targeting", "Lower sales volume required", "Boosted algorithmic exposure"]
        },
        {
          num: "02",
          title: "Zero Ad-Spend Organic Traffic",
          desc: "Effective organic search optimization delivers recurring traffic and sales without expensive pay-per-click ad budgets.",
          bullets: ["Long-term passive discoverability", "High-intent buyer traffic", "Higher click-through rates"]
        },
        {
          num: "03",
          title: "Higher Conversion Ratios",
          desc: "Engaging book descriptions and clear series branding turn curious lookers into enthusiastic book buyers.",
          bullets: ["Formatted HTML descriptions", "Hook-driven opening copy", "Compelling call to action"]
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck for Metadata Setup",
      points: [
        {
          title: "Proprietary book SEO tools.",
          desc: "We leverage enterprise-grade book search software to uncover profitable keywords invisible to casual authors."
        },
        {
          title: "Full 10-category Amazon setup.",
          desc: "We manually request and verify category expansions through Amazon publisher support channels."
        },
        {
          title: "Persuasive sales copywriting.",
          desc: "Our copywriters turn dull synopses into cinematic back-cover blurbs that compel readers to click 'Buy Now'."
        },
        {
          title: "Long-term discoverability assurance.",
          desc: "We ensure your metadata remains durable, relevant, and fully compliant with changing platform guidelines."
        }
      ],
      btnText: "Boost Book Visibility",
      authorImg: "/services/person-6.png"
    }
  },

  // 7. Retail-Ready File Upload
  "retail-ready-file-upload": {
    slug: "retail-ready-file-upload",
    name: "Retail-Ready File Upload",
    metaTitle: "Retail-Ready File Formatting & Upload Services | Fleck Publisher",
    metaDescription: "Flawless EPUB, MOBI, and print-ready PDF interior formatting. Passes Amazon, Apple, and Ingram checks on first upload.",
    hero: {
      badge: "TECHNICAL PERFECTION",
      title: "Retail-Ready File Formatting",
      titleHighlight: "& Technical Uploads",
      subtitle: "Eliminate formatting rejections and ugly digital artifacts. We craft pixel-perfect, validated interior layouts for Kindle, EPUB3, and commercial print presses.",
      serviceTag: "File Formatting",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 02_55_03 AM 1.png"
    },
    showcase: {
      headline: [
        "Flawless Formatting That Passes",
        "Automated Retail Inspections",
        "on the Very First Upload"
      ],
      description: "Broken margins, missing fonts, overlapping images, and corrupted digital indexes will ruin reader reviews and trigger instant distributor rejections. Fleck Publisher produces clean, certified files that open smoothly on every device and print with surgical precision.",
      btnText: "Format Your Files",
      collageImg: "/services/books-7.png"
    },
    manuscript: {
      title: "Complete Technical File Preparation",
      subtitle: "Full-service interior layout design and multi-platform file validation for modern authors.",
      cards: [
        {
          num: "01",
          title: "Reflowable EPUB3 Architecture",
          desc: "Dynamically adapting eBook files that maintain graceful typography across iPhones, Androids, Kindle Paperwhites, and desktop apps."
        },
        {
          num: "02",
          title: "Fixed-Layout Formats",
          desc: "Custom page-by-page formatting engineered for children's illustrated picture books, graphic novels, recipe books, and workbooks."
        },
        {
          num: "03",
          title: "Print-Ready PDF Typesetting",
          desc: "300 DPI high-definition CMYK print files with embedded fonts, precise trim margins, headers, footers, and page numbers."
        },
        {
          num: "04",
          title: "Automated Pre-Flight Audits",
          desc: "Rigorous validation using IDPF ePubCheck and commercial press pre-flight software to eradicate all code and visual defects."
        },
        {
          num: "05",
          title: "Clickable Table of Contents",
          desc: "Interactive NCX and logical HTML tables of contents that satisfy Amazon's strict navigation guidelines for Kindle devices."
        },
        {
          num: "06",
          title: "Direct Platform Uploading",
          desc: "Our technical operations team handles the actual file upload, preview verification, and approval clearing on your behalf."
        }
      ]
    },
    purpleBanner: {
      headline: "The Standard of Interior Excellence",
      subheading: "A book that looks unprofessional on the inside will never be taken seriously.",
      p1: "Readers notice improper paragraph indentations, orphaned headings, inconsistent line heights, and blurry chapter header art. Poor formatting is the number one cause of 1-star reviews for self-published authors.",
      p2: "Our master typesetters combine classical book design principles with cutting-edge CSS/XML architecture to deliver an effortless, immersive reading experience across digital screens and luxury paper stocks alike."
    },
    process: {
      badge: "TYPESETTING PIPELINE",
      title: "Our 4-Step Technical Formatting Process",
      subtitle: "How we transform raw Word documents into retail-ready commercial publishing files.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Manuscript Sanitization",
          desc: "Stripping hidden Word formatting bugs, extra paragraph breaks, double spaces, and character encoding errors."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Typography & Layout Styling",
          desc: "Custom font selection, drop caps, scene break ornaments, running headers, and elegant front/back matter design."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Multi-Format Export & Testing",
          desc: "Compiling validated EPUB, KPF, and PDF builds tested across real Kindle, iPad, Kobo, and desktop reading hardware."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Final Approval & Retail Upload",
          desc: "Uploading directly into your publisher accounts, clearing previewer inspections, and delivering master source archive files."
        }
      ]
    },
    difference: {
      badge: "THE QUALITY STANDARD",
      title: "Why Our Formatting Stands Apart",
      subtitle: "Clean code, beautiful typography, and zero distributor friction guaranteed.",
      cards: [
        {
          num: "01",
          title: "100% Distributor Approval Guarantee",
          desc: "If any retailer flags a technical issue with our files, we fix and recertify it within 24 hours at zero extra charge.",
          bullets: ["Passes IDPF ePubCheck", "Zero Amazon margin errors", "IngramSpark certified"]
        },
        {
          num: "02",
          title: "Custom Interior Styling",
          desc: "Bespoke chapter title designs, decorative break flourishes, and customized typography matched to your book's genre.",
          bullets: ["Genre-matched fonts", "Custom scene break art", "Professional front & back matter"]
        },
        {
          num: "03",
          title: "Multi-Device Visual Integrity",
          desc: "Tested on physical devices to guarantee that tables, images, and blockquotes render properly in dark and light modes.",
          bullets: ["Dark mode compatible", "Responsive image scaling", "Seamless text resizing"]
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck for File Formatting",
      points: [
        {
          title: "Certified error-free file exports.",
          desc: "We test every file against strict industry-standard validators before delivering to distribution channels."
        },
        {
          title: "Print and digital mastery under one roof.",
          desc: "Receive both reflowable digital eBook files and commercial print-ready PDFs formatted in perfect harmony."
        },
        {
          title: "Zero technical confusion.",
          desc: "We handle the entire upload procedure so you never have to wrestle with distributor portal errors."
        },
        {
          title: "Full archive deliverables.",
          desc: "You receive all master source files, PDFs, and EPUBs to keep permanently in your personal archives."
        }
      ],
      btnText: "Format Your Book",
      authorImg: "/services/person-7.png"
    }
  },

  // 8. Book Coaching Services
  "book-coaching": {
    slug: "book-coaching",
    name: "Book Coaching Services",
    metaTitle: "Professional Book Coaching Services | Fleck Publisher",
    metaDescription: "Transform your book idea into a finished manuscript. 1-on-1 book coaching, developmental structure, and accountability.",
    hero: {
      badge: "1-ON-1 GUIDANCE",
      title: "Professional Book Coaching",
      titleHighlight: "From Concept to Finish",
      subtitle: "Overcome writer's block and finish your dream book. Work directly with seasoned publishing coaches who provide developmental structure, weekly feedback, and accountability.",
      serviceTag: "Book Coaching",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_39_07 AM 1.png"
    },
    showcase: {
      headline: [
        "Turn That Blank Page into a",
        "Completed, Compelling Book",
        "with 1-on-1 Book Coaching"
      ],
      description: "Writing a book alone can feel overwhelming. Many authors abandon manuscripts half-finished due to structural confusion or self-doubt. Our certified book coaches provide the editorial guidance, structural frameworks, and weekly momentum you need to write your best work.",
      btnText: "Meet Your Coach",
      collageImg: "/services/books-8.png"
    },
    manuscript: {
      title: "Our Book Coaching Program",
      subtitle: "Comprehensive creative mentorship tailored to fiction, non-fiction, memoir, and business authors.",
      cards: [
        {
          num: "01",
          title: "Concept & Hook Development",
          desc: "Crystallize your core premise, unique value proposition, target reader persona, and market positioning before writing."
        },
        {
          num: "02",
          title: "Architectural Outlining",
          desc: "Build a robust chapter-by-chapter roadmap that eliminates plot holes, pacing slumps, and non-fiction organizational tangles."
        },
        {
          num: "03",
          title: "Weekly Chapter Critiques",
          desc: "Submit your weekly word count for detailed developmental feedback on voice, narrative arc, pacing, and clarity."
        },
        {
          num: "04",
          title: "1-on-1 Strategic Coaching Calls",
          desc: "Direct bi-weekly video sessions to brainstorm scenes, refine ideas, and solve creative roadblocks in real time."
        },
        {
          num: "05",
          title: "Writing Accountability Systems",
          desc: "Personalized milestone calendars and progress tracking that keep you focused, energized, and writing consistently."
        },
        {
          num: "06",
          title: "Publishing Readiness Review",
          desc: "Comprehensive evaluation of your completed draft to prepare it for copyediting, proofreading, and retail publication."
        }
      ]
    },
    purpleBanner: {
      headline: "The Power of Mentorship",
      subheading: "Every great author had a great editor in their corner.",
      p1: "Writing is often romanticized as a solitary endeavor, but nearly every bestselling author relies on an experienced editorial partner to challenge their assumptions, sharpen their prose, and maintain narrative tension.",
      p2: "Our book coaches don't just hold you accountable—they elevate your storytelling. We help you extract your authentic voice and structure your insights so readers can't put the book down."
    },
    process: {
      badge: "COACHING BLUEPRINT",
      title: "Our 4-Step Coaching Journey",
      subtitle: "How our structured coaching protocol guides you from concept to a polished final manuscript.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Discovery & Blueprinting",
          desc: "We unpack your vision, target readership, core themes, and construct an actionable chapter-by-chapter outline."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Weekly Drafting Cycles",
          desc: "You draft chapters on a disciplined schedule, receiving detailed line-level comments and encouragement each week."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Midpoint Narrative Audit",
          desc: "We pause at the 50% mark to evaluate pacing, structure, and character/argument arcs, recalibrating where needed."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Final Revision & Polish",
          desc: "Complete manuscript read-through, thematic tightening, and preparation for professional editing and publication."
        }
      ]
    },
    difference: {
      badge: "THE COACHING ADVANTAGE",
      title: "Why Book Coaching Works",
      subtitle: "Transform self-doubt into creative clarity, consistent output, and finished manuscripts.",
      cards: [
        {
          num: "01",
          title: "Overcome Writer's Block Forever",
          desc: "Never stare at a blank cursor again. You'll always know exactly what scene, chapter, or argument comes next.",
          bullets: ["Clear chapter blueprints", "Real-time brainstorming", "Eliminate creative doubt"]
        },
        {
          num: "02",
          title: "Guaranteed Manuscript Completion",
          desc: "Our authors finish their manuscripts 4x faster than those attempting the process alone.",
          bullets: ["Weekly accountability", "Strict milestone deadlines", "Dedicated mentor check-ins"]
        },
        {
          num: "03",
          title: "Commercial-Grade Quality",
          desc: "Write with commercial viability in mind from day one, avoiding costly developmental rewrites after the fact.",
          bullets: ["Genre market benchmarks", "Strong narrative pacing", "Publisher-ready drafts"]
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck for Book Coaching",
      points: [
        {
          title: "Veteran publishing editors as coaches.",
          desc: "Work with industry professionals who have edited national bestsellers, not generic life coaches."
        },
        {
          title: "Customized to your writing style.",
          desc: "Whether you are a meticulous plotter or an organic pantser, we tailor the framework to your strengths."
        },
        {
          title: "Actionable, constructive feedback.",
          desc: "We don't just point out weaknesses—we provide specific creative solutions and examples to elevate your prose."
        },
        {
          title: "Seamless bridge to publishing.",
          desc: "Once your manuscript is complete, our production team immediately transitions your book into design and launch."
        }
      ],
      btnText: "Start Book Coaching",
      authorImg: "/services/person-8.png"
    }
  },

  // 9. Author Coaching
  "author-coaching": {
    slug: "author-coaching",
    name: "Author Coaching",
    metaTitle: "Author Brand & Career Coaching | Fleck Publisher",
    metaDescription: "Build a lasting author career. Brand strategy, media presence, speaking engagements, and audience building for published authors.",
    hero: {
      badge: "AUTHOR CAREER STRATEGY",
      title: "Strategic Author Coaching",
      titleHighlight: "& Brand Architecture",
      subtitle: "Writing the book is just step one. We help you build a profitable author platform, cultivate an engaged email audience, and turn your published book into a thriving career.",
      serviceTag: "Author Coaching",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_25_21 AM 1.png"
    },
    showcase: {
      headline: [
        "Transform from an Author into a",
        "Recognized Industry Authority",
        "with Proven Brand Strategy"
      ],
      description: "A great book without an author platform is a hidden masterpiece. Our author coaches guide you through personal branding, podcast tour bookings, email newsletter funnels, speaking opportunities, and backlist monetization to establish a sustainable writing career.",
      btnText: "Build Your Brand",
      collageImg: "/services/books-9.png"
    },
    manuscript: {
      title: "Author Platform Development Suite",
      subtitle: "Strategic coaching modules designed to amplify your voice and grow an engaged, loyal readership.",
      cards: [
        {
          num: "01",
          title: "Personal Brand Positioning",
          desc: "Define your author brand archetype, core messaging pillars, unique market lane, and professional media bio."
        },
        {
          num: "02",
          title: "Reader Magnet & Email Funnels",
          desc: "Create irresistible free bonus chapters, novellas, and automated welcome sequences that build an owned email list."
        },
        {
          num: "03",
          title: "Podcast & Media Tour Strategy",
          desc: "Craft compelling media one-sheets, identify target podcasts, and secure interview features that drive book sales."
        },
        {
          num: "04",
          title: "Social Media & Community Building",
          desc: "Develop a sustainable, low-stress content cadence across BookTok, Instagram, LinkedIn, or Substack that converts fans."
        },
        {
          num: "05",
          title: "Speaking & Corporate Opportunities",
          desc: "Leverage your non-fiction or business book to book keynote presentations, workshops, and high-ticket consulting clients."
        },
        {
          num: "06",
          title: "Backlist Monetization & Series Flow",
          desc: "Plan multi-book series release cadences, box sets, and cross-promotions that compound lifetime reader value."
        }
      ]
    },
    purpleBanner: {
      headline: "Beyond the Single Book",
      subheading: "A book is not just a product—it's the foundation of your authority.",
      p1: "The most successful authors in the world do not rely solely on book royalty checks. They understand that a published book is the ultimate credibility card that unlocks speaking fees, consulting contracts, media appearances, and passionate fan communities.",
      p2: "Our author coaches provide the blueprint to turn your literary work into an enduring intellectual property engine that generates revenue and influence for years to come."
    },
    process: {
      badge: "AUTHOR ACCELERATOR",
      title: "Our 4-Step Author Acceleration Framework",
      subtitle: "How our brand strategists guide your transition from published author to recognized thought leader.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Audience & Platform Audit",
          desc: "We analyze your current digital presence, target readership demographics, and map out your strategic brand positioning."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Asset & Funnel Architecture",
          desc: "Creating your media one-sheet, lead magnet offer, high-converting author landing page, and automated email funnel."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "PR & Visibility Campaign",
          desc: "Executing targeted podcast outreach, guest articles, book reviewer outreach, and coordinated launch week PR."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Monetization & Career Expansion",
          desc: "Setting up backlist cross-selling, speaking pitch kits, and corporate consulting packages powered by your book authority."
        }
      ]
    },
    difference: {
      badge: "THE CAREER ADVANTAGE",
      title: "Why Author Coaching Matters",
      subtitle: "Move from obscure author to market authority with an owned audience that eagerly buys your next title.",
      cards: [
        {
          num: "01",
          title: "Owned Audience Independence",
          desc: "Stop relying solely on social media algorithms. Build a private email list of devoted readers who buy every release.",
          bullets: ["Direct fan relationships", "High email open rates", "Algorithm-proof audience"]
        },
        {
          num: "02",
          title: "10X Book Authority Monetization",
          desc: "Use your book as a high-trust catalyst to sell high-ticket services, keynote speeches, or premium digital courses.",
          bullets: ["Speaking engagement kits", "Consulting client pipelines", "Executive branding"]
        },
        {
          num: "03",
          title: "Sustainable Long-Term Career",
          desc: "Design a repeatable release schedule, backlist promotions, and series read-through pipelines that scale over time.",
          bullets: ["Multi-book release strategy", "Backlist compounding", "Lifetime author career plan"]
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck for Author Coaching",
      points: [
        {
          title: "Proven author brand blueprints.",
          desc: "We apply battle-tested marketing frameworks used by commercial bestsellers and top business thought leaders."
        },
        {
          title: "Practical, actionable strategy.",
          desc: "No vague advice. You receive direct outreach templates, email copy scripts, and step-by-step launch playbooks."
        },
        {
          title: "Direct media pitching support.",
          desc: "We teach you how to pitch high-profile podcast hosts and journalists to land regular interview spots."
        },
        {
          title: "Holistic author business development.",
          desc: "We look at the big picture—helping you align your book with your personal mission, business goals, and financial freedom."
        }
      ],
      btnText: "Accelerate Your Career",
      authorImg: "/services/person-9.png"
    }
  },

  // 10. Book Writing Services (Writing Menu)
  "book-writing": {
    slug: "book-writing",
    name: "Book Writing Services",
    metaTitle: "Professional Book Writing Services | Fleck Publisher",
    metaDescription: "Turn your ideas into bestsellers with Fleck Publisher's premier book writing and ghostwriting services. 100% royalties, confidentiality, and veteran storytellers.",
    hero: {
      badge: "PROFESSIONAL BOOK WRITING",
      title: "For Future",
      titleHighlight: "Bestsellers",
      subtitle: "We turn your ideas into compelling manuscripts that captivate readers and dominate bestseller lists. Complete confidentiality and 100% royalty ownership.",
      serviceTag: "Book Writing Service"
    },
    showcase: {
      headline: [
        "An Ebook Writing Agency That",
        "Takes You From First Word to",
        "Final Chapter"
      ],
      description: "Fleck Publisher turns ideas, voice notes, blogs, and partial drafts into complete, structured, publication-ready ebooks. We write from scratch, plan outlines, develop chapters, build manuscripts, and coach authors through writer's block, burnout, or big goals. Whether you need full ghostwriting, collaborative coaching, genre-specific execution, or audiobook-ready scripts—we deliver the writing for launch-ready books and get you across the finish line.",
      btnText: "Start Your Project",
      collageImg: "/writting/Group 100.png"
    },
    manuscript: {
      title: "Submit Your Manuscript",
      subtitle: "Share your writing vision or existing notes, and we'll craft the rest. The journey to becoming a published author begins here!",
      cards: [
        {
          num: "01",
          title: "Ideation & Voice Blueprint",
          desc: "We unpack your central premise, audience expectations, and distinct authorial tone before writing a single word."
        },
        {
          num: "02",
          title: "Outline & Chapter Architecture",
          desc: "Detailed scene-by-scene or chapter-by-chapter roadmaps guaranteeing seamless narrative flow, pacing, and emotional hooks."
        },
        {
          num: "03",
          title: "Ghostwriting & Drafting",
          desc: "Dedicated professional authors generate immersive, high-impact prose while keeping your personal style and message front and center."
        },
        {
          num: "04",
          title: "Character & Narrative Arc",
          desc: "In-depth developmental critiques, character development, and narrative tension calibration tailored to your book's genre."
        },
        {
          num: "05",
          title: "Collaborative Feedback Rounds",
          desc: "Milestone delivery reviews where you read, critique, and approve each chapter batch with our lead writing team."
        },
        {
          num: "06",
          title: "Final Manuscript Polish",
          desc: "Meticulous line-level editing, proofing, and style guide alignment ensuring your manuscript is ready for publishing."
        }
      ]
    },
    purpleBanner: {
      headline: "Inside Fleck’s Book Writing Department",
      subheading: "Meet the Writers",
      p1: "Fleck’s writing team includes top-tier ghostwriters, senior editors, genre specialists, and strategic book coaches—vetted by our editorial leads for narrative precision and subject-matter depth. Book managers assign writers based on narrative complexity, voice alignment, and genre expertise.",
      p2: "Our writers have contributed to Harvard Business Review, Wired, The New York Times, and titles that became Wall Street Journal and Amazon Kindle bestsellers."
    },
    process: {
      badge: "4-STEP WRITING WORKFLOW",
      title: "The ebook writing process at Fleck Publisher",
      subtitle: "A transparent, milestone-driven framework engineered to turn your vision into a finished, publication-ready book.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Discovery & Blueprint",
          desc: "We begin with comprehensive discovery interviews to map out your core themes, character arcs, and target readership."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Chapter-by-Chapter Drafting",
          desc: "Our veteran authors write in scheduled milestones, delivering chapter batches for your feedback and approval."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Developmental Revisions",
          desc: "We refine dialogue, scene tension, narrative pace, and argument structure according to your detailed review notes."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Final Polish & Publication-Ready",
          desc: "Line editing, copyediting, and styling checks deliver a manuscript primed for formatting, cover art, and global release."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Fleck Publisher is more than your typical book writing service — this is what makes us truly exceptional:",
      cards: [
        {
          num: "01",
          title: "You're in the driver's seat",
          desc: "We build the book, but you control the creative path.",
          bullets: [
            "You approve the outline",
            "You steer tone and direction"
          ],
          quote: "You share your creative intent — we complete your book."
        },
        {
          num: "02",
          title: "Storytelling that sells",
          desc: "We develop authors' manuscripts to meet the:",
          bullets: [
            "structural and tonal hunger of your readers",
            "metadata requirements of publishing platforms"
          ],
          quote: "So, while it reads well — it ranks, sells, and fits the digital shelf we composed it for."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Trust Fleck Publisher's Book Writing Service",
      points: [
        {
          title: "Your voice, authentically amplified.",
          desc: "Our writers study your vocabulary, pacing, and storytelling rhythm so the final manuscript sounds unmistakably like you."
        },
        {
          title: "Structured milestone approvals.",
          desc: "We don't disappear for months. You review and approve the outline and every chapter batch along the way."
        },
        {
          title: "Commercial market positioning.",
          desc: "We write books engineered to sell, integrating reader hooks, compelling chapter cliffhangers, and genre conventions."
        },
        {
          title: "Seamless path to publishing.",
          desc: "Because Fleck handles cover design, formatting, and worldwide distribution, your writing transitions directly into launch."
        }
      ],
      btnText: "Start Your Writing Journey",
      authorImg: "/writting/071c29f5876f2618f03c685c86da7284b2c590a5.png"
    }
  },

  // E-Book Ghostwriting (Writing Menu)
  "ebook-ghostwriting": {
    slug: "ebook-ghostwriting",
    name: "E-Book Ghostwriting Services",
    metaTitle: "Professional E-Book Ghostwriting Services | Fleck Publisher",
    metaDescription: "Turn your ideas, memoirs, or business expertise into high-impact, bestselling ebooks with Fleck Publisher's vetted ghostwriters. 100% royalties & NDA confidential.",
    hero: {
      badge: "PROFESSIONAL E-BOOK GHOSTWRITING",
      title: "Turn Your Ideas Into",
      titleHighlight: "Bestselling Ebooks",
      subtitle: "Collaborate with seasoned ghostwriters who capture your unique voice, expertise, and vision. We handle every word from prologue to epilogue with 100% confidential NDA protection.",
      serviceTag: "E-Book Ghostwriting",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 02_58_57 AM 1.png"
    },
    showcase: {
      headline: [
        "Expert Ghostwriters Who",
        "Capture Your Voice &",
        "Write Books That Sell"
      ],
      description: "Fleck Publisher pairs you with veteran ghostwriters who interview you, internalize your voice, and write captivating ebooks tailored to your genre and target audience. From business leaders and thought pioneers to memoirists and fiction visionaries, we deliver full-length, publication-grade ebooks without you having to write a single sentence.",
      btnText: "Hire a Ghostwriter",
      collageImg: "/writting/Group 96.png"
    },
    manuscript: {
      title: "Submit Your Manuscript",
      subtitle: "Share your writing vision or existing notes, and we'll craft the rest. The journey to becoming a published author begins here!",
      cards: [
        {
          num: "01",
          title: "In-Depth Voice Discovery",
          desc: "We conduct recorded discovery interviews to capture your vocabulary, personal anecdotes, unique cadence, and core thought leadership."
        },
        {
          num: "02",
          title: "Genre & Market Calibration",
          desc: "We analyze bestselling benchmarks in your niche to structure chapters, hooks, and takeaways that resonate deeply with active buyers."
        },
        {
          num: "03",
          title: "Full Ghostwritten Drafting",
          desc: "Dedicated genre specialist ghostwriters produce immersive, compelling text adhering strictly to agreed chapter milestones."
        },
        {
          num: "04",
          title: "Strict NDA & 100% Royalties",
          desc: "Complete confidentiality guaranteed. You own all intellectual property, copyright, and royalties with zero writer credits attached."
        },
        {
          num: "05",
          title: "Chapter-by-Chapter Approvals",
          desc: "Review drafts in manageable batches. Give feedback and direct refinements directly to ensure total voice alignment."
        },
        {
          num: "06",
          title: "Publication-Ready Polish",
          desc: "Comprehensive developmental editing and line polishing ensures your ghostwritten manuscript is primed for cover design and distribution."
        }
      ]
    },
    purpleBanner: {
      headline: "Inside Fleck's Elite Ghostwriting Guild",
      subheading: "Words That Build Your Legacy",
      p1: "Our vetted ghostwriters have written national bestsellers, industry-defining business playbooks, and viral thrillers. We match you with specialists who understand your domain intimately.",
      p2: "Full ghostwriting agreements ensure you retain 100% of the copyright, profits, and public recognition."
    },
    process: {
      badge: "4-STEP GHOSTWRITING PROCESS",
      title: "The E-Book Ghostwriting Roadmap",
      subtitle: "A structured, stress-free process designed to capture your genius and turn it into a captivating manuscript.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Voice & Vision Interviews",
          desc: "Deep-dive audio sessions to extract your ideas, stories, concepts, and signature tone."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Blueprint & Structure",
          desc: "A comprehensive chapter-by-chapter outline mapping character arcs or key informational pillars."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Ghostwriting & Reviews",
          desc: "Fast-paced, high-quality chapter drafting delivered in batches for your regular review and feedback."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Final Manuscript Delivery",
          desc: "Thorough copyediting and final proofing to deliver a retail-ready ebook manuscript."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why aspiring authors and industry leaders choose Fleck Publisher for ghostwriting:",
      cards: [
        {
          num: "01",
          title: "Total Creative Ownership",
          desc: "You retain 100% rights, royalties, and author credit while we do the heavy lifting.",
          bullets: [
            "100% royalties retained",
            "Full NDA confidentiality",
            "No co-author attribution"
          ],
          quote: "Your name on the cover, your ideas inside, executed by master storytellers."
        },
        {
          num: "02",
          title: "Commercial Readability",
          desc: "We write books that hook readers from page one and drive word-of-mouth momentum.",
          bullets: [
            "Platform metadata optimization",
            "Bestseller structural pacing"
          ],
          quote: "Every chapter is crafted to keep readers turning pages and leaving 5-star reviews."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher for E-Book Ghostwriting",
      points: [
        {
          title: "100% authentic voice reproduction.",
          desc: "Our ghostwriters mirror your communication style and pacing so the book reads authentically like you."
        },
        {
          title: "Guaranteed confidentiality & NDAs.",
          desc: "Your ideas, personal anecdotes, and intellectual property remain strictly confidential under non-disclosure agreements."
        },
        {
          title: "Full intellectual property retention.",
          desc: "You retain 100% ownership, copyright, and royalties. We claim zero royalties or co-writing credits."
        },
        {
          title: "Seamless end-to-end publishing path.",
          desc: "From initial ghostwriting to professional formatting, cover art, and global distribution, we manage the entire lifecycle."
        }
      ],
      btnText: "Start Ghostwriting Today",
      authorImg: "/writting/1406d68d52edb4b4cc7ec80026ee659d834582f2.png"
    }
  },

  // Outline & Chapter Planning (Writing Menu)
  "outline-chapter-planning": {
    slug: "outline-chapter-planning",
    name: "Outline & Chapter Planning Services",
    metaTitle: "Outline & Chapter Planning Services | Fleck Publisher",
    metaDescription: "Transform your raw book ideas into bulletproof chapter outlines and narrative architecture. Eliminate plot holes and writer's block with Fleck Publisher.",
    hero: {
      badge: "OUTLINE & CHAPTER ARCHITECTURE",
      title: "Master Your Book's Foundation With",
      titleHighlight: "Strategic Chapter Outlines",
      subtitle: "Turn chaotic concepts, fragmented notes, and big ideas into a cohesive, chapter-by-chapter roadmap that eliminates writer's block and ensures a captivating reader journey.",
      serviceTag: "Outline & Chapter Planning",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_37_22 AM 1.png"
    },
    showcase: {
      headline: [
        "Architect a Flawless Story",
        "That Keeps Readers Hooked",
        "From Chapter to Chapter"
      ],
      description: "A great book starts with unshakeable narrative structure. Fleck Publisher's editorial architects analyze your premise, develop your thematic core, and construct a scene-by-scene or chapter-by-chapter plan. Whether you're crafting high-tension fiction, an authoritative business guide, or an inspiring memoir, our outlines provide clarity and effortless writing momentum.",
      btnText: "Plan Your Book Outline",
      collageImg: "/writting/Group 97.png"
    },
    manuscript: {
      title: "Submit Your Manuscript",
      subtitle: "Share your writing vision or existing notes, and we'll craft the rest. The journey to becoming a published author begins here!",
      cards: [
        {
          num: "01",
          title: "Core Concept & Premise Extraction",
          desc: "We distill your raw thoughts into a focused core premise that defines your book's unique value proposition and central hook."
        },
        {
          num: "02",
          title: "Pacing & Narrative Architecture",
          desc: "We establish rising action, emotional beats, climax points, and chapter cliffhangers that keep pages turning relentlessly."
        },
        {
          num: "03",
          title: "Scene-by-Scene Beat Sheets",
          desc: "For fiction and narrative nonfiction, we map every key scene with character motivations, conflicts, and resolutions."
        },
        {
          num: "04",
          title: "Informational Hierarchy & Frameworks",
          desc: "For non-fiction and business titles, we structure methodologies, case studies, and takeaways into logical, digestible chapters."
        },
        {
          num: "05",
          title: "Reader Retention Engineering",
          desc: "Strategically placed chapter hooks and recurring themes designed to prevent reader drop-off and maximize completion rates."
        },
        {
          num: "06",
          title: "Author Writing Roadmap",
          desc: "A plug-and-play drafting plan with word-count targets, character dossiers, and scene prompts ready for drafting."
        }
      ]
    },
    purpleBanner: {
      headline: "Blueprint Before You Build",
      subheading: "Architectural Precision for Authors",
      p1: "Our story architects and developmental strategists have outlined hundreds of titles across commercial fiction and high-growth non-fiction.",
      p2: "Save dozens of hours of rewriting and developmental overhauls by locking in an ironclad outline before drafting begins."
    },
    process: {
      badge: "4-STEP PLANNING PROCESS",
      title: "The Outline & Architecture Process",
      subtitle: "A systematic approach to organizing your narrative before you draft a single word.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Ideation & Brain Dump",
          desc: "Unpack all concepts, research, notes, and intended outcomes with our senior book planners."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Thematic & Pacing Matrix",
          desc: "Establish the structural spine, chapter sequence, and emotional arc of your manuscript."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Detailed Chapter Roadmaps",
          desc: "Fleshing out individual chapter summaries, scene beats, key dialogues, and core arguments."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Final Blueprint Delivery",
          desc: "A comprehensive, publication-ready blueprint you or our ghostwriters can immediately execute."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why planning your book with Fleck Publisher sets you apart:",
      cards: [
        {
          num: "01",
          title: "Zero Writer's Block",
          desc: "Never stare at a blank page again. Every chapter has clear objectives and narrative direction.",
          bullets: [
            "Clear daily writing milestones",
            "Structured scene objectives",
            "Eliminate major plot holes early"
          ],
          quote: "Drafting is fast and enjoyable when you know exactly what comes next."
        },
        {
          num: "02",
          title: "Market-Aligned Pacing",
          desc: "We calibrate chapter lengths and cliffhangers to match reader expectations in your specific genre.",
          bullets: [
            "Category pacing conventions",
            "High reader retention rates"
          ],
          quote: "Structure designed to turn first-time readers into lifelong fans."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher for Outline & Chapter Planning",
      points: [
        {
          title: "Eliminate writer's block forever.",
          desc: "With a detailed chapter-by-chapter roadmap, you'll always know exactly what to write next without getting stuck."
        },
        {
          title: "Ironclad narrative pacing and flow.",
          desc: "We construct rising action, tension, and logical progressions that keep readers immersed from start to finish."
        },
        {
          title: "Genre-specific commercial structure.",
          desc: "Our frameworks respect proven genre expectations while keeping your story fresh and distinctive."
        },
        {
          title: "Faster drafting and lower editing costs.",
          desc: "Solving structural flaws in outline form saves hundreds of hours of painful rewriting later on."
        }
      ],
      btnText: "Build Your Book Blueprint",
      authorImg: "/writting/657fcb8de603779ed11c783ab7df278c15741e4d.png"
    }
  },

  // Manuscript Development (Writing Menu)
  "manuscript-development": {
    slug: "manuscript-development",
    name: "Manuscript Development Services",
    metaTitle: "Manuscript Development Services | Fleck Publisher",
    metaDescription: "Elevate your manuscript from rough draft to commercial masterpiece with Fleck Publisher's developmental editing and comprehensive manuscript enhancement.",
    hero: {
      badge: "MANUSCRIPT DEVELOPMENT",
      title: "Elevate Your Manuscript Into a",
      titleHighlight: "Polished Masterpiece",
      subtitle: "Have a partial draft, messy manuscript, or complete work that needs major elevation? Our senior developmental editors reshape structure, refine prose, and eliminate plot holes.",
      serviceTag: "Manuscript Development",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 02_38_22 AM 1.png"
    },
    showcase: {
      headline: [
        "Deep Developmental Editing That",
        "Transforms Good Drafts Into",
        "Unforgettable Bestsellers"
      ],
      description: "Manuscript development is where great ideas become unforgettable books. Fleck Publisher works hand-in-hand with authors to dissect character arcs, tighten pacing, resolve continuity flaws, and elevate prose style. We preserve your authentic voice while elevating your draft to traditional publishing standards.",
      btnText: "Develop Your Manuscript",
      collageImg: "/writting/Group 98.png"
    },
    manuscript: {
      title: "Submit Your Manuscript",
      subtitle: "Share your writing vision or existing notes, and we'll craft the rest. The journey to becoming a published author begins here!",
      cards: [
        {
          num: "01",
          title: "Comprehensive Manuscript Evaluation",
          desc: "In-depth diagnostic analysis assessing narrative tension, clarity of argument, character consistency, and pacing."
        },
        {
          num: "02",
          title: "Structural & Pacing Overhaul",
          desc: "Reorganizing chapters, scenes, or informational sections to create seamless transitions and relentless narrative momentum."
        },
        {
          num: "03",
          title: "Character & Voice Deepening",
          desc: "Strengthening dialogue realism, character motivations, and distinctive narrative perspective throughout the work."
        },
        {
          num: "04",
          title: "Continuity & Logic Reconciliation",
          desc: "Eliminating plot holes, factual inconsistencies, and logical leaps that disrupt reader immersion."
        },
        {
          num: "05",
          title: "Line-Level Prose Enhancement",
          desc: "Polishing sentence rhythms, vocabulary richness, and sensory detail while preserving authorial authenticity."
        },
        {
          num: "06",
          title: "Publishing Readiness Certification",
          desc: "Final structural sign-off ensuring the manuscript meets high commercial standards across digital and print retailers."
        }
      ]
    },
    purpleBanner: {
      headline: "The Editorial Polish That Sells",
      subheading: "From Draft to Gold Standard",
      p1: "Our manuscript developmental editors have shaped bestselling titles across commercial genres, memoirs, and non-fiction playbooks.",
      p2: "We don't just point out weaknesses; we actively collaborate to rewrite, tighten, and elevate every critical scene."
    },
    process: {
      badge: "4-STEP DEVELOPMENT WORKFLOW",
      title: "The Manuscript Development Framework",
      subtitle: "How we take raw manuscripts and polish them into publication-ready titles.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Full Manuscript Audit",
          desc: "Comprehensive reading and editorial diagnostic report pinpointing strengths and core opportunities."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Structural Restructuring",
          desc: "Collaborative revision of chapters, scenes, arguments, and overarching narrative architecture."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Prose & Voice Polish",
          desc: "Deep line-by-line editorial enhancement to maximize emotional resonance and reader immersion."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Final Production Polish",
          desc: "Final proofing pass and formatting preparation for seamless typesetting and release."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why authors partner with Fleck Publisher for manuscript development:",
      cards: [
        {
          num: "01",
          title: "Voice Preservation",
          desc: "We polish and refine your writing without stripping away your natural voice, tone, or perspective.",
          bullets: [
            "Respect for authorial identity",
            "Enhanced clarity and impact",
            "Honest, constructive critiques"
          ],
          quote: "Your story, told with maximum impact and zero loss of personal style."
        },
        {
          num: "02",
          title: "Commercial Precision",
          desc: "We bridge the gap between self-expression and commercial marketplace viability.",
          bullets: [
            "Category standard compliance",
            "Proven reader retention hooks"
          ],
          quote: "Elevating your manuscript to compete with traditional publishing houses."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher for Manuscript Development",
      points: [
        {
          title: "Veteran developmental editors.",
          desc: "Work with experienced publishing professionals who know what makes readers fall in love with books."
        },
        {
          title: "Actionable chapter-by-chapter critiques.",
          desc: "Clear editorial feedback with specific solutions, dialogue revisions, and restructuring suggestions."
        },
        {
          title: "Protection of your unique author voice.",
          desc: "We refine syntax and flow while preserving your personal cadence and storytelling instinct."
        },
        {
          title: "Direct track to market-leading publication.",
          desc: "Once developed, your manuscript is primed for seamless formatting, interior layout, and global distribution."
        }
      ],
      btnText: "Upgrade Your Manuscript",
      authorImg: "/writting/b8ade41dc89c09bcacc9d9db928803f39f4404d1.png"
    }
  },

  // Audiobook Writing & Adaptation (Writing Menu)
  "audiobook-writing": {
    slug: "audiobook-writing",
    name: "Audiobook Writing & Adaptation Services",
    metaTitle: "Audiobook Writing & Adaptation Services | Fleck Publisher",
    metaDescription: "Transform your print or ebook manuscript into an immersive, narrator-friendly audiobook script with Fleck Publisher's specialized adaptation team.",
    hero: {
      badge: "AUDIOBOOK WRITING & ADAPTATION",
      title: "Transform Your Book Into an",
      titleHighlight: "Immersive Audio Experience",
      subtitle: "Writing for the ear is vastly different from writing for the eye. We adapt, write, and script manuscripts tailored for professional narrators and audio-first platforms like Audible and Spotify.",
      serviceTag: "Audiobook Writing & Adaptation",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_42_13 AM 1.png"
    },
    showcase: {
      headline: [
        "Captivate Listeners Worldwide With",
        "Scripts Optimized Specifically For",
        "The Ear & The Voice"
      ],
      description: "The audiobook market is expanding rapidly, but direct text-to-speech translations often fall flat. Fleck Publisher adapts existing books and crafts original audiobook scripts with auditory pacing, phonetic pronunciations, character voice directives, and audio cue notes designed for peak listener engagement.",
      btnText: "Adapt for Audiobook",
      collageImg: "/writting/Group 99.png"
    },
    manuscript: {
      title: "Submit Your Manuscript",
      subtitle: "Share your writing vision or existing notes, and we'll craft the rest. The journey to becoming a published author begins here!",
      cards: [
        {
          num: "01",
          title: "Auditory Flow & Dialogue Adaptation",
          desc: "Rewriting complex visual prose into conversational, rhythmic sentences that flow naturally when read aloud."
        },
        {
          num: "02",
          title: "Visual Element Translation",
          desc: "Converting visual charts, footnotes, graphs, and images into compelling narrative descriptions or listener guides."
        },
        {
          num: "03",
          title: "Narrator Performance Directives",
          desc: "Adding tone notes, cadence markers, emotional shifts, and accent cues for voice talent."
        },
        {
          num: "04",
          title: "Pronunciation & Phonetic Glossary",
          desc: "Comprehensive phonetic guides for fictional character names, foreign terms, acronyms, and technical jargon."
        },
        {
          num: "05",
          title: "Audio Chapter Pacing & Breaks",
          desc: "Structuring chapter lengths and pause cues optimized for Audible, Apple Books, and Spotify listening habits."
        },
        {
          num: "06",
          title: "ACX & Audio Platform Compliance",
          desc: "Ensuring final audio script and metadata meet the rigorous technical standards of leading audiobook distributors."
        }
      ]
    },
    purpleBanner: {
      headline: "Crafted for the Spoken Word",
      subheading: "Audio-First Narrative Engineering",
      p1: "Writing for audio requires cadence, rhythm, and clear character cues that make voice talent shine and keep listeners captivated on their daily commute.",
      p2: "We deliver full ACX-compliant production scripts that minimize studio recording time and production retakes."
    },
    process: {
      badge: "4-STEP AUDIO ADAPTATION WORKFLOW",
      title: "The Audiobook Adaptation Process",
      subtitle: "A seamless transition from the printed page to world-class spoken word.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Manuscript Audio Audit",
          desc: "Evaluating text for dialogue rhythm, visual dependencies, and narrator-readiness."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Audio-First Rewriting",
          desc: "Adapting visual elements and smoothing complex syntax for natural vocal delivery."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Narrator Script & Phonetics",
          desc: "Compiling character vocal sheets, pronunciations, and structural audio cues."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Studio-Ready Script Delivery",
          desc: "Finalizing a fully annotated script ready for studio recording and ACX mastering."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why authors choose Fleck Publisher for audiobook adaptation:",
      cards: [
        {
          num: "01",
          title: "Narrator-Ready Scripts",
          desc: "Voice actors perform faster with fewer retakes thanks to our phonetic annotations and pacing notes.",
          bullets: [
            "Pronunciation keys included",
            "Dialogue tone directions",
            "Reduced studio recording costs"
          ],
          quote: "Designed to help voice actors deliver their most captivating performance."
        },
        {
          num: "02",
          title: "Full Audio Ecosystem Reach",
          desc: "Scripts formatted for Audible ACX, Apple Audiobooks, Spotify, and Findaway Voices.",
          bullets: [
            "Global audio distribution",
            "Listener retention formatting"
          ],
          quote: "Reach millions of readers who prefer listening over reading."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher for Audiobook Adaptation",
      points: [
        {
          title: "Audio-first storytelling experts.",
          desc: "We understand how listeners experience audiobooks, ensuring dialogue sounds organic and narration flows effortlessly."
        },
        {
          title: "Complete ACX & Spotify compliance.",
          desc: "Our scripts and adaptation protocols align perfectly with the technical and narrative guidelines of major audio distributors."
        },
        {
          title: "Comprehensive narrator guidelines.",
          desc: "Phonetic spellings, emotional directives, and character voices reduce studio confusion and recording costs."
        },
        {
          title: "Expanding your reach to millions of listeners.",
          desc: "Unlock an entire demographic of commuters, fitness enthusiasts, and audiobook fans worldwide."
        }
      ],
      btnText: "Start Audio Adaptation",
      authorImg: "/writting/c6b92f27f57dc83f6411fb17a3e5a9608be007a3.png"
    }
  },

  // 11. Book Editing Services (Editing Menu)
  "book-editing": {
    slug: "book-editing",
    name: "Book Editing Services",
    metaTitle: "Professional Book Editing Services | Fleck Publisher",
    metaDescription: "Refine your manuscript with industry-leading developmental, line, and copyediting services. From structural fixes to final proofing, we prepare your book for publication.",
    hero: {
      badge: "Professional Book Editing Services",
      title: "That Refine Every",
      titleHighlight: "Page",
      subtitle: "We take your manuscript from rough to ready. Fleck Publisher's ebook editing services sharpen your narrative, clarify your message, and clean every sentence. You get a book that's structurally sound, grammatically tight, and ready to publish.",
      serviceTag: "Book Editing",
      bgImg: "/editing/Hero background.png",
      showForm: false
    },
    showcase: {
      headline: [
        "Industry-Leading Book Editing That",
        "Sharpens Your Story and",
        "Captivates Every Reader"
      ],
      description: "From structural overhauls to line-by-line sentence polishing, our genre-specialized editors ensure your book meets commercial publishing standards while preserving your distinct voice.",
      btnText: "Get An Editorial Review",
      collageImg: "/editing/Group 87.png"
    },
    manuscript: {
      title: "Submit Your Manuscript for Editing",
      subtitle: "A transparent, collaborative editorial process that refines your manuscript from first assessment to publication-ready proof.",
      cards: [
        {
          num: "01",
          title: "Developmental Assessment",
          desc: "We analyze character arcs, narrative pacing, thematic coherence, and plot logic to identify structural improvements before sentence-level editing."
        },
        {
          num: "02",
          title: "Line & Stylistic Editing",
          desc: "We refine word choice, eliminate passive phrasing, enhance tonal consistency, and sculpt immersive prose without erasing your voice."
        },
        {
          num: "03",
          title: "Comprehensive Copyediting",
          desc: "Rigorous correction of grammar, syntax, punctuation, tense consistency, and continuity errors adhering to Chicago Manual of Style."
        },
        {
          num: "04",
          title: "Fact-Checking & Verification",
          desc: "Detailed verification of historical timelines, technical claims, references, and geographic accuracy to protect your credibility."
        },
        {
          num: "05",
          title: "Author Query & Revision Round",
          desc: "Collaborative margin notes and track-changes suggestions allowing you to review, question, and approve every editorial choice."
        },
        {
          num: "06",
          title: "Final Proofreading Sign-Off",
          desc: "A meticulous final read-through catching stray typos, layout anomalies, and formatting quirks ready for retail distribution."
        }
      ]
    },
    purpleBanner: {
      headline: "Inside Fleck’s Book Editing Department",
      subheading: "Meet the Editors",
      p1: "Our editorial board consists of seasoned editors from top publishing houses, literary critics, and genre specialists. Every manuscript is matched with an editor who deeply understands the conventions and reader expectations of your specific genre.",
      p2: "From New York Times bestsellers to technical non-fiction, we approach every manuscript with academic rigor and commercial sensitivity, helping authors achieve publishable excellence."
    },
    process: {
      badge: "4-STAGE EDITORIAL WORKFLOW",
      title: "The Book Editing Process at Fleck Publisher",
      subtitle: "A structured, transparent review pipeline designed to elevate your manuscript with zero confusion.",
      steps: [
        {
          step: "01",
          phase: "STAGE 01",
          title: "Editorial Manuscript Evaluation",
          desc: "We read your entire draft, provide an editorial diagnostic report, and identify the exact tiers of editing your book requires."
        },
        {
          step: "02",
          phase: "STAGE 02",
          title: "Developmental & Structural Pass",
          desc: "Our senior editor restructures scenes, tightens plot pacing, resolves character inconsistencies, and balances chapter flow."
        },
        {
          step: "03",
          phase: "STAGE 03",
          title: "Line by Line Crafting & Copyediting",
          desc: "Meticulous sentence-level refinement correcting grammar, cadence, flow, and Chicago Manual of Style compliance."
        },
        {
          step: "04",
          phase: "STAGE 04",
          title: "Final Proofing & Publication Ready",
          desc: "A fresh pair of editorial eyes completes the final proofing pass, delivering a spotless manuscript ready for interior formatting."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why authors choose our editorial team over generic freelance marketplaces:",
      cards: [
        {
          num: "01",
          title: "Your voice is always protected",
          desc: "We polish and elevate your manuscript without stripping away what makes your writing unique.",
          bullets: [
            "Preserves authorial cadence",
            "Constructive track-changes notes",
            "Zero heavy-handed overwriting"
          ],
          quote: "You hold final editorial authority on every suggested change."
        },
        {
          num: "02",
          title: "Genre-specialized standards",
          desc: "We assign editors based on deep mastery of your specific reader demographics and market trends.",
          bullets: [
            "Commercial thriller & romance pacing",
            "Non-fiction citation accuracy",
            "Strict Chicago Manual adherence"
          ],
          quote: "Your manuscript lands in the hands of readers with pristine, professional quality."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Trust Fleck Publisher's Book Editing Services",
      points: [
        {
          title: "Multi-layered editorial team.",
          desc: "Your manuscript benefits from multiple specialized eyes—developmental editors, copyeditors, and fresh-read proofreaders."
        },
        {
          title: "Constructive, empowering feedback.",
          desc: "No vague dismissals. You receive detailed margin queries explaining the reasoning behind every suggested revision."
        },
        {
          title: "Strict style guide fidelity.",
          desc: "We follow industry-standard style manuals (CMOS, APA, MLA) to ensure your book meets global publishing criteria."
        },
        {
          title: "Fast, reliable turnaround times.",
          desc: "Clear delivery schedules with milestone checkpoints so you never have to wonder when your edited chapters will arrive."
        }
      ],
      btnText: "Get Your Editorial Assessment",
      authorImg: "/editing/Group 85.png"
    }
  },

  // Ebook Editing and Proofreading (Editing Menu)
  "ebook-editing-proofreading": {
    slug: "ebook-editing-proofreading",
    name: "Ebook Editing and Proofreading Services",
    metaTitle: "Ebook Editing and Proofreading Services | Fleck Publisher",
    metaDescription: "Comprehensive ebook editing and proofreading services. Eliminate typos, refine grammar, and polish your manuscript to perfection with Fleck Publisher.",
    hero: {
      badge: "EBOOK EDITING & PROOFREADING",
      title: "Refine Your Manuscript to",
      titleHighlight: "Publishing Perfection",
      subtitle: "Every typo or awkward phrasing pulls a reader out of your story. We combine rigorous line editing with meticulous final proofreading to deliver a spotless, commercial-grade ebook.",
      serviceTag: "Ebook Editing & Proofreading",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_52_45 AM 1.png",
      showForm: false
    },
    showcase: {
      headline: [
        "Comprehensive Editorial Polish",
        "That Guarantees A Flawless",
        "Reading Experience"
      ],
      description: "Our dual-pass editing and proofreading service catches what single-editor reviews miss. We first refine sentence structure, cadence, and word choice, followed by a forensic proofreading pass that eliminates typos, grammatical anomalies, and formatting quirks before your ebook goes live.",
      btnText: "Polish Your Ebook",
      collageImg: "/editing/Group 88.png"
    },
    manuscript: {
      title: "Submit Your Manuscript for Editing",
      subtitle: "A transparent, collaborative editorial process that refines your manuscript from first assessment to publication-ready proof.",
      cards: [
        {
          num: "01",
          title: "Deep Grammar & Syntax Audit",
          desc: "Comprehensive sentence-level evaluation correcting dangling modifiers, tense slips, passive phrasing, and comma splices."
        },
        {
          num: "02",
          title: "Sentence Cadence & Flow Refinement",
          desc: "Untangling congested paragraphs, varying sentence rhythms, and ensuring effortless reader immersion across all chapters."
        },
        {
          num: "03",
          title: "Consistency & Style Guide Check",
          desc: "Aligning terminology, capitalization, and formatting rules strictly with the Chicago Manual of Style."
        },
        {
          num: "04",
          title: "Punctuation & Typographical Forensic",
          desc: "Eliminating stray spaces, incorrect quotation styles, dash misuse, and subtle typographical errors."
        },
        {
          num: "05",
          title: "Dialogue & Voice Calibration",
          desc: "Polishing character dialogue tags, subtext clarity, and keeping your natural narrative voice authentic."
        },
        {
          num: "06",
          title: "Final Clean & Track-Changes Delivery",
          desc: "You receive both a transparent track-changes document to review every edit and a clean file ready for publishing."
        }
      ]
    },
    purpleBanner: {
      headline: "The Double-Layer Editorial Shield",
      subheading: "Two Specialized Editors, One Pristine Book",
      p1: "Every manuscript is reviewed by both a senior copyeditor and a fresh-eyes proofreader to guarantee complete editorial coverage.",
      p2: "We preserve your voice while removing the friction that prevents readers from leaving 5-star reviews."
    },
    process: {
      badge: "4-STEP EDITING & PROOFING WORKFLOW",
      title: "The Dual-Pass Editorial Framework",
      subtitle: "How we take your draft and turn it into an error-free, publication-grade ebook.",
      steps: [
        {
          step: "01",
          phase: "STAGE 01",
          title: "Manuscript Ingestion & Style Guide",
          desc: "We analyze your book's genre, establish custom style parameters, and assign your lead copyeditor."
        },
        {
          step: "02",
          phase: "STAGE 02",
          title: "Line & Copy Editing Pass",
          desc: "In-depth sentence polish refining phrasing, fixing syntax, and enhancing clarity and impact."
        },
        {
          step: "03",
          phase: "STAGE 03",
          title: "Fresh-Eyes Proofreading",
          desc: "A second specialized proofreader scrubs the text for remaining typos, layout quirks, and inconsistencies."
        },
        {
          step: "04",
          phase: "STAGE 04",
          title: "Final Manuscript Sign-Off",
          desc: "Delivery of clean, retail-ready files and full track-changes documentation for your total peace of mind."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why authors trust our dual-pass editing system:",
      cards: [
        {
          num: "01",
          title: "Two Dedicated Editors",
          desc: "A copyeditor refines the craft; a proofreader catches the strays.",
          bullets: [
            "Complete grammatical accuracy",
            "Zero blind spots or fatigue",
            "Chicago Manual of Style compliance"
          ],
          quote: "Double the scrutiny ensures your book is flawless on launch day."
        },
        {
          num: "02",
          title: "Voice Preservation Guarantee",
          desc: "We elevate sentence flow without stripping away your distinct personality.",
          bullets: [
            "Retains authorial tone",
            "Detailed margin query notes"
          ],
          quote: "Your words, your story—just perfectly polished."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher for Ebook Editing and Proofreading",
      points: [
        {
          title: "Dual-editor quality assurance.",
          desc: "No single editor catches everything. Our two-stage review process guarantees unmatched typographical and grammatical accuracy."
        },
        {
          title: "Preservation of your unique author voice.",
          desc: "We polish grammar and sentence flow while respecting your individual storytelling cadence and vocabulary."
        },
        {
          title: "Chicago Manual of Style compliance.",
          desc: "We enforce industry standard conventions trusted by major publishing houses worldwide."
        },
        {
          title: "Rapid turnaround with guaranteed delivery.",
          desc: "Clear delivery milestones mean you can plan your cover launch and preorder campaign with confidence."
        }
      ],
      btnText: "Start Editorial Polish",
      authorImg: "/editing/image 24.png"
    }
  },

  // Development Editing (Editing Menu)
  "development-editing": {
    slug: "development-editing",
    name: "Development Editing Services",
    metaTitle: "Developmental Book Editing Services | Fleck Publisher",
    metaDescription: "Transform your story with Fleck Publisher's developmental editing. Deep character arc optimization, plot restructuring, pacing fixes, and narrative mastery.",
    hero: {
      badge: "DEVELOPMENTAL EDITING",
      title: "Master Your Narrative Structure With",
      titleHighlight: "Senior Developmental Editing",
      subtitle: "We look at the big picture: plot architecture, character journeys, world-building logic, and thematic depth. We turn good premises into unforgettable literary triumphs.",
      serviceTag: "Development Editing",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_48_26 AM 1.png",
      showForm: false
    },
    showcase: {
      headline: [
        "Big-Picture Story Architecture",
        "That Eliminates Plot Holes &",
        "Deepens Emotional Impact"
      ],
      description: "Developmental editing is the master craft of storytelling. Our veteran editors dissect your plot arcs, evaluate chapter pacing, and strengthen character motivations. You receive an exhaustive editorial letter accompanied by chapter-by-chapter developmental margin notes.",
      btnText: "Develop Your Story",
      collageImg: "/editing/Group 89.png"
    },
    manuscript: {
      title: "Submit Your Manuscript for Developmental Review",
      subtitle: "A transparent, collaborative editorial process that refines your manuscript from first assessment to publication-ready proof.",
      cards: [
        {
          num: "01",
          title: "Plot Arc & Pacing Diagnostic",
          desc: "Pinpointing narrative lags, sagging middles, unearned climaxes, and restructuring chapters for relentless momentum."
        },
        {
          num: "02",
          title: "Character Arc & Motivation Analysis",
          desc: "Ensuring protagonists and antagonists possess believable motivations, emotional growth, and distinctive voices."
        },
        {
          num: "03",
          title: "World-Building & Logic Reconciliation",
          desc: "Testing internal rules, continuity, and setting realism in fiction and non-fiction narratives alike."
        },
        {
          num: "04",
          title: "Thematic Cohesion & Message Clarity",
          desc: "Clarifying your overarching message and emotional resonance so the story leaves a lasting impact."
        },
        {
          num: "05",
          title: "Detailed Comprehensive Editorial Letter",
          desc: "A multi-page master document analyzing strengths, weaknesses, and a concrete roadmap for your revision."
        },
        {
          num: "06",
          title: "Chapter-by-Chapter Margin Coaching",
          desc: "In-line developmental notes with suggestions, alternative scene angles, and targeted author queries."
        }
      ]
    },
    purpleBanner: {
      headline: "The Architectural Blueprint of Great Books",
      subheading: "Where Raw Ideas Become Bestsellers",
      p1: "Great writing cannot compensate for a broken plot. Our developmental editors provide the structural guidance that elevates good writers into bestselling authors.",
      p2: "We partner with you to turn confusing narrative tangles into seamless, page-turning storytelling."
    },
    process: {
      badge: "4-STAGE DEVELOPMENT WORKFLOW",
      title: "The Developmental Editing Framework",
      subtitle: "A strategic deep-dive into your story's foundational mechanics.",
      steps: [
        {
          step: "01",
          phase: "STAGE 01",
          title: "Full Manuscript In-Depth Read",
          desc: "Our senior editor immerses themselves in your complete manuscript without making line edits."
        },
        {
          step: "02",
          phase: "STAGE 02",
          title: "Diagnostic Editorial Letter",
          desc: "We deliver an exhaustive multi-page report breaking down structure, pacing, theme, and characters."
        },
        {
          step: "03",
          phase: "STAGE 03",
          title: "Chapter-by-Chapter In-Line Notes",
          desc: "Detailed margin feedback throughout the text highlighting specific scenes that require enhancement."
        },
        {
          step: "04",
          phase: "STAGE 04",
          title: "Author Strategy Consultation",
          desc: "One-on-one discussion to answer your questions and plan your path to a triumphant second draft."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why authors choose our developmental editing:",
      cards: [
        {
          num: "01",
          title: "Constructive, Never Destructive",
          desc: "We highlight what works brilliantly while giving actionable solutions for areas that need work.",
          bullets: [
            "Actionable revision steps",
            "Empowering editorial feedback",
            "Genre benchmark alignment"
          ],
          quote: "We don't just point out plot holes—we show you how to bridge them."
        },
        {
          num: "02",
          title: "Commercial Reader Instinct",
          desc: "We look at your book through the eyes of eager genre fans and literary agents.",
          bullets: [
            "High reader retention metrics",
            "Satisfying climax payoff"
          ],
          quote: "Engineered to keep readers reading late into the night."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher for Development Editing",
      points: [
        {
          title: "Bestselling genre-specialist editors.",
          desc: "You are matched with editors who read and edit your exact genre daily and understand reader cravings."
        },
        {
          title: "Constructive, actionable roadmap for revisions.",
          desc: "Receive clear, prioritized recommendations so you never feel overwhelmed by the rewriting process."
        },
        {
          title: "Honest, empowering artistic feedback.",
          desc: "We tell you the truth about your manuscript with the respect and encouragement every creator deserves."
        },
        {
          title: "Seamless path to line editing and publishing.",
          desc: "Once your structure is sound, transition effortlessly into sentence-level line editing and global publishing."
        }
      ],
      btnText: "Book Your Developmental Review",
      authorImg: "/editing/image 26.png"
    }
  },

  // Line Editing (Editing Menu)
  "line-editing": {
    slug: "line-editing",
    name: "Line Editing Services",
    metaTitle: "Professional Line Editing Services | Fleck Publisher",
    metaDescription: "Elevate your prose, tone, and musicality with Fleck Publisher's line editing services. Sentence-level refinement that makes your writing sing.",
    hero: {
      badge: "PROFESSIONAL LINE EDITING",
      title: "Sculpt Every Sentence to Make",
      titleHighlight: "Your Writing Sing",
      subtitle: "Line editing focuses on the craft of your language: sentence rhythm, emotional tone, sensory imagery, and tightening bloated phrasing while preserving your natural author voice.",
      serviceTag: "Line Editing",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_55_30 AM 1.png",
      showForm: false
    },
    showcase: {
      headline: [
        "Sentence-Level Stylistic Craft",
        "That Elevates Tone, Flow &",
        "Emotional Resonance"
      ],
      description: "While copyediting checks grammar and developmental editing handles plot, line editing focuses on the music and cadence of your words. Fleck Publisher's stylistic editors eliminate redundant words, untangle clumsy syntax, and sharpen your imagery so every paragraph captivates readers.",
      btnText: "Enhance Your Prose",
      collageImg: "/editing/Group 90.png"
    },
    manuscript: {
      title: "Submit Your Manuscript for Line Editing",
      subtitle: "A transparent, collaborative editorial process that refines your manuscript from first assessment to publication-ready proof.",
      cards: [
        {
          num: "01",
          title: "Prose Rhythm & Cadence Sculpting",
          desc: "Varying sentence length and structure to create an intuitive, musical reading experience that never drags."
        },
        {
          num: "02",
          title: "Elimination of Clunky Phrasing & Filler",
          desc: "Pruning throat-clearing preambles, redundant adjectives, and weak verb constructions."
        },
        {
          num: "03",
          title: "Voice & Tonal Consistency Alignment",
          desc: "Ensuring the narrator's attitude, emotional temperature, and persona remain consistent throughout the book."
        },
        {
          num: "04",
          title: "Sensory Imagery & Impact Enhancement",
          desc: "Transforming bland exposition into vivid, show-don't-tell sensory descriptions that immerse readers."
        },
        {
          num: "05",
          title: "Dialogue Polish & Emotional Subtext",
          desc: "Trimming on-the-nose dialogue to reveal character subtext, conflict, and distinct conversational speech rhythms."
        },
        {
          num: "06",
          title: "Author Query Notes & Alternative Phrasings",
          desc: "Offering creative alternatives for difficult sentences while leaving the final creative decision in your hands."
        }
      ]
    },
    purpleBanner: {
      headline: "The Art and Music of Language",
      subheading: "Transforming Good Sentences Into Timeless Prose",
      p1: "Line editing is where the reader falls in love with the writing itself. We refine how each word sounds, how paragraphs breathe, and how emotional beats land.",
      p2: "Our stylistic editors have refined prose for award-winning literary fiction, commercial page-turners, and thought-leading business volumes."
    },
    process: {
      badge: "4-STAGE STYLISTIC WORKFLOW",
      title: "The Line Editing Framework",
      subtitle: "Meticulous sentence-by-sentence prose refinement.",
      steps: [
        {
          step: "01",
          phase: "STAGE 01",
          title: "Voice & Cadence Calibration",
          desc: "We analyze your first three chapters to establish your stylistic benchmarks and target reading rhythm."
        },
        {
          step: "02",
          phase: "STAGE 02",
          title: "Comprehensive Line-by-Line Polish",
          desc: "Every paragraph is scrutinized for flow, imagery, tone, pacing, and lexical precision."
        },
        {
          step: "03",
          phase: "STAGE 03",
          title: "Dialogue & Subtext Refinement",
          desc: "Sharpening spoken dialogue, removing artificial exposition, and heightening character dynamics."
        },
        {
          step: "04",
          phase: "STAGE 04",
          title: "Final Polished Manuscript Delivery",
          desc: "Delivery of annotated files with margin options and a publication-ready clean master manuscript."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why authors prefer our line editing approach:",
      cards: [
        {
          num: "01",
          title: "Pure Voice Preservation",
          desc: "We never enforce a robotic house style. Your distinctive flair is preserved and sharpened.",
          bullets: [
            "Honors your unique style",
            "Eliminates clumsy phrasing",
            "Alternative wording suggestions"
          ],
          quote: "We don't change what you say—we make how you say it irresistible."
        },
        {
          num: "02",
          title: "Reader-Centric Pacing",
          desc: "Sentences constructed to propel the reader forward without cognitive fatigue.",
          bullets: [
            "Dynamic paragraph pacing",
            "Vivid sensory hooks"
          ],
          quote: "Prose that reads effortlessly from chapter one to the final sentence."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher for Line Editing",
      points: [
        {
          title: "Preserves your distinctive creative voice.",
          desc: "We heighten your personal style without making your writing feel generic or formulaic."
        },
        {
          title: "Eliminates filler words and passive phrasing.",
          desc: "We clean up sentence bloat so your prose packs a powerful, immediate emotional punch."
        },
        {
          title: "Sharpens descriptive precision and dialogue.",
          desc: "Your characters sound more alive, your scenes feel more immersive, and your themes resonate deeper."
        },
        {
          title: "Prepares your manuscript for commercial copyediting.",
          desc: "A tight, stylistically polished draft allows copyediting and proofreading to proceed with zero friction."
        }
      ],
      btnText: "Start Line Editing",
      authorImg: "/editing/image 27.png"
    }
  },

  // Copy Editing (Editing Menu)
  "copy-editing": {
    slug: "copy-editing",
    name: "Copy Editing Services",
    metaTitle: "Professional Copy Editing Services | Fleck Publisher",
    metaDescription: "Flawless grammar, syntax, punctuation, and Chicago Manual of Style compliance with Fleck Publisher's industry-standard copy editing services.",
    hero: {
      badge: "PRECISION COPY EDITING",
      title: "Master Grammar, Syntax &",
      titleHighlight: "Industry Style Standards",
      subtitle: "Ensure technical precision and narrative consistency across every page. We enforce strict CMOS guidelines, eliminate grammatical flaws, and reconcile timeline inconsistencies.",
      serviceTag: "Copy Editing",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 03_57_44 AM 1.png",
      showForm: false
    },
    showcase: {
      headline: [
        "Forensic Grammar & Consistency",
        "That Guarantees Total",
        "Technical Precision"
      ],
      description: "A great story can be undermined by inconsistent hyphenation, shifting verb tenses, or punctuation blunders. Fleck Publisher's copyeditors apply strict publishing industry standards (CMOS / Oxford) to polish syntax, standardize formatting, and build a dedicated style sheet for your book.",
      btnText: "Get Copy Edited",
      collageImg: "/editing/Group 91.png"
    },
    manuscript: {
      title: "Submit Your Manuscript for Copy Editing",
      subtitle: "A transparent, collaborative editorial process that refines your manuscript from first assessment to publication-ready proof.",
      cards: [
        {
          num: "01",
          title: "Grammar, Punctuation & Syntax Mastery",
          desc: "Correcting misplaced modifiers, agreement issues, run-on sentences, and subtle grammatical traps."
        },
        {
          num: "02",
          title: "Custom Project Style Sheet Creation",
          desc: "Building a comprehensive guide documenting spelling variations, character names, places, and stylistic decisions."
        },
        {
          num: "03",
          title: "Internal Timeline & Character Consistency",
          desc: "Catching continuity errors such as character eye color changes, timeline math slips, and physical contradictions."
        },
        {
          num: "04",
          title: "Chicago Manual of Style (CMOS) Compliance",
          desc: "Applying industry-standard rules for numbers, capitalization, hyphenation, quotations, and italics."
        },
        {
          num: "05",
          title: "Dialogue Formatting & Tag Precision",
          desc: "Standardizing punctuation around dialogue tags, action beats, and interrupted speech conventions."
        },
        {
          num: "06",
          title: "Clean & Track-Changes Dual Delivery",
          desc: "Full transparency with Microsoft Word track-changes plus a clean, ready-to-typeset master manuscript."
        }
      ]
    },
    purpleBanner: {
      headline: "Forensic Precision for Serious Authors",
      subheading: "Where Grammar Meets Commercial Polish",
      p1: "Even the most skilled authors produce typographical blind spots. Our copyeditors bring ruthless attention to detail, ensuring your book stands proudly alongside Big-5 releases.",
      p2: "Every copyedit includes a bespoke Style Sheet documenting your manuscript's unique rules for future sequels and series."
    },
    process: {
      badge: "4-STAGE COPYEDITING WORKFLOW",
      title: "The Copyediting Process",
      subtitle: "A systematic method for eliminating technical errors.",
      steps: [
        {
          step: "01",
          phase: "STAGE 01",
          title: "Style Sheet Setup & Preliminary Review",
          desc: "We establish your book's custom style sheet and rules based on your genre and target market."
        },
        {
          step: "02",
          phase: "STAGE 02",
          title: "Deep Grammar & Consistency Scrub",
          desc: "A meticulous sentence-by-sentence pass correcting grammar, syntax, punctuation, and timeline logic."
        },
        {
          step: "03",
          phase: "STAGE 03",
          title: "Author Query Resolution",
          desc: "Collaborative resolution of margin notes and queries regarding character details and phrase ambiguities."
        },
        {
          step: "04",
          phase: "STAGE 04",
          title: "Final Copyedited Sign-Off",
          desc: "Delivery of clean, typesetting-ready files alongside your comprehensive project style sheet."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why authors trust Fleck Publisher copyeditors:",
      cards: [
        {
          num: "01",
          title: "Certified Industry Standards",
          desc: "We follow the Chicago Manual of Style (CMOS 17th/18th Ed.) and Merriam-Webster's Collegiate Dictionary.",
          bullets: [
            "Gold standard publishing rules",
            "Custom author style sheet",
            "Zero technical guesswork"
          ],
          quote: "Guaranteed compliance with the standards traditional publishing houses demand."
        },
        {
          num: "02",
          title: "Seamless Continuity Tracking",
          desc: "We track timelines, character details, and plot facts across every single chapter.",
          bullets: [
            "No timeline contradictions",
            "Accurate character attributes"
          ],
          quote: "Catching the continuity flaws that break reader trust."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher for Copy Editing",
      points: [
        {
          title: "Certified CMOS editorial professionals.",
          desc: "Our copyeditors are trained in the gold standard of book publishing rules and conventions."
        },
        {
          title: "Custom style sheet included for every title.",
          desc: "Keep spelling, hyphenation, and world terminology consistent across standalone books and full series."
        },
        {
          title: "Zero disruption to your narrative rhythm.",
          desc: "We fix technical errors while honoring your natural flow, voice, and stylistic preferences."
        },
        {
          title: "Guaranteed accuracy across print and digital editions.",
          desc: "Files formatted and scrubbed to transition smoothly into typesetting, ebook conversion, and print production."
        }
      ],
      btnText: "Start Copy Editing",
      authorImg: "/editing/image 28.png"
    }
  },

  // Proofreading (Editing Menu)
  "proofreading": {
    slug: "proofreading",
    name: "Proofreading Services",
    metaTitle: "Professional Book Proofreading Services | Fleck Publisher",
    metaDescription: "The final line of defense before publication. Catch every stray typo, punctuation error, and formatting anomaly with Fleck Publisher's proofreaders.",
    hero: {
      badge: "FINAL STAGE PROOFREADING",
      title: "The Final Line of Defense",
      titleHighlight: "Before Publication",
      subtitle: "Don't let a stray typo tarnish your book launch. Our forensic proofreaders perform a fresh, eagle-eyed final read to catch the subtle errors that automated tools and tired eyes miss.",
      serviceTag: "Proofreading",
      bgImg: "/banners/4485da332170203cf1ed10de5530cc25b3c8e709.png",
      showForm: false
    },
    showcase: {
      headline: [
        "The Final Safeguard Before",
        "Your Book Reaches Global",
        "Bookstores & Readers"
      ],
      description: "Proofreading is the crucial final checkpoint in the publishing journey. After developmental and line editing are complete, our proofreaders conduct an exhaustive pass to eliminate stray commas, misspelled proper nouns, layout glitches, and widow/orphan lines so your book looks immaculate.",
      btnText: "Proofread My Book",
      collageImg: "/editing/Group 102.png"
    },
    manuscript: {
      title: "Submit Your Manuscript for Proofreading",
      subtitle: "A transparent, collaborative editorial process that refines your manuscript from first assessment to publication-ready proof.",
      cards: [
        {
          num: "01",
          title: "Typo & Misspelling Eradication",
          desc: "Catching insidious typos, repeated words, and spelling blunders that spellcheck tools routinely overlook."
        },
        {
          num: "02",
          title: "Punctuation & Spacing Anomalies",
          desc: "Fixing double spaces, unclosed quotation marks, rogue periods, and misaligned dash formatting."
        },
        {
          num: "03",
          title: "Homophone & Word-Substitution Verification",
          desc: "Detecting correct words used in the wrong context (e.g., compliment/complement, peek/peak/pique)."
        },
        {
          num: "04",
          title: "Headers, Footers & Folio Formatting",
          desc: "Verifying running headers, page numbers, chapter title styling, and front/back matter consistency."
        },
        {
          num: "05",
          title: "Widow, Orphan & Line Break Check",
          desc: "Identifying awkward line breaks, stranded single words, and paragraph formatting quirks."
        },
        {
          num: "06",
          title: "Final 100% Retail-Ready Delivery",
          desc: "Delivering a pristine manuscript certified ready for digital upload, print typesetting, and worldwide retail distribution."
        }
      ]
    },
    purpleBanner: {
      headline: "The Eagle-Eyed Final Barrier",
      subheading: "Where Good Books Become Flawless Releases",
      p1: "After months of writing and revising, authors develop word blindness to their own text. Our proofreaders come with fresh eyes and zero preconceptions.",
      p2: "We catch the tiny errors that keep your book from achieving five-star review averages."
    },
    process: {
      badge: "4-STAGE PROOFREADING WORKFLOW",
      title: "The Forensic Proofreading Process",
      subtitle: "Catching every final flaw before your book goes to print or digital upload.",
      steps: [
        {
          step: "01",
          phase: "STAGE 01",
          title: "Fresh Eyes Proofreading Assignment",
          desc: "Assigning an experienced proofreader who has never seen your manuscript before."
        },
        {
          step: "02",
          phase: "STAGE 02",
          title: "Forensic Text & Punctuation Pass",
          desc: "A meticulous word-by-word read-through catching stray typos, grammar slips, and punctuation errors."
        },
        {
          step: "03",
          phase: "STAGE 03",
          title: "Formatting & Layout Cross-Verification",
          desc: "Checking headers, chapter numerals, indentations, and table of contents alignments."
        },
        {
          step: "04",
          phase: "STAGE 04",
          title: "Publication-Ready Certification",
          desc: "Final clean file sign-off ready for Kindle, IngramSpark, and Amazon KDP upload."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why authors rely on Fleck Publisher proofreaders:",
      cards: [
        {
          num: "01",
          title: "Human Precision Over AI",
          desc: "Grammar software misses homophones and context; human proofreaders catch nuance and intention.",
          bullets: [
            "Context-aware error detection",
            "Genre-specific jargon understanding",
            "Zero false-positive rewriting"
          ],
          quote: "The nuanced scrutiny that automated spellchecks simply cannot replicate."
        },
        {
          num: "02",
          title: "Multi-Format Verification",
          desc: "We inspect manuscripts for both ebook reflowable readers and print paperback pages.",
          bullets: [
            "Ebook formatting safety",
            "Paperback layout harmony"
          ],
          quote: "Your book displays flawlessly across all screens and printed copies."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher for Proofreading",
      points: [
        {
          title: "Fresh-eyes eagle-eyed proofreaders.",
          desc: "Our proofreaders view your book with complete objectivity, catching what familiar eyes gloss over."
        },
        {
          title: "Human precision over flawed AI tools.",
          desc: "We understand slang, dialect, and intentional stylistic choices without corrupting your prose."
        },
        {
          title: "Format-specific checks for print and Kindle.",
          desc: "We check line breaks, chapter headings, and front matter so your layout looks professionally designed."
        },
        {
          title: "Rapid turnaround so your launch stays on track.",
          desc: "Fast, dependable turnaround ensures you hit your publishing schedule without last-minute stress."
        }
      ],
      btnText: "Get Your Book Proofread",
      authorImg: "/editing/image 29.png"
    }
  },

  // Fact-Checking And Verification (Editing Menu)
  "fact-checking-verification": {
    slug: "fact-checking-verification",
    name: "Fact-Checking And Verification Services",
    metaTitle: "Fact-Checking And Verification Services | Fleck Publisher",
    metaDescription: "Protect your reputation and authority. Thorough fact-checking, citation audit, and historical verification for non-fiction, memoirs, and fiction.",
    hero: {
      badge: "FACT-CHECKING & VERIFICATION",
      title: "Protect Your Credibility With",
      titleHighlight: "Rigorous Fact-Checking",
      subtitle: "One inaccurate statistic, misattributed quote, or historical error can destroy reader trust. Our research team verifies claims, cross-references sources, and audits citations.",
      serviceTag: "Fact-Checking & Verification",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 04_02_10 AM 1.png",
      showForm: false
    },
    showcase: {
      headline: [
        "Protect Your Reputation With",
        "Exhaustive Fact-Checking &",
        "Authoritative Verification"
      ],
      description: "Whether you're writing a business manifesto, an investigative memoir, or a deeply researched historical novel, accuracy is everything. Fleck Publisher verifies historical events, technical data, legal claims, quotes, and scientific citations, giving you total confidence in your manuscript.",
      btnText: "Verify Your Manuscript",
      collageImg: "/editing/Group 103.png"
    },
    manuscript: {
      title: "Submit Your Manuscript for Fact-Checking",
      subtitle: "A transparent, collaborative editorial process that refines your manuscript from first assessment to publication-ready proof.",
      cards: [
        {
          num: "01",
          title: "Statistical & Data Verification",
          desc: "Cross-checking all numerical data, percentages, studies, and empirical claims against original peer-reviewed sources."
        },
        {
          num: "02",
          title: "Quote Attribution & Authenticity",
          desc: "Verifying exact quote wording, historical context, and correct attribution to prevent misquotes."
        },
        {
          num: "03",
          title: "Historical Timeline & Geographic Accuracy",
          desc: "Auditing dates, calendar timelines, street names, and historical technologies for zero anachronisms."
        },
        {
          num: "04",
          title: "Scientific, Legal & Technical Fact-Checks",
          desc: "Subject-matter validation ensuring complex industry jargon, legal terminology, and medical concepts are accurately used."
        },
        {
          num: "05",
          title: "Bibliography & Citation Audit",
          desc: "Formatting footnotes, endnotes, and bibliographies according to CMOS, APA, or MLA academic standards."
        },
        {
          num: "06",
          title: "Comprehensive Verification Dossier",
          desc: "Delivering an itemized report documenting source URLs, archival evidence, and recommended factual revisions."
        }
      ]
    },
    purpleBanner: {
      headline: "The Ironclad Shield for Author Credibility",
      subheading: "Unassailable Truth and Authority",
      p1: "In an era of hyper-scrutiny, reader reviews and critics will pounce on factual inaccuracies. Our researchers verify every claim before a reader can question it.",
      p2: "From Wall Street biographies to military histories and corporate handbooks, we ensure your manuscript stands up to expert scrutiny."
    },
    process: {
      badge: "4-STAGE VERIFICATION WORKFLOW",
      title: "The Fact-Checking & Verification Protocol",
      subtitle: "A rigorous research framework that shields your reputation.",
      steps: [
        {
          step: "01",
          phase: "STAGE 01",
          title: "Claim Identification & Risk Audit",
          desc: "We catalog every empirical statement, statistic, quote, and historical fact in your book."
        },
        {
          step: "02",
          phase: "STAGE 02",
          title: "Primary Source Cross-Referencing",
          desc: "Researchers verify statements against original academic papers, government archives, and reputable publications."
        },
        {
          step: "03",
          phase: "STAGE 03",
          title: "Citation & Reference Verification",
          desc: "Checking all links, endnotes, and bibliography entries for accuracy and formatting consistency."
        },
        {
          step: "04",
          phase: "STAGE 04",
          title: "Verification Dossier & Sign-Off",
          desc: "Delivery of an itemized verification log with suggested rephrasings and complete source citations."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why authors choose our fact-checking services:",
      cards: [
        {
          num: "01",
          title: "Primary Source Verification",
          desc: "We don't rely on Wikipedia or secondary blogs; we track claims to primary documentation.",
          bullets: [
            "Archival and academic cross-checking",
            "Peer-reviewed study verification",
            "Defamation and legal risk reduction"
          ],
          quote: "Rock-solid evidence that establishes you as an unassailable authority."
        },
        {
          num: "02",
          title: "Fiction Anachronism Scrub",
          desc: "We ensure historical and speculative fiction remains internally consistent and historically accurate.",
          bullets: [
            "Timeline and era consistency",
            "Dialect and technology validation"
          ],
          quote: "Deepens reader immersion by removing jarring historical errors."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher for Fact-Checking",
      points: [
        {
          title: "Dedicated academic and investigative researchers.",
          desc: "Work with experienced researchers skilled in archival cross-referencing and data validation."
        },
        {
          title: "Cross-referencing against primary sources.",
          desc: "We trace statistics and claims back to their origin to prevent perpetuating internet myths."
        },
        {
          title: "Protects author credibility and legal exposure.",
          desc: "Avoid embarrassing public corrections, critical review backlash, and potential legal complications."
        },
        {
          title: "Clear annotation log and verification dossier.",
          desc: "Receive an organized reference dossier proving the veracity of every claim in your manuscript."
        }
      ],
      btnText: "Protect Your Credibility Today",
      authorImg: "/editing/f6b5f830-e715-4f9b-a0fc-fe18a23d97bf 1.png"
    }
  },

  // 12. E-book Design Services
  "ebook-design": {
    slug: "ebook-design",
    name: "E-book Design Services",
    metaTitle: "Professional E-book Design & Cover Services | Fleck Publisher",
    metaDescription: "Elevate your manuscript with custom cover design, professional interior typesetting, and flawless formatting for Kindle, Apple Books, and print editions.",
    hero: {
      badge: "Book Design Services That Get You Noticed",
      title: "for the Bestseller",
      titleHighlight: "Shelf",
      subtitle: "We design covers and interior layouts that command attention, honor genre conventions, and elevate reader engagement across digital and print editions.",
      serviceTag: "E-book Design",
      bgImg: "/design/Container.png",
      showForm: false
    },
    showcase: {
      headline: [
        "A Book Design Studio That",
        "Shapes Covers, Characters,",
        "and Reading Experience"
      ],
      description: "From concept development and digital illustration to precision typography and retail-ready layout templates, our design team ensures your book looks like an instant classic on digital bookshelves and physical displays.",
      btnText: "Get Started",
      collageImg: "/design/Group 104.png"
    },
    manuscript: {
      title: "Submit Your Manuscript",
      subtitle: "From raw text to a stunning visual presentation. Our comprehensive design workflow transforms your manuscript into a beautifully finished book.",
      cards: [
        {
          num: "01",
          title: "Custom Cover Concept Design",
          desc: "We analyze competitive bestsellers in your subgenre to craft bespoke 2D/3D cover concepts with high commercial stopping power."
        },
        {
          num: "02",
          title: "Interior Typesetting & Layout",
          desc: "Professional page typography, running headers, ornamental chapter openers, and balanced leading engineered for effortless readability."
        },
        {
          num: "03",
          title: "Multi-Format eBook Formatting",
          desc: "Reflowable and fixed-layout EPUB files tested rigorously across Kindle Paperwhite, iPad, Kobo, and Android tablets."
        },
        {
          num: "04",
          title: "Print-on-Demand (POD) Jacket Art",
          desc: "Exact spine calculations, bleeds, barcode placement, and CMYK color profiles compliant with Amazon KDP and IngramSpark standards."
        },
        {
          num: "05",
          title: "Custom Character & Scene Art",
          desc: "Original vector and digital illustrations, detailed world maps, chapter heading ornaments, and iconography tailored to your story."
        },
        {
          num: "06",
          title: "Series Branding & Box Sets",
          desc: "Unified aesthetic guidelines, spine alignment systems, and 3D promotional boxset renders to maximize multi-volume read-through."
        }
      ]
    },
    purpleBanner: {
      headline: "Inside Fleck’s Design Studio",
      subheading: "Crafting visual worlds for stories that matter.",
      p1: "Our design team consists of award-winning cover illustrators, senior typographers, and certified prepress specialists. We combine fine art with commercial data to create covers that immediately communicate genre fidelity.",
      p2: "Every design passes through multi-device thumbnail readability tests, color contrast audits, and retail layout proofs. We don't just make pretty books—we engineer visual assets that sell."
    },
    process: {
      badge: "4-STEP WORKFLOW",
      title: "Fleck Publisher’s 4-Step Designing Process",
      subtitle: "A transparent, collaborative creative journey from moodboard conception to print-ready sign-off.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Creative Brief & Moodboard",
          desc: "We dissect your manuscript's themes, genre tropes, and competitor aesthetics to establish three distinct visual directions."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Concept Illustration & Layout",
          desc: "Our artists develop high-resolution cover comps and sample interior chapter spreads for your direct feedback and review."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Typography & Iteration Polish",
          desc: "We fine-tune font hierarchy, title embossing simulations, spine measurements, and back cover copy styling."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Final Export & Retail Validation",
          desc: "Delivery of print-ready PDF/X files, validated EPUBs, source layered assets, and promotional 3D digital mockups."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Fleck Publisher's ebook design services go beyond styles. We believe that your illustrations and covers are venues where art should meet literary mindset and reflect your creative vision with publishing intent. Here's what sets our design work apart:",
      cards: [
        {
          num: "01",
          title: "Designs that attract and retain.",
          desc: "We create visuals that hook attention, stop scrolls, and trigger clicks.",
          bullets: [
            "Covers signal genre and spark curiosity",
            "Layouts guide flow and sharpen readability"
          ],
          quote: "Fleck's design converts."
        },
        {
          num: "02",
          title: "Your imagination, fully visualized",
          desc: "You bring the vision. We translate it visually—start to shelf.",
          bullets: [
            "Moodboards, sketches, and iterations in sync with your brief",
            "Style, tone, and details dialed into your audience"
          ],
          quote: "Style, tone, and details dialed into your audience"
        },
        {
          num: "03",
          title: "Genre-aware, platform-ready design",
          desc: "Fleck's ebook design services, including covers, formatting, and typography layout follow publishing standards.",
          bullets: [
            "Optimized for KDP, Apple Books, and more platforms you approve.",
            "Fixed layout, reflowable, print-ready—all technically locked"
          ],
          quote: "So while your book looks aesthetic, it completely fits where it lives."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher",
      points: [
        {
          title: "Genre-specialized art directors.",
          desc: "Each project is matched with a lead designer immersed in the visual expectations of your specific literary niche."
        },
        {
          title: "Full commercial copyright ownership.",
          desc: "You retain 100% rights to all final cover artwork, typography selections, and interior layout assets."
        },
        {
          title: "Print & digital all-in-one readiness.",
          desc: "Receive both high-resolution print files and optimized digital ebook packages in a single seamless handoff."
        },
        {
          title: "Collaborative revision rounds.",
          desc: "Direct feedback sessions ensure your vision is realized with absolute precision before files are finalized."
        }
      ],
      btnText: "Start Your Design Project",
      authorImg: "/design/Group 92.png"
    }
  },

  // Book Cover Design Services (Design Menu)
  "book-cover-design": {
    slug: "book-cover-design",
    name: "Book Cover Design Services",
    metaTitle: "Book Cover Design Services | Fleck Publisher",
    metaDescription: "Designing beautiful book covers for fiction and non-fiction books. High-resolution, genre-aligned, scroll-stopping cover design from Fleck Publisher.",
    hero: {
      badge: "Designing Beautiful Book Covers for",
      title: "Fiction and Non-",
      titleHighlight: "Fiction Books",
      subtitle: "Readers judge, covers matter, period. Fleck Publisher creates commercially sharp, genre-aligned covers that catch attention, build authority, and automatically bring readers in. We create breathtaking covers, hand-drawn, soft, bold, and minimalist covers for books aimed children, teens, and adults.",
      serviceTag: "Book Cover Design",
      bgImg: "/banners/ChatGPT Image Sep 26, 2026, 02_42_37 AM 1.png",
      showForm: false
    },
    showcase: {
      headline: [
        "Covers That Grab Attention,",
        "Honor Genre Conventions, and",
        "Convert Browsers Into Buyers"
      ],
      description: "Our design team crafts bespoke, high-resolution book covers tailored for Amazon KDP, Apple Books, and worldwide print distribution.",
      btnText: "Start Your Book",
      collageImg: "/design/Group 104.png"
    },
    manuscript: {
      title: "Submit Your Manuscript",
      subtitle: "Share your manuscript, and we'll handle the rest. The journey to becoming a published author begins here!",
      cards: [
        {
          num: "01",
          title: "Scroll-Stopping Cover",
          desc: "We design covers in high-resolution format for KDP, Apple Books, Barnes & Noble."
        },
        {
          num: "02",
          title: "Visual Discovery & Concept Mapping",
          desc: "We review your manuscript, genre, and reader profile to build a cover direction that reflects both tone and positioning."
        },
        {
          num: "03",
          title: "Moodboards, References & Direction Lock",
          desc: "We present visual samples to confirm style—color palette, font family, composition. You lock direction before design begins."
        },
        {
          num: "04",
          title: "Conceptual Cover Drafts",
          desc: "You get 2-3 original cover concepts to review. These aren't templates—they're designed from scratch with your market in mind."
        },
        {
          num: "05",
          title: "Feedback Loop & Iteration",
          desc: "You share thoughts. We revise. We handle multiple rounds to refine the chosen concept into a final, print-ready asset."
        },
        {
          num: "06",
          title: "Book Cover Mockups",
          desc: "Need 3D mockups, social graphics, or ad-ready banners? We also create visual assets aligned with your cover and book promotion goals."
        }
      ]
    },
    purpleBanner: {
      headline: "Inside Fleck’s Cover Design Studio",
      subheading: "Visual Excellence That Sells",
      p1: "Our designers specialize in typography, visual psychology, and commercial marketplace positioning.",
      p2: "Every cover is tested against Amazon search thumbnails and physical bookshelf benchmarks."
    },
    process: {
      badge: "THE AUTHOR'S JOURNEY",
      title: "Our 4-Step Cover Design Process",
      subtitle: "",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Creative Brief & Positioning Call",
          desc: "We begin with a call to define tone, theme, genre standards, and marketing objectives. You'll receive a strategy-based direction document."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Concept Development",
          desc: "Designers explore typography, imagery, color, and layout. We present polished concepts based on moodboards and genre bestsellers."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Selection & Refinement",
          desc: "You select your favorite direction. We refine it through iterative reviews until it's market-ready and visually distinctive."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Final Files & Use-Case Delivery",
          desc: "You receive all final formats—front cover, full wrap, and thumbnails—for use across KDP, Ingram, Apple, and social promotions."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "",
      subtitle: "",
      cards: [
        {
          num: "01",
          title: "Who Should Get Pro Cover Design Help?",
          desc: "",
          bullets: [
            "Authors launching on Amazon or wide platforms",
            "Writers rebranding outdated or DIY covers",
            "First-time authors who want to get it right the first time",
            "Nonfiction authors seeking authority and clarity",
            "Fiction authors needing genre-fit and visual appeal"
          ]
        },
        {
          num: "02",
          title: "What Styles of Book Covers Do We Design?",
          desc: "",
          bullets: [
            "Bold, typography-led covers for business nonfiction",
            "Dramatic, cinematic covers for thrillers and fantasy",
            "Soft, minimalist styles for memoir and poetry",
            "Illustrated covers for children's books and fiction",
            "Clean, authority-driven layouts for self-help books"
          ]
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher's Cover Design Team",
      points: [
        {
          title: "Clarity + Conversion",
          desc: "We design to stand out and sell. Covers are based on genre data, reader psychology, and platform requirements."
        },
        {
          title: "Creative Direction, Not Templates",
          desc: "Our designers build fresh visual systems—no drag-and-drop designs or generic stock images passed off as \"custom.\""
        },
        {
          title: "Real Genre Expertise",
          desc: "We know how fantasy differs from memoir, and what sells in romance vs. business. Each designer brings niche precision."
        }
      ],
      btnText: "Start Your Book",
      authorImg: "/design/Group 92.png"
    }
  },

  // 13. Book Trailer Services
  "book-trailer": {
    slug: "book-trailer",
    name: "Book Trailer Service",
    metaTitle: "Cinematic Book Trailer Production | Fleck Publisher",
    metaDescription: "Turn readers into buyers with high-impact cinematic book trailers, animated teasers, and BookTok promo videos produced for visionary authors.",
    hero: {
      badge: "Book Trailer Service",
      title: "That Sell the",
      titleHighlight: "Story",
      subtitle: "Hook readers within seconds. Our cinematic book trailers combine motion graphics, immersive sound design, and narrative pacing that turn passive scrollers into avid buyers.",
      serviceTag: "Book Trailer",
      bgImg: "/book trailer/Container (1).png",
      showForm: false
    },
    showcase: {
      headline: [
        "A Video Marketing Service",
        "Dedicated for",
        "Authors"
      ],
      description: "Video is the #1 discovery engine on TikTok, Instagram, YouTube, and Amazon. We produce high-converting book trailers tailored specifically for literary algorithms and reader psychology.",
      btnText: "Get Started",
      collageImg: "/book trailer/Group 105.png"
    },
    manuscript: {
      title: "Submit Your Manuscript",
      subtitle: "Translate your written words into an unforgettable cinematic preview that commands attention on modern video platforms.",
      cards: [
        {
          num: "01",
          title: "Teaser Trailers (15-30s)",
          desc: "Fast, punchy video hooks engineered for viral distribution on TikTok, Instagram Reels, and YouTube Shorts."
        },
        {
          num: "02",
          title: "Cinematic Book Trailers (60-90s)",
          desc: "Blockbuster-style narrative previews featuring dramatic pacing, orchestral audio, and Hollywood-level grading."
        },
        {
          num: "03",
          title: "2D/3D Animated Trailers",
          desc: "Dynamic motion graphics, character animation, and CGI effects tailored for fantasy, sci-fi, and children's titles."
        },
        {
          num: "04",
          title: "Author Spotlight Videos",
          desc: "Personalized brand documentaries introducing you to readers, detailing your inspiration, and building authority."
        },
        {
          num: "05",
          title: "Professional Voiceover & Foley",
          desc: "Screen Actors Guild caliber voice talent matched with bespoke cinematic sound design and licensed music tracks."
        },
        {
          num: "06",
          title: "Multi-Aspect Ratio Exports",
          desc: "Final master files delivered in 16:9 widescreen (YouTube/Amazon), 9:16 vertical (Reels/TikTok), and 1:1 square."
        }
      ]
    },
    purpleBanner: {
      headline: "Inside Fleck’s Video Marketing Department",
      subheading: "Turning pages into motion pictures.",
      p1: "Our video production studio consists of cinematic storytellers, video editors, motion graphic artists, and audio engineers who know how to distill a 300-page book into a breathtaking 60-second visual experience.",
      p2: "Every trailer is storyboarded to build tension, establish the narrative stakes, and end with an irresistible call-to-action that drives immediate book pre-orders and retailer sales."
    },
    process: {
      badge: "4-STAGE PIPELINE",
      title: "Our 4-Step Book Trailer Process",
      subtitle: "From script development to multi-channel master delivery in four streamlined phases.",
      steps: [
        {
          step: "01",
          phase: "STAGE 01",
          title: "Scriptwriting & Storyboarding",
          desc: "We extract your book's core emotional beats and craft a cinematic narration script with visual frame concepts."
        },
        {
          step: "02",
          phase: "STAGE 02",
          title: "Asset Curation & Animation",
          desc: "Selection of 4K cinematic footage, 3D book cover rendering, visual effects, and kinetic title sequences."
        },
        {
          step: "03",
          phase: "STAGE 03",
          title: "Voiceover & Audio Mixing",
          desc: "Recording with studio voice actors, layering cinematic music scores, sound effects, and dialogue mastering."
        },
        {
          step: "04",
          phase: "STAGE 04",
          title: "Post-Production & Platform Deliveries",
          desc: "Color grading, aspect ratio optimization for social algorithms, and high-bitrate MP4 deliveries ready to upload."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference",
      subtitle: "Why authors trust our cinematic studio over generic video templates:",
      cards: [
        {
          num: "01",
          title: "Tailored to BookTok & Reels algorithms",
          desc: "We hook viewers in the first 3 seconds with pacing and visual cues proven to boost retention and sharing.",
          bullets: [
            "3-second hook retention science",
            "Kinetic typography for sound-off viewing",
            "High-contrast color profiles"
          ],
          quote: "Trailers that stop the scroll and convert viewers into readers."
        },
        {
          num: "02",
          title: "Broadcast-quality sound design",
          desc: "Audio makes up 50% of the cinematic experience. We use licensed orchestral libraries and studio voice talent.",
          bullets: [
            "Commercial music licensing included",
            "Professional voice actor casting",
            "Dynamic foley and sound effects"
          ],
          quote: "Immersive soundscapes that give readers goosebumps."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck for Book Trailers",
      points: [
        {
          title: "Complete commercial licensing.",
          desc: "All music tracks, voiceover recordings, footage, and graphics come with full commercial rights for lifetime use."
        },
        {
          title: "Multi-platform distribution ready.",
          desc: "We deliver pre-cut vertical 9:16 and horizontal 16:9 versions ready for Amazon, YouTube, Meta, and TikTok."
        },
        {
          title: "Script crafted by published editors.",
          desc: "Our scripts are written by literary professionals who understand narrative tension and reader desires."
        },
        {
          title: "Fast, transparent production pipeline.",
          desc: "Experience milestone reviews at the script, rough cut, and audio mix stages before final master sign-off."
        }
      ],
      btnText: "Create Your Book Trailer",
      authorImg: "/book trailer/image 23.png"
    }
  },

  // 14. E-book Marketing Services
  "ebook-marketing": {
    slug: "ebook-marketing",
    name: "Ebook Marketing Services",
    metaTitle: "Comprehensive Ebook Marketing Services | Fleck Publisher",
    metaDescription: "Accelerate author discovery with targeted Amazon PPC campaigns, BookTok promotion, ARC reviewer outreach, and strategic PR launch plans.",
    hero: {
      badge: "Where your book finds its voice",
      title: "for",
      titleHighlight: "Authors",
      subtitle: "From Amazon optimization to influencer seeding, we position your book where passionate readers actively discover and buy.",
      serviceTag: "Ebook Marketing",
      bgImg: "/marketing/Hero background.png",
      showForm: false
    },
    showcase: {
      headline: [
        "Strategic",
        "Book",
        "Promotion"
      ],
      description: "Every book has an ideal readership waiting to be tapped. Our tailored marketing campaigns leverage data-backed targeting, creator partnerships, and algorithmic momentum to ensure your title gains and sustains visibility.",
      btnText: "Get Started",
      collageImg: "/marketing/Group 95.png"
    },
    manuscript: {
      title: "Submit Your Manuscript for Marketing",
      subtitle: "Scale your book's reach with structured promotional campaigns engineered to convert clicks into sales and loyal fans.",
      cards: [
        {
          num: "01",
          title: "Amazon Ads & Keyword Strategy",
          desc: "Laser-focused keyword bidding, competitor product targeting, and continuous ROAS optimization across Amazon KDP."
        },
        {
          num: "02",
          title: "BookTok & Social Creator Seeding",
          desc: "Curated outreach to bookstagrammers and TikTok creators who generate organic viral excitement in your genre."
        },
        {
          num: "03",
          title: "ARC Reviewer Acquisition",
          desc: "Organized advance review copy distribution to genuine readers to generate verified 5-star reviews on launch week."
        },
        {
          num: "04",
          title: "Author Newsletter & Funnel Setup",
          desc: "Reader-magnet lead generation systems, automated welcome sequences, and email funnels that turn one-time readers into lifelong fans."
        },
        {
          num: "05",
          title: "Press Release & Media Outreach",
          desc: "Targeted pitches to literary podcasts, genre blogs, regional newspapers, and industry publications to boost authority."
        },
        {
          num: "06",
          title: "Price Promotions & Countdown Deals",
          desc: "Strategic countdown promotions, newsletter blasts (BookBub, Freebooksy), and discounted promo pushes for rank spikes."
        }
      ]
    },
    purpleBanner: {
      headline: "Inside Fleck’s Marketing Department",
      subheading: "Data-driven promotion engineered for reader conversion.",
      p1: "Our marketing strategists combine creative storytelling with quantitative ad management. From budget allocation to A/B testing ad copy, we ensure every promotional dollar works toward building your readership.",
      p2: "We believe in sustainable author careers, not temporary blips. Our campaigns build permanent algorithmic momentum that keeps generating royalties month after month."
    },
    process: {
      badge: "THE AUTHOR'S JOURNEY",
      title: "Our 4-Step Marketing Process",
      subtitle: "A proven author launch pipeline designed to maximize visibility and return on investment.",
      steps: [
        {
          step: "01",
          phase: "PHASE 01",
          title: "Audience Profiling & Keyword Research",
          desc: "We analyze reader search queries, competitive title positioning, and category buyer intent to identify high-converting angles."
        },
        {
          step: "02",
          phase: "PHASE 02",
          title: "Creative Assets & Ad Setup",
          desc: "Design high-converting video and banner creatives, craft persuasive ad copy, and configure tracking pixels."
        },
        {
          step: "03",
          phase: "PHASE 03",
          title: "Campaign Launch & Influencer Push",
          desc: "Simultaneous execution across paid search, ARC reviewer syndication, and social channels for maximum launch velocity."
        },
        {
          step: "04",
          phase: "PHASE 04",
          title: "Optimization & Long-Tail Scaling",
          desc: "Continuous negative keyword pruning, budget reallocations to top performers, and ongoing retargeting to maximize lifetime value."
        }
      ]
    },
    difference: {
      badge: "THE DIFFERENCE",
      title: "The Fleck Difference - Marketing",
      subtitle: "Why authors partner with Fleck Publisher for sustainable book sales:",
      cards: [
        {
          num: "01",
          title: "Data-driven audience targeting",
          desc: "No wasted impressions on casual browsers. We pinpoint passionate genre readers with proven buying history.",
          bullets: [
            "Proprietary reader search database",
            "Real-time ACoS & ROAS monitoring",
            "Direct competitor category conquesting"
          ],
          quote: "Every ad dollar is accounted for with clear, measurable conversion metrics."
        },
        {
          num: "02",
          title: "Comprehensive multi-channel synergy",
          desc: "We orchestrate paid ads, organic creator buzz, and PR features into a synchronized discovery wave.",
          bullets: [
            "Coordinated launch week spikes",
            "Amazon algorithm trigger alignment",
            "Permanent backlist sales momentum"
          ],
          quote: "Transforming your book from an unlisted title into an active bestseller."
        },
        {
          num: "03",
          title: "Permanent algorithmic momentum",
          desc: "We optimize backlist metadata and run retargeting to ensure sales continue well past launch week.",
          bullets: [
            "Evergreen keyword maintenance",
            "Consistent review generation",
            "Series read-through funneling"
          ],
          quote: "Built to generate royalties month after month."
        }
      ]
    },
    whyChoose: {
      title: "Why Authors Choose Fleck Publisher's Marketing Services",
      points: [
        {
          title: "Dedicated campaign managers.",
          desc: "Work directly with an experienced book marketing manager who tracks your metrics and reports weekly progress."
        },
        {
          title: "Transparent reporting dashboards.",
          desc: "Access real-time conversion data, impression counts, click-through rates, and exact sales attribution."
        },
        {
          title: "Genuine reader community reach.",
          desc: "Tap into our verified network of thousands of avid book reviewers and genre-enthusiast mailing lists."
        },
        {
          title: "Long-term author platform building.",
          desc: "We don't just sell books—we help you build an email list and loyal reader fan base for future releases."
        }
      ],
      btnText: "Scale Your Book Sales",
      authorImg: "/marketing/why-choose-marketing.png"
    }
  }
,

  // Amazon Book Marketing Services
  "amazon-book-marketing": {
  "slug": "amazon-book-marketing",
  "name": "Amazon Book Marketing Services",
  "metaTitle": "Amazon Book Marketing Services & PPC Ads | Fleck Publisher",
  "metaDescription": "Dominate Amazon Kindle and paperback search rankings. High-ROI Amazon Ads, algorithmic keyword placement, A9 optimization, and bestseller category placement.",
  "hero": {
    "badge": "AMAZON ALGORITHM & PPC MASTERY",
    "title": "Scale Amazon Sales with",
    "titleHighlight": "Targeted Book Marketing",
    "subtitle": "Turn the world's largest bookstore into your 24/7 revenue engine. We optimize your Amazon A9 ranking, manage high-converting Sponsored Ads, and drive organic sales velocity.",
    "serviceTag": "Amazon Marketing",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 04_09_15 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Dominate Amazon Search",
      "And Convert High-Intent",
      "Book Buyers Daily"
    ],
    "description": "Over 70% of book purchases start in the Amazon search bar. We position your title directly in front of active buyers using exact-match keywords, competitor ASIN targeting, and compelling A+ Content.",
    "btnText": "Launch Amazon Campaign",
    "collageImg": "/book trailer & marketing/Group 105.png"
  },
  "manuscript": {
    "title": "Complete Amazon Marketing Protocol",
    "subtitle": "Engineered to maximize return on ad spend and trigger organic Amazon recommendations.",
    "cards": [
      {
        "num": "01",
        "title": "Amazon Sponsored Product Ads",
        "desc": "Precision keyword and competitor ASIN targeting to capture ready-to-buy readers searching your exact subgenre."
      },
      {
        "num": "02",
        "title": "A9 Search Algorithm Optimization",
        "desc": "Backend search term indexing, subtitle optimization, and category architecture to maximize organic discovery."
      },
      {
        "num": "03",
        "title": "Bestseller Category Placement",
        "desc": "Identify low-competition, high-velocity subcategories to secure coveted #1 Bestseller orange ribbons."
      },
      {
        "num": "04",
        "title": "A+ Enhanced Brand Content",
        "desc": "Rich editorial layouts, visual comparison charts, and branded graphics that boost page conversion rates."
      },
      {
        "num": "05",
        "title": "KDP Select & Promo Timing",
        "desc": "Strategic countdown deals and promotional runs timed to trigger Amazon's automated recommendation engines."
      },
      {
        "num": "06",
        "title": "Automated Bid & ACoS Management",
        "desc": "Real-time cost-per-click bid optimization, negative keyword harvesting, and target ACoS threshold management."
      }
    ]
  },
  "purpleBanner": {
    "headline": "The Amazon Marketplace Advantage",
    "subheading": "Data-Driven Amazon Ad Management",
    "p1": "Amazon is not just a storefront—it is an algorithmic search engine. Success depends on understanding keyword bid auctions, conversion relevance, and sales velocity momentum.",
    "p2": "We manage every ad dollar with strict mathematical discipline, ensuring your marketing budget fuels profitable royalty generation instead of wasted clicks."
  },
  "process": {
    "badge": "4-STEP AMAZON PROTOCOL",
    "title": "Our 4-Step Amazon Growth Protocol",
    "subtitle": "How we scale your title from unknown listing to categorical bestseller.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "Keyword & ASIN Research",
        "desc": "We perform exhaustive competitive audits to identify thousands of profitable search terms and competitor ASINs."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Listing Conversion Optimization",
        "desc": "We rewrite your sales copy, optimize backend metadata, and design high-converting A+ Content before launching ads."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "Multi-Tier Ad Campaign Launch",
        "desc": "We launch segmented Sponsored Products, Sponsored Brands, and category lock targeting campaigns."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Scale & Algorithm Triggering",
        "desc": "We prune unprofitable keywords, scale winning targets, and trigger Amazon's 'Frequently Bought Together' engine."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Amazon Advertising",
    "subtitle": "Precision engineering tailored exclusively for commercial book sales.",
    "cards": [
      {
        "num": "01",
        "title": "Dedicated Amazon Ad Specialists",
        "desc": "Your campaign is actively steered by experienced literary advertising specialists.",
        "bullets": [
          "Weekly ACoS and ROAS monitoring",
          "Zero automated 'black-box' ad wasting",
          "Direct campaign manager communication"
        ],
        "quote": "Ad campaigns engineered to generate real book sales, not just vanity impressions."
      },
      {
        "num": "02",
        "title": "Algorithmic Organic Momentum",
        "desc": "We use paid ad velocity to permanently lift your book's organic search rank.",
        "bullets": [
          "High organic search ranking retention",
          "Continuous category bestseller presence"
        ],
        "quote": "Paid ads that kickstart self-sustaining organic sales."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Amazon Marketing",
    "points": [
      {
        "title": "Certified Amazon Advertising specialists.",
        "desc": "Work with team members who manage millions in book ad spend across every major fiction and non-fiction genre."
      },
      {
        "title": "Zero wasted spend through negative keyword filtering.",
        "desc": "We actively block irrelevant search terms daily to ensure every click comes from an interested, qualified book buyer."
      },
      {
        "title": "Category Bestseller badge strategy.",
        "desc": "Our proprietary category analyzer identifies the exact target niches where your book can achieve #1 Bestseller status."
      },
      {
        "title": "Transparent weekly reporting dashboard.",
        "desc": "Receive clear, straightforward metrics detailing impressions, click-through rates, cost per click, and exact royalty ROI."
      }
    ],
    "btnText": "Scale Your Amazon Sales",
    "authorImg": "/marketing/why-choose-marketing.png"
  }
},

  // Author Social Media Campaigns
  "author-social-media": {
  "slug": "author-social-media",
  "name": "Author Social Media Campaigns",
  "metaTitle": "Author Social Media Campaigns & Personal Branding | Fleck Publisher",
  "metaDescription": "Build a devoted reader community across Instagram, Threads, Facebook, and LinkedIn. Strategic author branding, aesthetic feeds, viral reels, and fan engagement.",
  "hero": {
    "badge": "AUTHOR PLATFORM ARCHITECTURE",
    "title": "Cultivate a Devoted",
    "titleHighlight": "Author Community",
    "subtitle": "Transform casual scrollers into loyal superfans. We build, manage, and scale your personal author brand across major social platforms with aesthetic visuals and compelling storytelling.",
    "serviceTag": "Author Social Media",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 04_04_51 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Turn Social Followers",
      "Into Lifelong Loyal",
      "Book Buyers"
    ],
    "description": "Social media for authors is about authentic connection, not pushy sales. We craft immersive storytelling content, behind-the-scenes glimpses, and aesthetic book quotes that build emotional bonds with readers.",
    "btnText": "Grow Author Platform",
    "collageImg": "/book trailer & marketing/Group 116.png"
  },
  "manuscript": {
    "title": "Complete Author Social Media Suite",
    "subtitle": "A comprehensive social presence tailored to your book's unique tone and reader demographic.",
    "cards": [
      {
        "num": "01",
        "title": "Brand Identity & Visual Aesthetic",
        "desc": "Custom color palettes, font pairings, and graphic templates matching your book's thematic genre."
      },
      {
        "num": "02",
        "title": "Monthly Content Calendar & Copy",
        "desc": "Fully scripted posts, engaging captions, hooks, and genre-specific call-to-actions delivered every month."
      },
      {
        "num": "03",
        "title": "Video Reels & Short-Form Edits",
        "desc": "High-retention vertical video edits highlighting book tropes, character aesthetic boards, and quote reveals."
      },
      {
        "num": "04",
        "title": "Community & Reader Engagement",
        "desc": "Proactive interaction with Bookstagrammers, responding to comments, and building genuine reader relationships."
      },
      {
        "num": "05",
        "title": "Lead Magnet & Newsletter Funnel",
        "desc": "Convert social followers into owned email subscribers with irresistible bonus chapters and character art."
      },
      {
        "num": "06",
        "title": "Targeted Meta Ad Amplification",
        "desc": "Precision paid ad funnels on Instagram and Facebook that turn viral posts into direct bookstore preorders."
      }
    ]
  },
  "purpleBanner": {
    "headline": "Authentic Author Brand Building",
    "subheading": "Where Authors Connect with True Fans",
    "p1": "In today's publishing world, publishers and readers look for authors with genuine personal platforms. An engaged social following gives you creative independence and perpetual launch power.",
    "p2": "We handle the design, copywriting, and scheduling so you can focus on writing while your reader community grows on autopilot."
  },
  "process": {
    "badge": "4-STEP SOCIAL BLUEPRINT",
    "title": "Our 4-Step Social Media Blueprint",
    "subtitle": "How we cultivate an active, engaged audience of book lovers around your name.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "Brand Persona & Visual Strategy",
        "desc": "We define your core author pillars, visual aesthetic guidelines, and target reader demographic."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Content Suite Production",
        "desc": "We produce 30 days of high-quality graphics, reels, carousels, and stories tailored to your genre."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "Strategic Publishing & Timing",
        "desc": "We deploy content during peak reader activity hours with optimized hashtags and algorithmic audio."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Audience Funneling & Sales",
        "desc": "We guide engaged followers into your email newsletter and direct bookstore purchase links."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Social Media",
    "subtitle": "Authentic community growth designed specifically for authors.",
    "cards": [
      {
        "num": "01",
        "title": "Literary Culture Insiders",
        "desc": "Our strategists live and breathe Bookstagram, BookTok, and reader communities.",
        "bullets": [
          "Trope-informed creative direction",
          "High-engagement visual aesthetics",
          "Direct fan-to-reader conversion"
        ],
        "quote": "Social media strategies that readers actually enjoy following."
      },
      {
        "num": "02",
        "title": "Hands-Off Author Freedom",
        "desc": "Reclaim your writing time while your online presence expands effortlessly.",
        "bullets": [
          "Done-for-you monthly scheduling",
          "Comprehensive analytics reporting"
        ],
        "quote": "Spend your time writing the next book while we build your audience."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Social Media",
    "points": [
      {
        "title": "Genre-fluent social media managers.",
        "desc": "Work with creators who understand reader psychology in romance, fantasy, thriller, sci-fi, and non-fiction."
      },
      {
        "title": "Stunning aesthetic designs.",
        "desc": "Every visual asset is crafted by professional graphic artists using bespoke typography and cinematic imagery."
      },
      {
        "title": "Focus on real email and book conversions.",
        "desc": "We don't chase hollow follower counts—we focus on turning followers into buyers and email list subscribers."
      },
      {
        "title": "Hands-off author peace of mind.",
        "desc": "Enjoy a consistent, daily social media presence without spending hours glued to your phone screen."
      }
    ],
    "btnText": "Build Your Author Platform",
    "authorImg": "/marketing/why-choose-marketing.png"
  }
},

  // Book Launch Services
  "book-launch": {
  "slug": "book-launch",
  "name": "Book Launch Services",
  "metaTitle": "Strategic Book Launch Services & Campaign Management | Fleck Publisher",
  "metaDescription": "Execute a high-impact, bestseller book launch. Coordinated ARC reviews, countdown promotions, media blasts, and launch-day sales velocity orchestration.",
  "hero": {
    "badge": "LAUNCH DAY EXCELLENCE",
    "title": "Orchestrate an Unforgettable",
    "titleHighlight": "Bestseller Book Launch",
    "subtitle": "Your launch window determines your book's algorithmic future. We engineer end-to-end launch campaigns that flood day-one sales, activate ARC teams, and secure top rankings.",
    "serviceTag": "Book Launch Services",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 04_12_33 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Ignite Day-One Sales",
      "And Build Unstoppable",
      "Publishing Momentum"
    ],
    "description": "A successful launch isn't an accident—it's a military-grade timeline of synchronized promotions. From early ARC recruitment to launch-day blitzes, we make sure your title explodes onto the market.",
    "btnText": "Plan Your Book Launch",
    "collageImg": "/book trailer & marketing/Group 110.png"
  },
  "manuscript": {
    "title": "Comprehensive Launch Architecture",
    "subtitle": "Synchronizing every marketing channel for maximum day-one sales velocity.",
    "cards": [
      {
        "num": "01",
        "title": "Pre-Order Strategy & Bonuses",
        "desc": "Design high-converting pre-order incentive funnels and landing pages that lock in early sales volume."
      },
      {
        "num": "02",
        "title": "ARC Street Team Management",
        "desc": "Recruit, distribute, and follow up with early reviewers to guarantee dozens of launch-day Amazon reviews."
      },
      {
        "num": "03",
        "title": "Launch Week Multi-Channel Push",
        "desc": "Coordinated email blasts, ad surges, and creator partnerships scheduled to peak on release day."
      },
      {
        "num": "04",
        "title": "Amazon Algorithm Triggering",
        "desc": "Pacing sales volume to trigger Amazon's 'Movers & Shakers' and 'Hot New Releases' recommendation engines."
      },
      {
        "num": "05",
        "title": "Virtual Launch Events & Giveaways",
        "desc": "Coordinate online launch events, live author Q&As, and viral giveaways that rally reader enthusiasm."
      },
      {
        "num": "06",
        "title": "Post-Launch Momentum Retention",
        "desc": "Maintain sales velocity well past release day with price drops, ad scale, and newsletter promos."
      }
    ]
  },
  "purpleBanner": {
    "headline": "The Science of Launch Velocity",
    "subheading": "Maximum Impact During the Critical 30-Day Window",
    "p1": "Online retailer algorithms heavily reward books that demonstrate rapid, concentrated sales velocity in their first 30 days. That initial burst of activity earns evergreen algorithmic recommendations.",
    "p2": "Our launch strategists ensure every promotional channel—ads, emails, reviews, and PR—fires simultaneously for maximum market impact."
  },
  "process": {
    "badge": "4-STEP LAUNCH ROADMAP",
    "title": "Our 4-Step Book Launch Roadmap",
    "subtitle": "A proven timeline that turns years of writing into a celebratory, profitable release day.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "90-Day Pre-Launch Setup",
        "desc": "Establish pre-order listings, build the ARC team, and finalize the multi-channel promotional calendar."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "ARC Reviewer Activation",
        "desc": "Deliver advance reading copies, monitor reading completion, and prepare launch-day review blasts."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "Launch Day Blitzkrieg",
        "desc": "Synchronize ad spend, creator shoutouts, newsletter blasts, and live events on official release day."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Post-Launch Rank Sustaining",
        "desc": "Harvest verified reviews, scale profitable ad targets, and sustain Top 100 category rankings."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Book Launches",
    "subtitle": "Proven methodologies that deliver measurable bestseller results.",
    "cards": [
      {
        "num": "01",
        "title": "Bestseller Rank Track Record",
        "desc": "We have steered hundreds of independent titles to #1 category rankings.",
        "bullets": [
          "Coordinated sales pacing strategy",
          "High day-one review counts",
          "Top-tier category placements"
        ],
        "quote": "Launches engineered for maximum commercial impact."
      },
      {
        "num": "02",
        "title": "End-to-End Campaign Direction",
        "desc": "Never wonder what to do next—we guide you through every milestone.",
        "bullets": [
          "Detailed weekly action plans",
          "Full technical setup handled"
        ],
        "quote": "Complete peace of mind on the most important day of your book's life."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Book Launches",
    "points": [
      {
        "title": "Proven bestseller launch methodologies.",
        "desc": "Our strategic launch plans have repeatedly placed authors onto Amazon Top 100 and Category #1 Bestseller lists."
      },
      {
        "title": "Full-service project management.",
        "desc": "We manage every moving part—ads, ARC teams, email promotions, and metadata—so you can celebrate your release."
      },
      {
        "title": "Access to verified reader networks.",
        "desc": "Tap into our proprietary reader databases and newsletter partner networks with over 50,000 active book buyers."
      },
      {
        "title": "Post-launch sustainability focus.",
        "desc": "We don't abandon your book after release week; we implement retargeting strategies to keep sales humming for months."
      }
    ],
    "btnText": "Book Your Launch Strategy",
    "authorImg": "/marketing/why-choose-marketing.png"
  }
},

  // TikTok & Reels Strategy
  "tiktok-reels-strategy": {
  "slug": "tiktok-reels-strategy",
  "name": "TikTok & Reels Strategy",
  "metaTitle": "BookTok & Reels Marketing Strategy for Authors | Fleck Publisher",
  "metaDescription": "Go viral on BookTok and Instagram Reels. Aesthetic video hooks, trending audio curation, BookTok creator partnerships, and short-form video production.",
  "hero": {
    "badge": "BOOKTOK & SHORT-FORM VIRALITY",
    "title": "Explode on BookTok With",
    "titleHighlight": "Viral Video Strategy",
    "subtitle": "BookTok drives more book sales today than traditional media combined. We create high-engagement short-form video hooks, trending audio alignments, and aesthetic edits that sell books.",
    "serviceTag": "TikTok & Reels",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 04_19_43 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Master The Algorithm",
      "And Turn 15 Seconds",
      "Into 15,000 Book Sales"
    ],
    "description": "Readers on TikTok and Reels crave emotional tropes, jaw-dropping quotes, and atmospheric vibes. Our creative strategists craft thumb-stopping video concepts engineered specifically for literary virality.",
    "btnText": "Go Viral on BookTok",
    "collageImg": "/book trailer & marketing/Group 112.png"
  },
  "manuscript": {
    "title": "Complete BookTok & Reels Package",
    "subtitle": "Short-form video assets engineered to stop readers mid-scroll and drive impulse purchases.",
    "cards": [
      {
        "num": "01",
        "title": "Trope-Driven Video Concepts",
        "desc": "Hook readers using proven BookTok themes: enemies-to-lovers, morally gray antiheroes, and betrayal."
      },
      {
        "num": "02",
        "title": "Trending Audio & Hook Matching",
        "desc": "Real-time monitoring of trending sounds to capitalize on algorithmic discovery waves before they peak."
      },
      {
        "num": "03",
        "title": "Aesthetic B-Roll & Visual Edits",
        "desc": "High-definition cinematic footage, moody typography, and dynamic transitions that mesmerize viewers."
      },
      {
        "num": "04",
        "title": "BookTok Influencer Gifting",
        "desc": "Seed physical PR boxes and digital ARCs to vetted BookTok creators with demonstrated conversion records."
      },
      {
        "num": "05",
        "title": "Bio Link Funnel Optimization",
        "desc": "Transform casual video viewers into immediate Amazon and bookstore sales with frictionless bio funnels."
      },
      {
        "num": "06",
        "title": "TikTok Spark Ads Management",
        "desc": "Amplify high-performing organic videos with targeted Spark Ads to scale views into millions of impressions."
      }
    ]
  },
  "purpleBanner": {
    "headline": "The Power of the BookTok Phenomenon",
    "subheading": "Where Books Become Overnight Sensations",
    "p1": "BookTok has completely revolutionized the commercial book industry. A single 15-second viral video can catapult a self-published novel to the top of the New York Times Bestseller list overnight.",
    "p2": "We know the exact tropes, visual language, and emotional pacing required to make modern readers obsess over your book."
  },
  "process": {
    "badge": "4-STEP VIRAL PROTOCOL",
    "title": "Our 4-Step Viral Video Protocol",
    "subtitle": "From script hook to million-view algorithmic scale.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "Trope & Quote Extraction",
        "desc": "We analyze your manuscript to isolate the most dramatic, emotional, and quotable scenes."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Vertical Video Production",
        "desc": "We edit custom 9:16 vertical videos with atmospheric music, kinetic text, and aesthetic B-roll."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "Strategic Hashtags & Timing",
        "desc": "We post during high-traffic reader windows using community hashtags like #BookTok and genre tags."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Paid Spark Ad Scaling",
        "desc": "When an organic video shows high engagement, we immediately boost it with targeted ad spend."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for TikTok & Reels",
    "subtitle": "Native creators who know exactly how BookTok thinks.",
    "cards": [
      {
        "num": "01",
        "title": "Native Short-Form Creators",
        "desc": "We don't repurpose dry corporate ads—our videos look and feel 100% native to the platform.",
        "bullets": [
          "Authentic reader aesthetic",
          "High audio and visual retention",
          "Proven viral hook templates"
        ],
        "quote": "Videos designed to provoke intense emotional reader reactions."
      },
      {
        "num": "02",
        "title": "Creator Network Seeding",
        "desc": "Put your book directly in front of thousands of active BookTok content creators.",
        "bullets": [
          "Direct PR unboxing campaigns",
          "Verified creator shoutouts"
        ],
        "quote": "Word-of-mouth momentum scaled across hundreds of creator accounts."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for TikTok & Reels",
    "points": [
      {
        "title": "Deep immersion in BookTok trends.",
        "desc": "Our team tracks trending sounds and memes daily, ensuring your book rides the newest algorithmic waves."
      },
      {
        "title": "High-converting visual aesthetic.",
        "desc": "Every clip is edited with cinematic color grading, moody typography, and audio synchronization that captivates viewers."
      },
      {
        "title": "Direct partnerships with literary influencers.",
        "desc": "We connect your title with respected BookTok creators who produce genuine reaction and unboxing videos."
      },
      {
        "title": "Full end-to-end video delivery.",
        "desc": "Receive ready-to-publish vertical video files with pre-written captions, hooks, and hashtag recommendations."
      }
    ],
    "btnText": "Launch Your BookTok Campaign",
    "authorImg": "/marketing/why-choose-marketing.png"
  }
},

  // Influencer & Reviewer Outreach
  "influencer-reviewer-outreach": {
  "slug": "influencer-reviewer-outreach",
  "name": "Influencer & Reviewer Outreach",
  "metaTitle": "Book Influencer & Reviewer Outreach Services | Fleck Publisher",
  "metaDescription": "Get your book into the hands of top BookTubers, Bookstagrammers, and verified Amazon/Goodreads reviewers. Authentic reviews, social buzz, and ARC distribution.",
  "hero": {
    "badge": "EARNED MEDIA & INFLUENCE",
    "title": "Secure Authentic Buzz With",
    "titleHighlight": "Influencer & Reviewer Outreach",
    "subtitle": "Social proof sells books. We connect your title with respected Bookstagrammers, BookTubers, and verified Amazon reviewers who generate genuine recommendations and word-of-mouth buzz.",
    "serviceTag": "Influencer Outreach",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 04_19_58 AM (1) 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Build Credibility",
      "With Trusted Voices In",
      "Your Exact Book Genre"
    ],
    "description": "Nothing influences a book buyer faster than a heartfelt recommendation from their favorite creator. We manage all direct outreach, ARC delivery, and review tracking across the global literary community.",
    "btnText": "Get Verified Reviews",
    "collageImg": "/book trailer & marketing/Group 118.png"
  },
  "manuscript": {
    "title": "Complete Influencer Outreach Suite",
    "subtitle": "Connecting your book with trusted literary tastemakers and passionate book reviewers.",
    "cards": [
      {
        "num": "01",
        "title": "Vetted Creator Matching",
        "desc": "Handpick reviewers who actively read, review, and champion books in your exact subgenre."
      },
      {
        "num": "02",
        "title": "Digital ARC Distribution",
        "desc": "Secure, watermarked Advance Reader Copy distribution via NetGalley and private reviewer portals."
      },
      {
        "num": "03",
        "title": "Custom PR Box Seeding",
        "desc": "Design and ship bespoke unboxing packages with branded swag that creators love to showcase."
      },
      {
        "num": "04",
        "title": "Amazon & Goodreads Review Tracking",
        "desc": "Systematic follow-up to ensure compliance with FTC guidelines and timely review postings."
      },
      {
        "num": "05",
        "title": "Bookstagram Tour Coordination",
        "desc": "Synchronize a 7-day or 14-day book tour across Instagram featuring unique photo reviews daily."
      },
      {
        "num": "06",
        "title": "Editorial Quote Extraction",
        "desc": "Harvest standout influencer quotes for use on your book cover, Amazon listing, and marketing ads."
      }
    ]
  },
  "purpleBanner": {
    "headline": "The Power of Genuine Social Proof",
    "subheading": "Organic Word-of-Mouth That Converts",
    "p1": "Paid ads bring attention, but reviews close the sale. Readers trust recommendations from their favorite Bookstagram and BookTube creators far more than conventional advertising.",
    "p2": "We manage all the tedious pitching, follow-up messages, and shipping logistics so your book arrives seamlessly in front of influential reviewers."
  },
  "process": {
    "badge": "4-STEP OUTREACH SYSTEM",
    "title": "Our 4-Step Reviewer Outreach System",
    "subtitle": "How we turn book bloggers and creators into passionate champions for your title.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "Curated Reviewer Shortlist",
        "desc": "We curate a targeted database of 50-200 micro and macro book influencers in your exact genre."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Personalized Pitch Campaign",
        "desc": "We craft individualized pitches highlighting your book's core tropes, hooks, and themes."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "ARC Fulfillment & Tracking",
        "desc": "We distribute digital ARCs or ship physical PR packages with unboxing instructions."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Review Aggregation & Repurposing",
        "desc": "We track live reviews on Amazon and Goodreads and extract golden quotes for your ads."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Reviewer Outreach",
    "subtitle": "100% compliant, organic reviews from real book lovers.",
    "cards": [
      {
        "num": "01",
        "title": "Strict Amazon & FTC Compliance",
        "desc": "All reviews are genuine, voluntary, and fully compliant with retailer guidelines.",
        "bullets": [
          "Zero purchased or synthetic reviews",
          "Transparent reviewer disclosures",
          "Long-term listing safety"
        ],
        "quote": "Honest reviews that build permanent credibility."
      },
      {
        "num": "02",
        "title": "High Response & Completion Rates",
        "desc": "Our established relationships ensure high creator response and review completion.",
        "bullets": [
          "Pre-vetted active reviewer lists",
          "Professional follow-up cadence"
        ],
        "quote": "No ghosting—only dependable, verified review delivery."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Influencer Outreach",
    "points": [
      {
        "title": "Direct access to thousands of literary influencers.",
        "desc": "Tap into our pre-vetted network of trusted Bookstagrammers, BookTubers, and Goodreads top reviewers."
      },
      {
        "title": "100% authentic, organic reviews.",
        "desc": "We strictly uphold Amazon and FTC guidelines, ensuring your reviews are safe, verified, and permanent."
      },
      {
        "title": "Comprehensive campaign management.",
        "desc": "From initial pitch to ARC tracking and follow-up reminders, our publicists handle every detail."
      },
      {
        "title": "Detailed review reporting dashboard.",
        "desc": "Receive a compiled spreadsheet of all published reviews, social media post links, and reader engagement stats."
      }
    ],
    "btnText": "Ignite Reviewer Momentum",
    "authorImg": "/marketing/why-choose-marketing.png"
  }
},

  // Book PR
  "book-pr": {
  "slug": "book-pr",
  "name": "Book PR",
  "metaTitle": "Author Book PR & Media Relations Agency | Fleck Publisher",
  "metaDescription": "Secure mainstream media coverage, podcast interviews, literary magazine features, and prestigious press releases with Fleck Publisher's Book PR team.",
  "hero": {
    "badge": "AUTHOR AUTHORITY & PRESS",
    "title": "Amplify Your Voice With",
    "titleHighlight": "Elite Book PR & Media",
    "subtitle": "Command the spotlight. We pitch your book to top literary journalists, national podcast hosts, digital magazines, and news outlets to establish you as a premier authority in your field.",
    "serviceTag": "Book PR Services",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 04_20_23 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Command Media Attention",
      "And Cement Your Author",
      "Authority Worldwide"
    ],
    "description": "Great PR transforms a book into a cultural talking point. Our publicists position your book's core themes into timely news hooks that journalists, editors, and podcast hosts love to cover.",
    "btnText": "Secure Press Coverage",
    "collageImg": "/book trailer & marketing/Group 111.png"
  },
  "manuscript": {
    "title": "Comprehensive Media & PR Suite",
    "subtitle": "Elevating your book from an unheralded release to a nationally recognized literary feature.",
    "cards": [
      {
        "num": "01",
        "title": "Press Release Crafting & Syndication",
        "desc": "Professionally written press releases syndicated to AP, Reuters, and over 400 national news portals."
      },
      {
        "num": "02",
        "title": "Top-Tier Podcast Booking",
        "desc": "Pitch and secure guest interview spots on high-listenership podcasts in your book's niche."
      },
      {
        "num": "03",
        "title": "Digital Magazine & Blog Placement",
        "desc": "Feature articles, author Q&As, and guest op-eds placed in respected online publications."
      },
      {
        "num": "04",
        "title": "Media Kit & Author EPK",
        "desc": "Bespoke Electronic Press Kit containing high-res headshots, author bio, sample Q&As, and book synopsis."
      },
      {
        "num": "05",
        "title": "Local & Regional Media Outreach",
        "desc": "Hometown newspaper features, local TV morning shows, and regional bookstore event promotion."
      },
      {
        "num": "06",
        "title": "Media Training & Interview Prep",
        "desc": "Prep calls with media experts to sharpen your talking points, soundbites, and delivery."
      }
    ]
  },
  "purpleBanner": {
    "headline": "Establish Unshakeable Literary Authority",
    "subheading": "Where Authors Become Industry Voices",
    "p1": "In a crowded market, media appearances separate hobbyist writers from career authors. Press coverage builds instant prestige, improves Google search rankings, and opens doors to lucrative speaking opportunities.",
    "p2": "Our publicists know how to craft timely news angles that journalists cannot resist, turning your book into a must-read cultural story."
  },
  "process": {
    "badge": "4-STEP PR CAMPAIGN",
    "title": "Our 4-Step Media & PR Campaign",
    "subtitle": "How we secure high-profile press coverage and broadcast interviews.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "News Hook & Angle Development",
        "desc": "We analyze current cultural trends to craft irresistible editorial angles around your book."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Electronic Press Kit (EPK)",
        "desc": "We design a publication-ready media kit with your bio, sample questions, and book excerpts."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "Direct Journalist Pitching",
        "desc": "We pitch television producers, podcast hosts, and magazine editors with tailored messages."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Interview Prep & Media Syndication",
        "desc": "We prepare you for live interviews and amplify published press across all social channels."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Literary PR",
    "subtitle": "Established relationships with editors, producers, and journalists.",
    "cards": [
      {
        "num": "01",
        "title": "Real Media Relationships",
        "desc": "We do not blast cold spam lists—we pitch directly to journalists who trust our talent.",
        "bullets": [
          "Tailored editorial pitches",
          "High media open and reply rates",
          "National and regional media outlets"
        ],
        "quote": "Press coverage that positions you as an industry authority."
      },
      {
        "num": "02",
        "title": "Evergreen SEO & Author Brand",
        "desc": "Press articles create high-authority Google backlinks that pay dividends for years.",
        "bullets": [
          "Permanent digital press clippings",
          "Enhanced author Google Knowledge Panel"
        ],
        "quote": "Authority that endures well beyond launch week."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Book PR",
    "points": [
      {
        "title": "Seasoned literary publicists.",
        "desc": "Work with PR professionals who have placed authors in major news outlets, literary magazines, and top podcasts."
      },
      {
        "title": "Tailored newsworthy angles.",
        "desc": "We find the compelling human-interest hook that makes journalists eager to share your story."
      },
      {
        "title": "Permanent author authority.",
        "desc": "Media features establish high-authority backlinks and credibility that benefit every future book you write."
      },
      {
        "title": "Comprehensive interview prep.",
        "desc": "We coach you through mock interview sessions so you feel completely confident speaking to the press."
      }
    ],
    "btnText": "Elevate Your Public Profile",
    "authorImg": "/marketing/why-choose-marketing.png"
  }
},

  // Teaser Trailers
  "teaser-trailers": {
  "slug": "teaser-trailers",
  "name": "Teaser Trailers",
  "metaTitle": "Cinematic Book Teaser Trailers (15-30s) | Fleck Publisher",
  "metaDescription": "High-impact, rapid-fire 15-30 second book teaser trailers designed for Instagram Reels, TikTok, YouTube Shorts, and Amazon video ads.",
  "hero": {
    "badge": "HIGH-IMPACT MICRO VIDEO",
    "title": "Hook Readers in Seconds with",
    "titleHighlight": "Cinematic Teaser Trailers",
    "subtitle": "Grab attention before viewers can scroll away. Our 15-30 second teaser trailers deliver rapid-cut visuals, heart-pounding audio, and irresistible cliffhanger hooks built for social video feeds.",
    "serviceTag": "Teaser Trailers",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 02_34_40 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Stop The Endless Scroll",
      "With Adrenaline-Packed",
      "Micro Book Teasers"
    ],
    "description": "In the era of micro-attention spans, a teaser trailer doesn't summarize your book—it gives readers an adrenaline shock. Designed specifically for vertical formats, our teasers ignite curiosity and drive clicks.",
    "btnText": "Order A Teaser Trailer",
    "collageImg": "/book trailer & marketing/Group 108.png"
  },
  "manuscript": {
    "title": "Complete Micro-Teaser Package",
    "subtitle": "Ultra-fast paced video designed for maximum viewer completion and social sharing.",
    "cards": [
      {
        "num": "01",
        "title": "Rapid 15-30 Second Pacing",
        "desc": "Optimized length engineered for 100% completion rates and social platform algorithms."
      },
      {
        "num": "02",
        "title": "Vertical 9:16 & Horizontal 16:9",
        "desc": "Delivered in dual formats ready for TikTok, Instagram Reels, YouTube Shorts, and web banners."
      },
      {
        "num": "03",
        "title": "High-Impact Kinetic Typography",
        "desc": "Bold animated text overlays highlighting your book's most punchy quotes and tropes."
      },
      {
        "num": "04",
        "title": "Pounding Rhythmic Audio Sync",
        "desc": "Visual cuts synchronized frame-by-frame to dramatic percussion and orchestral bass drops."
      },
      {
        "num": "05",
        "title": "Instant Call-To-Action Finale",
        "desc": "Clear, compelling book title reveal and 'Available Now on Amazon' purchase prompt."
      },
      {
        "num": "06",
        "title": "Optimized for Muted Auto-Play",
        "desc": "Dynamic subtitles and visual storytelling that compel engagement even with sound turned off."
      }
    ]
  },
  "purpleBanner": {
    "headline": "The Art of the 15-Second Hook",
    "subheading": "Stopping Power in the Modern Feeds",
    "p1": "Over 65% of mobile video viewers decide whether to keep watching in the first 2.5 seconds. A great book teaser does not tell the whole story; it poses an irresistible question that only your book can answer.",
    "p2": "Our video editors combine rapid-cut cinematic stock, atmospheric sound effects, and kinetic text to make your book look like an upcoming blockbuster."
  },
  "process": {
    "badge": "4-STEP TEASER CREATION",
    "title": "Our 4-Step Teaser Creation Process",
    "subtitle": "From script hook to viral-ready video in days.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "Micro-Hook Concepting",
        "desc": "Select the 2-3 most intense scenes, quotes, and themes from your manuscript."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Visual Asset Assembly",
        "desc": "Curate high-octane 4K stock footage, 3D book renders, and atmospheric textures."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "Rhythmic Editing & Sound FX",
        "desc": "Precision editing with intense audio transitions, risers, and impact hits."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Multi-Format Export & Mastering",
        "desc": "Deliver 4K files encoded for maximum visual clarity on mobile screens."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Teaser Trailers",
    "subtitle": "Engineered specifically for short-form social video conversion.",
    "cards": [
      {
        "num": "01",
        "title": "Algorithm-Ready Formats",
        "desc": "Delivered pre-formatted for TikTok, Reels, YouTube Shorts, and Amazon video ads.",
        "bullets": [
          "Flawless 9:16 vertical exports",
          "Muted audio visual readability",
          "Zero black bars or distortion"
        ],
        "quote": "Turn scrollers into clicks within 15 seconds."
      },
      {
        "num": "02",
        "title": "Commercial Royalty Licensing",
        "desc": "Every track, sound effect, and video clip is 100% commercially cleared.",
        "bullets": [
          "No copyright strikes on YouTube/Meta",
          "Unrestricted paid ad usage rights"
        ],
        "quote": "Run high-budget ads without copyright worry."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Teaser Trailers",
    "points": [
      {
        "title": "Engineered for high social conversion.",
        "desc": "Our teaser trailers are calibrated for maximum click-through rates on TikTok, Instagram, and Amazon."
      },
      {
        "title": "Rapid turnaround times.",
        "desc": "Receive your draft within days so you can capitalize on launch milestones and promotional dates."
      },
      {
        "title": "Full commercial music licensing included.",
        "desc": "Never worry about copyright strikes or muted audio; every track includes full commercial advertising rights."
      },
      {
        "title": "Complimentary 3D book mockup.",
        "desc": "Every teaser features a photorealistic 3D rendering of your paperback and hardcover in the final title card."
      }
    ],
    "btnText": "Create Your Teaser Today",
    "authorImg": "/book trailer/image 23.png"
  }
},

  // Scriptwriting & storyboarding
  "scriptwriting-storyboarding": {
  "slug": "scriptwriting-storyboarding",
  "name": "Scriptwriting & storyboarding",
  "metaTitle": "Book Trailer Scriptwriting & Storyboarding Services | Fleck Publisher",
  "metaDescription": "Transform your book into a cinematic visual screenplay. Professional Hollywood-caliber scriptwriting, visual beat mapping, and detailed storyboards.",
  "hero": {
    "badge": "CINEMATIC NARRATIVE ARCHITECTURE",
    "title": "Translate Your Manuscript into",
    "titleHighlight": "Hollywood-Grade Storyboards",
    "subtitle": "Every legendary trailer starts with an unforgettable screenplay. Our experienced screenwriters condense your 80,000-word book into a 60-second visual masterpiece with suspenseful pacing.",
    "serviceTag": "Script & Storyboarding",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 02_08_49 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Structure The Tension",
      "Map Every Visual Frame",
      "Before Production Begins"
    ],
    "description": "A book trailer is cinema in miniature. We analyze your manuscript's dramatic arc, isolate its emotional core, and draft a production-ready script with frame-by-frame visual storyboards.",
    "btnText": "Develop Your Script",
    "collageImg": "/book trailer & marketing/Group 109.png"
  },
  "manuscript": {
    "title": "Complete Script & Storyboard Blueprint",
    "subtitle": "From raw narrative ideas to a comprehensive, second-by-second production screenplay.",
    "cards": [
      {
        "num": "01",
        "title": "Dramatic Beat Sheet Formulation",
        "desc": "Three-act trailer structure: hook, escalation of conflict, and climactic question."
      },
      {
        "num": "02",
        "title": "Voiceover Screenplay Writing",
        "desc": "Punchy, poetic narration dialogue written specifically for professional voice actors."
      },
      {
        "num": "03",
        "title": "Frame-by-Frame Visual Storyboard",
        "desc": "Detailed visual sketches and style references illustrating camera angles and motion."
      },
      {
        "num": "04",
        "title": "Audio & Music Direction Notes",
        "desc": "Explicit timing cues for sound effects, orchestral swells, and moments of silence."
      },
      {
        "num": "05",
        "title": "Pacing & Duration Calibration",
        "desc": "Exact second-by-second breakdown ensuring optimal engagement across 30, 60, or 90 seconds."
      },
      {
        "num": "06",
        "title": "Author Collaborative Revision",
        "desc": "Round-table revisions ensuring every character nuance matches your creative vision."
      }
    ]
  },
  "purpleBanner": {
    "headline": "The Blueprint of Visual Storytelling",
    "subheading": "Where Literature Meets Cinematography",
    "p1": "A great book does not automatically make a great video—it must be translated into the visual and auditory language of film. Storyboarding prevents costly production mistakes and guarantees a polished result.",
    "p2": "We work directly with you to ensure your core characters, atmospheric world-building, and central conflicts are portrayed with cinematic authenticity."
  },
  "process": {
    "badge": "4-STEP SCRIPTING WORKFLOW",
    "title": "Our 4-Step Scripting & Storyboarding Workflow",
    "subtitle": "How we condense your novel into a cinematic screenplay.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "Manuscript Intake & Core Theme Mining",
        "desc": "Analyze your book's primary conflict, central characters, and high-stakes stakes."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Drafting The Voiceover Screenplay",
        "desc": "Write 2-3 unique script angles for author review and selection."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "Comprehensive Storyboard Creation",
        "desc": "Map every scene with visual references, typography placement, and transitions."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Production Blueprint Sign-Off",
        "desc": "Finalize the approved blueprint, ready for filming, animation, or 3D editing."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Scriptwriting",
    "subtitle": "Screenwriters with credits across literature, film, and media.",
    "cards": [
      {
        "num": "01",
        "title": "Literary Screenwriting Specialists",
        "desc": "Our writers specialize in the exact craft of book-to-trailer adaptation.",
        "bullets": [
          "Emotional punch in every line",
          "Elimination of plot confusion",
          "Irresistible cliffhanger conclusions"
        ],
        "quote": "Scripts that leave viewers desperate to read chapter one."
      },
      {
        "num": "02",
        "title": "Visual Director Communication",
        "desc": "Storyboards formatted to seamlessly guide animators, video editors, and voice talent.",
        "bullets": [
          "Clear visual camera angles",
          "Frame-by-frame timing cues"
        ],
        "quote": "Eliminate costly trial-and-error in video editing."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Scriptwriting",
    "points": [
      {
        "title": "Experienced literary screenwriters.",
        "desc": "Work with writers who know how to condense complex 500-page worlds into 60 seconds of pure intrigue."
      },
      {
        "title": "Collaborative revision process.",
        "desc": "We listen to your feedback and refine the narration until every word matches your author vision."
      },
      {
        "title": "Comprehensive visual storyboards.",
        "desc": "See exactly what your trailer will look like before entering the editing suite."
      },
      {
        "title": "Seamless transition into production.",
        "desc": "Your finalized script moves directly into voice recording and video production with zero delay."
      }
    ],
    "btnText": "Commission Your Script",
    "authorImg": "/book trailer/image 23.png"
  }
},

  // Voiceover & Music
  "voiceover-music": {
  "slug": "voiceover-music",
  "name": "Voiceover & Music",
  "metaTitle": "Professional Voiceover & Cinematic Music Scoring | Fleck Publisher",
  "metaDescription": "Hollywood voice actors, custom orchestral composition, and immersive sound effects design for author trailers, audiobooks, and video ads.",
  "hero": {
    "badge": "ACOUSTIC MASTERY & SCORING",
    "title": "Immerse Your Readers With",
    "titleHighlight": "Elite Voiceover & Music",
    "subtitle": "Sound is 50% of the cinematic experience. We pair your book trailer with premier voice talent, custom orchestral scoring, and spine-chilling sound effects that captivate listener imagination.",
    "serviceTag": "Voiceover & Music",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 02_05_46 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Bring Words To Life",
      "With Powerful Narration",
      "And Orchestral Emotion"
    ],
    "description": "The right voice actor creates an instant emotional connection. Paired with custom theatrical music scoring and immersive audio design, your story resonates deep in the listener's core.",
    "btnText": "Explore Audio Talent",
    "collageImg": "/book trailer & marketing/Group 115.png"
  },
  "manuscript": {
    "title": "Complete Audio & Acoustic Production",
    "subtitle": "Studio-mastered voice narration and custom orchestral soundtracks that give readers chills.",
    "cards": [
      {
        "num": "01",
        "title": "Diverse Global Voice Roster",
        "desc": "Hundreds of SAG-AFTRA and seasoned voice actors across accents, ages, and vocal tones."
      },
      {
        "num": "02",
        "title": "Custom Theatrical Orchestral Scoring",
        "desc": "Bespoke musical compositions ranging from intimate piano melodies to thunderous epic brass."
      },
      {
        "num": "03",
        "title": "Foley & Cinematic Sound Effects",
        "desc": "Immersive sword clangs, magic whooshes, whispers, thunderclaps, and monster roars."
      },
      {
        "num": "04",
        "title": "Studio-Grade Acoustic Mixing",
        "desc": "Clean 24-bit 48kHz audio mastered to broadcast and streaming loudness standards."
      },
      {
        "num": "05",
        "title": "Full Commercial Royalty Clearance",
        "desc": "Worldwide perpetual license covering social ads, television, websites, and festivals."
      },
      {
        "num": "06",
        "title": "Multi-Language & Accent Adaptation",
        "desc": "Localized voiceovers in British, American, European, and regional accents."
      }
    ]
  },
  "purpleBanner": {
    "headline": "The Emotional Resonance of Sound",
    "subheading": "Where Music Amplifies the Spoken Word",
    "p1": "Nothing sets the atmosphere of a story quite like an evocative voice and a soaring soundtrack. From the quiet tension of a psychological thriller to the sweeping triumph of an epic fantasy, audio delivers the emotional heart.",
    "p2": "Our sound engineers balance voiceover clarity, ambient textures, and musical dynamics to ensure your trailer sounds extraordinary on both studio headphones and smartphone speakers."
  },
  "process": {
    "badge": "4-STEP AUDIO PIPELINE",
    "title": "Our 4-Step Voice & Scoring Pipeline",
    "subtitle": "From voice auditions to the finalized cinematic master mix.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "Vocal Casting Auditions",
        "desc": "Provide 3-5 curated voice actor auditions reading lines from your actual book."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Master Vocal Recording",
        "desc": "Direct studio recording with tone calibration, inflection coaching, and noise-free capture."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "Original Music & Foley Design",
        "desc": "Layer custom music tracks, acoustic textures, and atmospheric ambient sounds."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Final Spatial Audio Mix",
        "desc": "Equalize, compress, and master the vocal and soundtrack layers into broadcast harmony."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Voiceover & Audio",
    "subtitle": "Pristine sound engineering tailored for storytelling.",
    "cards": [
      {
        "num": "01",
        "title": "Elite Character Voice Actors",
        "desc": "Our voice roster features talent with credits on Netflix, Audible, and top audiobooks.",
        "bullets": [
          "Pro studio acoustic recording",
          "Authentic emotional delivery",
          "Multiple dialect and tone choices"
        ],
        "quote": "Voices that instantly capture your protagonist's personality."
      },
      {
        "num": "02",
        "title": "Cinematic Dynamic Mixing",
        "desc": "Music and dialogue mixed to ensure every whisper and explosion is crystal clear.",
        "bullets": [
          "Optimized for mobile device playback",
          "Broadband stereo spatial depth"
        ],
        "quote": "Audio mastered to meet international broadcast criteria."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Voiceover & Music",
    "points": [
      {
        "title": "Access to world-class voice actors.",
        "desc": "Choose from hundreds of seasoned narrators who breathe authentic life into your characters."
      },
      {
        "title": "Custom orchestral scores.",
        "desc": "We compose original soundtracks tailored to your book's unique emotional peaks and valleys."
      },
      {
        "title": "100% royalty-free commercial rights.",
        "desc": "Never pay recurring music fees; enjoy permanent global usage across YouTube, Meta, and broadcast."
      },
      {
        "title": "Pristine acoustic mastering.",
        "desc": "Enjoy balanced, crystal-clear audio engineering that sounds immersive on any device."
      }
    ],
    "btnText": "Hear Voice Samples",
    "authorImg": "/book trailer/image 23.png"
  }
},

  // Animated Trailers
  "animated-trailers": {
  "slug": "animated-trailers",
  "name": "Animated Trailers",
  "metaTitle": "2D & 3D Animated Book Trailers | Fleck Publisher",
  "metaDescription": "Bring fantasy, sci-fi, and children's books to life with custom 2D & 3D animation, parallax book cover depth, and magical particle effects.",
  "hero": {
    "badge": "DYNAMIC 2D & 3D ANIMATION",
    "title": "Animate Your Imagination With",
    "titleHighlight": "Dynamic 2D & 3D Trailers",
    "subtitle": "Turn static art into a living, breathing cinematic spectacle. We animate character illustrations, create 3D camera sweeps through book environments, and infuse glowing magic into every frame.",
    "serviceTag": "Animated Trailers",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 02_06_50 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Ignite Pure Wonder",
      "With Living Illustrations",
      "And 3D Parallax Motion"
    ],
    "description": "For fantasy, science fiction, and illustrated works, live-action footage often falls flat. Custom 2D and 3D animation transports readers directly into your universe with breathtaking artistic fidelity.",
    "btnText": "Animate Your Book",
    "collageImg": "/book trailer & marketing/Group 113.png"
  },
  "manuscript": {
    "title": "Complete Animation Suite",
    "subtitle": "Breathtaking visual animation that elevates static covers and character illustrations into motion.",
    "cards": [
      {
        "num": "01",
        "title": "Book Cover Parallax 2.5D Depth",
        "desc": "Deconstruct layered cover artwork to create stunning 3D depth, camera zooms, and motion."
      },
      {
        "num": "02",
        "title": "Character & Creature Motion",
        "desc": "Custom frame-by-frame animation of dragons, heroes, starships, and magical entities."
      },
      {
        "num": "03",
        "title": "Magical Particle & Atmospheric VFX",
        "desc": "Realistic smoke, floating embers, spell runes, falling rain, and cosmic nebulas."
      },
      {
        "num": "04",
        "title": "Stylized Motion Typography",
        "desc": "Animated title cards, embossed book titles, and dynamic chapter title cards."
      },
      {
        "num": "05",
        "title": "Children's Book Storybook Animation",
        "desc": "Gentle, delightful illustrative animation tailored for young readers and parents."
      },
      {
        "num": "06",
        "title": "3D Photorealistic Book Showcase",
        "desc": "Crisp 3D hardcover and paperback models rotating in studio lighting for a luxury finish."
      }
    ]
  },
  "purpleBanner": {
    "headline": "The Magic of Living Artwork",
    "subheading": "Where Static Illustrations Come to Life",
    "p1": "Fantasy and sci-fi readers adore immersive visuals. When a dragon breathes animated fire, a magical sword crackles with energy, or a starship launches into hyperspace, readers cannot look away.",
    "p2": "Our animation studio takes your existing book cover layers and turns them into a multidimensional visual spectacle that dominates BookTok, YouTube, and Goodreads."
  },
  "process": {
    "badge": "4-STEP ANIMATION PROCESS",
    "title": "Our 4-Step Book Animation Process",
    "subtitle": "From layered cover files to 4K animated brilliance.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "Art Asset Layer Separation",
        "desc": "Separate your book cover and illustrations into foreground, midground, and background layers."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Motion Rigging & Camera Pathing",
        "desc": "Rig character joints, set camera depth, and plot cinematic motion tracks."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "VFX Particle Simulation",
        "desc": "Layer fire, lightning, glowing text, and atmospheric environmental effects."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Color Grading & 4K Render",
        "desc": "Color harmony pass and 4K ultra-high-definition multi-pass rendering."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Animated Trailers",
    "subtitle": "Custom-crafted visual artistry for visionary authors.",
    "cards": [
      {
        "num": "01",
        "title": "Respect for Original Cover Art",
        "desc": "We build directly upon your illustrator's style rather than replacing it.",
        "bullets": [
          "Seamless layer inpainting",
          "Faithful lighting and palette matching",
          "High aesthetic consistency"
        ],
        "quote": "Your book cover, elevated to cinema."
      },
      {
        "num": "02",
        "title": "Stunning 4K Render Quality",
        "desc": "Crisp, fluid 60fps rendering that looks magnificent on any display.",
        "bullets": [
          "Cinematic color grading",
          "Ultra-sharp typography"
        ],
        "quote": "Visual fidelity that demands attention."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Animated Trailers",
    "points": [
      {
        "title": "Specialized literary animators.",
        "desc": "Work with artists who understand fantasy world-building, magical runes, and sci-fi dynamics."
      },
      {
        "title": "Parallax depth technology.",
        "desc": "We bring your 2D book cover into 3D space with cinematic camera swoops and depth-of-field focus."
      },
      {
        "title": "Custom particle simulations.",
        "desc": "Add atmospheric fog, floating dust motes, fire embers, or spell energy to every key scene."
      },
      {
        "title": "Full multi-platform output.",
        "desc": "Receive both horizontal 16:9 for YouTube and vertical 9:16 for TikTok and Instagram Reels."
      }
    ],
    "btnText": "Request Animation Quote",
    "authorImg": "/book trailer/image 23.png"
  }
},

  // Trailers Editing & Post Production
  "trailers-editing": {
  "slug": "trailers-editing",
  "name": "Trailers Editing & Post Production",
  "metaTitle": "Book Trailer Video Editing & Post-Production Suite | Fleck Publisher",
  "metaDescription": "Professional video editing, cinematic color grading, VFX compositing, and audio sweetening to turn raw footage into blockbuster book trailers.",
  "hero": {
    "badge": "POST-PRODUCTION EXCELLENCE",
    "title": "Elevate Every Second With",
    "titleHighlight": "Master Video Post-Production",
    "subtitle": "Where the magic is assembled. Our post-production specialists weave together video clips, typography, soundscapes, and color grading to create an unforgettable emotional crescendo.",
    "serviceTag": "Trailer Editing",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 02_29_00 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "Transform Raw Footage",
      "Into A Polished Film",
      "That Sells Thousands"
    ],
    "description": "Editing is the invisible art of narrative tension. We trim the excess, calibrate the rhythm of every transition, and apply cinematic color palettes that match your book's mood.",
    "btnText": "Start Post-Production",
    "collageImg": "/book trailer & marketing/Group 107.png"
  },
  "manuscript": {
    "title": "Complete Video Editing Suite",
    "subtitle": "Comprehensive post-production handling every visual cut, color grade, and sound cue.",
    "cards": [
      {
        "num": "01",
        "title": "Precision Narrative Cutting",
        "desc": "Frame-accurate pacing that keeps viewers glued to the screen until the final title drop."
      },
      {
        "num": "02",
        "title": "Cinematic Color Grading (LUTs)",
        "desc": "Moody teal-and-orange, gothic shadows, or warm fantasy glows applied in DaVinci Resolve."
      },
      {
        "num": "03",
        "title": "Visual Effects & Compositing",
        "desc": "Seamless integration of green-screen elements, 3D text overlays, and light leaks."
      },
      {
        "num": "04",
        "title": "Subtitles & Kinetic Captions",
        "desc": "Stylized, eye-catching closed captions for 85%+ of viewers who watch videos on mute."
      },
      {
        "num": "05",
        "title": "Aspect Ratio Multi-Mastering",
        "desc": "Full delivery suite: 16:9 widescreen, 9:16 vertical, and 1:1 square video formats."
      },
      {
        "num": "06",
        "title": "Audio Sweetening & Dynamic Range",
        "desc": "Pristine audio cleanup, de-essing, noise reduction, and surround sound equalization."
      }
    ]
  },
  "purpleBanner": {
    "headline": "The Power of Professional Post-Production",
    "subheading": "Where Average Footage Becomes Extraordinary",
    "p1": "Even the finest raw footage and voiceover fall flat without expert editing. Post-production is where timing, color harmony, sound effects, and title cards are calibrated into a cohesive work of art.",
    "p2": "Our editors use Hollywood-standard suites to ensure your trailer delivers maximum tension, breathtaking pacing, and flawless technical export standards."
  },
  "process": {
    "badge": "4-STEP EDITING WORKFLOW",
    "title": "Our 4-Step Editing & Post Workflow",
    "subtitle": "From rough assembly to final 4K cinematic master.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "Rough Cut Assembly",
        "desc": "Assemble the narrative spine, match voiceover timing, and establish pacing."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Author Review & Feedback Pass",
        "desc": "Review the unpolished cut and request timing or scene adjustments."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "Color Grading & VFX Integration",
        "desc": "Apply cinematic LUTs, light effects, and title typography animations."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Final Master Audio & Video Export",
        "desc": "Master in ProRes and 4K MP4 with custom platform metadata tags."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Trailer Editing",
    "subtitle": "Hollywood editing standards applied to independent publishing.",
    "cards": [
      {
        "num": "01",
        "title": "DaVinci Resolve Color Science",
        "desc": "Professional color correction that gives your video a rich, theatrical look.",
        "bullets": [
          "Genre-specific color styling",
          "High dynamic range optimization",
          "Consistent skin tones and contrast"
        ],
        "quote": "Visual palettes that evoke deep reader emotions."
      },
      {
        "num": "02",
        "title": "Frame-Perfect Pacing",
        "desc": "Every cut matches the emotional beat of the narration and music.",
        "bullets": [
          "Zero sluggish moments",
          "High viewer retention graphs"
        ],
        "quote": "Editing that keeps viewers hooked until the buy button."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Trailer Editing",
    "points": [
      {
        "title": "Expertise in narrative pacing.",
        "desc": "Our editors understand literary tension and ensure your video builds to an irresistible climax."
      },
      {
        "title": "Hollywood-standard DaVinci Resolve color grading.",
        "desc": "Give your video trailer the distinct, rich color tones of a major streaming television series."
      },
      {
        "title": "Dynamic social captioning.",
        "desc": "Custom kinetic subtitles ensure high viewer engagement even when watched on mute."
      },
      {
        "title": "Comprehensive multi-format bundle.",
        "desc": "Receive horizontal 16:9, vertical 9:16, and square 1:1 files ready for all advertising platforms."
      }
    ],
    "btnText": "Master Your Trailer",
    "authorImg": "/book trailer/image 23.png"
  }
},

  // Full-Length Launch Trailers
  "full-length-trailers": {
  "slug": "full-length-trailers",
  "name": "Full-Length Launch Trailers",
  "metaTitle": "Full-Length Theatrical Book Launch Trailers (60-90s) | Fleck Publisher",
  "metaDescription": "Hollywood-caliber 60 to 90-second cinematic book trailers. Theatrical voiceover, full orchestral score, custom 3D visuals, and epic narrative storytelling.",
  "hero": {
    "badge": "THEATRICAL CINEMATIC LAUNCH",
    "title": "Create A Cultural Event With",
    "titleHighlight": "Full-Length Launch Trailers",
    "subtitle": "The pinnacle of author marketing. Our 60-90 second full-length trailers combine Hollywood-grade voice acting, sweeping orchestral compositions, and visual storytelling that rivals major motion pictures.",
    "serviceTag": "Launch Trailers",
    "bgImg": "/banners/ChatGPT Image Sep 26, 2026, 01_56_46 AM 1.png",
    "showForm": false
  },
  "showcase": {
    "headline": [
      "The Ultimate Statement",
      "For Visionary Authors",
      "And Flagship Releases"
    ],
    "description": "When launching your magnum opus, standard promo clips don't suffice. A full-length launch trailer establishes your book as an undeniable literary event, generating viral excitement and mainstream buzz.",
    "btnText": "Commission Flagship Trailer",
    "collageImg": "/book trailer & marketing/Group 114.png"
  },
  "manuscript": {
    "title": "Complete Theatrical Trailer Package",
    "subtitle": "An epic 60-90 second cinematic production designed to make your book an unforgettable event.",
    "cards": [
      {
        "num": "01",
        "title": "Comprehensive 60-90s Narrative Arc",
        "desc": "Full cinematic storytelling with introduction of world, characters, conflict, and stakes."
      },
      {
        "num": "02",
        "title": "Theatrical Hollywood Voice Acting",
        "desc": "World-class narration recorded by veteran voice actors who embody your story."
      },
      {
        "num": "03",
        "title": "Bespoke Multi-Movement Score",
        "desc": "Original musical composition with evolving emotional movements matching the narrative arc."
      },
      {
        "num": "04",
        "title": "4K Cinematic Visual Composition",
        "desc": "Breathtaking visual curation combining live-action cinematography and 3D visual FX."
      },
      {
        "num": "05",
        "title": "Epic Book Reveal & Tagline Animation",
        "desc": "3D metallic and embossed title reveals with dynamic lighting and author credit."
      },
      {
        "num": "06",
        "title": "Complete Promotional Video Suite",
        "desc": "Includes full 90s trailer plus 30s and 15s teaser cuts for targeted social ads."
      }
    ]
  },
  "purpleBanner": {
    "headline": "The Magnum Opus Experience",
    "subheading": "Transforming Readers into Devoted Believers",
    "p1": "A full-length trailer is the crown jewel of your marketing campaign. It signals to readers, literary agents, film producers, and reviewers that your book is a major, premium production worthy of their time.",
    "p2": "We spare no creative expense—from orchestral crescendos to spine-chilling voice delivery—to create a video that you will proudly showcase for the rest of your career."
  },
  "process": {
    "badge": "4-STEP THEATRICAL PIPELINE",
    "title": "Our 4-Step Theatrical Production Pipeline",
    "subtitle": "From screenplay concept to a Hollywood-grade book premiere.",
    "steps": [
      {
        "step": "01",
        "phase": "PHASE 01",
        "title": "Theatrical Concept & Screenplay",
        "desc": "Develop an immersive screenplay and full visual storyboard with author input."
      },
      {
        "step": "02",
        "phase": "PHASE 02",
        "title": "Voice Casting & Custom Scoring",
        "desc": "Record lead voice actors and compose the original orchestral soundtrack."
      },
      {
        "step": "03",
        "phase": "PHASE 03",
        "title": "Cinematic Editing & Visual FX",
        "desc": "Seamless visual editing, 3D environmental compositing, and color grading."
      },
      {
        "step": "04",
        "phase": "PHASE 04",
        "title": "Premiere Package Delivery",
        "desc": "Deliver 4K theatrical master, vertical cuts, thumbnail artwork, and ad copy."
      }
    ]
  },
  "difference": {
    "badge": "THE FLECK DIFFERENCE",
    "title": "Why Authors Trust Fleck for Full-Length Trailers",
    "subtitle": "The gold standard in literary cinematic production.",
    "cards": [
      {
        "num": "01",
        "title": "Film-Level Production Values",
        "desc": "Cinematic quality that stands shoulder-to-shoulder with Hollywood book adaptations.",
        "bullets": [
          "Studio-orchestrated music scoring",
          "Screen Actors Guild talent options",
          "4K Ultra HD multi-track delivery"
        ],
        "quote": "A trailer that turns casual browsers into lifelong fans."
      },
      {
        "num": "02",
        "title": "Permanent Flagship Marketing Asset",
        "desc": "A timeless promotional masterpiece for your website, Kickstarter, and Amazon page.",
        "bullets": [
          "Perpetual worldwide commercial license",
          "Cutdown ad bundles included"
        ],
        "quote": "An investment that powers sales for the life of your book."
      }
    ]
  },
  "whyChoose": {
    "title": "Why Authors Choose Fleck Publisher for Full-Length Trailers",
    "points": [
      {
        "title": "Production values comparable to major film teasers.",
        "desc": "We bring movie studio production values to independent and traditionally published books alike."
      },
      {
        "title": "Proven to drive massive pre-orders.",
        "desc": "A cinematic launch trailer builds unmatched anticipation during critical Kickstarter and Amazon pre-order runs."
      },
      {
        "title": "Permanent promotional centerpiece.",
        "desc": "Use your full-length trailer as the hero video on your author website, Amazon Author Central, and media kits."
      },
      {
        "title": "Complete social cutdown package included.",
        "desc": "Every full-length project includes 30s and 15s social media cutdowns optimized for TikTok and Instagram ads."
      }
    ],
    "btnText": "Begin Your Cinematic Journey",
    "authorImg": "/book trailer/image 23.png"
  }
}
};

export function getServiceData(slug: string): ServiceData {
  return servicesData[slug] || servicesData["book-publishing"];
}
