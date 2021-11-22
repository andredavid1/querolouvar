import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";

import Header from "components/Header";
import Footer from "components/Footer";
import usePersistedState from "utils/usePersistedState";

import { GlobalStyles } from "styles/global";
import dark from "styles/themes/dark";
import light from "styles/themes/light";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
