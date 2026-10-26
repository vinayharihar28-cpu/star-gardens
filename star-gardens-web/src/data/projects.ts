export interface Project {
  slug: string;
  title: string;
  client: string;
  sector: 'Corporate' | 'Residential' | 'Hospitality' | 'Vertical Gardens' | 'Water Features';
  location: string;
  year: string;
  intervention: string;
  summary: string;
  featuredImage: string;
  gallery: string[];
  metrics: { label: string; value: string }[];
  overview: string[];
  scope: string[];
  botanicalPalette: string[];
}

export const projectsData: Project[] = [
  {
    slug: 'swiss-re-embassy-golf-links',
    title: 'Swiss Re Workspace Landscape',
    client: 'Swiss Re',
    sector: 'Corporate',
    location: 'Embassy Golf Links, Domlur, Bengaluru',
    year: '2022',
    intervention: 'Desk Planter Runs, Architectural Urns & Reception Greening',
    summary: 'Continuous desk-side planter runs, designer pots, and acclimatized palms across multi-level reception and lift lobbies.',
    featuredImage: '/images/corporate/swiss-re-embassy-golf-links-reception.jpg',
    gallery: [
      '/images/corporate/swiss-re-desk-planter-run.jpg',
      '/images/corporate/swiss-re-lobby-palms-urns.jpg',
      '/images/corporate/swiss-re-collaborative-zone-plants.jpg',
      '/images/corporate/swiss-re-designer-pots-hallway.jpg',
      '/images/corporate/swiss-re-lift-lobby-greenery.jpg',
      '/images/corporate/swiss-re-breakout-space-foliage.jpg',
    ],
    metrics: [
      { label: 'Floor Space Greened', value: '45,000 sq.ft' },
      { label: 'Linear Planter Runs', value: '380+ metres' },
      { label: 'Plant Health Maintenance', value: 'Weekly In-House AMC' },
      { label: 'Specimen Replacement Rate', value: '< 1.5% annually' },
    ],
    overview: [
      'For Swiss Re\'s major corporate presence at Embassy Golf Links in Domlur, Star Gardens engineered a comprehensive indoor biophilic scheme integrated seamlessly into the furniture architectural grid.',
      'The installation features long, continuous desk-side planter runs that divide collaborative workstations while naturally filtering indoor air and dampening acoustic reverberation. Acclimatized Kentia palms, Ficus lyrata (Fiddle Leaf Fig), and architectural Sansevieria runs create natural sightline barriers without blocking natural daylight from floor-to-ceiling perimeter glazing.',
      'All planter beds utilize Star Gardens\' proprietary pot-in-pot sub-irrigation liners, ensuring zero water overflow onto raised access data floors.'
    ],
    scope: [
      'Sub-irrigation planter engineering & fabrication',
      'Acclimatization of shade-tolerant botanical specimens',
      'Integrated desk planter runs and reception statement pots',
      'Dedicated weekly AMC with soil moisture testing and foliage polish'
    ],
    botanicalPalette: [
      'Ficus lyrata (Fiddle Leaf Fig)',
      'Sansevieria trifasciata \'Laurentii\'',
      'Zamioculcas zamiifolia (ZZ Plant)',
      'Aglaonema \'Silver Bay\'',
      'Rhapis excelsa (Lady Palm)'
    ]
  },
  {
    slug: '2gethr-richmond-road',
    title: '2gethr Co-Working Entrance & Cafe Garden',
    client: '2gethr Spaces',
    sector: 'Corporate',
    location: 'Richmond Road, Central Bengaluru',
    year: '2023',
    intervention: 'Entrance Landscape, Multi-Level Steps & Cafe Courtyard',
    summary: 'Sculpted entrance steps framed with tropical palms and foliage, leading into an open-air cafe garden oasis in the heart of Bengaluru.',
    featuredImage: '/images/corporate/2gethr-richmond-road-entrance-steps.jpg',
    gallery: [
      '/images/corporate/2gethr-richmond-road-cafe-garden.jpg',
      '/images/corporate/2gethr-richmond-road-courtyard-palms.jpg',
      '/images/corporate/2gethr-richmond-road-indoor-atrium.jpg',
    ],
    metrics: [
      { label: 'Site Footprint', value: '12,500 sq.ft' },
      { label: 'Microclimate Drop', value: '-2.8°C ambient' },
      { label: 'Nursery Stock Sourced', value: 'Punganur Nursery (30 ac)' },
      { label: 'Care Model', value: 'Design, Build & Ongoing AMC' },
    ],
    overview: [
      'Located on prestigious Richmond Road, 2gethr wanted an entrance experience that immediately transported visitors from urban traffic into a tranquil, living botanical sanctuary.',
      'Star Gardens designed terraced entrance planters integrating natural stone steps with cascading Philodendrons, Travellers Palms, and exotic broadleaf foliage. The cafe courtyard incorporates shade trees cultivated directly from our Punganur and Rajahmundry nurseries, creating natural canopies under which members work and gather.'
    ],
    scope: [
      'Concept spatial design & grading plan',
      'Hardscape & softscape structural integration',
      'Selection and transport of mature palm specimens',
      'Integrated low-voltage landscape lighting & misting lines',
      'Full AMC maintenance contract'
    ],
    botanicalPalette: [
      'Ravenala madagascariensis (Traveller\'s Palm)',
      'Philodendron selloum / bipinnatifidum',
      'Monstera deliciosa',
      'Alpinia zerumbet (Shell Ginger)',
      'Cyrtostachys renda (Red Sealing Wax Palm)'
    ]
  },
  {
    slug: 'wsp-manyata-tech-park',
    title: 'WSP Technical Campus Green Infrastructure',
    client: 'WSP Global',
    sector: 'Corporate',
    location: 'Manyata Tech Park, Hebbal, Bengaluru',
    year: '2021',
    intervention: 'Workstation Partition Planters & Collaboration Zone Foliage',
    summary: 'Tall modular planter runs separating engineering workstations and custom curved planters framing agile scrum arenas.',
    featuredImage: '/images/corporate/wsp-manyata-tech-park-planters.jpg',
    gallery: [
      '/images/corporate/wsp-workstation-planter-boxes.jpg',
      '/images/corporate/wsp-curved-collaboration-planters.jpg',
      '/images/corporate/wsp-floor-greenery-vista.jpg',
      '/images/corporate/wsp-architectural-indoor-garden.jpg',
    ],
    metrics: [
      { label: 'Workstations Integrated', value: '620 desks' },
      { label: 'Indoor Planter Units', value: '140 custom boxes' },
      { label: 'Air Purification Rating', value: 'High VOC uptake' },
      { label: 'Maintenance Schedule', value: 'Bi-weekly technician visits' },
    ],
    overview: [
      'Engineering consultancy WSP required a sophisticated indoor biophilic system across their Manyata Tech Park campus that aligned with stringent corporate WELL Building standards.',
      'Star Gardens engineered custom curved planter boxes built to match the radius of the collaboration amphitheaters, alongside tall linear workstation planters. The planting palette was scientifically selected for low volatile organic compound (VOC) tolerance and high resilience under 24/7 HVAC air cycles.'
    ],
    scope: [
      'Custom FRP planter fabrication to architectural drawings',
      'LEED & WELL compliant indoor soil-less growing media',
      'Plant supply directly from Kumbalgodu holding facility',
      'Continuous facility management handover & AMC'
    ],
    botanicalPalette: [
      'Epipremnum aureum (Golden Pothos)',
      'Dracaena fragrans \'Compacta\'',
      'Chamaedorea seifrizii (Bamboo Palm)',
      'Spathiphyllum wallisii (Peace Lily)',
      'Calathea lutea'
    ]
  },
  {
    slug: 'interior-living-walls-abb-wsp',
    title: 'Engineered Interior Living Walls',
    client: 'ABB & WSP Corporate Facilities',
    sector: 'Vertical Gardens',
    location: 'Bengaluru Campuses',
    year: '2022-2024',
    intervention: 'Double-Height Atrium & Cafeteria Vertical Bio-Walls',
    summary: 'Automated hydroponic modular living walls installed across corporate reception atriums, cafeterias, and collaboration corridors.',
    featuredImage: '/images/vertical-gardens/interior-living-wall-abb-wsp.jpg',
    gallery: [
      '/images/vertical-gardens/interior-reception-living-wall-lush.jpg',
      '/images/vertical-gardens/interior-cafeteria-bio-wall.jpg',
      '/images/vertical-gardens/interior-double-height-vertical-garden.jpg',
      '/images/vertical-gardens/interior-engineered-irrigated-living-wall.jpg',
      '/images/vertical-gardens/interior-acoustic-green-wall-corridor.jpg',
      '/images/vertical-gardens/interior-living-wall-detail-ferns-syngonium.jpg',
    ],
    metrics: [
      { label: 'Total Vertical Area', value: '1,850 sq.ft' },
      { label: 'Modular Panel Count', value: '460 panels' },
      { label: 'Irrigation Efficiency', value: 'Closed-loop recycled' },
      { label: 'Foliage Survival Rate', value: '98.8%' },
    ],
    overview: [
      'Star Gardens designs and installs commercial-grade living walls built with modular engineered cell systems. Unlike felt-pocket systems that rot and leak, our rigid polymer trays include individual plant root pockets with computerized drip-fertigation and drainage collection gutters.',
      'At ABB and WSP, these double-height green walls serve as both architectural focal points and acoustic dampers in high-traffic cafeterias and public atriums.'
    ],
    scope: [
      'Structural backing wall load assessment & waterproofing',
      'Automated fertigation dosing station installation',
      'Pre-cultivation of planted panels at Punganur nursery',
      'Precision on-site assembly and calibration',
      'Comprehensive monthly vertical garden AMC'
    ],
    botanicalPalette: [
      'Syngonium podophyllum \'Neon Robusta\'',
      'Nephrolepis exaltata (Boston Fern)',
      'Chlorophytum comosum (Spider Plant)',
      'Philodendron \'Brasil\'',
      'Maranta leuconeura (Prayer Plant)'
    ]
  },
  {
    slug: 'exterior-architectural-living-facades',
    title: 'Exterior Living Facades & Gate Enclosures',
    client: 'Premium Residential & Commercial Estates',
    sector: 'Vertical Gardens',
    location: 'Bengaluru & Hyderabad',
    year: '2023',
    intervention: 'Full Facade Cladding & Geometric Living Gate Features',
    summary: 'Weatherproof outdoor vertical gardens engineered with wind-load brackets and patterned foliage for gates and architectural facades.',
    featuredImage: '/images/vertical-gardens/exterior-entrance-gate-living-wall.jpg',
    gallery: [
      '/images/vertical-gardens/exterior-architectural-living-facade.jpg',
      '/images/vertical-gardens/exterior-patterned-foliage-wall.jpg',
      '/images/vertical-gardens/exterior-perimeter-green-wall.jpg',
      '/images/vertical-gardens/residential-facade-vertical-garden.jpg',
    ],
    metrics: [
      { label: 'Facade Height', value: 'Up to 14 metres' },
      { label: 'UV Resistance', value: 'Commercial Marine Grade' },
      { label: 'Plant Diversity', value: '14 native varieties' },
      { label: 'Water Conservation', value: 'Smart solar timer drip' },
    ],
    overview: [
      'Exterior vertical walls in South India must endure intense solar irradiation and monsoon deluges. Star Gardens utilizes high-density UV-stabilized engineered cassette structures anchored with stainless-steel substructures.',
      'Our landscape architects compose geometric patterns using contrasting leaf pigments—purples, chartreuses, and deep forest greens—that retain chromatic contrast all year round.'
    ],
    scope: [
      'Wind & structural load engineering',
      'External waterproofing barrier membrane',
      'High-pressure automated fertigation system',
      'Full seasonal pruning and nutritional replacement schedule'
    ],
    botanicalPalette: [
      'Alternanthera ficoidea (Calico Plant)',
      'Asparagus densiflorus \'Sprengeri\'',
      'Ophiopogon japonicus \'Kyoto Dwarf\'',
      'Schefflera arboricola \'Variegata\'',
      'Liriope muscari'
    ]
  },
  {
    slug: 'water-features-rain-curtains',
    title: 'Contemporary Water Bodies & Rain Curtains',
    client: 'Hospitality & Luxury Residential Clients',
    sector: 'Water Features',
    location: 'Bengaluru & Coorg',
    year: '2022-2024',
    intervention: 'Reflecting Pools, Koi Ecosystems & Architectural Rain Curtains',
    summary: 'Precision-engineered water features combining biological filtration, natural stone coping, and mesmerizing acoustic water curtains.',
    featuredImage: '/images/water-features/rain-curtain-garden-water-feature.jpg',
    gallery: [
      '/images/water-features/koi-pond-with-lilies-and-deck.jpg',
      '/images/water-features/rain-curtain-cascade-feature.jpg',
      '/images/water-features/pebble-edged-water-mirror-pond.jpg',
      '/images/water-features/contemporary-stone-water-basin.jpg',
    ],
    metrics: [
      { label: 'Ecosystem Balance', value: 'Chemical-free biological bio-filter' },
      { label: 'Acoustic Attenuation', value: 'Custom tuned rainfall decibels' },
      { label: 'Pond Water Volume', value: '18,000 Litres' },
      { label: 'Maintenance Interval', value: 'Quarterly bio-filter flush' },
    ],
    overview: [
      'Water introduces movement, soothing acoustic masking of urban road noise, and localized evaporative cooling. Star Gardens designs water bodies as architectural compositions integrated directly with surrounding stone paving and tropical aquatic plants.',
      'Our rain curtain installations use laser-drilled stainless headers that drop uniform water beads into river-pebble reflection basins without splashing surrounding seating terraces.'
    ],
    scope: [
      'Hydraulic calculation & pump room engineering',
      'Biological multi-chamber filtration design',
      'Custom stainless-steel rain curtain manifold fabrication',
      'Aquatic plant balance (Nymphaea, Cyperus, Equisetum)'
    ],
    botanicalPalette: [
      'Nymphaea nouchali (Blue Lotus / Water Lily)',
      'Cyperus papyrus (Egyptian Papyrus)',
      'Equisetum hyemale (Horsetail Reed)',
      'Iris pseudacorus (Water Flag)',
      'Acorus calamus (Sweet Flag)'
    ]
  }
];
