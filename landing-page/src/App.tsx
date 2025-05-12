import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import Background from "./components/Background.tsx";
import P5Practice from "./components/P5Practice.tsx";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* <Background></Background> */}
      <P5Practice></P5Practice>
      <Container
        style={{
          zIndex: 10,
          position: "relative",
          height: "100%",
        }}
        className="p-2"
      >
        <Row>
          <Col
            xs={3}
            lg={2}
            className=" d-flex justify-content-start align-items-center"
          >
            <Button variant="warning" >
              <CiMenuBurger />
            </Button>
          </Col>
          <Col
            lg={10}
            xs={9}
            className="d-flex justify-content-end align-items-center"
          >
            <h2>PNK</h2>
          </Col>
        </Row>
        <Row
          style={{
            height: "50%",
          }}
        >
          <Col className="d-flex justify-content-center align-items-center">
            <h1
              style={{
                fontSize: "100px",
              }}
            >
              By Community, <br></br> For Community
            </h1>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            className=" d-flex justify-content-center align-items-center"
          >
            <Link
              style={{
                fontSize: "30px",
                color: "lime",
              }}
              to={"/"}
            >
              Explore {"->"}
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
