import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techList = technologies.map((technology) => (
    <span key={technology}>{technology}</span>
  ));

  return (
    <div>
      <h3>{name}</h3>
      <p>{about}</p>
      <h4>Technologies Used:</h4>
      <div className="technologies">{techList}</div>
    </div>
  );
}

export default ProjectItem;
