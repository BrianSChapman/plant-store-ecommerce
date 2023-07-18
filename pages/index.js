import Link from "next/link";

export default function Home({ allProducts }) {
  return (
    <div className="container">
      <h2 className="title">All Products 🌿</h2>
      <div className="products-container">
        {allProducts.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <Link href={`products/${product.slug}`}>
                <div className="product-img">
                  <img src={product.image.url} alt={product.name} />
                </div>
              </Link>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button
                  className="btn snipcart-add-item"
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-url={`products/${product.slug}`}
                  data-item-image={product.image.url}
                  data-item-name={product.name}
                >
                  Add to cart 🛒
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
