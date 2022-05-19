import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import mountains from "../../data/mountains.json";



function TrailCard({ trail, index }) {

  function getImgURL(hiking_environment) { 
    let trail_img='';
    if (hiking_environment === "Mountain") {
      trail_img = mountains[index].img
    } else if (hiking_environment === "Valley") {
      trail_img = "https://cdn.7days.ru/pic/fd3/747016/16034/76.jpg";
    } else if (hiking_environment === "Alpine") { 
      trail_img =
        "https://img0.oastatic.com/img2/27187996/max/aletschgletscher-view-point-eggishorn.jpg";
    }
    return trail_img;
  }

  return (
    <Card
      sx={{ minWidth: 220, maxWidth: 345, minHeight: 420 }}
      className="mb-4"
      style={{ margin: "auto" }}
    >
      <CardMedia
        component="img"
        height="240"
        image={getImgURL(trail.hiking_environment)}
        alt=" image"
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          {trail.name}
        </Typography> */}

        <Typography mb={1} variant="h6" color="text.secondary" component="div">
          {trail.country}, {trail.continent}
        </Typography>
        {/* <Typography mb={1} variant="body2" color="text.secondary">
          {trail.description}
        </Typography> */}
        <Typography mb={1} variant="body2" color="text.secondary">
          <strong>Duration: {Math.floor(trail.moving_time * 24)} hours</strong>
        </Typography>
        <Typography mb={1} variant="body2" color="text.secondary">
          <strong> Difficulty: Level {trail.difficulty}</strong>
        </Typography>
        <Typography mb={1} variant="body2" color="text.secondary">
          <strong>Length 3d: {Math.floor(trail.length_3d)} KM</strong>
        </Typography>
        <Typography mb={1} variant="body2" color="text.secondary">
          <strong>Maximum Elevation: {trail.max_elevation} meter</strong>
        </Typography>
        <Typography mb={1} variant="body2" color="text.secondary">
          <strong>Minimum Elevation: {trail.min_elevation} meter</strong>
        </Typography>
      </CardContent>
      {/* <CardActions style={{ justifyContent: "space-around" }}>
          <Button disabled style={{ color: "#563d7c" }} size="medium">
            Duration: {trail.duration}
          </Button>
          <Button disabled style={{ color: "#563d7c" }} size="medium">
            Difficulty: {trail.difficulty}
          </Button>
        </CardActions> */}
    </Card>
  );
}

export default TrailCard;
