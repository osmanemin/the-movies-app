import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../reducers/reducers";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
