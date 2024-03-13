import React from "react";
import { Grid } from "@mui/material";
import "./Tabs.css"; // Import your CSS file

interface ITabsProps {
  tabs: string[]; // Accept an array of tab names
  tab: string; // Current active tab
  setTab: React.Dispatch<React.SetStateAction<string>>; // Set the active tab
}

const Tabs: React.FC<ITabsProps> = (props) => {
  const activeClass = (tabName: string) => {
    return props.tab === tabName ? "active" : "";
  };

  return (
    <div className="tabs-container" style={{ margin: "0 20px" }}>
      <Grid
        container
        spacing={2}
        style={{ backgroundColor: "#fff", padding: "10px" }}>
        {props.tabs.map((tabName, index) => (
          <Grid
            item
            key={index}
            xs={6} // 2 tabs per row for extra-small screens
            sm={3} // 4 tabs per row for small screens
            md={2} // 6 tabs per row for medium screens
            lg={1} // 12 tabs per row for large screens
            className={activeClass(tabName)}
            onClick={() => props.setTab(tabName)}
            style={{ textAlign: "center" }}>
            <a href="#" className="tab-link">
              {tabName}
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Tabs;
