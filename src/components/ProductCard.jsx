function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-content">
        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-title">
          {product.name}
        </h3>

        <div className="product-rating">
          <span className="stars">
            ★★★★★
          </span>

          <span className="rating-number">
            {product.rating}
          </span>

          <span className="reviews">
            ({product.reviews.toLocaleString()} reviews)
          </span>
        </div>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
          <div className="product-price">
            {product.price}
          </div>

          <a
            href={product.amazonUrl}
            className="amazon-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Price
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;