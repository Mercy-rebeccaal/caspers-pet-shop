export const STORE_INFO = {
  name: "Casper's Pet Foods Accessories Grooming",
  shortName: "Casper's",
  tagline: "Everything your pet needs, with a little extra care.",
  phone: "075500 58222",
  phoneFormatted: "+91 75500 58222",
  phoneTel: "tel:07550058222",
  whatsappNumber: "917550058222",
  address: {
    line1: "No. 630, Main Road",
    landmark: "Next to Bank of Baroda",
    area: "Noothencheri, Madambakkam",
    city: "Tambaram, Chennai",
    state: "Tamil Nadu",
    pincode: "600126",
    full: "No. 630, Main Road, Next to Bank of Baroda, Noothencheri, Madambakkam, Tambaram, Tamil Nadu – 600126",
  },
  hours: "Open Daily: 9:00 AM – 10:00 PM",
  hoursBadge: "Open until 10:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Casper%27s+Pet+Foods+Accessories+Grooming+Madambakkam+Tambaram+Chennai+600126",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.772591602498!2d80.1558296!3d12.9113661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f05359a35e9%3A0xb35a0928a6704b2b!2sMadambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const TRUST_PILLARS = [
  { icon: "🐶", label: "Dog Essentials", desc: "Premium food, treats & daily nutrition" },
  { icon: "🐱", label: "Cat Essentials", desc: "Wholesome wet/dry foods & accessories" },
  { icon: "✂️", label: "Professional Grooming", desc: "Gentle hygiene, baths & breed cuts" },
  { icon: "⭐", label: "Trusted Local Service", desc: "Friendly neighborhood advice in Madambakkam" },
];

export const BRANDS = [
  { name: "Royal Canin", category: "Dog & Cat Nutrition" },
  { name: "Pedigree", category: "Complete Dog Food" },
  { name: "Drools", category: "Nutrition & Treats" },
  { name: "Farmina", category: "Natural & Delicious N&D" },
  { name: "Orijen", category: "Biologically Appropriate" },
  { name: "Acana", category: "WholePrey Diet" },
  { name: "Himalaya", category: "Herbal Pet Wellness" },
  { name: "Whiskas", category: "Complete Cat Care" },
];

export const GROOMING_SERVICES = [
  {
    id: "bath-dry",
    name: "Bath & Dry",
    tagline: "Refreshing & squeaky clean",
    description: "Soothing warm water bath with gentle organic shampoo, conditioning, blow-dry, and brush out.",
    time: "45–60 mins",
    priceRange: "From ₹699",
    suitableFor: "All Dogs & Cats",
    includes: ["Herbal shampoo bath", "Blow dry & brushing", "Scent spray", "Ear clean wipe"]
  },
  {
    id: "full-grooming",
    name: "Full Grooming",
    tagline: "The complete pampering session",
    description: "Full head-to-paw treatment including hygiene trim, customized haircut, medicated bath, paw massage, and styling.",
    time: "90–120 mins",
    priceRange: "From ₹1,499",
    suitableFor: "Long-coat & active pets",
    includes: ["Bath & Blow dry", "Custom coat trim", "Sanitary trim", "Nail clipping & filing", "Ear & eye cleansing", "Paw pad balm"]
  },
  {
    id: "hair-trimming",
    name: "Hair Trimming & Styling",
    tagline: "Neat, comfortable coat styling",
    description: "Breed-specific haircuts, summer trims, face neatening, and coat de-shedding to prevent matting in Chennai heat.",
    time: "60 mins",
    priceRange: "From ₹799",
    suitableFor: "Dogs & Cats prone to matting",
    includes: ["Breed cut / summer cut", "De-shedding comb out", "Face & ear scissor neatening"]
  },
  {
    id: "nail-care",
    name: "Nail Care & Paw Trim",
    tagline: "Safe & painless clipping",
    description: "Careful trimming of overgrown nails, filing sharp edges, and trimming hair between paw pads for steady grip.",
    time: "20 mins",
    priceRange: "From ₹299",
    suitableFor: "All Pets",
    includes: ["Precise nail clipping", "Smooth rotary filing", "Paw pad hair trimming", "Moisturizing paw butter"]
  },
  {
    id: "ear-cleaning",
    name: "Ear & Eye Hygiene",
    tagline: "Prevent infections & itchiness",
    description: "Gentle removal of wax build-up, ear hair plucking if needed, and soothing tear stain cleanup.",
    time: "20 mins",
    priceRange: "From ₹249",
    suitableFor: "Floppy-eared dogs & persians",
    includes: ["Antiseptic ear wipe", "Safe wax removal", "Tear stain cleansing"]
  },
  {
    id: "coat-care",
    name: "Anti-Tick & Flea Treatment",
    tagline: "Targeted protection & relief",
    description: "Medicated herbal tick bath followed by meticulous tick manual checking and skin-soothing botanical conditioner.",
    time: "60–75 mins",
    priceRange: "From ₹899",
    suitableFor: "Pets with tick/flea distress",
    includes: ["Medicated tick bath", "Flea combing", "Itch-relief rinse", "Preventive spray application"]
  },
];

export const PRODUCTS = [
  {
    id: "rc-maxi-adult",
    name: "Royal Canin Maxi Adult Dry Dog Food",
    brand: "Royal Canin",
    petType: "Dog",
    category: "Dog Food",
    subCategory: "Dry Food",
    size: "4 kg",
    price: 3100,
    mrp: 3350,
    inStock: true,
    rating: 4.9,
    reviewsCount: 42,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop&q=80",
    description: "Tailored nutritional support for large adult dogs (26–44 kg). Supports optimal bone & joint health and promotes high digestive security."
  },
  {
    id: "drools-focus-puppy",
    name: "Drools Focus Super Premium Puppy Food",
    brand: "Drools",
    petType: "Dog",
    category: "Dog Food",
    subCategory: "Puppy Nutrition",
    size: "3 kg",
    price: 1550,
    mrp: 1700,
    inStock: true,
    rating: 4.8,
    reviewsCount: 38,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&auto=format&fit=crop&q=80",
    description: "Real chicken with no corn, wheat, or soy. Packed with DHA for cognitive brain development and Omega 3 & 6 for a shiny coat."
  },
  {
    id: "farmina-nd-grainfree-puppy",
    name: "Farmina N&D Pumpkin Lamb & Blueberry",
    brand: "Farmina",
    petType: "Dog",
    category: "Dog Food",
    subCategory: "Grain Free",
    size: "2.5 kg",
    price: 2790,
    mrp: 2950,
    inStock: true,
    rating: 4.9,
    reviewsCount: 29,
    badge: "Premium Choice",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=80",
    description: "Grain-free natural formula rich in high quality fresh lamb and antioxidant blueberries. Gentle on delicate stomachs."
  },
  {
    id: "pedigree-chicken-veg-adult",
    name: "Pedigree Adult Chicken & Vegetables",
    brand: "Pedigree",
    petType: "Dog",
    category: "Dog Food",
    subCategory: "Daily Meals",
    size: "3 kg",
    price: 720,
    mrp: 770,
    inStock: true,
    rating: 4.6,
    reviewsCount: 54,
    badge: "Everyday Value",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&auto=format&fit=crop&q=80",
    description: "Time-tested wholesome nutrition with essential vitamins and zinc for healthy skin, muscles, and strong teeth."
  },
  {
    id: "whiskas-ocean-fish-adult",
    name: "Whiskas Adult Ocean Fish Dry Cat Food",
    brand: "Whiskas",
    petType: "Cat",
    category: "Cat Food",
    subCategory: "Dry Food",
    size: "1.2 kg",
    price: 490,
    mrp: 530,
    inStock: true,
    rating: 4.8,
    reviewsCount: 61,
    badge: "Cat Favourite",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
    description: "Crunchy pockets packed with delicious ocean fish flavour, Taurine for eyesight, and balanced minerals for urinary tract health."
  },
  {
    id: "rc-persian-adult",
    name: "Royal Canin Persian Adult Cat Food",
    brand: "Royal Canin",
    petType: "Cat",
    category: "Cat Food",
    subCategory: "Breed Health",
    size: "2 kg",
    price: 2450,
    mrp: 2600,
    inStock: true,
    rating: 4.9,
    reviewsCount: 34,
    badge: "Specialist",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&auto=format&fit=crop&q=80",
    description: "Almond-shaped kibble designed specially for the Persian flat jaw. Nourishes the long plush coat and reduces hairballs."
  },
  {
    id: "himalaya-erina-ep-shampoo",
    name: "Himalaya Erina-EP Tick & Flea Pet Shampoo",
    brand: "Himalaya",
    petType: "All",
    category: "Grooming",
    subCategory: "Coat Care",
    size: "200 ml",
    price: 260,
    mrp: 280,
    inStock: true,
    rating: 4.7,
    reviewsCount: 47,
    badge: "Herbal Care",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=600&auto=format&fit=crop&q=80",
    description: "Natural Ayurvedic formulation with Eucalyptus and Neem. Gently prevents ectoparasites and soothes itchy irritated skin."
  },
  {
    id: "orijen-original-dog",
    name: "Orijen Original Biologically Appropriate Food",
    brand: "Orijen",
    petType: "Dog",
    category: "Dog Food",
    subCategory: "Grain Free",
    size: "2 kg",
    price: 3600,
    mrp: 3850,
    inStock: true,
    rating: 5.0,
    reviewsCount: 22,
    badge: "Ultra Premium",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop&q=80",
    description: "85% quality animal ingredients including free-run chicken, wild-caught fish, and nest-laid eggs. Unmatched biological nourishment."
  },
  {
    id: "acana-wild-prairie-cat",
    name: "Acana Wild Prairie Cat & Kitten Food",
    brand: "Acana",
    petType: "Cat",
    category: "Cat Food",
    subCategory: "Grain Free",
    size: "1.8 kg",
    price: 2950,
    mrp: 3150,
    inStock: true,
    rating: 4.9,
    reviewsCount: 19,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600&auto=format&fit=crop&q=80",
    description: "Rich in free-run poultry, whole eggs, and wild-caught fish. Packed with natural meat proteins to satisfy your feline's cravings."
  },
  {
    id: "durable-nylon-harness-leash",
    name: "Reflective Padded Dog Harness & Leash Set",
    brand: "Casper's Select",
    petType: "Dog",
    category: "Accessories",
    subCategory: "Walking Gear",
    size: "Medium / Large",
    price: 850,
    mrp: 1050,
    inStock: true,
    rating: 4.8,
    reviewsCount: 31,
    badge: "Staff Pick",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=600&auto=format&fit=crop&q=80",
    description: "Breathable mesh chest padding with sturdy zinc alloy D-ring. Features high-visibility 3M reflective stitching for evening walks."
  },
  {
    id: "interactive-cat-feather-toy",
    name: "Retractable Bell Feather Wand & Ball Pack",
    brand: "Casper's Select",
    petType: "Cat",
    category: "Accessories",
    subCategory: "Play & Toys",
    size: "Standard Set",
    price: 340,
    mrp: 420,
    inStock: true,
    rating: 4.9,
    reviewsCount: 26,
    badge: "Interactive Fun",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&auto=format&fit=crop&q=80",
    description: "High-flexibility interactive wand with natural feathers and gentle tinkling bell to keep indoor cats fit, active, and happy."
  },
  {
    id: "stainless-steel-antiskid-bowl",
    name: "Anti-Skid Heavy Gauge Stainless Steel Pet Bowl",
    brand: "Casper's Select",
    petType: "All",
    category: "Accessories",
    subCategory: "Bowls & Feeders",
    size: "900 ml",
    price: 380,
    mrp: 450,
    inStock: true,
    rating: 4.8,
    reviewsCount: 35,
    badge: "Durable",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&auto=format&fit=crop&q=80",
    description: "Food-grade stainless steel with non-slip rubber base ring. Dishwasher safe, rust-resistant, and hygienic for everyday meals."
  }
];

export const REVIEWS = [
  {
    id: 1,
    text: "The staff is super helpful and always guides me to the best products for my pup.",
    source: "Google Reviews",
    rating: 5,
    verified: true,
    time: "Verified Local Review"
  },
  {
    id: 2,
    text: "The shop owner provides very polite and friendly service.",
    source: "Google Reviews",
    rating: 5,
    verified: true,
    time: "Verified Local Review"
  },
  {
    id: 3,
    text: "Highly recommend checking them out if you're in the area!",
    source: "Google Reviews",
    rating: 5,
    verified: true,
    time: "Verified Local Review"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Helpful Advice",
    short: "Genuine recommendations",
    description: "Not sure what to buy? Our team is happy to help you choose the right products for your pet.",
    icon: "HeartHandshake"
  },
  {
    title: "Quality Products",
    short: "100% Genuine Brands",
    description: "We stock trusted pet-care brands for everyday nutrition, dental treats, and delicate coat care.",
    icon: "ShieldCheck"
  },
  {
    title: "Gentle Grooming",
    short: "Trained pet lovers",
    description: "Professional grooming to keep your pets clean, comfortable, and happy without stress.",
    icon: "Scissors"
  },
  {
    title: "Local & Personal",
    short: "Madambakkam neighbours",
    description: "A neighbourhood pet store where you can actually talk to someone who cares about your pet.",
    icon: "MapPin"
  }
];
