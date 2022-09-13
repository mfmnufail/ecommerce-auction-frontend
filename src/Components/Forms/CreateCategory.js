import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Divider, Form, Icon, Input, Label } from "semantic-ui-react";
import { Categories } from "../../API/agent";
import { creatCategories, fetchCategories } from "../../Store/Category/category-action";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");




  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      categoryName: categoryName,
    };
    creatCategories(data);

    window.location.reload();
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form Field>
          <Input
            // label='Category'
            style={{ width: "90%" }}
            placeholder="Enter category"
            autoComplete="off"
            onChange={(e) => setCategoryName(e.target.value)}
          />

          <Button primary type="submit">
            Submit
          </Button>
        </Form>
      </Form>

      <Divider/>

      <Categories/>

    </div>
  );
};

export default CreateCategory;
