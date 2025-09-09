import React from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Example: Simulate backend authentication (replace with real API in production)
const fakeBackendLogin = async (email, password, users) => {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 500));
  // Find user (simulate backend check)
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (foundUser) {
    // Simulate JWT token
    return { token: "fake-jwt-token", user: { name: foundUser.name, email } };
  }
  throw new Error("Invalid email or password");
};

// Redux actions (replace with your real actions)
const loginUser = (userData) => ({
  type: "user/loginUser",
  payload: userData,
});
const logoutUser = () => ({
  type: "user/logoutUser",
});


const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Simulated users from Redux (replace with real backend)
  const { loggedInUser, users } = useSelector((state) => state.user);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Simulate backend login
      const result = await fakeBackendLogin(email, password, users);
      // Store only non-sensitive info in Redux
  dispatch(loginUser({ name: result.user.name, email: result.user.email, password, token: result.token }));
  navigate("/");
      setError(null);
    } catch (err) {
      setError(t('loginPage.invalidCredentials'));
    }
    setLoading(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  if (loggedInUser) {
    return (
      <div className="text-center">
        <h4>{t('loginPage.hello')}, {loggedInUser.name}!</h4>
        <Button variant="danger" type="button" onClick={handleLogout}>
          {t('loginPage.logout')}
        </Button>
      </div>
    );
  }

  return (
    <section className="loginPage">
      <div className="mb-4">
        <h4 className="text-right">
          <strong>{t('loginPage.title')}</strong>
        </h4>
        <Container fluid className="d-flex ">
          <Row className="w-100 row-style justify-content-center">
            <Col md={6} className="left-div">
              <p>
                <strong>{t('loginPage.emailLogin')}</strong>
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder={t('loginPage.emailPlaceholder')}
                    className="border-top-only form-control shadow-none"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder={t('loginPage.passwordPlaceholder')}
                    className="border-top-only form-control shadow-none"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </Form.Group>
                <br />
                {error && (
                  <Alert variant="danger">
                    {error}
                  </Alert>
                )}
                <Button
                  variant="primary"
                  type="submit"
                  className="btn_style social-media-buttons border-0"
                  disabled={loading}
                >
                  {loading ? t('loginPage.loading') : t('loginPage.loginBtn')}
                </Button>
                <Button
                  variant="link"
                  type="button"
                  className="ps-2"
                  onClick={() => navigate(`/forgetpassword`)}
                >
                  {t('loginPage.forgotPassword')}
                </Button>
              </Form>
            </Col>

            <Col md={6} className="right-div">
              <p>
                <strong>{t('loginPage.socialLogin')}</strong>
              </p>
              <div>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  type="button"
                  aria-label={t('loginPage.facebookBtn')}
                  onClick={() =>
                    window.open("https://www.facebook.com/HM", "_blank")
                  }
                >
                  <FaFacebook size={20} className="me-2" />
                  {t('loginPage.facebookBtn')}
                </Button>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  type="button"
                  aria-label={t('loginPage.googleBtn')}
                  onClick={() =>
                    window.open("https://accounts.google.com", "_blank")
                  }
                >
                  <FaGoogle size={20} className="me-2" />
                  {t('loginPage.googleBtn')}
                </Button>
                <p>{t('loginPage.noAccount')}</p>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  type="button"
                  onClick={() => navigate(`/register`)}
                >
                  {t('loginPage.registerHere')}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default LoginPage;