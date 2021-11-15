import { FC } from "react";
import styles from "../styles/styles.module.css";

interface Props {
  name: string;
}

const ProductName: FC<Props> = ({ name }) => {
  return <span className={styles.productDescription}>{name}</span>;
};

export default ProductName;
