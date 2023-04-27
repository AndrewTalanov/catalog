import React, { useEffect, useState } from "react";
import { Table, Form, Button, Modal, InputGroup } from "react-bootstrap";

interface Product {
  id?: number;
  description: string;
  images: string[];
  price: number;
  name: string;
  categoryId: number;
}
const TOKEN = {
  KEY: sessionStorage.getItem('tokenAdmin')
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [productData, setProductData] = useState<Product>({
    description: "",
    images: [""],
    price: 200,
    name: "",
    categoryId: 21,
  });
  useEffect(() => {
    fetch("http://localhost:8000/api/products", {
      headers: {
        Authorization:
          `Bearer ${TOKEN.KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.product);
      })
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value, images: [""] });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      let postResponse: number = 0;

      await fetch("http://localhost:8000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN.KEY}`,
        },
        body: JSON.stringify(productData),
      })
        .then((response) => response.json())
        .then((data) => (postResponse = data));

      console.log(productData);
      console.log(postResponse);

      const dataToSend = {
        ...productData,
        categoryId: parseInt(productData.categoryId),
        price: parseFloat(productData.price),
      };

      const putResponse = await fetch(
        `http://localhost:8000/api/products/${postResponse}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN.KEY}`,
          },
          body: JSON.stringify(dataToSend),
        }
      );

      console.log(dataToSend);
      console.log(putResponse);

      if (putResponse.ok) {
        console.log("Продукт успешно создан и обновлен");
        // Обновляем список продуктов
        const response = await fetch("http://localhost:8000/api/products", {
          headers: {
            Authorization:
              `Bearer ${TOKEN.KEY}`,
          },
        });
        const data = await response.json();
        setProducts(data.product);
      } else {
        console.error("Ошибка при обновлении продукта");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN.KEY}`,
        },
      });
      if (response.ok) {
        setProducts(products.filter((product) => product.id !== id));
      } else {
        console.error("Ошибка при удалении продукта");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div>
      <h1 className="mb-3">Товары</h1>
      <h2 className="mb-3">Список товаров</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Категория</th>
            <th>Удаление</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.categoryId}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2 className="mb-3">Добавить товар</h2>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Название</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите название товара"
            name="name"
            value={productData.name}
            className="mb-3"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Label>Цена</Form.Label>
        <Form.Control
          className="mb-3"
          type="number"
          placeholder="Введите цену товара"
          name="price"
          value={Number(productData.price)}
          onChange={handleInputChange}
        />
        <Form.Group controlId="formDescription">
          <Form.Label>Описание</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Введите описание товара"
            name="description"
            value={productData.description}
            className="mb-3"
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* <Form.Group controlId="formImages">
          <Form.Label>Изображения</Form.Label>
          <Form.Control
            type="text"
            placeholder="Изображения товара"
            name="images"
            value={productData.images.join(",")}
            className="mb-3"
            onChange={() => handleInputChange}
          />
        </Form.Group> */}
        <Form.Group controlId="formCategoryId">
          <Form.Label>Категория</Form.Label>
          <Form.Control
            className="mb-3"
            type="number"
            placeholder="Введите ID категории товара"
            name="categoryId"
            value={productData.categoryId}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Создать
        </Button>
      </Form>
    </div>
  );
};

export default Products;
