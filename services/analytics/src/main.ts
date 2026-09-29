import { buildServer } from "./http/server.js";

const app = buildServer();

await app.listen({
  port: 3002,
  host: "0.0.0.0",
});

console.log("Analytics service running on port 3002");
