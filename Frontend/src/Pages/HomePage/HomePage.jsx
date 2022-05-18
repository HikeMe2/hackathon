import { Container } from "react-bootstrap";
import "./homePage.css";

function HomePage(props) {
  return (
    <div>
      <Container className="home" style={{ textAlign: "-webkit-center", position: "relative" }}>
        <h1 className="mb-5">Welcome to Hike Me 2</h1>
        <p>
          Hike Me To Travel is a app dedicated to travelers who love to hike.
          It’s for the travelers who strive to integrate the great outdoors into
          their travel plans. This website brings you the best hiking trails in
          the world, Whether you’re a day hiker or long-distance trekker, you
          can use our in-depth guides and itineraries to plan your next
          adventure.
        </p>
      </Container>
    </div>
  );
}

export default HomePage;
