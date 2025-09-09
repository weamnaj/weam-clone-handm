import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductCard from "../../components/ui/card";
import "./AllProducts.css";
export default function AllProducts() {
  const [categoriesWithBrands, setCategoriesWithBrands] = useState({});
  const productsByCategory = useLoaderData(); // Get products for selected category from the loader
  const navigate = useNavigate();
  const { category } = useParams(); // Get the category from URL
  const { t } = useTranslation();
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const categoriesBrandsMap = {};

        response.data.products.forEach((product) => {
          const { category, brand } = product;

          if (!categoriesBrandsMap[category]) {
            categoriesBrandsMap[category] = {};
          }

          if (!categoriesBrandsMap[category][brand]) {
            categoriesBrandsMap[category][brand] = [];
          }

          categoriesBrandsMap[category][brand].push(product);
        });

        setCategoriesWithBrands(categoriesBrandsMap);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  // Filter products by selected brand if any
  const filteredProducts = selectedBrand
    ? productsByCategory.filter((product) => product.brand === selectedBrand)
    : productsByCategory;

  // Reset selectedBrand when category changes
  useEffect(() => {
    setSelectedBrand(null);
  }, [category]);

  return (
    <>
      <section className="all-products py-5 px-4">
        <Container className="m-0 p-0">
          <Row>
            <Col md="3" className="d-none d-lg-block">
              {Object.keys(categoriesWithBrands).map((cat, index) => (
                <Row key={index} className="mb-5">
                  <h5
                    className="fw-bold"
                    onClick={() => navigate(`/${cat}`)} // Navigate to the selected category
                  >
                    {t(`allProducts.category.${cat}`, cat.charAt(0).toUpperCase() + cat.slice(1))}
                  </h5>
                  {Object.keys(categoriesWithBrands[cat]).map(
                    (brand, brandIndex) => (
                      <div key={brandIndex}>
                        <p className="fw-bold text-muted p-0 my-1">
                          <a
                            href="#"
                            className={`text-decoration-none text-muted ${selectedBrand === brand ? "fw-bold text-dark" : ""}`}
                            onClick={e => {
                              e.preventDefault();
                              if (cat === category) {
                                setSelectedBrand(brand);
                              } else {
                                navigate(`/${cat}`);
                                setSelectedBrand(brand);
                              }
                            }}
                          >
                            {!brand || brand === "undefined"
                              ? t("allProducts.noBrand", "No brand")
                              : t(`allProducts.brand.${brand}`, brand)}
                          </a>
                        </p>
                      </div>
                    )
                  )}
                </Row>
              ))}
            </Col>
            <Col lg="9">
              {/* Display products for the selected category and brand */}
              <h4>
                {category &&
                  t(`allProducts.category.${category}`, category.charAt(0).toUpperCase() + category.slice(1))}
                {selectedBrand && (
                  <span> &gt; {t(`allProducts.brand.${selectedBrand}`, selectedBrand)}</span>
                )}
              </h4>
              <Row>
                {filteredProducts.map((product) => (
                  <Col
                    key={product.id}
                    xs="6"
                    sm="4"
                    md="3"
                    className="mb-4 text-center"
                  >
                    <ProductCard
                      id={product.id}
                      key={product.id}
                      title={t(`allProducts.productTitle.${product.title}`, product.title)}
                      price={product.price}
                      imageUrl={product.thumbnail}
                      link={product.link}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
// ...existing code...
}

export const CategoriesLoader = async ({ params }) => {
  const { category } = params; // Get the category from the route params

  try {
    // Fetch products for the selected category
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return response.data.products; // Return products for the loader
  } catch (error) {
    console.error("Error fetching products for category:", error.message);
    return [];
  }
};