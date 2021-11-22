import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Konference,
  Navigation,
  NewKonference,
  SignIn
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/about" element={<Konference />} />
      <Route path="/contact" element={<NewKonference />} />
      {/* <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route> */}
    </Routes>
{/*     <Footer /> */}
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
