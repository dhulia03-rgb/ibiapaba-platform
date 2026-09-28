import { buildReview } from "./review.js";

const review = buildReview(
  "review-1",
  "order-1",
  "org-1",
  5,
  "Ótimo atendimento",
);

if (review.rating !== 5) {
  throw new Error("Review rating is incorrect");
}

if (review.comment !== "Ótimo atendimento") {
  throw new Error("Review comment is incorrect");
}

let rejected = false;

try {
  buildReview("review-2", "order-2", "org-1", 6);
} catch {
  rejected = true;
}

if (!rejected) {
  throw new Error("Invalid rating was accepted");
}

console.log("Review domain tests passed");
