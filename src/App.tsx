import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import DashboardInfoCard from './components/dashboard-components/dashboardInforCard/DashboardInfoCard';

import Tabs from './components/tabs/Tabs';
import Objective from './components/dashboard-components/objective/Objective';

function App() {
  // Sample data array
const cardDataArray = [
  {
    title: "All KPI'S",
    number: 10,
    text: "Updated 5 min ago",
  },
  {
    title: "RED KPI'S",
    number: 18,
    text: "Updated 5 min ago",
  },
  {
    title: "OBJECTIVES",
    number: 30,
    text: "Updated 5 min ago",
  },
  {
    title: "MIDTERM SCORE",
    number: 30,
    text: "Updated 5 min ago",
  },
  {
    title: "FINALE SCORE",
    number: 30,
    text: "Updated 5 min ago",
  },
  // Add more data as needed
];
 
 const objectives = [
   {
     content: "Objective 1 content",
     rating: 4,
     smallCardContent: "Small card 1 content",
   },
   {
     content: "Objective 2 content",
     rating: 3,
     smallCardContent: "Small card 2 content",
   },
   {
     content: "Objective 3 content",
     rating: 5,
     smallCardContent: "Small card 3 content",
   },
   {
     content: "Objective 3 content",
     rating: 5,
     smallCardContent: "Small card 3 content",
   },
   {
     content: "Objective 3 content",
     rating: 5,
     smallCardContent: "Small card 3 content",
   },
 ];

    const [currentTab, setCurrentTab] = useState("Home");
    // Define the tabs you want to display
    const tabs = ["Home", "About", "Services", "Contact"];
  return (
    <div className="App">
      <Grid container spacing={2}>
        {cardDataArray.map((card, index) => (
          <Grid item xs={12} md={5} lg={2} key={index}>
            {/* Pass individual card data as props */}
            <DashboardInfoCard
              title={card.title}
              number={card.number}
              text={card.text}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <div>
            <Tabs tabs={tabs} tab={currentTab} setTab={setCurrentTab} />
            {/* Render content based on the selected tab */}
            {currentTab === "Home" && (
              <div>
                <h2>Home Content</h2>
                <p>Welcome to the home page!</p>
              </div>
            )}
            {currentTab === "About" && (
              <div>
                <h2>About Content</h2>
                <p>Learn more about us!</p>
              </div>
            )}
            {currentTab === "Services" && (
              <div>
                <h2>Services Content</h2>
                <p>Explore our services!</p>
              </div>
            )}
            {currentTab === "Contact" && (
              <div>
                <h2>Contact Content</h2>
                <p>Get in touch with us!</p>
              </div>
            )}
          </div>
        </Grid>
        <Grid
          container
          style={{
            backgroundColor: " #3CB2C9", // Background color
            display: "flex",
            justifyContent: "center", // Center content horizontally
            alignItems: "center", // Center content vertically
            padding: "20px", // Add padding,
          }}>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center", // Center content horizontally
              // minHeight: "100vh", // Ensure the container takes up the full viewport height
              backgroundColor: "red", // Set display to flex for centering
              alignItems: "center", // Center vertically
              padding: "20px", // Add padding
              marginLeft: "20px",
            }}>
            <Objective title="Objectives" objectives={objectives} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
