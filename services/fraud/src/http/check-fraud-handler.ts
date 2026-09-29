export interface FraudCheckRequest {
  orderId: string;
  organizationId: string;
  amount: number;
}

export interface FraudCheckResponse {
  approved: boolean;
  score: number;
}

export function checkFraudHandler(
  request: FraudCheckRequest,
): FraudCheckResponse {
  if (!request.orderId.trim()) {
    throw new Error("Order id is required");
  }

  if (!request.organizationId.trim()) {
    throw new Error("Organization id is required");
  }

  if (!Number.isFinite(request.amount) || request.amount < 0) {
    throw new Error("Amount must be a non-negative number");
  }

  return {
    approved: true,
    score: 0,
  };
}
