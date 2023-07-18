import Image from "next/image";
// import Head from 'next/head';
// import styles from '../../styles/SingleProduct.module.css';
const singleproduct = ({ product }) => {
  return (
    <div className="container single-container">
      <div className="left-section">
        <Image src={product.image.url} width={300} height={700} alt="" />
      </div>
      <div className="right-section">
        <h3>{product.name}</h3>
        <p className="price">{product.price}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: product.description.html,
          }}
        ></div>
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
};
export default singleproduct;
