export type NavItem = {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Categories', href: '/#categories' },
  { label: 'About Us', href: '/about' },
  { label: 'Surety Bond', href: '/corporate#surety' },
  { label: 'Knowledge hub', href: '/#knowledge' },
]

export const FOOTER_LINKS = {
  corporate: [
    { label: 'Employee', href: '/corporate' },
    { label: 'Marine', href: '/corporate' },
    { label: 'Liability', href: '/corporate' },
    { label: 'Project', href: '/corporate' },
    { label: 'Project Insurance', href: '/corporate' },
  ],
  retail: [
    { label: 'Health', href: '/retail' },
    { label: 'Motor', href: '/retail' },
    { label: 'Travel', href: '/retail' },
    { label: 'Life', href: '/retail' },
    { label: 'Home', href: '/retail' },
  ],
  support: [
    { label: 'Talk to Expert', href: '/#contact' },
    { label: 'Raise a Claim', href: '/#contact' },
    { label: 'Track Policy', href: '/#contact' },
    { label: 'Renewals', href: '/#contact' },
    { label: 'Help Center', href: '/#contact' },
  ],
} as const

export const TRUST_POINTS = [
  '100% Unbiased advice',
  'Zero hidden fees',
  'Lifetime claim support',
] as const

export const CORPORATE_TYPES = [
  { label: 'Employee', icon: 'users' },
  { label: 'Marine', icon: 'ship' },
  { label: 'Liability', icon: 'scale' },
  { label: 'Project', icon: 'building' },
  { label: 'Surety', icon: 'lock' },
] as const

export const RETAIL_TYPES = [
  { label: 'Health', icon: 'heart' },
  { label: 'Motor', icon: 'car' },
  { label: 'Travel', icon: 'map-pin' },
  { label: 'Life', icon: 'heart-hand' },
  { label: 'Home', icon: 'home' },
] as const

export const WHY_CARDS = [
  {
    id: 'claim',
    title: 'Claim Support',
    description: 'We fight your claim with you. Paperwork, follow-ups, settlements — handled.',
    tone: 'featured' as const,
  },
  {
    id: 'expert',
    title: 'Expert Guidance',
    description: 'Talk to real agents, not chatbots.',
    tone: 'lavender' as const,
  },
  {
    id: 'fast',
    title: 'Fast Policy Issuance',
    description: 'Quick quotes and policy delivery.',
    tone: 'white' as const,
  },
  {
    id: 'e2e',
    title: 'End to End Assistance',
    description: 'From quote to renewal, always.',
    tone: 'white' as const,
  },
  {
    id: 'transparent',
    title: 'Transparent Advice',
    description: 'Clear comparison, zero hidden terms.',
    tone: 'peach' as const,
  },
] as const

export const HOW_STEPS = [
  {
    step: '01',
    title: 'Tell us what you need',
    cardTitle: 'Tell what you need',
    description:
      'Share the basics — who and what needs covering. No 20-page forms, no confusing categories, just a quick, honest intake.',
    checklist: ['Quick 2-minute intake', 'Plain-language questions', 'See every option upfront'],
    accent: 'Two minutes, plain language, zero jargon',
    icon: 'cloud' as const,
    gradient: 'from-[#FF6A3D] via-[#FF8A3D] to-[#F5C518]',
  },
  {
    step: '02',
    title: 'Talk to a real expert',
    cardTitle: 'Talk to real experts',
    description:
      'A qualified advisor calls you back — not a script-reading agent chasing targets. Ask anything, take your time.',
    checklist: ['IRDAI-guided advisors', 'Zero spam, guaranteed', 'Honest plan comparisons'],
    accent: 'Real advice, zero pushy sales',
    icon: 'phone' as const,
    gradient: 'from-[#22C55E] via-[#84CC16] to-[#EAB308]',
  },
  {
    step: '03',
    title: 'Get matched & protected',
    cardTitle: 'Get matched & protected',
    description:
      "Once you're confident, we handle the paperwork — application, documentation, and follow-ups with the insurer.",
    checklist: ['Personalised recommendation', 'Simple digital signup', 'Fast policy issuance'],
    accent: 'Matched, signed, and protected.',
    icon: 'shield' as const,
    gradient: 'from-[#FB923C] via-[#F472B6] to-[#FDA4AF]',
  },
  {
    step: '04',
    title: "We've got your back",
    cardTitle: "We've got your back",
    description:
      "Insurance doesn't end at signup. From claims to renewals, your Bro stays reachable — long after the sale.",
    checklist: ['24/7 claims support', 'Renewal reminders, sorted', 'Real humans, always'],
    accent: 'Claims, renewals — we stay close.',
    icon: 'heart-hand' as const,
    gradient: 'from-[#38BDF8] via-[#60A5FA] to-[#93C5FD]',
  },
] as const

export const TESTIMONIALS: {
  name: string
  image: string
  video?: string
  quote: string
}[] = [
  {
    name: 'Kusum',
    image: '/images/testimonial-kusum.png',
    video: '/images/testimonial-kusum.mp4',
    quote: 'Claim settled without the usual runaround.',
  },
  {
    name: 'Ankush',
    image: '/images/testimonial-ankush.png',
    video: '/images/testimonial-ankush.mp4',
    quote: 'Compared plans clearly before I bought.',
  },
  {
    name: 'Bandana',
    image: '/images/testimonial-bandana.png',
    video: '/images/testimonial-bandana.mp4',
    quote: 'Renewed my family cover in one call.',
  },
]

export const CONTACT = {
  phones: ['+91 7838288040', '+91 9999321691'],
  emails: ['raghav@bimabro.com', 'keshav@bimabro.com'],
  address: [
    '2nd floor, Above Bank of Barodra,',
    'Plot no 1, Pocket 8A Manav chowk,',
    'Sector-15, Rohini, Delhi-110089',
  ],
  tagline: 'Your insurance Bro friendly, unbiased advisory for individuals and businesses.',
} as const
