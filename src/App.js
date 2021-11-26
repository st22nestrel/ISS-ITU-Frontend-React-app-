import './App.css';
import "./index.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import {
  KonferenceList,
  KonfereceDetail,
  Navigation,
  NewKonference,
  KonferenceNew,
  SignIn
} from "./components";

import Auth from './components/Authentificate';
import ProtectedRoute, {UnprotectedRoute} from './components/AuthRoute';
import CurrentUserProfile from './components/routes/CurrentUserProfile';

function App() {

  /* const navigate = useNavigate() */

  return (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<UnprotectedRoute><SignIn /></UnprotectedRoute>} />
      {/* <Route path="/signIn" element={<ProtectedRoute noAuth> <SignIn /> </ProtectedRoute>} /> */}

      {!Auth.authentificated &&
        <Route path="/signIn" element={<SignIn/>}/>
      }
      <Route path="/konference" element={<ProtectedRoute> <KonferenceList /> </ProtectedRoute>}/>

      {/* <ProtectedRoute path="/konference" component={<Konference />} /> */}
      <Route path="/novaKonference" element={ <ProtectedRoute>  <KonferenceNew /> </ProtectedRoute> } />
      <Route path="/profilUzivatele" element={<ProtectedRoute> <CurrentUserProfile token={Auth.token}/> </ProtectedRoute>}/>
      <Route path="/konference/id" element={ <ProtectedRoute> <KonfereceDetail /> </ProtectedRoute> } />

      {/* <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route> */}
    </Routes>
  </Router>
  );
}

export default App;
