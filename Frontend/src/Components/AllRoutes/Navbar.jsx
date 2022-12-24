import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LogoutUser } from "../../Store/Auth.action";
import style from "../All.module.css";

export default function Navbar() {
  const token = useSelector((store) => store.Auth.token);
  const dispatch = useDispatch();

  const links = [
    { title: "Home", to: "/", id: 1 },
    { title: "Login", to: "/login", id: 2 },
    { title: "Signup", to: "/signup", id: 3 },
    { title: "AddCourse", to: "/course", id: 3 },
  ];

  function Logout() {
    dispatch(LogoutUser());
  }

  return (
    <Box className={style.nav_main}>
      <Box className={style.b}>
        {links.map((elem) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.default
            }
            to={elem.to}
          >
            {elem.title}
          </NavLink>
        ))}
        <Button mt="5px" onClick={Logout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
}
