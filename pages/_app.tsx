import { themeColors } from "@type/theme/themeColors";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { buttonClassnameSize } from "src/constant/buttonClassnameSize";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(buttonClassnameSize);
  }, []);
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
