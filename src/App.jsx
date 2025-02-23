import React from "react";
import organizations from './organizations';
import OrganizationCard from "./components/OrganizationCard.jsx";
import './App.css';

const App = () => {

  return (
    <div className="App">
      <h1>
        Volunteering Opportunities
      </h1>
      <div className="grid-container">
        {organizations.map((org, index) => (
          <OrganizationCard organization={org} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App
