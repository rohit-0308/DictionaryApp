import React from "react";
import "./header.css";

import { createTheme, TextField, ThemeProvider } from "@material-ui/core";

const header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">Word Hunt</span>

      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Search" />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default header;
