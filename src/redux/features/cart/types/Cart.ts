export interface Cart {
  id: number;
  sku: string;
  name: string;
  slug: string;
  brand: string;
  price: string;
  qty: number;
  sub_total: number;
  stock: number;
  selected: number;
  image: string;
}