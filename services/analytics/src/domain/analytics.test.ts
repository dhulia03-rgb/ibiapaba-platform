import { buildAnalyticsEvent } from "./analytics.js";

const event = buildAnalyticsEvent(
  "event-1",
  "order_created",
  "org-1",
  "2026-09-28T12:00:00.000Z",
  "order-1",
);

if (event.id !== "event-1") {
  throw new Error("Analytics event id is incorrect");
}

if (event.type !== "order_created") {
  throw new Error("Analytics event type is incorrect");
}

if (event.organizationId !== "org-1") {
  throw new Error("Organization id is incorrect");
}

if (event.entityId !== "order-1") {
  throw new Error("Entity id is incorrect");
}

let rejected = false;

try {
  buildAnalyticsEvent(
    "event-2",
    "order_created",
    "   ",
    "2026-09-28T12:00:00.000Z",
    "order-2",
  );
} catch {
  rejected = true;
}

if (!rejected) {
  throw new Error("Analytics event without organization was accepted");
}

console.log("Analytics domain tests passed");
