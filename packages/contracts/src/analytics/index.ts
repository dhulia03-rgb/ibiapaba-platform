export type AnalyticsEventType =
  | "order_created"
  | "order_confirmed"
  | "order_delivered"
  | "order_cancelled"
  | "review_created"
  | "fraud_checked";

export interface AnalyticsEvent {
  id: string;
  type: AnalyticsEventType;
  organizationId: string;
  occurredAt: string;
  entityId: string;
}
