export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/people", label: "People" },
  { href: "/lgrhub", label: "LGR Hub" },
  { href: "/frameworks", label: "Frameworks" },
  { href: "/joinus", label: "Join us" },
  { href: "/designrichpictures", label: "Design" },
  { href: "/newsletter", label: "Newsletter" },
] as const;

export const homeImages = {
  hero: {
    src: "https://static.wixstatic.com/media/11062b_4067e167d0a04120a48d356d5dc6b465f000.jpg/v1/fill/w_1600%2Ch_900%2Cal_c%2Cq_88%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/11062b_4067e167d0a04120a48d356d5dc6b465f000.jpg",
    alt: "People working together around a table",
  },
  justice: {
    src: "https://static.wixstatic.com/media/2789fba4f9de4318a4fe0cbcfd39b671.jpg/v1/crop/x_0%2Cy_118%2Cw_4965%2Ch_3037/fill/w_900%2Ch_560%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/2789fba4f9de4318a4fe0cbcfd39b671.jpg",
    alt: "Green landscape representing environmental and social justice",
  },
  delivery: {
    src: "https://static.wixstatic.com/media/cdb75f7fa13b4c7db41d8b3c36b2c3ca.jpg/v1/fill/w_900%2Ch_560%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/cdb75f7fa13b4c7db41d8b3c36b2c3ca.jpg",
    alt: "Experienced public service practitioners collaborating",
  },
  clients: {
    src: "https://static.wixstatic.com/media/11062b_9f9c401444144cf3bbc15afaf65a43d7~mv2.jpg/v1/fill/w_900%2Ch_560%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Happy%20Beach%20Trip.jpg",
    alt: "A group celebrating together on a beach",
  },
  methods: {
    src: "https://static.wixstatic.com/media/66ab985899b74824855c87fffa91f885.jpg/v1/fill/w_900%2Ch_560%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Over%20The%20Edge.jpg",
    alt: "A climber using practical methods to navigate a challenge",
  },
  academy: {
    src: "https://static.wixstatic.com/media/11062b_1f1d31091b1546d28e8d7ffbebf23a7a~mv2.jpg/v1/crop/x_0%2Cy_29%2Cw_5500%2Ch_3609/fill/w_900%2Ch_560%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Writing%20on%20Sticky%20Notes.jpg",
    alt: "Workshop participants writing ideas on sticky notes",
  },
  learning: {
    src: "https://static.wixstatic.com/media/1cd9eba76a294db7befc9b890490d7f6.jpg/v1/crop/x_1124%2Cy_532%2Cw_4645%2Ch_3402/fill/w_900%2Ch_560%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Holding%20Hands%20.jpg",
    alt: "People supporting one another in a learning community",
  },
} as const;

type Person = {
  name: string;
  role: string;
  focus: string;
  phone?: string;
  email?: string;
};

export const people: readonly Person[] = [
  {
    name: "Benjamin Taylor",
    role: "Managing partner",
    focus: "Public service transformation, systems practice and organisational change",
    phone: "07931 317230",
    email: "benjamin.taylor@redquadrant.com",
  },
  {
    name: "Natasa Sears",
    role: "Managing partner",
    focus: "Design, visual communication, research and programme delivery",
    phone: "07740 707646",
    email: "natasa.sears@redquadrant.com",
  },
  {
    name: "Naseema Khan",
    role: "Portfolio, programme and project management",
    focus: "Complex programmes, delivery assurance, turnaround and recovery",
    phone: "07879 896855",
  },
  {
    name: "Frank Curran",
    role: "Adult social care",
    focus: "Care-system redesign, improvement and transformation",
  },
  {
    name: "James Wickham",
    role: "Digital transformation",
    focus: "Digital services, operating models and practical delivery",
    phone: "07973 143303",
  },
  {
    name: "Andrew Humphreys",
    role: "Strategy, business intelligence and data",
    focus: "Analysis, insight, performance and evidence-led decisions",
    phone: "07813 087054",
  },
  {
    name: "Janice Prentice",
    role: "Board effectiveness and equality, diversity and inclusion",
    focus: "Inclusive leadership, governance and organisational effectiveness",
  },
  {
    name: "Sarah Johnston",
    role: "Leadership and operational excellence",
    focus: "Contract management and outcome-based commissioning",
    phone: "07701 049836",
  },
  {
    name: "Paul Pember",
    role: "Customer experience",
    focus: "Customer insight, service design and channel transformation",
  },
  {
    name: "Stephen Moss",
    role: "Coaching and leadership development",
    focus: "Coaching, teams and leadership practice",
  },
  {
    name: "David Mason",
    role: "Consultant community manager and consultant",
    focus: "Consultant mobilisation, delivery support and community",
    phone: "07887 442487",
  },
  {
    name: "Amber Griffiths",
    role: "Consultant",
    focus: "Research, analysis and public service delivery",
    phone: "07984 886143",
  },
];

