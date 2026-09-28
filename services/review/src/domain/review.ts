import type { Review } from "@ibapaba/contracts";

export function buildReview(
  id: string,
  orderId: string,
  organizationId: string,
  rating: number,
  comment?: string,
): Review {
  if (rating < 1 || rating > 5) {
    throw new Error("Rating must be between 1 and 5");
  }

  return {
    id,
    orderId,
    organizationId,
    rating,
    comment: comment?.trim() || undefined,
  };
}
