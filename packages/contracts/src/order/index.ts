export type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "ready"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  organizationId: string;
  status: OrderStatus;
}
