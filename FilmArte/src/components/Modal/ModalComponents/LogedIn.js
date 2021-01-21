import React, { useContext } from "react";
import { GrClose } from "react-icons/gr";

//framer motion
import { motion } from "framer-motion";
//context
import MyGlobalContext from "../../../context/context";

function LogedIn() {
  const { handleLoginPage, setModal } = useContext(MyGlobalContext);

  return (
    <>
      (
      <motion.div className="Modal_content_password">
        <div className="Modal_header_password ">
          <h1>FilmArte</h1>
          <motion.h3
            initial={{ y: "-200%" }}
            animate={{ y: 0 }}
            exit={{ y: "-200%" }}
          >
            LOGGED IN
          </motion.h3>
          <GrClose
            className="Modal_close_password"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="LogedIn_body">
          <div className="LogedIn_text">
            <h2>YOU ARE LOGGED IN.</h2>
          </div>
          <button
            className="LogedIn_btn"
            onClick={handleLoginPage}
            type="submit"
          >
            LOG OUT
          </button>
        </div>
      </motion.div>
      )
    </>
  );
}

export default LogedIn;
