import { useState } from "react"
import { Container, Menu } from "semantic-ui-react"
import CreateCategory from "./CreateCategory"
import CreatProduct from "./CreatProduct"

const FormBar=()=> {
    const [activeItem,setActiveItem] = useState("")

  
    const handleItemClick = (e, { name }) => setActiveItem(name)
  

  
      return (
        <Container>
        <Menu color="grey"   widths={2}>
          <Menu.Item
            name='product'
            active={activeItem === 'product'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='category'
            active={activeItem === 'category'}
            onClick={handleItemClick}
          />
         
        </Menu>

       
          
            {activeItem === "product" && <CreatProduct/>}
            {activeItem === "category" && <CreateCategory/>}

          
          


        </Container>
      )
    
  }

  export default FormBar;