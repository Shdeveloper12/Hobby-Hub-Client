import React, { useState } from "react";
import { motion } from "framer-motion";

const ReviewCard = ({ review, onEdit, onDelete, isOwn }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState(review.comment);
  const [editedRating, setEditedRating] = useState(review.rating);

  const handleSave = () => {
    onEdit(review._id, {
      ...review,
      comment: editedComment,
      rating: editedRating,
    });
    setEditMode(false);
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="card bg-base-100 shadow-md p-4"
    >
      <h2 className="font-bold primary text-lg">{review.name}</h2>
      <p className="text-yellow-500 mb-2">
        {"★".repeat(review.rating)}
        {"☆".repeat(5 - review.rating)}
      </p>

      {editMode ? (
        <>
          <textarea
            className="textarea w-full mb-2"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <div className="flex items-center mb-2">
            <span className="mr-2">Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-2xl ${
                  star <= editedRating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setEditedRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button className="btn btn-success btn-sm mr-2" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <p className=" secondary mb-2">{review.comment}</p>
      )}

      {isOwn && !editMode && (
        <div>
          <button
            className="btn btn-info btn-xs mr-2"
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
          <button
            className="btn btn-error btn-xs"
            onClick={() => onDelete(review._id)}
          >
            Delete
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ReviewCard;
