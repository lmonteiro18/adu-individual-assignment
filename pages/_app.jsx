import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header></header>
      <Component {...pageProps} />
      <footer></footer>
    </div>
  );
}

export default MyApp;
