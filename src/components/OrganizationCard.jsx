import React from 'react';

const OrganizationCard = ({organization}) => {
    return (
        <div className="organization-card">
            <img src={"/" + organization.image} alt={organization.name} className="organization-image" />
            <h3>{organization.name}</h3>
            <p>{organization.cause}</p>
            <button onClick={() => window.location.href = organization.link}>Learn More</button>
        </div>
    ) 
}
export default OrganizationCard