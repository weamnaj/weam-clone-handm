
import React, { useState, useEffect } from "react";
import { Toast, ToastContainer, Form, Button } from "react-bootstrap";

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });

  // Load reviews from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(`reviews_${productId}`);
    setReviews(stored ? JSON.parse(stored) : []);
  }, [productId]);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`reviews_${productId}` , JSON.stringify(reviews));
  }, [reviews, productId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title && !form.description) return;
    setReviews([
      ...reviews,
      {
        id: Date.now(),
        title: form.title,
        description: form.description,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setForm({ title: '', description: '' });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-2">
          <Form.Label>عنوان التقييم</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="عنوان التقييم"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>تقييم المنتج</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="تقييم المنتج"
          />
        </Form.Group>
        <Button type="submit" variant="dark">نشر التقييم</Button>
      </Form>
      <ToastContainer>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, idx) => (
            <Toast key={review.id || idx} className="my-2">
              <Toast.Header>
                <strong className="me-auto">{review.title || "بدون عنوان"}</strong>
                <small>{review.date || ""}</small>
              </Toast.Header>
              <Toast.Body>{review.description || "لا يوجد وصف"}</Toast.Body>
            </Toast>
          ))
        ) : (
          <div className="text-center text-muted my-3">لا توجد تقييمات لهذا المنتج.</div>
        )}
      </ToastContainer>
    </>
  );
};

export default ProductReviews;