import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SaveForm = (props) => {
  const [book, setBook] = useState({ title: '', author: '' });
  const nav = useNavigate();
  const onChangeHandler = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const submitBook = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        console.log('res1', res);
        if (res.status === 201) {
          return res.json();
        }
        return null;
      })
      .then((res) => {
        if (res) {
          nav('/');
        } else {
          alert('책 등록에 실패하였습니다.');
        }
        console.log('res', res);
      });
    setBook({ title: '', author: '' });
  };
  return (
    <Form onSubmit={submitBook}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={book.title}
          name="title"
          onChange={onChangeHandler}
          type="text"
          placeholder="제목을 입력하세요."
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={book.author}
          name="author"
          onChange={onChangeHandler}
          type="text"
          placeholder="저자를 입력하새요."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SaveForm;
