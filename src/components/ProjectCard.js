import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ projectName, projectLead, description, progress }) => {
    return (
        <div className="project-card">
            <h3>{projectName}</h3>
            <p>
                <strong>Project Lead:</strong> {projectLead}
            </p>
            <p>{description}</p>
            <div className="additional-details">
                <h4>Additional Details</h4>
                <p>Placeholder content related to the project...</p>
            </div>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width: `${progress}%`}}>{progress}% Complete</div>
            </div>
            <button>View Project</button>
        </div>
    );
};

ProjectCard.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectLead: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
};

export default ProjectCard;
