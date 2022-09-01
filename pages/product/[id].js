import { server } from "../../config";
import Link from "next/link";
import Meta from "../../components/Meta";
import productStyles from "../../styles/Product.module.css";

const Product = ({ product }) => {
  return (
    <>
      <Meta title={product.title} description={product.extra} />

      <div className={productStyles.product}>
        <h1>{product.title}</h1>
        <br />
        <Link href="/">Go Back</Link>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/products/${context.params.id}`);

  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/products`);

  const products = await res.json();

  const ids = products.map((p) => p.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Product;
