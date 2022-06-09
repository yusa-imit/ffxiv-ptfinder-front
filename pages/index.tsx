import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return <div></div>;
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;
