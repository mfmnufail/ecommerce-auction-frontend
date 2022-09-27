import React from 'react'
import { Container, Header, Image, Table } from 'semantic-ui-react'

const Cart = () => {
  return (
    <Container>

    <Table style={{"width":"90%"}} size='large' basic="very" columns={4}  celled collapsing padded>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell>Item Details</Table.HeaderCell>
        <Table.HeaderCell>Order Qty</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Total</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/uploads/2015/08/syscologopromojpyjpgcropdisplayjpgcropdisplay_0.jpg?itok=axR-G0C9' rounded size='mini' />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
      </Table.Body>
  </Table>
    </Container>
  )
}

export default Cart