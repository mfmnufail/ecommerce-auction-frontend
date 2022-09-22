import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CreateCategory from "./CreateCategory";
import CreatProduct from "./CreatProduct";

const FormBar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (event, { name }) => {
    event.preventDefault();
    setActiveItem(name);
  }

  return (
    <Container>
      <Menu color="grey" widths={2}>
        <Menu.Item
          name="product"
          active={activeItem === "product"}
          onClick={handleItemClick}
        />

        <Menu.Item
          name="category"
          active={activeItem === "category"}
          onClick={handleItemClick}
        />
      </Menu>

      {activeItem === "category" && <CreateCategory />}
      {activeItem === "product" && <CreatProduct />}
    </Container>
  );
};

export default FormBar;
