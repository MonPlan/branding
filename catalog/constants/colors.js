import { Faculty } from "./faculty";

const COLORS = {
  PRIMARY: {
    light: "#2682b8",
    main: "#006cab",
    dark: "#00599a",
    contrastText: "#fff"
  },
  SECONDARY: {
    light: "#898989",
    main: "#565656",
    dark: "#454545",
    contrastText: "#fff"
  },
  ERROR: {
    light: "#e57373",
    main: "#f44336",
    dark: "#d32f2f",
    contrastText: "#fff"
  },
  SUCCESS: {
    main: "#4caf50"
  },
  FACULTY: {
    [Faculty.ADA]: "#455a64",
    [Faculty.ART]: "#b71c1c",
    [Faculty.BUS]: "#00bcd4",
    [Faculty.EDU]: "#b81b60",
    [Faculty.ENG]: "#ff9800",
    [Faculty.FIT]: "#7b1fa2",
    [Faculty.LAW]: "#776c55",
    [Faculty.MHS]: "#2196f3",
    [Faculty.PHA]: "#7c8500",
    [Faculty.SCI]: "#009688",
    default: "#006dae"
  },
  MISC: {
    footer: "#2e2e2e",
    warning: "#c3185a",
    beta: "#ffb300",
    success: "#4caf50",
    softBackground: "#dddddd",
    monashBlue: "#006dae"
  }
};

export default COLORS;
