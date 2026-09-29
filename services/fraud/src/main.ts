import { buildServer } from "./http/server.js";

const app = buildServer();

await app.listen({
  port: 3003,
  host: "0.0.0.0",
});

console.log("Fraud service running on port 3003");
