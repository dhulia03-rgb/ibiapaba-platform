import { createAnalyticsEvent } from "../application/create-analytics-event.js";

export interface CreateAnalyticsEventRequest {
  id: string;
  type: "order_created" | "review_created" | "fraud_checked";
  organizationId: string;
  occurredAt: string;
  entityId: string;
}

export function createAnalyticsEventHandler(
  request: CreateAnalyticsEventRequest,
) {
  return createAnalyticsEvent(request);
}
