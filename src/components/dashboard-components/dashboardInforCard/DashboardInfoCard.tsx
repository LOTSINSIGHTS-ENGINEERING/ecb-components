// DashboardInfoCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./DashboardInfoCard.css"; // Import the CSS file

interface DashboardInfoCardProps {
  title: string;
  number: number;
  text: string;
}

const getNumberColorClass = (number: number): string => {
  if (number > 50) {
    return "green";
  } else if (number < 30) {
    return "red";
  } else {
    return "blue";
  }
};

const DashboardInfoCard: React.FC<DashboardInfoCardProps> = ({
  title,
  number,
  text,
}) => {
  const numberColorClass = getNumberColorClass(number);

  return (
    <Card elevation={1}className="dashboard-info-card">
      <CardContent>
        <Typography variant="h5" component="div" className="title-style">
          {title}
        </Typography>
        <Typography
          variant="h3"
          component="div"
          className={numberColorClass}
          style={{ margin: "10px 0" }}>
          {number}
        </Typography>
        <Typography variant="body2" className="text-style">
          {text}
        </Typography>
        <Button variant="contained" color="primary" className="view-button">
          View
        </Button>
      </CardContent>
    </Card>
  );
};

export default DashboardInfoCard;
