import { ServiceItem, BarberProfile, GalleryItem, ReviewItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Bran2Barberking',
  subName: 'Latin Barber International',
  tagline: 'The Art of Precision & Masculine Luxury',
  location: 'Miami, Florida',
  address: 'Brickell & Downtown Miami Grooming Lounge, Miami, FL 33131',
  phone: '+1 737-351-8200',
  phoneClean: '17373518200',
  whatsappUrl: 'https://wa.me/17373518200',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100064255593761',
  email: 'hildebrandoacosta18@gmail.com',
  hours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 8:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – 8:00 PM' },
    { days: 'Sunday', hours: '10:00 AM – 5:00 PM' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'master-haircut',
    name: 'Master Signature Haircut',
    category: 'haircut',
    price: 45,
    duration: '45 mins',
    popular: true,
    description: 'Precision shear & clipper work, tailored skin taper or fade, straight razor nape clean-up, and styling finish.',
    features: ['Custom consultation & head shape analysis', 'Precision skin fade or low taper', 'Hot lather neck shave', 'Premium matte or pomade finish']
  },
  {
    id: 'skin-fade-taper',
    name: 'Precision Skin Fade & Razor Lineup',
    category: 'haircut',
    price: 50,
    duration: '50 mins',
    popular: true,
    description: 'Ultra-crisp gradient drop, mid, or high skin fade finished with foil shaver and pencil-sharp edge alignment.',
    features: ['Razor-sharp hairline definition', 'Smooth foil shaver gradient', 'Bevel hair texturizing', 'Cooling aftershave tonic']
  },
  {
    id: 'beard-sculpting',
    name: 'Beard Sculpting & Hot Towel Shave',
    category: 'shave',
    price: 35,
    duration: '35 mins',
    popular: false,
    description: 'Artisanal beard trimming, facial symmetry contouring, essential oil steam towel treatment, and straight razor edges.',
    features: ['Warm botanical eucalyptus towel', 'Pre-shave hydrating butter', 'Straight razor cheek & throat lines', 'Organic beard oil massage']
  },
  {
    id: 'royal-vip-combo',
    name: "The King's Royal VIP Experience",
    category: 'combo',
    price: 85,
    duration: '75 mins',
    popular: true,
    description: 'The pinnacle grooming package. Master haircut, full beard sculpt, double hot towel therapy, and invigorating scalp massage.',
    features: ['Signature haircut & crisp fade', 'Beard sculpting & razor lining', 'Double aromatic hot towel steam', 'Scalp detox wash & cold air freeze']
  },
  {
    id: '360-wave-fade',
    name: '360 Waves & Low Drop Taper',
    category: 'specialty',
    price: 55,
    duration: '50 mins',
    popular: false,
    description: 'Specialized crown wave alignment, pomade compression, crisp low temporal taper, and clean perimeter boxing.',
    features: ['Wave depth definition brushing', 'Pomade hot wrap compression', 'Razor sharp C-cup curvature', 'Holding mist seal']
  },
  {
    id: 'freestyle-hair-art',
    name: 'Freestyle Razor Hair Design',
    category: 'specialty',
    price: 65,
    duration: '60 mins',
    popular: false,
    description: 'Custom geometric patterns, tribal contours, or freestyle razor etching created directly freehand by the master artist.',
    features: ['Unique one-of-a-kind art design', 'Straight razor carved definition', 'Color enhancement highlight (optional)', 'Detailed boundary fading']
  },
  {
    id: 'locs-braid-taper',
    name: 'Locs / Braids Perimeter Fade',
    category: 'haircut',
    price: 45,
    duration: '45 mins',
    popular: false,
    description: 'Crisp hairline boxing, temple taper fade, and nape clean-up specifically designed to complement protective styles.',
    features: ['Sectioned tie-back styling', 'Straight razor hairline box', 'Temple & nape gradient fade', 'Scalp hydration oil']
  },
  {
    id: 'father-son-duo',
    name: 'Father & Son Executive Package',
    category: 'combo',
    price: 80,
    duration: '70 mins',
    popular: false,
    description: 'Back-to-back premium cuts in the lounge chairs. Quality bonding time paired with master barber craftsmanship.',
    features: ['2 Master signature cuts', 'Styling for both gentlemen', 'Complimentary beverages', 'VIP family chair reservation']
  }
];

export const BRAND_ASSETS = {
  logo: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788470929/LOGO7898.png',
  mainBarber: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471104/main_barber.jpg',
  cuts: {
    c1: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471165/c1.jpg',
    c2: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471174/c2.jpg',
    c3: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471171/c3.jpg',
    c4: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471155/c4.jpg',
    c5: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471141/c5.jpg',
    c6: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471168/c6.jpg',
    c7: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471162/c7.jpg',
    c8: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471149/c8.jpg',
    c9: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471131/c9.jpg',
    c10: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471135/c10.jpg',
    c11: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471124/c11.jpg',
    c12: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471117/c12.jpg',
    c13: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788471113/c13.jpg',
  },
};

export const BARBERS: BarberProfile[] = [
  {
    id: 'hildebrando-acosta',
    name: 'Hildebrando Acosta',
    role: 'Master Barber & Founder',
    experience: '12+ Years Precision Crafting',
    specialty: 'Latin Barber International, Freestyle Hair Art, Precision Fades',
    bio: 'Founder of Bran2Barberking and internationally renowned master barber in Miami. Renowned for surgical hairline precision, luxury hot towel treatments, and unmatched customer loyalty.',
    avatarUrl: BRAND_ASSETS.mainBarber,
    instagram: 'bran2barberking',
    featured: true
  },
  {
    id: 'marcus-vane',
    name: 'Marcus Vane',
    role: 'Senior Grooming Specialist',
    experience: '8 Years Experience',
    specialty: 'Beard Sculpting, 360 Waves, Low Tapers',
    bio: 'Specialist in texture manipulation, beard geometry, and luxury straight razor shaves. Dedicated to elevating daily grooming into an executive ritual.',
    avatarUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=600&auto=format&fit=crop',
    instagram: 'marcus_vane_cuts',
    featured: false
  },
  {
    id: 'leo-santiago',
    name: 'Leo Santiago',
    role: 'Artistic Style Director',
    experience: '7 Years Experience',
    specialty: 'Skin Fades, Scissor Texture, Modern Crops',
    bio: 'Master of shear work, taper transitions, and modern street aesthetics. Trained across top Latin American and US grooming academies.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    instagram: 'santiago_blades',
    featured: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'cut-c1',
    title: 'Surgical Mid Skin Fade & Crisp Lineup',
    category: 'fades',
    categoryLabel: 'Fades & Tapers',
    imageUrl: BRAND_ASSETS.cuts.c1,
    description: 'Flawless gradient skin fade with laser-sharp edge alignment around temples and nape.',
    barberName: 'Hildebrando Acosta'
  },
  {
    id: 'cut-c2',
    title: 'Textured Sponge Crop & Drop Taper',
    category: 'waves',
    categoryLabel: 'Waves & Texture',
    imageUrl: BRAND_ASSETS.cuts.c2,
    description: 'High definition sponge twist texture paired with smooth dropping neckline fade.',
    barberName: 'Hildebrando Acosta'
  },
  {
    id: 'cut-c3',
    title: 'Freestyle Curved Razor Etching',
    category: 'art',
    categoryLabel: 'Freestyle Hair Art',
    imageUrl: BRAND_ASSETS.cuts.c3,
    description: 'Bespoke freehand razor art with dynamic geometric contours and immaculate contrast.',
    barberName: 'Hildebrando Acosta'
  },
  {
    id: 'cut-c4',
    title: 'Full Beard Sculpting & Hot Lather Finish',
    category: 'beards',
    categoryLabel: 'Beard Sculpting',
    imageUrl: BRAND_ASSETS.cuts.c4,
    description: 'Symmetrical cheek contouring, moustache alignment, and nourishing botanical oil treatment.',
    barberName: 'Hildebrando Acosta'
  },
  {
    id: 'cut-c5',
    title: 'Clean Low Taper & Natural Hairline Box',
    category: 'fades',
    categoryLabel: 'Fades & Tapers',
    imageUrl: BRAND_ASSETS.cuts.c5,
    description: 'Subtle low taper leaving natural bulk on top, razor lined for maximum definition.',
    barberName: 'Hildebrando Acosta'
  },
  {
    id: 'cut-c6',
    title: '360 Deep Waves Alignment & Sheen',
    category: 'waves',
    categoryLabel: 'Waves & Texture',
    imageUrl: BRAND_ASSETS.cuts.c6,
    description: 'Synchronized crown wave ripples locked in with pomade wrap and clean perimeter boxing.',
    barberName: 'Marcus Vane'
  },
  {
    id: 'cut-c7',
    title: 'Latin Barber Precision Fade & Razor Part',
    category: 'fades',
    categoryLabel: 'Fades & Tapers',
    imageUrl: BRAND_ASSETS.cuts.c7,
    description: 'Signature Latin Barber International finish with foil shaver blur and clean part accent.',
    barberName: 'Hildebrando Acosta'
  },
  {
    id: 'cut-c8',
    title: 'Executive Beard Lineup & Cheek Fade',
    category: 'beards',
    categoryLabel: 'Beard Sculpting',
    imageUrl: BRAND_ASSETS.cuts.c8,
    description: 'Seamless fade transition from sideburns into a dense, conditioned beard line.',
    barberName: 'Hildebrando Acosta'
  },
  {
    id: 'cut-c9',
    title: 'High Skin Fade & Textured Top',
    category: 'fades',
    categoryLabel: 'Fades & Tapers',
    imageUrl: BRAND_ASSETS.cuts.c9,
    description: 'High contrast transition from bare skin to textured styling on top.',
    barberName: 'Leo Santiago'
  },
  {
    id: 'cut-c10',
    title: 'Tribal Geometric Razor Masterpiece',
    category: 'art',
    categoryLabel: 'Freestyle Hair Art',
    imageUrl: BRAND_ASSETS.cuts.c10,
    description: 'Intricate custom hair tattoo etched freehand with surgical straight razor precision.',
    barberName: 'Hildebrando Acosta'
  },
  {
    id: 'cut-c11',
    title: 'Temple Taper & Defined Coils',
    category: 'waves',
    categoryLabel: 'Waves & Texture',
    imageUrl: BRAND_ASSETS.cuts.c11,
    description: 'Clean temporal blowout fade accentuating natural curl luster and structure.',
    barberName: 'Hildebrando Acosta'
  },
  {
    id: 'cut-c12',
    title: 'Sculpted Goatee & Clean Throat Shave',
    category: 'beards',
    categoryLabel: 'Beard Sculpting',
    imageUrl: BRAND_ASSETS.cuts.c12,
    description: 'Ultra-close hot towel straight razor throat shave with razor-sharp goatee border.',
    barberName: 'Marcus Vane'
  },
  {
    id: 'cut-c13',
    title: 'The Royal VIP Master Transformation',
    category: 'fades',
    categoryLabel: 'Fades & Tapers',
    imageUrl: BRAND_ASSETS.cuts.c13,
    description: 'Complete head-to-beard overhaul, showcasing our flagship Latin Barber luxury experience.',
    barberName: 'Hildebrando Acosta'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Carlos Mendez',
    city: 'Miami Beach, FL',
    rating: 5,
    date: '3 days ago',
    comment: 'Hildebrando is hands down the best barber in Miami! The attention to detail on the skin fade and beard lineup is surgical. The shop atmosphere is pure luxury.',
    service: "The King's Royal VIP Experience",
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Derrick Reynolds',
    city: 'Brickell, FL',
    rating: 5,
    date: '1 week ago',
    comment: 'Been coming to Bran2Barberking for 2 years now. You walk in feeling regular and walk out looking like a million bucks. Clean clippers, hot towel, top notch hospitality.',
    service: 'Master Signature Haircut',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Alejandro Vega',
    city: 'Coral Gables, FL',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The freestyle razor art they did for my weekend event was unbelievable. People stopped me in Wynwood asking where I got it done. Latin Barber International sets the standard.',
    service: 'Freestyle Razor Hair Design',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Jayden Brooks',
    city: 'Downtown Miami, FL',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Best 360 wave lineup in South Florida. They actually understand hair texture, crown rotation, and keep your edges crisp without pushing back your hairline.',
    service: '360 Waves & Low Drop Taper',
    verified: true
  }
];
