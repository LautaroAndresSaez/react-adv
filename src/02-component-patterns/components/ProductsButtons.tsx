import { FC } from "react";
import styles from "../styles/styles.module.css";

interface Props {
  counter: number;
  increaseBy: (value: number) => void;
}

const ProductsButtons: FC<Props> = ({counter, increaseBy}) => {

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <button className={styles.buttonLabel}>{counter}</button>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};

export default ProductsButtons;
