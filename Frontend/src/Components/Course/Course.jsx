import { Box, Heading, Input, Textarea } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const option = {
  weekdaty: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const coursedata = {
  title: "",
  description: "",
  duration: "",
  price: "",
  date: new Date().toLocaleDateString("en-US", option),
};

export default function Course() {
  const [course, setCourse] = useState(coursedata);
  const [submit, setSubmit] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  }

  function AddBlog({ title, description, duration, price, date }) {
    return axios.post("http://localhost:8000/course", {
      title: title,
      description: description,
      duration: duration,
      price: price,
      date: date,
    });
  }

  function handlesubmit(e) {
    e.preventDefault();
    setSubmit(course);
    AddBlog(course)
      .then((res) => {
        console.log(res.data.message);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    setBlog("");
  }

  console.log(course);

  return (
    <div>
      <Box>
        <Heading as="h1" size="lg" ml="45%">
          Add Course
        </Heading>
        <Box
          border="5px solid black"
          borderRadius="20px"
          w="50%"
          m="auto"
          mt="30px"
          fontSize="20px"
          padding="20px"
        >
          <form action="" onSubmit={handlesubmit}>
            <label htmlFor="">Course Title </label>
            <Input
              placeholder="title"
              name="title"
              mt="10px"
              value={course.title}
              backgroundColor="white"
              onChange={handleChange}
            />
            <label htmlFor="">Course Description </label>

            <Textarea
              placeholder="Enter Course Description"
              mt="10px"
              name="description"
              value={course.description}
              backgroundColor="white"
              onChange={handleChange}
            ></Textarea>
            <label htmlFor="">Course Price </label>

            <Input
              placeholder="Price"
              value={course.price}
              name="price"
              mt="10px"
              backgroundColor="white"
              onChange={handleChange}
              type="number"
            />

            <label htmlFor="">Course Duration </label>

            <Input
              placeholder="Duration"
              value={course.duration}
              name="duration"
              mt="10px"
              backgroundColor="white"
              onChange={handleChange}
            />

            <Input
              type="submit"
              mt="10px"
              bgColor="Brown"
              fontSize="20px"
              color="white"
            />
          </form>
        </Box>
      </Box>
    </div>
  );
}
