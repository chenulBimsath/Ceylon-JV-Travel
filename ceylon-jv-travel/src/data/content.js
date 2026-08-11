// ---------------------------------------------------------------------------
// CEYLON JV TRAVEL — Authentic Data & High-Res Unsplash Photography
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
  { 
    id: "ruwanweli", 
    name: "Ruwanweli Maha Seya", 
    tag: "Buddhist temple in Anuradhapura", 
    img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
    description: "An ancient sacred stupa in Sri Lanka, standing at 338 feet, built by King Dutugemunu in 140 BC.",
    bestTime: "May – Aug",
    highlights: ["Sacred Relics", "Full Moon Poya Rituals", "Ancient Architecture"]
  },
  { 
    id: "bambarakanda", 
    name: "Bambarakanda Falls", 
    tag: "Tallest Waterfall in Sri Lanka", 
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    description: "Cascading down pine-covered slopes in Kalupahana, Bambarakanda drops 263 meters through misty mountain air.",
    bestTime: "Nov – Feb",
    highlights: ["Pine Forest Trek", "Highland Views", "Nature Photography"]
  },
  { 
    id: "ninearch", 
    name: "The Nine Arch Bridge", 
    tag: "Iconic train bridge in Ella", 
    img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
    description: "A colonial-era railway viaduct built purely with stone, brick, and cement amid lush green tea hills.",
    bestTime: "Dec – Mar",
    highlights: ["Scenic Blue Train", "Sunset Viewpoint", "Tea Plantation Walk"]
  },
  { 
    id: "ella", 
    name: "Ella Highlands", 
    tag: "Misty hills and tea country", 
    img: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80",
    description: "A tranquil mountain village renowned for hikes up Little Adam's Peak, waterfalls, and tea estate tours.",
    bestTime: "Jan – May",
    highlights: ["Ravana Falls", "Little Adam's Peak", "Tea Tasting"]
  },
  { 
    id: "mirissa", 
    name: "Mirissa Coast", 
    tag: "Palm-fringed southern coast", 
    img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
    description: "Golden sand beaches, turquoise waves, world-class whale watching, and famous Coconut Tree Hill sunsets.",
    bestTime: "Nov – Apr",
    highlights: ["Blue Whale Safari", "Coconut Tree Hill", "Sunset Surf"]
  },
  { 
    id: "kandy", 
    name: "Kandy Sacred City", 
    tag: "Cultural heart of the hill country", 
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    description: "Home to the sacred Temple of the Tooth Relic, serene Kandy Lake, and lush Royal Botanical Gardens.",
    bestTime: "Year-round",
    highlights: ["Temple of the Tooth", "Cultural Dance Show", "Botanical Gardens"]
  },
];

