import { Box, Button, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AccountCircle } from "@material-ui/icons";
import CancelIcon from "@material-ui/icons/Cancel";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../features/Auth/userSlice";
import Login from "../../features/components/login/login";
import Register from "../../features/components/register/index";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: "3rem"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  navlink: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    margin: "0 5px",
    textDecoration: "none"
  },
  btn_clode_dialog: {
    position: "absolute",
    top: "4px",
    right: "4px"
  },
  cancelIcon: {
    color: "red"
  }
}));

const MODE = {
  LOGIN: "login",
  REGISTER: "register"
};

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const stateLogin = useSelector((state) => state.user.currentUser);
  const isLogin = !!stateLogin.id;
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickProfile = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorEl(null);
  };

  const handleUserLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link className={classes.navlink} to="/">
              {" "}
              K3 School{" "}
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink className={classes.navlink} activeClassName="nav_active" to="/todos">
              Todos
            </NavLink>

            <NavLink className={classes.navlink} activeClassName="nav_active" to="/albums">
              Albums
            </NavLink>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
          {isLogin && (
            <div>
              <IconButton color="inherit" onClick={handleClickProfile}>
                <AccountCircle />
              </IconButton>
            </div>
          )}
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            getContentAnchorEl={null}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseProfile}
          >
            <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
            <MenuItem onClick={handleCloseProfile}>My account</MenuItem>
            <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
          </Menu>

          {!isLogin && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          {mode === MODE.LOGIN && (
            <>
              <Login closeDislog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have account. Register now !
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.REGISTER && (
            <>
              <Register closeDislog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already account. Login now !
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
        <IconButton onClick={handleClose} className={classes.btn_clode_dialog}>
          <CancelIcon className={classes.cancelIcon}></CancelIcon>
        </IconButton>
      </Dialog>
    </div>
  );
}
