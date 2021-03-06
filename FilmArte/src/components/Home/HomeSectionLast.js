import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import MyGlobalContext from "../../context/context";

function HomeSectionLast() {
  const { modal, setModal } = useContext(MyGlobalContext);

  return (
    <div className="HomeSectionLast">
      <div className="HomeSectionLast_wrapper">
        <div className="HomeSectionLast__text_wrraper">
          <div className="HomeSectionLast_text">
            Discover beautiful,
            <span> </span>art-house films.
            <br />A new visual every single weekend.
          </div>
        </div>
        <div className="HomeSectionLast_btn_wrapper">
          <Link className="HomeSectionLast_btn" onClick={() => setModal(true)}>
            TRY IT NOW
          </Link>
        </div>
        <p class="HomeSectionLast_paragraph">
          This site is protected by reCAPTCHA and the Google
          <Link href="https://policies.google.com/privacy">Privacy Policy</Link>
          and
          <Link href="https://policies.google.com/terms">Terms of Service</Link>
          apply.
        </p>
      </div>
    </div>
  );
}

export default HomeSectionLast;