export const EXPLORER_DESTINATIONS = [
  {
    id: "ella",
    name: "Ella",
    icon: "mountain",
    img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=900&q=80",
    bestTime: "Dec – Mar",
    activities: ["Little Adam's Peak hike", "Nine Arch Bridge", "Zip-lining", "Tea factory tours"],
    packages: 4,
  },
  {
    id: "sigiriya",
    name: "Sigiriya Rock",
    icon: "castle",
    img: "https://images.unsplash.com/photo-1602643163983-ed0baca50f21?auto=format&fit=crop&w=900&q=80",
    bestTime: "Jan – Mar",
    activities: ["Lion Rock climb", "Village safari", "Ancient frescoes", "Sunset viewpoint"],
    packages: 6,
  },
  {
    id: "mirissa",
    name: "Mirissa",
    icon: "waves",
    img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=900&q=80",
    bestTime: "Nov – Apr",
    activities: ["Whale watching", "Surfing", "Beach hopping", "Coconut tree hill"],
    packages: 5,
  },
  {
    id: "kandy",
    name: "Kandy",
    icon: "landmark",
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80",
    bestTime: "Year-round",
    activities: ["Temple of the Tooth", "Royal Botanical Gardens", "Cultural dance show", "Lake walk"],
    packages: 7,
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    icon: "leaf",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
    bestTime: "Feb – May",
    activities: ["Tea plantation tours", "Horton Plains hike", "Gregory Lake", "Strawberry farms"],
    packages: 3,
  },
  {
    id: "galle",
    name: "Galle Fort",
    icon: "anchor",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
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
    img: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80",
    duration: "5 Days / 4 Nights",
    locations: "Colombo · Kandy · Nuwara Eliya · Ella",
    price: "$549",
    included: ["Hotel Accommodation", "Private AC Transport", "English Speaking Guide", "Daily Breakfast & Dinner"],
    excluded: ["International Airfare", "Personal Expenses", "Visa Fees"],
    itinerary: [
      { day: 1, title: "Arrival & Scenic Kandy Drive", detail: "Airport welcome by private driver. Transfer to Kandy via Pinnawala Elephant Sanctuary. Evening cultural dance show and lakeside hotel check-in." },
      { day: 2, title: "Kandy Temple & Tea Country", detail: "Morning visit to the Sacred Temple of the Tooth Relic. Scenic mountain drive to Nuwara Eliya through rolling tea estates with tea tasting." },
      { day: 3, title: "Nuwara Eliya to Misty Ella", detail: "Board the world-famous blue train from Nanu Oya to Ella. Walk to Nine Arch Bridge for afternoon train views." },
      { day: 4, title: "Little Adam's Peak & Waterfalls", detail: "Hike Little Adam's Peak at sunrise. Visit Ravana Falls and enjoy leisure time in Ella's charming mountain cafe scene." },
      { day: 5, title: "Colombo City & Departure", detail: "Transfer back to Colombo for boutique shopping and historic landmark sightseeing before airport drop-off." }
    ]
  },
  {
    id: "adventure-7",
    name: "7 Days Wild Ceylon Adventure",
    category: "Adventure",
    img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
    duration: "7 Days / 6 Nights",
    locations: "Kitulgala · Ella · Yala · Arugam Bay",
    price: "$799",
    included: ["3-Star Eco Lodges", "Private 4x4 Safari Jeep", "Whitewater Rafting", "Professional Guide"],
    excluded: ["Travel Insurance", "Alcoholic Beverages"],
    itinerary: [
      { day: 1, title: "Kitulgala Rafting Thrills", detail: "Pick up and transfer to Kitulgala jungle river. Grade 3 whitewater rafting session and overnight stay in riverside eco-lodges." },
      { day: 2, title: "Jungle Trekking & Abseiling", detail: "Morning waterfall abseiling and rainforest bird watching. Afternoon drive to Ella." },
      { day: 3, title: "Ella Rock Peak Conquest", detail: "Guided morning climb up Ella Rock for 360° valley vistas. Afternoon zip-line experience over tea hills." },
      { day: 4, title: "Yala National Park Safari", detail: "Drive down to Yala. Evening 4x4 open-top jeep safari hunting for Sri Lankan leopards and wild elephants." },
      { day: 5, title: "Sunrise Safari & Arugam Bay", detail: "Dawn safari in Yala Block 1. Transfer to east coast surf mecca Arugam Bay." },
      { day: 6, title: "East Coast Surfing & Lagoon", detail: "Morning surf lesson at Baby Point. Afternoon mangrove safari in Pottuvil Lagoon." },
      { day: 7, title: "Coastal Transfer & Departure", detail: "Breakfast by the sea and smooth private transfer to Airport/Colombo." }
    ]
  },
  {
    id: "honeymoon-6",
    name: "6 Days Romantic Honeymoon Escape",
    category: "Honeymoon",
    img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
    duration: "6 Days / 5 Nights",
    locations: "Bentota · Mirissa · Ella Highlands",
    price: "$999",
    included: ["Luxury Beach Villa", "Private Chauffeur", "Candlelight Dinners", "Couples Spa Session"],
    excluded: ["Tips & Gratuities", "Flights"],
    itinerary: [
      { day: 1, title: "Bentota Beach Sanctuary", detail: "Champagne welcome at luxury oceanfront villa in Bentota. Sunset beach walk and seafood candlelight dinner." },
      { day: 2, title: "Madu River Cruise & Turtles", detail: "Private boat safari through Madu River mangrove islands. Visit sea turtle conservation project." },
      { day: 3, title: "Mirissa Palm Cove & Whale Cruise", detail: "Transfer to Mirissa. Sunset cocktails at Coconut Tree Hill." },
      { day: 4, title: "Ocean Whale Watching & Ella Train", detail: "Morning ocean yacht cruise to view blue whales. Executive train ride up into misty Ella." },
      { day: 5, title: "Highland Romance & Spa", detail: "Couples Ayurveda massage overlooking Nine Arch Bridge. Private dining under mountain stars." },
      { day: 6, title: "Memories & Airport Transfer", detail: "Leisurely breakfast, souvenir photo shoot, and private transfer to airport." }
    ]
  },
  {
    id: "luxury-8",
    name: "8 Days Luxury Ceylon Escape",
    category: "Luxury",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    duration: "8 Days / 7 Nights",
    locations: "Colombo · Sigiriya · Kandy · Galle Fort",
    price: "$1,650",
    included: ["5-Star Luxury Resorts", "Private Mercedes Van", "All Gourmet Meals", "VIP Site Passes"],
    excluded: ["Personal Items"],
    itinerary: [
      { day: 1, title: "Colombo Arrival & Heritage Hotel", detail: "VIP airport reception and check-in at 5-star historic hotel in Colombo. Private sunset city highlights." },
      { day: 2, title: "Sigiriya Rock Fortress Private Tour", detail: "Luxury drive to Sigiriya. Private guided climb of the Lion Rock before public hours." },
      { day: 3, title: "Polonnaruwa Ancient Kingdom", detail: "Explore royal ruins on electric bikes. Afternoon luxury elephant safari in Minneriya." },
      { day: 4, title: "Dambulla Cave Temples & Kandy", detail: "Private tour of UNESCO Dambulla Cave Temples. Transfer to 5-star hill country resort in Kandy." },
      { day: 5, title: "Royal Botanical Gardens & Tea Estate", detail: "VIP orchid house walk and high tea with master tea blender at historic estate." },
      { day: 6, title: "Highland Scenic Drive to Galle", detail: "Coastal transfer to Galle Fort. Check-in at 17th-century restored Dutch manor." },
      { day: 7, title: "Galle Fort Sunset Ramparts", detail: "Art & architecture walking tour with local historian. Sunset champagne on fort ramparts." },
      { day: 8, title: "Farewell & Departure", detail: "Private highway transfer to Colombo airport for departure flight." }
    ]
  },
  {
    id: "budget-4",
    name: "4 Days Budget Highlights Tour",
    category: "Budget",
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    duration: "4 Days / 3 Nights",
    locations: "Kandy · Nuwara Eliya · Colombo",
    price: "$319",
    included: ["Comfortable Guesthouses", "AC Shared/Private Car", "Daily Breakfast"],
    excluded: ["Lunch & Dinner", "Entrance Tickets"],
    itinerary: [
      { day: 1, title: "Colombo to Kandy", detail: "Budget friendly pick up, travel to Kandy. Visit Kandy Lake & Spice Gardens." },
      { day: 2, title: "Tea Country Express", detail: "Morning Kandy Temple visit, scenic train journey to Nuwara Eliya. Explore Gregory Lake." },
      { day: 3, title: "Waterfalls & Highland Walk", detail: "Visit Devon & St. Clair waterfalls. Free time to explore local tea markets." },
      { day: 4, title: "Colombo Return", detail: "Scenic return drive to Colombo/Airport." }
    ]
  },
  {
    id: "family-6",
    name: "6 Days Family Fun Discovery",
    category: "Family",
    img: "https://images.unsplash.com/photo-1602643163983-ed0baca50f21?auto=format&fit=crop&w=800&q=80",
    duration: "6 Days / 5 Nights",
    locations: "Colombo · Sigiriya · Kandy · Bentota",
    price: "$720",
    included: ["Family Suite Hotels", "Kid-Friendly Activities", "AC Mini-Bus", "All Breakfasts"],
    excluded: ["Personal Expenses"],
    itinerary: [
      { day: 1, title: "Welcome & Sigiriya Village", detail: "Family pick up at airport. Drive to Sigiriya for a fun bullock cart and village boat ride." },
      { day: 2, title: "Elephant Safari & Minneriya", detail: "Open-jeep elephant gathering safari in Minneriya National Park." },
      { day: 3, title: "Kandy Cultural Fun", detail: "Visit Tooth Temple, watch traditional fire-dancers, explore botanical gardens." },
      { day: 4, title: "Bentota Water Sports", detail: "Transfer to Bentota beach resort. Banana boat ride and water sports." },
      { day: 5, title: "Turtle Hatchery & Beach Day", detail: "Release baby sea turtles into the ocean. Relaxing family beach afternoon." },
      { day: 6, title: "Colombo Shopping & Drop-off", detail: "Visit souvenir bazaars in Colombo before airport drop-off." }
    ]
  },
];

