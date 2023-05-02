import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/src/assets/img/logo.svg";
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";

const AboutCompany = () => {
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
            <Row className="mt-5 justify-content-center">
                <Col xs={12} md={8} lg={6} className="d-flex justify-content-center flex-column align-items-center">
                    <img
                        className=""
                        src={logo}
                        alt="Логотип компании"
                        style={{ width: "300px", height: "auto" }}
                    />
                    <h1 className="mt-5">СУЛТАН — ЭТО СТИЛЬ ЖИЗНИ</h1>
                    <p className="mt-2 text-center">
                        Для ухоженности и прекрасного настроения каждому необходима косметика для волос, для тела, купить которую Вы можете в нашем магазине. Для тех, кто любит красоту, стремимся предоставить лучшую продукцию, услуги и консультации для наших клиентов.
                    </p>
                    <h2 className="mt-5">ТОЛЬКО ЛУЧШИЕ БРЕНДЫ</h2> 
                    <p className="mt-2 text-center">
                        Мы работаем с такими компаниями: Шарм Дистрибьюторс, Дентал Бьюти Дистрибьюшен, НеоБьюти, AUTHENTICA, Aldo Coppola и др. Ассортимент нашего магазина постоянно расширяется. Линии, которые представлены у нас, имеют самый широкий выбор средств.
                    </p>
                    <h2 className="mt-5">УНИКАЛЬНЫЙ ПОДХОД</h2> 
                    <p className="mt-2 mb-5 text-center">
                        Накопительная система скидок постоянным покупателям! <br />
                        Независимо от того, где вы живете, наши консультанты всегда рады Вам помочь в выборе средств, по телефону, понедельник-пятница с 10:00-19:00 (по московскому времени).<br />
                        Всегда в наличии, минимальные сроки доставки, доступные цены.<br />
                        Обслуживаем клиентов из самых разных регионов России, и гордимся нашими клиентами.<br />
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutCompany;