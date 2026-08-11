// ---------------------------------------------------------------------------
// PLACEHOLDER DATA — every image below is a stand-in from picsum.photos.
// Replace the `img` (and `avatar`) URLs with your real photography; the seed
// name in each URL tells you which real photo it should become.
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Destinations", id: "destinations" },
  { label: "Tours / Packages", id: "packages" },
  { label: "Experiences", id: "explorer" },
  { label: "About Us", id: "why-us" },
  { label: "Contact", id: "booking" },
];

export const DESTINATIONS = [
  { id: "ruwanweli", name: "Ruwanweli Maha Seya", tag: "Buddhist temple in Anuradhapura", img: "https://picsum.photos/seed/ruwanweli/700/900" },
  { id: "bambarakanda", name: "Bambarakanda Falls", tag: "Waterfall in Sri Lanka", img: "https://picsum.photos/seed/bambarakanda/700/900" },
  { id: "ninearch", name: "The Nine Arch Bridge", tag: "Iconic train bridge in Ella", img: "https://picsum.photos/seed/ninearch/700/900" },
  { id: "ella", name: "Ella", tag: "Misty hills and tea country", img: "https://picsum.photos/seed/ella-sl/700/900" },
  { id: "mirissa", name: "Mirissa", tag: "Palm-fringed southern coast", img: "https://picsum.photos/seed/mirissa-sl/700/900" },
  { id: "kandy", name: "Kandy", tag: "Cultural heart of the hill country", img: "https://picsum.photos/seed/kandy-sl/700/900" },
];

export const EXPLORER_DESTINATIONS = [
  {
    id: "ella",
    name: "Ella",
    icon: "mountain",
    img: "https://picsum.photos/seed/ella-explorer/900/700",
    bestTime: "Dec – Mar",
    activities: ["Little Adam's Peak hike", "Nine Arch Bridge", "Zip-lining", "Tea factory tours"],
    packages: 4,
  },
  {
    id: "sigiriya",
    name: "Sigiriya",
    icon: "castle",
    img: "https://picsum.photos/seed/sigiriya-explorer/900/700",
    bestTime: "Jan – Mar",
    activities: ["Lion Rock climb", "Village safari", "Ancient frescoes", "Sunset viewpoint"],
    packages: 6,
  },
  {
    id: "mirissa",
    name: "Mirissa",
    icon: "waves",
    img: "https://picsum.photos/seed/mirissa-explorer/900/700",
    bestTime: "Nov – Apr",
    activities: ["Whale watching", "Surfing", "Beach hopping", "Coconut tree hill"],
    packages: 5,
  },
  {
    id: "kandy",
    name: "Kandy",
    icon: "landmark",
    img: "https://picsum.photos/seed/kandy-explorer/900/700",
    bestTime: "Year-round",
    activities: ["Temple of the Tooth", "Royal Botanical Gardens", "Cultural dance show", "Lake walk"],
    packages: 7,
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    icon: "leaf",
    img: "https://picsum.photos/seed/nuwaraeliya-explorer/900/700",
    bestTime: "Feb – May",
    activities: ["Tea plantation tours", "Horton Plains hike", "Gregory Lake", "Strawberry farms"],
    packages: 3,
  },
  {
    id: "galle",
    name: "Galle Fort",
    icon: "anchor",
    img: "https://picsum.photos/seed/galle-explorer/900/700",
    bestTime: "Dec – Apr",
    activities: ["Rampart sunset walk", "Boutique shopping", "Lighthouse", "Dutch-era architecture"],
    packages: 4,
  },
];

export const PACKAGES = [
  {
    id: "paradise-5",
    name: "5 Days Sri Lanka Paradise Tour",
    category: "Family",
    img: "https://picsum.photos/seed/pkg-paradise/700/500",
    duration: "5 Days / 4 Nights",
    locations: "Colombo · Kandy · Nuwara Eliya · Ella",
    price: "$549",
    included: ["Hotel", "Transport", "Guide", "Meals"],
  },
  {
    id: "adventure-7",
    name: "7 Days Wild Ceylon Adventure",
    category: "Adventure",
    img: "https://picsum.photos/seed/pkg-adventure/700/500",
    duration: "7 Days / 6 Nights",
    locations: "Kitulgala · Ella · Yala · Arugam Bay",
    price: "$799",
    included: ["Hotel", "Transport", "Guide", "Activities"],
  },
  {
    id: "honeymoon-6",
    name: "6 Days Romantic Honeymoon Escape",
    category: "Honeymoon",
    img: "https://picsum.photos/seed/pkg-honeymoon/700/500",
    duration: "6 Days / 5 Nights",
    locations: "Bentota · Mirissa · Ella",
    price: "$999",
    included: ["Villa", "Transport", "Private Guide", "Meals"],
  },
  {
    id: "luxury-8",
    name: "8 Days Luxury Ceylon Escape",
    category: "Luxury",
    img: "https://picsum.photos/seed/pkg-luxury/700/500",
    duration: "8 Days / 7 Nights",
    locations: "Colombo · Sigiriya · Kandy · Galle",
    price: "$1,650",
    included: ["5-Star Hotel", "Private Car", "Guide", "All Meals"],
  },
  {
    id: "budget-4",
    name: "4 Days Budget Highlights Tour",
    category: "Budget",
    img: "https://picsum.photos/seed/pkg-budget/700/500",
    duration: "4 Days / 3 Nights",
    locations: "Kandy · Nuwara Eliya · Colombo",
    price: "$319",
    included: ["Guesthouse", "Transport", "Guide"],
  },
  {
    id: "family-6",
    name: "6 Days Family Fun Discovery",
    category: "Family",
    img: "https://picsum.photos/seed/pkg-family/700/500",
    duration: "6 Days / 5 Nights",
    locations: "Colombo · Sigiriya · Kandy · Bentota",
    price: "$720",
    included: ["Hotel", "Transport", "Guide", "Meals"],
  },
];

export const PACKAGE_FILTERS = ["All", "Budget", "Luxury", "Adventure", "Family", "Honeymoon"];

export const GALLERY_IMAGES = [
  { id: 1, category: "Beaches", img: "https://picsum.photos/seed/gal-beach1/600/800" },
  { id: 2, category: "Wildlife", img: "https://picsum.photos/seed/gal-wild1/600/450" },
  { id: 3, category: "Mountains", img: "https://picsum.photos/seed/gal-mtn1/600/750" },
  { id: 4, category: "Culture", img: "https://picsum.photos/seed/gal-cul1/600/500" },
  { id: 5, category: "Food", img: "https://picsum.photos/seed/gal-food1/600/700" },
  { id: 6, category: "Luxury Hotels", img: "https://picsum.photos/seed/gal-hotel1/600/450" },
  { id: 7, category: "Beaches", img: "https://picsum.photos/seed/gal-beach2/600/600" },
  { id: 8, category: "Wildlife", img: "https://picsum.photos/seed/gal-wild2/600/800" },
  { id: 9, category: "Culture", img: "https://picsum.photos/seed/gal-cul2/600/650" },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Sophie Turner",
    country: "United Kingdom",
    trip: "7 Days Wild Ceylon Adventure",
    rating: 5,
    text: "Best experience in Sri Lanka. Our driver was amazing and the itinerary balanced adventure with relaxation perfectly.",
    avatar: "https://picsum.photos/seed/review1/120/120",
  },
  {
    id: 2,
    name: "Lukas Meier",
    country: "Switzerland",
    trip: "8 Days Luxury Ceylon Escape",
    rating: 5,
    text: "Every hotel was hand-picked and the guide's local knowledge made the temples and tea estates come alive.",
    avatar: "https://picsum.photos/seed/review2/120/120",
  },
  {
    id: 3,
    name: "Aiko Tanaka",
    country: "Japan",
    trip: "6 Days Romantic Honeymoon Escape",
    rating: 5,
    text: "A dreamy trip from start to finish. The custom itinerary planner understood exactly what we wanted.",
    avatar: "https://picsum.photos/seed/review3/120/120",
  },
  {
    id: 4,
    name: "Daniel Osei",
    country: "Canada",
    trip: "5 Days Sri Lanka Paradise Tour",
    rating: 4,
    text: "Smooth booking, friendly support, and stunning destinations. Would book with Ceylon JV again.",
    avatar: "https://picsum.photos/seed/review4/120/120",
  },
];

export const BLOG_POSTS = [
  { id: 1, title: "Top 10 Places to Visit in Sri Lanka", img: "https://picsum.photos/seed/blog1/700/500", excerpt: "From ancient rock fortresses to misty tea country, here's where to start.", readTime: "6 min read" },
  { id: 2, title: "Sri Lanka Travel Guide 2026", img: "https://picsum.photos/seed/blog2/700/500", excerpt: "Everything you need to plan your trip, from weather to visas.", readTime: "9 min read" },
  { id: 3, title: "Best Beaches in Sri Lanka", img: "https://picsum.photos/seed/blog3/700/500", excerpt: "Surf towns, whale-watching bays, and quiet coves for every traveller.", readTime: "5 min read" },
  { id: 4, title: "Sri Lanka Visa Guide", img: "https://picsum.photos/seed/blog4/700/500", excerpt: "A simple breakdown of the ETA process and what you'll need.", readTime: "4 min read" },
];

export const WHY_US = [
  { id: 1, stat: 10, suffix: "+", label: "Years experience" },
  { id: 2, stat: 250, suffix: "+", label: "Trips guided" },
  { id: 3, stat: 24, suffix: "/7", label: "Support availability" },
  { id: 4, stat: 98, suffix: "%", label: "Guests who'd rebook" },
];

export const WHY_US_POINTS = [
  { title: "Local expert guides", desc: "Every guide is Sri Lankan-born, trained, and fluent in the stories behind each site." },
  { title: "Best price guarantee", desc: "We match any verified quote for the same itinerary and service level." },
  { title: "Safe, private transport", desc: "Air-conditioned vehicles, licensed drivers, and daily vehicle checks." },
  { title: "24/7 on-trip support", desc: "A dedicated line for anything you need, day or night, anywhere on the island." },
];
