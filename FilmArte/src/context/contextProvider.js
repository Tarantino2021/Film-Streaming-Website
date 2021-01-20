import React, { useState } from "react";
import GlobalContext from "./context";
//datas
import { GiftGridData } from "../components/utils/data";

function ContextProvider({ children }) {
  //Youtube modal
  const [youttubeModal, setYoutubeModal] = useState(false);
  //modal Open State
  const [modal, setModal] = useState(false);
  //menu open state
  const [clicked, setClicked] = useState(false);
  //modal login states
  const [modalState, setModalState] = useState("logIn");
  //modal login functions
  const handleSignUpPage = () => {
    setModalState("signUp");
  };

  const handleLoginPage = () => {
    setModalState("logIn");
  };

  const handlePasswordPage = () => {
    setModalState("password");
  };

  const handleSubmitLogIn = () => {
    setModalState("loggedIn");
  };

  const handleSubmitSignedUp = () => {
    setModalState("SignedUp");
  };

  const handleSubmitPasswordSent = () => {
    setModalState("PasswordSent");
  };

  //Youtube modal trailer functions
  const [trailer, setTrailer] = useState();

  const handleClickTrailer = (Trailerid) => {
    setTrailer(Trailerid);
    setYoutubeModal(true);
    return Trailerid;
  };

  return (
    <GlobalContext.Provider
      value={{
        youttubeModal,
        setYoutubeModal,
        modal,
        setModal,
        clicked,
        setClicked,
        modalState,
        handleSignUpPage,
        handleLoginPage,
        handlePasswordPage,
        handleSubmitLogIn,
        handleSubmitSignedUp,
        handleSubmitPasswordSent,
        trailer,
        handleClickTrailer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
