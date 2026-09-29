export interface FraudCheckInput {
  orderId: string;
  organizationId: string;
  amount: number;
}

export interface FraudCheckResult {
  approved: boolean;
  score?: number;
}

export interface FraudClient {
  check(input: FraudCheckInput): Promise<FraudCheckResult>;
}

export class HttpFraudClient implements FraudClient {
  constructor(
    private readonly baseUrl: string,
    private readonly fetchImpl: typeof fetch = fetch,
  ) {}

  async check(input: FraudCheckInput): Promise<FraudCheckResult> {
    const response = await this.fetchImpl(
      `${this.baseUrl}/fraud/check`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(input),
      },
    );

    if (!response.ok) {
      throw new Error(`Fraud service returned ${response.status}`);
    }

    return (await response.json()) as FraudCheckResult;
  }
}
