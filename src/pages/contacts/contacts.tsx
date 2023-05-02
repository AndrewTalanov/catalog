import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/src/assets/img/logo.svg";
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";

const Contacts = () => {
  const [cart, setCart] = useState<number[]>([]);
  return (
    <Container>
      <div className="wrapper">
        <Navigation />
      </div>
      <div className="wrapper">
        <Header cart={cart} setCart={setCart} />
      </div>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6} className="text-center">
          <img
            src={logo}
            alt="Логотип компании"
            style={{ width: "300px", height: "auto" }}
          />
          <h1 className="mt-3">Наши контакты</h1>
          <p className="mt-3">
            Если у вас есть какие-либо вопросы или предложения, свяжитесь с нами
            любым удобным для вас способом:
          </p>
          <ul className="list-unstyled mt-3">
            <li>Email: sultan@gmail.com</li>
            <li>Телефон: +7 (999) 123-45-67</li>
            <li>Адрес: г. Москва, ул. Тверская, д. 1</li>
          </ul>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/">
              <Button
                variant="warning"
                style={{ backgroundColor: "#FFC85E", borderColor: "#FFC85E" }}
              >
                На главную
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
