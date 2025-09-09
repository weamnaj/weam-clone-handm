import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import "./homePageStyle.css";
import image1 from "../home/HomePageImages/image1 (1).jpg";
import image2 from "../home/HomePageImages/image2 (1).jpg";
import image3 from "../home/HomePageImages/image3.jpg";
import image4 from "../home/HomePageImages/image4.0.jpg";
import image41 from "../home/HomePageImages/image4.1.jpg";
import image5 from "../home/HomePageImages/image5.jpg";

// Reusable CampaignSection component
function CampaignSection({
  isMobile,
  desktopImage,
  mobileImage,
  heading,
  caption,
  btnText,
  altText,
  btnHref = "#",
}) {
  const { t } = useTranslation();
  return isMobile ? (
    <div className="campaign-mobile">
      <div className="campaign-hp">
        <a href={btnHref}>
          <img src={mobileImage || desktopImage} alt={altText} />
        </a>
      </div>
      <div className="textbox-mobile">
        <div className="campaign-heading-hp-mobile">
          <a href={btnHref}>{t(heading)}</a>
        </div>
        {caption && (
          <div className="campaign-caption-hp-mobile">
            <a href={btnHref}>{t(caption)}</a>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div>
      <div className="campaign-hp">
        <a href={btnHref}>
          <img src={desktopImage} alt={altText} />
        </a>
      </div>
      <div className="textbox">
        <div className="text">
          <div className="campaign-heading-hp">
            <a href={btnHref}>{t(heading)}</a>
          </div>
          {caption && (
            <div className="campaign-caption-hp pt-2">
              <a href={btnHref}>{t(caption)}</a>
            </div>
          )}
        </div>
        {btnText && (
          <div className="campaign-btn">
            <a href={btnHref}>{t(btnText)}</a>
          </div>
        )}
      </div>
    </div>
  );
}

function HomePage() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="homePage">
        <div className="Root-1">
          <div className="home-content">
            <Row>
              <Col>
                <div className="campaign-container col-lg-10 col-md-12 ">
                  {isMobile ? (
                    <Carousel className="pb-2">
                      <Carousel.Item className="C-Item">
                        <span>{t('freeDelivery')}</span>
                      </Carousel.Item>
                      <Carousel.Item className="C-Item">
                        <span>{t('freeReturn')}</span>
                      </Carousel.Item>
                      <Carousel.Item className="C-Item">
                        <span>{t('shopOnline')}</span>
                      </Carousel.Item>
                    </Carousel>
                  ) : (
                    <div className="d-flex D-SH pb-4">
                      <div>
                        <span>{t('freeDelivery')}</span>
                      </div>
                      <div>
                        <span>{t('freeReturn')}</span>
                      </div>
                      <div>
                        <span>{t('shopOnline')}</span>
                      </div>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="campaign-container col-lg-10 col-md-12 ">
                  <CampaignSection
                    isMobile={isMobile}
                    desktopImage={image1}
                    mobileImage={image2}
                    heading="fallWinterCollection"
                    altText="fallWinterCollection"
                    btnText={!isMobile ? "shopNow" : undefined}
                  />
                </div>
              </Col>
            </Row>
            <Row className="pt-4">
              <Col>
                <div className="campaign-container col-lg-10 col-md-12 ">
                  <CampaignSection
                    isMobile={isMobile}
                    desktopImage={image3}
                    heading="sportyLuxuryCollection"
                    caption="jeansJacketsKnitwear"
                    altText="sportyLuxuryCollection"
                    btnText={!isMobile ? "shopNowF" : undefined}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="pt-4">
                <div className="campaign-container col-lg-10 col-md-12 ">
                  <CampaignSection
                    isMobile={isMobile}
                    desktopImage={image4}
                    mobileImage={image41}
                    heading="simpleLuxuryDesigns"
                    caption="discoverCurrentLooks"
                    altText="simpleLuxuryDesigns"
                    btnText={!isMobile ? "shopNow" : undefined}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="pt-4">
                <div className="campaign-container col-lg-10 col-md-12 ">
                  <CampaignSection
                    isMobile={isMobile}
                    desktopImage={image5}
                    heading="softMaterials"
                    caption="discoverSoftBlankets"
                    altText="softMaterials"
                    btnText={!isMobile ? "shopNow" : undefined}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;