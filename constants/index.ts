export const NAVITEMS = [
  { name: "About Mysa", href: "#" },
  { name: "Places to Go", href: "#" },
  { name: "Things to Do", href: "#" },
  { name: "Plan Your Trip", href: "#" },
  { name: "Experiences", href: "#" },
  { name: "Blog", href: "#" },
];

export const HOME_DATA = {
  scalable_image: {
    title:
      "Unwind in the lap of the Himalayas, where luxury meets the whispering pines and ancient mountain trails of Manali.",
    imageUrls: [
      "/images/1.png",
      "/images/2.png",
      "/images/15.png",
      "/images/4.png",
      "/images/5.png",
      "/images/6.png",
      "/images/65.jpeg",
    ],
  },
  things_to_do: [
    {
      id: 1,
      name: "ADVENTURE & NATURE",
      children: [
        {
          name: "Solang Valley Adventures",
          featured_description:
            "From paragliding over snowy peaks to skiing down pristine slopes, Solang Valley is the heart of adventure in Manali.",
          featured_image: {
            url: "/images/12.png",
          },
          slug: "solang-valley",
        },
        {
          name: "River Rafting in Beas",
          featured_description:
            "Navigate the crystal-clear rapids of the Beas River for an adrenaline-pumping experience amidst stunning scenery.",
          featured_image: {
            url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop",
          },
          slug: "river-rafting",
        },
      ],
    },
    {
      id: 2,
      name: "CULTURAL IMMERSION",
      children: [
        {
          name: "Old Manali Cafes",
          featured_description:
            "Explore the vibrant lanes of Old Manali, home to cozy riverside cafes, local handicrafts, and a bohemian atmosphere.",
          featured_image: {
            url: "/images/6.png",
          },
          slug: "old-manali-cafes",
        },
        {
          name: "Hadimba Temple",
          featured_description:
            "A serene wooden temple dedicated to Hadimba Devi, Pagoda-style built in 1553, surrounded by cedar forests.",
          featured_image: {
            url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
          },
          slug: "hadimba-temple",
        },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Rohtang Pass",
      slug: "rohtang-pass",
      featured_image: {
        url: "/images/13.png",
      },
    },
    {
      id: 2,
      name: "Atal Tunnel & Sissu",
      slug: "atal-tunnel",
      featured_image: {
        url: "https://images.unsplash.com/photo-1655468713264-19e3abacfdfd?q=80&w=1000&auto=format&fit=crop",
      },
    },
    {
      id: 3,
      name: "Jogini Waterfalls",
      slug: "jogini-waterfalls",
      featured_image: {
        url: "/images/15.png",
      },
    },
    {
      id: 4,
      name: "Mall Road Manali",
      slug: "mall-road",
      featured_image: {
        url: "https://images.unsplash.com/photo-1713981276443-62ac6f3ed564?q=80&w=1000&auto=format&fit=crop",
      },
    },
    {
      id: 5,
      name: "Beas River Side",
      slug: "beas-river",
      featured_image: {
        url: "https://images.unsplash.com/photo-1592140470643-4aee158e6ab8?q=80&w=1000&auto=format&fit=crop",
      },
    },
  ],
  facts: [
    {
      id: 1,
      title: "The Valley of Gods",
      description:
        "Manali is known as the 'Valley of Gods' due to its rich mythological significance and numerous sacred temples.",
      image: {
        url: "/images/16.png",
      },
      bgColor: "GreenPea",
    },
    {
      id: 2,
      title: "Legend of Manu",
      description:
        "The name Manali is derived from 'Manu-Alaya', home of the sage Manu who is said to have recreated human life here.",
      image: { url: "/images/1.png" },
      bgColor: "WineBerry",
    },
    {
      id: 3,
      title: "The Apple Capital",
      description:
        "Manali is one of India's biggest exporters of high-quality apples, first introduced to the region by the British.",
      image: {
        url: "/images/14.png",
      },
      bgColor: "BigStone",
    },
  ],
  articles: [
    {
      id: 1,
      title: "Your Ultimate Guide to Old Manali",
      slug: "guide-to-old-manali",
      description:
        "Discover the best secret spots, hidden cafes, and peaceful walks in the most charming corner of the town.",
      image: {
        url: "/images/65.jpeg",
      },
      tags: [{ name: "#LIFESTYLE" }, { name: "#EXPLORE" }],
      date: "February 21, 2026",
    },
    {
      id: 2,
      title: "Best Hikes Near Mysa Properties",
      slug: "best-hikes-manali",
      description:
        "From short waterfall treks to multi-day high-altitude passes, Manali offers trails for every wanderer.",
      image: {
        url: "/images/15.png",
      },
      tags: [{ name: "#TREKKING" }, { name: "#NATURE" }],
      date: "January 15, 2026",
    },
  ],
  map_cta: {
    title: "Navigate the Hidden Gems of Manali",
    description:
      "Use our interactive map to find the secret trails, best views, and historic spots near your Mysa retreat.",
  },
  events: [
    {
      id: 1,
      title: "Mountain Yoga Retreat",
      slug: "mountain-yoga",
      location: "Mysa Orchard Decks, Manali",
      date: "Sat, Mar 15",
      featured_image: {
        url: "/images/4.png",
      },
      tags: [{ name: "#WELLNESS" }],
    },
    {
      id: 2,
      title: "Himalayan Music Night",
      slug: "himalayan-music",
      location: "The Big Stone Yard, Manali",
      date: "Fri, Apr 20",
      featured_image: {
        url: "/images/67.jpeg",
      },
      tags: [{ name: "#MUSIC" }],
    },
  ],
  booking: {
    title: "A Himalayan Escape Awaits",
    text: "Experience the magic of Manali with a stay tailored to your soul. Luxury, nature, and peace combined.",
    image: {
      url: "/images/5.png",
    },
  },
  booking_locations: [
    { id: 1, name: "The Apple Orchard" },
    { id: 2, name: "Riverside Suite" },
    { id: 3, name: "Mountain View Deck" },
    { id: 4, name: "Pine Forest Cabin" },
  ],
};
