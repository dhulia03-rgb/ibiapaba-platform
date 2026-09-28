export interface Review {
  id: string;
  orderId: string;
  organizationId: string;
  rating: number;
  comment?: string;
}
