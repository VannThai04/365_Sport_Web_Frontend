import type { Product } from "~/type/product";

export const products: Product[] = [
  // =====================================================
  // POPULAR PRODUCTS
  // =====================================================

  {
    id: 1,
    name: "Nike Air Zoom Pegasus 40",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
      "https://images.unsplash.com/photo-1579958118587-cd4628902d4a?w=800&q=80",
    ],
    description:
      "Responsive cushioning and smooth transitions make it a great choice for everyday running. The Nike Air Zoom Pegasus 40 delivers the responsive support you need.",
    category: "Running Shoes",
    brand: "Nike",
    gender: "Men",
    color: "Black / White / University Red",
    size: ["7", "8", "9", "10", "11", "12", "13"],
    discount: 15,
    rating: 4.8,
    reviews: 1247,
    stock: 24,
    featured: true,
    isNew: true,
    popular: true,
  },

  {
    id: 2,
    name: "Adidas Ultraboost 22",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1556821552-5f94c71f2f3b?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1525966222134-fcebf0055d5f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556821552-5f94c71f2f3b?w=800&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcebf0055d5f?w=800&q=80",
      "https://images.unsplash.com/photo-1523170535258-f5ed11844a49?w=800&q=80",
    ],
    description:
      "Designed for comfort and performance, Ultraboost 22 provides exceptional energy return with advanced Boost technology. Perfect for long-distance running.",
    category: "Running Shoes",
    brand: "Adidas",
    gender: "Men",
    color: "Cloud White / Core Black",
    size: ["7", "8", "9", "10", "11", "12", "13"],
    discount: 20,
    rating: 4.9,
    reviews: 2156,
    stock: 18,
    featured: true,
    isNew: false,
    popular: true,
  },

  {
    id: 3,
    name: "Puma RS-X Super",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1539185441766-40950953cd6f?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1549298881-0710dc682b7b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1539185441766-40950953cd6f?w=800&q=80",
      "https://images.unsplash.com/photo-1549298881-0710dc682b7b?w=800&q=80",
      "https://images.unsplash.com/photo-1542546068-19db7dc21d74?w=800&q=80",
    ],
    description:
      "The RS-X Super combines street style with premium comfort. A modern take on a retro favorite, perfect for casual wear and light training.",
    category: "Casual Sneakers",
    brand: "Puma",
    gender: "Unisex",
    color: "Puma White / Puma Black",
    size: ["5", "6", "7", "8", "9", "10", "11", "12"],
    discount: 25,
    rating: 4.7,
    reviews: 892,
    stock: 32,
    featured: true,
    isNew: true,
    popular: true,
  },

  {
    id: 4,
    name: "New Balance 990v6",
    price: 184.99,
    image:
      "https://images.unsplash.com/photo-1612521150235-e80e0b5f51d5?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1549622582-1e5a27a63c86?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1612521150235-e80e0b5f51d5?w=800&q=80",
      "https://images.unsplash.com/photo-1549622582-1e5a27a63c86?w=800&q=80",
      "https://images.unsplash.com/photo-1530309592458-340c1d05b9df?w=800&q=80",
    ],
    description:
      "Legendary comfort and heritage design. The 990v6 features premium materials and advanced cushioning technology for all-day comfort and support.",
    category: "Running Shoes",
    brand: "New Balance",
    gender: "Men",
    color: "Grey / White",
    size: ["7", "8", "9", "10", "11", "12", "13"],
    discount: 10,
    rating: 4.9,
    reviews: 1834,
    stock: 15,
    featured: true,
    isNew: false,
    popular: true,
  },

  // =====================================================
  // DISCOUNT PRODUCTS
  // =====================================================

  {
    id: 5,
    name: "Adidas NMD R1",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1577872200969-2b12d56c3c45?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1540020773857-3e3b86f6b9da?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1577872200969-2b12d56c3c45?w=800&q=80",
      "https://images.unsplash.com/photo-1540020773857-3e3b86f6b9da?w=800&q=80",
      "https://images.unsplash.com/photo-1513455835260-430cecad64fd?w=800&q=80",
    ],
    description:
      "The classic NMD R1 offers modern style with Boost technology cushioning. Great for everyday wear with street-style appeal.",
    category: "Casual Sneakers",
    brand: "Adidas",
    gender: "Unisex",
    color: "Cloud White / Green",
    size: ["5", "6", "7", "8", "9", "10", "11", "12", "13"],
    discount: 35,
    rating: 4.6,
    reviews: 1523,
    stock: 28,
    featured: false,
    isNew: false,
    popular: false,
  },

  {
    id: 6,
    name: "Nike Revolution 6",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1606107557529-da4b46f20128?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1606107557529-da4b46f20128?w=800&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    ],
    description:
      "Simple, comfortable, and affordable. The Nike Revolution 6 provides essential performance for casual training and everyday activities.",
    category: "Running Shoes",
    brand: "Nike",
    gender: "Kids",
    color: "Black / White",
    size: ["3", "4", "5", "6", "7", "8"],
    discount: 40,
    rating: 4.5,
    reviews: 876,
    stock: 45,
    featured: false,
    isNew: false,
    popular: false,
  },

  {
    id: 7,
    name: "Saucony Triumph 20",
    price: 139.99,
    image:
      "https://images.unsplash.com/photo-1526062881576-09a72c4c7f8b?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1542456292-cbe1f5caa6db?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1526062881576-09a72c4c7f8b?w=800&q=80",
      "https://images.unsplash.com/photo-1542456292-cbe1f5caa6db?w=800&q=80",
      "https://images.unsplash.com/photo-1479622753714-4e3871c667e1?w=800&q=80",
    ],
    description:
      "Saucony's premium cushioned runner with PlushGel technology. Built for maximum comfort on long-distance runs and daily training.",
    category: "Running Shoes",
    brand: "Saucony",
    gender: "Men",
    color: "Ocean / Storm",
    size: ["7", "8", "9", "10", "11", "12", "13"],
    discount: 30,
    rating: 4.8,
    reviews: 945,
    stock: 20,
    featured: false,
    isNew: false,
    popular: false,
  },

  {
    id: 8,
    name: "ASICS Gel-Kayano 29",
    price: 169.99,
    image:
      "https://images.unsplash.com/photo-1463622328062-d692c695ba36?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1542546068-19db7dc21d74?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1463622328062-d692c695ba36?w=800&q=80",
      "https://images.unsplash.com/photo-1542546068-19db7dc21d74?w=800&q=80",
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=800&q=80",
    ],
    description:
      "Premium stability shoe with advanced GEL technology. Designed for runners who need support and comfort on every stride.",
    category: "Running Shoes",
    brand: "ASICS",
    gender: "Men",
    color: "Peacoat / White",
    size: ["7", "8", "9", "10", "11", "12", "13"],
    discount: 28,
    rating: 4.9,
    reviews: 1456,
    stock: 17,
    featured: false,
    isNew: false,
    popular: false,
  },

  {
    id: 9,
    name: "Reebok Classic Leather Legacy",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1608231387042-352e5dea6917?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608231387042-352e5dea6917?w=800&q=80",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
    ],
    description:
      "Iconic retro design meets modern comfort. The Classic Leather Legacy is perfect for casual wear and offers timeless style.",
    category: "Casual Sneakers",
    brand: "Reebok",
    gender: "Unisex",
    color: "White / Pure Grey",
    size: ["5", "6", "7", "8", "9", "10", "11", "12"],
    discount: 32,
    rating: 4.6,
    reviews: 728,
    stock: 35,
    featured: false,
    isNew: false,
    popular: false,
  },

  {
    id: 10,
    name: "Converse Chuck Taylor All Star",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1577222055194-41cf4a33f011?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1579538481759-d8d769cf22ca?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1577222055194-41cf4a33f011?w=800&q=80",
      "https://images.unsplash.com/photo-1579538481759-d8d769cf22ca?w=800&q=80",
      "https://images.unsplash.com/photo-1598694159484-3671e856c8e5?w=800&q=80",
    ],
    description:
      "The legendary All Star. A timeless classic canvas sneaker that goes with everything. Perfect for street style and casual adventures.",
    category: "Casual Sneakers",
    brand: "Converse",
    gender: "Unisex",
    color: "Classic White",
    size: ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    discount: 45,
    rating: 4.7,
    reviews: 3421,
    stock: 60,
    featured: false,
    isNew: false,
    popular: false,
  },

  {
    id: 11,
    name: "Nike Phantom GX 2 Elite FG",
    price: 259.99,
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80",
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80",
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    ],
    description:
      "Elite football boots with a precise touch zone and aggressive traction for natural-grass pitches.",
    category: "Football Shoes",
    brand: "Nike",
    gender: "Unisex",
    color: "White / Bright Crimson",
    size: ["7", "8", "9", "10", "11", "12"],
    discount: 12,
    rating: 4.8,
    reviews: 642,
    stock: 12,
    featured: true,
    isNew: true,
    popular: false,
  },

  {
    id: 12,
    name: "Adidas Predator League FG",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80",
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    ],
    description:
      "Control-focused football boots with a textured upper for confident passing and finishing.",
    category: "Football Shoes",
    brand: "Adidas",
    gender: "Men",
    color: "Black / Solar Red",
    size: ["7", "8", "9", "10", "11", "12"],
    discount: 22,
    rating: 4.7,
    reviews: 488,
    stock: 16,
    featured: false,
    isNew: true,
    popular: false,
  },

  {
    id: 13,
    name: "Jordan One Take 5",
    price: 115,
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80",
    ],
    description:
      "Responsive basketball shoes with court-ready grip and lightweight cushioning for quick changes of direction.",
    category: "Basketball Shoes",
    brand: "Jordan",
    gender: "Men",
    color: "Black / University Red",
    size: ["8", "9", "10", "11", "12", "13"],
    discount: 18,
    rating: 4.6,
    reviews: 367,
    stock: 21,
    featured: true,
    isNew: true,
    popular: false,
  },

  {
    id: 14,
    name: "Nike Metcon 9 AMP",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80",
    ],
    description:
      "Stable training shoes built for lifting, short runs, rope climbs and demanding gym sessions.",
    category: "Training Shoes",
    brand: "Nike",
    gender: "Unisex",
    color: "Sail / Black / Gum",
    size: ["7", "8", "9", "10", "11", "12", "13"],
    discount: 15,
    rating: 4.8,
    reviews: 531,
    stock: 14,
    featured: true,
    isNew: false,
    popular: false,
  },

  {
    id: 15,
    name: "Under Armour HOVR Sonic 6",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
    ],
    description:
      "Lightweight connected running shoes with responsive cushioning for daily road miles.",
    category: "Running Shoes",
    brand: "Under Armour",
    gender: "Unisex",
    color: "Blue / White",
    size: ["7", "8", "9", "10", "11", "12"],
    discount: 24,
    rating: 4.5,
    reviews: 286,
    stock: 19,
    featured: false,
    isNew: true,
    popular: false,
  },

  {
    id: 16,
    name: "Nike Dri-FIT Academy Jersey",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&q=80",
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800&q=80",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80",
    ],
    description:
      "Breathable football jersey with sweat-wicking fabric for training and match-day comfort.",
    category: "Sports Clothing",
    brand: "Nike",
    gender: "Unisex",
    color: "Volt / Black",
    size: ["S", "M", "L", "XL", "XXL"],
    discount: 20,
    rating: 4.6,
    reviews: 154,
    stock: 30,
    featured: false,
    isNew: true,
    popular: false,
  },

  {
    id: 17,
    name: "Adidas Training Backpack 30L",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
    ],
    description:
      "Durable 30-litre backpack with separate shoe storage and organized pockets for training essentials.",
    category: "Sports Bags",
    brand: "Adidas",
    gender: "Unisex",
    color: "Black / White",
    size: ["One Size"],
    discount: 15,
    rating: 4.7,
    reviews: 203,
    stock: 25,
    featured: false,
    isNew: false,
    popular: false,
  },

  {
    id: 18,
    name: "Thermos Performance Water Bottle",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
    hoverimg:
      "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
      "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=800&q=80",
      "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?w=800&q=80",
    ],
    description:
      "Double-wall insulated bottle that keeps drinks cold through workouts, matches and outdoor sessions.",
    category: "Sports Accessories",
    brand: "Thermos",
    gender: "Unisex",
    color: "Matte Black",
    size: ["750ml"],
    discount: 10,
    rating: 4.5,
    reviews: 118,
    stock: 42,
    featured: false,
    isNew: true,
    popular: false,
  },
];
