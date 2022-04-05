import React from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import { useCart } from "contexts/cart/use-cart";
import { Counter } from "./counter/counter";
import Link from "next/link";

const Button = styled.button(
  css({
    width: 70,
    height: 38,
    borderRadius: 6,
    fontSize: 14,
    transition: "0.35s ease-in-out",
    backgroundColor: "#179d7f",
    border: "1px solid",
    borderColor: "#e6e6e6",
    cursor: "pointer",
    color: "#fff",
    ":hover": {
      backgroundColor: "primary.regular",
      borderColor: "primary.regular",
      color: "#fff"
    }
  })
);
interface Props {
  data: any;
}

export const AddItemToCart = ({ data }: Props) => {
  const { slug } = data;

  const { addItem, removeItem, getItem, isInCart } = useCart();
  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(data);
    // if (!isInCart(data.id)) {
    //   cartAnimation(e);
    // }
  };
  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };
  return (
    <Link href="/products/[slug]" as={`/products/${slug}`}>
      <Button
        aria-label="add item to cart"
        // onClick={handleAddClick}
        onClick={(e) => {
          !isInCart(data.id) ? addItem(data) : null;
        }}
      >
        <div>
          <b>View</b>
        </div>
      </Button>
    </Link>
  );
};
