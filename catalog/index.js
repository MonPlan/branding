import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import Theme from "./theme";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    path: "/general",
    title: "General",
    content: pageLoader(() => import("./GENERAL.md"))
  },
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
];

ReactDOM.render(
  <Catalog
    title="MonPlan Brand"
    pages={pages}
    theme={Theme}
    logoSrc={"/logos/logo_full_black.png"}
  />,
  document.getElementById("catalog")
);
