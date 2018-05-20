import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import Theme from "./theme";
import { MuiThemeProvider } from "material-ui";
import MuiTheme from "./config/theme";
const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.js"))
  },
  {
    title: "Language",
    pages: [
      {
        path: "/general",
        title: "General",
        content: pageLoader(() => import("./GENERAL.md"))
      },
      {
        path: "/faculty-codes",
        title: "Faculty Codes",
        content: pageLoader(() => import("./FacultyCodes.md"))
      }
    ]
  },
  {
    title: "Styles",
    pages: [
      {
        path: "/logos",
        title: "Logos",
        content: pageLoader(() => import("./LOGOS.md"))
      },
      {
        path: "/colors",
        title: "Colors",
        content: pageLoader(() => import("./COLORS.md"))
      },
      {
        path: "/typography",
        title: "Typography",
        content: pageLoader(() => import("./FONTS.md"))
      }
    ]
  },
  {
    title: "Components",
    pages: [
      {
        path: "/components/UnitCard",
        title: "UnitCard",
        content: pageLoader(() => import("./components/UnitCard.js"))
      }
    ]
  }
];

ReactDOM.render(
  <MuiThemeProvider theme={MuiTheme}>
    <Catalog
      title="MonPlan Brand"
      pages={pages}
      theme={Theme}
      logoSrc={"/logos/logo_full_black.png"}
    />
  </MuiThemeProvider>,
  document.getElementById("catalog")
);
