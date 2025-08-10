
import React from "react";
import portfolioData from "../data/portfolio-data.json";
import { Card, CardContent } from "@/components/ui/card";

const ClientReviews = () => {
  const reviews = portfolioData.clientReviews;
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Client Reviews</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, idx) => (
          <Card key={idx} className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold text-lg text-white">{review.client}</span>
                <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
              </div>
              <div className="text-sm text-zinc-400 mb-2">{review.company}</div>
              <div className="italic mb-4 text-zinc-200">&ldquo;{review.review}&rdquo;</div>
              <div className="text-xs text-zinc-500">Project: {review.project}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
