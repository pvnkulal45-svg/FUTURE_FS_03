/**
 * Golden Crust Bakery - Core Configuration File
 * Designed for a clean, elegant, professional bakery website.
 * Note: Contact details and unconfirmed menu prices are kept as honest, editable placeholders.
 */

export const BAKERY_CONFIG = {
  brand: {
    name: "Golden Crust Bakery",
    shortName: "Golden Crust",
    headline: "Freshly Baked Happiness, Every Day",
    subHeadline: "Welcome to Golden Crust Bakery. From artisanal celebration cakes and flaky golden pastries to gourmet cupcakes and fresh morning breads, we bake daily with love, wholesome ingredients, and timeless care.",
    monogram: "GC",
    establishedPhrase: "Artisanal Bakery & Confectionery",
  },

  navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Specialties", href: "#specialties" },
    { name: "Menu", href: "#menu" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ],

  about: {
    badge: "About Golden Crust Bakery",
    title: "Fresh Traditions, Honest Ingredients",
    paragraphs: [
      "At Golden Crust Bakery, our philosophy is simple: bringing warmth, comfort, and joy to your table through the timeless craft of baking.",
      "We believe in small morning batches, unhurried fermentation, and honest ingredients. Every recipe is prepared with real butter, fresh cream, farm eggs, natural fruit reductions, and premium chocolates.",
      "Whether you are stopping by for your daily morning loaf, treating yourself to a flaky afternoon pastry, or choosing a centerpiece cake for life's milestones, we welcome you to experience freshly baked happiness in every bite."
    ],
    features: [
      {
        icon: "Clock",
        title: "Baked Fresh Daily",
        description: "Our ovens are fired up before dawn so you always receive oven-fresh breads, warm pastries, and tender cakes."
      },
      {
        icon: "ShieldCheck",
        title: "Wholesome Ingredients",
        description: "Pure creamery butter, single-origin chocolate, unbleached flours, and zero artificial preservatives."
      },
      {
        icon: "Heart",
        title: "Crafted with Care",
        description: "Every pastry and celebration cake is shaped, layered, and finished by hand with thoughtful culinary craftsmanship."
      }
    ]
  },

  specialties: [
    {
      id: "cakes",
      name: "Artisan Cakes",
      subtitle: "Celebrations & Milestones",
      description: "From decadent multi-layer chocolate cakes to delicate berries-and-cream sponges, hand-decorated for weddings, birthdays, and special gatherings.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "/images/cake-sovereign.svg",
      tag: "Best for Celebrations",
      itemsPreview: ["Belgian Dark Chocolate", "Vanilla & Wild Berry", "Pistachio Caramel"],
      categoryFilter: "cakes"
    },
    {
      id: "pastries",
      name: "Flaky Pastries",
      subtitle: "Laminated & Golden",
      description: "Baked with pure butter and layered for an impossibly crisp exterior and tender, airy interior. Enjoy traditional croissants, pain au chocolat, and seasonal tarts.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "/images/cake-vanilla.svg",
      tag: "Morning Favorite",
      itemsPreview: ["Butter Croissant", "Pain au Chocolat", "Salted Caramel Tart"],
      categoryFilter: "pastries"
    },
    {
      id: "cupcakes",
      name: "Gourmet Cupcakes",
      subtitle: "Sweet Individual Treats",
      description: "Moist, tender cupcakes topped with silky whipped buttercreams, cocoa ganache swirls, toasted crumbles, and fresh berry accents.",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "/images/cake-rose.svg",
      tag: "Party & Gift Sets",
      itemsPreview: ["Tahitian Vanilla", "Velvet Cocoa", "Salted Caramel Toffee"],
      categoryFilter: "cupcakes"
    },
    {
      id: "bread",
      name: "Fresh Breads",
      subtitle: "Naturally Fermented & Crusty",
      description: "Rustic sourdough boules, golden soft brioche, and wholesome artisan loaves crafted with long fermentations for deep flavour and golden crusts.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "/images/cake-honeycomb.svg",
      tag: "Hand-Shaped Daily",
      itemsPreview: ["Heritage Sourdough", "Golden Brioche", "Country Baguette"],
      categoryFilter: "breads"
    }
  ],

  menu: {
    disclaimer: "Verified sample menu for Golden Crust Bakery project. Bespoke cakes, custom dietary requirements, and event catering are priced upon consultation.",
    categories: [
      { id: "all", name: "All Items" },
      { id: "cakes", name: "Cakes" },
      { id: "pastries", name: "Pastries" },
      { id: "cupcakes", name: "Cupcakes" },
      { id: "breads", name: "Bread" },
      { id: "beverages", name: "Beverages" }
    ],
    items: [
      // Cakes
      {
        id: "cake-1",
        category: "cakes",
        name: "Belgian Dark Chocolate Cake",
        price: "₹850 (7\") / ₹1,250 (9\")",
        description: "72% Belgian dark chocolate mousse, moist cocoa sponge, salted caramel ribbon, and chocolate curls.",
        dietary: "Vegetarian",
        isSignature: true
      },
      {
        id: "cake-2",
        category: "cakes",
        name: "Madagascar Vanilla & Wild Berry Cake",
        price: "₹750 (7\") / ₹1,150 (9\")",
        description: "Tender vanilla bean chiffon, house-made wild blackberry compote, and light whipped mascarpone.",
        dietary: "Vegetarian, Nut-Free",
        isSignature: true
      },
      {
        id: "cake-3",
        category: "cakes",
        name: "Sicilian Pistachio & Caramel Cake",
        price: "₹950 (7\") / ₹1,400 (9\")",
        description: "Almond sponge, roasted pistachio buttercream, and a delicate crisp wafer crunch.",
        dietary: "Vegetarian",
        isSignature: false
      },
      {
        id: "cake-4",
        category: "cakes",
        name: "Amber Honeycomb Crunch Cake",
        price: "₹800 (7\") / ₹1,200 (9\")",
        description: "Honey-soaked sponge layers, light caramel cream, and golden toffee crunch pieces.",
        dietary: "Vegetarian",
        isSignature: false
      },
      {
        id: "cake-5",
        category: "cakes",
        name: "Classic Velvet Rose Cake",
        price: "₹850 (7\") / ₹1,250 (9\")",
        description: "Gentle organic rose-infused sponge, raspberry coulis, and silky vanilla frosting.",
        dietary: "Vegetarian, Nut-Free",
        isSignature: false
      },
      {
        id: "cake-6",
        category: "cakes",
        name: "Traditional Tiramisu Layer Cake",
        price: "₹750 (7\") / ₹1,100 (9\")",
        description: "Espresso-soaked sponge, delicate mascarpone cream, and bitter Valrhona cocoa dusting.",
        dietary: "Vegetarian",
        isSignature: false
      },
      {
        id: "cake-custom",
        category: "cakes",
        name: "Custom Celebration Tier (Bespoke)",
        price: "Price on request",
        description: "Personalized multi-tier designs for weddings and special anniversaries. Tailored flavors and hand-crafted decorative finishes.",
        dietary: "Customizable",
        isSignature: true
      },

      // Pastries
      {
        id: "pastry-1",
        category: "pastries",
        name: "Golden Butter Croissant",
        price: "₹160",
        description: "Pure French butter, slowly fermented dough, 27 flaky, golden-crisp layers.",
        dietary: "Vegetarian",
        isSignature: true
      },
      {
        id: "pastry-2",
        category: "pastries",
        name: "Pain au Chocolat",
        price: "₹190",
        description: "Flaky pastry wrapped around double batons of rich semi-sweet dark chocolate.",
        dietary: "Vegetarian",
        isSignature: true
      },
      {
        id: "pastry-3",
        category: "pastries",
        name: "Salted Caramel Ganache Tartlet",
        price: "₹240",
        description: "Buttery sweet shortcrust tart filled with smoked sea salt caramel and dark chocolate ganache.",
        dietary: "Vegetarian",
        isSignature: false
      },
      {
        id: "pastry-4",
        category: "pastries",
        name: "Wild Berry & Pistachio Danish",
        price: "₹220",
        description: "Crisp puff pastry pocket filled with pistachio pastry cream and fresh seasonal berries.",
        dietary: "Vegetarian",
        isSignature: false
      },
      {
        id: "pastry-5",
        category: "pastries",
        name: "Parisian Vanilla Mille-Feuille",
        price: "₹260",
        description: "Caramelized puff pastry sheets layered with Tahitian vanilla diplomate cream.",
        dietary: "Vegetarian",
        isSignature: false
      },

      // Cupcakes
      {
        id: "cupcake-1",
        category: "cupcakes",
        name: "Tahitian Vanilla Bean Cupcake",
        price: "₹120",
        description: "Fluffy vanilla sponge piped with real vanilla bean whipped buttercream.",
        dietary: "Vegetarian, Nut-Free",
        isSignature: false
      },
      {
        id: "cupcake-2",
        category: "cupcakes",
        name: "Double Fudge Chocolate Cupcake",
        price: "₹140",
        description: "Dark chocolate sponge filled with chocolate ganache and chocolate cream swirl.",
        dietary: "Vegetarian",
        isSignature: true
      },
      {
        id: "cupcake-3",
        category: "cupcakes",
        name: "Salted Caramel Toffee Cupcake",
        price: "₹140",
        description: "Brown sugar sponge, salted caramel centre, topped with caramel buttercream and toffee bits.",
        dietary: "Vegetarian",
        isSignature: false
      },
      {
        id: "cupcake-4",
        category: "cupcakes",
        name: "Red Velvet & Mascarpone Cupcake",
        price: "₹150",
        description: "Classic tender red velvet crumb with whipped cream cheese and mascarpone frosting.",
        dietary: "Vegetarian, Nut-Free",
        isSignature: false
      },
      {
        id: "cupcake-box",
        category: "cupcakes",
        name: "Artisan Cupcake Box (Set of 6)",
        price: "₹750",
        description: "Assorted flavours boxed elegantly with a ribbon. Perfect for gifts and gatherings.",
        dietary: "Vegetarian",
        isSignature: true
      },

      // Breads
      {
        id: "bread-1",
        category: "breads",
        name: "Heritage Sourdough Boule",
        price: "₹280",
        description: "Naturally leavened with wild starter, 24-hour slow proof, blistered crisp crust, tender open crumb.",
        dietary: "Vegan",
        isSignature: true
      },
      {
        id: "bread-2",
        category: "breads",
        name: "Golden Butter Brioche Loaf",
        price: "₹320",
        description: "Enriched with real churned butter and eggs for a pillowy, feather-light golden slice.",
        dietary: "Vegetarian",
        isSignature: false
      },
      {
        id: "bread-3",
        category: "breads",
        name: "Traditional French Baguette",
        price: "₹150",
        description: "Classic crisp crust, airy crumb, baked fresh twice daily.",
        dietary: "Vegan",
        isSignature: false
      },
      {
        id: "bread-4",
        category: "breads",
        name: "Seeded Multigrain Country Loaf",
        price: "₹260",
        description: "Flax, sunflower, sesame, and pumpkin seeds folded into a wholesome rustic dough.",
        dietary: "Vegan",
        isSignature: false
      },

      // Beverages
      {
        id: "bev-1",
        category: "beverages",
        name: "Specialty Pour Over Coffee",
        price: "₹180",
        description: "Single-origin roast brewed fresh per order with notes of citrus and cocoa.",
        dietary: "Vegan",
        isSignature: false
      },
      {
        id: "bev-2",
        category: "beverages",
        name: "Golden Crust Spiced Honey Mocha",
        price: "₹220",
        description: "Espresso, melted dark chocolate, steamed milk, touch of wildflower honey and cinnamon.",
        dietary: "Vegetarian",
        isSignature: true
      },
      {
        id: "bev-3",
        category: "beverages",
        name: "Artisan Loose Leaf Tea Selection",
        price: "₹150",
        description: "Choice of Earl Grey, English Breakfast, Jasmine Green, or Chamomile & Rose.",
        dietary: "Vegan",
        isSignature: false
      }
    ]
  },

  // Contact details: synchronized with confirmed Adyar, Mangaluru location
  contact: {
    title: "Get In Touch",
    subtitle: "Have a question, custom cake enquiry, or catering request? Fill in the form below and we will get back to you promptly.",
    addressPlaceholder: "Adyar, Mangaluru, Karnataka – 575002, India",
    phonePlaceholder: "+91 98765 43210 (Configurable)",
    emailPlaceholder: "contact@goldencrustbakery.example",
    hoursPlaceholder: "Tuesday – Saturday: 08:00 AM – 08:30 PM | Sunday: 08:00 AM – 06:00 PM",
    closedPlaceholder: "Monday: Closed for prep & private baking",
    disclaimer: "Note: This is an academic internship website project. Enquiry submissions are validated on the client side for demonstration."
  }
};

/**
 * Formats a numeric amount into Indian Rupees (INR) using Indian number grouping (e.g. ₹1,200).
 */
export const formatINR = (amount) => {
  if (typeof amount !== 'number') return amount;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};
