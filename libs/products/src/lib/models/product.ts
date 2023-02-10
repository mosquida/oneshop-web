import { Category } from '@oneshop-web/categories';

export interface Product {
  _id?: string;
  name?: string;
  description?: string;
  richDescription?: string;
  image?: string;
  images?: string[];
  brand?: string;
  price?: number;
  category?: Category;
  stock?: number;
  rating?: number;
  isFeatured?: boolean;
  dateCreated?: string;
}
