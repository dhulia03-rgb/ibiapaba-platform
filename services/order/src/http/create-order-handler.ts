import { createOrder } from "../application/create-order.js";

export interface CreateOrderRequest {
  id: string;
  organizationId: string;
}

export function createOrderHandler(
  request: CreateOrderRequest,
) {
  return createOrder(request);
}
