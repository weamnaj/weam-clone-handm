import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from '../../store/slices/favoritesSlice';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ title, price, imageUrl, id, ...rest }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(item => item.id === id);

  // Compose the product object for favorites
  // Always ensure thumbnail is set for favorites page
  const product = { id, title, price, thumbnail: rest.thumbnail || imageUrl, ...rest };

  const handleFavoriteClick = async (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      try {
        // Fetch full product data from API
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        const prod = res.data;
        // Add to favorites with full product info
        dispatch(addToFavorites({
          id: prod.id,
          title: prod.title,
          price: prod.price,
          thumbnail: prod.thumbnail,
          ...prod
        }));
      } catch (err) {
        // fallback to minimal info if fetch fails
        dispatch(addToFavorites(product));
      }
    }
  };

  return (
    <Card
      className="p-0 m-0 border-0 shadow-sm rounded-0"
      onClick={() => navigate(`/products/${id}`)}
    >
      <div style={{ position: 'relative' }}>
        <a>
          <Card.Img
            style={{ maxHeight: "100%" }}
            variant="top"
            src={imageUrl}
            alt={title}
          />
        </a>
        <FaHeart
          onClick={handleFavoriteClick}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: isFavorite ? 'red' : '#ccc',
            cursor: 'pointer',
            zIndex: 2,
          }}
          size={22}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        />
      </div>
      <Card.Body style={{ height: "7rem" }}>
        <Card.Title className="fw-normal single-line-ellipsis">
          {title}
        </Card.Title>
        <p className="fw-bold">${price}</p>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;