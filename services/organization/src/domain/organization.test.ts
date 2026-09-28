import { buildOrganization } from "./organization.js";

const organization = buildOrganization("org-1", "Ibapaba");

if (organization.name !== "Ibapaba") {
  throw new Error("Valid organization was not created");
}

let rejected = false;

try {
  buildOrganization("org-2", "   ");
} catch {
  rejected = true;
}

if (!rejected) {
  throw new Error("Empty organization name was accepted");
}

console.log("Organization domain tests passed");
