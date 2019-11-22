import React from "react"
import ReactDOM from "react-dom"
import { SWRConfig } from "swr"
import CssBaseline from "@material-ui/core/CssBaseline"

import "typeface-roboto"

import App from "./App"
import { swrConfig } from "./swrConfig"

ReactDOM.render(
  <SWRConfig value={swrConfig}>
    <CssBaseline />
    <App />
  </SWRConfig>,
  document.getElementById("root")
)
