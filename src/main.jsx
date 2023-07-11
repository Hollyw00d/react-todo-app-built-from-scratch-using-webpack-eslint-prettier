import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Grommet } from "grommet";
import { hacktoberfest2022 } from "grommet/themes";

import { App } from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Grommet theme={hacktoberfest2022}>
      <App />
    </Grommet>
  </StrictMode>
);
