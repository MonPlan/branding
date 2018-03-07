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
    title="monPlan Brand"
    pages={pages}
    theme={Theme}
    logoSrc={"/logos/logo-black-hd.png"}
  />,
  document.getElementById("catalog")
);
