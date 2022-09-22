import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react'
import { fetchCategories } from '../Store/Category/category-action';

const Category = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state)=> state.category.categories)

  
    useEffect(()=>{
      dispatch(fetchCategories())
    },[dispatch])

  return (
    <Card.Group>
        {categories && categories.map(e=>(

            <Card>
            <Card.Content>
                <Card.Header>{e.categoryName}</Card.Header>
                <Card.Meta>Category</Card.Meta>
            </Card.Content>
            </Card>

        ))

        }
    </Card.Group>
  )
}

export default Category