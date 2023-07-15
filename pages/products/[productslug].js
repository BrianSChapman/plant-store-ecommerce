import Head from 'next/head';
import styles from '../../styles/SingleProduct.module.css';
const singleproduct = () => {
 return (
    <>
       <Head>
          <title>Dracaena fragrans</title>
       </Head>
       <div className={styles.single_container}>
          <div className={styles.left_section}>
             <img src="/images/croton.png" className={styles.left_img} alt="" />
          </div>
          <div className={styles.right_section}>
             <h3 className={styles.title}>Dracaena fragrans</h3>
             <p className={styles.price}>$50</p>
             <div className={styles.para}>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                   impedit voluptatum vitae labore molestiae, maiores, hic ad
                   officiis laudantium in officia, nam vel quod! Nesciunt aperiam
                   explicabo facere laboriosam eius.
                </p>
             </div>
             <button className="btn">Add to cart 🛒</button>
          </div>
       </div>
    </>
 );
};
export default singleproduct;