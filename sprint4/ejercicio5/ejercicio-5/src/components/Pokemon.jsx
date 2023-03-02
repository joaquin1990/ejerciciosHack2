import Card from "react-bootstrap/Card";

function Pokemon({ title, image, type, id }) {
  return (
    <Card style={{ width: "12rem" }} className="m-2 bg-light">
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image} />
        <Card.Subtitle>Type: {type}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;
