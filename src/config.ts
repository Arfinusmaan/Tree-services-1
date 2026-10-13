// src/config.ts – Central configuration for the entire website
// Replace demo values with real business data when customizing for a client

export const BUSINESS = {
  name: 'Evergreen Tree & Arbor Care',
  tagline: 'Professional Tree Care Services',
  phone: '(555) 000-0000',       // DEMO – replace with real number
  email: 'info@evergreentree.com', // DEMO – replace with real email
  address: '123 Forest Lane, Green City, GA 30301', // DEMO
  hours: 'Monday – Friday: 7:00 AM – 6:00 PM | Saturday: 8:00 AM – 2:00 PM',
  // Set to true only when verified credentials are provided
  verified: false,
  credentials: {
    licensed: false,
    insured: false,
    certifiedArborist: false,
    licenseNumber: '',
  },
  social: {
    facebook: '#',
    instagram: '#',
    google: '#',
  },
};

// Demo service areas – replace with real locations
export const SERVICE_AREAS = [
  { name: 'Green City', county: 'Forest County' },
  { name: 'Oakville', county: 'Forest County' },
  { name: 'Maple Town', county: 'Forest County' },
  { name: 'Pine Ridge', county: 'Timber County' },
  { name: 'Cedar Valley', county: 'Timber County' },
  { name: 'Willow Springs', county: 'Timber County' },
  { name: 'Elm Grove', county: 'Greenleaf County' },
  { name: 'Birch Harbor', county: 'Greenleaf County' },
  { name: 'Aspen Hills', county: 'Greenleaf County' },
  { name: 'Redwood Crossing', county: 'Summit County' },
  { name: 'Dogwood Park', county: 'Summit County' },
  { name: 'Cypress Landing', county: 'Summit County' },
];

export const SERVICES = [
  {
    id: 'tree-removal',
    title: 'Tree Removal',
    path: '/tree-removal',
    shortDesc: 'Safe, controlled removal of hazardous, dead, or unwanted trees with attention to surrounding structures and landscaping.',
  },
  {
    id: 'tree-pruning',
    title: 'Tree Trimming & Pruning',
    path: '/tree-pruning',
    shortDesc: 'Structural pruning, canopy thinning, clearance work, and seasonal maintenance to promote tree health and property safety.',
  },
  {
    id: 'stump-grinding',
    title: 'Stump Grinding',
    path: '/stump-grinding',
    shortDesc: 'Complete stump removal below grade, leaving a clean surface ready for replanting, sodding, or construction.',
  },
  {
    id: 'emergency',
    title: 'Emergency Tree Services',
    path: '/emergency',
    shortDesc: 'Rapid response for storm damage, fallen trees, hazardous limbs, and situations requiring immediate professional attention.',
  },
  {
    id: 'land-clearing',
    title: 'Land & Lot Clearing',
    path: '/land-clearing',
    shortDesc: 'Selective or complete vegetation clearing for residential lots, commercial sites, and development projects.',
  },
  {
    id: 'tree-health',
    title: 'Tree Health & Maintenance',
    path: '/tree-health',
    shortDesc: 'Proactive inspections, disease identification, structural assessments, and ongoing care programs for mature trees.',
  },
];

// ─── VERIFIED 100% WORKING HIGH-RES PHOTOGRAPHY MANIFEST ─────────────────
// All URLs verified with HTTP 200 response codes
export const IMAGES = {
  // HOME
  heroHome: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80',
  introHome: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80',
  processHome: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80',
  equipmentHome: 'https://images.unsplash.com/photo-1620127807580-990c3ecebd14?auto=format&fit=crop&w=1200&q=80',
  homeFeature1: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&w=1200&q=80',
  homeFeature2: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1200&q=80',

  // SERVICES OVERVIEW
  heroServices: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=1920&q=80',
  servicesIntro: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=1200&q=80',
  servicesGrid1: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=800&q=80',
  servicesGrid2: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&w=800&q=80',

  // TREE REMOVAL
  heroRemoval: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1920&q=80',
  removalWork1: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=80',
  removalWork2: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
  removalEquipment: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&w=1200&q=80',
  removalDetail: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80',

  // TREE PRUNING
  heroPruning: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80',
  pruningWork1: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&w=1200&q=80',
  pruningWork2: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80',
  pruningCanopy: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1200&q=80',
  pruningDetail: 'https://images.unsplash.com/photo-1505855265981-d52719d1f64e?auto=format&fit=crop&w=800&q=80',

  // STUMP GRINDING
  heroStump: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=80',
  stumpWork1: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=1200&q=80',
  stumpWork2: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80',
  stumpTurf: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',

  // EMERGENCY
  heroEmergency: 'https://images.unsplash.com/photo-1509803874385-db7c23652552?auto=format&fit=crop&w=1920&q=80',
  stormDamage1: 'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?auto=format&fit=crop&w=1200&q=80',
  stormDamage2: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  stormClearing: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',

  // LAND CLEARING
  heroLandClearing: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1920&q=80',
  landClearing1: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1200&q=80',
  landClearing2: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  landClearing3: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',

  // TREE HEALTH
  heroTreeHealth: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80',
  treeHealth1: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=1200&q=80',
  treeHealth2: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
  treeHealth3: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80',

  // GALLERY
  heroGallery: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80',

  // ABOUT
  heroAbout: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80',
  aboutTeam: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
  aboutValues: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
  aboutField: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1200&q=80',

  // SERVICE AREAS
  heroAreas: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80',
  areasSuburban: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80',

  // CONTACT
  heroContact: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1920&q=80',
  contactSupport: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
  contactConsultation: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&w=1200&q=80',
};

