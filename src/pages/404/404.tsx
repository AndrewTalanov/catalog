import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <img
            src="/src/assets/img/logo.svg"
            alt="Логотип компании"
            style={{ width: "300px", height: "auto" }}
          />
          <h1 className="mt-3">Ошибка 404</h1>
          <p className="mt-3">Запрашиваемая страница не найдена</p>
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

export default Page404;
