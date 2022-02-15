import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Detail from './page/book/Detail';
import Home from './page/book/Home';
import SaveForm from './page/book/SaveForm';
import UpdateForm from './page/book/UpdateForm';
import JoinForm from './page/user/JoinForm';
import LoginForm from './page/user/LoginForm';
function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/saveForm" element={<SaveForm />}></Route>
          <Route path="/book/:id" element={<Detail />}></Route>
          <Route path="/loginForm" element={<LoginForm />}></Route>
          <Route path="/joinForm" element={<JoinForm />}></Route>
          <Route path="/updateForm/:id" element={<UpdateForm />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
