import { createMuiTheme } from "@material-ui/core/styles";

import COLORS from "../constants/COLORS";

const theme = createMuiTheme({
  palette: {
    primary: COLORS.PRIMARY,
    secondary: COLORS.SECONDARY,
    error: COLORS.ERROR,
    success: COLORS.SUCCESS
  },
  // define custom theme props here
  custom: {
    palette: {
      facultyColors: COLORS.FACULTY,
      misc: COLORS.MISC
    }
  },
  // try to avoid using this unless absolutely necessary!
  // it will apply changes to ALL components
  overrides: {}
});

export default theme;
