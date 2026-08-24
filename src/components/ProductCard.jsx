function ProductCard({ product }) {
  const stars = "★".repeat(product.rating);
  const emptyStars = "☆".repeat(5 - product.rating);

  return (
    <article className="product-card">

      <div className="product-image">

        <span className="discount">
          {product.discount}
        </span>

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src =
              "https://placehold.co/800x700/f3f4f6/111827?text=Product+Image";
          }}
        />

      </div>

      <div className="product-content">

        <small className="category-name">
          {product.category}
        </small>

        <div className="rating">

          <span>
            {stars}
            {emptyStars}
          </span>

          <small>
            {product.reviews.toLocaleString()} reviews
          </small>

        </div>

        <h3>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        <div className="price-row">

          <div>

            <strong>
              {product.price}
            </strong>

            <del>
              {product.oldPrice}
            </del>

          </div>

        </div>

        <a
          href={product.affiliateUrl || "#"}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="amazon-button"
        >
          View Product

          <span>
            ↗
          </span>

        </a>

      </div>

    </article>
  );
}

export default ProductCard;