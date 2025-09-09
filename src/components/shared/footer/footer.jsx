import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.css";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa";
import footerImage from "../../../assets/footerImages/h-m-logo-bw.svg";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [activeKey, setActiveKey] = useState(null);

  // Toggle the active state
  const handleToggle = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <>
      <footer className="px-2 py-4">
        <div className="text-center d-flex d-md-none justify-content-center lang mb-3">
          <span className="px-2 active">العربية</span>
          <span className="px-2 non-active">ENGLISH</span>
        </div>
        <Row className="m-0">
          <Col md="4" lg="6" className="d-none d-md-block">
            <Row className="pe-sm-4 pe-md-5">
              <Col xs="12" lg="7" className="about text-lg-center mb-3 mb-lg-0">
                <div className="d-inline-block links text-lg-end">
                  <h6>{t('aboutHm')}</h6>
                  <a
                    onClick={() => navigate("/AboutUs")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {t('AboutUs')}
                  </a>
                  <a
                    onClick={() => navigate("/DeliveryInformation")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {t('deliveryInfo')}
                  </a>
                  <a
                    onClick={() => navigate("/PurchaseTerms")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {t('purchaseTerms')} {" "}
                  </a>
                  <a
                    onClick={() => navigate("/Terms")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                     {t('siteTerms')}
                  </a>
                  <a
                    onClick={() => navigate("/PrivacyPolicy")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                     {t('privacyPolicy')} 
                  </a>
                  <a
                    onClick={() => navigate("/ReturnExchange")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                     {t('returns')} 
                  </a>
                  <a
                    onClick={() => navigate("/Sustainability")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                     {t('sustainability')} 
                  </a>
                </div>
              </Col>
              <Col xs="12" lg="5" className="services d-inline-block">
                <div className="links">
                  <h6> {t('customerService')} </h6>
                  <a
                    onClick={() => navigate("/Questions")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                     {t('faq')} 
                  </a>
                  <a
                    onClick={() => navigate("/ContactUs")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                     {t('contactUs')} 
                  </a>
                  <a
                    // onClick={() => navigate("/")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                     {t('whatsapp')} 
                  </a>
                  <a
                    onClick={() => navigate("/WebsiteMap")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                      {t('siteMap')}
                  </a>
                  <a
                    onClick={() => navigate("/location")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                      {t('stores')}
                  </a>
                  <a
                    onClick={() => navigate("/Lighting")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                     {t('lighting')} 
                  </a>
                  <a
                    onClick={() => navigate("/WeeklyGiftCardsPage")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                     {t('giftCard')} 
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="d-md-none p-0">
            <Accordion activeKey={activeKey}>
              {/* First Accordion Item */}
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  className="w-100"
                  onClick={() => handleToggle("0")}
                >
                  <span> حول اتش آند ام</span>
                  <span className="icon">
                    {activeKey === "0" ? <FaMinus /> : <FaPlus />}
                  </span>
                </Accordion.Header>
                <Accordion.Body className="py-0">
                  <div className="d-inline-block links text-lg-end">
                    <a
                      onClick={() => navigate("/AboutUs")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('connectWithUs')} 
                    </a>
                    <a
                      onClick={() => navigate("/DeliveryInformation")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('connectWithUs')} 
                    </a>
                    <a
                      onClick={() => navigate("/PurchaseTerms")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('purchaseTerms')} 
                    </a>
                    <a
                      onClick={() => navigate("/Terms")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('purchaseTerms')} 
                    </a>
                    <a
                      onClick={() => navigate("/PrivacyPolicy")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('privacyPolicy')} 
                    </a>
                    <a
                      onClick={() => navigate("/ReturnExchange")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('purchaseTerms')} 
                    </a>
                    <a
                      onClick={() => navigate("/Sustainability")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('purchaseTerms')} 
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              {/* Second Accordion Item */}
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => handleToggle("1")}>
                  <span>  {t('purchaseTerms')} </span>
                  <span className="icon">
                    {activeKey === "1" ? <FaMinus /> : <FaPlus />}
                  </span>
                </Accordion.Header>
                <Accordion.Body className="py-0">
                  <div className="links d-inline-block text-lg-end">
                    <a
                      onClick={() => navigate("/Questions")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('purchaseTerms')} 
                    </a>
                    <a
                      onClick={() => navigate("/ContactUs")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('purchaseTerms')} 
                    </a>
                    <a
                      onClick={() => navigate("/")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('purchaseTerms')} 
                    </a>
                    <a
                      // onClick={() => navigate("/")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('purchaseTerms')} 
                    </a>
                    <a
                      onClick={() => navigate("/location")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                                             {t('purchaseTerms')} 

                    </a>
                    <a
                      onClick={() => navigate("/Lighting")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                       {t('purchaseTerms')} 
                    </a>
                    <a
                      onClick={() => navigate("/WeeklyGiftCardsPage")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                                           {t('purchaseTerms')} 

                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col
            md="5"
            lg="6"
            className="px-md-0 px-lg-5 text-md-start mt-5 mt-md-0"
          >
            <div className="contact-us d-inline-block text-end px-2 px-md-0">
              <h6> {t('contactUs')} </h6>
              <div className="text">
              {t('newsletterText')} 
              </div>

              <form className="mt-3 border-dark border-bottom border-1 d-inline-block w-100 d-flex justify-content-between">
                <input
                  type="text"
                  className="input border-0 py-2 w-100"
                  placeholder=            {t('emailPlaceholder')} 
 
                />
                <button
                  id="basic-addon1"
                  className="btn rounded-0 d-inline-block p-0 fw-bolder"
                >
                  {t('subscribe')}
                </button>
              </form>

              <div className="d-flex d-none d-md-block d-lg-none justify-content-center lang mt-4">
                <span className="active px-2">العربية</span>
                <span className="px-2 non-active">ENGLISH</span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="center text-center">
          <div className="head">
            <p className="head p-1 m-0">                  {t('customerSupport')}
</p>
            <p className="p-1 m-0">{t('egyptNumber')} </p>
            <p className="p-1 m-0">
{t('workingHours')}            </p>
            <img
              src={footerImage}
              className="mt-2"
              style={{ width: "200px" }}
              alt="Footer Logo"
            />
          </div>
          <div className="icons mt-4 fs-5">
            <a
              href="https://www.facebook.com/hm/?brand_redir=2024714534446110"
              className="fs-5 mx-2"
            >
              <IoLogoFacebook className="mx-2" />
            </a>
            <a href="https://www.instagram.com/hm/" className="fs-5 mx-2">
              <IoLogoInstagram className="mx-2" />
            </a>
            <a href="https://x.com/hmegypt" className="fs-5 mx-2">
              <FaXTwitter className="mx-2" />
            </a>
          </div>
          <Row className="justify-content-center m-0">
            <Col md="8" lg="5" className="mt-4 last">
              <p>{t('hmDescription')}  
              </p>
              <p>
                <a href="#" className="text-decoration-none ">
                  {t('egypt')}  
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
