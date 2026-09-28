import Fastify from "fastify";
import { createOrganizationHandler } from "./create-organization-handler.js";

export function buildServer() {
  const app = Fastify();

  app.post("/organizations", async (request) => {
    const body = request.body as {
      id: string;
      name: string;
    };

    return createOrganizationHandler(body);
  });

  return app;
}
