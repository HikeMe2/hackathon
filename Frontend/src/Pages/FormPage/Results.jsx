import React from "react";
import TrailCard from "./TrailCard";

function Results({trails}) {

    return (
      <>
        {trails.length > 0 &&
          trails.map((element, index) => (
            <TrailCard trail={element} key={index} />
          ))}
        {trails.length === 0 && <h3>No such results</h3>}
      </>
    );
}

export default Results;