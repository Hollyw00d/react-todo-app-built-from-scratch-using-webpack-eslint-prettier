import React from "react";
import { Circles } from "react-loading-icons";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Circles />
      <h1>Loading...</h1>
    </div>
  );
}
