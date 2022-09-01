import ArticleItem from "./ProductItem";
import productStyles from "../styles/Product.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

let maxScroll = 0;
let currentScroll = 0;

const ProductList = ({ products }) => {
  const scrollrRef = useRef(null);
  useEffect(() => {
    // Calc the maximum distance that able to scroll
    maxScroll = scrollrRef.current.scrollWidth - scrollrRef.current.offsetWidth;
  }, []);

  // Disbale of btn Left and Right
  const [btnLeft, setBtnLeft] = useState(true);
  const [btnRight, setBtnRight] = useState(false);

  const handleScroll = (value) => {
    const scroll = scrollrRef.current;

    currentScroll += value * 310;

    scroll.scrollLeft += value * 310;

    // If the distance of scrolling is 0, scrollview hits the left
    if (currentScroll === 0) {
      setBtnLeft(true);
    } else {
      setBtnLeft(false);
    }

    // If the distance of scrolling is max, scrollview hits the right
    if (currentScroll > maxScroll) {
      setBtnRight(true);
    } else {
      setBtnRight(false);
    }
  };

  return (
    <>
      <div className={productStyles.container}>
        <h2> New Arrivals</h2>
        <div>
          <button
            className={productStyles.scrollBtn}
            onClick={() => handleScroll(-1)}
            disabled={btnLeft}
          >
            <span>
              <AiOutlineLeft size={25} />
            </span>
          </button>
          <button
            className={productStyles.scrollBtn}
            onClick={() => handleScroll(1)}
            disabled={btnRight}
          >
            <span>
              <AiOutlineRight size={25} />
            </span>
          </button>
        </div>
      </div>
      <div ref={scrollrRef} className={productStyles.grid}>
        {products.map((p, index) => (
          <ArticleItem product={p} key={index} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
