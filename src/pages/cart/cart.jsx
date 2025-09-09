import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/slices/cartSlice';
import { Card, Button, Container } from 'react-bootstrap';
import './cart.css';
import { saveAs } from 'file-saver';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    if (cart.items.length === 0) {
      alert(t('cart.emptyAlert'));
      return;
    }

    let receiptContent = `${t('cart.receiptTitle')}\n\n${t('cart.items')}\n`;
    cart.items.forEach((item) => {
      receiptContent += `${item.title} - EGP ${item.price} x ${item.quantity} = EGP ${item.price * item.quantity}\n`;
    });
    receiptContent += `\n${t('cart.total')}: EGP ${cart.totalPrice}\n${t('cart.thankYou')}`;

    const blob = new Blob([receiptContent], { type: 'text/plain;charset=utf-8' });
    try {
      saveAs(blob, 'receipt.txt');
      alert(t('cart.checkoutSuccess'));
      handleClearCart();
    } catch (error) {
      alert(t('cart.checkoutError'));
    }
  };

  return (
    <Container className="cart-container">
      <h2>{t('cart.title')}</h2>
      {cart.items.length === 0 ? (
        <p>{t('cart.empty')}</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <Card key={item.id} className="mb-3 cart-item-card">
              <Card.Body className="d-flex align-items-center">
                <div className="cart-item-image">
                  <img src={item.thumbnail} alt={item.title} style={{ width: '100px', height: 'auto' }} />
                </div>
                <div className="cart-item-details ms-3">
                  <h5>{item.title}</h5>
                  <p>{t('cart.price')} {item.price} x {item.quantity}</p>
                </div>
                <Button variant="danger" className="ms-auto" onClick={() => handleRemove(item.id)}>
                  {t('cart.remove')}
                </Button>
              </Card.Body>
            </Card>
          ))}
          <h3 className="total-price">{t('cart.total')}: EGP {cart.totalPrice}</h3>
          <Button variant="warning" className="clear-cart-btn" onClick={handleClearCart}>
            {t('cart.clear')}
          </Button>
          <Button variant="success" className="checkout-btn" onClick={handleCheckout}>
            {t('cart.checkout')}
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;