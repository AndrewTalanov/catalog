import React, { useEffect, useState } from "react";
import { Table, Form, Button } from "react-bootstrap";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: "" });
  const TOKEN = {
    KEY: sessionStorage.getItem('tokenAdmin')
  };
  const [text, setText] = useState('');
  useEffect(() => {
    fetch("http://localhost:8000/api/categories", {
      headers: {
        Authorization:
          `Bearer ${TOKEN.KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8000/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${TOKEN.KEY}`,
      },
      body: JSON.stringify(newCategory),
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories([...categories, data]);
        setNewCategory({ name: "" });
        setText('Новая категория успешно добавлена!');
      })
      .catch((error) =>
        console.error("Ошибка при добавлении новой категории:", error)
      );
  };

  const handleInputChange = (event) => {
    setNewCategory({ name: event.target.value });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/api/categories/${id}`, {
      method: "DELETE",
      headers: {
        Authorization:
          `Bearer ${TOKEN.KEY}`,
      },
    })
      .then(() => {
        setCategories(categories.filter((category) => category.id !== id));
      })
      .catch((error) => console.error("Ошибка при удалении категории:", error));
  };

  return (
    <div>
      <h1>Категории</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Удаление</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(category.id)}
                >
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Добавить категорию</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите имя категории"
            value={newCategory.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          Добавить
        </Button>
        <h6 className="mt-3">{text}</h6>
      </Form>
    </div>
  );
};

export default Category;
