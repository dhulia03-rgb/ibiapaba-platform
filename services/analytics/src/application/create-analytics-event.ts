import type {
  AnalyticsEvent,
  AnalyticsEventType,
} from "@ibapaba/contracts";
import { buildAnalyticsEvent } from "../domain/analytics.js";

export interface CreateAnalyticsEventInput {
  id: string;
  type: AnalyticsEventType;
  organizationId: string;
  occurredAt: string;
  entityId: string;
}

export function createAnalyticsEvent(
  input: CreateAnalyticsEventInput,
): AnalyticsEvent {
  return buildAnalyticsEvent(
    input.id,
    input.type,
    input.organizationId,
    input.occurredAt,
    input.entityId,
  );
}
