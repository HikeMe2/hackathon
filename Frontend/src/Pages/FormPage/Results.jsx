import React from "react";
import { Col } from "react-bootstrap";
import TrailCard from "./TrailCard";

function Results({trails}) {

    return (
      <>
        {trails.length > 0 &&
          trails.map((element, index) => (
            <Col key={index}>
              <TrailCard trail={element} index={ index} />
            </Col>
          ))}
        {/* {trails.length === 0 && <h3>No such results</h3>} */}
      </>
    );
}

export default Results;