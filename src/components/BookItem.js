import React from 'react';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';
const BookItem = (props) => {
  const {
    book: { id, title, author },
  } = props;
  return (
    <Card>
      <CardHeader>
        <Card.Title>{title}</Card.Title>
        <Link to={`/book/${id}`} className="btn-sm btn-primary">
          상세보기
        </Link>
      </CardHeader>
    </Card>
  );
};

export default BookItem;
