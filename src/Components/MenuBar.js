import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, Icon, Label, Menu } from "semantic-ui-react";

const MenuBar = () => {
  return (
    <Menu size="massive">
      <Menu.Item>
        <img
          alt="logo"
          src="https://www.sysco.com/dam/jcr:2ed25439-a58a-41d2-8306-dcf3761c7d95/Sysco-Logo-Color1.png"
        />

        <Label as="a" basic color="blue" pointing="left">
          Shop
        </Label>
      </Menu.Item>

      <Link to="/admin">
        <Menu.Item
          position="right"
          name="features"
          //   active={activeItem === 'features'}
          //   onClick={handleItemClick}
        >
          <Button color="google plus">
            <Icon name="user secret" /> Admin
          </Button>
        </Menu.Item>
      </Link>

      <Menu.Item
        position="right"
        name="features"
        //   active={activeItem === 'features'}
        //   onClick={handleItemClick}
      >
        <Input
          icon={{ name: "search", circular: true }}
          placeholder="Search..."
        />
      </Menu.Item>


      <Link to="/cart">
        <Menu.Item>
          <Button
            color="linkedin"
            icon="cart arrow down"
            label={{
              basic: true,
              color: "linkedin",
              pointing: "left",
              content: "0",
            }}
          />
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default MenuBar;
