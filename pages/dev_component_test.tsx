import ContainerWithNav from "@components/ContainerWithNav";
import Menu from "@components/Menu";
import { NavMenu } from "@constant/NavMenu";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const DCT: NextPage = () => {
  return (
    <ContainerWithNav>
      <Menu data={NavMenu} direction={"vertical"}></Menu>
      <Menu data={NavMenu} direction={"horizontal"}></Menu>
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

export default DCT;