export const PACKAGE_FILTERS = ["All", "Budget", "Luxury", "Adventure", "Family", "Honeymoon"];

export const GALLERY_IMAGES = [
  { id: 1, category: "Beaches", img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80" },
  { id: 2, category: "Wildlife", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80" },
  { id: 3, category: "Mountains", img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80" },
  { id: 4, category: "Culture", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80" },
  { id: 5, category: "Food", img: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80" },
  { id: 6, category: "Luxury Hotels", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
  { id: 7, category: "Beaches", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80" },
  { id: 8, category: "Wildlife", img: "https://images.unsplash.com/photo-1602643163983-ed0baca50f21?auto=format&fit=crop&w=800&q=80" },
  { id: 9, category: "Culture", img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80" },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Sophie Turner",
    country: "United Kingdom",
    trip: "7 Days Wild Ceylon Adventure",
    rating: 5,
    text: "Best experience in Sri Lanka! Our driver was amazing and the itinerary balanced adventure with relaxation perfectly. Highly recommend Ceylon JV!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Lukas Meier",
    country: "Switzerland",
    trip: "8 Days Luxury Ceylon Escape",
    rating: 5,
    text: "Every hotel was hand-picked and our guide's local knowledge made the temples and tea estates come alive. Unforgettable honeymoon!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Aiko Tanaka",
    country: "Japan",
    trip: "6 Days Romantic Honeymoon Escape",
    rating: 5,
    text: "A dreamy trip from start to finish. The custom itinerary planner understood exactly what we wanted. 5 stars to the Ceylon JV team!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    name: "Daniel Osei",
    country: "Canada",
    trip: "5 Days Sri Lanka Paradise Tour",
    rating: 5,
    text: "Smooth booking, instant WhatsApp support, and stunning destinations. Would book with Ceylon JV Travels again without hesitation.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
];

export const BLOG_POSTS = [
  { 
    id: 1, 
    title: "Top 10 Must-Visit Places in Sri Lanka for 2026", 
    img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80", 
    excerpt: "From the ancient citadel of Sigiriya to the misty pine forests of Ella, discover the island's most enchanting destinations.", 
    readTime: "6 min read",
    content: "Sri Lanka offers an unmatched variety of landscapes in a compact island. Start your journey in Sigiriya before heading up to Ella's Nine Arch Bridge and finishing with a safari in Yala." 
  },
  { 
    id: 2, 
    title: "Ultimate Sri Lanka Travel & Visa Guide 2026", 
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80", 
    excerpt: "Everything you need to know: monsoon seasons, ETA visa application, currency exchange, and local customs.", 
    readTime: "9 min read",
    content: "Planning your visit requires understanding weather monsoons. The southwest coast shines from December to April, while the east coast thrives from May to September." 
  },
  { 
    id: 3, 
    title: "Best Beaches in Southern & Eastern Sri Lanka", 
    img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80", 
    excerpt: "Surf breaks in Arugam Bay, whale watching in Mirissa, and quiet coconut coves in Tangalle.", 
    readTime: "5 min read",
    content: "Whether you want vibrant beach parties or secluded golden sands, Sri Lanka's 1,300km coastline has the perfect beach for every style of traveler." 
  },
  { 
    id: 4, 
    title: "The Scenic Kandy to Ella Train Journey", 
    img: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80", 
    excerpt: "Why this 7-hour mountain train ride is widely considered one of the most beautiful railway journeys on Earth.", 
    readTime: "4 min read",
    content: "Winding through emerald green tea plantations, mountain tunnels, and misty valleys, the blue train from Kandy to Ella is a bucket-list experience for every Sri Lanka visitor." 
  },
];

export const WHY_US = [
  { id: 1, stat: 10, suffix: "+", label: "Years experience" },
  { id: 2, stat: 250, suffix: "+", label: "Trips guided" },
  { id: 3, stat: 24, suffix: "/7", label: "Support availability" },
  { id: 4, stat: 98, suffix: "%", label: "Guests who'd rebook" },
];

export const WHY_US_POINTS = [
  { title: "Local expert guides", desc: "Every guide is Sri Lankan-born, licensed, and fluent in the history, nature, and hidden gems of the island." },
  { title: "Best price guarantee", desc: "We match any verified quote for identical tour itineraries and accommodation standards." },
  { title: "Safe, private luxury transport", desc: "Air-conditioned luxury vehicles with dedicated, safety-certified drivers and daily sanitization." },
  { title: "24/7 on-trip assistance", desc: "Direct hotline and WhatsApp support throughout your entire stay in Sri Lanka." },
];

