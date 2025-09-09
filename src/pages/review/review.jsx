import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './review.css'; // Assuming you have a CSS file for custom styles
import 'bootstrap-icons/font/bootstrap-icons.css'; // For icons if needed
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For Bootstrap JS functionality
const Review = () => {
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    userName: '',
    userEmail: ''
  });
  const navigate = useNavigate();

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
        userName: form.userName,
        userEmail: form.userEmail,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setForm({ title: '', description: '', userName: '', userEmail: '' });
    setTimeout(() => navigate(`/products/${productId}`), 500); // Redirect after short delay
  };

  return (
    <Container className="my-4">
      {/* Review Title and Content */}
      <Row>
        <Col>
          <h5>التقييم</h5>
          <hr />
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
            <Form.Group className="mb-2">
              <Form.Label>اسم المستخدم</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="اسم المستخدم"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>البريد الإلكتروني</Form.Label>
              <Form.Control
                type="email"
                name="userEmail"
                value={form.userEmail}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
              />
            </Form.Group>
            <Button type="submit" variant="dark">نشر التقييم</Button>
          </Form>
      {/* Show reviews for this product */}
      <Row>
        <Col>
          <h5>التقييمات السابقة</h5>
          <hr />
          {reviews && reviews.length > 0 ? (
            reviews.map((review, idx) => (
              <div key={review.id || idx} className="mb-3 p-3 border rounded bg-light">
                <strong>{review.title || "بدون عنوان"}</strong>
                <div className="text-muted small">{review.date || ""}</div>
                <div>{review.description || "لا يوجد وصف"}</div>
                <div><b>المستخدم:</b> {review.userName || "غير معروف"}</div>
                <div><b>البريد الإلكتروني:</b> {review.userEmail || "غير متوفر"}</div>
              </div>
            ))
          ) : (
            <div className="text-center text-muted my-3">لا توجد تقييمات لهذا المنتج.</div>
          )}
        </Col>
      </Row>
        </Col>
      </Row>

      {/* User Information Section */}
      <Row>
        <Col>
          <h5>معلومات المستخدم الأساسية</h5>
          <hr />
          <Form>
            <Form.Group as={Row} controlId="formUserName">
              <Form.Label column sm={3}>اسم المستخدم *</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="أدخل الاسم" />
                <br />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formEmail">
              <Form.Label column sm={3}>البريد الإلكتروني *</Form.Label>
              <Col sm={9}>
                <Form.Control type="email" placeholder="أدخل البريد الإلكتروني" />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {/* Product Section */}
      <Row className="mt-4">
        <Col>
          <h5>المنتج</h5>
          <hr />
          <Form.Group as={Row}>
            <Form.Label column sm={3}>مقاس فعلي:</Form.Label>
            <Col sm={9}>
              <Form.Range />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>الطول:</Form.Label>
            <Col sm={9}>
              <Form.Range />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>العرض:</Form.Label>
            <Col sm={9}>
              <Form.Range />
            </Col>
          </Form.Group>
        </Col>
      </Row>

      {/* User Preferences Section */}
      <Row className="mt-4">
        <Col>
          <h5>المستخدم</h5>
          <hr />
          <Form.Group as={Row} controlId="formHeight">
            <Form.Label column sm={3}>الطول</Form.Label>
            <Col sm={9}>
              <Form.Select>
                <option>اختر...</option>
                <option>قصير</option>
                <option>متوسط</option>
                <option>طويل</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formSkinType">
            <Form.Label column sm={3}>نوع البشرة</Form.Label>
            <Col sm={9}>
              <Form.Select>
                <option>اختر...</option>
                <option>دهنية</option>
                <option>جافة</option>
                <option>مختلطة</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formSkinTone">
            <Form.Label column sm={3}>درجة لون البشرة</Form.Label>
            <Col sm={9}>
              <Form.Select>
                <option>اختر...</option>
                <option>فاتح</option>
                <option>متوسط</option>
                <option>غامق</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
      </Row>

      {/* Submit Button Section */}
      <Row className="mt-4">
        <Col>
          <Button variant="dark" type="submit" className="me-2">نشر التقييم</Button>
          <Button variant="outline-dark" type="button">إلغاء</Button>
        </Col>
      </Row>

      {/* Terms and Conditions Section */}
      <Row className="mt-4">
        <Col>
          <p>
            <a href="#">الشروط والأحكام | إرشادات المراجعة</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Review;