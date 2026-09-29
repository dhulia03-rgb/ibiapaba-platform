import type { Order } from "@ibapaba/contracts";
import { buildOrder } from "../domain/order.js";
import { FraudClient, HttpFraudClient } from "../infrastructure/fraud/fraud-client.js";

const fraudClient: FraudClient = new HttpFraudClient("http://localhost:3003");

export interface CreateOrderInput {
  id: string;
  organizationId: string;
}

export async function createOrder(
  input: CreateOrderInput,
): Promise<Order> {
  const order = buildOrder(input.id, input.organizationId);

  if (fraudClient) {
    await fraudClient.check({
      orderId: order.id,
      organizationId: order.organizationId,
      amount: 0,
    });
  }

  return order;
}
