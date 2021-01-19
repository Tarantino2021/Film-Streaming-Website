import React, { useContext, useState } from "react";
import YouTube from "react-youtube";
//context
import MyGlobalContext from "../../context/context";
//svg
import { LogoBlack } from "../utils/svg";
import { GrClose } from "react-icons/gr";
//framer motion
import { motion } from "framer-motion";
//datas
import { GiftGridData } from "../utils/data";

function YoutubeModal() {
  const { setYoutubeModal, trailer } = useContext(MyGlobalContext);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };

  return (
    <div className="YoutubeModal" onClick={() => setYoutubeModal(false)}>
      <div
        className="YoutubeModal_wrapper_inner"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="YoutubeModal_content">
          <div className="YoutubeModal_header">
            <LogoBlack />
            <motion.h3
              initial={{ y: "-200%" }}
              animate={{ y: 0 }}
              exit={{ y: "-200%" }}
            >
              FILM TRAILER
            </motion.h3>
            <GrClose
              className="YoutubeModal_close"
              onClick={() => setYoutubeModal(false)}
            />
          </div>
          <div className="YoutubeModal_body">
            <YouTube
              className="YoutubeModal_video"
              videoId={trailer}
              opts={opts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeModal;
