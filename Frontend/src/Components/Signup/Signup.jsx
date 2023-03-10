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

const user = {
  name: "",
  email: "",
  password: "",
};

export default function Signup() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(user);
  const [submit, setSubmit] = useState();
  const [api, setAPi] = useState({});
  const navigate = useNavigate();

  function blogdata(data) {
    return axios.post(`http://localhost:8000/user/signup`, data);
  }

  function handle() {
    setShow(!show);
  }

  function handleform(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handlesubmit(e) {
    e.preventDefault();
    setSubmit(data);
    blogdata(data)
      .then((res) => {
        console.log(res.data);
        setAPi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (api.status == true) {
      navigate("/");
    }
  }, [api]);

  return (
    <Box>
      <Heading marginLeft="45%">SIGNUP</Heading>
      <Box w="40%" m="auto" mt="20px" border="5px solid red" fontSize="25px">
        <form action="" className={style.form} onSubmit={handlesubmit}>
          <label htmlFor="">Name </label>
          <Input
            placeholder="Basic usage"
            value={data.name}
            name="name"
            // type="text"
            mt="10px"
            backgroundColor="white"
            onChange={handleform}
            borderBottom="2px solid black"
          />
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
