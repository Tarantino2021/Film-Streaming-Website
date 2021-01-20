import "./App.scss";
import React, { useContext, useEffect } from "react";
import MyGlobalContext from "./context/context";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Press from "./pages/Press";
import Gifts from "./pages/Gifts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import YoutubeModal from "./components/YoutubeModal.js/YoutubeModal";
import Memberships from "./pages/Memberships";
import WaysToWatch from "./pages/WaysToWatch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Modal from "./components/Modal/Modal";
import { motion } from "framer-motion";

function App() {
  const { modal, youttubeModal } = useContext(MyGlobalContext);

  //hides the scroll functionality when the modal is open
  useEffect(() => {
    if (modal === true) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [modal]);

  //hides the scroll functionality when the Youtube modal is open
  useEffect(() => {
    if (youttubeModal === true) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [youttubeModal]);

  //scroll to top when route changes
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <Header />
      {modal && <Modal />}
      {youttubeModal && <YoutubeModal />}
      <motion.div className="App">
        <Switch>
          <Route path="/gifts" component={Gifts} />
          <Route path="/press" component={Press} />
          <Route path="/memberships" component={Memberships} />
          <Route path="/about" component={About} />
          <Route path="/devices" component={WaysToWatch} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </motion.div>
    </Router>
  );
}

export default App;
