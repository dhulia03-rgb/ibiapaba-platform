import Fastify from "fastify";
import { checkFraudHandler } from "./check-fraud-handler.js";
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

  app.post("/fraud/check", async (request) => {
    return checkFraudHandler(request.body as {
      orderId: string;
      organizationId: string;
      amount: number;
    });
  });

  return app;
}
