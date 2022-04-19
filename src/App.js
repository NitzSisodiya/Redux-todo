import React from "react";
import { Provider } from "react-redux";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./redux/store";
import Navbar from "./components/Routes";

function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <Navbar />
    </Provider>
    </div>
  );
}

export default App;
