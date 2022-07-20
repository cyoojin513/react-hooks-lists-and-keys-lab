import React from "react";

function ProjectItem({ name, about, technologies }) {
  const eachTechItem = technologies.map((obj) => {
    return <span key={ obj }>{ obj }</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{ eachTechItem }</div>
    </div>
  );
}

export default ProjectItem;
