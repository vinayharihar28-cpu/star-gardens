export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  heroImage: string;
  sectorTag: 'Residential' | 'Corporate' | 'Hospitality' | 'Specialized' | 'Impact';
  deliverables: string[];
  workingModel: string;
  keyFeatures: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'corporate',
    slug: 'corporate',
    title: 'Corporate Landscaping & Workspace Biophilia',
    tagline: 'High-performance botanical systems engineered for modern workplaces.',
    shortDesc: 'End-to-end design, execution, and long-term care for tech parks, corporate campuses, and agile co-working spaces.',
    heroImage: '/images/services_real/workspace-biophilia.jpg',
    sectorTag: 'Corporate',
    workingModel: 'Available as Capex (Design & Build), Long-term Corporate Rental (2–3 years), or Pure Maintenance (AMC).',
    deliverables: [
      'Desk-side linear planter runs with sub-irrigation',
      'Reception statement pots and architectural palms',
      'Curved collaboration arena planters',
      'Acoustic living baffles and divider greenery',
      'Outdoor campus master planning and courtyards'
    ],
    keyFeatures: [
      {
        title: 'WELL Building & LEED Alignment',
        description: 'Selected species specifically proven for high VOC air purification and low respiratory allergenic profiles.'
      },
      {
        title: 'Zero-Leak Pot-in-Pot Sub-Irrigation',
        description: 'Engineered waterproof liners prevent moisture damage to raised data cabling and polished timber floors.'
      },
      {
        title: 'Uniform In-House Care Crew',
        description: 'Our background-verified horticultural technicians service plants without disrupting day-to-day office operations.'
      }
    ],
    faqs: [
      {
        question: 'Do you rent plants for corporate offices or only sell them?',
        answer: 'We provide both models. Corporate rental runs on 2 to 3-year subscription contracts with full AMC and replacements included. Alternatively, clients can purchase the landscape under capex with an optional maintenance agreement.'
      },
      {
        question: 'How do you prevent water leaks onto server and power conduits?',
        answer: 'We use double-walled FRP planters with isolated internal drainage reservoirs and wicking liners. No water exits the exterior vessel.'
      }
    ]
  },
  {
    id: 'residential',
    slug: 'residential',
    title: 'Residential Landscapes & Private Estates',
    tagline: 'Living sanctuaries tailored to private villas, terraces, and residential enclaves.',
    shortDesc: 'Thoughtfully planned outdoor spaces, private courtyards, swimming pool surrounds, and terrace gardens designed for calm and enduring beauty.',
    heroImage: '/images/services_real/private-estates-villas.jpg',
    sectorTag: 'Residential',
    workingModel: 'Comprehensive architectural consultation, grading, softscape/hardscape installation, and seasonal estate maintenance.',
    deliverables: [
      'Terraced villa landscape master planning',
      'Private courtyard reflection ponds and rain curtains',
      'Micro-climate cooling lawns and native tree groves',
      'Perimeter privacy screening with mature bamboo and palms',
      'Automatic weather-sensing drip irrigation'
    ],
    keyFeatures: [
      {
        title: 'Mature Sourced Specimens',
        description: 'Because we own 70 acres of production nurseries, we deliver full-grown, mature palms and specimen trees rather than waiting years for saplings.'
      },
      {
        title: 'Water-Conscious Horticultural Schemes',
        description: 'Drought-resilient native varieties paired with rainwater harvesting reservoirs and sub-surface irrigation.'
      },
      {
        title: 'Holistic Spatial Flow',
        description: 'Seamless visual transitions between interior living rooms, covered verandahs, and garden lawns.'
      }
    ],
    faqs: [
      {
        question: 'Do you handle both architectural planning and physical planting?',
        answer: 'Yes. Star Gardens acts as both the landscape architect and the general contractor, providing unified design and turnkey execution.'
      },
      {
        question: 'Can you work with our existing residential architect?',
        answer: 'Absolutely. We regularly collaborate with leading architecture studios in Bengaluru, Hyderabad, and Chennai, developing the landscape and grading drawings to complement the architectural elevations.'
      }
    ]
  },
  {
    id: 'hospitality',
    slug: 'hospitality',
    title: 'Hospitality Landscapes & Managed Farmland',
    tagline: 'Destination environments that immerse guests in nature.',
    shortDesc: 'Immersive landscape architecture for luxury resorts, boutique retreats, managed agricultural farmland communities, and vacation villas.',
    heroImage: '/images/services_real/hospitality-farmland.jpg',
    sectorTag: 'Hospitality',
    workingModel: 'Master site planning, phase-wise landscape rollouts, agricultural integration, and horticultural training for estate staff.',
    deliverables: [
      'Resort arrival avenues and driveway palm colonnades',
      'Natural swimming pool and water body integration',
      'Agro-forestry and organic fruit orchard zoning',
      'Walking nature trails and native wildflower meadows',
      'Guest dining alfresco garden microclimates'
    ],
    keyFeatures: [
      {
        title: 'Agricultural Roots & Native Ecology',
        description: 'Coming from a multi-generational farming family, our horticultural architects understand soil conditioning, rainwater basins, and regional microclimates.'
      },
      {
        title: 'Low Operating Maintenance Burden',
        description: 'Plant palettes chosen for robustness and natural self-sufficiency in non-urban, remote geographic locations.'
      },
      {
        title: 'Destination Value Creation',
        description: 'Photogenic, experiential landscape elements that increase guest dwell time, social sharing, and property valuation.'
      }
    ],
    faqs: [
      {
        question: 'Do you undertake projects outside of Bengaluru?',
        answer: 'Yes. We actively service Bengaluru, Hyderabad, Chennai, and Pune, with ongoing resort and managed farmland projects in Coorg, Chikmagalur, and regional agricultural corridors.'
      }
    ]
  },
  {
    id: 'vertical-gardens',
    slug: 'vertical-gardens',
    title: 'Engineered Vertical Gardens & Bio-Walls',
    tagline: 'Living green architecture for structural facades and high-traffic interiors.',
    shortDesc: 'Patented modular living wall systems with integrated automated fertigation, zero soil subsidence, and guaranteed 98%+ plant retention.',
    heroImage: '/images/services_real/vertical-bio-walls.jpg',
    sectorTag: 'Specialized',
    workingModel: 'Turnkey structural mounting, plumbing integration, nursery-grown pre-vegetated cassettes, and comprehensive maintenance contracts.',
    deliverables: [
      'Exterior structural facade bio-cladding',
      'Corporate atrium double-height living walls (ABB, WSP)',
      'Gate entrance and boundary wall vertical greening',
      'Interior acoustic green wall panels for cafeterias',
      'Smart app-monitored automated drip-fertigation'
    ],
    keyFeatures: [
      {
        title: 'Rigid Modular Cassette Technology',
        description: 'No sagging felt pockets. Each specimen occupies an individual UV-stabilized cell that allows surgical inspection and rapid swap-out.'
      },
      {
        title: 'Automated Precision Fertigation',
        description: 'Controlled micro-dosing of essential nitrogen, phosphorus, and trace minerals directly to the root rootstock.'
      },
      {
        title: 'Custom Architectural Foliage Art',
        description: 'Curated patterns blending golden Epipremnum, deep Philodendron, and bronze Syngonium into living tapestries.'
      }
    ],
    faqs: [
      {
        question: 'What happens if a plant dies in the living wall?',
        answer: 'Under our Vertical Garden AMC, our horticultural crew conducts bi-weekly audits. Any plant exhibiting distress is replaced immediately from our nursery stock at zero additional cost.'
      },
      {
        question: 'How much water does an indoor vertical garden consume?',
        answer: 'Our closed-loop recirculation systems use up to 70% less water than traditional potting, with excess run-off collected in stainless-steel catch basins and recycled.'
      }
    ]
  },
  {
    id: 'plant-rental',
    slug: 'plant-rental',
    title: 'Plant Rental & Subscriptions',
    tagline: 'Flexible greenery without capital expenditure or operational headaches.',
    shortDesc: 'Short-term event rentals (1–2 days) for summits and exhibitions, alongside 2 to 3-year corporate plant subscriptions with complete AMC included.',
    heroImage: '/images/services_real/plant-rental-opex.jpg',
    sectorTag: 'Specialized',
    workingModel: 'Short-term Event Rental (1 to 2 days) | Long-term Corporate Subscription (2 to 3 years with AMC).',
    deliverables: [
      'Corporate event and exhibition entrance floral displays',
      'Annual general meeting and conference stage backdrops',
      'Long-term multi-floor office plant subscriptions',
      'Seasonal rotational flowering displays',
      'Complete logistics, setup, servicing, and retrieval'
    ],
    keyFeatures: [
      {
        title: 'Operational Expense vs Capex',
        description: 'Move greenery investments to OpEx with predictable monthly fees, eliminating balance sheet asset depreciation.'
      },
      {
        title: 'Zero Replacement Liability',
        description: 'All plant health, leaf cleaning, pest prevention, and replacements are 100% covered under the rental agreement.'
      },
      {
        title: 'Rapid Deployment from Nursery Stock',
        description: 'With ready inventory held across 70 acres, we can stage 500+ plants for a major corporate conference within 48 hours.'
      }
    ],
    faqs: [
      {
        question: 'What is the minimum duration for corporate plant rental?',
        answer: 'Corporate office plant rental agreements are typically 2 to 3-year contracts. For exhibitions and corporate summits, our rental runs for 1 to 2 days.'
      }
    ]
  },
  {
    id: 'plant-amc',
    slug: 'plant-amc',
    title: 'Annual Maintenance Contracts (AMC)',
    tagline: 'Guaranteed plant health, meticulous servicing, and operational peace of mind.',
    shortDesc: 'Dedicated horticultural care for corporate offices, residential communities, and retail campuses. Serving 175+ active clients across Bengaluru and South India.',
    heroImage: '/images/services_real/annual-plant-amc.jpg',
    sectorTag: 'Specialized',
    workingModel: 'Scheduled weekly or bi-weekly visits by trained, uniformed Star Gardens horticultural personnel.',
    deliverables: [
      'Comprehensive moisture auditing and tailored watering schedules',
      'Foliage dust removal, polishing, and pruning',
      'Soil nutrient supplementation and organic pest mitigation',
      'Automatic, complimentary replacement of distressed specimens',
      'Dedicated client account manager and service logs'
    ],
    keyFeatures: [
      {
        title: '175+ Enterprise Clients Maintained',
        description: 'From Fortune 500 tech campuses to boutique co-working hubs, our clients rely on our operational punctuality and horticultural discipline.'
      },
      {
        title: 'Existing Landscape Takeovers',
        description: 'We do not just maintain landscapes we built. We audit and restore existing, under-performing greenery systems installed by third parties.'
      },
      {
        title: '100% Free Replacements',
        description: 'If any specimen fails under our care, it is swapped immediately from our own nursery stock without extra invoicing.'
      }
    ],
    faqs: [
      {
        question: 'Can Star Gardens take over AMC for an existing office landscape installed by another contractor?',
        answer: 'Yes. Over 40% of our AMC accounts are landscapes originally built by third parties that suffered from neglected maintenance. We conduct a free preliminary site audit to restore the planting.'
      }
    ]
  },
  {
    id: 'events-and-workshops',
    slug: 'events-and-workshops',
    title: 'Corporate Workshops & Greening Events',
    tagline: 'Hands-on horticultural experiences that educate, engage, and connect teams.',
    shortDesc: 'Guided botanical workshops for corporate teams—kokedama moss ball creation, micro-terrariums, and desktop potting—bringing colleagues together.',
    heroImage: '/images/services_real/corporate-workshops.jpg',
    sectorTag: 'Impact',
    workingModel: 'On-site 2 to 3-hour guided sessions at corporate offices, offsites, or our nursery locations.',
    deliverables: [
      'Japanese Kokedama moss-ball craftsmanship workshops',
      'Low-light indoor plant care masterclasses for employees',
      'Desk-planter potting and propagation workshops',
      'All soil mixes, living plants, moss, and tools provided',
      'Each participant takes home their own living creation'
    ],
    keyFeatures: [
      {
        title: 'Tangible Mental Well-Being',
        description: 'Working hands-on with soil, moss, and roots provides proven stress reduction and collaborative team bonding.'
      },
      {
        title: 'Zero Logistical Burden on Facilities',
        description: 'Our team brings protective floor sheets, plant materials, clean aprons, and leaves the workspace spotless.'
      }
    ],
    faqs: [
      {
        question: 'How many participants can attend a workshop session?',
        answer: 'We host sessions for teams ranging from 15 to 150+ participants, with multiple horticultural facilitators to ensure personalized instruction.'
      }
    ]
  },
  {
    id: 'csr',
    slug: 'csr',
    title: 'CSR Plantation Drives & Community Greening',
    tagline: 'Generous ecological impact backed by 70 acres of nursery cultivation.',
    shortDesc: 'Corporate social responsibility greening drives and community tree-planting activities offered at no cost to partner organizations.',
    heroImage: '/images/services_real/csr-greening-drives.jpg',
    sectorTag: 'Impact',
    workingModel: 'Collaborative non-profit CSR partnerships using native saplings directly supplied from our production nurseries.',
    deliverables: [
      'Native species sapling sourcing from our 70-acre farms',
      'Site selection, soil testing, and hole preparation',
      'Employee volunteer engagement and planting coordination',
      'Follow-up watering and sapling survival tracking'
    ],
    keyFeatures: [
      {
        title: 'Direct Sourcing Without Middlemen',
        description: 'Because we propagate our own plants, CSR programs benefit from resilient, acclimatized saplings with high field survival rates.'
      },
      {
        title: 'Authentic Ecological Stewardship',
        description: 'Focus on native Western Ghats and Deccan dry-deciduous shade and fruit trees that restore local biodiversity.'
      }
    ],
    faqs: [
      {
        question: 'Why does Star Gardens offer CSR plantation support at no cost?',
        answer: 'As a family of growers since 2009, ecological stewardship is intrinsic to our ethos. We provide saplings and horticultural expertise to verified corporate greening drives to restore urban tree canopy cover.'
      }
    ]
  }
];
