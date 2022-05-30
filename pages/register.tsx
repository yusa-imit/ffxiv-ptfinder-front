import React from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { api_urls } from "@url/api_urls";
import { Register_Response_401 } from "@type/api_response/register";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: Register_Response_401 = await (
    await axios.post(api_urls.register, {})
  ).data;
  return { props: { res: session } };
};

const Register: NextPage = ({
  res,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div></div>;
};

export default Register;