export const operationsPeople = [
  { name: "Lucas Yeghiaian", role: "Bid and operations manager" },
  { name: "Nikola Malimarkov", role: "Operations support" },
] as const;

export const serviceThemes = [
  "Leadership",
  "Alternative delivery models",
  "Commissioning",
  "Transformation and change",
  "People and organisational development",
  "Digital and customer-centred design",
  "Equality, diversity and inclusion",
] as const;

export const serviceAreas = [
  "Culture and community",
  "Housing",
  "Adult social care",
  "Health and the NHS",
  "ICT and digital",
  "Criminal justice",
  "Public realm",
  "Corporate, finance and democratic services",
  "Customer services and experience",
  "Human resources, OD and learning",
  "Commissioning and procurement",
] as const;

export const frameworkGroups = [
  {
    name: "Crown Commercial Service",
    items: [
      "Audit and Assurance Services Two (A&AS2) — Lot 4",
      "Digital Outcomes and Specialists",
      "G-Cloud",
      "Low Value Purchase System — RM6237",
    ],
  },
  {
    name: "Office of Government Procurement, Ireland",
    items: [
      "Business consulting — Lots 1 and 7",
      "Strategic, policy and organisational consulting — Lots 2 and 8",
      "Programme and project management — Lots 3 and 9",
      "Economic and financial consulting — Lots 4 and 10",
    ],
  },
  {
    name: "Public sector and health frameworks",
    items: [
      "HealthTrust Europe",
      "NHS Shared Business Services — SBS10197, Lots 1–3",
      "ESPO 664 consultancy framework",
      "Bloom / NEPRO",
      "Constellia",
      "Matrix Milestones",
    ],
  },
] as const;

type GalleryGroup = {
  client: string;
  project: string;
  year: string;
  format: string;
  images: readonly { id: string; ext?: "png" | "jpg" }[];
};

