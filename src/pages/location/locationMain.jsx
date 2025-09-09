import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import "./locationMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMapMarkedAlt,
  faSearch,
  faCrosshairs
} from "@fortawesome/free-solid-svg-icons";

const StoreSearch = () => {
  const [view, setView] = useState("map"); // "map" or "list"
  const { t } = useTranslation();

  return (
    <section className="locationMain">
      <Container fluid>
        <Row>
          <Col>
            <h4><strong>محلاتنا</strong></h4>
            <h4><strong>{t('searchStores')}</strong></h4>
            <hr />
          </Col>
        </Row>
        <Row className="search-bar align-items-center mb-4">
          <Col xs={12} md={2} className="red mb-2 mb-md-0 d-flex align-items-center">
            <FontAwesomeIcon icon={faCrosshairs} className="me-2 red" aria-label="المحلات القريبة مني" />
            <button
              className="btn btn-link p-0 ms-2 location-toggle-link"
              style={{ color: '#111', fontWeight: 700, fontSize: 17, textDecoration: 'none', borderRadius: 8, padding: '4px 10px', transition: 'background 0.18s, color 0.18s' }}
              onMouseOver={e => e.currentTarget.style.color = '#d6002f'}
              onMouseOut={e => e.currentTarget.style.color = '#111'}
            >
              {t('nearbyStores')}
            </button>
          </Col>
          <Col xs={12} md={3} className="mb-2 mb-md-0 d-flex align-items-center">
            <FontAwesomeIcon icon={faSearch} className="me-2" aria-label="بحث" />
            <strong>{t('searchNearestStores')}</strong>
          </Col>
          <Col xs={12} md={4} className="mb-2 mb-md-0 d-flex align-items-center">
            <Form.Control type="text" placeholder="ابحث عن أقرب المحلات إليك" className="me-2" />
            <FontAwesomeIcon icon={faSearch} className="me-2" aria-label={t('search')} />
          </Col>
          <Col xs={12} md={1} className="hover-col mb-2 mb-md-0 d-flex align-items-center">
            {/* Link to show the map */}
            <a 
              href="#show-map" 
              className="btn btn-link p-0 location-toggle-link"
              onClick={() => setView("map")}
              style={{ color: view === 'map' ? '#111' : '#444', fontWeight: view === 'map' ? 700 : 500, fontSize: 17, textDecoration: 'none', transition: 'color 0.2s' }}
            >
              <FontAwesomeIcon icon={faBars} className="me-2" aria-label={t('showMap')} />{t('showMap')}
            </a>
          </Col>
          <Col xs={12} md={2} className="hover-col d-flex align-items-center">
            {/* Link to show the branch list */}
            <a 
              href="#show-list" 
              className="btn btn-link p-0 location-toggle-link"
              onClick={() => setView("list")}
              style={{ color: view === 'list' ? '#111' : '#444', fontWeight: view === 'list' ? 700 : 500, fontSize: 17, textDecoration: 'none', transition: 'color 0.2s' }}
            >
              <FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" aria-label={t('showList')} />{t('showList')}
            </a>
          </Col>
        </Row>
        {view === "map" && (
          <Row className="mb-4">
            <Col xs={12}>
              {/* Google Maps Embed Example */}
              <div style={{ width: "100%", height: "350px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <iframe
                  title="Store Locations Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.014073585857!2d31.33057631511709!3d30.02700798189309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e3e2b2e2e2b%3A0x2e2e2e2e2e2e2e2e!2sCairo%20Festival%20City!5e0!3m2!1sen!2seg!4v1630938471234!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        )}
        {view === "list" && (
          <>
            <hr />
            <p><strong>{t('chooseStoreToView')}</strong></p>
            <Row>
              <Col xs={12} md={5} className="sidebar">
                <ListGroup variant="flush">
                  <ListGroup.Item className="letter-item">
                    <span className="letter-list">ك</span>
                    <a href="#">{t('cairoFestivalCity')}</a>
                  </ListGroup.Item>
                  <ListGroup.Item className="letter-item">
                    <span className="letter-list">م</span>
                    <a href="#">{t('mallOfEgypt')}</a>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={12} md={5} className="sidebar">
                <ListGroup variant="flush">
                  <ListGroup.Item className="letter-item">
                    <span className="letter-list">ا</span>
                    <a href="#">{t('hmOpenAirMadinaty')}</a>
                  </ListGroup.Item>
                  <ListGroup.Item className="letter-item">
                    <span className="letter-list">ب</span>
                    <a href="#">{t('point90Cairo')}</a>
                  </ListGroup.Item>
                  <ListGroup.Item className="letter-item">
                    <span className="letter-list">س</span>
                    <a href="#">{t('cityStarsCairo')}</a>
                    <br />
                    <a href="#">{t('cityCentreAlmaza')}</a>
                    <br />
                    <a href="#">{t('cityCentreAlexandria')}</a>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </section>
  );
}

export default StoreSearch;

