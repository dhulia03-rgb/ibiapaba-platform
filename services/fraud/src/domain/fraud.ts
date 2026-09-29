import type { FraudCheck } from "@ibapaba/contracts";

export function buildFraudCheck(
  id: string,
  orderId: string,
): FraudCheck {
  if (!id.trim()) {
    throw new Error("Fraud check id is required");
  }

  if (!orderId.trim()) {
    throw new Error("Order id is required");
  }

  return {
    id,
    orderId,
    status: "pending",
  };
}
