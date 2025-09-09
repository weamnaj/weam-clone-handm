import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../store/slices/userSlice";
import { useTranslation } from "react-i18next";


const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    navigate("/login");
  };

  return (
    <section className="registerPage">
      <div className=" mb-4">
        <h3 className="text-right">
          <strong>{t('registerPage.title')}</strong>
        </h3>
        <Container fluid className="d-flex ">
          <Row className="w-100 row-style justify-content-center">
            <Col md={6} className="left-div">
              <p>
                <strong>{t('registerPage.emailRegister')}</strong>
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Control
                    className="border-top-only form-control shadow-none"
                    type="text"
                    placeholder={t('registerPage.fullNamePlaceholder')}
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder={t('registerPage.emailPlaceholder')}
                    className="border-top-only form-control shadow-none"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder={t('registerPage.passwordPlaceholder')}
                    className="border-top-only form-control shadow-none"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <br />
                <p>
                  <input type="checkbox" id="rememberMe" name="rememberMe" />
                  {t('registerPage.offersOptIn')}
                </p>
                <p>
                  {t('registerPage.termsAgree')}
                  <a
                    onClick={() => navigate(`/PrivacyPolicy`)}
                    style={{ cursor: "pointer" }}
                  >
                    {t('registerPage.termsLink')}
                  </a>
                </p>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn_style social-media-buttons border-0"
                >
                  {t('registerPage.submitBtn')}
                </Button>
              </Form>
            </Col>

            <Col md={6} className="right-div">
              <p>
                <strong>{t('registerPage.socialRegister')}</strong>
              </p>
              <div>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  onClick={() =>
                    window.open("https://www.facebook.com/HM", "_blank")
                  }
                >
                  <FaFacebook size={20} className="me-2" />
                  {t('registerPage.facebookBtn')}
                </Button>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  onClick={() =>
                    window.open("https://accounts.google.com", "_blank")
                  }
                >
                  <FaGoogle size={20} className="me-2" />
                  {t('registerPage.googleBtn')}
                </Button>
                <p>{t('registerPage.haveAccount')}</p>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  onClick={() => navigate(`/login`)}
                >
                  {t('registerPage.loginHere')}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default RegisterPage;