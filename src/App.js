import './App.css';
import "./index.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import {
  Konference,
  Navigation,
  NewKonference,
  SignIn
} from "./components";

import Authentificate from './components/Authentificate';
import ProtectedRoute from './components/AuthRoute';

function App() {

  /* const navigate = useNavigate() */

  return (
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<SignIn />} />
      {/* <Route path="/signIn" element={<ProtectedRoute noAuth> <SignIn /> </ProtectedRoute>} /> */}

      {!Authentificate.instance.isAuth() &&
        <Route path="/signIn" element={<SignIn/>}/>
      }
      <Route path="/konference" element={<ProtectedRoute> <Konference /> </ProtectedRoute>}/>


      {/* <ProtectedRoute path="/konference" component={<Konference />} /> */}
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
