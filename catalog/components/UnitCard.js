import React from "react";
import { Page, ReactSpecimen } from "catalog";
import { Card, MuiThemeProvider } from "material-ui";
import { CardText } from "material-ui/Card";
export default () => (
  <Page>
    <MuiThemeProvider>
      <Card>
        <CardText>Test</CardText>
      </Card>
    </MuiThemeProvider>
  </Page>
);
