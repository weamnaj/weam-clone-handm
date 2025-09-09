import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import { Link, useNavigate, useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../../../store/slices/userSlice';
import SearchPage from "./searchPage";
import "./headerMenu.css";
import HM from "../../../assets/images-logos/HM.png";
import axios from "axios";

const HeaderMenu = () => {
  const { t, i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const CategoriesLoader = useLoaderData();
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.user.loggedInUser);
  const favoriteItems = useSelector(state => state.favorites.items);
  const cartItems = useSelector(state => state.cart.items);
  const [showFavDropdown, setShowFavDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(window.scrollY > 40);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);

        // Extract unique categories
        const allCategories = response.data.products.map(
          (product) => product.category
        );
        const uniqueCategories = [...new Set(allCategories)];
        console.log('Categories from API:', uniqueCategories);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);


  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setExpanded(false);
    setDropdownOpen(null);
  };

  const handleDropdownToggle = (category) => {
    setDropdownOpen(dropdownOpen === category ? null : category);
  };

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleSearchClick = () => {
    setShowSearchPage(true);
  };

  const handleBackClick = () => {
    setShowSearchPage(false);
  };

  if (showSearchPage) {
    return <SearchPage onBack={handleBackClick} />;
  }

  return (
    <>
      <section
        className={`headerMenu${isSticky ? " sticky-header" : ""}`}
        ref={headerRef}
      >
        {/* Top bar with main links (from HeaderMain) */}
        <div className="header-topbar">
          <Container fluid className="d-flex align-items-center justify-content-end py-1">
            <Nav className="header-topbar-nav flex-row gap-2">
              <Nav.Link onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')} className="main-link">
                {i18n.language === 'en' ? 'العربية' : 'English'}
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/location") } className="main-link">{t('about')}</Nav.Link>
              {loggedInUser ? (
                <>
                  <span className="main-link">{t('hello')}, {loggedInUser.name || loggedInUser.email}</span>
                  <Nav.Link onClick={() => { dispatch(logoutUser()); navigate('/'); }} className="main-link">{t('logout', 'Logout')}</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => navigate("/login") } className="main-link">{t('login')}</Nav.Link>
                  <Nav.Link onClick={() => navigate("/register") } className="main-link">{t('register')}</Nav.Link>
                </>
              )}
            </Nav>
          </Container>
        </div>
        {/* Main navigation bar */}
        <Navbar
          expanded={expanded}
          bg="light"
          expand="lg"
          className="p-0 main-header-navbar"
          aria-label="Main navigation"
        >
          <Container fluid className="header-mainbar-container">
            {/* Left: Search */}
            <div className="header-search-col">
              <Form className="d-flex align-items-center" role="search">
                {/* <FormControl
                  type="search"
                  placeholder="عن ماذا تبحث؟  "
                  className="me-2 form-control shadow-none border-0"
                  aria-label="Search"
                  onChange={(e) => console.log(e.target.value)}
                /> */}
                <button
                  type="button"
                  className="search-btn"
                  aria-label="Open search"
                  onClick={handleSearchClick}
                  tabIndex={0}
                >
                  <FaSearch />
                </button>
              </Form>
            </div>
            {/* Center: Logo */}
            <div className="header-logo-col">
              <Navbar.Brand className="mx-auto">
                <img
                  src={HM}
                  className="logo1"
                  alt="Logo1"
                  style={{ height: "48px" }}
                />
              </Navbar.Brand>
            </div>
            {/* Right: Icons */}
            <div className="header-icons-col d-flex align-items-center justify-content-end gap-3" style={{ position: 'relative' }}>
              {/* Favorites Dropdown */}
              <div
                className="p-0 nav-link header-icon-link position-relative"
                aria-label="Favorites"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setShowFavDropdown(true)}
                onMouseLeave={() => setShowFavDropdown(false)}
                onClick={() => navigate('/fav')}
              >
                <FaHeart size={26} />
                {favoriteItems.length > 0 && (
                  <span style={{ position: 'absolute', top: 0, right: 0, background: 'red', color: 'white', borderRadius: '50%', fontSize: 12, width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{favoriteItems.length}</span>
                )}
                {showFavDropdown && favoriteItems.length > 0 && (
                  <div style={{ position: 'absolute', top: 32, right: 0, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', borderRadius: 8, minWidth: 220, zIndex: 1000 }}>
                    <div style={{ maxHeight: 300, overflowY: 'auto' }}>
                      {favoriteItems.map(item => (
                        <div key={item.id} className="d-flex align-items-center p-2 border-bottom" style={{ cursor: 'pointer' }} onClick={e => { e.stopPropagation(); navigate(`/products/${item.id}`); setShowFavDropdown(false); }}>
                          <img src={item.thumbnail} alt={item.title} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4, marginRight: 8 }} />
                          <span style={{ fontSize: 14, color: '#222' }}>{item.title}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center p-2">
                      <button className="btn btn-link p-0" style={{ fontSize: 13 }} onClick={e => { e.stopPropagation(); navigate('/fav'); setShowFavDropdown(false); }}>View all favorites</button>
                    </div>
                  </div>
                )}
              </div>
              {/* Cart Dropdown */}
              <div
                className="p-0 nav-link header-icon-link position-relative"
                aria-label="Cart"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setShowCartDropdown(true)}
                onMouseLeave={() => setShowCartDropdown(false)}
                onClick={() => navigate('/cart')}
              >
                <FaShoppingBag size={26} />
                {cartItems.length > 0 && (
                  <span style={{ position: 'absolute', top: 0, right: 0, background: 'green', color: 'white', borderRadius: '50%', fontSize: 12, width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartItems.length}</span>
                )}
                {showCartDropdown && cartItems.length > 0 && (
                  <div style={{ position: 'absolute', top: 32, right: 0, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', borderRadius: 8, minWidth: 220, zIndex: 1000 }}>
                    <div style={{ maxHeight: 300, overflowY: 'auto' }}>
                      {cartItems.map(item => (
                        <div key={item.id} className="d-flex align-items-center p-2 border-bottom" style={{ cursor: 'pointer' }} onClick={e => { e.stopPropagation(); navigate(`/products/${item.id}`); setShowCartDropdown(false); }}>
                          <img src={item.thumbnail} alt={item.title} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4, marginRight: 8 }} />
                          <span style={{ fontSize: 14, color: '#222' }}>{item.title}</span>
                          <span style={{ fontSize: 13, color: '#888', marginLeft: 'auto' }}>x{item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center p-2">
                      <button className="btn btn-link p-0" style={{ fontSize: 13 }} onClick={e => { e.stopPropagation(); navigate('/cart'); setShowCartDropdown(false); }}>View cart</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Navbar>
        <Navbar expanded={expanded} bg="light" expand="lg" className="menu-navbar">
          <Container>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleNavbar}
              aria-expanded={expanded}
              aria-label={expanded ? "Close menu" : "Open menu"}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-center w-100 flex-column flex-lg-row">
                {categories.map((category) => (
                  <Nav.Link
                    key={category}
                    onClick={() => navigate(`/${category}`)}
                    className="nav-link-hover"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {activeLink && (
          <div style={{ height: "1000px", backgroundColor: "#f8f9fa" }}></div>
        )}
      </section>
    </>
  );
};

export default HeaderMenu;