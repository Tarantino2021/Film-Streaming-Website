import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowDropleft } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
//framer motion
import { motion } from "framer-motion";
//context
import MyGlobalContext from "../../../context/context";

function PasswordSent() {
  const { setModal, handleLoginPage } = useContext(MyGlobalContext);
  return (
    <>
      (
      <motion.div className="PasswordSent_content">
        <div className="PasswordSent_header ">
          <h1>FilmArte</h1>
          <motion.h3
            initial={{ y: "-200%" }}
            animate={{ y: 0 }}
            exit={{ y: "-200%" }}
          >
            PASSWORD RESET
          </motion.h3>
          <GrClose
            className="PasswordSent_close"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="PasswordSent_body">
          <div className="PasswordSent_text">
            <h2>WE SENT YOU AND EMAIL TO RESET YOUR PASSWORD.</h2>
          </div>
          <button
            className="PasswordSent_btn"
            type="submit"
            onClick={() => setModal(false)}
          >
            CLOSE
          </button>
          <div className="PasswordSent_last">
            <IoMdArrowDropleft />
            <Link onClick={handleLoginPage}>Back to Login</Link>
          </div>
        </div>
      </motion.div>
      )
    </>
  );
}

export default PasswordSent;
