import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Divider, Form, Icon, Input, Label } from "semantic-ui-react";

import {
  creatCategories,
  fetchCategories,
} from "../../Store/Category/category-action";
import Category from "../Category";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  // const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault();
 
    const data={
      categoryName:categoryName
    }
    console.log("Category data" + JSON.stringify(data))
    creatCategories(data)
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Input
          placeholder="category"
          onChange={(e) => setCategoryName(e.target.value)}
          style={{ width: "90%" }}
        />

        <Button primary type="submit">
          Submit
        </Button>
      </Form>
      <Divider/>
      <Category/>
    </div>
  );
};

export default CreateCategory;
