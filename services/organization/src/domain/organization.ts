import type { Organization } from "@ibapaba/contracts";

export function buildOrganization(
  id: string,
  name: string,
): Organization {
  const normalizedName = name.trim();

  if (!normalizedName) {
    throw new Error("Organization name is required");
  }

  return {
    id,
    name: normalizedName,
  };
}
