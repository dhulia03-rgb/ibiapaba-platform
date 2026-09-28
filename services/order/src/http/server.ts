import Fastify from "fastify";
import { createOrderHandler } from "./create-order-handler.js";

export function buildServer() {
  const app = Fastify();

  app.post("/orders", async (request) => {
    const body = request.body as {
      id: string;
      organizationId: string;
    };

    return createOrderHandler(body);
  });

  return app;
}
