import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, Icon, Image, Label, Placeholder } from 'semantic-ui-react'

const Product = ({isAdmin}) => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:8080/api/product").then((response)=>{
   
        setProducts(response.data)
        console.log("Response from products " + JSON.stringify(response.data))
         
    })
  
    },[])


  return (
    <Card.Group doubling itemsPerRow={6} stackable>
    {products.map((product) => (
      <Card key={product.id}>
       
          <Image src="https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/uploads/2015/08/syscologopromojpyjpgcropdisplayjpgcropdisplay_0.jpg?itok=axR-G0C9" />

        <Card.Content>
          
            <>
              <Card.Header>{product.productName}</Card.Header>
              <Card.Meta>{product.price}</Card.Meta>
              <Card.Meta>{product.category}</Card.Meta>
              <Card.Description>{product.description}</Card.Description>
          
            </>
         
        </Card.Content>

        <Card.Content extra>

          { !isAdmin &&
          <>
       

          <Button as='div' labelPosition='right'>
      <Button color='linkedin'  >
        
        Cart
      </Button>
      <Label as='a' basic   color='linkedin' pointing='left'>
      <Icon name='cart arrow down' />
      </Label>
    </Button>
          </>
          
          
          }
         { isAdmin && <Button color='google plus'>Delete</Button>}
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
  )
}

export default Product