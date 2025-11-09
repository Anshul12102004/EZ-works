import React, { useState } from 'react';
import './ContactPage.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else {
      // basic email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Enter a valid email';
      }
    }

    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    }

    // phone is optional — if provided, ensure it's reasonable (digits, 7-15 chars)
    if (formData.phone.trim()) {
      const phoneNormalized = formData.phone.replace(/\D/g, '');
      if (phoneNormalized.length < 7 || phoneNormalized.length > 15) {
        errs.phone = 'Enter a valid phone number';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    // clear individual error as user types
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setSubmitError('');

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim()
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        // expected 200 with created object according to your example
        setSuccessMessage('Form Submitted');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        // show server error (if any) or generic message
        const serverMsg = data?.message || data?.detail || 'Failed to submit form';
        setSubmitError(serverMsg);
      }
    } catch (err) {
      setSubmitError('Network error — please try again.');
      console.error('Contact submit error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="content">
        <div className="left-section">
          <div className="decorative-left" />
          <div className="text-content">
            <p className="des">
              Whether you have an idea, a question, or simply want
              to explore how V can work together, V're just one
              message away.
            </p>
            <p className="des">Let's catch up over coffee.</p>
            <p className="des">Great stories always begin with a good conversation</p>
          </div>
        </div>

        <div className="right-section">
          <div className="decorative-right" />
          <div className="form-container">
            <h1 className="form-title">Join the Story</h1>
            <p className="form-subtitle">Ready to bring your vision to life? Let's talk</p>

            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="name"
                placeholder="Your name*"
                value={formData.name}
                onChange={handleChange}
                required
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                aria-invalid={!!errors.name}
                aria-describedby="error-name"
              />
              {errors.name && (
                <div className="field-error" id="error-name">
                  {errors.name}
                </div>
              )}

              <input
                type="email"
                name="email"
                placeholder="Your email*"
                value={formData.email}
                onChange={handleChange}
                required
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                aria-invalid={!!errors.email}
                aria-describedby="error-email"
              />
              {errors.email && (
                <div className="field-error" id="error-email">
                  {errors.email}
                </div>
              )}

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className={`form-input ${errors.phone ? 'input-error' : ''}`}
                aria-invalid={!!errors.phone}
                aria-describedby="error-phone"
              />
              {errors.phone && (
                <div className="field-error" id="error-phone">
                  {errors.phone}
                </div>
              )}

              <textarea
                name="message"
                placeholder="Your message*"
                value={formData.message}
                onChange={handleChange}
                required
                className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                rows="5"
                aria-invalid={!!errors.message}
                aria-describedby="error-message"
              />
              {errors.message && (
                <div className="field-error" id="error-message">
                  {errors.message}
                </div>
              )}

              <div className="btn">
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>

            {successMessage && <div className="success-text">{successMessage}</div>}
            {submitError && <div className="submit-error">{submitError}</div>}

            <div className="contact-info">
              <a href="mailto:vernita@varnanfilms.co.in" className="contact-link">
                vernita@varnanfilms.co.in
              </a>
              <span className="separator">|</span>
              <a href="tel:+919873684567" className="contact-link">
                +91 98736 84567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
