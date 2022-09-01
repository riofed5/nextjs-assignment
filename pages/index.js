import { server } from "../config";
import ArticleList from "../components/ProductList";

export default function Home({ products }) {
  return (
    <div>
      <ArticleList products={products} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
