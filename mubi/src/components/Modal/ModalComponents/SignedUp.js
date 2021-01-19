import React, { useContext } from "react";
//svg
import { LogoBlack } from "../../utils/svg";
import { GrClose } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
//framer motion
import { motion } from "framer-motion";
//context
import MyGlobalContext from "../../../context/context";

function SignedUp() {
  const { handleLoginPage, setModal } = useContext(MyGlobalContext);

  return (
    <>
      (
      <motion.div className="SignedUp_content">
        <div className="SignedUp_header ">
          <LogoBlack />
          <motion.h3
            initial={{ y: "-200%" }}
            animate={{ y: 0 }}
            exit={{ y: "-200%" }}
          >
            SIGNED UP
          </motion.h3>
          <GrClose className="SignedUp_close" onClick={() => setModal(false)} />
        </div>
        <div className="SignedUp_body">
          <div className="SignedUp_text">
            <h2>
              YOU ARE ALMOST DONE WITH SIGNING UP. WE SENT YOU AND EMAIL TO
              FINILIZE THE DETAILS
            </h2>
          </div>
        </div>
      </motion.div>
      )
    </>
  );
}

export default SignedUp;
