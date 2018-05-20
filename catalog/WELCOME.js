import React from "react";
import { Page, ReactSpecimen, ImageSpecimen } from "catalog";
import { Card } from "material-ui";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import MuiTheme from "./config/theme";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },

  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

const WelcomeV2Page = ({ classes }) => (
  <MuiThemeProvider theme={MuiTheme}>
    <Page>
      <ImageSpecimen src="/logos/logo_full_black.png" plain={true} span={2} />
      MonPlan is the Monash Course Planner built for students, by students. You
      can find the following:
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        href="/branding/#/general"
      >
        <Icon className={classes.leftIcon}>language</Icon>
        Language
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        href="/branding/#/logos"
      >
        <Icon className={classes.leftIcon}>style</Icon>
        Styles
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        href="/branding/#/components/UnitCard"
      >
        <Icon className={classes.leftIcon}>extension</Icon>
        Components
      </Button>
    </Page>
  </MuiThemeProvider>
);

export default withStyles(styles)(WelcomeV2Page);
