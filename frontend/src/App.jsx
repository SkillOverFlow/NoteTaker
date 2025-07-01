import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/styles.scss";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
