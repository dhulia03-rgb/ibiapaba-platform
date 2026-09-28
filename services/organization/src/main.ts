import { buildServer } from "./http/server.js";

const app = buildServer();

await app.listen({
  port: 3000,
  host: "0.0.0.0",
});

console.log("Organization service running on port 3000");
