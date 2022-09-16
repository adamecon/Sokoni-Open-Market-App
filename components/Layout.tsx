import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title }: any) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-Sokoni" : "Sokoni"}</title>
        <meta name="description" content="An open marketplace"></meta>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Sokoni</a>
            </Link>

            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Log In</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <h1>copyright @ 2022 all rights reserved</h1>
        </footer>
      </div>
    </>
  );
};

export default Layout;
