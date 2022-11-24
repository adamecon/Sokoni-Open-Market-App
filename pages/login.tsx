import React, { Component } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useForm, Resolver } from "react-hook-form";

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }: any) => {
    console.log(email, password);
  };

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Log In</h1>
        <div className="mb-4">
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Enter Your Email!",
              pattern: {
                value: /^[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+[a-zA-z0-9-.]+$/i,
                message: "Enter a valid email",
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Enter your password",
              minLength: {
                value: 8,
                message: "password cannot be less than 8 characters",
              },
            })}
            className="w-full"
            id="password"
            autoFocus
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
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
