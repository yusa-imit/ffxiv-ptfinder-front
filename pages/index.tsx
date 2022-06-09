import Collapse from "@components/Collapse";
import ContainerWithNav from "@components/ContainerWithNav";
import Menu from "@components/Menu";
import { NavMenu } from "@constant/NavMenu";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <ContainerWithNav>
      <Menu data={NavMenu} direction={"vertical"}></Menu>
    </ContainerWithNav>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;
