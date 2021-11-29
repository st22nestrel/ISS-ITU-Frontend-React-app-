import './App.css';
import "./index.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import {
  KonferenceList,
  KonfereceDetail,
  KonferenceMistnostDetail,
  Navigation,
  Rezervace,
  NewKonference,
  PrispevekNew,
  KonferenceNew,
  SignIn,
  PrezentaceListReadOnly,
  PrezentaceUserList,
  KonferenceDetailNotRegistered
} from "./components";

import Auth from './components/Authentificate';
import ProtectedRoute, {UnprotectedRoute} from './components/AuthRoute';
import CurrentUserProfile from './components/routes/CurrentUserProfile';
import Admin from './components/routes/Admin';

import React from 'react';
import { Helmet } from 'react-helmet';

function App() {

  /* const navigate = useNavigate() */

  return (
  <div>
      <Helmet>
        <title>Moje Konference</title>
      </Helmet>

  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<UnprotectedRoute><SignIn /></UnprotectedRoute>} />
      {/* <Route path="/signIn" element={<ProtectedRoute noAuth> <SignIn /> </ProtectedRoute>} /> */}

      {!Auth.authentificated &&
        <Route path="/signIn" element={<SignIn/>}/>
      }
      <Route path="/konference" element={<KonferenceList url={'http://iisprojekt.fun:8000/konference/'} />}/>

      <Route path ="/admin" exact exact element={ <ProtectedRoute> <Admin /> </ProtectedRoute> } />

      {/* <ProtectedRoute path="/konference" component={<Konference />} /> */}
      <Route path="/novaKonference" element={ <ProtectedRoute>  <KonferenceNew /> </ProtectedRoute> } />
      <Route path="/uzivatel" element={<ProtectedRoute> <CurrentUserProfile token={Auth.token}/> </ProtectedRoute>}/>

      <Route path="/uzivatel/prezentace" element={<ProtectedRoute> <PrezentaceUserList token={Auth.token}/> </ProtectedRoute>}/>
      <Route path="/uzivatel/konference" element={<ProtectedRoute> <KonferenceList url={'http://iisprojekt.fun:8000/uzivatel/poradatel'}/> </ProtectedRoute>}/>

      <Route path="/konference/:id" exact element={ <ProtectedRoute> <KonfereceDetail /> </ProtectedRoute> } />
      <Route path="/konference/notRegistered/:id" element={ <KonferenceDetailNotRegistered /> } />
      
      <Route path="/konference/:id/rezervace" exact element={ <Rezervace /> } />
      {/* <Route path="/konference/:id/rezervace/uzivatel" exact element={<ProtectedRoute> <Rezervace /> } /> */}

      <Route path="/konference/:id/:kod" exact exact element={ <ProtectedRoute> <KonferenceMistnostDetail /> </ProtectedRoute> } />
      <Route path="/konference/:id/novyPrispevek" element={ <ProtectedRoute> <PrispevekNew/> </ProtectedRoute> } />

      <Route path="/konference/:id/prispevkySchvalene" element={ <ProtectedRoute> <PrezentaceListReadOnly/> </ProtectedRoute> } />

      {/* <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route> */}
    </Routes>
  </Router>
  </div>
  );
}

export default App;
