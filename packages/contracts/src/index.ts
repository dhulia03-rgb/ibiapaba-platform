export type { Organization } from "./organization/index.js";

export interface Order {
  id: string;
  organizationId: string;
  status: string;
}
