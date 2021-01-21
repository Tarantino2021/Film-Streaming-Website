import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

function ModalSignUp() {
  const { handleLoginPage, setModal, handleSubmitSignedUp } = useContext(
    MyGlobalContext
  );

  //form validation
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("⚠Password is required")
      .min(8, "⚠Password is too short - should be 8 chars minimum.")
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
    handleSubmitSignedUp();
  };

  return (
    <>
      (
      <motion.div className="Modal_content_signUp">
        <div className="Modal_header_signUp">
          <h1>FilmArte</h1>
          <motion.h3
            initial={{ y: "-200%" }}
            animate={{ y: 0 }}
            exit={{ y: "-200%" }}
          >
            SIGN UP
          </motion.h3>

          <GrClose
            className="Modal_close_signUp"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="Modal_body_signUp">
          <div className="Modal_btn_signUp">
            <ImFacebook2 />
            Continue with Facebook
          </div>
          <div className="Modal_text_signUp">or</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ErrorMessage
              className="Modal_form_invalid"
              name="email"
              as="div"
              errors={errors}
            />
            <input
              className="Modal_input_OnesignUp"
              placeholder="Email"
              ref={register}
              name="email"
            />
            <input
              className="Modal_input_TwosignUp"
              placeholder="Password"
              ref={register}
              name="password"
            />
            <ErrorMessage
              className="Modal_form_invalid"
              name="password"
              as="div"
              errors={errors}
            />

            <button type="submit" className="Modal_Button_signUp">
              SIGN UP
            </button>
          </form>
          <div className="Modal_last_signUp">
            <h1>
              Already a member?
              <Link onClick={handleLoginPage}>Log in</Link>
            </h1>
          </div>
        </div>
      </motion.div>
      )
    </>
  );
}

export default ModalSignUp;
