import type { Order } from "@ibapaba/contracts";

export function buildOrder(
  id: string,
  organizationId: string,
): Order {
  if (!id.trim()) {
    throw new Error("Order id is required");
  }

  if (!organizationId.trim()) {
    throw new Error("Organization id is required");
  }

  return {
    id,
    organizationId,
    status: "pending",
  };
}
