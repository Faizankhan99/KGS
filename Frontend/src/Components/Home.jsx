import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData, GetData } from "../Store/Auth.action";

export default function Home() {
  const data = useSelector((store) => store.Auth.data);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetData());
  }, []);
  // console.log(data);

  function Delete(id) {
    console.log(id);
    dispatch(DeleteData(id));
    setTimeout(() => {
      dispatch(GetData());
    }, 500);
  }
  return (
    <Box>
      <Heading ml="40%" mt="20px">
        ALL Courses
      </Heading>

      {data &&
        data.map((elem) => (
          <Box mt="40px">
            <Box
              display="flex"
              border="4px solid black"
              // justifyContent="space-around"
              w="60%"
              m="auto"
              gap="20px"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            >
              <Box mt="20px" w="18%" ml="10%">
                <Image
                  name="Dan Abrahmov"
                  src={elem.imgUrl}
                  // borderRadius="90%"
                  w="100%"
                  h="80%"
                />
              </Box>
              <Box>
                <Heading as="h3" color="blue" mt="70px">
                  Rs. {elem.price}/-
                </Heading>
                <Heading as="h2" fontSize="25px">
                  {elem.description}
                </Heading>
                {/* <Text fontSize="24px">Rs. {elem.price}</Text> */}
                <Text fontSize="20px" color="#ccc">
                  {elem.duration} Duration
                </Text>
                {/* <Text>{elem.duration}Duration</Text> */}
              </Box>
              <Button
                mt="12%"
                bg="red"
                ml="20px"
                onClick={() => Delete(elem._id)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        ))}
    </Box>
  );
}

// date: "December 24, 2022";
// description: "UPSC(I.A.S) Hindi & Hinglish medium";
// duration: "10 Months Duration";
// price: "7498";
// title: "UPSC";
