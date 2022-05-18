import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function TrailCard({trail}) {
    return (
      <Card sx={{ maxWidth: 345 }} className="mb-4" style={{ margin: "auto" }}>
        <CardMedia
          component="img"
          height="140"
          image={trail.picture}
          alt="pet image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {trail.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {trail.type}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "space-between" }}>
          {/* <Button disabled style={{ color: "#563d7c" }} size="medium">
            {trail.adoptionStatus}
          </Button> */}
          {/* <Button
            size="medium"
            // variant="outlined"
            style={{ backgroundColor: "#491598be", color: "white" }}
            onClick={() => navigate("/pet/" + pet.petId)}
          >
            See More
          </Button> */}
        </CardActions>
      </Card>
    );
}

export default TrailCard;