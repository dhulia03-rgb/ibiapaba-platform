export type FraudStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "review";

export interface FraudCheck {
  id: string;
  orderId: string;
  status: FraudStatus;
  reason?: string;
}
