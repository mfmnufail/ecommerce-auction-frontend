import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react'
import { useQurey } from '../Hooks/queryHook'
import { fetchCategories } from '../Store/Category/category-action'
import Product from './Product'

const Dashboard = () => {

  const dispatch = useDispatch()
  const categories = useSelector((state)=> state.category.categories)
  const navigate = useNavigate()



  const productChangeHandler = (categoryId) => {
    navigate({
      pathname: "/lists",
      search: `?categoryId=${categoryId}`,
    });
  };

  useEffect(()=>{
    dispatch(fetchCategories())
    
  },[dispatch])


  return (
     <Card.Group doubling itemsPerRow={6} stackable>
      {categories.map((category) => (
        <Card key={category.categoryId}>
          <Image src="https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/uploads/2015/08/syscologopromojpyjpgcropdisplayjpgcropdisplay_0.jpg?itok=axR-G0C9" />

          <Card.Content>
            <>
              <Card.Header>{category.categoryName}</Card.Header>
              <Card.Meta>{category.categoryName}</Card.Meta>
              <Card.Description>description</Card.Description>
            </>
          </Card.Content>

          <Card.Content extra>
           
              {/* <Link to="/lists"> */}
                <Button as="div" labelPosition="right">
                  <Button onClick={()=>productChangeHandler(category.categoryId)}  color="linkedin">List</Button>
                  <Label as="a" basic color="linkedin" pointing="left">
                    <Icon name="list" />
                  </Label>
                </Button>
              {/* </Link> */}
            
          
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )
}

export default Dashboard