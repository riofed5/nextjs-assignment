import Link from "next/link";
import productStyles from "../styles/Product.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

const ImageContainer = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const handleLikedBtn = () => {
    // Set new liked variable
    setLiked(!liked);
  };
  return (
    <div className={productStyles.imgContainer}>
      <div onClick={handleLikedBtn}>
        {liked ? (
          <FaHeart
            style={{ color: "red" }}
            size={25}
            className={productStyles.likedIcon}
          />
        ) : (
          <FaRegHeart className={productStyles.likedIcon} size={25} />
        )}
      </div>
      <p className={productStyles.price}>€ 30</p>
      <Link href={`/product/${product.id}`}>
        <img src={product.img} alt="backpack" width={300} height={300} />
      </Link>
    </div>
  );
};

const ProductItem = ({ product }) => {
  return (
    <a className={productStyles.card}>
      <ImageContainer product={product} />
      <Link href={`/product/${product.id}`}>
        <div className={productStyles.bottomCard}>
          <p>{product.title}</p>
          <p style={{ color: "#AFAFAF" }}>{product.categories}</p>
          <p>{product.extra}</p>
        </div>
      </Link>
    </a>
  );
};

export default ProductItem;
