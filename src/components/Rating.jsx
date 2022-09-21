import { FaStar } from "react-icons/fa";
import React from "react";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={25}
              color={
                ratingValue <= (hovered || rating) ? "darkorange" : "lightgrey"
              }
              className="star"
              onMouseEnter={() => setHovered(ratingValue)}
              onMouseLeave={() => setHovered(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

// function Rating(){
//   return(

//   )
// }
export default StarRating;
