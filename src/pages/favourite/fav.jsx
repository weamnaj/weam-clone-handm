
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites, clearFavorites } from '../../store/slices/favoritesSlice';
import { Container, Card, Button, Toast } from 'react-bootstrap';
import '../favourite/fav.css';
import { useTranslation } from 'react-i18next';


function Favorites() {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.items);
  const [showToast, setShowToast] = useState(false);
  const [removedTitle, setRemovedTitle] = useState('');
  const { t } = useTranslation();

  const handleRemove = (id, title) => {
    dispatch(removeFromFavorites(id));
    setRemovedTitle(title);
    setShowToast(true);
  };

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
  };

  return (
    <Container className="favorites-container">
      <h2>{t('fav.title')}</h2>
      <div className="fav-main-row">
        <div className="fav-items-col">
          {favoriteItems.length === 0 ? (
            <p className="favorites-message">{t('fav.empty')}</p>
          ) : (
            favoriteItems.map((item) => (
              <Card key={item.id} className="fav-item-card d-flex flex-row align-items-center p-2">
                <div className="fav-item-image me-3">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="fav-item-details flex-grow-1">
                  <h5>{item.title}</h5>
                  <p>EGP {item.price}</p>
                </div>
                <Button variant="danger" className="ms-auto" onClick={() => handleRemove(item.id, item.title)}>
                  {t('fav.remove')}
                </Button>
              </Card>
            ))
          )}
        </div>
        <div className="fav-summary-col">
          <Button variant="warning" className="clear-cart-btn" onClick={handleClearFavorites}>
            {t('fav.clear', t('cart.clear', 'Clear All'))}
          </Button>
        </div>
      </div>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={2000}
        autohide
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          minWidth: '200px',
          zIndex: 9999,
        }}
      >
        <Toast.Body>{t('fav.removedToast', { title: removedTitle })}</Toast.Body>
      </Toast>
    </Container>
  );
}

export default Favorites;