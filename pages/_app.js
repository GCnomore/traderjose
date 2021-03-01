import Header from "./src/component/Header";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
