import { useState, ChangeEvent, FormEvent } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavigationAndSearchBar() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/cargo?filter=${inputValue}`);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg="white" expand="lg">
            <Navbar.Brand as={Link} to="/cargo">Грузы </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/cargo">Список грузов</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col>
          <div className="font-ordinary">
            <form onSubmit={handleSubmit}>
              <input
                id="text"
                name="good_item"
                type="text"
                className="search-bar"
                value={inputValue}
                onChange={handleChange}
                placeholder="Введите название товара"
              />
              <input type="submit" value="Поиск" className="search-button" />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NavigationAndSearchBar;
