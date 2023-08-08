import React from "react";
import { Box } from "grommet";
import { Circles } from "react-loading-icons";

export default function Loader() {
  return (
    <Box
      align="center"
      justify="center"
      direction="row"
      gap="small"
      height="100vh"
    >
      <Circles />
      <h1>Loading...</h1>
    </Box>
  );
}
