import type { AnalyticsEvent } from "@ibapaba/contracts";

export function buildAnalyticsEvent(
  id: string,
  type: AnalyticsEvent["type"],
  organizationId: string,
  occurredAt: string,
  entityId: string,
): AnalyticsEvent {
  if (!id.trim()) {
    throw new Error("Analytics event id is required");
  }

  if (!organizationId.trim()) {
    throw new Error("Organization id is required");
  }

  if (!occurredAt.trim()) {
    throw new Error("Occurred at is required");
  }

  if (!entityId.trim()) {
    throw new Error("Entity id is required");
  }

  return {
    id,
    type,
    organizationId,
    occurredAt,
    entityId,
  };
}
