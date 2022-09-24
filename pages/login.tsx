import React, { Component } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useForm, Resolver } from "react-hook-form";

export default function LoginScreen() {
  const {
    handlesubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }: any) => {};

  return (
    <Layout title="Login">
      <form className="mx-auto max-w-screen" onSubmit={handlesubmit}>
        <h1 className="mb-4 text-xl">Log In</h1>
        <div className="mb-4">
          <label htmlFor="email"> Email</label>
          <input type="email" className="w-full" id="email" autoFocus />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input type="text" className="w-full" id="password" autoFocus />
        </div>
        <div className="mb-4">
          <button className="primary-button">Log In</button>
        </div>
        <div className="mb-4">
          Don't have an account yet? &nbsp;{" "}
          <Link href="/signup">
            <button className="primary-button" type="submit">
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </Layout>
  );
}
