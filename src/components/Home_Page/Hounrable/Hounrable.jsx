import { Box, Typography, styled } from "@mui/material";
import React from "react";

import hounrable from "../../../constant/hounrable";
import { Container } from "./style";

const Hounrable = () => {
  return (
    <Container>
      {hounrable.map((item, id) => (
        <Box key={id}>
          <img src={item.img} alt="" />
          <Typography>{item.name}</Typography>
        </Box>
      ))}
    </Container>
  );
};

export default Hounrable;
