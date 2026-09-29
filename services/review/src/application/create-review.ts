import type { Review } from "@ibapaba/contracts";
import { buildReview } from "../domain/review.js";

export interface CreateReviewInput {
  id: string;
  orderId: string;
  organizationId: string;
  rating: number;
  comment?: string;
}

export function createReview(
  input: CreateReviewInput,
): Review {
  return buildReview(
    input.id,
    input.orderId,
    input.organizationId,
    input.rating,
    input.comment,
  );
}
