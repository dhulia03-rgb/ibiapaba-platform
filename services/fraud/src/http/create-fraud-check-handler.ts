import { createFraudCheck } from "../application/create-fraud-check.js";

export interface CreateFraudCheckRequest {
  id: string;
  orderId: string;
}

export function createFraudCheckHandler(
  request: CreateFraudCheckRequest,
) {
  return createFraudCheck(request);
}
