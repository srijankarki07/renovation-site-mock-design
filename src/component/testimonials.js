import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = {
    title: "Testimonials",
    subtitle: "See What Our Clients Are Saying!",
    feedbacks: [
      {
        id: 1,
        name: "John Doe",
        review:
          "It was a great experience having my house renovated. The team was very professional and knowledgeable. I highly recommend them for any renovation project.",
        rating: "⭐⭐⭐⭐⭐",
      },
      {
        id: 2,
        name: "Jane Doe",
        review:
          "Renovation was a great choice for my renovation project. They were very efficient and delivered on time. I would definitely use them again in the future.",
        rating: "⭐⭐⭐⭐",
      },
      {
        id: 3,
        name: "Bob Smith",
        review:
          "Renovation was a great choice for my renovation project. They were very efficient and delivered on time. I would definitely use them again in the future.",
        rating: "⭐⭐⭐⭐⭐",
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.feedbacks.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.feedbacks.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonial-header">
        <h1>{testimonials.title}</h1>
        <p>{testimonials.subtitle}</p>
      </div>

      <div className="testimonial-container">
        <div className="feedback">
          <h2>{testimonials.feedbacks[currentIndex].name}</h2>
          <p>{testimonials.feedbacks[currentIndex].review}</p>
          <p>{testimonials.feedbacks[currentIndex].rating}</p>
        </div>
      </div>

      <div className="testimonial-controls">
        <button onClick={handlePrev} className="prev-btn">
          &#10094;
        </button>
        <button onClick={handleNext} className="next-btn">
          &#10095;
        </button>
      </div>

      <div className="dots-container">
        {testimonials.feedbacks.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
