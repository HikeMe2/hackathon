import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
// mountain_img: https://geographical.co.uk/media/k2/items/cache/852c2fa5e5468761c3ae8b796ca9be85_XL.jpg
// valley_img: https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/cover-image-of-Valleys-In-Kashmir_18th-jan.jpg
// Alpine_img:https://www.backpacker.com/wp-content/uploads/2017/12/bp0118feat_switz_agefotovf12930854.jpg

function TrailCard({ trail }) {

  function getImgURL(hiking_environment) { 
    let trail_img='';
    if (hiking_environment === "Mountain") {
      trail_img =
        "https://files.slack.com/files-pri/T02SUM6SV7F-F03GTHMH448/mountain.jpeg";
    } else if (hiking_environment === "Valley") {
      trail_img =
        "https://files.slack.com/files-pri/T02SUM6SV7F-F03FP7EJABZ/valley.jpeg";
    } else if (hiking_environment === "Alpine") { 
      trail_img =
        "https://files.slack.com/files-pri/T02SUM6SV7F-F03FX6749V4/alpine.jpeg";
    }
    return trail_img;
  }

  return (
    <Card
      sx={{ minWidth: 220, maxWidth: 345, minHeight: 620 }}
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
        <Typography gutterBottom variant="h5" component="div">
          {trail.name}
        </Typography>

        <Typography mb={1} variant="h6" color="text.secondary" component="div">
          {trail.location}
        </Typography>
        <Typography mb={1} variant="body2" color="text.secondary">
          {trail.description}
        </Typography>
        <Typography mb={1} variant="body2" color="text.secondary">
          <strong>Duration: {trail.duration}</strong>
        </Typography>
        <Typography mb={1} variant="body2" color="text.secondary">
          <strong> Difficulty: Level {trail.difficulty}</strong>
        </Typography>
        <Typography mb={1} variant="body2" color="text.secondary">
          <strong>Length: {trail.length} KM</strong>
        </Typography>
        <Typography mb={1} variant="body2" color="text.secondary">
          <strong> Elevation: {trail.elevation} meter</strong>
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
