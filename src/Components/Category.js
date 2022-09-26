import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from 'semantic-ui-react'
import { deleteCategories, fetchCategories } from '../Store/Category/category-action';

const Category = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state)=> state.category.categories)

  
    useEffect(()=>{
      dispatch(fetchCategories())
    },[dispatch])

    function deleteHandler(id){
      dispatch(deleteCategories(id))
  }

  return (
    <Card.Group>
        {categories && categories.map(e=>(

            <Card>
            <Card.Content>
                <Card.Header>{e.categoryName}</Card.Header>
                <Card.Meta>Category</Card.Meta>
            </Card.Content>
            <Button onClick={()=>deleteHandler(e.categoryId)} color='google plus'>Delete</Button>
            </Card>


        ))


        }
    </Card.Group>
  )
}

export default Category