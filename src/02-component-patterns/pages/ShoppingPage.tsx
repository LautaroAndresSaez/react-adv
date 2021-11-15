import { FC } from "react";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import ProductName from "../components/ProductName";
import ProductsButtons from "../components/ProductsButtons";
import { useProduct } from "../hooks/useProduct";

interface Props {}

const products = [
  {
    id: 1,
    name: "Cofee Mug - Card",
  },
  {
    id: 2,
    name: "Cofee Mug - Card",
  },
  {
    id: 3,
    name: "Cofee Mug - Card",
  },
  {
    id: 4,
    name: "Cofee Mug - Card",
  },
  {
    id: 5,
    name: "Cofee Mug - Card",
    img: "./coffee-mug.png",
  },
];

const ShoppingPage: FC<Props> = () => {
  const { counter, increaseBy } = useProduct();
  return (
    <div>
      <h1>Shopping Page</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map(({ id, name, img }) => (
          <ProductCard key={id}>
            <ProductImage img={img} />
            <ProductName name={name} />
            <ProductsButtons counter={counter} increaseBy={increaseBy} />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
