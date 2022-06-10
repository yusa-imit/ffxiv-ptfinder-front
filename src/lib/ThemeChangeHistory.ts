import { ThemeHistory } from "@type/theme/ThemeHistory";
import { FixedLengthQueue } from "./class/FixedLengthQueue";
import { Theme } from "@type/theme/theme";

const LOCALSTORAGE_KEY = "user_select_theme_history";
const setThemeChangeHistory = (data: ThemeHistory) => {
  if (window) {
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  } else {
    console.error(
      "An error occured during save theme change history data. Check browser specification for using this site"
    );
  }
};
export const getThemeChangeHistory = (): ThemeHistory => {
  if (window) {
    const _l = window.localStorage.getItem(LOCALSTORAGE_KEY);
    if (_l === null) {
      const new_data = new FixedLengthQueue<Theme>([], 30);
      setThemeChangeHistory(new_data);
      return new_data;
    } else {
      return JSON.parse(_l);
    }
  } else {
    console.warn(
      "Cannot find localstorage, If your browser's private mode is activated, use normal one for better user experiences."
    );
    return new FixedLengthQueue<Theme>([], 30);
  }
};

export const pushThemeHistory = (theme: Theme) => {
  const history = getThemeChangeHistory();
  history.push(theme);
  setThemeChangeHistory(history);
};
