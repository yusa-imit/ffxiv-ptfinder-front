import { NavMenu } from "@constant/NavMenu";
import { theme } from "@recoil/theme";
import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import Button from "./Button";
import Container from "./Container";
import { Nav } from "./Nav";

interface ContainerProps {
  children?: ReactNode;
}

export default function ContainerWithNav({
  children,
}: ContainerProps): JSX.Element {
  return (
    <>
      <Container>
        <Nav
          menus={NavMenu}
          name={"TEST_APP_NAME"}
          buttons={<Button color="primary">{"nav_button"}</Button>}
          className={"top-5"}
        />
        {children}
      </Container>
    </>
  );
}
