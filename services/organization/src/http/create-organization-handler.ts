import { createOrganization } from "../application/create-organization.js";

export interface CreateOrganizationRequest {
  id: string;
  name: string;
}

export function createOrganizationHandler(
  request: CreateOrganizationRequest,
) {
  return createOrganization(request);
}
