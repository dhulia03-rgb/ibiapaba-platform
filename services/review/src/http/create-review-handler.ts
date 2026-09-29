import { createReview } from "../application/create-review.js";

export interface CreateReviewRequest {
  id: string;
  orderId: string;
  organizationId: string;
  rating: number;
  comment?: string;
}

export function createReviewHandler(
  request: CreateReviewRequest,
) {
  return createReview(request);
}
