import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import CardDeck from 'react-bootstrap/CardDeck'





function Staff() {
    return (

        <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>

//  <CardDeck>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
// // </CardDeck>


       
        // <div className='container'>
        // <div className="row row-cols-1 row-cols-md-4 g-4">
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        //         <Card.Body>
        //             <Card.Title>Card Title</Card.Title>
        //             <Card.Text>
        //             Some quick example text to build on the card title and make up the bulk of
        //             the card's content.
        //             </Card.Text>
        //         </Card.Body>
        //         <ListGroup className="list-group-flush">
        //             <ListGroupItem>Cras justo odio</ListGroupItem>
        //             <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        //             <ListGroupItem>Vestibulum at eros</ListGroupItem>
        //         </ListGroup>
        //         <Card.Body>
        //             <Card.Link href="#">Card Link</Card.Link>
        //             <Card.Link href="#">Another Link</Card.Link>
        //         </Card.Body>
        //         </Card>


        //         <div className="col">
        //         <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        //         <Card.Body>
        //             <Card.Title>Card Title</Card.Title>
        //             <Card.Text>
        //             Some quick example text to build on the card title and make up the bulk of
        //             the card's content.
        //             </Card.Text>
        //         </Card.Body>
        //         <ListGroup className="list-group-flush">
        //             <ListGroupItem>Cras justo odio</ListGroupItem>
        //             <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        //             <ListGroupItem>Vestibulum at eros</ListGroupItem>
        //         </ListGroup>
        //         <Card.Body>
        //             <Card.Link href="#">Card Link</Card.Link>
        //             <Card.Link href="#">Another Link</Card.Link>
        //         </Card.Body>
        //         </Card>

        //         <div className="col">
        //         <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        //         <Card.Body>
        //             <Card.Title>Card Title</Card.Title>
        //             <Card.Text>
        //             Some quick example text to build on the card title and make up the bulk of
        //             the card's content.
        //             </Card.Text>
        //         </Card.Body>
        //         <ListGroup className="list-group-flush">
        //             <ListGroupItem>Cras justo odio</ListGroupItem>
        //             <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        //             <ListGroupItem>Vestibulum at eros</ListGroupItem>
        //         </ListGroup>
        //         <Card.Body>
        //             <Card.Link href="#">Card Link</Card.Link>
        //             <Card.Link href="#">Another Link</Card.Link>
        //         </Card.Body>
        //         </Card>

        //         <div className="col">
        //         <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        //         <Card.Body>
        //             <Card.Title>Card Title</Card.Title>
        //             <Card.Text>
        //             Some quick example text to build on the card title and make up the bulk of
        //             the card's content.
        //             </Card.Text>
        //         </Card.Body>
        //         <ListGroup className="list-group-flush">
        //             <ListGroupItem>Cras justo odio</ListGroupItem>
        //             <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        //             <ListGroupItem>Vestibulum at eros</ListGroupItem>
        //         </ListGroup>
        //         <Card.Body>
        //             <Card.Link href="#">Card Link</Card.Link>
        //             <Card.Link href="#">Another Link</Card.Link>
        //         </Card.Body>
        //         </Card>
            
        // </div>
        // </div>
        // </div>
        // </div>
        // </div>
    )
}

export default Staff
