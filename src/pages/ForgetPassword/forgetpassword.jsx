import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './forgetpassword.css';

const ForgotPassword = () => {
  return (
    <section className="forgetPassword">
      <div className="mb-4">
        <h4 className="text-right">
          <strong>نسيت كلمة المرور؟</strong>
        </h4>
        <Container fluid className="d-flex container-style">
          <Row className="w-100 row-style justify-content-center">
            <Col md={6}>
              <p>
                <strong>
                  أدخل عنوان بريدك الإلكتروني سنرسل لك رابط إعادة تعيين كلمة
                  المرور
                </strong>
              </p>

              <form className="mt-3 border-dark border-bottom border-1 d-inline-block w-100 d-flex justify-content-between">
                <input
                  type="text"
                  className="input border-0 py-2 w-100"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <button
                  id="basic-addon1"
                  className="btn rounded-0 d-inline-block p-0 fw-bolder"
                >
                  ارسال
                </button>
              </form>
             
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ForgotPassword;