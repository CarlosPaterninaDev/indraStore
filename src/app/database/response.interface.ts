import { Product, Offer } from '../product/models/product.interface';
import { Category, Sponsorship } from '../home/models/category.interface';

export interface ResponseDB {
  products: Product[];
  offers: Offer[];
  category: Category[];
  sponsorship: Sponsorship[];
}
