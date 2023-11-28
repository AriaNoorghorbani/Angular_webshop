export interface Cart {
  items: Array<CartItem>;
}

export interface CartItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}
