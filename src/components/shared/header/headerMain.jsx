import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./headerMain.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

const HeaderMain = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  // Sticky effect
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(window.scrollY > 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (cb) => {
    setExpanded(false);
    cb && cb();
  };

  return (
    <section
      className={`headerMain${isSticky ? " sticky-header-main" : ""}`}
      ref={headerRef}
    >
      <Navbar
        bg="light"
        expand="lg"
        className="custom-navbar align-navbar"
        expanded={expanded}
      >
        <Container fluid className="d-flex align-items-center justify-content-between">
          <Navbar.Toggle
            aria-controls="main-navbar-nav"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-label={expanded ? "Close menu" : "Open menu"}
          />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto justify-content-center w-100 flex-column flex-lg-row">
              <Nav.Link href="#english" className="main-link" onClick={() => handleNavClick()}>english</Nav.Link>
              <Nav.Link
                onClick={() => handleNavClick(() => navigate("/location"))}
                href="#search-location"
                className="main-link"
              >
                البحث عن محلاتنا
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick(() => navigate("/login"))} href="#login" className="main-link">
                تسجيل دخول
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick(() => navigate("/register"))} href="#register" className="main-link">
                تسجيل مستخدم جديد
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default HeaderMain;