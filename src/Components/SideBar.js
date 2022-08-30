import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Label, Menu } from "semantic-ui-react";

const SideBar = (props) => {
  const [activeItem, setActiveItem] = useState("");

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }

  return (
    <Menu
      
      floated
      stackable
      style={{ height: "100vh" }}
      icon="labeled"
      vertical
      color="blue"
    >
      <Link to="/dashboard">
        <Menu.Item
          name="dashboard"
          active={activeItem === "dashboard"}
          onClick={handleItemClick}
        >
          <Icon name="th" />
          Dashboard
        </Menu.Item>
      </Link>

      <Link to="/lists">
        <Menu.Item
          name="lists"
          active={activeItem === "lists"}
          onClick={handleItemClick}
        >
          <Icon name="tag" />
          Lists
        </Menu.Item>
      </Link>

      <Link to="/orders">
        <Menu.Item
          name="orders"
          active={activeItem === "orders"}
          onClick={handleItemClick}
        >
          <Icon name="list alternate" />
          Orders
        </Menu.Item>
      </Link>

      <Link to="/account">
        <Menu.Item
          name="account"
          active={activeItem === "account"}
          onClick={handleItemClick}
        >
          <Icon name="user circle" />
          Account
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default SideBar;
