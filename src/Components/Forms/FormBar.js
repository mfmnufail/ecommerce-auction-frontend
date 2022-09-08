import { useState } from "react"
import { Container, Menu } from "semantic-ui-react"
import { AccountContext } from "./accountContext"
import CreateCategory from "./CreateCategory"
import CreatProduct from "./CreatProduct"

const FormBar=()=> {
    const [activeItem,setActiveItem] = useState("")

    // const[active, setActive] = useState("product")

    // const switchToCategory=()=>{
    //   setActive("category")
    // }
  
    // const switchToProduct=()=>{
    //   setActive("product")
    // }
  
    // const contextValue = {switchToCategory,switchToProduct}
  
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