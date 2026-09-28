import type { Order } from "@ibapaba/contracts";
import { buildOrder } from "../domain/order.js";

export interface CreateOrderInput {
  id: string;
  organizationId: string;
}

export function createOrder(
  input: CreateOrderInput,
): Order {
  return buildOrder(input.id, input.organizationId);
}
