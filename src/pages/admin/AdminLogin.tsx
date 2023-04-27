import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { URL } from "../../URL";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();

    const user = {
      password: password,
      email: username
    }

    fetch(URL.DOMEN + URL.LOGIN, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.statusCode == 404) {
          alert(data.message);
        } else if (data.statusCode == 401) {
          alert(data.message);
        } else if (data.statusCode == 400) {
          alert(data.message);
        } else if (data.user) {
          sessionStorage.setItem('tokenAdmin', data.accessToken);
          sessionStorage.setItem('emailAdmin', data.user.email);
          window.location = '/admin/home'; 
        }
      });



  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div
        className="p-4 shadow"
        style={{ maxWidth: "350px", width: "100%", backgroundColor: "#fff" }}
      >
        <h5 className="text-center">Панель администратора</h5>
        <Form className="mt-4" onSubmit={submitForm}>
          <Form.Group controlId="username">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите имя пользователя"
              value={username}
              typeof="email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-2" controlId="password">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="warning"
            type="submit"
            style={{ backgroundColor: "#FFC85E", borderColor: "#FFC85E" }}
            className="mt-4"
          >
            Войти
          </Button>
          {showAlert && (
            <Alert className="mt-4" variant="danger">
              Неверное имя пользователя или пароль. Попробуйте еще раз.
            </Alert>
          )}
        </Form>
      </div>
    </Container>
  );
};

export default AdminLogin;
