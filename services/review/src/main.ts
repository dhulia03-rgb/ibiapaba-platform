import { buildServer } from "./http/server.js";

const app = buildServer();

await app.listen({
  port: 3004,
  host: "0.0.0.0",
});

console.log("Review service running on port 3004");
