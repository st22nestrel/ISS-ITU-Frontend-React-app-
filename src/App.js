import './App.css';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Konference,
  Navigation,
  NewKonference,
  SignIn
} from "./components";

function App() {
  return (
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/konference" element={<Konference />} />
      <Route path="/contact" element={<NewKonference />} />
      {/* <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route> */}
    </Routes>
  </Router>
  );
}

export default App;
