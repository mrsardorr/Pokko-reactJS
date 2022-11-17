import React from "react";
import "./App.scss";
import { Route, Routes} from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/Home/Home";
import P404 from "./pages/404/p404";
import Tarifs from "./pages/Tarifs/Tarifs";
import Fonctionnalités from "./pages/Fonctionnalités/Fonctionnalités";
import Iosapp from "./pages/IosApp/Iosapp.jsx";
import Meconnecter from "./pages/Meconnecter/Meconnecter";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<P404/>}/>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home/>}/>
          <Route path="Fonctionnalit" element={<Fonctionnalités/>}/>
          <Route path="tarifs" element={<Tarifs/>}/>
          <Route path="App_IOS" element={<Iosapp/>}/>
          <Route path="Me_connecter" element={<Meconnecter/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
