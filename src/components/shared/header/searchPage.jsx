

import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, Container, Row, Col, Card, Spinner, InputGroup } from 'react-bootstrap';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchPage = ({ onBack }) => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
    setTimeout(() => inputRef.current && inputRef.current.focus(), 200);
  }, []);

  const highlight = (text, q) => {
    if (!q) return text;
    const parts = text.split(new RegExp(`(${q})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? <mark key={i}>{part}</mark> : part
    );
  };

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.description?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }} className="w-100 d-flex flex-column align-items-center justify-content-start">
      <div className="w-100 d-flex justify-content-between align-items-center p-3 bg-white shadow-sm" style={{ maxWidth: 700 }}>
        <Button variant="link" onClick={onBack} className="p-0">
          <FaArrowLeft size={22} />
        </Button>
        <h4 className="m-0">البحث</h4>
        <Button variant="link" onClick={onBack} className="p-0">
          <FaTimes size={22} />
        </Button>
      </div>
      <div className="w-100 d-flex justify-content-center" style={{ background: '#f8f9fa' }}>
        <Form className="my-4 w-100" style={{ maxWidth: 700 }} autoComplete="off">
          <InputGroup>
            <Form.Control
              ref={inputRef}
              type="search"
              placeholder="ماذا تبحث؟"
              aria-label="Search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              style={{ fontSize: 18, borderRadius: 20, boxShadow: focused ? '0 0 0 2px #222' : undefined }}
            />
          </InputGroup>
        </Form>
      </div>
      {loading ? (
        <Spinner animation="border" className="mt-4" />
      ) : (
        <div className="w-100 d-flex justify-content-center">
          <div style={{ maxWidth: 700, width: '100%' }}>
            {query && filtered.length === 0 && (
              <div className="text-center text-muted py-5">لا توجد نتائج.</div>
            )}
            <div style={{ maxHeight: 400, overflowY: 'auto', marginTop: 10 }}>
              <Row className="g-3">
                {filtered.map(product => (
                  <Col key={product.id} xs={12} md={6}>
                    <Card
                      className="h-100 shadow-sm border-0 search-result-card"
                      style={{ cursor: 'pointer', transition: 'transform 0.1s', borderRadius: 16 }}
                      onClick={() => navigate(`/products/${product.id}`)}
                      onMouseDown={e => e.preventDefault()}
                    >
                      <div style={{ position: 'relative', height: 180, overflow: 'hidden', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                        <Card.Img
                          variant="top"
                          src={product.thumbnail}
                          alt={product.title}
                          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title style={{ fontSize: 18 }}>{highlight(product.title, query)}</Card.Title>
                        <Card.Text style={{ fontSize: 14, color: '#555' }}>
                          {highlight(product.description?.substring(0, 60) || '', query)}...
                        </Card.Text>
                        <Card.Text className="fw-bold">EGP {product.price}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;