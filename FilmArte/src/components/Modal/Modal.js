import React, { useContext, useEffect, useRef } from "react";
import ModalLogin from "./ModalComponents/ModalLogin";
import ModalSignUp from "./ModalComponents/ModalSignUp";
import LogedIn from "../Modal/ModalComponents/LogedIn";
import SignedUp from "../Modal/ModalComponents/SignedUp";
import PasswordSent from "../Modal/ModalComponents/PasswordSent";
import ModalForgotPassword from "./ModalComponents/ModalForgotPassword";
//framer motion
import { AnimatePresence, motion } from "framer-motion";

//context
import MyGlobalContext from "../../context/context";

function Modal() {
  const { modalState, setModal } = useContext(MyGlobalContext);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.2 }}
        className="Modal"
        onClick={() => setModal(false)}
      >
        <div
          className="Modal_inner_wrapper"
          onClick={(e) => e.stopPropagation()}
        >
          {modalState === "PasswordSent" && <PasswordSent />}
          {modalState === "SignedUp" && <SignedUp />}
          {modalState === "loggedIn" && <LogedIn />}
          {modalState === "logIn" && <ModalLogin />}
          {modalState === "signUp" && <ModalSignUp />}
          {modalState === "password" && <ModalForgotPassword />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
