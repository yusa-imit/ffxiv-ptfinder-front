import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default appWithTranslation(MyApp);
