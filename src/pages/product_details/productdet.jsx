import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Accordion, InputGroup, FormControl, Toast, ToastContainer } from 'react-bootstrap';
import { addToCart } from '../../store/slices/cartSlice';
import { addToFavorites } from '../../store/slices/favoritesSlice';

const Productdet = () => {
  const { id } = useParams();
  const product = useLoaderData();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showCartToast, setShowCartToast] = React.useState(false);
  const [showFavToast, setShowFavToast] = React.useState(false);
  const { t } = useTranslation();

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
    };
    dispatch(addToCart(item));
    setShowCartToast(true);
    setTimeout(() => setShowCartToast(false), 2000);
  };

  const handleAddToFavorites = async () => {
    try {
      // Always fetch the latest product info from API
      const res = await axios.get(`https://dummyjson.com/products/${product.id}`);
      const prod = res.data;
      dispatch(addToFavorites({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        thumbnail: prod.thumbnail,
        ...prod
      }));
    } catch (err) {
      // fallback to minimal info if fetch fails
      dispatch(addToFavorites({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail
      }));
    }
    setShowFavToast(true);
    setTimeout(() => setShowFavToast(false), 2000);
  };

  if (!product) {
    return <p>{t('product.error')}</p>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col sm={12} className="mb-4">
          <Card className="p-0 m-0 border-0">
            <Row>
              {/* Left Column for Image */}
              <Col md={4}>
                <a href="#">
                  <Card.Img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </a>
                <p className="text-muted">{product.description?.substring(0, 300)}</p>
              </Col>

              {/* Right Column for Details */}
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="fs-6">{product.title}</Card.Title>
                  <Card.Text>
                    <p>EGP {product.price}</p>
                    <p>{t('product.stock')}: {product.stock}</p>
                  </Card.Text>
                  <div className="action-buttons my-3 d-flex flex-column flex-md-row gap-3 align-items-start align-items-md-center">
                    <Button
                      variant="dark"
                      className="add-to-basket-btn px-4 py-2 fw-bold rounded-pill shadow-sm border-0"
                      style={{ fontSize: 18, letterSpacing: 0.5, minWidth: 170, transition: 'background 0.18s' }}
                      onClick={handleAddToCart}
                    >
                      <i className="bi bi-bag me-2"></i> {t('product.addToCart')}
                    </Button>
                    <Button
                      variant="light"
                      className="add-to-favourites-btn px-4 py-2 fw-bold rounded-pill shadow-sm border-0"
                      style={{ fontSize: 18, letterSpacing: 0.5, minWidth: 170, color: '#d6002f', border: '2px solid #d6002f', transition: 'background 0.18s, color 0.18s, border 0.18s' }}
                      onClick={handleAddToFavorites}
                      onMouseOver={e => { e.currentTarget.style.background = '#d6002f'; e.currentTarget.style.color = '#fff'; }}
                      onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#d6002f'; }}
                    >
                      <i className="bi bi-heart me-2"></i> {t('product.addToFav')}
                    </Button>
                  </div>
                  {/* Toasts for success messages */}
                  <ToastContainer position="top-end" className="p-3">
                    <Toast show={showCartToast} onClose={() => setShowCartToast(false)} bg="success" delay={2000} autohide>
                      <Toast.Header>
                        <strong className="me-auto">{t('product.added')}</strong>
                      </Toast.Header>
                      <Toast.Body>{t('product.addedToCart')}</Toast.Body>
                    </Toast>
                    <Toast show={showFavToast} onClose={() => setShowFavToast(false)} bg="info" delay={2000} autohide>
                      <Toast.Header>
                        <strong className="me-auto">{t('product.added')}</strong>
                      </Toast.Header>
                      <Toast.Body>{t('product.addedToFav')}</Toast.Body>
                    </Toast>
                  </ToastContainer>

                  {/* Write a review */}
                  <p className="mt-3">
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        navigate(`/review/${product.id}`);
                      }}
                    >
                      {t('product.writeReview')}
                    </a>
                  </p>

                  {/* Accordion for Delivery and Collection */}
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h6>{t('product.deliveryOptions')}</h6>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          {t('product.normalDelivery')} <br />
                          <p>{t('product.normalDeliveryDesc')}</p>
                        </div>
                        <div>
                          {t('product.sameDayDelivery')} <br />
                          <p>{t('product.sameDayDeliveryDesc')}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>{t('product.pickupFromStore')}</Accordion.Header>
                      <Accordion.Body>
                        <Row className="mb-3">
                          <Col className="text-end">
                            <span>{t('product.checkAvailability')}</span>
                          </Col>
                        </Row>
                        <InputGroup>
                          <FormControl placeholder={t('product.enterArea')} />
                          <Button variant="dark">{t('product.searchStores')}</Button>
                        </InputGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>{t('product.reviews')}</Accordion.Header>
                      <Accordion.Body>
                        <div className="d-flex flex-column align-items-center">
                          {product.reviews && product.reviews.length > 0 ? (
                            product.reviews.map((review) => (
                              <Toast key={review.id} bg="light" className="mb-3 border border-dark rounded shadow-sm w-100" style={{ maxWidth: '600px' }}>
                                <Toast.Header closeButton={false} className="bg-dark text-white rounded-top">
                                  <strong className="me-auto">{review.title}</strong>
                                  <small>{t('product.reviewedOn')} {review.date}</small>
                                </Toast.Header>
                                <Toast.Body className="p-3">
                                  <p className="mb-1 text-secondary">{review.description}</p>
                                  <p className="mb-1"><strong>{t('product.name')}:</strong> {review.reviewerName}</p>
                                  <p className="mb-1"><strong>{t('product.comment')}:</strong> {review.comment}</p>
                                  <p className="mb-0"><strong>{t('product.rating')}:</strong> {review.rating}</p>
                                </Toast.Body>
                              </Toast>
                            ))
                          ) : (
                            <p className="text-muted">{t('product.noReviews')}</p>
                          )}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Productdet;

// Loader function for react-router
export const ProductLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products for product:", error.message);
    return null;
  }
};