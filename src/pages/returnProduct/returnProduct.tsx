import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/src/assets/img/logo.svg";
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";

const ReturnProduct = () => {
  return (
    <Container>
      <div className="wrapper">
        <Navigation />
      </div>
      <div className="wrapper">
        <Header
          cart={[]}
          setCart={function (value: React.SetStateAction<number[]>): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6} className="text-center">
          <img
            src={logo}
            alt="Логотип компании"
            style={{ width: "300px", height: "auto" }}
          />
          <h1 className="mt-3">Возврат товара</h1>
          <p className="mt-3">
            Если у вас возникли проблемы с нашими продуктами, вы можете
            обратиться к нам для решения этой проблемы. Пожалуйста, напишите нам
            на почту:
          </p>
          <ul className="list-unstyled mt-3">
            <li>Email: sultan@gmail.com</li>
          </ul>
          <p className="mt-3">
            Мы ответим вам в течение 24 часов и постараемся решить вашу проблему
            как можно быстрее.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <a href="mailto:sultan@gmail.com">
              <Button
                variant="warning"
                style={{ backgroundColor: "#FFC85E", borderColor: "#FFC85E" }}
              >
                Написать нам
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReturnProduct;
