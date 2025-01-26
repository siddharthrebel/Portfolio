import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ id, title, description, image, link, tags = [] }) => {
  return (
    <div className="project-card" data-aos="fade-up">
      <img src={image} alt={title} className="project-image" loading="lazy" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {/* Safely map over tags */}
          {tags && tags.length > 0 ? (
            tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))
          ) : (
            <span className="tag">No Tags</span> // Display fallback if no tags are provided
          )}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;