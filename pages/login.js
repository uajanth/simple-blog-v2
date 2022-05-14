import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";
import AuthForm from "../src/components/AuthForm";
import Nav from "../src/components/Nav";
import { Heading } from "@chakra-ui/react";


export default function Login() {
  return (
    <>
      <Head>
        <title>Simple Blog - Login</title>
        <meta name="description" content="A Simple NextJS Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <AuthForm />
    </>
  );
}
