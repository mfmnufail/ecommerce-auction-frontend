import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Input,
  Label,
  Rating,
  Table,
} from "semantic-ui-react";
import { useQurey } from "../Hooks/queryHook";
import {
  fetchProducts,
  fetchProductsByCategories,
} from "../Store/Product/product-action";

const Lists = () => {
  const [quantity, setQuantity] = useState(1);

  const [categoryId, setCategoryId] = useState(null);
  const query = useQurey();

  const productsByCategory = useSelector(
    (state) => state.product.productsByCategory
  );

  const products = useSelector((state) => state.product.products);

  const showProducts = categoryId ? productsByCategory : products;

  console.log("products" + JSON.stringify(products));
  console.log("products by category" + JSON.stringify(productsByCategory));

  console.log(quantity)

  const dispatch = useDispatch();

  useEffect(() => {
    setCategoryId(query.get("categoryId"));
    dispatch(fetchProducts());
    dispatch(fetchProductsByCategories(categoryId));
  }, [dispatch,showProducts]);
  return (
    <Container>
      <Table
        style={{ width: "100%" }}
        size="large"
        columns={6}
        celled
        collapsing
        padded
      >
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Item Details</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Order Qty</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Add to Cart</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {showProducts.map((product) => (
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/uploads/2015/08/syscologopromojpyjpgcropdisplayjpgcropdisplay_0.jpg?itok=axR-G0C9"
                    rounded
                    size="mini"
                  />
                  <Header.Content>
                    {product.productName}
                    <Header.Subheader>
                      {product.category.categoryName}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{product.description}</Table.Cell>
              <Table.Cell>
                {" "}
                <Input
                  
                  key={product.productId}
                  onChange={(e) => setQuantity(e.target.value)}
                  transparent
                  placeholder="Quantity"
                />
              </Table.Cell>
              <Table.Cell key={product.productId}>{product.price}</Table.Cell>
              <Table.Cell key={product.productId}>{quantity * product.price}</Table.Cell>
              <Table.Cell>
                {" "}
                <Button as="div" labelPosition="right">
                  <Button color="linkedin">Cart</Button>
                  <Label as="a" basic color="linkedin" pointing="left">
                    <Icon name="cart arrow down" />
                  </Label>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default Lists;
