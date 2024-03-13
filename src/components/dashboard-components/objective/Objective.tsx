import React from "react";
import { Grid } from "@mui/material";
import ObjectiveCard from "./ObjectiveCard";

interface ObjectiveProps {
  title: string;
  objectives: {
    content: string;
    rating: number;
    smallCardContent: string;
  }[];
}

const ObjectiveTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div
      style={{
        color: "#093545",
        fontSize: "42px",
        fontWeight: 700,
        marginBottom: "10px",
      }}>
      <h2>{title}</h2>
    </div>
  );
};

const Objective: React.FC<ObjectiveProps> = ({ title, objectives }) => {
  return (
    <div
      style={{
        backgroundColor: "green",
        marginRight: "20px",
        display: "flex",
        justifyContent: "center",
      }}>
      <ObjectiveTitle title={title} />
      <Grid container spacing={2}>
        {objectives.map((objective, index) => (
          <Grid item xs={10} sm={6} md={2} key={index}>
            <ObjectiveCard
              content={objective.content}
              rating={objective.rating}
              smallCardContent={objective.smallCardContent}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Objective;
