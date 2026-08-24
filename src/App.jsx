import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import products from "./data/products";
import ProductCard from "./components/ProductCard";
import MobileMenu from "./components/MobileMenu";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclosure from "./pages/Disclosure";

const categories = [
  "Electronics",
  "Home & Kitchen",
  "Fitness",
  "Office",
  "Fashion",
  "Accessories",
];

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const searchText = `
      ${product.name}
      ${product.category}
      ${product.description}
    `.toLowerCase();

    const matchesSearch = searchText.includes(
      search.toLowerCase()
    );

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            SMART PRODUCT PICKS
          </p>

          <h1>
            Discover Products
            <br />
            <span>Worth Buying.</span>
          </h1>

          <p className="hero-description">
            Hand-picked products, useful recommendations
            and deals to help you make smarter buying
            decisions.
          </p>

          <div className="hero-buttons">

            <a
              href="#products"
              className="primary-button"
            >
              Explore Products
            </a>

            <a
              href="#categories"
              className="secondary-button"
            >
              Browse Categories
            </a>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section
        id="categories"
        className="categories"
      >

        <div className="section-heading">

          <p>
            EXPLORE
          </p>

          <h2>
            Popular Categories
          </h2>

          <span>
            Explore products across popular everyday categories.
          </span>

        </div>

        <div className="category-grid">

          <button
            className={
              selectedCategory === "All"
                ? "category-card active"
                : "category-card"
            }
            onClick={() =>
              setSelectedCategory("All")
            }
          >

            <div className="category-icon">
              🛍️
            </div>

            <div>

              <h3>
                All Products
              </h3>

              <p>
                View everything →
              </p>

            </div>

          </button>

          {categories.map((category) => (

            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-card active"
                  : "category-card"
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >

              <div className="category-icon">

                {category === "Electronics" && "⚡"}

                {category === "Home & Kitchen" && "🏠"}

                {category === "Fitness" && "💪"}

                {category === "Office" && "💻"}

                {category === "Fashion" && "🎒"}

                {category === "Accessories" && "✨"}

              </div>

              <div>

                <h3>
                  {category}
                </h3>

                <p>
                  Explore products →
                </p>

              </div>

            </button>

          ))}

        </div>

      </section>

      {/* PRODUCTS */}

      <section
        id="products"
        className="products-section"
      >

        <div className="section-heading">

          <p>
            OUR RECOMMENDATIONS
          </p>

          <h2>
            Top Product Picks
          </h2>

          <span>
            Products we think are worth checking out.
          </span>

        </div>

        <div className="product-search-wrapper">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            className="product-search"
          />

        </div>

        <div className="active-filter">

          <span>
            Showing:
          </span>

          <strong>
            {selectedCategory}
          </strong>

          {search && (
            <span>
              • Search: "{search}"
            </span>
          )}

        </div>

        {filteredProducts.length > 0 ? (

          <div className="product-grid">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div>
              🔎
            </div>

            <h3>
              No products found
            </h3>

            <p>
              Try searching with a different keyword.
            </p>

          </div>

        )}

      </section>

      {/* WHY US */}

      <section
        id="about"
        className="why-section"
      >

        <div className="section-heading">

          <p>
            WHY SMARTPICK HUB?
          </p>

          <h2>
            We Make Finding Products Easier.
          </h2>

          <span>
            Simple, useful and organized product discovery.
          </span>

        </div>

        <div className="features">

          <div className="feature">

            <div className="feature-icon">
              ✓
            </div>

            <h3>
              Curated Picks
            </h3>

            <p>
              We organize useful products so you
              don't have to search everywhere.
            </p>

          </div>

          <div className="feature">

            <div className="feature-icon">
              ★
            </div>

            <h3>
              Useful Research
            </h3>

            <p>
              We focus on product information that can
              help you make a more informed decision.
            </p>

          </div>

          <div className="feature">

            <div className="feature-icon">
              →
            </div>

            <h3>
              Easy Shopping
            </h3>

            <p>
              Find a product you like and visit the
              retailer to learn more or purchase it.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="how-section">

        <div className="section-heading">

          <p>
            HOW IT WORKS
          </p>

          <h2>
            Find Your Next Favorite Product.
          </h2>

          <span>
            A simple way to discover products without
            wasting hours searching.
          </span>

        </div>

        <div className="how-grid">

          <div className="how-card">

            <div className="how-number">
              01
            </div>

            <h3>
              Browse
            </h3>

            <p>
              Explore our categories and discover useful
              products selected for different needs.
            </p>

          </div>

          <div className="how-card">

            <div className="how-number">
              02
            </div>

            <h3>
              Compare
            </h3>

            <p>
              Check product details and available
              information before deciding what works
              best for you.
            </p>

          </div>

          <div className="how-card">

            <div className="how-number">
              03
            </div>

            <h3>
              Shop
            </h3>

            <p>
              When you find something you like, follow
              the product link to the retailer.
            </p>

          </div>

        </div>

      </section>

      {/* TRUST SECTION */}

      <section className="trust-section">

        <div className="trust-content">

          <p className="hero-label">
            SHOP WITH CONFIDENCE
          </p>

          <h2>
            Discover. Compare. Decide.
          </h2>

          <p>
            Our goal is to make product discovery simpler
            by organizing useful recommendations in one
            easy-to-browse place.
          </p>

        </div>

      </section>
    </>
  );
}

function Layout({ children }) {
  return (
    <div className="site">

      {/* HEADER */}

      <header className="header">

        <Link
          to="/"
          className="logo"
        >
          SmartPick <span>Hub</span>
        </Link>

        <nav className="nav">

          <Link to="/">
            Home
          </Link>

          <a href="/#products">
            Products
          </a>

          <a href="/#categories">
            Categories
          </a>

          <Link to="/about">
            About
          </Link>

        </nav>

        <MobileMenu />

      </header>

      {/* PAGE CONTENT */}

      <main>
        {children}
      </main>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <h3>
              SmartPick <span>Hub</span>
            </h3>

            <p>
              Simple product recommendations to help
              you discover things worth buying.
            </p>

          </div>

          <div className="footer-links">

            <h4>
              Quick Links
            </h4>

            <Link to="/">
              Home
            </Link>

            <a href="/#products">
              Products
            </a>

            <a href="/#categories">
              Categories
            </a>

            <Link to="/about">
              About Us
            </Link>

          </div>

          <div className="footer-links">

            <h4>
              Important
            </h4>

            <Link to="/disclosure">
              Affiliate Disclosure
            </Link>

            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

            <Link to="/contact">
              Contact Us
            </Link>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 SmartPick Hub. All rights reserved.
          </p>

          <p>
            Affiliate disclosure available on our website.
          </p>

        </div>

      </footer>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/privacy"
            element={<Privacy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />

          <Route
            path="/disclosure"
            element={<Disclosure />}
          />

        </Routes>

      </Layout>

    </BrowserRouter>
  );
}

export default App;