import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import SpringModal from "./Modal";
import swal from 'sweetalert';


export default function About() {
  const firstName = info.firstName.toLowerCase();
  const lastName = info.lastName.toLowerCase();

  const ViewModal = (imgUrl) => {
    const img = document.createElement("img");
    img.src = imgUrl;

    swal({
        content: img,
        closeOnClickOutside: false,
        buttons: {
            text: "Close"
        }
      })
  }

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            mac-{firstName}
            {info.lastName.toLowerCase()} ${" "}
          </span>
          <i>
            cat about {firstName}
            {lastName}
          </i>{" "}
        </p>
        <p>
          <span className={Style.green}>
            about {firstName}
            {lastName} :
          </span>{" "}
          <br />
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            mac-{firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          <i>cd skills-tools {`&&`} ls</i>
        </p>
        {/* <p>
                <span style={{color: info.baseColor}}>skills/tools 
            <span
                className={Style.green}>(main)</span> $</span> ls
                </p> */}
        <span className={Style.green}>Skills :</span>
        {/* <p style={{color: info.baseColor}}> Skills :</p> */}
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <hr style={{ marginTop: 15, marginBottom: 20 }}/>
        <span className={Style.green}>Tools :</span>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            mac-{firstName}
            {info.lastName.toLowerCase()} $
          </span>
          <i>cd hobbies {`&&`} ls</i>
        </p>
        {/* <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p> */}
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  function miscText2() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            mac-{firstName}
            {info.lastName.toLowerCase()} $
          </span>
          <i>cd experience {`&&`} ls</i>
        </p>
        <ul>
          {info.certificate.map((certi, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {certi.num}
              </Box>
              {certi.label}
              <p>
          <span className={`${Style.green} mb3`} onClick={() => ViewModal(certi.img)}>
            View
          </span>
        </p>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={miscText2()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
