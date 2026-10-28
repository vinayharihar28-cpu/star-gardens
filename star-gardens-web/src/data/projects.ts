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
      { label: 'Floor Space Greened', value: '3,00,000 sq.ft' },
      { label: 'Linear Planter Runs', value: '380+ metres' },
      { label: 'Maintenance Contract', value: 'Weekly In-House AMC' },
      { label: 'Plant Health Rate', value: '99.2% vitality' },
    ],
    overview: [
      'For Swiss Re\'s major corporate presence at Embassy Golf Links in Domlur, Star Gardens engineered a comprehensive indoor biophilic scheme integrated seamlessly into the furniture architectural grid.',
      'The installation features long, continuous desk-side planter runs that divide collaborative workstations while naturally filtering indoor air and dampening acoustic reverberation. Acclimatized Kentia palms, Ficus lyrata, and architectural Sansevieria runs create natural sightline barriers without blocking natural daylight from floor-to-ceiling perimeter glazing.',
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
    slug: 'abb-peenya-campus',
    title: 'ABB India Industrial Campus & Landscape AMC',
    client: 'ABB India Pvt. Ltd',
    sector: 'Corporate',
    location: 'Peenya Industrial Area, Bengaluru',
    year: '2021-2025',
    intervention: 'Campus Landscape Masterplan, Internal Roads & Avenue Care, Comprehensive AMC',
    summary: 'Comprehensive external landscape engineering and facility maintenance covering campus thoroughfares, manicured perimeter foliage, and tractor sweeping for ABB\'s premier manufacturing and engineering facility.',
    featuredImage: '/images/projects/abb/abb-peenya-hero.jpg',
    gallery: [
      '/images/projects/abb/abb-peenya-grounds.jpg',
      '/images/projects/abb/abb-peenya-pathway.jpg',
    ],
    metrics: [
      { label: 'Campus Footprint', value: 'Multi-Acre Campus' },
      { label: 'Contract Scope', value: '₹3.28 Crore External AMC' },
      { label: 'Service Mode', value: 'Mechanical & Horticultural Facility Care' },
      { label: 'Specimen Vitality', value: '99.5% Site Health' },
    ],
    overview: [
      'Documented in Star Gardens official corporate portfolio, ABB India contracted our team for a multi-year ₹3.28 Cr turnkey external landscape and maintenance masterplan across their Peenya Industrial Campus in Bengaluru.',
      'Our team maintains internal road networks, pedestrian stone paths, manicured security perimeters, and structured hedge buffers using specialized tractor sweepers, hydraulic water tankers, and automated irrigation management.',
      'Regular soil aerating, tree canopy shaping, and organic pest barriers keep ABB\'s large corporate campus impeccably green and representative of their global sustainability ethos.'
    ],
    scope: [
      'Road and footpath sweeping with mechanical tractors',
      'Watering of extensive avenue trees and lawn borders',
      'Signboard, railing, and perimeter curb maintenance',
      'Stormwater manhole clearance & subsoil drainage care',
      'End-to-end dedicated multi-year AMC team'
    ],
    botanicalPalette: [
      'Polyalthia longifolia (False Ashoka)',
      'Conocarpus erectus',
      'Ficus benjamina (Weeping Fig)',
      'Tabebuia rosea',
      'Paspalum notatum sod'
    ]
  },
  {
    slug: 'ola-head-office-koramangala',
    title: 'ANI Technologies (Ola) Corporate Headquarters',
    client: 'ANI Technologies Pvt. Ltd (Ola)',
    sector: 'Corporate',
    location: 'Koramangala, Bengaluru',
    year: '2021-2025',
    intervention: '4,50,000 Sq. Ft Corporate Green Infrastructure, Indoor Atrium Living Systems & AMC',
    summary: 'End-to-end interior and exterior biophilic greening across Ola\'s 4.5 lakh sq. ft flagship corporate headquarters, including potted desk foliage, statement foyer palms, and dedicated horticultural nutrition.',
    featuredImage: '/images/projects/ola/ola-koramangala-hero.jpg',
    gallery: [
      '/images/projects/ola/ola-koramangala-atrium.jpg',
      '/images/projects/ola/ola-koramangala-greenery.jpg',
    ],
    metrics: [
      { label: 'Campus Greened', value: '4,50,000 sq.ft' },
      { label: 'Contract Scope', value: '₹95 Lakhs AMC' },
      { label: 'Specimens Maintained', value: '1,800+ Indoor Foliage Units' },
      { label: 'Care Frequency', value: 'Daily Dedicated Ground Crew' },
    ],
    overview: [
      'At ANI Technologies (Ola) corporate headquarters in Koramangala, Star Gardens manages a comprehensive 4,50,000 sq. ft workplace greening portfolio under an active ₹95 Lakhs maintenance agreement.',
      'The multi-story facility integrates soaring foyer palms, biophilic breakout corners, and sound-attenuating desk planter runs tailored for India\'s premier mobility tech company.',
      'A resident Star Gardens horticultural crew conducts daily moisture monitoring, leaf cleaning, micronutrient dosing, and preventive disease screening to maintain pristine indoor air quality.'
    ],
    scope: [
      'Turnkey biophilic indoor landscape execution & planter systems',
      'Daily leaf dusting, polishing, and moisture optimization',
      'Zero-odor organic nutrient application and root zone conditioning',
      'Rapid seasonal plant rotation and aesthetic refresh',
      'Full AMC facility reporting with dedicated site supervisor'
    ],
    botanicalPalette: [
      'Ficus lyrata (Fiddle Leaf Fig)',
      'Zamioculcas zamiifolia (ZZ Plant)',
      'Sansevieria trifasciata',
      'Rhapis excelsa (Lady Palm)',
      'Aglaonema commutatum'
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
    featuredImage: '/images/projects/wsp/wsp-workstations.jpg',
    gallery: [
      '/images/projects/wsp/wsp-curved-planters.jpg',
      '/images/projects/wsp/wsp-breakout.jpg',
      '/images/corporate/wsp-floor-greenery-vista.jpg',
    ],
    metrics: [
      { label: 'Workstations Integrated', value: '620 desks' },
      { label: 'Indoor Planter Units', value: '140 custom boxes' },
      { label: 'Air Quality Compliance', value: 'LEED & WELL Standards' },
      { label: 'Maintenance Visits', value: 'Bi-weekly technician visits' },
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
    slug: 'novo-nordisk-campus',
    title: 'Novo Nordisk Global Healthcare Campus',
    client: 'Novo Nordisk India Pvt. Ltd',
    sector: 'Corporate',
    location: 'Bengaluru, Karnataka',
    year: '2021-2024',
    intervention: 'Executive Lounges, Indoor Clean-Air Biophilia & Precision Horticultural AMC',
    summary: 'Pharmaceutical-grade indoor air purification landscapes, specialized micronutrient foliar feeding, and architectural planter arrangements across executive suites and meeting terraces.',
    featuredImage: '/images/projects/novo-nordisk/novo-nordisk-hero.jpg',
    gallery: [
      '/images/projects/novo-nordisk/novo-nordisk-lounge.jpg',
      '/images/projects/novo-nordisk/novo-nordisk-interior.jpg',
    ],
    metrics: [
      { label: 'Clean-Air Standards', value: 'Pharmaceutical Grade' },
      { label: 'Contract Scope', value: '₹60 Lakhs Precision AMC' },
      { label: 'Specimen Health', value: 'Zero-Pollen Allergen-Tested' },
      { label: 'Service Schedule', value: 'Weekly Micronutrient Care' },
    ],
    overview: [
      'Global healthcare leader Novo Nordisk selected Star Gardens for interior workspace biophilic design and precision plant healthcare covering their Bengaluru corporate headquarters, valued at ₹60 Lakhs.',
      'Operating under strict pharmaceutical environment requirements, every plant is potted in non-dusting sub-irrigation mediums and treated with biological, non-chemical pest inhibitors.',
      'Architectural statement specimens in matte ceramic and FRP vessels enhance boardroom biophilia, executive lounges, and reception meeting suites.'
    ],
    scope: [
      'Engineered indoor planter installations with sub-surface watering',
      'Scheduled foliage wipe-down and systematic leaf health inspections',
      'Organic bio-fertilization & non-toxic insect prevention',
      'Air-filtering botanical selection meeting strict indoor health standards'
    ],
    botanicalPalette: [
      'Spathiphyllum \'Sensation\' (Peace Lily)',
      'Chamaedorea seifrizii (Bamboo Palm)',
      'Philodendron \'Congo Green\'',
      'Dracaena reflexa',
      'Monstera deliciosa'
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
    featuredImage: '/images/projects/2gethr/2gethr-steps.jpg',
    gallery: [
      '/images/projects/2gethr/2gethr-courtyard.jpg',
      '/images/projects/2gethr/2gethr-entrance.jpg',
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
    slug: 'hotel-hilton-embassy-golf-links',
    title: 'Hotel Hilton & EGL 2-Acre Hospitality Landscape',
    client: 'Hilton Hotels & Embassy Golf Links',
    sector: 'Hospitality',
    location: 'Embassy Golf Links, Domlur, Bengaluru',
    year: '2022-2025',
    intervention: '2-Acre 5-Star Hotel Grounds, Reflection Water Features & Specimen Palm Boulevards',
    summary: 'High-visibility landscape architecture combining manicured banquet lawns, waterbody installations, and specimen royal palms welcoming global executives and delegates.',
    featuredImage: '/images/water-features/contemporary-stone-water-basin.jpg',
    gallery: [
      '/images/corporate/swiss-re-lobby-palms-urns.jpg',
      '/images/water-features/rain-curtain-cascade-feature.jpg',
    ],
    metrics: [
      { label: 'Property Footprint', value: '2 Acres (5-Star Luxury)' },
      { label: 'Feature Elements', value: 'Architectural Reflection Pools' },
      { label: 'Client Grade', value: 'Fortune 500 & Global Delegates' },
      { label: 'Service Standard', value: 'Daily Concierge Horticultural Care' },
    ],
    overview: [
      'Situated within the Embassy Golf Links (EGL) business corridor, Hotel Hilton requires landscape perfection 365 days a year. Star Gardens executes turnkey landscape care and horticultural enhancement across the 2-acre 5-star property.',
      'The landscape features grand entrance boulevards, sunken reflection basins with aquatic flora, and lush banquet lawns that host international corporate summits and luxury gatherings.'
    ],
    scope: [
      '5-star hospitality standard lawn and palm boulevard maintenance',
      'Reflecting pool bio-filtration and aquatic plant balancing',
      'Floral rotation for festive corporate seasons and VIP arrivals',
      'Comprehensive 24/7 grounds management and irrigation upkeep'
    ],
    botanicalPalette: [
      'Roystonea regia (Royal Palm)',
      'Ravenala madagascariensis',
      'Nymphaea caerulea (Blue Lotus)',
      'Pandanus utilis (Screw Pine)',
      'Zoysia matrella turf'
    ]
  },
  {
    slug: 'wipro-koramangala',
    title: 'Wipro Technologies IT Campus Grounds',
    client: 'Wipro Limited',
    sector: 'Corporate',
    location: 'Koramangala, Bengaluru',
    year: '2022-2024',
    intervention: 'Pedestrian Tree Boulevards, Green Breakout Spaces & Corporate AMC',
    summary: 'Campus greening and shaded outdoor break-out terraces engineered to provide tech workers refreshing biophilic respites between software release cycles.',
    featuredImage: '/images/projects/wipro/wipro-koramangala-hero.jpg',
    gallery: [
      '/images/projects/wipro/wipro-koramangala-garden.jpg',
    ],
    metrics: [
      { label: 'Campus Type', value: 'Tier-1 IT Center' },
      { label: 'Canopy Density', value: 'Native Evergreen Shade Trees' },
      { label: 'Grounds Model', value: 'Turnkey Design & Care' },
      { label: 'Nursery Supply', value: 'Kumbalgodu & Punganur Farms' },
    ],
    overview: [
      'For Wipro\'s established campus in Koramangala, Star Gardens rejuvenated peripheral tree buffers, central social plazas, and indoor executive atrium gardens.',
      'Sourced directly from our Kumbalgodu and Punganur nurseries, full-grown specimen trees and broadleaf hedges were established without site downtime, providing instant canopy shade and acoustic insulation from surrounding urban traffic.'
    ],
    scope: [
      'Mature specimen tree transplantation & stabilization',
      'Shaded outdoor meeting pavilions framed with tropical foliage',
      'Automatic pressurized drip irrigation lines with timer controllers',
      'Routine horticultural pruning and turf aerating'
    ],
    botanicalPalette: [
      'Alstonia scholaris (Devil\'s Tree)',
      'Plumeria alba',
      'Heliconia rostrata',
      'Ficus microcarpa',
      'Cynodon dactylon turf'
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
    featuredImage: '/images/projects/living-walls/interior-atrium-living-wall.jpg',
    gallery: [
      '/images/projects/living-walls/interior-cafeteria-bio-wall.jpg',
      '/images/projects/living-walls/exterior-living-facade.jpg',
      '/images/projects/living-walls/exterior-gate-green-wall.jpg',
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
    title: 'Exterior Architectural Living Facades',
    client: 'Tech Parks & Commercial Campuses',
    sector: 'Vertical Gardens',
    location: 'Bengaluru & Hyderabad',
    year: '2023-2024',
    intervention: 'High-Exposure Exterior Green Facades & Entrance Gates',
    summary: 'Weather-resilient exterior vertical gardens engineered with specialized UV-resistant cassettes, wind anchoring, and multi-tier computerized fertigation.',
    featuredImage: '/images/vertical-gardens/exterior-architectural-living-facade.jpg',
    gallery: [
      '/images/vertical-gardens/exterior-entrance-gate-living-wall.jpg',
      '/images/vertical-gardens/exterior-patterned-foliage-wall.jpg',
      '/images/vertical-gardens/exterior-perimeter-green-wall.jpg',
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
    slug: 'ramnagar-private-farm',
    title: 'Ramnagara 5.5-Acre Farm Estate & Resort',
    client: 'Private Farmstead & Eco-Resort',
    sector: 'Residential',
    location: 'Ramnagara, Bengaluru Outskirts',
    year: '2023',
    intervention: '5.5-Acre Masterplan, Sodded Lawns, Native Specimen Trees, Rockery & Waterbody',
    summary: 'A sprawling 5.5-acre agricultural landscape transformation featuring sweeping lawn terraces, native shade trees, natural stone water features, and night landscape lighting.',
    featuredImage: '/images/projects/ramnagar-farm/ramnagar-farm-hero.jpg',
    gallery: [
      '/images/projects/ramnagar-farm/ramnagar-farm-lawns.jpg',
      '/images/projects/ramnagar-farm/ramnagar-farm-plantation.jpg',
      '/images/projects/ramnagar-farm/ramnagar-farm-waterbody.jpg',
      '/images/projects/ramnagar-farm/ramnagar-farm-estate.jpg',
      '/images/projects/ramnagar-farm/ramnagar-resort-aerial.jpg',
    ],
    metrics: [
      { label: 'Site Footprint', value: '5.5 Acres' },
      { label: 'Project Investment', value: '₹4.50 - 5.70 Cr' },
      { label: 'Waterbody Feature', value: 'Natural Stone Pond' },
      { label: 'Care Model', value: 'Design, Build & Ongoing AMC' },
    ],
    overview: [
      'Documented in Star Gardens official portfolio, this 5.5-acre private farmstead in Ramnagara represents one of our most comprehensive agricultural landscape masterplans.',
      'Beginning with raw agricultural terrain, our team executed extensive topographical contouring, drainage swales, and soil enrichment to support vast sodded recreation lawns. The site integrates mature native Deccan trees, exotic specimen palms sourced directly from our Punganur and Rajahmundry nurseries, and a custom natural-stone waterbody.',
      'The estate is equipped with fully automated subsurface drip and pop-up sprinkler networks, ensuring flourishing greenery through South Indian summers with minimal water waste.'
    ],
    scope: [
      'Comprehensive masterplanning, grading & soil enhancement',
      'Extensive lawn installation (Bermuda & Mexican sod)',
      'Specimen transplanting of mature shade & flowering trees',
      'Natural rockery & multi-tier biological waterbody construction',
      'Architectural warm LED landscape lighting & automated irrigation',
      'Ongoing dedicated Annual Maintenance Contract (AMC)'
    ],
    botanicalPalette: [
      'Samanea saman (Rain Tree)',
      'Tabebuia rosea (Pink Poui)',
      'Bismarckia nobilis (Silver Palm)',
      'Plumeria rubra (Frangipani)',
      'Ficus benjamina (Weeping Fig)'
    ]
  },
  {
    slug: 'casa-grande-lexus',
    title: 'Casa Grande Lexus Residential Masterplan',
    client: 'Casa Grande',
    sector: 'Residential',
    location: 'Bengaluru, Karnataka',
    year: '2022',
    intervention: 'Landscape, Hardscape, Automated Irrigation & Central Park Plantation',
    summary: 'End-to-end landscape and hardscape masterplan for luxury residential development, integrating specimen palm boulevards, automated irrigation, and central recreation greens.',
    featuredImage: '/images/projects/casa-grande/casa-grande-lexus-hero.jpg',
    gallery: [
      '/images/projects/casa-grande/casa-grande-courtyard.jpg',
      '/images/projects/casa-grande/casa-grande-landscape.jpg',
    ],
    metrics: [
      { label: 'Contract Scope', value: '₹2.30 Crore Turnkey' },
      { label: 'Acreage Covered', value: 'Full Community Greens' },
      { label: 'Palms & Trees Planted', value: '450+ Specimens' },
      { label: 'Execution Timeline', value: '8 Months to Handover' },
    ],
    overview: [
      'Casa Grande Lexus contracted Star Gardens for complete end-to-end landscape, hardscape, irrigation, and plantation works valued at ₹2.30 Cr.',
      'Our team delivered tree-lined internal avenues, pedestrian granite flagstone walkways, structured clubhouse boundary screening, and sprawling central recreational lawns. Automated pop-up sprinklers connected to rainwater harvesting reservoirs deliver precise water management across all seasons.'
    ],
    scope: [
      'Complete civil hardscape paving, stone coping & pathways',
      'Automated multi-zone pressurized irrigation network',
      'Transplantation of avenue palms and ornamental flowering shrubs',
      'Sodded lawn turfing and erosion-control groundcovers'
    ],
    botanicalPalette: [
      'Roystonea regia (Royal Palm)',
      'Cassia fistula (Golden Shower Tree)',
      'Bougainvillea spectabilis (Espalier trained)',
      'Ixora coccinea',
      'Paspalum notatum turf'
    ]
  },
  {
    slug: 'gjm-farmhouse-chittoor',
    title: 'GJM Farmhouse Luxury Estate',
    client: 'GJM Private Family Estate',
    sector: 'Residential',
    location: 'Chittoor, Andhra Pradesh',
    year: '2023',
    intervention: 'Farm Villa Landscaping, Exotic Trees & Tropical Foliage Borders',
    summary: 'Expansive agricultural farmstead landscape with manicured sweeping lawn terraces, exotic palm clusters, shaded seating groves, and automated subsurface drip irrigation.',
    featuredImage: '/images/projects/gjm-farmhouse/gjm-farmhouse-hero.jpg',
    gallery: [
      '/images/projects/gjm-farmhouse/gjm-farmhouse-gardens.jpg',
      '/images/projects/gjm-farmhouse/gjm-farmhouse-palms.jpg',
      '/images/projects/gjm-farmhouse/gjm-farmhouse-courtyard.jpg',
    ],
    metrics: [
      { label: 'Estate Land Area', value: '3.8 Acres' },
      { label: 'Specimen Trees Planted', value: '280+ Native & Exotic' },
      { label: 'Irrigation Technology', value: 'Smart Solar Subsurface' },
      { label: 'Nursery Provenance', value: 'Punganur Farm (30 ac)' },
    ],
    overview: [
      'Featured prominently in our Residences portfolio, the GJM Farmhouse near Chittoor is a signature private retreat celebrating South Indian agricultural architecture.',
      'Star Gardens created a sequence of botanical rooms: a formal palm-lined approach road, sunken seating courtyards ringed by fragrant Plumeria, and gently contoured peripheral lawn embankments that soften the villa\'s architecture against surrounding farmlands.'
    ],
    scope: [
      'Topographical grading, soil balancing & subsoil drainage',
      'Curated specimen palm clusters and fruit orchard border',
      'Custom stone seat walls and flagstone stepping pathways',
      'Comprehensive horticultural maintenance and quarterly pruning'
    ],
    botanicalPalette: [
      'Hyophorbe lagenicaulis (Bottle Palm)',
      'Michelia champaca (Golden Champa)',
      'Cycas revoluta (Sago Palm)',
      'Heliconia rostrata (Hanging Lobster Claw)',
      'Strelitzia nicolai (Giant White Bird of Paradise)'
    ]
  },
  {
    slug: 'far-home',
    title: 'Far Home Architectural Courtyard & Garden',
    client: 'Private Family Residence',
    sector: 'Residential',
    location: 'Bengaluru Outskirts',
    year: '2023',
    intervention: 'Contemplative Courtyard, Monolithic Planters & Tropical Foliage',
    summary: 'Intimate private residential retreat featuring stone-paved inner courtyards, sculptural architectural planters, and lush tropical micro-gardens.',
    featuredImage: '/images/projects/far-home/far-home-hero.jpg',
    gallery: [
      '/images/projects/far-home/far-home-courtyard.jpg',
      '/images/projects/far-home/far-home-greenery.jpg',
    ],
    metrics: [
      { label: 'Courtyard Footprint', value: '4,200 sq.ft' },
      { label: 'Bespoke FRP Planters', value: '38 Designer Units' },
      { label: 'Plant Diversity', value: '26 Curated Species' },
      { label: 'AMC Coverage', value: 'Dedicated Fortnightly Care' },
    ],
    overview: [
      'Documented in our Residences portfolio, Far Home represents an architectural dialogue between indoor living pavilions and tranquil private garden courtyards.',
      'Star Gardens placed sculptural bespoke planters with architectural foliage like Monstera deliciosa and giant Fiddle Leaf Figs, accented by warm recessed up-lighting that transforms the courtyard after dark.'
    ],
    scope: [
      'Bespoke planter design & fabrication in matte textured finish',
      'Curated indoor/outdoor transition botanical palette',
      'Integrated sub-irrigation liners protecting delicate flooring',
      'Complete routine plant healthcare and foliar conditioning'
    ],
    botanicalPalette: [
      'Monstera deliciosa',
      'Ficus lyrata (Fiddle Leaf Fig)',
      'Alocasia macrorrhizos (Giant Taro)',
      'Chamaedorea elegans (Parlour Palm)',
      'Philodendron selloum'
    ]
  },
  {
    slug: 'prestige-fairfield',
    title: 'Prestige Fairfield Residential Grounds',
    client: 'Prestige Group',
    sector: 'Residential',
    location: 'Dollars Colony, RMV 2nd Stage, Bengaluru',
    year: '2023',
    intervention: 'Podium Landscaping, Tropical Shrub Borders & Clubhouse Greens',
    summary: 'High-end residential podium landscape featuring structured tropical borders, mature royal palms, sodded lawns, and automated drip networks.',
    featuredImage: '/images/projects/prestige-fairfield/prestige-fairfield-hero.jpg',
    gallery: [
      '/images/projects/prestige-fairfield/prestige-fairfield-grounds.jpg',
    ],
    metrics: [
      { label: 'Podium Area Greened', value: '65,000 sq.ft' },
      { label: 'Drainage Membrane Layer', value: 'Structural Roof Podium' },
      { label: 'Ready Nursery Stock', value: 'Kumbalgodu (2 ac)' },
      { label: 'Handover Quality Rating', value: '100% Client Sign-off' },
    ],
    overview: [
      'At Prestige Fairfield in prestigious Dollars Colony, Star Gardens transformed high-density residential podiums into lush, structured botanical promenades.',
      'Engineered with lightweight engineered soil mix and specialized root-barrier drainage cells, the landscape provides towering green screens and leisure gardens directly above basement parking levels.'
    ],
    scope: [
      'Lightweight growing media placement and grading over podium slab',
      'Specimen royal palms and flowering perimeter borders',
      'Automated drip lines with rain sensors and moisture monitors',
      'Clubhouse entry planters and tropical foliage urns'
    ],
    botanicalPalette: [
      'Roystonea regia (Royal Palm)',
      'Heliconia psittacorum',
      'Canna indica',
      'Dracaena reflexa (Song of India)',
      'Zoysia japonica sod'
    ]
  },
  {
    slug: 'belaku-home',
    title: 'Belaku Residence Courtyard Garden',
    client: 'Private Residence',
    sector: 'Residential',
    location: 'Bengaluru, Karnataka',
    year: '2023',
    intervention: 'Internal Zen Courtyard, Monolithic Steps & Exotic Foliage',
    summary: 'Intimate architectural courtyard garden featuring sculptural monolithic stone steps, lush shade-tolerant planting, and warm low-voltage ambient illumination.',
    featuredImage: '/images/projects/belaku-home/belaku-home-garden.jpg',
    gallery: [
      '/images/projects/belaku-home/belaku-home-steps.jpg',
      '/images/projects/belaku-home/belaku-home-detail.jpg',
    ],
    metrics: [
      { label: 'Courtyard Space', value: '1,800 sq.ft' },
      { label: 'Sculptural Steps', value: 'Black Granite Monoliths' },
      { label: 'Ambient Lighting', value: '2700K Warm Micro-LED' },
      { label: 'Air Flow Integration', value: 'Passive Biophilic Stack' },
    ],
    overview: [
      'Belaku Home is an architectural jewel celebrating natural light and shadow. Star Gardens designed an internal Japanese-influenced courtyard that serves as the biological heart of the home.',
      'Black granite monolithic step slabs hover over dark river pebble beds, bordered by Japanese Maple, dwarf Bamboo, and delicate cascading ferns.'
    ],
    scope: [
      'Dry landscape & Japanese stone layout',
      'Indoor microclimate shade flora selection',
      'Concealed drip lines and drainage tray systems',
      'Bespoke ambient illumination integration'
    ],
    botanicalPalette: [
      'Bambusa multiplex (Fernleaf Bamboo)',
      'Acer palmatum (Japanese Maple)',
      'Nephrolepis cordifolia (Sword Fern)',
      'Ophiopogon planiscapus \'Nigrescens\' (Black Mondo Grass)',
      'Asplenium nidus (Bird\'s Nest Fern)'
    ]
  },
  {
    slug: 'va-tech-wabag',
    title: 'BWSSB VA Tech Wabag Infrastructure Landscapes',
    client: 'VA Tech Wabag & BWSSB',
    sector: 'Corporate',
    location: 'Panathur, Mangalore & Challagatta',
    year: '2021-2023',
    intervention: 'Ecological Planting, Slope Stabilization & Irrigation Masterplan',
    summary: 'Extensive ecological civil and environmental landscape execution spanning multiple public infrastructure treatment facilities across Karnataka.',
    featuredImage: '/images/projects/va-tech-wabag/wabag-panathur.jpg',
    gallery: [
      '/images/projects/va-tech-wabag/wabag-mangalore.jpg',
      '/images/projects/va-tech-wabag/wabag-challagatta.jpg',
      '/images/projects/va-tech-wabag/wabag-landscape-site.jpg',
    ],
    metrics: [
      { label: 'Panathur Contract', value: '₹1.39 Crore' },
      { label: 'Mangalore Contract', value: '₹1.19 Crore' },
      { label: 'Challagatta Contract', value: '₹40 Lakhs' },
      { label: 'Scope Execution', value: 'Turnkey Landscape & Civil' },
    ],
    overview: [
      'Star Gardens was commissioned for large-scale industrial environmental landscaping across BWSSB water and infrastructure facilities engineered by VA Tech Wabag.',
      'The multi-crore execution included stabilizing steep embankments with vetiver and native groundcover, planting over 25,000 hardy indigenous shrubs and trees, and engineering heavy-duty irrigation networks suited for industrial environments.'
    ],
    scope: [
      'Industrial civil hardscape, security fencing & access curbs',
      'Erosion-control embankment slope stabilization',
      'Supply and planting of 25,000+ native climate-resilient trees',
      'Automated high-capacity industrial pump and pipe network'
    ],
    botanicalPalette: [
      'Chrysopogon zizanioides (Vetiver Grass)',
      'Pongamia pinnata (Indian Beech)',
      'Azadirachta indica (Neem)',
      'Nerium oleander',
      'Bougainvillea glabra'
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
