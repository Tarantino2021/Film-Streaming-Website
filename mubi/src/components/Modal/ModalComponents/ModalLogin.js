import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//svg
import { LogoBlack } from "../../utils/svg";
import { GrClose } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
//context
import MyGlobalContext from "../../../context/context";
//useform
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
//yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ModalLogin() {
  const {
    handlePasswordPage,
    handleSignUpPage,
    setModal,
    handleSubmitLogIn,
    modalState,
  } = useContext(MyGlobalContext);

  //form validation
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    email: yup
      .string()
      .email("⚠ Sorry, this isn’t a valid email address")
      .required("⚠ Email is required"),
  });

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    handleSubmitLogIn();
  };

  return (
    <div className="Modal_content">
      <div className="Modal_header">
        <LogoBlack />
        <motion.h3
          initial={{ y: "-220%" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          exit={{ y: "-220%" }}
        >
          LOG IN
        </motion.h3>
        <GrClose className="Modal_close" onClick={() => setModal(false)} />
      </div>

      <div className="Modal_body">
        <div className="Modal_btn">
          <ImFacebook2 />
          Continue with Facebook
        </div>
        <div className="Modal_text">or</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ErrorMessage
            className="Modal_form_invalid"
            name="email"
            as="div"
            errors={errors}
          />
          <input
            name="email"
            ref={register}
            className="Modal_input"
            placeholder="Email"
          />
          <input
            name="password"
            ref={register}
            className="Modal_input_two"
            placeholder="Password"
          />
          <ErrorMessage
            className="Modal_form_invalid"
            name="password"
            as="div"
            errors={errors}
          />

          <div className="Modal_password_wrapper">
            <div className="Modal_checkbox_wrapper">
              <input className="modal_checkbox" type="checkbox" />
              <h2>Remamber me?</h2>
            </div>
            <h3 onClick={handlePasswordPage}>Forgot password?</h3>
          </div>
          <button className="Modal_Button" type="submit">
            Log In
          </button>
        </form>
        <div className="Modal_last">
          <h1>
            New to MUBI?
            <Link onClick={handleSignUpPage}>Sign up Now</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
