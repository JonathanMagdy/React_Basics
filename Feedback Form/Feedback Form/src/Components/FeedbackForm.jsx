import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 0
  });

  const [hoverRating, setHoverRating] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const confirmationMessage = `
Name: ${formData.name}
Email: ${formData.email}
Feedback: ${formData.feedback}
Rating: ${formData.rating} stars
    `;

    const isConfirmed = window.confirm(
      `Please confirm your details:\n${confirmationMessage}`
    );

    if (isConfirmed) {
      console.log('Submitting feedback:', formData);

      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: 0
      });

      alert('Thank you for your valuable feedback!');
    }
  };

  return (
    <>
      <nav>Tell Us What You Think</nav>

      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        />

        {/* ⭐ Star Rating with Hover */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span>Rate Us:</span>

          <div style={{ display: 'flex', gap: '5px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() =>{
                  setFormData({
                    ...formData,
                    rating: star
                  }),
                  setHoverRating(0);
                }}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                style={{
                  fontSize: '28px',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease, transform 0.2s ease',
                  transform:
                    star <= (hoverRating || formData.rating)
                      ? 'scale(1.1)'
                      : 'scale(1)',
                  color:
                    star <= (hoverRating || formData.rating)
                      ? '#FFD700'
                      : '#ccc'
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <br/>

        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
