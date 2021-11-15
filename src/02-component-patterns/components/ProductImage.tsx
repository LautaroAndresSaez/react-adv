import { FC } from "react";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

interface Props {
  img?: string;
}

const ProductImage: FC<Props> = ({ img }) => {
  return (
    <img className={styles.productImg} src={img || noImage} alt="Coffe Mug" />
  );
};

export default ProductImage;
