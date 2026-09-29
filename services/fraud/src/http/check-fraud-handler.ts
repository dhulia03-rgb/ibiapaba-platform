import type { AnalyticsClient } from "../infrastructure/analytics/analytics-client.js";

export interface FraudCheckRequest {
  orderId: string;
  organizationId: string;
  amount: number;
}

export interface FraudCheckResponse {
  approved: boolean;
  score: number;
}

export async function checkFraudHandler(
  request: FraudCheckRequest,
  analyticsClient?: AnalyticsClient,
): Promise<FraudCheckResponse> {
  if (!request.orderId.trim()) {
    throw new Error("Order id is required");
  }

  if (!request.organizationId.trim()) {
    throw new Error("Organization id is required");
  }

  if (!Number.isFinite(request.amount) || request.amount < 0) {
    throw new Error("Amount must be a non-negative number");
  }

  const result = {
    approved: true,
    score: 0,
  };

  if (analyticsClient) {
    await analyticsClient.publish({
      id: crypto.randomUUID(),
      type: "fraud_checked",
      organizationId: request.organizationId,
      occurredAt: new Date().toISOString(),
      entityId: request.orderId,
    });
  }

  return result;
}
