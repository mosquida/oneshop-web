import { User } from '@oneshop-web/users';
import { OrderItem } from './order-item';

export interface Order {
  _id?: string;
  orderItems?: OrderItem[];
  shippingAddress?: string;
  country?: string;
  phone?: string;
  shippingStatus?: string;
  totalPrice?: number;
  user?: User;
  dateOrdered?: Date;
}
