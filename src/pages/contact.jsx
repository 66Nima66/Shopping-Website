import React from "react";
import "./contact.css";
import nimaImage from "../assets/products/nima.jpg"
import michaelImage from "../assets/products/michael.jpg"
import ericImage from "../assets/products/eric.jpg"
import oliverImage from "../assets/products/oliver.jpg"
const Contact = () => {
  // Sample data for team members
  const teamMembers = [
    {
      id: 1,
      name: "Nima Bahrami",
      title: "Lead Developer",
      imageUrl: nimaImage,
    },
    {
      id: 2,
      name: "Michael Cassidy",
      title: "Backend Developer",
      imageUrl: michaelImage,
    },
    {
      id: 3,
      name: "Eric Beaver",
      title: "Junior Developer",
      imageUrl: ericImage,
    },
    {
      id: 4,
      name: "Oliver Aschenbrenner",
      title: "Junior Developer",
      imageUrl: oliverImage,
    },
  ];

  return (
    <div>
      <h2></h2>
      <div className="team-member">
        <img src={teamMembers[0].imageUrl} alt={teamMembers[0].name} />
        <h3>{teamMembers[0].name}</h3>
        <p>{teamMembers[0].title}</p>
      </div>
      <div className="team-members">
        {teamMembers.slice(1).map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.imageUrl} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
