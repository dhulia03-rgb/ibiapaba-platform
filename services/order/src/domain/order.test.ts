import { buildOrder } from "./order.js";

const order = buildOrder("order-1", "org-1");

if (order.id !== "order-1") {
  throw new Error("Order id is incorrect");
}

if (order.organizationId !== "org-1") {
  throw new Error("Organization id is incorrect");
}

if (order.status !== "pending") {
  throw new Error("New order must start as pending");
}

let rejected = false;

try {
  buildOrder("order-2", "   ");
} catch {
  rejected = true;
}

if (!rejected) {
  throw new Error("Order without organization was accepted");
}

console.log("Order domain tests passed");
