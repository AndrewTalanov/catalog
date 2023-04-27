import { useState, useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import { Container, Table } from "react-bootstrap";
import { URL } from "../../URL";

const OrderPage = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
      fetch(URL.DOMEN + URL.ORDER, {
        headers: {
          Authorization:
            `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setOrders(data));
    
  });

  return (
    <div className="wrapper">
      <Navigation />
      <Header cart={cart} setCart={setCart} />
      <h2 className="text-center mb-5">Мои заказы</h2>
      <Container className="d-flex justify-content-center align-items-center">
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th className="py-3">ID</th>
              <th className="py-3">Названия товаров</th>
              <th className="py-3">Цена</th>
              <th className="py-3">Статус</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  {order.items.map((item) => (
                    <div key={item.id}>{item.product.name}</div>
                  ))}
                </td>
                <td>
                  {order.items.reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                  )}{" "}
                  ₽
                </td>
                <td>{order.status == 'PENDING' ? 'В ожидании' : 'Потерялся'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default OrderPage;
