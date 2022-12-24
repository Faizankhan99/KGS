import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "../All.module.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginData } from "../../Store/Auth.action";
import { useSelector, useDispatch } from "react-redux";

const user = {
  email: "",
  password: "",
};

export default function Login() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(user);
  const [submit, setSubmit] = useState();
  const token = useSelector((store) => store.Auth.token);
  const dispatch = useDispatch();
  console.log(token);
  const navigate = useNavigate();

  function handle() {
    setShow(!show);
  }

  function handleform(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handlesubmit(e) {
    e.preventDefault();
    // setSubmit(data);
    dispatch(LoginData(data));
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  console.log(data);
  return (
    <Box>
      <Heading marginLeft="45%">LOGIN</Heading>
      <Box w="40%" m="auto" mt="20px" border="5px solid red" fontSize="25px">
        <form action="" className={style.form} onSubmit={handlesubmit}>
          <label htmlFor="">Email </label>
          <Input
            placeholder="Basic usage"
            mt="10px"
            name="email"
            value={data.email}
            type="email"
            onChange={handleform}
            bgColor="white"
            borderBottom="2px solid black"
          />
          <label htmlFor="">Password</label>
          <InputGroup>
            <Input
              name="password"
              value={data.password}
              mt="10px"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={handleform}
              bgColor="white"
              borderBottom="2px solid black"
            />
            <InputRightElement width="4.5rem" mt="10px">
              <Button h="1.75rem" size="sm" onClick={handle}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Input
            type="submit"
            id=""
            mt="10px"
            bgColor="blue"
            color="white"
            fontSize="20px"
          />
        </form>
      </Box>
    </Box>
  );
}
