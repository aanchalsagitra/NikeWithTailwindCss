// import React from 'react'
import { reviews } from "../Constants";
import Review from "../BaseComponents/Review";
const CustomerReviews = () => {
  return (
    <section
      id="customer-reviews"
      className="flex flex-col justify-center items-center"
    >
      <div className="mt-10">
        <h2 className="text-bold text-4xl text-center">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="m-auto mt-4 max-w-lg  text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <Review key={review.feedback} {...review}></Review>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
