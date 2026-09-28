import type { Organization } from "@ibapaba/contracts";
import { buildOrganization } from "../domain/organization.js";

export interface CreateOrganizationInput {
  id: string;
  name: string;
}

export function createOrganization(
  input: CreateOrganizationInput,
): Organization {
  return buildOrganization(input.id, input.name);
}
