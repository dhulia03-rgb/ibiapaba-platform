import Fastify from "fastify";
import { createReviewHandler } from "./create-review-handler.js";

export function buildServer() {
  const app = Fastify();

  app.post("/reviews", async (request) => {
    const body = request.body as {
      id: string;
      orderId: string;
      organizationId: string;
      rating: number;
      comment?: string;
    };

    return createReviewHandler(body);
  });

  return app;
}
