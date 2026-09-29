import Fastify from "fastify";
import { createAnalyticsEventHandler } from "./create-analytics-event-handler.js";

export function buildServer() {
  const app = Fastify();

  app.post("/analytics/events", async (request) => {
    const body = request.body as {
      id: string;
      type: "order_created" | "review_created" | "fraud_checked";
      organizationId: string;
      occurredAt: string;
      entityId: string;
    };

    return createAnalyticsEventHandler(body);
  });

  return app;
}
