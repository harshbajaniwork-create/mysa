export interface Property {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  amenities: string[];
  type: string;
  capacity: string;
  nearby: { name: string; distance: string }[];
}

export const PROPERTIES: Property[] = [
  {
    id: "pine-forest-cabin",
    name: "Pine Forest Cabin",
    tagline: "Waking up to the scent of cedar and the song of birds.",
    description:
      "A cozy retreat tucked deep within the ancient cedar forests of Manali. This cabin offers total privacy and a true connection with nature, featuring a private deck and large windows that frame the forest like a living painting.",
    price: 8500,
    rating: 4.9,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074",
    ],
    amenities: [
      "Fireplace",
      "High-speed Wi-Fi",
      "Private Deck",
      "Kitchenette",
      "Heated Bathroom",
    ],
    type: "Entire Cabin",
    capacity: "2-4 Guests",
    nearby: [
      { name: "Hadimba Temple", distance: "1.2 km" },
      { name: "Old Manali Market", distance: "2.0 km" },
      { name: "Jogini Falls Trek Start", distance: "3.5 km" },
    ],
  },
  {
    id: "riverside-luxury-suite",
    name: "Riverside Luxury Suite",
    tagline: "Let the sound of the Beas River whisper you to sleep.",
    description:
      "Perched right on the edge of the Beas River, this suite combines modern luxury with the raw beauty of the Himalayas. Watch the river rapids from your bed or enjoy a private candle-lit dinner on the riverside balcony.",
    price: 12000,
    rating: 4.8,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2073",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070",
    ],
    amenities: [
      "Riverside Balcony",
      "Jacuzzi",
      "King-size Bed",
      "Smart TV",
      "Room Service",
    ],
    type: "Luxury Suite",
    capacity: "2 Guests",
    nearby: [
      { name: "Beas Riverfront", distance: "0 km" },
      { name: "Mall Road", distance: "0.8 km" },
      { name: "Vashisht Hot Springs", distance: "2.5 km" },
    ],
  },
  {
    id: "himalayan-glass-house",
    name: "Himalayan Glass House",
    tagline: "360-degree views of snow-capped peaks and starry nights.",
    description:
      "A feat of modern architecture, the Glass House offers an immersive mountain experience without sacrificing comfort. Floor-to-ceiling glass walls provide uninterrupted views of the Pir Panjal range.",
    price: 15500,
    rating: 5.0,
    reviews: 56,
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070",
    ],
    amenities: [
      "Floor-to-ceiling glass",
      "Star-gazing Telescope",
      "Underfloor Heating",
      "Mini Bar",
      "En-suite Spa",
    ],
    type: "Architectural Villa",
    capacity: "2-6 Guests",
    nearby: [
      { name: "Solang Valley", distance: "12 km" },
      { name: "Atal Tunnel", distance: "25 km" },
      { name: "Kothi Village", distance: "10 km" },
    ],
  },
  {
    id: "apple-orchard-farmhouse",
    name: "Apple Orchard Farmhouse",
    tagline: "Rustic charm in the heart of a blossoming orchard.",
    description:
      "Experience the heritage of Manali in this lovingly restored stone farmhouse. Surrounded by thousands of apple trees, it's the perfect place for families to disconnect and enjoy the simple pleasures of mountain life.",
    price: 7000,
    rating: 4.7,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070",
      },
      {
        url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070",
      },
      {
        url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070",
      },
    ].map((g) => (typeof g === "string" ? g : g.url)),
    amenities: [
      "Orchard Walk",
      "Traditional Himachali Food",
      "Family Lounge",
      "Pet Friendly",
      "Parking",
    ],
    type: "Heritage Home",
    capacity: "4-8 Guests",
    nearby: [
      { name: "Naggar Castle", distance: "15 km" },
      { name: "Art Gallery", distance: "14.5 km" },
      { name: "Old Manali Market", distance: "5 km" },
    ],
  },
];
