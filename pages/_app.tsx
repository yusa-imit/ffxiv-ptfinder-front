import { AppProps } from "next/app";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import { useEffect } from "react";
import { getThemeChangeHistory } from "src/lib/ThemeChangeHistory";
import { theme } from "@recoil/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const setGlobal = useSetRecoilState(theme);
  useEffect(() => {
    if (!window) return;
    const history = getThemeChangeHistory();
    const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (isDark.matches) {
      if (history.includes("light") || history.length > 0) return;
      else setGlobal("dark");
    }
  }, [setGlobal]);
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default appWithTranslation(MyApp);
