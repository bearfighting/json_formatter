import { Nav } from "react-bootstrap";

function Header() {
  return (
    <Nav className="justify-content-center"
      activeKey="/Json-formatter"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/Json-formatter">Json formatter</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Header;
