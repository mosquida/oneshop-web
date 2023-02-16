export interface Cart {
  items: CartItem[];
}

interface CartItem {
  id: string;
  quantity: number;
}
