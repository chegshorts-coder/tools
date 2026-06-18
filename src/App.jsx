import { useState } from "react";
import products from "./products";

function ProductImage({ product }) {
  const [hasError, setHasError] = useState(false);

  if (!product.image || hasError) {
    return (
      <div className="product-image product-image-placeholder">
        <span>Product image</span>
      </div>
    );
  }

  return (
    <div className="product-image">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <a
      className="product-card"
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${product.name} on Amazon`}
    >
      <ProductImage product={product} />
      <div className="product-content">
        <h2>{product.name}</h2>
        <span className="product-cta">View on Amazon</span>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <main className="page-shell">
      <header className="hero">
        <p className="brand">Cheg</p>
        <h1>Cheg's Barber Picks</h1>
        <p className="subtitle">Tools I'd actually recommend.</p>
        <p className="handle">@chegthebarberr</p>
        <p className="disclosure">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </header>

      <section className="products-section" id="products" aria-label="Product list">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          Some links are affiliate links. I may earn a commission at no extra
          cost to you.
        </p>
        <p>Cheg &copy; 2026</p>
      </footer>

      <a className="sticky-picks" href="#products">
        View My Top Picks
      </a>
    </main>
  );
}