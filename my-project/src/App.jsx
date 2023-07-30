import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./fix/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
