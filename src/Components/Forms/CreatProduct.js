import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Label,
  TextArea,
  Button,
  Form,
  Input,
  Table,
  Divider,
  Message,
  Dropdown,
  Container,
} from "semantic-ui-react";
import { createProducts } from "../../Store/Product/product-action";
import FormBar from "./FormBar";
import Product from "../Product";
import { fetchCategories } from "../../Store/Category/category-action";


const CreatProduct = () => {

 



  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");




  const dispatch = useDispatch()
  const categories = useSelector((state)=> state.category.categories)
  const options = []
  categories.forEach(e=> options.push({key:e.categoryId, text:e.categoryName,value:e.categoryId}))

  useEffect(()=>{
    dispatch(fetchCategories())
    
  },[dispatch])

 
 
  const submitHandler = (event) => {
    event.preventDefault();

  
    const data = {
      productName: productName,
      description: description,
      price:price,
      categoryId:category
    };

    console.log("product data" + JSON.stringify(data))

    
    dispatch(createProducts(data));

    // window.location.reload()
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Form Field>
          <Input
            fluid
            name="productName"
            label={`Product Name`}
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            autoComplete="off"
          />
        </Form>

        <br />
        <Form Field>
          <Input
           fluid
            name="price"
            label={`price`}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            autoComplete="off"
          />
        </Form>

        <br />

        <Form Field>
          <Dropdown
            name="category"
            label={`Product Name`}
            placeholder="Category"
            fluid
            selection
            options={options}
            onChange={(e, data) => setCategory(data.value)}
          />
        </Form>

        <br />

        <TextArea
          name="description"
          control={TextArea}
          label="Description"
          placeholder="Tell us more about the product..."
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />
        <Button primary type="submit">
          Submit
        </Button>
        {error && (
          <Message negative>
            <Message.Header>{error}</Message.Header>
          </Message>
        )}
      </Form>

      <Divider/>

      {/* <Product isAdmin={true}/> */}
    </Container>
  );
};

export default CreatProduct;
