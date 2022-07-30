import {AppBar, Grid, Toolbar, Typography} from '@mui/material';
import flLogo from  "../../assets/fl_logo.svg";

export const NavBar = () => (
  <AppBar>
    <Toolbar>
      <Grid container gap={3}>
        <Grid item>
          <img src={flLogo} className="logo" alt="FetLife logo" />
        </Grid>
        <Grid item>
          <Typography>Thing 1</Typography>
        </Grid>
        <Grid item>
          <Typography>Thing 2</Typography>
        </Grid>
        <Grid item>
          <Typography>Thing 3</Typography>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);
