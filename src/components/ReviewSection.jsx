import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ReviewCard from "./ReviewCard";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const ReviewSection = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: user?.displayName || "Anonymous",
      email: user?.email,
      comment,
      rating,
      createdAt: new Date().toISOString(),
    };

    fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then(() => {
        setComment("");
        setRating(5);
        fetch(`${import.meta.env.VITE_API_URL}/reviews`)
          .then((res) => res.json())
          .then((data) => setReviews(data));
      });
  };

  const handleEdit = (id, updatedReview) => {
    fetch(`${import.meta.env.VITE_API_URL}/reviews/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then(() => {
        fetch(`${import.meta.env.VITE_API_URL}/reviews`)
          .then((res) => res.json())
          .then((data) => setReviews(data));
        Swal.fire({
          icon: "success",
          title: "Review updated!",
        });
      });
  };

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setReviews(reviews.filter((r) => r._id !== id));
      });
  };

  const userReview = reviews.find((review) => review.email === user?.email);

  return (
    <div className="my-12">
      <h1 className="text-2xl font-bold text-center my-8 primary">
        User Reviews
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 mb-8 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[...reviews]
          .sort(
            (a, b) =>
              new Date(b.createdAt || b._id) - new Date(a.createdAt || a._id)
          )
          .slice(0, 3)
          .map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              onEdit={handleEdit}
              onDelete={handleDelete}
              isOwn={user?.email === review.email}
            />
          ))}
      </motion.div>

      {!userReview && (
        <form onSubmit={handleSubmit} className="mb-8 max-w-xl mx-auto">
          <textarea
            className="textarea w-full mb-2"
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <div className="flex items-center mb-2">
            <span className="mr-2">Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-2xl ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
                role="button"
              >
                ★
              </span>
            ))}
          </div>
          <button className="btn btn-primary" type="submit">
            Submit Review
          </button>
        </form>
      )}

      {userReview && (
        <div className="text-center text-gray-500">
          You have already submitted a review. Thank you!
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
