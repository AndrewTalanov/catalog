import React, { useEffect, useState } from "react"; // Импортируем хук useState
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "./components/Products";
import Category from "./components/Category";
import { URL } from "../../URL";

function AdminHomePage() {
  const [openBlock, setOpenBlock] = useState("");

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(URL.DOMEN + URL.PROFILE, {
      headers: {
        Authorization:
          `Bearer ${sessionStorage.getItem('tokenAdmin')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  function handleBlockClick(block: string) {
    setOpenBlock(block);
  }

  return (
    <div>
      <header className="bg-warning py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <Link
            to="/"
            className="text-decoration-none text-white d-flex align-items-center"
          >
            <img
              src="/src/assets/img/logo.svg"
              alt="Логотип компании"
              className="mr-3"
              style={{ height: "50px" }}
            />
          </Link>
          <h4 className="ml-3 text-dark text-center mb-0">Админ</h4>
          <Link
            to="/admin/login"
          >
            <Button variant="light" className="text-warning">
              Выйти
            </Button>
          </Link>
        </Container>
      </header>

      <Container className="py-5">
        <Row>
          <Col md={9}>
            <Card>
              <Card.Body>
                <h5>Добро пожаловать в админ-панель</h5>
                <p className="mb-2">
                  Выберите один из разделов в левой навигации, чтобы начать
                  работу.
                </p>
                {openBlock === "Товары" && (
                  <div>
                    <Products />
                  </div>
                )}
                {openBlock === "Категории" && (
                  <div>
                    <Category />
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      src="https://via.placeholder.com/64"
                      alt="Profile"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-0">{user.name}</h5>
                    <p className="text-muted mb-0">{user.email}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h5 className="mb-3">Навигация</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-decoration-none btn btn-link w-100 text-start"
                      onClick={() => handleBlockClick("Товары")} // Добавляем обработчик клика на Товары
                    >
                      Товары
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none btn btn-link w-100 text-start"
                      onClick={() => handleBlockClick("Категории")}
                    >
                      Категории
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminHomePage;
