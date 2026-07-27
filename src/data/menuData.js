export const MENU_CATEGORIES = [
  { id: "all", name: "All Items" },
  { id: "starters", name: "Starters" },
  { id: "north-indian", name: "North Indian" },
  { id: "chinese", name: "Chinese" },
  { id: "biryani", name: "Biryani & Rice" },
  { id: "desserts", name: "Beverages & Desserts" },
];

export const MENU_ITEMS = [
  // Biryani & Rice
  {
    id: "b1",
    name: "Hyderabadi Chicken Biryani",
    category: "biryani",
    price: 220,
    rating: 4.9,
    reviews: 142,
    isVeg: false,
    isBestseller: true,
    isSpicy: true,
    description: "Long-grain fragrant basmati rice dum cooked with marinated tender chicken pieces, saffron, and secret house spices. Served with raita.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOwPiJSNkSIeR5RVlQxRzAAVxHkeu-AAtwa9G8S_tDqsF8OWDdsO8zSBTaOcmibcvZTXEXBU14Brvq9tAoF62ate3UnEI37ETAjt2aUtcFLqlqCwhcg2Z1lwzWQ_WMdJ1bud80RjVRxidaNBHvwrHk0x7_-Qy1d6p62R-rnEgWjLuxxCzWoQFlsVvN3UoHoiJ5qmPH0mFUnUpE270erH_j-kU5ryZKgSgKVTr1hr4judfdUZsOVlC-Q2XnWUYB3V8Z8DonOGHi60se"
  },
  {
    id: "b2",
    name: "Special Veg Dum Biryani",
    category: "biryani",
    price: 180,
    rating: 4.7,
    reviews: 89,
    isVeg: true,
    isBestseller: false,
    isSpicy: false,
    description: "Aromatic basmati rice layered with fresh seasonal vegetables, paneer cubes, fried onions, mint, and pure ghee.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b3",
    name: "Mutton Handi Biryani",
    category: "biryani",
    price: 320,
    rating: 4.9,
    reviews: 110,
    isVeg: false,
    isBestseller: true,
    isSpicy: true,
    description: "Slow-cooked succulent mutton chunks layered with long-grain basmati rice, Kewra water, and fried cashew nuts.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop"
  },

  // Starters
  {
    id: "s1",
    name: "Paneer Tikka",
    category: "starters",
    price: 180,
    rating: 4.8,
    reviews: 95,
    isVeg: true,
    isBestseller: true,
    isSpicy: false,
    description: "Soft cottage cheese cubes marinated in spiced hung yogurt, mustard oil, and grilled in tandoor with bell peppers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHfR7iVEql7D9v5VFRFN7OOBNjRWy1ilDL_MRb_lqQmgTXhHtxZjx1-_jnK7ga-88wGHQKX81KwTRl8am_T_mnW6-YrcFGITkSkfbd8ZMgyEZWhQodt_ykXr_oc4eL6GwgGFhLo8T6WgbHY1EJjVw_SFHlULS-JEgeDYr9IL-SBzlABQDXGpWnz7vr1Xp387h3ciPt8Kddd1G7fktHZGN8ifduccMgULs6hxfPLUUaCyAxvGVNussHtQLhPfKRswRKumfSkh_urtOS"
  },
  {
    id: "s2",
    name: "Chicken Lollipop (6 Pcs)",
    category: "starters",
    price: 240,
    rating: 4.9,
    reviews: 168,
    isVeg: false,
    isBestseller: true,
    isSpicy: true,
    description: "Crispy fried chicken winglets tossed in fiery garlic Schezwan sauce, served with cut cabbage and mint chutney.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO0Qbe9TUgemVaVYTvIzCMqPM48ZXeWjIyAYwkuEse1Y3ed6_6KdXWqMRZyg9lbcbhNZkqTP6i6jFEYo2qGRqORn0K4LOsIgvdsWzC2gDJNCjTZW1KC4dgruUwNXg2yCHQRBCpF_Wn4-EcQF6pOqbvOq5u6TRGH3KEwgCAF-cH_ZVzjlL9xR5mZ_u6oKxr3eSGq52Wst7kMt3uGNvVse-jFlE5w62tI_VDryaMrK_KHX2akiWbYs0_A_shablvxEWhNQXsLDQW7RQx"
  },
  {
    id: "s3",
    name: "Crispy Babycorn Chili",
    category: "starters",
    price: 160,
    rating: 4.6,
    reviews: 64,
    isVeg: true,
    isBestseller: false,
    isSpicy: true,
    description: "Golden fried tender baby corn sticks tossed with crunchy capsicum, green chilies, and tangy soy sauce.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop"
  },

  // North Indian
  {
    id: "n1",
    name: "Paneer Butter Masala",
    category: "north-indian",
    price: 180,
    rating: 4.9,
    reviews: 210,
    isVeg: true,
    isBestseller: true,
    isSpicy: false,
    description: "Velvety tomato gravy with soft cottage cheese cubes, rich cashew paste, Kasuri Methi, and fresh white butter.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzu63j6XhU2EDnQjSVe-ypIvHq8ZQTJiBZfNo-vnZvQce1CvjAOrc3FPq6Z1RtyblhEphXJbbweYRwwrY8-8T6TwxzYRB3AP1oua8ZjWiD-urPjFRhlMXoi7v9IDdaSAIC9X2vXa8LqZ4FlHHNBk7XCkRPMTzsIY7qrJRMxQJlqBjX_FMDeEEIhIAafrBrF1OTQ9Ui0scuzQ9x2-YuxEkP3tpLJFvN6af-6pwPyyFpFgnE6dP5A6pIl_eHU2RJ9M4bGmyIrKA5gQNo"
  },
  {
    id: "n2",
    name: "Dal Makhani",
    category: "north-indian",
    price: 160,
    rating: 4.8,
    reviews: 132,
    isVeg: true,
    isBestseller: false,
    isSpicy: false,
    description: "Overnight slow-cooked black lentils and kidney beans simmered with cream, butter, and mild Indian spices.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbR3O7MPSPFPJ5cajpWIEvxq1q4TC4tkLWnxoCD6H-h3mT2FVdBfSfrVHcSt5FBf9zO6ahSr9dZYH3BE_7ZSASOQ0pn_HgJwWe5TVnaFFwU-TdV9YIyGKAvFZhRJElvw1uvzQFFf_gO9L6XtAtqMW7v-EOJpyYnhFfRVaJWTcxlflsVr5fPsyOZ_NaL4XSg2omCNTYBkvrPg-jEsRD5NUq1E7fkkEtFs5SyeMGvbIiv00-_C1eKhunx39O_I8OkumE2iR_JsTzMjqy"
  },
  {
    id: "n3",
    name: "Butter Chicken Special",
    category: "north-indian",
    price: 260,
    rating: 4.9,
    reviews: 184,
    isVeg: false,
    isBestseller: true,
    isSpicy: false,
    description: "Tandoori grilled boneless chicken cooked in rich, sweet & savory buttery tomato cream sauce.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },

  // Chinese
  {
    id: "c1",
    name: "Veg Hakka Noodles",
    category: "chinese",
    price: 140,
    rating: 4.7,
    reviews: 98,
    isVeg: true,
    isBestseller: false,
    isSpicy: false,
    description: "Wok-tossed noodles with shredded cabbage, carrots, bell peppers, spring onions, and light oriental seasoning.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDToxdnqSTrvykoHrinhaP_f17qUNHTc782yM1PdCtgPscHghKrEE9kop_MNsgkGbmK2EKhtTYusWIfGqBzsphLSEDGEYPnDmTxN4HF2d1yYOFAwRxuvx4QmQMEntg7CsJAsJb0_5Xyus4GIbFBJaoJsp5wnaM3K3MF4N_6wuc2K8Buid8myk9omqkE4WGEhSGau8xERk0-j0fPT8LNENFMfYEhIhYhsbU0aK6WKg603E5HIIo7wh1Ok7mr85lA3PysKYhB84JEWmG"
  },
  {
    id: "c2",
    name: "Chicken Manchurian (Gravy)",
    category: "chinese",
    price: 200,
    rating: 4.8,
    reviews: 114,
    isVeg: false,
    isBestseller: true,
    isSpicy: true,
    description: "Crispy chicken bites coated in glossy garlic-ginger dark soy gravy with chopped scallions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV_sE5qOPs48T8JW4w2G9KDgPZa65PkoDq7tFmxvmUzZ5gvXVx1PWFpe4F9aBm-bTJ5r8Kj9-FI8ZkJZVx6GGl6w_0B3tvJulBnm2C0QzeXTZnJlhSTPYvR-CJdtfX3OknfWPZp1pbH4sRcMihjs_AfB8AT1e8-tylCuwLjVYo4hjMCaUxl-YLt12JBvlDwM24CktlkMuV9yRGEuS6GKISsoU2NzssH1DArKdKnABaFIwPzw9olIk3wN2Thu7q5SkPdb9CLNuGelpu"
  },

  // Desserts & Beverages
  {
    id: "d1",
    name: "Gulab Jamun (2 Pcs)",
    category: "desserts",
    price: 70,
    rating: 4.9,
    reviews: 78,
    isVeg: true,
    isBestseller: true,
    isSpicy: false,
    description: "Soft khoya dumplings fried golden and soaked in warm cardamom and rose water sugar syrup.",
    image: "https://images.unsplash.com/photo-1628178121175-10eb0a6234d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "d2",
    name: "Cold Mango Lassi",
    category: "desserts",
    price: 90,
    rating: 4.8,
    reviews: 92,
    isVeg: true,
    isBestseller: false,
    isSpicy: false,
    description: "Thick chilled yogurt beverage blended with sweet Alphonsos and garnished with crushed pistachios.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop"
  }
];

export const DECORATION_PACKAGES = [
  {
    id: "pkg1",
    title: "Birthday Decoration Package",
    tagline: "Vibrant & Festive",
    price: 1500,
    icon: "cake",
    colorTheme: "primary",
    description: "Standard balloon clusters, customized birthday banner, table confetti, and birthday crown accessories.",
    features: [
      "50+ Premium Gold & Ivory Balloons",
      "Personalized Acrylic Happy Birthday Banner",
      "Table Floral Centering & Confetti",
      "Dedicated Service Coordinator"
    ]
  },
  {
    id: "pkg2",
    title: "Anniversary Setup Package",
    tagline: "Romantic Hearth Atmosphere",
    price: 2500,
    icon: "favorite",
    colorTheme: "secondary",
    description: "Romantic rose petal pathways, heart balloon arches, ambient fairy lights, and candlelit booth reserve.",
    features: [
      "Fresh Red Rose Petal Pathway & Table Setup",
      "Heart-Shaped Metallic Balloon Arch",
      "Soft Ambient Warm Candle Lighting",
      "Complimentary Dessert Plate with Sparklers"
    ]
  },
  {
    id: "pkg3",
    title: "Custom Party Celebration",
    tagline: "Bespoke Themes",
    price: 3500,
    icon: "celebration",
    colorTheme: "tertiary",
    description: "Fully customizable theme decor for ring ceremonies, baby showers, farewells, or corporate gatherings.",
    features: [
      "Custom Backdrop & Photo Booth setup",
      "Color-coded Premium Foil Balloons",
      "Priority Table Reservation & Sound Setup",
      "Custom Menu Cards for Guests"
    ]
  }
];
