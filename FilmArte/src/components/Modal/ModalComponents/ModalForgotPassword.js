import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { GrClose } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { IoMdArrowDropleft } from "react-icons/io";
//context
import MyGlobalContext from "../../../context/context";
//useform
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
//yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ModalForgotPassword() {
  const { handleLoginPage, setModal, handleSubmitPasswordSent } = useContext(
    MyGlobalContext
  );

  //form validation
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("⚠ Sorry, this isn’t a valid email address")
      .required("⚠ Email is required"),
  });

  const onSubmit = (data) => {
    console.log(data);
    handleSubmitPasswordSent();
  };

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

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
            FORGOT YOUR PASSWORD?
          </motion.h3>
          <GrClose
            className="Modal_close_password"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="Modal_body_password">
          <div className="Modal_text_password">
            <h2>
              Enter the email or phone number you signed up with below. We’ll
              send you a link to reset your password.
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="Modal_input_password"
              placeholder="Email"
              ref={register}
              name="email"
            />
            <ErrorMessage
              className="Modal_form_invalid"
              name="email"
              as="div"
              errors={errors}
            />
            <button className="Modal_Button_password" type="submit">
              SEND
            </button>
          </form>

          <div className="Modal_last_password">
            <IoMdArrowDropleft />
            <Link onClick={handleLoginPage}>Back to Login</Link>
          </div>
        </div>
      </motion.div>
      )
    </>
  );
}

export default ModalForgotPassword;
