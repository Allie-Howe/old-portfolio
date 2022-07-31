import {AppBar, Grid, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import flLogo from  "../../assets/fl_logo.svg";

export const NavBar = () => (
  <AppBar>
    <Toolbar>
      <Grid container gap={3}>
        <Grid item>
          <Link to="/">
          <img src={flLogo} className="logo" alt="FetLife logo" />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/">
            <Typography>Home</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/groups">
            <Typography>Groups</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/events">
            <Typography>Events</Typography>
          </Link>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);
