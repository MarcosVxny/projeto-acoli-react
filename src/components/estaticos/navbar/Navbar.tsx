import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";
import { addToken } from "../../../store/tokens/actions";
import { Box } from "@mui/material";
import "./Navbar.css";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
    navigate("/login");
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent = (
      <div className="navbar">
        <AppBar className="bg-menu">
          <Toolbar variant="dense" className="container-menu">
            <Box style={{ cursor: "pointer" }}>
              <a href="/home">
                <img
                  className="menu-logo"
                  src="./src/assets/logoAcoli.svg"
                  alt="Logo"
                />
              </a>
            </Box>

            <div>
              <Box className="menu-links" display="flex">
                <Link to="/home" className="link-home">
                  <Box className="menu-item" mx={2}>
                    <Typography variant="h6" color="inherit">
                      home
                    </Typography>
                  </Box>
                </Link>

                <Link to="/posts">
                  <Box className="menu-item" mx={2}>
                    <Typography variant="h6" color="inherit">
                      postagens
                    </Typography>
                  </Box>
                </Link>

                <Link to="/temas">
                  <Box className="menu-item" mx={2}>
                    <Typography variant="h6" color="inherit">
                      temas
                    </Typography>
                  </Box>
                </Link>

                <Link to="/formularioTema">
                  <Box className="menu-item" mx={2}>
                    <Typography variant="h6" color="inherit">
                      cadastrar tema
                    </Typography>
                  </Box>
                </Link>

                <Link to="/login" className="link-logout">
                  <Box className="menu-item" mx={2}>
                    <Typography variant="h6" color="inherit" onClick={goLogout}>
                      logout
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}
export default Navbar;

