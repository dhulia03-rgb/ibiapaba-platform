export interface AnalyticsEventInput {
  id: string;
  type: "order_created" | "review_created" | "fraud_checked";
  organizationId: string;
  occurredAt: string;
  entityId: string;
}

export interface AnalyticsClient {
  publish(event: AnalyticsEventInput): Promise<void>;
}

export class HttpAnalyticsClient implements AnalyticsClient {
  constructor(
    private readonly baseUrl: string,
    private readonly fetchImpl: typeof fetch = fetch,
  ) {}

  async publish(event: AnalyticsEventInput): Promise<void> {
    const response = await this.fetchImpl(
      `${this.baseUrl}/analytics/events`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(event),
      },
    );

    if (!response.ok) {
      throw new Error(`Analytics service returned ${response.status}`);
    }
  }
}
