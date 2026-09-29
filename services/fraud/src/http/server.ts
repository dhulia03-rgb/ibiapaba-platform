import Fastify from "fastify";
import { createFraudCheckHandler } from "./create-fraud-check-handler.js";

export function buildServer() {
  const app = Fastify();

  app.post("/fraud-checks", async (request) => {
    const body = request.body as {
      id: string;
      orderId: string;
    };

    return createFraudCheckHandler(body);
  });

  return app;
}
