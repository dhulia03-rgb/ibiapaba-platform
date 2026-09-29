import { buildFraudCheck } from "./fraud.js";

const fraudCheck = buildFraudCheck("fraud-1", "order-1");

if (fraudCheck.id !== "fraud-1") {
  throw new Error("Fraud check id is incorrect");
}

if (fraudCheck.orderId !== "order-1") {
  throw new Error("Order id is incorrect");
}

if (fraudCheck.status !== "pending") {
  throw new Error("New fraud check must start as pending");
}

let rejected = false;

try {
  buildFraudCheck("fraud-2", "   ");
} catch {
  rejected = true;
}

if (!rejected) {
  throw new Error("Fraud check without order was accepted");
}

console.log("Fraud domain tests passed");
