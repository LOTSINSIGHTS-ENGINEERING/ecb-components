import React from "react";
import { Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

interface ObjectiveCardProps {
  content: string;
  rating: number;
  smallCardContent: string; // New prop for small card content
}

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({
  content,
  rating,
  smallCardContent,
}) => {
  return (
    <Grid container spacing={2}>
      {/* Main ObjectiveCard */}
      <Grid item xs={12}>
        <Card
          style={{
            backgroundColor: "#99E7FF",
            borderRadius: "10px",
            minHeight: "200px",
          }}>
          <CardContent>
            <Typography>{content}</Typography>
            <div style={{ marginTop: "10px" }}>
              <IconButton>
                <ThumbUpIcon />
              </IconButton>
              <IconButton>
                <ThumbDownIcon />
              </IconButton>
              <span>{rating}</span>
            </div>
          </CardContent>
        </Card>
      </Grid>
      {/* Small Card */}
      <Grid item xs={12}>
        <Card
          style={{
            backgroundColor: "#99E7FF",
            borderRadius: "10px",
          
          }}>
          <CardContent>
            <Typography>{smallCardContent}</Typography>{" "}
            {/* Use prop for small card content */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ObjectiveCard;
