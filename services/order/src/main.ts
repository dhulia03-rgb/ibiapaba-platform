import { buildServer } from "./http/server.js";

const app = buildServer();

await app.listen({
  port: 3001,
  host: "0.0.0.0",
});

console.log("Order service running on port 3001");
