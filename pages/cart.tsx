import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import Link from "next/link";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/outline";
import { Router, useRouter } from "next/router";

const CartScreen = () => {
  const router = useRouter();
  const { state, dispatch }: any = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item: any) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const updateCartHandler = (item: any, qty: any) => {
    const quantity = Number(qty);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  return (
    <Layout title="Your Shopping Cart">
      <h1 className="mb-4 text-xl font-bold">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Your Shopping Cart Is Empty
          <Link href="/">Shop Now</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item: any) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <a className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item.name}
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.stock).keys()].map((x: any) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button
                        className="primary-button"
                        onClick={() => removeItemHandler}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Total (
                  {cartItems.reduce((a: any, c: any) => a + c.quantity, 0)}){""}
                  : $
                  {cartItems.reduce(
                    (a: any, c: any) => a + c.quantity * c.price,
                    0
                  )}
                </div>
              </li>
              <li>
                <button
                  className="primary-button w-full"
                  onClick={() => router.push("/shiping")}
                >
                  Proceed To Check Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CartScreen;
