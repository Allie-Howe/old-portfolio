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
          <Typography>Home</Typography>
        </Grid>
        <Grid item>
          <Typography>Groups</Typography>
        </Grid>
        <Grid item>
          <Typography>Events</Typography>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);
