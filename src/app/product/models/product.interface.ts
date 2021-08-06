export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

export interface Offer {
  id: number;
  name: string;
  price: number;
  quantity: number;
  offers?: number;
  img: string;
}
