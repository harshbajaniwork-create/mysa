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
    id: "cedar-soak-rooms",
    name: "Cedar Soak Rooms 🌲",
    tagline: "Waking up to the scent of cedar and the song of birds.",
    description:
      "A cozy retreat tucked deep within the ancient cedar forests. These rooms offer a private bathtub experience to soak in while enjoying the true connection with nature.",
    price: 6000,
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
      "Bathtub",
      "High-speed Wi-Fi",
      "Private Deck",
      "Kitchenette",
      "Heated Bathroom",
    ],
    type: "Private Room",
    capacity: "2 Guests",
    nearby: [
      { name: "Hadimba Temple", distance: "1.2 km" },
      { name: "Old Manali Market", distance: "2.0 km" },
      { name: "Jogini Falls Trek Start", distance: "3.5 km" },
    ],
  },
  {
    id: "pine-hollow-rooms",
    name: "Pine Hollow Rooms 🍃",
    tagline: "Let the sound of the Beas River whisper you to sleep.",
    description:
      "Perched right on the edge of the Beas River, these rooms combine rustic charm with the raw beauty of the Himalayas. Features a shared bathroom but uncompromised views.",
    price: 2500,
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
      "Shared Bathroom",
      "Riverside Balcony",
      "King-size Bed",
      "Smart TV",
      "Room Service",
    ],
    type: "Private Room",
    capacity: "2 Guests",
    nearby: [
      { name: "Beas Riverfront", distance: "0 km" },
      { name: "Mall Road", distance: "0.8 km" },
      { name: "Vashisht Hot Springs", distance: "2.5 km" },
    ],
  },
  {
    id: "fern-stay-rooms",
    name: "Fern Stay Rooms 🌾",
    tagline: "360-degree views of snow-capped peaks and starry nights.",
    description:
      "Our most spacious private rooms. These stays offer an immersive mountain experience without sacrificing comfort, providing ample space to relax and unwind.",
    price: 3500,
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
      "Spacious Layout",
      "Star-gazing Telescope",
      "Underfloor Heating",
      "Mini Bar",
      "En-suite Spa",
    ],
    type: "Spacious Room",
    capacity: "2-4 Guests",
    nearby: [
      { name: "Solang Valley", distance: "12 km" },
      { name: "Atal Tunnel", distance: "25 km" },
      { name: "Kothi Village", distance: "10 km" },
    ],
  },
  {
    id: "cloud-attic-suite",
    name: "Cloud Attic Suite ☁️",
    tagline: "Rustic charm high up in the attic.",
    description:
      "Experience the heritage of the mountains in this exclusive attic suite. It's the perfect place to disconnect and enjoy a panoramic elevated view of the valley.",
    price: 9000,
    rating: 4.7,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070",
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070",
    ],
    amenities: [
      "Attic View",
      "Traditional Himachali Food",
      "Family Lounge",
      "Pet Friendly",
      "Parking",
    ],
    type: "Attic Suite",
    capacity: "2-3 Guests",
    nearby: [
      { name: "Naggar Castle", distance: "15 km" },
      { name: "Art Gallery", distance: "14.5 km" },
      { name: "Old Manali Market", distance: "5 km" },
    ],
  },
  {
    id: "entire-a-frame",
    name: "Entire A-frame",
    tagline: "The complete Mysa experience for your entire group.",
    description:
      "Book the entire A-frame property featuring 9 distinct rooms. Perfect for large groups, retreats, and family gatherings wanting exclusive access to all amenities and spaces.",
    price: 35000,
    rating: 4.9,
    reviews: 21,
    image: "/properties/A-Frame-1.JPG",
    gallery: [
      "/properties/A-Frame-1.JPG",
      "/properties/A-Frame-2.JPG",
      "/properties/A-Frame-3.JPG",
    ],
    amenities: [
      "All 9 Rooms",
      "Private Deck",
      "Kitchenette",
      "Jacuzzi",
      "Parking",
    ],
    type: "Entire Property",
    capacity: "18-20 Guests",
    nearby: [
      { name: "Hadimba Temple", distance: "1.2 km" },
      { name: "Old Manali Market", distance: "2.0 km" },
      { name: "Jogini Falls Trek Start", distance: "3.5 km" },
    ],
  },
];
