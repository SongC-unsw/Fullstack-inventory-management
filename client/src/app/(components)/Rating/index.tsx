import { Star } from "lucide-react";
import React from "react";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  return [1, 2, 3, 4, 5].map((index) => (
    <Star
      key={index}
      color={index <= rating ? "#F59E0B" : "gray"}
      className="w-4 h-4"
    />
  ));
  // repeat 5 times inside components
};

export default Rating;
