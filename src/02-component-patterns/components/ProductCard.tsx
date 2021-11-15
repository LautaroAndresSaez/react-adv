import { FC } from "react";

import styles from "../styles/styles.module.css";

interface Props {}

const ProductCard: FC<Props> = ({ children }) => {
  return <div className={styles.productCard}>{children}</div>;
};

export default ProductCard;
 