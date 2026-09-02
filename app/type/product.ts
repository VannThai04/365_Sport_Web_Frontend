export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverimg: string;
  images: string[];
  description: string;

  category: string;
  brand: string;
  gender: string;
  color: string;
  size: string[];

  discount: number;
  rating: number;
  reviews: number;
  stock: number;

  featured: boolean;
  isNew: boolean;
  popular?: boolean;
}
