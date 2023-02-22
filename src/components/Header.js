import React from "react";
import { AppBar, Toolbar } from "@mui/material";

function Header() {
  return (
    <div>
      <AppBar
        sx={{ backgroundColor: " #f5f5f5", height: "60px" }}
        position="sticky"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <h1 className="header">📝TODO APP</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
