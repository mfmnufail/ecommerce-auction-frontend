import React, { useState } from "react";
import { Form, Input } from "semantic-ui-react";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      categoryName: categoryName,
    };

    // dispatch(createProducts(data));

    window.location.reload();
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form Field>
          <Input
            fluid
            icon="tags"
            iconPosition="left"
            label={{ tag: true, content: "Add Category" }}
            labelPosition="right"
            placeholder="Enter category"
            autoComplete="off"
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Form>
      </Form>
    </div>
  );
};

export default CreateCategory;
