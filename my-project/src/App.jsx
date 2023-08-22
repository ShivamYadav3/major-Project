import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./fix/store";
import ErrorBoundary from "./fix/Error/ErrorBoundary";

function App() {
  console.log("reRender");
  return (
    <>
      <Provider store={store}>
        <ErrorBoundary>
          <Header />
          <Outlet />
          <Footer />
        </ErrorBoundary>
      </Provider>
    </>
  );
}

export default App;