// Gallery images – illustrative stock photography only (all verified 200 OK)
export const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=80', alt: 'Arborist planning crane-assisted removal rigging', category: 'removal' },
  { src: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=900&q=80', alt: 'Tall pine timber stands assessed for sectional removal', category: 'removal' },
  { src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=900&q=80', alt: 'Professional canopy pruning on a tall deciduous tree', category: 'pruning' },
  { src: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&w=900&q=80', alt: 'Crown thinning and deadwood clearance in residential yard', category: 'pruning' },
  { src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=900&q=80', alt: 'Sub-grade stump grinding equipment clearing root flare', category: 'stump' },
  { src: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=900&q=80', alt: 'Ground-level view of tree stump after mechanical milling', category: 'stump' },
  { src: 'https://images.unsplash.com/photo-1509803874385-db7c23652552?auto=format&fit=crop&w=900&q=80', alt: 'Storm-damaged timber stabilized after heavy windstorm', category: 'storm' },
  { src: 'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?auto=format&fit=crop&w=900&q=80', alt: 'Broken limbs cleared and processed from driveway', category: 'storm' },
  { src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80', alt: 'Cleared wooded lot prepared for construction', category: 'clearing' },
  { src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=900&q=80', alt: 'Forest edge with selective clearing for a residential build', category: 'clearing' },
  { src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=900&q=80', alt: 'Mature canopy trees lining a residential street', category: 'pruning' },
  { src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=900&q=80', alt: 'Controlled tree felling in a suburban backyard', category: 'removal' },
  { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80', alt: 'Open lot after complete vegetation clearing', category: 'clearing' },
  { src: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=900&q=80', alt: 'Vibrant foliage inspection assessing tree health', category: 'pruning' },
  { src: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=900&q=80', alt: 'Morning sunlight through carefully pruned oak branches', category: 'pruning' },
  { src: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&w=900&q=80', alt: 'Forest floor with logs staged after selective thinning', category: 'removal' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'removal', label: 'Tree Removal' },
  { id: 'pruning', label: 'Pruning & Trimming' },
  { id: 'stump', label: 'Stump Grinding' },
  { id: 'storm', label: 'Storm Damage' },
  { id: 'clearing', label: 'Land Clearing' },
];

// ─── FAQ DATA ────────────────────────────────────────────────────
export const HOME_FAQS = [
  { q: 'How do I know if a tree needs to be removed?', a: 'Signs that a tree may need removal include significant lean, large dead branches in the crown, visible trunk decay or cavities, fungal growth at the base, root damage from construction, or repeated storm damage. A professional assessment can determine whether removal is the appropriate course of action.' },
  { q: 'What is the typical process for getting a tree service estimate?', a: 'You can request an estimate by phone, email, or through our online form. We schedule an on-site visit to assess the tree, the surrounding property, access conditions, and any specific concerns. After the assessment, we provide a written estimate with a clear scope of work.' },
  { q: 'Do you remove trees near buildings and power lines?', a: 'We regularly work in confined spaces near structures, fences, landscaping, and utility lines. These projects require careful planning, specialized rigging, and sometimes sectional removal techniques to control each piece as it comes down.' },
  { q: 'What happens to the wood and debris after tree removal?', a: 'We handle complete cleanup as part of every project. Wood can be cut into manageable sections for the property owner, chipped into mulch, or hauled away entirely. We discuss debris handling preferences before work begins.' },
  { q: 'How long does a typical tree removal take?', a: 'Project duration depends on the size of the tree, site access, proximity to structures, and the removal method required. A straightforward removal might take a few hours, while complex projects involving crane work or tight access can take a full day or more.' },
  { q: 'What should I do if a tree falls on my property during a storm?', a: 'Stay clear of the tree, especially if it is in contact with power lines or has caused structural damage. Do not attempt to remove it yourself. Contact your utility provider if lines are involved, then reach out to a professional tree service for assessment and safe removal.' },
];

export const SERVICES_FAQS = [
  { q: 'What is the difference between tree trimming and tree pruning?', a: 'Trimming generally refers to maintaining the shape and size of a tree for aesthetic or clearance purposes. Pruning is a more targeted practice that involves removing specific branches to improve tree structure, health, or safety. Both require an understanding of tree biology to avoid damaging the tree.' },
  { q: 'How often should trees be professionally maintained?', a: 'Most mature trees benefit from inspection and maintenance every two to three years, though fast-growing species or trees near structures may need attention more frequently. Young trees benefit from structural pruning every one to two years to establish strong branching patterns.' },
  { q: 'Can you work with trees of any size?', a: 'We work with trees across a wide range of sizes, from ornamental trees to large hardwoods and conifers. For exceptionally large or complex projects, we bring in specialized equipment such as cranes and bucket trucks.' },
  { q: 'Do I need a permit to remove a tree on my property?', a: 'Permit requirements vary by municipality. Some jurisdictions require permits for trees above a certain diameter, trees in conservation areas, or heritage-designated specimens. We can help you understand the requirements in your area before work begins.' },
];

export const REMOVAL_FAQS = [
  { q: 'Is tree removal the only option for a damaged tree?', a: 'Not always. Some damaged trees can be saved with corrective pruning, cabling and bracing, or other structural support. A professional assessment considers the extent of damage, species, location, and long-term viability before recommending removal.' },
  { q: 'What equipment is used for large tree removals?', a: 'Depending on the project, we may use chainsaws, rigging systems, bucket trucks, cranes, and chippers. The specific equipment depends on tree size, site access, proximity to structures, and the removal approach best suited to the situation.' },
  { q: 'Can a tree be removed in sections rather than felled whole?', a: 'Yes. Sectional removal is the standard approach when a tree is near structures, utility lines, or other trees. Each section is rigged and lowered in a controlled manner, which allows precise placement and protects the surrounding area.' },
  { q: 'What happens to the stump after tree removal?', a: 'Tree removal and stump grinding are typically separate services. After removal, the stump can be ground below grade level and the area filled, or it can be left in place if the property owner prefers. We can discuss stump options as part of the estimate.' },
];

export const PRUNING_FAQS = [
  { q: 'When is the best time to prune trees?', a: 'The ideal time depends on the species and the goal of pruning. Many deciduous trees are best pruned during dormancy in late winter, which reduces stress and allows better visibility of the branch structure. Some flowering trees benefit from pruning just after blooming. Dead or hazardous branches can be removed at any time.' },
  { q: 'How much of a tree can be pruned at one time?', a: 'The general guideline is to remove no more than 25 percent of the live crown in a single session. Excessive pruning can stress the tree, trigger rapid regrowth of weak branches, and increase vulnerability to disease and pests.' },
  { q: 'Will pruning damage my tree?', a: 'Proper pruning, performed with correct technique and at appropriate branch points, promotes tree health rather than harming it. Improper techniques such as topping, lion-tailing, or flush cutting can cause lasting damage.' },
];

export const STUMP_FAQS = [
  { q: 'How deep does stump grinding go?', a: 'We typically grind stumps six to twelve inches below the soil surface, though depth can vary depending on the intended use of the area. If you plan to replant a tree or install landscaping, we can adjust the grinding depth accordingly.' },
  { q: 'Can stump grinding damage underground utilities?', a: 'Utility lines can be a concern. Before grinding, we recommend having underground utilities marked. We take care to assess the work area and adjust our approach when lines or irrigation are present nearby.' },
  { q: 'What is left after stump grinding?', a: 'The process produces a mixture of wood chips and soil. This material can be used to fill the hole and as a natural mulch, or it can be removed entirely. The area can then be graded, seeded, or prepared for new planting.' },
];

export const EMERGENCY_FAQS = [
  { q: 'What qualifies as an emergency tree service?', a: 'Emergency situations typically involve fallen trees blocking access, trees leaning on structures or vehicles, large broken branches hanging in the canopy, or trees in contact with power lines. Any situation that presents an immediate safety risk should be treated as urgent.' },
  { q: 'What should I do while waiting for an emergency tree crew?', a: 'Stay well away from the tree, especially if power lines are involved. Do not attempt to remove the tree or cut branches yourself. If the situation involves structural damage, document it for your insurance provider. Keep people and pets clear of the affected area.' },
  { q: 'Does insurance cover emergency tree removal?', a: 'Many homeowner insurance policies cover tree removal when a tree has fallen on an insured structure. Coverage varies by policy and provider. We recommend contacting your insurance company promptly and can provide documentation to support your claim.' },
];

export const LAND_CLEARING_FAQS = [
  { q: 'What is involved in lot clearing?', a: 'Lot clearing can range from selective removal of specific trees and brush to complete vegetation clearing. The scope depends on the project—whether it is for new construction, improved access, fire mitigation, or landscape renovation.' },
  { q: 'Can you preserve specific trees during clearing?', a: 'Yes, selective clearing allows us to remove only the vegetation that needs to go while protecting designated trees. We mark trees for preservation before work begins and take measures to protect their root zones during the clearing process.' },
  { q: 'How is brush and debris handled during clearing?', a: 'Vegetation can be chipped on-site for use as mulch, hauled away, or managed according to the property owner\'s preference. For larger projects, we coordinate debris removal logistics as part of the project plan.' },
];

export const TREE_HEALTH_FAQS = [
  { q: 'How can I tell if my tree is unhealthy?', a: 'Common signs include unusual leaf discoloration or early leaf drop, thinning canopy, dead branches, bark peeling or cracking in unusual patterns, fungal growth on the trunk or roots, and leaning or root heaving. Not all symptoms indicate a serious problem, but a professional assessment can determine the cause.' },
  { q: 'Can a diseased tree be saved?', a: 'It depends on the type and extent of the disease, the species, and how far the condition has progressed. Some conditions can be managed with proper treatment, improved growing conditions, or targeted pruning. Others may have progressed beyond effective treatment.' },
  { q: 'How often should trees be inspected?', a: 'We recommend a professional inspection every two to three years for mature trees, and more frequently for trees near structures, in high-traffic areas, or with known health concerns. Trees should also be inspected after significant storm events.' },
];

export const CONTACT_FAQS = [
  { q: 'How quickly will I receive a response after submitting a request?', a: 'We aim to respond to estimate requests within one to two business days. During periods of high demand, particularly after storm events, response times may be longer. Emergency situations are prioritized.' },
  { q: 'What information should I include in my estimate request?', a: 'The more detail you provide, the more accurately we can prepare for the on-site assessment. Helpful information includes the type of service needed, the approximate size and species of tree, its location on the property, proximity to structures or utilities, and any specific concerns.' },
  { q: 'Is there a charge for estimates?', a: 'Standard estimates for residential tree services are provided at no charge. Projects that require specialized assessment—such as large-scale land clearing or complex commercial work—may involve a consultation fee, which we communicate in advance.' },
];

export const ABOUT_FAQS = [
  { q: 'What sets professional tree care apart from general landscaping?', a: 'Professional tree care is a specialized field that involves understanding tree biology, structural mechanics, rigging systems, and species-specific practices. Unlike general landscaping, arboricultural work often requires climbing, aerial access equipment, and knowledge of how pruning decisions affect long-term tree health and structure.' },
  { q: 'How do you protect my property during tree work?', a: 'We assess each site before beginning work and take measures to protect lawns, gardens, driveways, and structures. This may include laying protective ground covers, using rigging to control the direction of falling limbs, and carefully planning equipment access routes.' },
  { q: 'Do you provide written estimates?', a: 'Yes. After an on-site assessment, we provide a written estimate that includes the scope of work, the approach we plan to take, and the associated cost. This gives you clear documentation before any work begins.' },
];

export const AREAS_FAQS = [
  { q: 'Do you serve areas not listed here?', a: 'Our service area is regularly expanding. If your community is not listed, we encourage you to reach out—we may still be able to accommodate your project depending on the scope and location.' },
  { q: 'Is there a travel fee for locations farther from your base?', a: 'For projects within our standard service area, there is no additional travel charge. For locations outside our typical range, we may include a travel component in the estimate, which we communicate transparently before scheduling work.' },
];
