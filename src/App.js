import React from "react";

import {
  BrowserRouter as Router, Route, Routes,
  useLocation
} from "react-router-dom";

import { WelcomePage } from "./components/welcomePage/welcomePage";
import { Header } from "./components/header/header";
import { Signin } from "./components/signIn/signIn";
import { PanelMaster } from "./components/panel/panelMaster";


const App = () => {

  let location = useLocation();

  return(
          <>
            {console.log('reload_app')}
            {/* <RemoveScroll enabled={anyWindowIsOpen} className="w-100"> */}
              <Header pathname = {location.pathname} />
              {/* <Router> */}
                <Routes>
                  <Route path="/" exact element = {<WelcomePage/>}></Route>
                  <Route path="/signin" exact element = {<Signin/>}></Route>
                  <Route path="/panel" exact element = {<PanelMaster/>}></Route>
                </Routes>
              {/* </Router> */}
            {/* </RemoveScroll> */}
          </>
      );
  }
export default App;
