import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import swal from "sweetalert";

function PortfolioBlock(props) {
  const { image, live, source, title } = props;

  const alertModal = (msg) => {
    swal({
      icon: "warning",
      title: msg,
      button: "Close",
    });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        component={"img"}
        width={300}
        style={{ marginTop: 20, borderRadius: 15 }}
        src={image}
        alt={"mockup"}
      />
      <h1 style={{ fontSize: "2rem", marginTop: 10 }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          {live ? (
            <IconLink link={live} title={"View"} icon={"fa fa-eye"} />
          ) : (
            <a onClick={() => alertModal("Preview Not Availabe")}>
              <i className="fa fa-close" /> View
            </a>
          )}
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
         {
            source ?
            <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} /> :
            <a onClick={() => alertModal("Source Code Is Private")}>
              <i className="fa fa-close" /> Source Code
            </a>
         }
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
