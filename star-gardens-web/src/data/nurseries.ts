export interface NurseryLocation {
  id: string;
  name: string;
  state: string;
  acreage: number;
  established: string;
  focus: string;
  soilAndClimate: string;
  keySpecialties: string[];
  image: string;
}

export const nurseriesData: NurseryLocation[] = [
  {
    id: 'rajahmundry',
    name: 'Rajahmundry Propagation & Mother Farm',
    state: 'Andhra Pradesh',
    acreage: 32,
    established: '2009',
    focus: 'Large-scale tropical palm propagation, exotic shade trees & specimen nursery stock',
    soilAndClimate: 'Alluvial Godavari river basin soil, warm tropical climate with high humidity, ideal for rapid palm root development.',
    keySpecialties: [
      'Royal Palms, Foxtail Palms & Sealing Wax Palms',
      'Exotic flowering shade trees & mature Ficus specimens',
      'Extensive mother-plant tissue and cutting beds',
      'Direct highway freight to Bengaluru & Chennai'
    ],
    image: '/images/nursery/rajahmundry-acres-growing.jpg'
  },
  {
    id: 'punganur',
    name: 'Punganur Acclimatization & Living Wall Farm',
    state: 'Andhra Pradesh (Bordering Karnataka)',
    acreage: 30,
    established: '2012',
    focus: 'Indoor foliage cultivation, vertical garden pre-vegetated cassettes & ornamental shrubs',
    soilAndClimate: 'Deccan plateau transition elevation, cool nights and controlled polyhouse shade structures for indoor light conditioning.',
    keySpecialties: [
      'Pre-vegetated vertical garden cassette panels',
      'Acclimatized indoor foliage (Monstera, Philodendron, Calathea)',
      'Designer pot staging & containerized indoor specimens',
      'Strategic 3-hour transit distance to Bengaluru corporate corridor'
    ],
    image: '/images/nursery/punganur-ready-stock-greenhouse.jpg'
  },
  {
    id: 'madikeri',
    name: 'Madikeri Highland Farm',
    state: 'Karnataka (Western Ghats)',
    acreage: 6,
    established: '2015',
    focus: 'High-altitude sub-tropical species, exotic tree ferns, moss cultivation & bonsai',
    soilAndClimate: 'Western Ghats laterite volcanic soils, high annual precipitation, mist microclimate.',
    keySpecialties: [
      'Tree ferns (Cyathea) & shade groundcovers',
      'Living sphagnum moss for Kokedama workshops',
      'Specimen bonsai and rockery botanical specimens',
      'Cool-climate hospitality landscape sourcing'
    ],
    image: '/images/nursery/tropical-foliage-cultivation.jpg'
  },
  {
    id: 'kumbalgodu',
    name: 'Kumbalgodu Urban Logistics & Holding Depot',
    state: 'Karnataka (Bengaluru South)',
    acreage: 2,
    established: '2018',
    focus: 'Immediate city transit holding, quick-response AMC swaps & event rental staging',
    soilAndClimate: 'Urban holding greenhouses with automated misting and rapid fleet loading docks.',
    keySpecialties: [
      'Emergency replacement inventory for 175+ AMC contracts',
      '48-hour staging for corporate event & exhibition rentals',
      'Workshop materials, soil blending & custom potting station',
      'HQ dispatch center for Bengaluru city crew fleets'
    ],
    image: '/images/nursery/ornamental-stock-holding.jpg'
  }
];

export const studioFacts = {
  founded: 2009,
  totalAcreage: 70,
  nurseriesCount: 4,
  activeAmcClients: '175+',
  citiesServed: ['Bengaluru', 'Hyderabad', 'Chennai', 'Pune'],
  contactPerson: 'Abhishek Suhas',
  phone: '+91 97430 30555',
  email: 'abhi@stargardens.in',
  headquarters: 'Bengaluru, Karnataka, India'
};
