import React, { useState } from "react";
import { Link } from "react-router-dom";
//useform
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
//yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ContactSection() {
  const [submited, setSubmited] = useState(false);

  //yup for Name, Email, Message
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("⚠ Name is required")
      .min(4, "⚠ Name is too short - should be 8 chars minimum.")
      .max(15, "⚠ Name is too long - should be less then 15 chars."),
    email: yup
      .string()
      .email("⚠ It is not a valid email")
      .required("⚠ Email is required"),
    message: yup
      .string()
      .required("⚠ Question is required")
      .max(200, "⚠ Question is too long - should be less then 200 chars."),
  });

  //useForm
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setSubmited(true);
  };

  return (
    <div className="ContactSection">
      {submited ? (
        <>
          <div className="ContactSection_thanksWrrapper">
            <h2>THANKS FOR YOUR SUBMISSION!</h2>
            <Link to="/">GO TO MAIN PAGE</Link>
          </div>
        </>
      ) : (
        <>
          <h1>GET IN TOUCH</h1>
          <form
            className="ContactSection_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="ContactSection_form_wrapper">
              <input placeholder="Name" name="name" id="name" ref={register} />
              <ErrorMessage
                className="ContactSection_form_invalid"
                name="name"
                as="div"
                errors={errors}
              />
            </div>
            <div className="ContactSection_form_wrapper">
              <input placeholder="Email" name="email" ref={register} />
              <ErrorMessage
                className="ContactSection_form_invalid"
                name="email"
                as="div"
                errors={errors}
              />
            </div>
            <div className="ContactSection_form_wrapper">
              <input
                placeholder="Message"
                name="message"
                ref={register}
                className="ContactSection_form_message"
              />
              <ErrorMessage
                className="ContactSection_form_invalid"
                name="message"
                as="div"
                errors={errors}
              />
            </div>

            <button className="ContactSection_btn" type="submit">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default ContactSection;
