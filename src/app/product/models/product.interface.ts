export interface Product {
  id: number;
  name: string;
  price: number;
  description: number;
  img: string;
  rate: number;
}

export interface Offer {
  id: number;
  name: string;
  price: number;
  description: number;
  offers?: number;
  img: string;
}
