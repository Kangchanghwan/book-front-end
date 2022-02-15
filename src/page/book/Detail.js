import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Detail = (props) => {
  const { id } = useParams();
  const nav = useNavigate();
  const [book, setBook] = useState({ id: 0, title: '', author: '' });
  useEffect(() => {
    fetch('http://localhost:8080/book/' + id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBook(res);
      });
  }, []);
  const deleteOnClick = () => {
    fetch('http://localhost:8080/book/' + id, {
      method: 'DELETE',
    })
      .then((res) => console.log('res1', res))
      .then((res) => {
        console.log('res2', res);
        nav('/');
      });
  };

  return (
    <div>
      <h1>번호 : {book.id}</h1>
      <h1>제목 : {book.title}</h1>
      <h2>저자 : {book.author}</h2>
      <Link to={'/updateForm/' + book.id}>
        <Button variant="info">수정</Button>
      </Link>
      <Button onClick={deleteOnClick} variant="warning">
        삭제
      </Button>
    </div>
  );
};

export default Detail;
