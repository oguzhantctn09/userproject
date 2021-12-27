import React from 'react';
import { Button, Card} from "react-bootstrap";

function Cards() {
  const setReadMore = () => {
    alert('Farklı Pathe gidecek');
  };
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/bilgi-teknolojileri.jpg" />
        <Card.Body>
          <Card.Title>INFO TECH</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Card.Text>
            <Button onClick={setReadMore} variant="primary">READ MORE</Button>
          </Card.Body>
      </Card>
    </>
  )
}
export default Cards;