export interface InsightArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Workspace Biophilia' | 'Living Walls' | 'Maintenance' | 'Horticulture' | 'Water Design';
  readTime: string;
  publishedDate: string;
  image: string;
  excerpt: string;
  content: {
    heading: string;
    body: string[];
    callout?: string;
  }[];
}

export const insightsData: InsightArticle[] = [
  {
    slug: 'office-plants-rent-or-buy',
    title: 'Office Plants: Should You Rent or Buy Outright?',
    subtitle: 'A practical financial and operational guide for Facility Managers and Workplace Directors.',
    category: 'Workspace Biophilia',
    readTime: '5 min read',
    publishedDate: 'March 2024',
    image: '/images/corporate/swiss-re-desk-planter-run.jpg',
    excerpt: 'Comparing capital outlay versus long-term operational subscriptions: how corporate plant rental with integrated AMC protects workplace aesthetics and corporate budgets.',
    content: [
      {
        heading: 'The Hidden Cost of Capex Greening',
        body: [
          'When companies purchase hundreds of indoor plants outright under Capex, the initial invoice is only the first chapter. Within 3 to 6 months in climate-controlled HVAC environments, without specialized care, light starvation, over-watering, and pest build-ups inevitably take their toll.',
          'Purchased plants sit on the company asset register as depreciating items. When specimens fail, facility teams face complicated replacement purchase orders, vendor delays, and visible gaps in the office decor.'
        ]
      },
      {
        heading: 'Why Enterprise Offices Choose Rental Subscriptions',
        body: [
          'Under Star Gardens\' corporate plant rental model, offices commit to a 2 to 3-year subscription. All capital expenditure is moved into operating spend (OpEx), which aligns with corporate budgeting and facility lease cycles.',
          'Crucially, plant rental includes comprehensive Annual Maintenance Contracts (AMC). Our own horticultural crew visits weekly to clean foliage, check soil metrics, and proactively swap out any distressed plant from our 70-acre nursery stock at zero additional charge.'
        ],
        callout: 'Under rental, the service provider owns the risk of plant failure, not the facility manager.'
      },
      {
        heading: 'Decision Framework: When to Buy vs When to Rent',
        body: [
          'Buy outright when: The property is owner-occupied, the horizon is 10+ years, and you have committed to a dedicated long-term maintenance contract.',
          'Rent when: You occupy leased commercial real estate, want zero replacement liability, desire seasonal refreshes, and value predictable monthly operational expenditures.'
        ]
      }
    ]
  },
  {
    slug: 'planning-an-engineered-vertical-garden',
    title: 'Planning a Vertical Garden: What to Decide Before You Start',
    subtitle: 'Structural load, light levels, water drainage, and the fatal mistakes in felt-pocket systems.',
    category: 'Living Walls',
    readTime: '6 min read',
    publishedDate: 'February 2024',
    image: '/images/vertical-gardens/interior-reception-living-wall-lush.jpg',
    excerpt: 'Why vertical gardens must be engineered rather than merely planted: evaluating light lux levels, sub-structure anchors, and automated drip-fertigation.',
    content: [
      {
        heading: 'Light is Non-Negotiable',
        body: [
          'The single most common cause of living wall decline is insufficient photosynthetic active radiation (PAR). Indoor species require at least 1,200 to 1,800 Lux sustained across 10 hours daily.',
          'If your reception atrium or cafeteria lacks natural skylights, specialized 4000K–5000K horticultural track luminaires must be engineered into the ceiling layout before wall installation.'
        ]
      },
      {
        heading: 'Why Felt-Pockets Fail and Cassettes Endure',
        body: [
          'Early living walls used fabric felt pockets. Over time, moisture causes felt to decompose, roots rot, and replacing a single dead plant tears adjoining root networks.',
          'Star Gardens utilizes UV-stabilized rigid polymer cassettes. Each specimen grows in its own ventilated pod with automated drip lines feeding the root zone directly. A single pod can be inspected or swapped in 30 seconds without disturbing the living wall.'
        ],
        callout: 'Always demand rigid cell systems with sealed drip collection gutters to protect building walls from moisture intrusion.'
      },
      {
        heading: 'Zoning Plants by Micro-Elevation',
        body: [
          'A 5-metre tall vertical wall has distinct microclimates. The top receives more light and heat, while the bottom gathers cooler moisture. Top zones are planted with resilient Dracaena and Epipremnum, while lower zones thrive with humidity-loving Boston Ferns, Syngonium, and Calatheas.'
        ]
      }
    ]
  },
  {
    slug: 'what-a-plant-amc-actually-covers',
    title: 'What a Plant AMC Actually Covers: Demystifying Landscape Care',
    subtitle: 'From soil conductivity to preventive biological pest controls: what professional maintenance looks like.',
    category: 'Maintenance',
    readTime: '4 min read',
    publishedDate: 'January 2024',
    image: '/images/amc/team-member-horticulture-watering.jpg',
    excerpt: 'An Annual Maintenance Contract is far more than watering plants. Discover how Star Gardens maintains 175+ enterprise landscape contracts across South India.',
    content: [
      {
        heading: 'Beyond the Watering Can',
        body: [
          'Anyone can pour water into a pot; in fact, over-watering is the cause of 85% of indoor plant fatalities in commercial environments. An authentic horticultural AMC involves moisture probes, soil aerators, and EC (electrical conductivity) measurement to track nutrient absorption.',
          'Our technicians monitor foliage dust—which clogs stomata and hampers indoor oxygen generation—polishing leaves with organic neem extracts that double as natural pest barriers.'
        ]
      },
      {
        heading: 'The 100% Replacement Guarantee',
        body: [
          'The ultimate differentiator of Star Gardens\' AMC is our replacement guarantee. Because we hold ready stock across 70 acres of company nurseries in Rajahmundry, Punganur, and Karnataka, our crew swaps any fading plant with a mature, nursery-fresh specimen immediately.',
          'Facility teams never have to chase replacements or submit fresh purchase orders.'
        ]
      }
    ]
  },
  {
    slug: 'resilient-low-light-plants-for-tech-campuses',
    title: '5 Resilient Botanical Species for Deep-Floor Tech Campuses',
    subtitle: 'Species that thrive under artificial LED lighting and continuous 24/7 HVAC air streams.',
    category: 'Horticulture',
    readTime: '5 min read',
    publishedDate: 'April 2024',
    image: '/images/corporate/wsp-workstation-planter-boxes.jpg',
    excerpt: 'A curated selection of indoor plants tested in Manyata and Embassy Tech Parks for enduring health and high biophilic impact.',
    content: [
      {
        heading: 'The Deep-Floor Challenge',
        body: [
          'Modern floorplates can extend 60 metres from exterior windows. At workstation centerlines, natural daylight rarely exceeds 150 Lux. Botanical species must be selected with adapted photosynthetic pathways and thick waxy cuticles that resist the dehydrating effects of chilled HVAC air.'
        ]
      },
      {
        heading: 'The Proven Performers',
        body: [
          '1. Zamioculcas zamiifolia (ZZ Plant): Stores water in underground rhizomes; tolerates low foot-candle illumination and erratic watering cycles.',
          '2. Sansevieria trifasciata \'Laurentii\': Architectural vertical form; produces oxygen at night through CAM photosynthesis; virtually indestructible.',
          '3. Aglaonema \'Silver Bay\': Broad, variegated leaves that reflect ambient office light; highly tolerant of fluorescent spectra.',
          '4. Epipremnum aureum (Golden Pothos): Fast-draping vine ideal for elevated cabinet-top planters and partition dividers.',
          '5. Rhapis excelsa (Lady Palm): Elegant fan-shaped fronds that bring subtle tropical majesty to executive boardrooms and lift lobbies.'
        ]
      }
    ]
  }
];
