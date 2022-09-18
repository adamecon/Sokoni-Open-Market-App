import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import { Store } from "../../utils/Store";
import { useContext } from "react";

const ProductScreen = () => {
  const { state, dispatch }: any = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return (
      <div>
        <h1>Sorry! Product Not Found</h1>
      </div>
    );
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (x: any) => x.slug === product.slug
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.stock < quantity) {
      alert("sorry, that product is out of stock");
    }
    dispatch({ type: "CART_ADD_ITEMS", payload: { ...product, quantity } });
  };
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>{product.category}</li>
            <li>{product.brand}</li>
            <li>
              {product.rating} of {product.reviews}
            </li>
            <li>{product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <h1>Price</h1>
              <h1>${product.price}</h1>
            </div>
            <div className="mb-2 flex justify-between">
              <h1>Status</h1>
              <h1>{product.price > 0 ? "In Stock" : "Out Of Stock"}</h1>
            </div>
            <button
              className="primary-button w-full"
              type="button"
              onClick={addToCartHandler}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
