import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const IconSelect = (unitObjects) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <Container>
      <Row>
        <Col>
          {Object.entries(unitObjects).map(([key, value]) => (
            <Button
              style={{ width: "100px", height: "100px" }}
              key={key}
              variant={selectedIcon === "beer" ? "primary" : "secondary"}
              onClick={() => handleIconClick("beer")}
            >
              {key.baseId}
              {/* <img
                src={x.icon}
                style={{ width: "50px", marginRight: "10px" }}
              /> */}
            </Button>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default IconSelect;
