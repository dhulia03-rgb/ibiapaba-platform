import type { FraudCheck } from "@ibapaba/contracts";
import { buildFraudCheck } from "../domain/fraud.js";

export interface CreateFraudCheckInput {
  id: string;
  orderId: string;
}

export function createFraudCheck(
  input: CreateFraudCheckInput,
): FraudCheck {
  return buildFraudCheck(
    input.id,
    input.orderId,
  );
}