export const galleryGroups: readonly GalleryGroup[] = [
  {
    client: "The Heritage Council, Ireland",
    project: "Public-facing visual communication",
    year: "2024",
    format: "Infographic series",
    images: [
      { id: "12b1f3_d7db65638dfa4822a372834c1bc6f605", ext: "jpg" },
      { id: "12b1f3_f12ca6a565c14d2ba58585d5e64e7173", ext: "jpg" },
      { id: "12b1f3_a528f3082cb349649b3352e71b2fff4c", ext: "jpg" },
      { id: "12b1f3_d5ba6d035145438ca35452f07618e4e4", ext: "jpg" },
      { id: "12b1f3_e4b51ed27c494ca28357cdf38bf2afb9", ext: "jpg" },
      { id: "12b1f3_75412f673ab344328a5eb640e66f33ac", ext: "jpg" },
    ],
  },
  {
    client: "Kent County Council",
    project: "Resilience Summit",
    year: "2023",
    format: "Event identity and visual assets",
    images: [
      { id: "12b1f3_da3cc8082efb46abbc0fd146ef83cd7a" },
      { id: "12b1f3_060a7fa78a5e4c1394dfda56b3079218" },
      { id: "12b1f3_602004e0fc1644a49dcd1f0921c18c03" },
      { id: "12b1f3_5d16b1840814440a8ebe9e74ed771686" },
      { id: "12b1f3_18b1bc3ab7264a6b919d8483f46fff8e" },
      { id: "12b1f3_096c7e4b964f4c358f91c46de6d37bdb" },
      { id: "12b1f3_b0596e5e7fdc4fe8870cbbdd7503c934" },
    ],
  },
  {
    client: "Natural England",
    project: "Biodiversity Metric Group workshop",
    year: "2023",
    format: "Workshop visualisation series",
    images: [
      { id: "12b1f3_5262c7740be44da48e063beaa2c642c0" },
      { id: "12b1f3_ab0bcce783334555a4b7e125c2eb2c15" },
      { id: "12b1f3_2740e5a14f0848199a4c4308031c0c0f" },
      { id: "12b1f3_aa02d7a84bbc43c5a1e1539a6f4d7f2f" },
      { id: "12b1f3_5d41abe0a2ac4ec3a9b2f4354517685f" },
      { id: "12b1f3_b9240b4ea5644bc38aab27454d0dde4a" },
      { id: "12b1f3_7e017741e9d9410780a00ae15cb5d863" },
      { id: "12b1f3_6cee78cf043c4d72a6009108fa578c0d" },
      { id: "12b1f3_3a0361892a594d299eb621ee91bad1d8" },
    ],
  },
  {
    client: "Local Government Association",
    project: "Cultural devolution research",
    year: "2024",
    format: "Research infographics",
    images: [
      { id: "12b1f3_eef4768c62314b4dba29f67fbf892d01" },
      { id: "12b1f3_7a1d5879f0af4bc5a6cfff3d8c832d47" },
      { id: "12b1f3_47a4e30668314d55af7c5fa75a07808e" },
    ],
  },
  {
    client: "Natural England",
    project: "Environmental Collaborative Leadership",
    year: "2023",
    format: "Rich picture",
    images: [{ id: "12b1f3_e732fde17bbd4834be73986fa2964150" }],
  },
  {
    client: "Local Government Association",
    project: "Roundtable series",
    year: "2022",
    format: "Digital graphic recording",
    images: [
      { id: "12b1f3_d34b5c850c4f4260bf1f00a191ae9212", ext: "jpg" },
      { id: "12b1f3_7271de66269849739abe971dc2e2453a", ext: "jpg" },
      { id: "12b1f3_6435270adc604a78b5cd3aca3cbe5d11", ext: "jpg" },
    ],
  },
  {
    client: "Birmingham City Council",
    project: "Prevention in adult social care pathways",
    year: "2021",
    format: "Rich pictures",
    images: [
      { id: "12b1f3_10d79876dcae4f53a16150e7968f1a67", ext: "jpg" },
      { id: "12b1f3_cf59256ed2c74c1fb6673e5cd1a5141a", ext: "jpg" },
    ],
  },
  {
    client: "Northamptonshire County Council",
    project: "Domestic abuse case studies",
    year: "2021",
    format: "Infographic series",
    images: [
      { id: "12b1f3_b97b1d8330fd4c8b9a0f06f1f43a9e4e", ext: "jpg" },
      { id: "12b1f3_dcb43a20470442bfa23c0e60d9a83fb0", ext: "jpg" },
      { id: "12b1f3_27c14c0799c04eb490160b7df5dc678b", ext: "jpg" },
      { id: "12b1f3_2c9397bb2a144982bf43626df3c25e4f", ext: "jpg" },
    ],
  },
  {
    client: "Northamptonshire County Council",
    project: "Domestic abuse accommodation and support pathway review",
    year: "2021",
    format: "Review booklet",
    images: [
      { id: "12b1f3_daf61ff7315d4efdb605867d78c52775" },
      { id: "12b1f3_23d1dab1609a4bb2bf7acab6e93e0d6d" },
      { id: "12b1f3_e972df3411cf4a91b70a94d22f566b45" },
      { id: "12b1f3_d9de1bcdcec14d30aa386fd7fa554c8b" },
    ],
  },
  {
    client: "Public Service Transformation Academy",
    project: "Public Service State of Transformation survey",
    year: "2021",
    format: "Review booklet",
    images: [
      { id: "12b1f3_628c59fd1fcb4f638c758579ab125d01" },
      { id: "12b1f3_c709056474954bb1b5a7ebc84422ad63" },
      { id: "12b1f3_9bed995449bc4415898a7c1ef00fead1" },
      { id: "12b1f3_f78114bf5ef74287906eed3296fca046" },
    ],
  },
  {
    client: "Cultural Commissioning Programme",
    project: "Organisational structures",
    year: "2021",
    format: "Visual models",
    images: [
      { id: "12b1f3_bfc5a97d5b924837a6bf550edcea49d3" },
      { id: "12b1f3_ad8ed9f06e004ac483d3e01e008fef74" },
    ],
  },
  {
    client: "Bristol City Council",
    project: "Applied Service Redesign Programme",
    year: "2021",
    format: "Programme visual",
    images: [{ id: "12b1f3_4eb4924ac093461c8c87d6a12178a187" }],
  },
  {
    client: "Bristol City Council",
    project: "Applied Service Redesign learning set",
    year: "2021",
    format: "Double-sided learning cards",
    images: [
      { id: "12b1f3_9bedf7d4228a46759e1bdafe2bc35153" },
      { id: "12b1f3_51fb9cb2a9a846efaa99d7d1fc750cf4" },
      { id: "12b1f3_b5e427dc0b1c42a69f9d4e8af2f7de59" },
      { id: "12b1f3_196d1aa84aac47418993816fdfb0f209" },
      { id: "12b1f3_06122103b44a4c89b7235c898586804d" },
      { id: "12b1f3_bd62a020adff47db89041dc9268a2d05" },
    ],
  },
] as const;

export function galleryImageUrl(id: string, ext: "png" | "jpg" = "png") {
  return `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fill/w_1200%2Ch_900%2Cal_c%2Cq_88%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/${id}~mv2.${ext}`;
}
